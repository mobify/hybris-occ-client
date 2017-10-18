# Occ.ProductsApi

All URIs are relative to *http://api-example.hybris.com/rest/v2/DefaultParameterValue/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productsByProductCode**](ProductsApi.md#productsByProductCode) | **GET** /products/{productCode} | ProductsByProductCode
[**productsExpressupdate**](ProductsApi.md#productsExpressupdate) | **GET** /products/expressupdate | ProductsExpressupdate
[**productsReferencesByProductCode**](ProductsApi.md#productsReferencesByProductCode) | **GET** /products/{productCode}/references | ProductsReferencesByProductCode
[**productsReviewsByProductCode**](ProductsApi.md#productsReviewsByProductCode) | **GET** /products/{productCode}/reviews | ProductsReviewsByProductCode
[**productsReviewsByProductCode1**](ProductsApi.md#productsReviewsByProductCode1) | **POST** /products/{productCode}/reviews | ProductsReviewsByProductCode
[**productsSearch1**](ProductsApi.md#productsSearch1) | **GET** /products/search | ProductsSearch
[**productsStockByProductCode1**](ProductsApi.md#productsStockByProductCode1) | **GET** /products/{productCode}/stock | ProductsStockByProductCode
[**productsStockByProductCodeAndStoreName**](ProductsApi.md#productsStockByProductCodeAndStoreName) | **GET** /products/{productCode}/stock/{storeName} | ProductsStockByProductCodeAndStoreName
[**productsSuggestions**](ProductsApi.md#productsSuggestions) | **GET** /products/suggestions | ProductsSuggestions


<a name="productsByProductCode"></a>
# **productsByProductCode**
> ProductWsDTOModel productsByProductCode(productCode, opts)

ProductsByProductCode

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
apiInstance.productsByProductCode(productCode, opts).then((data) => {
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

[**ProductWsDTOModel**](ProductWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productsExpressupdate"></a>
# **productsExpressupdate**
> ProductExpressUpdateElementListWsDTOModel productsExpressupdate(opts)

ProductsExpressupdate

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
apiInstance.productsExpressupdate(opts).then((data) => {
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

[**ProductExpressUpdateElementListWsDTOModel**](ProductExpressUpdateElementListWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productsReferencesByProductCode"></a>
# **productsReferencesByProductCode**
> ProductReferenceListWsDTOModel productsReferencesByProductCode(productCode, opts)

ProductsReferencesByProductCode

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
apiInstance.productsReferencesByProductCode(productCode, opts).then((data) => {
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

[**ProductReferenceListWsDTOModel**](ProductReferenceListWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productsReviewsByProductCode"></a>
# **productsReviewsByProductCode**
> ReviewListWsDTOModel productsReviewsByProductCode(productCode)

ProductsReviewsByProductCode

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

apiInstance.productsReviewsByProductCode(productCode).then((data) => {
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

[**ReviewListWsDTOModel**](ReviewListWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productsReviewsByProductCode1"></a>
# **productsReviewsByProductCode1**
> ReviewWsDTO208Model productsReviewsByProductCode1(productCode, body, opts)

ProductsReviewsByProductCode

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

let body = new Occ.ReviewWsDTO208Model(); // ReviewWsDTO208Model | 

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.productsReviewsByProductCode1(productCode, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCode** | **String**| Product identifier | 
 **body** | [**ReviewWsDTO208Model**](ReviewWsDTO208Model.md)|  | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**ReviewWsDTO208Model**](ReviewWsDTO208Model.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productsSearch1"></a>
# **productsSearch1**
> ProductSearchPageWsDTOModel productsSearch1(opts)

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
apiInstance.productsSearch1(opts).then((data) => {
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

[**ProductSearchPageWsDTOModel**](ProductSearchPageWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productsStockByProductCode1"></a>
# **productsStockByProductCode1**
> StoreFinderStockSearchPageWsDTOModel productsStockByProductCode1(productCode, opts)

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
apiInstance.productsStockByProductCode1(productCode, opts).then((data) => {
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

[**StoreFinderStockSearchPageWsDTOModel**](StoreFinderStockSearchPageWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productsStockByProductCodeAndStoreName"></a>
# **productsStockByProductCodeAndStoreName**
> StockWsDTOModel productsStockByProductCodeAndStoreName(productCode, storeName, opts)

ProductsStockByProductCodeAndStoreName

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
apiInstance.productsStockByProductCodeAndStoreName(productCode, storeName, opts).then((data) => {
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

[**StockWsDTOModel**](StockWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productsSuggestions"></a>
# **productsSuggestions**
> SuggestionListWsDTOModel productsSuggestions(max, term, opts)

ProductsSuggestions

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
apiInstance.productsSuggestions(max, term, opts).then((data) => {
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

[**SuggestionListWsDTOModel**](SuggestionListWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

