# Occ.ExportApi

All URIs are relative to *http://api-example.hybris.com/rest/v2/DefaultParameterValue/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportProducts**](ExportApi.md#exportProducts) | **GET** /export/products | ExportProducts


<a name="exportProducts"></a>
# **exportProducts**
> ProductList exportProducts(opts)

ExportProducts

Used for product export. Depending on the timestamp parameter, it can return all products or only products modified after the given time.  Security: Allowed only for trusted client 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.ExportApi();

let opts = { 
  'catalog': "catalog_example", // String | Catalog from which get products. Must be provided along with version.
  'pageSize': "pageSize_example", // String | The number of results returned per page.
  'fields': "fields_example", // String | Response configuration (list of fields, which should be returned in response)
  'currentPage': "currentPage_example", // String | The current result page requested.
  'version': "version_example", // String | Catalog version. Must be provided along with catalog.
  'timestamp': "timestamp_example" // String | When this parameter is set, only products modified after given time will be returned.This parameter should be in RFC-8601 format.
};
apiInstance.exportProducts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalog** | **String**| Catalog from which get products. Must be provided along with version. | [optional] 
 **pageSize** | **String**| The number of results returned per page. | [optional] 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 
 **currentPage** | **String**| The current result page requested. | [optional] 
 **version** | **String**| Catalog version. Must be provided along with catalog. | [optional] 
 **timestamp** | **String**| When this parameter is set, only products modified after given time will be returned.This parameter should be in RFC-8601 format. | [optional] 

### Return type

[**ProductList**](ProductList.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

