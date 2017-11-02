# Occ.PromotionsApi

All URIs are relative to *http://api-example.hybris.com/rest/v2/DefaultParameterValue/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPromotions**](PromotionsApi.md#getPromotions) | **GET** /promotions | getPromotions
[**getPromotion**](PromotionsApi.md#getPromotion) | **GET** /promotions/{code} | getPromotion


<a name="promotions"></a>
# **promotions**
> PromotionList promotions(opts)

Promotions

Returns promotions defined for a current base site. Requests pertaining to promotions have been developed for the previous version of promotions and vouchers and therefore some of them are currently not compatible with the new promotion engine.  Security: Permitted only for trusted client 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.PromotionsApi();

let opts = { 
  'promotionGroup': "promotionGroup_example", // String | Only promotions from this group are returned
  'type': "type_example", // String | Defines what type of promotions should be returned. Values supported for that parameter are: <ul> <li>all: All available promotions are returned</li> <li>product: Only product promotions are returned</li> <li>order: Only order promotions are returned</li> </ul>
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.getPromotions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotionGroup** | **String**| Only promotions from this group are returned | [optional] 
 **type** | **String**| Defines what type of promotions should be returned. Values supported for that parameter are: &lt;ul&gt; &lt;li&gt;all: All available promotions are returned&lt;/li&gt; &lt;li&gt;product: Only product promotions are returned&lt;/li&gt; &lt;li&gt;order: Only order promotions are returned&lt;/li&gt; &lt;/ul&gt; | [optional] 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**PromotionList**](PromotionList.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPromotion"></a>
# **getPromotion**
> Promotion getPromotion(code, opts)

getPromotion

Returns details of a single promotion specified by a promotion code. Requests pertaining to promotions have been developed for the previous version of promotions and vouchers and therefore some of them are currently not compatible with the new promotion engine.  Security: Permitted only for trusted client 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.PromotionsApi();

let code = "code_example"; // String | Promotion identifier (code)

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.getPromotion(code, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| Promotion identifier (code) | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**Promotion**](Promotion.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

