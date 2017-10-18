# Occ.CustomergroupsApi

All URIs are relative to *http://api-example.hybris.com/rest/v2/DefaultParameterValue/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customergroups**](CustomergroupsApi.md#customergroups) | **GET** /customergroups | Customergroups
[**customergroups1**](CustomergroupsApi.md#customergroups1) | **POST** /customergroups | Customergroups
[**customergroupsByGroupId**](CustomergroupsApi.md#customergroupsByGroupId) | **GET** /customergroups/{groupId} | CustomergroupsByGroupId
[**customergroupsMembersByGroupId**](CustomergroupsApi.md#customergroupsMembersByGroupId) | **PUT** /customergroups/{groupId}/members | CustomergroupsMembersByGroupId
[**customergroupsMembersByGroupId1**](CustomergroupsApi.md#customergroupsMembersByGroupId1) | **PATCH** /customergroups/{groupId}/members | CustomergroupsMembersByGroupId
[**customergroupsMembersByGroupIdAndUserId**](CustomergroupsApi.md#customergroupsMembersByGroupIdAndUserId) | **DELETE** /customergroups/{groupId}/members/{userId} | CustomergroupsMembersByGroupIdAndUserId


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
apiInstance.customergroups(opts).then((data) => {
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

<a name="customergroups1"></a>
# **customergroups1**
> customergroups1(body)

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

apiInstance.customergroups1(body).then(() => {
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

<a name="customergroupsByGroupId"></a>
# **customergroupsByGroupId**
> UserGroupWsDTO17Model customergroupsByGroupId(groupId, opts)

CustomergroupsByGroupId

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
apiInstance.customergroupsByGroupId(groupId, opts).then((data) => {
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

<a name="customergroupsMembersByGroupId"></a>
# **customergroupsMembersByGroupId**
> customergroupsMembersByGroupId(groupId, body)

CustomergroupsMembersByGroupId

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

apiInstance.customergroupsMembersByGroupId(groupId, body).then(() => {
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

<a name="customergroupsMembersByGroupId1"></a>
# **customergroupsMembersByGroupId1**
> customergroupsMembersByGroupId1(groupId, body)

CustomergroupsMembersByGroupId

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

apiInstance.customergroupsMembersByGroupId1(groupId, body).then(() => {
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

<a name="customergroupsMembersByGroupIdAndUserId"></a>
# **customergroupsMembersByGroupIdAndUserId**
> customergroupsMembersByGroupIdAndUserId(groupId, userId)

CustomergroupsMembersByGroupIdAndUserId

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

apiInstance.customergroupsMembersByGroupIdAndUserId(groupId, userId).then(() => {
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

