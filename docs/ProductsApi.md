# Occ.ProductsApi

All URIs are relative to *http://api-example.hybris.com/rest/v2/DefaultParameterValue/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProduct**](ProductsApi.md#getProduct) | **GET** /products/{productCode} | getProduct
[**getProductExpressupdate**](ProductsApi.md#getProductExpressupdate) | **GET** /products/expressupdate | getProductExpressupdate
[**getProductReferences**](ProductsApi.md#getProductReferences) | **GET** /products/{productCode}/references | getProductReferences
[**getProductReviews**](ProductsApi.md#getProductReviews) | **GET** /products/{productCode}/reviews | getProductReviews
[**postProductReview**](ProductsApi.md#postProductReview) | **POST** /products/{productCode}/reviews | postProductReview
[**getProductSearch**](ProductsApi.md#getProductSearch) | **GET** /products/search | ProductsSearch
[**getProductStock**](ProductsApi.md#getProductStock) | **GET** /products/{productCode}/stock | ProductsStockByProductCode
[**getProductsStockByProductCodeAndStoreName**](ProductsApi.md#getProductsStockByProductCodeAndStoreName) | **GET** /products/{productCode}/stock/{storeName} | getProductsStockByProductCodeAndStoreName
[**getProductSuggestions**](ProductsApi.md#getProductSuggestions) | **GET** /products/suggestions | getProductSuggestions


<a name="getProduct"></a>
# **getProduct**
> ProductOCC1 getProduct(productCode, opts)

getProduct

Returns details of a single product according to a product code. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.ProductsApi();

let productCode = "productCode_example"; // String | Product identifier

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.getProduct(productCode, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCode** | **String**| Product identifier | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**ProductOCC1**](ProductOCC1.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductExpressupdate"></a>
# **getProductExpressupdate**
> ProductExpressUpdateElementListWsDTO getProductExpressupdate(opts)

getProductExpressupdate

Returns products added to the express update feed. Returns only elements updated after the provided timestamp.The queue is cleared using a defined cronjob.  Security: Permitted only for trusted client 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.ProductsApi();

let opts = { 
  'catalog': "catalog_example", // String | Only products from this catalog are returned. Format: <b>catalogId:catalogVersion</b>
  'fields': "fields_example", // String | Response configuration (list of fields, which should be returned in response)
  'timestamp': "timestamp_example" // String | Only items newer than the given parameter are retrieved from the queue. This parameter should be in RFC-8601 format.
};
apiInstance.getProductExpressupdate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalog** | **String**| Only products from this catalog are returned. Format: &lt;b&gt;catalogId:catalogVersion&lt;/b&gt; | [optional] 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 
 **timestamp** | **String**| Only items newer than the given parameter are retrieved from the queue. This parameter should be in RFC-8601 format. | [optional] 

### Return type

[**ProductExpressUpdateElementListWsDTO**](ProductExpressUpdateElementListWsDTO.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductReferences"></a>
# **getProductReferences**
> ProductReferenceListWsDTO getProductReferences(productCode, opts)

getProductReferences

Returns references for a product with a given product code. Reference type specifies which references to return.  Security: Permitted only for trusted client 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.ProductsApi();

let productCode = "productCode_example"; // String | Product identifier

let opts = { 
  'pageSize': "pageSize_example", // String | Maximum size of returned results.
  'referenceType': "referenceType_example", // String | Reference type according to enum ProductReferenceTypeEnum
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.getProductReferences(productCode, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCode** | **String**| Product identifier | 
 **pageSize** | **String**| Maximum size of returned results. | [optional] 
 **referenceType** | **String**| Reference type according to enum ProductReferenceTypeEnum | [optional] 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**ProductReferenceListWsDTO**](ProductReferenceListWsDTO.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductReviews"></a>
# **getProductReviews**
> ReviewListWsDTO getProductReviews(productCode)

getProductReviews

Returns the reviews for a product with a given product code. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.ProductsApi();

let productCode = "productCode_example"; // String | Product identifier

apiInstance.getProductReviews(productCode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCode** | **String**| Product identifier | 

### Return type

[**ReviewListWsDTO**](ReviewListWsDTO.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postProductReview"></a>
# **postProductReview**
> ReviewOCC postProductReview(productCode, body, opts)

getProductReviews

Creates a new customer review as an anonymous user. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.ProductsApi();

let productCode = "productCode_example"; // String | Product identifier

let body = new Occ.ReviewOCC(); // ReviewOCC | 

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.postProductReview(productCode, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCode** | **String**| Product identifier | 
 **body** | [**ReviewOCC**](ReviewOCC.md)|  | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**ReviewOCC**](ReviewOCC.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductSearch"></a>
# **getProductSearch**
> ProductSearchPageWsDTO getProductSearch(opts)

ProductsSearch

Returns a list of products and additional data such as: available facets, available sorting and pagination options. It can include spelling suggestions.To make spelling suggestions work you need to: &lt;ul&gt; &lt;li&gt;Make sure enableSpellCheck on the SearchQuery is set to true. By default it should be already set to true. &lt;/li&gt; &lt;li&gt;Have indexed properties configured to be used for spellchecking.&lt;/li&gt; &lt;/ul&gt; 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.ProductsApi();

let opts = { 
  'query': "query_example", // String | Serialized query, free text search, facets.<br> The format of a serialized query: <b>freeTextSearch:sort:facetKey1:facetValue1:facetKey2:facetValue2</b>
  'pageSize': "pageSize_example", // String | The number of results returned per page.
  'sort': "sort_example", // String | Sorting method applied to the display search results.
  'currentPage': "currentPage_example", // String | The current result page requested.
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.getProductSearch(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Serialized query, free text search, facets.&lt;br&gt; The format of a serialized query: &lt;b&gt;freeTextSearch:sort:facetKey1:facetValue1:facetKey2:facetValue2&lt;/b&gt; | [optional] 
 **pageSize** | **String**| The number of results returned per page. | [optional] 
 **sort** | **String**| Sorting method applied to the display search results. | [optional] 
 **currentPage** | **String**| The current result page requested. | [optional] 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**ProductSearchPageWsDTO**](ProductSearchPageWsDTO.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductStock"></a>
# **getProductStock**
> StoreFinderStockSearchPageWsDTO getProductStock(productCode, opts)

ProductsStockByProductCode

Returns product&#39;s stock levels sorted by distance from specific location passed by free-text parameter or longitude and latitude parameters. The following two sets of parameters are available: &lt;ul&gt; &lt;li&gt;location (required), currentPage (optional), pageSize (optional) or&lt;/li&gt;&gt; &lt;li&gt;longitude (required), latitude (required), currentPage (optional), pageSize(optional).&lt;/li&gt; &lt;/ul&gt; 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.ProductsApi();

let productCode = "productCode_example"; // String | Product identifier

let opts = { 
  'latitude': "latitude_example", // String | Longitude location parameter.
  'pageSize': "pageSize_example", // String | The number of results returned per page.
  'location': "location_example", // String | Free-text location
  'currentPage': "currentPage_example", // String | The current result page requested.
  'fields': "fields_example", // String | Response configuration (list of fields, which should be returned in response)
  'longitude': "longitude_example" // String | Latitude location parameter.
};
apiInstance.getProductStock(productCode, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCode** | **String**| Product identifier | 
 **latitude** | **String**| Longitude location parameter. | [optional] 
 **pageSize** | **String**| The number of results returned per page. | [optional] 
 **location** | **String**| Free-text location | [optional] 
 **currentPage** | **String**| The current result page requested. | [optional] 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 
 **longitude** | **String**| Latitude location parameter. | [optional] 

### Return type

[**StoreFinderStockSearchPageWsDTO**](StoreFinderStockSearchPageWsDTO.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductsStockByProductCodeAndStoreName"></a>
# **getProductsStockByProductCodeAndStoreName**
> StockWsDTO getProductsStockByProductCodeAndStoreName(productCode, storeName, opts)

getProductsStockByProductCodeAndStoreName

Returns product&#39;s stock level for a particular store (POS). 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.ProductsApi();

let productCode = "productCode_example"; // String | Product identifier

let storeName = "storeName_example"; // String | Store identifier

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.getProductsStockByProductCodeAndStoreName(productCode, storeName, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCode** | **String**| Product identifier | 
 **storeName** | **String**| Store identifier | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**StockWsDTO**](StockWsDTO.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductSuggestions"></a>
# **getProductSuggestions**
> SuggestionListWsDTO getProductSuggestions(max, term, opts)

getProductSuggestions

Returns a list of all available suggestions related to a given term and limits the results to a specific value of the max parameter. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.ProductsApi();

let max = "max_example"; // String | Specifies the limit of results.

let term = "term_example"; // String | Specified term

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.getProductSuggestions(max, term, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **max** | **String**| Specifies the limit of results. | 
 **term** | **String**| Specified term | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**SuggestionListWsDTO**](SuggestionListWsDTO.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

