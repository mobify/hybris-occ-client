# Occ.FeedsApi

All URIs are relative to *http://api-example.hybris.com/rest/v2/DefaultParameterValue/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrdersStatusfeed**](FeedsApi.md#getOrdersStatusfeed) | **GET** /feeds/orders/statusfeed | getOrdersStatusfeed


<a name="getOrdersStatusfeed"></a>
# **getOrdersStatusfeed**
> OrderStatusUpdateElementListWsDTO getOrdersStatusfeed(opts)

getOrdersStatusfeed

Returns the orders the status has changed for. Returns only the elements from the current baseSite, updated after the provided timestamp.  Security: Allowed only for trusted client 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.FeedsApi();

let opts = { 
  'fields': "fields_example", // String | Response configuration (list of fields, which should be returned in response)
  'timestamp': "timestamp_example" // String | Only items newer than the given parameter are retrieved. This parameter should be in RFC-8601 format.
};
apiInstance.getOrdersStatusfeed(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 
 **timestamp** | **String**| Only items newer than the given parameter are retrieved. This parameter should be in RFC-8601 format. | [optional] 

### Return type

[**OrderStatusUpdateElementListWsDTO**](OrderStatusUpdateElementListWsDTO.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

