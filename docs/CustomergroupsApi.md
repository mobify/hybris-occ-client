# Occ.CustomergroupsApi

All URIs are relative to *http://api-example.hybris.com/rest/v2/DefaultParameterValue/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCustomergroups**](CustomergroupsApi.md#getCustomergroups) | **GET** /customergroups | getCustomergroups
[**postCustomergroup**](CustomergroupsApi.md#postCustomergroup) | **POST** /customergroups | Customergroups
[**getCustomergroup**](CustomergroupsApi.md#getCustomergroup) | **GET** /customergroups/{groupId} | getCustomergroup
[**putCustomergroupsMembers**](CustomergroupsApi.md#putCustomergroupsMembers) | **PUT** /customergroups/{groupId}/members | putCustomergroupsMembers
[**patchCustomergroupsMembers**](CustomergroupsApi.md#patchCustomergroupsMembers) | **PATCH** /customergroups/{groupId}/members | patchCustomergroupsMembers
[**deleteCustomergroupsMember**](CustomergroupsApi.md#deleteCustomergroupsMember) | **DELETE** /customergroups/{groupId}/members/{userId} | deleteCustomergroupsMember


<a name="customergroups"></a>
# **customergroups**
> UserGroupListWsDTO customergroups(opts)

Customergroups

Returns all customer groups that are direct subgroups of a customergroup.  Security: Permitted only for customer managers 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.CustomergroupsApi();

let opts = { 
  'pageSize': "pageSize_example", // String | Number of customer group returned in one page
  'currentPage': "currentPage_example", // String | Current page number (starts with 0)
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.getCustomergroups(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **String**| Number of customer group returned in one page | [optional] 
 **currentPage** | **String**| Current page number (starts with 0) | [optional] 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**UserGroupListWsDTO**](UserGroupListWsDTO.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postCustomergroup"></a>
# **postCustomergroup**
> postCustomergroup(body)

Customergroups

Creates a new customer group that is a direct subgroup of a customergroup.  Security: Permitted only for customer managers 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.CustomergroupsApi();

let body = new Occ.UserGroupWsDTO(); // UserGroupWsDTO | 

apiInstance.postCustomergroup(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserGroupWsDTO**](UserGroupWsDTO.md)|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomergroup"></a>
# **getCustomergroup**
> UserGroupWsDTO17 getCustomergroup(groupId, opts)

getCustomergroup

Returns a customer group with a specific groupId.  Security: Permitted only for customer managers 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.CustomergroupsApi();

let groupId = "groupId_example"; // String | Group identifier

let opts = { 
  'fields': "fields_example" // String | Response configuration (list of fields, which should be returned in response)
};
apiInstance.getCustomergroup(groupId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| Group identifier | 
 **fields** | **String**| Response configuration (list of fields, which should be returned in response) | [optional] 

### Return type

[**UserGroupWsDTO17**](UserGroupWsDTO17.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putCustomergroupsMembers"></a>
# **putCustomergroupsMembers**
> putCustomergroupsMembers(groupId, body)

putCustomergroupsMembers

Sets members for a user group. The list of existing members is overwritten with a new one.  Security: Permitted only for customer managers 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.CustomergroupsApi();

let groupId = "groupId_example"; // String | Group identifier

let body = new Occ.MemberListWsDTO(); // MemberListWsDTO | 

apiInstance.putCustomergroupsMembers(groupId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| Group identifier | 
 **body** | [**MemberListWsDTO**](MemberListWsDTO.md)|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchCustomergroupsMembers"></a>
# **patchCustomergroupsMembers**
> patchCustomergroupsMembers(groupId, body)

putCustomergroupsMembers

Assigns user(s) to a customer group.  Security: Permitted only for customer managers 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.CustomergroupsApi();

let groupId = "groupId_example"; // String | Group identifier

let body = new Occ.MemberListWsDTO(); // MemberListWsDTO | 

apiInstance.patchCustomergroupsMembers(groupId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| Group identifier | 
 **body** | [**MemberListWsDTO**](MemberListWsDTO.md)|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCustomergroupsMember"></a>
# **deleteCustomergroupsMember**
> deleteCustomergroupsMember(groupId, userId)

deleteCustomergroupsMember

Removes user from a customer group.  Security: Permitted only for customer managers 

### Example
```javascript
import Occ from 'occ';
let defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Occ.CustomergroupsApi();

let groupId = "groupId_example"; // String | Group identifier

let userId = "userId_example"; // String | User identifier

apiInstance.deleteCustomergroupsMember(groupId, userId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| Group identifier | 
 **userId** | **String**| User identifier | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

