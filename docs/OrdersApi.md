# Occ.OrdersApi

All URIs are relative to *http://api-example.hybris.com/rest/v2/DefaultParameterValue/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrder**](OrdersApi.md#getOrder) | **GET** /orders/{code} | getOrder


<a name="getOrder"></a>
# **getOrder**
> OrderWsDTOModel getOrder(code, opts)

getOrder

Returns details of a specific order based on order GUID (Globally Unique Identifier) or order CODE. The response contains a detailed order information.  Security: Allowed only for trusted client 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.OrdersApi();

let code = "code_example"; // String | Order GUID (Globally Unique Identifier) or order CODE

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.getOrder(code, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| Order GUID (Globally Unique Identifier) or order CODE | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**OrderWsDTOModel**](OrderWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

