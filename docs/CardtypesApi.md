# Occ.CardtypesApi

All URIs are relative to *http://api-example.hybris.com/rest/v2/DefaultParameterValue/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cardtypes**](CardtypesApi.md#cardtypes) | **GET** /cardtypes | Cardtypes


<a name="cardtypes"></a>
# **cardtypes**
> CardTypeListWsDTOModel cardtypes(opts)

Cardtypes

Lists supported payment card types. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.CardtypesApi();

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.cardtypes(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**CardTypeListWsDTOModel**](CardTypeListWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

