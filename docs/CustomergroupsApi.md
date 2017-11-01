# Occ.CustomergroupsApi

All URIs are relative to *http://api-example.hybris.com/rest/v2/DefaultParameterValue/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCustomerGroups**](CustomergroupsApi.md#getCustomerGroups) | **GET** /customergroups | getCustomerGroups
[**postCustomerGroup**](CustomergroupsApi.md#postCustomerGroup) | **POST** /customergroups | Customergroups
[**getCustomerGroup**](CustomergroupsApi.md#getCustomerGroup) | **GET** /customergroups/{groupId} | getCustomerGroup
[**putCustomerGroupsMembers**](CustomergroupsApi.md#putCustomerGroupsMembers) | **PUT** /customergroups/{groupId}/members | putCustomerGroupsMembers
[**patchCustomerGroupsMembers**](CustomergroupsApi.md#patchCustomerGroupsMembers) | **PATCH** /customergroups/{groupId}/members | patchCustomerGroupsMembers
[**deleteCustomerGroupsMember**](CustomergroupsApi.md#deleteCustomerGroupsMember) | **DELETE** /customergroups/{groupId}/members/{userId} | deleteCustomerGroupsMember


<a name="customergroups"></a>
# **customergroups**
> UserGroupListWsDTOModel customergroups(opts)

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
apiInstance.getCustomerGroups(opts).then((data) => {
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

[**UserGroupListWsDTOModel**](UserGroupListWsDTOModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postCustomerGroup"></a>
# **postCustomerGroup**
> postCustomerGroup(body)

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

let body = new Occ.UserGroupWsDTOModel(); // UserGroupWsDTOModel | 

apiInstance.postCustomerGroup(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserGroupWsDTOModel**](UserGroupWsDTOModel.md)|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomerGroup"></a>
# **getCustomerGroup**
> UserGroupWsDTO17Model getCustomerGroup(groupId, opts)

getCustomerGroup

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
apiInstance.getCustomerGroup(groupId, opts).then((data) => {
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

[**UserGroupWsDTO17Model**](UserGroupWsDTO17Model.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putCustomerGroupsMembers"></a>
# **putCustomerGroupsMembers**
> putCustomerGroupsMembers(groupId, body)

putCustomerGroupsMembers

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

let body = new Occ.MemberListWsDTOModel(); // MemberListWsDTOModel | 

apiInstance.putCustomerGroupsMembers(groupId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| Group identifier | 
 **body** | [**MemberListWsDTOModel**](MemberListWsDTOModel.md)|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchCustomerGroupsMembers"></a>
# **patchCustomerGroupsMembers**
> patchCustomerGroupsMembers(groupId, body)

putCustomerGroupsMembers

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

let body = new Occ.MemberListWsDTOModel(); // MemberListWsDTOModel | 

apiInstance.patchCustomerGroupsMembers(groupId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| Group identifier | 
 **body** | [**MemberListWsDTOModel**](MemberListWsDTOModel.md)|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCustomerGroupsMember"></a>
# **deleteCustomerGroupsMember**
> deleteCustomerGroupsMember(groupId, userId)

deleteCustomerGroupsMember

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

apiInstance.deleteCustomerGroupsMember(groupId, userId).then(() => {
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

