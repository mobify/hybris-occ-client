# Occ.CatalogsApi

All URIs are relative to *http://api-example.hybris.com/rest/v2/DefaultParameterValue/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**catalogs**](CatalogsApi.md#catalogs) | **GET** /catalogs | Catalogs
[**catalogsByCatalogId**](CatalogsApi.md#catalogsByCatalogId) | **GET** /catalogs/{catalogId} | CatalogsByCatalogId
[**catalogsByCatalogIdAndCatalogVersionId**](CatalogsApi.md#catalogsByCatalogIdAndCatalogVersionId) | **GET** /catalogs/{catalogId}/{catalogVersionId} | CatalogsByCatalogIdAndCatalogVersionId
[**catalogsCategoriesCategoryIdByCatalogId**](CatalogsApi.md#catalogsCategoriesCategoryIdByCatalogId) | **GET** /catalogs/{catalogId}/{catalogVersionId}/categories/{categoryId} | CatalogsCategoriesCategoryIdByCatalogId


<a name="catalogs"></a>
# **catalogs**
> CatalogListWsDTOModel catalogs(opts)

Catalogs

Returns all catalogs with versions defined for the base store. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.CatalogsApi();

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.catalogs(opts).then((data) => {
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

[**CatalogListWsDTOModel**](CatalogListWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="catalogsByCatalogId"></a>
# **catalogsByCatalogId**
> CatalogWsDTOModel catalogsByCatalogId(catalogId, opts)

CatalogsByCatalogId

Returns a information about a catalog based on its ID, along with versions defined for the current base store. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.CatalogsApi();

let catalogId = "catalogId_example"; // String | Catalog identifier

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.catalogsByCatalogId(catalogId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| Catalog identifier | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**CatalogWsDTOModel**](CatalogWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="catalogsByCatalogIdAndCatalogVersionId"></a>
# **catalogsByCatalogIdAndCatalogVersionId**
> CatalogVersionWsDTOModel catalogsByCatalogIdAndCatalogVersionId(catalogId, catalogVersionId, opts)

CatalogsByCatalogIdAndCatalogVersionId

Returns information about catalog version that exists for the current base store. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.CatalogsApi();

let catalogId = "catalogId_example"; // String | Catalog identifier

let catalogVersionId = "catalogVersionId_example"; // String | Catalog version identifier

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.catalogsByCatalogIdAndCatalogVersionId(catalogId, catalogVersionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| Catalog identifier | 
 **catalogVersionId** | **String**| Catalog version identifier | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**CatalogVersionWsDTOModel**](CatalogVersionWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="catalogsCategoriesCategoryIdByCatalogId"></a>
# **catalogsCategoriesCategoryIdByCatalogId**
> CategoryHierarchyWsDTOModel catalogsCategoriesCategoryIdByCatalogId(catalogId, catalogVersionId, categoryId, opts)

CatalogsCategoriesCategoryIdByCatalogId

Returns information about category that exists in a catalog version available for the current base store. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.CatalogsApi();

let catalogId = "catalogId_example"; // String | Catalog identifier

let catalogVersionId = "catalogVersionId_example"; // String | Catalog version identifier

let categoryId = "categoryId_example"; // String | Category identifier

let opts = { 
  'pageSize': "pageSize_example", // String | The number of results returned per page.
  'currentPage': "currentPage_example", // String | The current result page requested.
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.catalogsCategoriesCategoryIdByCatalogId(catalogId, catalogVersionId, categoryId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| Catalog identifier | 
 **catalogVersionId** | **String**| Catalog version identifier | 
 **categoryId** | **String**| Category identifier | 
 **pageSize** | **String**| The number of results returned per page. | [optional] 
 **currentPage** | **String**| The current result page requested. | [optional] 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**CategoryHierarchyWsDTOModel**](CategoryHierarchyWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

