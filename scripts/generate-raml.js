
const version = process.argv[2] || require('../package.json').target
const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const raml = fs.readFileSync(`src/${version}/main.raml`).toString()
const html = fs.readFileSync(`src/${version}/main.html`, 'utf8') // beautify main.html before reading, single line too long
const $ = cheerio.load(html, {decodeEntities: false})

// const outputLocation = `${version}-output.raml`

const pattern = /(?:request|response)\.(\..*(GET|POST|PUT|PATCH|DELETE))\./

raml.split('\n')
    .filter((line) => pattern.test(line))
    .forEach((line) => {
        const fileName = line.split('!include ')[1]
        const method = line.match(/(?:GET|POST|PUT|PATCH|DELETE)/)[0]

        const id = line.match(pattern)[1]
            .replace(/\./g, '_')
            .replace(method, method.toLowerCase())

        const schema = $(`#${id}`).find('code').html()

        const location = path.join(['../dist/', fileName])

        fs.writeFile(location, schema, 'utf8', (err) => {
            if (err) {
                throw new Error(err)
            } else {
                console.log(`Description file is generated: ${location}`)
            }
        })
    }, raml)

