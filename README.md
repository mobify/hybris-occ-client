# hybris-occ-client

```

    __            __           _                                               __ _               __ 
   / /_   __  __ / /_   _____ (_)_____        ____   _____ _____        _____ / /(_)___   ____   / /_
  / __ \ / / / // __ \ / ___// // ___/______ / __ \ / ___// ___/______ / ___// // // _ \ / __ \ / __/
 / / / // /_/ // /_/ // /   / /(__  )/_____// /_/ // /__ / /__ /_____// /__ / // //  __// / / // /_  
/_/ /_/ \__, //_.___//_/   /_//____/        \____/ \___/ \___/        \___//_//_/ \___//_/ /_/ \__/  
       /____/                                                                                        

```
[![NPM](https://nodei.co/npm/hybris-occ-client.png)](https://nodei.co/npm/hybris-occ-client/)
[![CircleCI](https://circleci.com/gh/mobify/hybris-occ-client/tree/develop.svg?style=svg)](https://circleci.com/gh/mobify/hybris-occ-client/tree/develop)

> A JavaScript Client library crafted for Hybris Commerce OCC API.

## ⚒ Installation
This library is distributed on `npm`, in order to add it as a dependency, run the following command:
```shell
npm install hybris-occ-client --save
```

## 💡 Usage

### Example: create your hybris client instance

```javascript
import * as hybris from 'hybris-occ-client'

const config = {
    basePath: "https://api-example.hybris.com/rest/v2/apparel-uk",
    defaultHeaders: {},
    timeout: 60000,
    cache: true,
    enableCookies: false
    access_token: your_OAuth_access_token
}

// Override the default instance with your configuration
hybris.ApiClient.instance = new hybris.ApiClient(config)
const client = hybris.ApiClient.instance
```

## 📖 Documentation

You can find the complete documentation for endpoints and models at [here](https://mobify.github.io/hybris-occ-client/)

## ✅ Testing

Because Hybris OCC is not public available, you need to have a running instance that you can test against. In the test folder, there is a file `example.env.json` that has the example configuration for your environment. Simply create a file `env.json`, and fill out the required fields.

Example: 
```json
{
  "basePath": "https://<Your Hybris Instance>/rest/v2/apparel-uk",
  "OAuth": {
    "authorizationUrl": "https://<Your Hybris Instance>/authorizationserver/oauth/token",
    "client_id": "mobile_android",
    "client_secret": "secret",
    "grant_type": "client_credentials"
  }
}
```

## 👥 Owner

This project is open sourced and actively maintained by [Mobify](https://github.com/mobify).
We will make an effort to support the library, but we reserve the right to make incompatible changes when necessary.


## 🏅 Contributors

- [@jeremywiebe](https://github.com/jeremywiebe)
- [@bendvc](https://github.com/bendvc)
- [@kevinxh](https://github.com/kevinxh)
