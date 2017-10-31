# Occ.ForgottenpasswordtokensApi

All URIs are relative to *http://api-example.hybris.com/rest/v2/DefaultParameterValue/*

Method | HTTP request | Description
------------- | ------------- | -------------
[****](ForgottenpasswordtokensApi.md#) | **POST** / | 


<a name="postForgottenPasswordToken"></a>
# **** postForgottenPasswordToken
> postForgottenPasswordToken(opts)



Generates a token to restore customer&#39;s forgotten password.  Security: Allowed only for client or trusted client 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.ForgottenpasswordtokensApi();

let opts = { 
  'userId': "userId_example" // String | Customer's user id. Customer user id is case insensitive.
};
apiInstance.postForgottenPasswordToken(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| Customer&#39;s user id. Customer user id is case insensitive. | [optional] 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

