# Occ.UsersApi

All URIs are relative to *http://api-example.hybris.com/rest/v2/DefaultParameterValue/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postUsers**](UsersApi.md#postUsers) | **POST** /users | postUsers
[**getUserAddresses**](UsersApi.md#getUserAddresses) | **GET** /users/{userId}/addresses | getUserAddresses
[**postUserAddress**](UsersApi.md#postUserAddress) | **POST** /users/{userId}/addresses | getUserAddresses
[**getUserAddress**](UsersApi.md#getUserAddress) | **GET** /users/{userId}/addresses/{addressId} | getUserAddress
[**putUserAddress**](UsersApi.md#putUserAddress) | **PUT** /users/{userId}/addresses/{addressId} | getUserAddress
[**patchUserAddress**](UsersApi.md#patchUserAddress) | **PATCH** /users/{userId}/addresses/{addressId} | getUserAddress
[**deleteUserAddress**](UsersApi.md#deleteUserAddress) | **DELETE** /users/{userId}/addresses/{addressId} | getUserAddress
[**postUserAddressesVerification**](UsersApi.md#postUserAddressesVerification) | **POST** /users/{userId}/addresses/verification | postUserAddressesVerification
[**getUser**](UsersApi.md#getUser) | **GET** /users/{userId} | getUser
[**putUser**](UsersApi.md#putUser) | **PUT** /users/{userId} | getUser
[**patchUser**](UsersApi.md#patchUser) | **PATCH** /users/{userId} | getUser
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /users/{userId} | getUser
[**postCartDeliveryAddress**](UsersApi.md#postCartDeliveryAddress) | **POST** /users/{userId}/carts/{cartId}/addresses/delivery | postCartDeliveryAddress
[**putCartDeliveryAddress**](UsersApi.md#putCartDeliveryAddress) | **PUT** /users/{userId}/carts/{cartId}/addresses/delivery | postCartDeliveryAddress
[**deleteCartDeliveryAddress**](UsersApi.md#deleteCartDeliveryAddress) | **DELETE** /users/{userId}/carts/{cartId}/addresses/delivery | postCartDeliveryAddress
[**getCarts**](UsersApi.md#getCarts) | **GET** /users/{userId}/carts | getCarts
[**postCart**](UsersApi.md#postCart) | **POST** /users/{userId}/carts | getCarts
[**getCart**](UsersApi.md#getCart) | **GET** /users/{userId}/carts/{cartId} | getCart
[**deleteCart**](UsersApi.md#deleteCart) | **DELETE** /users/{userId}/carts/{cartId} | getCart
[**postCartClonesavedcart**](UsersApi.md#postCartClonesavedcart) | **POST** /users/{userId}/carts/{cartId}/clonesavedcart | postCartClonesavedcart
[**getCartDeliverymode**](UsersApi.md#getCartDeliverymode) | **GET** /users/{userId}/carts/{cartId}/deliverymode | getCartDeliverymode
[**putCartDeliverymode**](UsersApi.md#putCartDeliverymode) | **PUT** /users/{userId}/carts/{cartId}/deliverymode | getCartDeliverymode
[**deleteCartDeliverymode**](UsersApi.md#deleteCartDeliverymode) | **DELETE** /users/{userId}/carts/{cartId}/deliverymode | getCartDeliverymode
[**getCartDeliverymodes**](UsersApi.md#getCartDeliverymodes) | **GET** /users/{userId}/carts/{cartId}/deliverymodes | getCartDeliverymodes
[**putCartEmail**](UsersApi.md#putCartEmail) | **PUT** /users/{userId}/carts/{cartId}/email | putCartEmail
[**getCartEntries**](UsersApi.md#getCartEntries) | **GET** /users/{userId}/carts/{cartId}/entries | getCartEntries
[**postCartEntries**](UsersApi.md#postCartEntries) | **POST** /users/{userId}/carts/{cartId}/entries | getCartEntries
[**getCartEntry**](UsersApi.md#getCartEntry) | **GET** /users/{userId}/carts/{cartId}/entries/{entryNumber} | getCartEntry
[**putCartEntry**](UsersApi.md#putCartEntry) | **PUT** /users/{userId}/carts/{cartId}/entries/{entryNumber} | getCartEntry
[**patchCartEntry**](UsersApi.md#patchCartEntry) | **PATCH** /users/{userId}/carts/{cartId}/entries/{entryNumber} | getCartEntry
[**deleteCartEntry**](UsersApi.md#deleteCartEntry) | **DELETE** /users/{userId}/carts/{cartId}/entries/{entryNumber} | getCartEntry
[**patchCartFlagForDeletion**](UsersApi.md#patchCartFlagForDeletion) | **PATCH** /users/{userId}/carts/{cartId}/flagForDeletion | patchCartFlagForDeletion
[**postCartPaymentdetail**](UsersApi.md#postCartPaymentdetail) | **POST** /users/{userId}/carts/{cartId}/paymentdetails | postCartPaymentdetail
[**putCartPaymentdetail**](UsersApi.md#putCartPaymentdetail) | **PUT** /users/{userId}/carts/{cartId}/paymentdetails | postCartPaymentdetail
[**getCartPromotions**](UsersApi.md#getCartPromotions) | **GET** /users/{userId}/carts/{cartId}/promotions | getCartPromotions
[**postCartPromotion**](UsersApi.md#postCartPromotion) | **POST** /users/{userId}/carts/{cartId}/promotions | getCartPromotions
[**getCartPromotion**](UsersApi.md#getCartPromotion) | **GET** /users/{userId}/carts/{cartId}/promotions/{promotionId} | getCartPromotion
[**deleteCartPromotion**](UsersApi.md#deleteCartPromotion) | **DELETE** /users/{userId}/carts/{cartId}/promotions/{promotionId} | getCartPromotion
[**patchCartRestoresavedcart**](UsersApi.md#patchCartRestoresavedcart) | **PATCH** /users/{userId}/carts/{cartId}/restoresavedcart | patchCartRestoresavedcart
[**patchSavedCart**](UsersApi.md#patchSavedCart) | **PATCH** /users/{userId}/carts/{cartId}/save | patchSavedCart
[**getSavedCart**](UsersApi.md#getSavedCart) | **GET** /users/{userId}/carts/{cartId}/savedcart | getSavedCart
[**getCartVouchers**](UsersApi.md#getCartVouchers) | **GET** /users/{userId}/carts/{cartId}/vouchers | getCartVouchers
[**postCartVoucher**](UsersApi.md#postCartVoucher) | **POST** /users/{userId}/carts/{cartId}/vouchers | getCartVouchers
[**deleteCartVouchers**](UsersApi.md#deleteCartVouchers) | **DELETE** /users/{userId}/carts/{cartId}/vouchers/{voucherId} | deleteCartVouchers
[**getCustomergroups**](UsersApi.md#getCustomergroups) | **GET** /users/{userId}/customergroups | getCustomergroups
[**putLogin**](UsersApi.md#putLogin) | **PUT** /users/{userId}/login | putLogin
[**getOrders**](UsersApi.md#getOrders) | **GET** /users/{userId}/orders | UsersOrdersByUserId
[**postOrder**](UsersApi.md#postOrder) | **POST** /users/{userId}/orders | UsersOrdersByUserId
[**getOrder**](UsersApi.md#getOrder) | **GET** /users/{userId}/orders/{code} | getOrder
[**putPassword**](UsersApi.md#putPassword) | **PUT** /users/{userId}/password | putPassword
[**getPaymentdetail**](UsersApi.md#getPaymentdetail) | **GET** /users/{userId}/paymentdetails/{paymentDetailsId} | getPaymentdetail
[**putPaymentdetail**](UsersApi.md#putPaymentdetail) | **PUT** /users/{userId}/paymentdetails/{paymentDetailsId} | getPaymentdetail
[**patchPaymentdetail**](UsersApi.md#patchPaymentdetail) | **PATCH** /users/{userId}/paymentdetails/{paymentDetailsId} | getPaymentdetail
[**deletePaymentdetail**](UsersApi.md#deletePaymentdetail) | **DELETE** /users/{userId}/paymentdetails/{paymentDetailsId} | getPaymentdetail
[**getPaymentdetails**](UsersApi.md#getPaymentdetails) | **GET** /users/{userId}/paymentdetails | getPaymentdetail


<a name="postUsers"></a>
# **postUsers**
> postUsers(body)

Users

Registers a customer. The following two sets of parameters are available: &lt;ul&gt; &lt;li&gt;First set is used to register a customer. In this case the required parameters are: login, password, firstName, lastName, titleCode.&lt;/li&gt; &lt;li&gt;Second set is used to convert a guest to a customer. In this case the required parameters are: guid, password. &lt;/li&gt; &lt;ul&gt;  Security: Permitted only for customer managers, clients or trusted clients. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let body = new Occ.UserSignUpWsDTOModel(); // UserSignUpWsDTOModel | 

apiInstance.postUsers(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserSignUpWsDTOModel**](UserSignUpWsDTOModel.md)|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserAddresses"></a>
# **getUserAddresses**
> AddressListWsDTOModel getUserAddresses(userId, opts)

getUserAddresses

Returns customer&#39;s addresses.  Security: Permitted for trusted clients, customers and customer managers. Trusted client or customer manager is able to impersonate as any other user and access data on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in the response)
};
apiInstance.getUserAddresses(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in the response) | [optional] 

### Return type

[**AddressListWsDTOModel**](AddressListWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postUserAddress"></a>
# **postUserAddress**
> AddressWsDTO296Model postUserAddress(userId, body, opts)

getUserAddresses

Creates a new address.  Security: Permitted for customers, guests, customer managers or trusted client. Trusted client or customer manager is able to impersonate as any other user and access data on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let body = new Occ.AddressWsDTO296Model(); // AddressWsDTO296Model | 

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in the response)
};
apiInstance.postUserAddress(userId, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **body** | [**AddressWsDTO296Model**](AddressWsDTO296Model.md)|  | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in the response) | [optional] 

### Return type

[**AddressWsDTO296Model**](AddressWsDTO296Model.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserAddress"></a>
# **getUserAddress**
> AddressWsDTOModel getUserAddress(userId, addressId, opts)

getUserAddress

Returns detailed information about address with a given id.  Security: Permitted for customers, guests, customer managers or trusted client. Trusted client or customer manager is able to impersonate as any other user and access data on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let addressId = "addressId_example"; // String | Address identifier

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in the response)
};
apiInstance.getUserAddress(userId, addressId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **addressId** | **String**| Address identifier | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in the response) | [optional] 

### Return type

[**AddressWsDTOModel**](AddressWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putUserAddress"></a>
# **putUserAddress**
> putUserAddress(userId, addressId, body)

getUserAddress

Updates the address. Attributes not provided in the request will be defined again (set to null or default).  Security: Permitted for customers, guests, customer managers or trusted client. Trusted client or customer manager is able to impersonate as any other user and access data on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let addressId = "addressId_example"; // String | Address identifier

let body = new Occ.AddressWsDTO296Model(); // AddressWsDTO296Model | 

apiInstance.putUserAddress(userId, addressId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **addressId** | **String**| Address identifier | 
 **body** | [**AddressWsDTO296Model**](AddressWsDTO296Model.md)|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchUserAddress"></a>
# **patchUserAddress**
> patchUserAddress(userId, addressId, body)

getUserAddress

Updates the address. Only attributes provided in the request body will be changed.  Security: Permitted for customers, guests, customer managers or trusted client. Trusted client or customer manager is able to impersonate as any other user and access data on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let addressId = "addressId_example"; // String | Address identifier

let body = new Occ.AddressWsDTO296Model(); // AddressWsDTO296Model | 

apiInstance.patchUserAddress(userId, addressId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **addressId** | **String**| Address identifier | 
 **body** | [**AddressWsDTO296Model**](AddressWsDTO296Model.md)|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserAddress"></a>
# **deleteUserAddress**
> deleteUserAddress(userId, addressId)

getUserAddress

Removes customer&#39;s address.  Security: Permitted for customers, guests, customer managers or trusted client. Trusted client or customer manager is able to impersonate as any other user and access data on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let addressId = "addressId_example"; // String | Address identifier

apiInstance.deleteUserAddress(userId, addressId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **addressId** | **String**| Address identifier | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postUserAddressesVerification"></a>
# **postUserAddressesVerification**
> AddressWsDTO296Model postUserAddressesVerification(userId, body, opts)

postUserAddressesVerification

Verifies address  Security: Permitted for customers, guests, customer managers or trusted client. Trusted client or customer manager is able to impersonate as any other user and access data on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let body = new Occ.AddressWsDTO296Model(); // AddressWsDTO296Model | 

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in the response)
};
apiInstance.postUserAddressesVerification(userId, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **body** | [**AddressWsDTO296Model**](AddressWsDTO296Model.md)|  | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in the response) | [optional] 

### Return type

[**AddressWsDTO296Model**](AddressWsDTO296Model.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUser"></a>
# **getUser**
> UserWsDTOModel getUser(userId, opts)

getUser

Returns customer profile.  Security: Permitted for clients, customers and customer managers 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in the response)
};
apiInstance.getUser(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in the response) | [optional] 

### Return type

[**UserWsDTOModel**](UserWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putUser"></a>
# **putUser**
> putUser(userId, body)

getUser

Updates customer profile. Attributes not provided in the request body will be defined again (set to null or default).  Security: Permitted for trusted clients, customers and customer managers. Trusted client or customer manager is able to impersonate as any other user and change profile on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let body = new Occ.UserWsDTO286Model(); // UserWsDTO286Model | 

apiInstance.putUser(userId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **body** | [**UserWsDTO286Model**](UserWsDTO286Model.md)|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchUser"></a>
# **patchUser**
> patchUser(userId, body)

getUser

Updates customer profile. Only attributes provided in the request body will be changed.  Security: Permitted for trusted clients, customers and customer managers. Trusted client or customer manager is able to impersonate as any other user and change profile on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let body = new Occ.UserWsDTO286Model(); // UserWsDTO286Model | 

apiInstance.patchUser(userId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **body** | [**UserWsDTO286Model**](UserWsDTO286Model.md)|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(userId)

getUser

Removes customer profile.  Security: Permitted for trusted clients, customers and customer managers. Trusted client is able to impersonate as any other user and deactivate profile on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

apiInstance.deleteUser(userId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postCartDeliveryAddress"></a>
# **postCartDeliveryAddress**
> AddressWsDTO296Model postCartDeliveryAddress(userId, cartId, body, opts)

postCartDeliveryAddress

Creates an address and assigns it to the cart as the delivery address.  Security: Anonymous user may access cart by its guid. Customer may access only own cart by its id. Trusted client or customer manager may impersonate as any user and access cart on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let body = new Occ.AddressWsDTO296Model(); // AddressWsDTO296Model | 

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.postCartDeliveryAddress(userId, cartId, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **body** | [**AddressWsDTO296Model**](AddressWsDTO296Model.md)|  | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**AddressWsDTO296Model**](AddressWsDTO296Model.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putCartDeliveryAddress"></a>
# **putCartDeliveryAddress**
> putCartDeliveryAddress(userId, cartId, addressId)

postCartDeliveryAddress

Sets a delivery address for the cart. The address country must be placed among the delivery countries of the current base store.  Security: Permitted only for customers, guests, customer managers or trusted clients. Trusted client or customer manager may impersonate as any user and access cart on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let addressId = "addressId_example"; // String | Address identifier

apiInstance.putCartDeliveryAddress(userId, cartId, addressId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **addressId** | **String**| Address identifier | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="deleteCartDeliveryAddress"></a>
# **deleteCartDeliveryAddress**
> deleteCartDeliveryAddress(userId, cartId)

postCartDeliveryAddress

Removes the delivery address from the cart.  Security: Permitted only for customers, guests, customer managers or trusted clients. Trusted client or customer manager may impersonate as any user and access cart on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

apiInstance.deleteCartDeliveryAddress(userId, cartId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCarts"></a>
# **getCarts**
> CartListWsDTOModel getCarts(userId, opts)

getCarts

Lists all customer carts.  Security: Permitted only for non-anonymous users. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response).
};
apiInstance.getCarts(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response). | [optional] 

### Return type

[**CartListWsDTOModel**](CartListWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postCart"></a>
# **postCart**
> CartWsDTOModel postCart(userId, opts)

getCarts

Creates a new cart or restores an anonymous cart as a user&#39;s cart (if an old Cart Id is given in the request)  Security: Cart may be created by everybody. Restoring anonymous carts is permitted only for non anonymous users. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let opts = { 
  'fields': "fields_example", // String | Response configuration (list of fields, which should be returned in response)
  'toMergeCartGuid': "toMergeCartGuid_example", // String | User's cart GUID to merge anonymous cart to
  'oldCartId': "oldCartId_example" // String | Anonymous cart GUID
};
apiInstance.postCart(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 
 **toMergeCartGuid** | **String**| User&#39;s cart GUID to merge anonymous cart to | [optional] 
 **oldCartId** | **String**| Anonymous cart GUID | [optional] 

### Return type

[**CartWsDTOModel**](CartWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getCart"></a>
# **getCart**
> CartWsDTOModel getCart(userId, cartId, opts)

getCart

Returns the cart with a given identifier.  Security: Anonymous user may access cart by its guid. Customer may access only own cart by its id. Trusted client or customer manager may impersonate as any user and access cart on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.getCart(userId, cartId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**CartWsDTOModel**](CartWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCart"></a>
# **deleteCart**
> deleteCart(userId, cartId)

getCart

Deletes a cart with a given cart id.  Security: Anonymous user may access cart by its guid. Customer may access only own cart by its id. Trusted client or customer manager may impersonate as any user and access cart on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

apiInstance.deleteCart(userId, cartId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postCartClonesavedcart"></a>
# **postCartClonesavedcart**
> SaveCartResultWsDTOModel postCartClonesavedcart(userId, cartId, opts)

postCartClonesavedcart

Explicitly clones a cart 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let opts = { 
  'fields': "fields_example", // String | Response configuration (list of fields, which should be returned in response)
  'name': "name_example", // String | the name that should be applied to the cloned cart
  'description': "description_example" // String | the description that should be applied to the cloned cart
};
apiInstance.postCartClonesavedcart(userId, cartId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 
 **name** | **String**| the name that should be applied to the cloned cart | [optional] 
 **description** | **String**| the description that should be applied to the cloned cart | [optional] 

### Return type

[**SaveCartResultWsDTOModel**](SaveCartResultWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getCartDeliverymode"></a>
# **getCartDeliverymode**
> DeliveryModeWsDTOModel getCartDeliverymode(userId, cartId, opts)

getCartDeliverymode

Returns the delivery mode selected for the cart.  Security: Permitted only for customers, guests, customer managers or trusted clients. Trusted client or customer manager may impersonate as any user and access cart on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.getCartDeliverymode(userId, cartId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**DeliveryModeWsDTOModel**](DeliveryModeWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putCartDeliverymode"></a>
# **putCartDeliverymode**
> putCartDeliverymode(userId, cartId, deliveryModeId)

getCartDeliverymode

Sets the delivery mode with a given identifier for the cart.  Security: Permitted only for customers, guests, customer managers or trusted clients. Trusted client or customer manager may impersonate as any user and access cart on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let deliveryModeId = "deliveryModeId_example"; // String | Delivery mode identifier (code)

apiInstance.putCartDeliverymode(userId, cartId, deliveryModeId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **deliveryModeId** | **String**| Delivery mode identifier (code) | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="deleteCartDeliverymode"></a>
# **deleteCartDeliverymode**
> deleteCartDeliverymode(userId, cartId)

getCartDeliverymode

Removes the delivery mode from the cart.  Security: Permitted only for customers, guests, customer managers or trusted clients. Trusted client or customer manager may impersonate as any user and access cart on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

apiInstance.deleteCartDeliverymode(userId, cartId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCartDeliverymodes"></a>
# **getCartDeliverymodes**
> DeliveryModeListWsDTOModel getCartDeliverymodes(userId, cartId, opts)

getCartDeliverymodes

Returns all delivery modes supported for the current base store and cart delivery address. A delivery address must be set for the cart, otherwise an empty list will be returned.  Security: Permitted only for customers, guests, customer managers or trusted clients. Trusted client or customer manager may impersonate as any user and access cart on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.getCartDeliverymodes(userId, cartId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**DeliveryModeListWsDTOModel**](DeliveryModeListWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putCartEmail"></a>
# **putCartEmail**
> putCartEmail(userId, cartId, opts)

putCartEmail

Assigns an email to the cart. This step is required to make a guest checkout.  Security: Permitted only for client or trusted client 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let opts = { 
  'email': "email_example" // String | Email of the guest user. It will be used during checkout process
};
apiInstance.putCartEmail(userId, cartId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **email** | **String**| Email of the guest user. It will be used during checkout process | [optional] 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getCartEntries"></a>
# **getCartEntries**
> OrderEntryListWsDTOModel getCartEntries(userId, cartId, opts)

getCartEntries

Returns cart entries.  Security: Anonymous user may access cart by its guid. Customer may access only own cart by its id. Trusted client or customer manager may impersonate as any user and access cart on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.getCartEntries(userId, cartId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**OrderEntryListWsDTOModel**](OrderEntryListWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postCartEntries"></a>
# **postCartEntries**
> OrderEntryWsDTO542Model postCartEntries(userId, cartId, body, opts)

getCartEntries

Adds a product to the cart.  Security: Anonymous user may access cart by its guid. Customer may access only own cart by its id. Trusted client or customer manager may impersonate as any user and access cart on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let body = new Occ.OrderEntryWsDTO542Model(); // OrderEntryWsDTO542Model | 

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.postCartEntries(userId, cartId, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **body** | [**OrderEntryWsDTO542Model**](OrderEntryWsDTO542Model.md)|  | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**OrderEntryWsDTO542Model**](OrderEntryWsDTO542Model.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCartEntry"></a>
# **getCartEntry**
> OrderEntryWsDTOModel getCartEntry(userId, cartId, entryNumber, opts)

getCartEntry

Returns the details of the cart entries.  Security: Anonymous user may access cart by its guid. Customer may access only own cart by its id. Trusted client or customer manager may impersonate as any user and access cart on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let entryNumber = "entryNumber_example"; // String | Entry number. Zero-based numbering.

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.getCartEntry(userId, cartId, entryNumber, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **entryNumber** | **String**| Entry number. Zero-based numbering. | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**OrderEntryWsDTOModel**](OrderEntryWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putCartEntry"></a>
# **putCartEntry**
> OrderEntryWsDTO542Model putCartEntry(userId, cartId, entryNumber, body, opts)

getCartEntry

Updates the quantity of a single cart entry and details of the store where the cart entry will be picked. Attributes not provided in request will be defined again (set to null or default)  Security: Anonymous user may access cart by its guid. Customer may access only own cart by its id. Trusted client or customer manager may impersonate as any user and access cart on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let entryNumber = "entryNumber_example"; // String | Entry number. Zero-based numbering.

let body = new Occ.OrderEntryWsDTO542Model(); // OrderEntryWsDTO542Model | 

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.putCartEntry(userId, cartId, entryNumber, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **entryNumber** | **String**| Entry number. Zero-based numbering. | 
 **body** | [**OrderEntryWsDTO542Model**](OrderEntryWsDTO542Model.md)|  | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**OrderEntryWsDTO542Model**](OrderEntryWsDTO542Model.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchCartEntry"></a>
# **patchCartEntry**
> OrderEntryWsDTO542Model patchCartEntry(userId, cartId, entryNumber, body, opts)

getCartEntry

Updates the quantity of a single cart entry and details of the store where the cart entry will be picked.  Security: Anonymous user may access cart by its guid. Customer may access only own cart by its id. Trusted client or customer manager may impersonate as any user and access cart on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let entryNumber = "entryNumber_example"; // String | Entry number. Zero-based numbering.

let body = new Occ.OrderEntryWsDTO542Model(); // OrderEntryWsDTO542Model | 

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.patchCartEntry(userId, cartId, entryNumber, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **entryNumber** | **String**| Entry number. Zero-based numbering. | 
 **body** | [**OrderEntryWsDTO542Model**](OrderEntryWsDTO542Model.md)|  | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**OrderEntryWsDTO542Model**](OrderEntryWsDTO542Model.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCartEntry"></a>
# **deleteCartEntry**
> deleteCartEntry(userId, cartId, entryNumber)

getCartEntry

Deletes cart entry.  Security: Anonymous user may access cart by its guid. Customer may access only own cart by its id. Trusted client or customer manager may impersonate as any user and access cart on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let entryNumber = "entryNumber_example"; // String | Entry number. Zero-based numbering.

apiInstance.deleteCartEntry(userId, cartId, entryNumber).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **entryNumber** | **String**| Entry number. Zero-based numbering. | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchCartFlagForDeletion"></a>
# **patchCartFlagForDeletion**
> SaveCartResultWsDTOModel patchCartFlagForDeletion(userId, cartId, opts)

patchCartFlagForDeletion

Flags a cart for deletion (the cart doesn&#39;t have corresponding save cart attributes anymore). The cart is not actually deleted from the database. But with the removal of the saved cart attributes, this cart will be taken care of by the cart removal job just like any other cart. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.patchCartFlagForDeletion(userId, cartId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**SaveCartResultWsDTOModel**](SaveCartResultWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postCartPaymentdetail"></a>
# **postCartPaymentdetail**
> PaymentDetailsWsDTO640Model postCartPaymentdetail(userId, cartId, body, opts)

postCartPaymentdetail

Defines details of a new credit card payment details and assigns the payment to the cart.  Security: Permitted only for customers, guests, customer managers or trusted clients. Trusted client or customer manager may impersonate as any user and access cart on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let body = new Occ.PaymentDetailsWsDTO640Model(); // PaymentDetailsWsDTO640Model | 

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.postCartPaymentdetail(userId, cartId, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **body** | [**PaymentDetailsWsDTO640Model**](PaymentDetailsWsDTO640Model.md)|  | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**PaymentDetailsWsDTO640Model**](PaymentDetailsWsDTO640Model.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putCartPaymentdetail"></a>
# **putCartPaymentdetail**
> putCartPaymentdetail(userId, cartId, paymentDetailsId)

postCartPaymentdetail

Sets credit card payment details for the cart.  Security: Permitted only for customers, guests, customer managers or trusted clients. Trusted client or customer manager may impersonate as any user and access cart on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let paymentDetailsId = "paymentDetailsId_example"; // String | Payment details identifier

apiInstance.putCartPaymentdetail(userId, cartId, paymentDetailsId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **paymentDetailsId** | **String**| Payment details identifier | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getCartPromotions"></a>
# **getCartPromotions**
> PromotionResultListWsDTOModel getCartPromotions(userId, cartId, opts)

getCartPromotions

Return information about promotions applied on cart. Requests pertaining to promotions have been developed for the previous version of promotions and vouchers and therefore some of them are currently not compatible with the new promotion engine.  Security: Permitted only for non anonymous users or clients. Trusted client or customer manager may impersonate as any user and access cart on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.getCartPromotions(userId, cartId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**PromotionResultListWsDTOModel**](PromotionResultListWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postCartPromotion"></a>
# **postCartPromotion**
> postCartPromotion(userId, cartId, promotionId)

getCartPromotions

Enables the promotion for the order based on the promotionId defined for the cart. Requests pertaining to promotions have been developed for the previous version of promotions and vouchers and therefore some of them are currently not compatible with the new promotion engine.  Security: Anonymous user may access cart by its guid. Customer may access only own cart by its id. Trusted client or customer manager may impersonate as any user and access cart on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let promotionId = "promotionId_example"; // String | Promotion identifier

apiInstance.postCartPromotion(userId, cartId, promotionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **promotionId** | **String**| Promotion identifier | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getCartPromotion"></a>
# **getCartPromotion**
> PromotionResultListWsDTOModel getCartPromotion(userId, cartId, promotionId, opts)

getCartPromotion

Return information about promotion with given id, applied on cart. Requests pertaining to promotions have been developed for the previous version of promotions and vouchers and therefore some of them are currently not compatible with the new promotion engine.  Security: Permitted only for non anonymous users or clients. Trusted client or customer manager may impersonate as any user and access cart on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let promotionId = "promotionId_example"; // String | Promotion identifier (code)

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.getCartPromotion(userId, cartId, promotionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **promotionId** | **String**| Promotion identifier (code) | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**PromotionResultListWsDTOModel**](PromotionResultListWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCartPromotion"></a>
# **deleteCartPromotion**
> deleteCartPromotion(userId, cartId, promotionId)

getCartPromotion

Disables the promotion for the order based on the promotionId defined for the cart. Requests pertaining to promotions have been developed for the previous version of promotions and vouchers and therefore some of them are currently not compatible with the new promotion engine.  Security: Permitted only for trusted clients 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let promotionId = "promotionId_example"; // String | Promotion identifier (code)

apiInstance.deleteCartPromotion(userId, cartId, promotionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **promotionId** | **String**| Promotion identifier (code) | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchCartRestoresavedcart"></a>
# **patchCartRestoresavedcart**
> SaveCartResultWsDTOModel patchCartRestoresavedcart(userId, cartId)

patchCartRestoresavedcart

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

apiInstance.patchCartRestoresavedcart(userId, cartId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 

### Return type

[**SaveCartResultWsDTOModel**](SaveCartResultWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchSavedCart"></a>
# **patchSavedCart**
> SaveCartResultWsDTOModel patchSavedCart(userId, cartId, opts)

patchSavedCart

Explicitly saves a cart 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let opts = { 
  'fields': "fields_example", // String | Response configuration (list of fields, which should be returned in response)
  'saveCartName': "saveCartName_example", // String | the name that should be applied to the saved cart
  'saveCartDescription': "saveCartDescription_example" // String | the description that should be applied to the saved cart
};
apiInstance.patchSavedCart(userId, cartId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 
 **saveCartName** | **String**| the name that should be applied to the saved cart | [optional] 
 **saveCartDescription** | **String**| the description that should be applied to the saved cart | [optional] 

### Return type

[**SaveCartResultWsDTOModel**](SaveCartResultWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getSavedCart"></a>
# **getSavedCart**
> SaveCartResultWsDTOModel getSavedCart(userId, cartId, opts)

getSavedCart

Returns saved cart by it id for authenticated user 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.getSavedCart(userId, cartId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**SaveCartResultWsDTOModel**](SaveCartResultWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCartVouchers"></a>
# **getCartVouchers**
> VoucherListWsDTOModel getCartVouchers(userId, cartId, opts)

getCartVouchers

Returns list of vouchers applied to the cart.  Security: Permitted only for non anonymous users or clients. Trusted client or customer manager may impersonate as any user and access cart on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.getCartVouchers(userId, cartId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**VoucherListWsDTOModel**](VoucherListWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postCartVoucher"></a>
# **postCartVoucher**
> postCartVoucher(userId, cartId, voucherId)

getCartVouchers

Applies a voucher based on the voucherId defined for the cart.  Security: Permitted only for non anonymous users or clients. Trusted client or customer manager may impersonate as any user and access cart on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let voucherId = "voucherId_example"; // String | Voucher identifier

apiInstance.postCartVoucher(userId, cartId, voucherId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **voucherId** | **String**| Voucher identifier | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="deleteCartVouchers"></a>
# **deleteCartVouchers**
> deleteCartVouchers(userId, cartId, voucherId)

deleteCartVouchers

Removes a voucher based on the voucherId defined for the current cart.  Security: Permitted only for non anonymous users or clients. Trusted client or customer manager may impersonate as any user and access cart on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart identifier <ul> <li>cart code for logged in user</li> <li>cart guid for anonymous user</li> <li>'current' for the last modified cart</li> </ul>

let voucherId = "voucherId_example"; // String | Voucher identifier (code)

apiInstance.deleteCartVouchers(userId, cartId, voucherId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart identifier &lt;ul&gt; &lt;li&gt;cart code for logged in user&lt;/li&gt; &lt;li&gt;cart guid for anonymous user&lt;/li&gt; &lt;li&gt;&#39;current&#39; for the last modified cart&lt;/li&gt; &lt;/ul&gt; | 
 **voucherId** | **String**| Voucher identifier (code) | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomergroups"></a>
# **getCustomergroups**
> UserGroupListWsDTOModel getCustomergroups(userId, opts)

getCustomergroups

Returns all customer groups of a customer.  Security: Permitted for customers, customer managers or trusted client. Trusted client or customer manager is able to impersonate as any other user and access data on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in the response)
};
apiInstance.getCustomergroups(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in the response) | [optional] 

### Return type

[**UserGroupListWsDTOModel**](UserGroupListWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putLogin"></a>
# **putLogin**
> putLogin(userId, opts)

putLogin

Changes customer&#39;s login.  Security: Permitted for trusted clients, customers and customer managers. Trusted client or customer manager is able to impersonate as any other user and change login on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let opts = { 
  'password': "password_example", // String | Customer's current password.
  'newLogin': "newLogin_example" // String | Customer's new login. Customer login is case insensitive.
};
apiInstance.putLogin(userId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **password** | **String**| Customer&#39;s current password. | [optional] 
 **newLogin** | **String**| Customer&#39;s new login. Customer login is case insensitive. | [optional] 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getOrders"></a>
# **getOrders**
> OrderHistoryListWsDTOModel getOrders(userId, opts)

UsersOrdersByUserId

Returns order history data for all orders placed by the specific user for the specific base store. Response contains orders search result displayed in several pages if needed.  Security: Allowed only for customers, customer managers, trusted clients Trusted client is able to impersonate as any customer and access their orders. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let opts = { 
  'statuses': "statuses_example", // String | Filters only certain order statuses. It means: statuses=CANCELLED,CHECKED_VALID would only return orders with status CANCELLED or CHECKED_VALID.
  'pageSize': "pageSize_example", // String | The number of results returned per page.
  'sort': "sort_example", // String | Sorting method applied to the return results.
  'currentPage': "currentPage_example", // String | The current result page requested.
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.getOrders(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **statuses** | **String**| Filters only certain order statuses. It means: statuses&#x3D;CANCELLED,CHECKED_VALID would only return orders with status CANCELLED or CHECKED_VALID. | [optional] 
 **pageSize** | **String**| The number of results returned per page. | [optional] 
 **sort** | **String**| Sorting method applied to the return results. | [optional] 
 **currentPage** | **String**| The current result page requested. | [optional] 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**OrderHistoryListWsDTOModel**](OrderHistoryListWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postOrder"></a>
# **postOrder**
> OrderWsDTOModel postOrder(userId, cartId, opts)

UsersOrdersByUserId

Authorizes cart and places the order. Response contains the new order data.  Security: Allowed only for customers, customer managers, clients or trusted clients. Trusted client is able to impersonate as any customer and place order on his behalf 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let cartId = "cartId_example"; // String | Cart code for logged in user, cart GUID for guest checkout

let opts = { 
  'fields': "fields_example", // String | Response configuration (list of fields, which should be returned in response)
  'securityCode': "securityCode_example" // String | CCV security code.
};
apiInstance.postOrder(userId, cartId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **cartId** | **String**| Cart code for logged in user, cart GUID for guest checkout | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 
 **securityCode** | **String**| CCV security code. | [optional] 

### Return type

[**OrderWsDTOModel**](OrderWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getOrder"></a>
# **getOrder**
> OrderWsDTOModel getOrder(userId, code, opts)

getOrder

Returns specific order details based on a specific order code. The response contains detailed order information.  Security: Allowed only for customers, customer managers, clients or trusted clients. Trusted client is able to impersonate as any customer and access their orders. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let code = "code_example"; // String | Order GUID (Globally Unique Identifier) or order CODE

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.getOrder(userId, code, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **code** | **String**| Order GUID (Globally Unique Identifier) or order CODE | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**OrderWsDTOModel**](OrderWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPassword"></a>
# **putPassword**
> putPassword(userId, opts)

putPassword

Changes customer&#39;s password.  Security: Permitted for trusted clients, customers and customer managers. Trusted client or customer manager may change someone&#39;s else password without knowing the old one. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let opts = { 
  '_new': "_new_example", // String | New password
  'old': "old_example" // String | Old password. Required only for ROLE_CUSTOMERGROUP
};
apiInstance.putPassword(userId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **_new** | **String**| New password | [optional] 
 **old** | **String**| Old password. Required only for ROLE_CUSTOMERGROUP | [optional] 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getPaymentdetail"></a>
# **getPaymentdetail**
> PaymentDetailsWsDTOModel getPaymentdetail(userId, paymentDetailsId, opts)

getPaymentdetail

Returns customer&#39;s credit card payment details for a given id.  Security: Permitted for customers, customer managers or trusted client. Trusted client or customer manager is able to impersonate as any other user and access data on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let paymentDetailsId = "paymentDetailsId_example"; // String | - Payment details identifier

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in the response)
};
apiInstance.getPaymentdetail(userId, paymentDetailsId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **paymentDetailsId** | **String**| - Payment details identifier | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in the response) | [optional] 

### Return type

[**PaymentDetailsWsDTOModel**](PaymentDetailsWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPaymentdetail"></a>
# **putPaymentdetail**
> putPaymentdetail(userId, paymentDetailsId, body)

getPaymentdetail

Updates existing customer&#39;s credit card payment info based on the payment info ID. Attributes not given in request will be defined again (set to null or default).  Security: Permitted for customers, customer managers or trusted client. Trusted client or customer manager is able to impersonate as any other user and access data on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let paymentDetailsId = "paymentDetailsId_example"; // String | - Payment details identifier

let body = new Occ.PaymentDetailsWsDTO640Model(); // PaymentDetailsWsDTO640Model | 

apiInstance.putPaymentdetail(userId, paymentDetailsId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **paymentDetailsId** | **String**| - Payment details identifier | 
 **body** | [**PaymentDetailsWsDTO640Model**](PaymentDetailsWsDTO640Model.md)|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchPaymentdetail"></a>
# **patchPaymentdetail**
> patchPaymentdetail(userId, paymentDetailsId, body)

getPaymentdetail

Updates existing customer&#39;s credit card payment details based on its ID. Only attributes given in request will be changed.  Security: Permitted for customers, customer managers or trusted client. Trusted client or customer manager is able to impersonate as any other user and access data on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let paymentDetailsId = "paymentDetailsId_example"; // String | - Payment details identifier

let body = new Occ.PaymentDetailsWsDTO640Model(); // PaymentDetailsWsDTO640Model | 

apiInstance.patchPaymentdetail(userId, paymentDetailsId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **paymentDetailsId** | **String**| - Payment details identifier | 
 **body** | [**PaymentDetailsWsDTO640Model**](PaymentDetailsWsDTO640Model.md)|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePaymentdetail"></a>
# **deletePaymentdetail**
> deletePaymentdetail(userId, paymentDetailsId)

getPaymentdetail

Removes customer&#39;s credit card payment details based on its ID.  Security: Permitted for customers, customer managers or trusted client. Trusted client or customer manager is able to impersonate as any other user and access data on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let paymentDetailsId = "paymentDetailsId_example"; // String | - Payment details identifier

apiInstance.deletePaymentdetail(userId, paymentDetailsId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **paymentDetailsId** | **String**| - Payment details identifier | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPaymentdetails"></a>
# **getPaymentdetails**
> PaymentDetailsListWsDTOModel getPaymentdetails(userId, opts)

getPaymentdetail

Return customer&#39;s credit card payment details list.  Security: Permitted for customers, customer managers or trusted client. Trusted client or customer manager is able to impersonate as any other user and access data on their behalf. 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.UsersApi();

let userId = "userId_example"; // String | User identifier or one of the literals below : <ul> <li>'current' for currently authenticated user</li> <li>'anonymous' for anonymous user</li> </ul>

let opts = { 
  'saved': "saved_example", // String | Type of payment details
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in the response)
};
apiInstance.getPaymentdetails(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User identifier or one of the literals below : &lt;ul&gt; &lt;li&gt;&#39;current&#39; for currently authenticated user&lt;/li&gt; &lt;li&gt;&#39;anonymous&#39; for anonymous user&lt;/li&gt; &lt;/ul&gt; | 
 **saved** | **String**| Type of payment details | [optional] 
 **fields** | **String**| Response configuration (list of fields, which should be returned in the response) | [optional] 

### Return type

[**PaymentDetailsListWsDTOModel**](PaymentDetailsListWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

