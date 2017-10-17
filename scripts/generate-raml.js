
const version = process.argv[2] || require('../package.json').target
const fs = require('fs')
const cheerio = require('cheerio')
const raml = fs.readFileSync(`src/${version}/main.raml`).toString()
const html = fs.readFileSync(`src/${version}/main.html`, 'utf8') // beautify main.html before reading, single line too long
const $ = cheerio.load(html, {decodeEntities: false})

const outputLocation = `${version}-output.raml`

const pattern = /(?:request|response)\.(\..*(GET|POST|PUT|PATCH|DELETE))\./

const output = raml.split('\n')
    .filter((line) => pattern.test(line))
    .reduce((accumulator, string) => {
        const link = string.split(':')[1]
        const method = string.match(/(?:GET|POST|PUT|PATCH|DELETE)/)[0]

        const id = string.match(pattern)[1]
            .replace(/\./g, '_')
            .replace(method, method.toLowerCase())

        const schema = $(`#${id}`).find('code').html()
        return accumulator.replace(link, schema)
    }, raml)

fs.writeFile(outputLocation, output, 'utf8', (err) => {
    if (err) {
        return console.log(err);
    } else {
        console.log(`Complete Raml file for Hybris OCC is generated: ${outputLocation}`)
    }
})
