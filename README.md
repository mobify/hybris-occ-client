# hybris-occ-client

```

    __            __           _                                               __ _               __ 
   / /_   __  __ / /_   _____ (_)_____        ____   _____ _____        _____ / /(_)___   ____   / /_
  / __ \ / / / // __ \ / ___// // ___/______ / __ \ / ___// ___/______ / ___// // // _ \ / __ \ / __/
 / / / // /_/ // /_/ // /   / /(__  )/_____// /_/ // /__ / /__ /_____// /__ / // //  __// / / // /_  
/_/ /_/ \__, //_.___//_/   /_//____/        \____/ \___/ \___/        \___//_//_/ \___//_/ /_/ \__/  
       /____/                                                                                        

```
[![CircleCI](https://circleci.com/gh/mobify/hybris-occ-client/tree/develop.svg?style=svg)](https://circleci.com/gh/mobify/hybris-occ-client/tree/develop)

> A JavaScript Client library crafted for Hybris Commerce OCC API.

## Installation
This library is distrbuted on `npm`, In order to add it as a dependency, run the following command:
```shell
npm install hybris-occ-client --save
```

## Usage

### Single Instance
Example: fetch supported titles from Hybris OCC API

```javascript
import * as cilent from 'hybris-occ-client'

const config = {
    baseSite: "apparel-uk",
    baseUrl: "https://<Your Hybris Instance>/rest/v2",
    authorizationUrl: "https://<Your Hybris Instance>/authorizationserver/oauth/token"
    oauth: {
      client_id: 'client-side',
      grant_type: 'client_credentials',
      client_secret: 'secret'
  }
}

// This client instance will be the default instance
client.ApiClient.instance = new client.ApiClient(
    `${config.baseUrl}/${config.baseSite}`,
    config.authorizationUrl,
    config.oauth
  )

const titleApi = new client.TitlesApi()

titleApi.getTitles()
  .then((res) => console.log(titles))

```

## API documentation

You can find the complete documentation for endpoints and models at [here](https://mobify.github.io/hybris-occ-client/)

## Testing

Because Hybris OCC is not public available, you need to have a running instance that you can test against. In the test folder, there is a file `example.env.json` that has the example configuration for your environment. Simply create a file `env.json`, and fill out the required fields.

Example: 
```json
{
    "baseSite": "apparel-uk",
    "baseUrl": "https://<Your Hybris Instance>/rest/v2",
    "authorizationUrl": "https://<Your Hybris Instance>/authorizationserver/oauth/token"
}
```

## Owner

This project is open sourced and actively maintained by [Mobify](https://github.com/mobify).
We will make an effort to support the library, but we reserve the right to make incompatible changes when necessary.


## Contributors

- [@jeremywiebe](https://github.com/jeremywiebeh)
- [@kevinxh](https://github.com/kevinxh)
