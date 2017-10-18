
const version = process.argv[2] || require('../package.json').target
const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const raml = fs.readFileSync(`src/${version}/main.raml`).toString()
const html = fs.readFileSync(`src/${version}/main.html`, 'utf8') // beautify main.html before reading, single line too long
const orderhtml = fs.readFileSync(`src/${version}/order.html`, 'utf8') // beautify main.html before reading, single line too long
const $ = cheerio.load(html, {decodeEntities: false})
const $order = cheerio.load(orderhtml, {decodeEntities: false})

const pattern = /(?:request|response)\.(\..*(GET|POST|PUT|PATCH|DELETE))\./

//combine HTMLs
//NOTE: RAML files are manually combined
$('.container').append($order('.container').html())

raml.split('\n')
    .filter((line) => pattern.test(line))
    .forEach((line) => {
        const fileName = line.split('!include ')[1]
        const method = line.match(/(?:GET|POST|PUT|PATCH|DELETE)/)[0]

        const id = line.match(pattern)[1]
            .replace(/\./g, '_')
            .replace(method, method.toLowerCase())

        let schema = $(`#${id}`).find('code').html() 
            || $(`#${id.slice(1)}`).find('code').html()

        const title = JSON.parse(schema).title

        // Fix a bug from source file provided by Hybris
        // if a property of the schema is refering to itself
        // change ref to '#'
        schema = schema.replace(`#/definitions/${title}`, '#')
        
        const location = path.join('dist/', fileName)

        fs.writeFile(location, schema, 'utf8', (err) => {
            if (err) {
                throw new Error(err)
            } else {
                console.log(`Description file is generated: ${location}`)
            }
        })
    }, raml)
