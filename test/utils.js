import superagent from 'superagent'

/**
* Request the access token from authorization server
* @param ApiClient {Object} The client object
* @param oauth {Object} The OAuth object
* @param payload {Object} The payload of OAuth method
* payload could be
* 1. {String} refresh_token
* 2. {Object} {username, password}
*/
export const requestAccessToken = (instance, oauth, payload) => {
    const {
        authorizationUrl,
        client_id,
        client_secret,
        grant_type
    } = oauth

    const body = {
        client_id,
        client_secret,
        grant_type
    }

    switch (grant_type) {
        case 'client_credentials':
            break
        case 'refresh_token':
            body.refresh_token = payload
            break
        case 'password':
            body.username = payload.username
            body.password = payload.password
            break
        default:
            throw new Error(`Unknown grant type: ${grant_type}`)
    }

    return superagent.post(authorizationUrl)
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send(body)
        .then((res) => {
            instance.authentications.auth.accessToken = res.body.access_token
            Promise.resolve(res)
        })
        .catch((err) => {
            throw new Error(err)
        })
}

/**
* Remove stored access token
* @param ApiClient {Object} The client object
*/
export const clearAccessToken = (instance) => {
    instance.authentications.auth.accessToken = null
}