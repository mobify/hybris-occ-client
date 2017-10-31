# Occ.DeliverycountriesApi

All URIs are relative to *http://api-example.hybris.com/rest/v2/DefaultParameterValue/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDeliveryCountries**](DeliverycountriesApi.md#getDeliveryCountries) | **GET** /deliverycountries | getDeliveryCountries


<a name="deliverycountries"></a>
# **deliverycountries**
> CountryListWsDTO deliverycountries(opts)

Deliverycountries

Lists all supported delivery countries for the current store. The list is sorted alphabetically. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.DeliverycountriesApi();

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.getDeliveryCountries(opts).then((data) => {
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

[**CountryListWsDTO**](CountryListWsDTO.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

