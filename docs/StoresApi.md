# Occ.StoresApi

All URIs are relative to *http://api-example.hybris.com/rest/v2/DefaultParameterValue/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStores**](StoresApi.md#getStores) | **GET** /stores | Stores
[**getStore**](StoresApi.md#getStore) | **GET** /stores/{storeId} | getStore


<a name="getStores"></a>
# **getStores**
> StoreFinderSearchPage getStores(opts)

Stores

Lists all store locations that are near the location specified in a query or based on latitude and longitude. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.StoresApi();

let opts = { 
  'query': "query_example", // String | Location in natural language i.e. city or country.
  'latitude': "latitude_example", // String | Coordinate that specifies the north-south position of a point on the Earth's surface.
  'pageSize': "pageSize_example", // String | The number of results returned per page.
  'accuracy': "accuracy_example", // String | Accuracy in meters.
  'sort': "sort_example", // String | Sorting method applied to the return results.
  'currentPage': "currentPage_example", // String | The current result page requested.
  'radius': "radius_example", // String | Radius in meters. Max value: 40075000.0 (Earth's perimeter).
  'fields': "fields_example", // String | Response configuration (list of fields, which should be returned in response)
  'longitude': "longitude_example" // String | Coordinate that specifies the east-west position of a point on the Earth's surface.
};
apiInstance.getStores(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Location in natural language i.e. city or country. | [optional] 
 **latitude** | **String**| Coordinate that specifies the north-south position of a point on the Earth&#39;s surface. | [optional] 
 **pageSize** | **String**| The number of results returned per page. | [optional] 
 **accuracy** | **String**| Accuracy in meters. | [optional] 
 **sort** | **String**| Sorting method applied to the return results. | [optional] 
 **currentPage** | **String**| The current result page requested. | [optional] 
 **radius** | **String**| Radius in meters. Max value: 40075000.0 (Earth&#39;s perimeter). | [optional] 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 
 **longitude** | **String**| Coordinate that specifies the east-west position of a point on the Earth&#39;s surface. | [optional] 

### Return type

[**StoreFinderSearchPage**](StoreFinderSearchPage.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStore"></a>
# **getStore**
> PointOfService getStore(storeId, opts)

getStore

Returns store location based on its unique name. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.StoresApi();

let storeId = "storeId_example"; // String | Store identifier (currently store name)

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.getStore(storeId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeId** | **String**| Store identifier (currently store name) | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**PointOfService**](PointOfService.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

