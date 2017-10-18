# hybris-api-js-client

The network layer powering Mobify's Integration Manager.

### Prerequisites

- Node v6
- Hybris OCC RAML and HTML file
  - Example HTML location: https://help.hybris.com/6.4.0/api/ycommercewebservices/main.html
  - Example RAML location: https://help.hybris.com/6.4.0/api/ycommercewebservices/main.raml

Put the files in `src/{version}/`
_Example: `src/6.4.0/`_

## Getting Started

```sh
git clone git@github.com:mobify/hybris-api-js-client.git
npm i
npm run generate 6.4.0(replace 6.4.0 with your version)
```
Compress `main.raml` and everything generated in `dist/` and upload the zip file to `https://apimatic.io/transformer` to convert your RAML to swagger 2.0

## Test

WIP

## Deployment

WIP
