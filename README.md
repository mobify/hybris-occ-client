# occ

Occ - JavaScript client for occ
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: v2
- Package version: v2
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install occ --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Occ = require('occ');

var defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
var auth = defaultClient.authentications['auth'];
auth.accessToken = "YOUR ACCESS TOKEN"

var api = new Occ.CardtypesApi()

var opts = { 
  'fields': "fields_example" // {String} Response configuration (list of fields, which should be returned in response)
};
api.cardtypes(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://api-example.hybris.com/rest/v2/DefaultParameterValue/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Occ.CardtypesApi* | [**cardtypes**](docs/CardtypesApi.md#cardtypes) | **GET** /cardtypes | Cardtypes
*Occ.CatalogsApi* | [**catalogs**](docs/CatalogsApi.md#catalogs) | **GET** /catalogs | Catalogs
*Occ.CatalogsApi* | [**catalogsByCatalogId**](docs/CatalogsApi.md#catalogsByCatalogId) | **GET** /catalogs/{catalogId} | CatalogsByCatalogId
*Occ.CatalogsApi* | [**catalogsByCatalogIdAndCatalogVersionId**](docs/CatalogsApi.md#catalogsByCatalogIdAndCatalogVersionId) | **GET** /catalogs/{catalogId}/{catalogVersionId} | CatalogsByCatalogIdAndCatalogVersionId
*Occ.CatalogsApi* | [**catalogsCategoriesCategoryIdByCatalogId**](docs/CatalogsApi.md#catalogsCategoriesCategoryIdByCatalogId) | **GET** /catalogs/{catalogId}/{catalogVersionId}/categories/{categoryId} | CatalogsCategoriesCategoryIdByCatalogId
*Occ.CurrenciesApi* | [**currencies**](docs/CurrenciesApi.md#currencies) | **GET** /currencies | Currencies
*Occ.CustomergroupsApi* | [**customergroups**](docs/CustomergroupsApi.md#customergroups) | **GET** /customergroups | Customergroups
*Occ.CustomergroupsApi* | [**customergroups1**](docs/CustomergroupsApi.md#customergroups1) | **POST** /customergroups | Customergroups
*Occ.CustomergroupsApi* | [**customergroupsByGroupId**](docs/CustomergroupsApi.md#customergroupsByGroupId) | **GET** /customergroups/{groupId} | CustomergroupsByGroupId
*Occ.CustomergroupsApi* | [**customergroupsMembersByGroupId**](docs/CustomergroupsApi.md#customergroupsMembersByGroupId) | **PUT** /customergroups/{groupId}/members | CustomergroupsMembersByGroupId
*Occ.CustomergroupsApi* | [**customergroupsMembersByGroupId1**](docs/CustomergroupsApi.md#customergroupsMembersByGroupId1) | **PATCH** /customergroups/{groupId}/members | CustomergroupsMembersByGroupId
*Occ.CustomergroupsApi* | [**customergroupsMembersByGroupIdAndUserId**](docs/CustomergroupsApi.md#customergroupsMembersByGroupIdAndUserId) | **DELETE** /customergroups/{groupId}/members/{userId} | CustomergroupsMembersByGroupIdAndUserId
*Occ.DeliverycountriesApi* | [**deliverycountries**](docs/DeliverycountriesApi.md#deliverycountries) | **GET** /deliverycountries | Deliverycountries
*Occ.ExportApi* | [**exportProducts**](docs/ExportApi.md#exportProducts) | **GET** /export/products | ExportProducts
*Occ.FeedsApi* | [**feedsOrdersStatusfeed**](docs/FeedsApi.md#feedsOrdersStatusfeed) | **GET** /feeds/orders/statusfeed | FeedsOrdersStatusfeed
*Occ.ForgottenpasswordtokensApi* | [**forgottenpasswordtokens**](docs/ForgottenpasswordtokensApi.md#forgottenpasswordtokens) | **POST** /forgottenpasswordtokens | Forgottenpasswordtokens
*Occ.LanguagesApi* | [**languages**](docs/LanguagesApi.md#languages) | **GET** /languages | Languages
*Occ.OrdersApi* | [**ordersByCode**](docs/OrdersApi.md#ordersByCode) | **GET** /orders/{code} | OrdersByCode
*Occ.ProductsApi* | [**productsByProductCode**](docs/ProductsApi.md#productsByProductCode) | **GET** /products/{productCode} | ProductsByProductCode
*Occ.ProductsApi* | [**productsExpressupdate**](docs/ProductsApi.md#productsExpressupdate) | **GET** /products/expressupdate | ProductsExpressupdate
*Occ.ProductsApi* | [**productsReferencesByProductCode**](docs/ProductsApi.md#productsReferencesByProductCode) | **GET** /products/{productCode}/references | ProductsReferencesByProductCode
*Occ.ProductsApi* | [**productsReviewsByProductCode**](docs/ProductsApi.md#productsReviewsByProductCode) | **GET** /products/{productCode}/reviews | ProductsReviewsByProductCode
*Occ.ProductsApi* | [**productsReviewsByProductCode1**](docs/ProductsApi.md#productsReviewsByProductCode1) | **POST** /products/{productCode}/reviews | ProductsReviewsByProductCode
*Occ.ProductsApi* | [**productsSearch1**](docs/ProductsApi.md#productsSearch1) | **GET** /products/search | ProductsSearch
*Occ.ProductsApi* | [**productsStockByProductCode1**](docs/ProductsApi.md#productsStockByProductCode1) | **GET** /products/{productCode}/stock | ProductsStockByProductCode
*Occ.ProductsApi* | [**productsStockByProductCodeAndStoreName**](docs/ProductsApi.md#productsStockByProductCodeAndStoreName) | **GET** /products/{productCode}/stock/{storeName} | ProductsStockByProductCodeAndStoreName
*Occ.ProductsApi* | [**productsSuggestions**](docs/ProductsApi.md#productsSuggestions) | **GET** /products/suggestions | ProductsSuggestions
*Occ.PromotionsApi* | [**promotions**](docs/PromotionsApi.md#promotions) | **GET** /promotions | Promotions
*Occ.PromotionsApi* | [**promotionsByCode**](docs/PromotionsApi.md#promotionsByCode) | **GET** /promotions/{code} | PromotionsByCode
*Occ.StoresApi* | [**stores1**](docs/StoresApi.md#stores1) | **GET** /stores | Stores
*Occ.StoresApi* | [**storesByStoreId**](docs/StoresApi.md#storesByStoreId) | **GET** /stores/{storeId} | StoresByStoreId
*Occ.TitlesApi* | [**titles**](docs/TitlesApi.md#titles) | **GET** /titles | Titles
*Occ.UsersApi* | [**users**](docs/UsersApi.md#users) | **POST** /users | Users
*Occ.UsersApi* | [**usersAddressesByUserId**](docs/UsersApi.md#usersAddressesByUserId) | **GET** /users/{userId}/addresses | UsersAddressesByUserId
*Occ.UsersApi* | [**usersAddressesByUserId1**](docs/UsersApi.md#usersAddressesByUserId1) | **POST** /users/{userId}/addresses | UsersAddressesByUserId
*Occ.UsersApi* | [**usersAddressesByUserIdAndAddressId**](docs/UsersApi.md#usersAddressesByUserIdAndAddressId) | **GET** /users/{userId}/addresses/{addressId} | UsersAddressesByUserIdAndAddressId
*Occ.UsersApi* | [**usersAddressesByUserIdAndAddressId1**](docs/UsersApi.md#usersAddressesByUserIdAndAddressId1) | **PUT** /users/{userId}/addresses/{addressId} | UsersAddressesByUserIdAndAddressId
*Occ.UsersApi* | [**usersAddressesByUserIdAndAddressId2**](docs/UsersApi.md#usersAddressesByUserIdAndAddressId2) | **PATCH** /users/{userId}/addresses/{addressId} | UsersAddressesByUserIdAndAddressId
*Occ.UsersApi* | [**usersAddressesByUserIdAndAddressId3**](docs/UsersApi.md#usersAddressesByUserIdAndAddressId3) | **DELETE** /users/{userId}/addresses/{addressId} | UsersAddressesByUserIdAndAddressId
*Occ.UsersApi* | [**usersAddressesVerificationByUserId**](docs/UsersApi.md#usersAddressesVerificationByUserId) | **POST** /users/{userId}/addresses/verification | UsersAddressesVerificationByUserId
*Occ.UsersApi* | [**usersByUserId**](docs/UsersApi.md#usersByUserId) | **GET** /users/{userId} | UsersByUserId
*Occ.UsersApi* | [**usersByUserId1**](docs/UsersApi.md#usersByUserId1) | **PUT** /users/{userId} | UsersByUserId
*Occ.UsersApi* | [**usersByUserId2**](docs/UsersApi.md#usersByUserId2) | **PATCH** /users/{userId} | UsersByUserId
*Occ.UsersApi* | [**usersByUserId3**](docs/UsersApi.md#usersByUserId3) | **DELETE** /users/{userId} | UsersByUserId
*Occ.UsersApi* | [**usersCartsAddressesDeliveryByUserId**](docs/UsersApi.md#usersCartsAddressesDeliveryByUserId) | **POST** /users/{userId}/carts/{cartId}/addresses/delivery | UsersCartsAddressesDeliveryByUserId
*Occ.UsersApi* | [**usersCartsAddressesDeliveryByUserId1**](docs/UsersApi.md#usersCartsAddressesDeliveryByUserId1) | **PUT** /users/{userId}/carts/{cartId}/addresses/delivery | UsersCartsAddressesDeliveryByUserId
*Occ.UsersApi* | [**usersCartsAddressesDeliveryByUserId2**](docs/UsersApi.md#usersCartsAddressesDeliveryByUserId2) | **DELETE** /users/{userId}/carts/{cartId}/addresses/delivery | UsersCartsAddressesDeliveryByUserId
*Occ.UsersApi* | [**usersCartsByUserId**](docs/UsersApi.md#usersCartsByUserId) | **GET** /users/{userId}/carts | UsersCartsByUserId
*Occ.UsersApi* | [**usersCartsByUserId1**](docs/UsersApi.md#usersCartsByUserId1) | **POST** /users/{userId}/carts | UsersCartsByUserId
*Occ.UsersApi* | [**usersCartsByUserIdAndCartId**](docs/UsersApi.md#usersCartsByUserIdAndCartId) | **GET** /users/{userId}/carts/{cartId} | UsersCartsByUserIdAndCartId
*Occ.UsersApi* | [**usersCartsByUserIdAndCartId1**](docs/UsersApi.md#usersCartsByUserIdAndCartId1) | **DELETE** /users/{userId}/carts/{cartId} | UsersCartsByUserIdAndCartId
*Occ.UsersApi* | [**usersCartsClonesavedcartByUserId**](docs/UsersApi.md#usersCartsClonesavedcartByUserId) | **POST** /users/{userId}/carts/{cartId}/clonesavedcart | UsersCartsClonesavedcartByUserId
*Occ.UsersApi* | [**usersCartsDeliverymodeByUserIdAndCartId**](docs/UsersApi.md#usersCartsDeliverymodeByUserIdAndCartId) | **GET** /users/{userId}/carts/{cartId}/deliverymode | UsersCartsDeliverymodeByUserIdAndCartId
*Occ.UsersApi* | [**usersCartsDeliverymodeByUserIdAndCartId1**](docs/UsersApi.md#usersCartsDeliverymodeByUserIdAndCartId1) | **PUT** /users/{userId}/carts/{cartId}/deliverymode | UsersCartsDeliverymodeByUserIdAndCartId
*Occ.UsersApi* | [**usersCartsDeliverymodeByUserIdAndCartId2**](docs/UsersApi.md#usersCartsDeliverymodeByUserIdAndCartId2) | **DELETE** /users/{userId}/carts/{cartId}/deliverymode | UsersCartsDeliverymodeByUserIdAndCartId
*Occ.UsersApi* | [**usersCartsDeliverymodesByUserIdAndCartId**](docs/UsersApi.md#usersCartsDeliverymodesByUserIdAndCartId) | **GET** /users/{userId}/carts/{cartId}/deliverymodes | UsersCartsDeliverymodesByUserIdAndCartId
*Occ.UsersApi* | [**usersCartsEmailByUserIdAndCartId**](docs/UsersApi.md#usersCartsEmailByUserIdAndCartId) | **PUT** /users/{userId}/carts/{cartId}/email | UsersCartsEmailByUserIdAndCartId
*Occ.UsersApi* | [**usersCartsEntriesByUserIdAndCartId**](docs/UsersApi.md#usersCartsEntriesByUserIdAndCartId) | **GET** /users/{userId}/carts/{cartId}/entries | UsersCartsEntriesByUserIdAndCartId
*Occ.UsersApi* | [**usersCartsEntriesByUserIdAndCartId1**](docs/UsersApi.md#usersCartsEntriesByUserIdAndCartId1) | **POST** /users/{userId}/carts/{cartId}/entries | UsersCartsEntriesByUserIdAndCartId
*Occ.UsersApi* | [**usersCartsEntriesEntryNumberByUserId**](docs/UsersApi.md#usersCartsEntriesEntryNumberByUserId) | **GET** /users/{userId}/carts/{cartId}/entries/{entryNumber} | UsersCartsEntriesEntryNumberByUserId
*Occ.UsersApi* | [**usersCartsEntriesEntryNumberByUserId1**](docs/UsersApi.md#usersCartsEntriesEntryNumberByUserId1) | **PUT** /users/{userId}/carts/{cartId}/entries/{entryNumber} | UsersCartsEntriesEntryNumberByUserId
*Occ.UsersApi* | [**usersCartsEntriesEntryNumberByUserId2**](docs/UsersApi.md#usersCartsEntriesEntryNumberByUserId2) | **PATCH** /users/{userId}/carts/{cartId}/entries/{entryNumber} | UsersCartsEntriesEntryNumberByUserId
*Occ.UsersApi* | [**usersCartsEntriesEntryNumberByUserId3**](docs/UsersApi.md#usersCartsEntriesEntryNumberByUserId3) | **DELETE** /users/{userId}/carts/{cartId}/entries/{entryNumber} | UsersCartsEntriesEntryNumberByUserId
*Occ.UsersApi* | [**usersCartsFlagForDeletionByUserId**](docs/UsersApi.md#usersCartsFlagForDeletionByUserId) | **PATCH** /users/{userId}/carts/{cartId}/flagForDeletion | UsersCartsFlagForDeletionByUserId
*Occ.UsersApi* | [**usersCartsPaymentdetailsByUserId**](docs/UsersApi.md#usersCartsPaymentdetailsByUserId) | **POST** /users/{userId}/carts/{cartId}/paymentdetails | UsersCartsPaymentdetailsByUserId
*Occ.UsersApi* | [**usersCartsPaymentdetailsByUserId1**](docs/UsersApi.md#usersCartsPaymentdetailsByUserId1) | **PUT** /users/{userId}/carts/{cartId}/paymentdetails | UsersCartsPaymentdetailsByUserId
*Occ.UsersApi* | [**usersCartsPromotionsByUserIdAndCartId**](docs/UsersApi.md#usersCartsPromotionsByUserIdAndCartId) | **GET** /users/{userId}/carts/{cartId}/promotions | UsersCartsPromotionsByUserIdAndCartId
*Occ.UsersApi* | [**usersCartsPromotionsByUserIdAndCartId1**](docs/UsersApi.md#usersCartsPromotionsByUserIdAndCartId1) | **POST** /users/{userId}/carts/{cartId}/promotions | UsersCartsPromotionsByUserIdAndCartId
*Occ.UsersApi* | [**usersCartsPromotionsPromotionIdByUserId**](docs/UsersApi.md#usersCartsPromotionsPromotionIdByUserId) | **GET** /users/{userId}/carts/{cartId}/promotions/{promotionId} | UsersCartsPromotionsPromotionIdByUserId
*Occ.UsersApi* | [**usersCartsPromotionsPromotionIdByUserId1**](docs/UsersApi.md#usersCartsPromotionsPromotionIdByUserId1) | **DELETE** /users/{userId}/carts/{cartId}/promotions/{promotionId} | UsersCartsPromotionsPromotionIdByUserId
*Occ.UsersApi* | [**usersCartsRestoresavedcartByUserId**](docs/UsersApi.md#usersCartsRestoresavedcartByUserId) | **PATCH** /users/{userId}/carts/{cartId}/restoresavedcart | UsersCartsRestoresavedcartByUserId
*Occ.UsersApi* | [**usersCartsSaveByUserIdAndCartId**](docs/UsersApi.md#usersCartsSaveByUserIdAndCartId) | **PATCH** /users/{userId}/carts/{cartId}/save | UsersCartsSaveByUserIdAndCartId
*Occ.UsersApi* | [**usersCartsSavedcartByUserIdAndCartId**](docs/UsersApi.md#usersCartsSavedcartByUserIdAndCartId) | **GET** /users/{userId}/carts/{cartId}/savedcart | UsersCartsSavedcartByUserIdAndCartId
*Occ.UsersApi* | [**usersCartsVouchersByUserIdAndCartId**](docs/UsersApi.md#usersCartsVouchersByUserIdAndCartId) | **GET** /users/{userId}/carts/{cartId}/vouchers | UsersCartsVouchersByUserIdAndCartId
*Occ.UsersApi* | [**usersCartsVouchersByUserIdAndCartId1**](docs/UsersApi.md#usersCartsVouchersByUserIdAndCartId1) | **POST** /users/{userId}/carts/{cartId}/vouchers | UsersCartsVouchersByUserIdAndCartId
*Occ.UsersApi* | [**usersCartsVouchersVoucherIdByUserId**](docs/UsersApi.md#usersCartsVouchersVoucherIdByUserId) | **DELETE** /users/{userId}/carts/{cartId}/vouchers/{voucherId} | UsersCartsVouchersVoucherIdByUserId
*Occ.UsersApi* | [**usersCustomergroupsByUserId**](docs/UsersApi.md#usersCustomergroupsByUserId) | **GET** /users/{userId}/customergroups | UsersCustomergroupsByUserId
*Occ.UsersApi* | [**usersLoginByUserId**](docs/UsersApi.md#usersLoginByUserId) | **PUT** /users/{userId}/login | UsersLoginByUserId
*Occ.UsersApi* | [**usersOrdersByUserId1**](docs/UsersApi.md#usersOrdersByUserId1) | **GET** /users/{userId}/orders | UsersOrdersByUserId
*Occ.UsersApi* | [**usersOrdersByUserId2**](docs/UsersApi.md#usersOrdersByUserId2) | **POST** /users/{userId}/orders | UsersOrdersByUserId
*Occ.UsersApi* | [**usersOrdersByUserIdAndCode**](docs/UsersApi.md#usersOrdersByUserIdAndCode) | **GET** /users/{userId}/orders/{code} | UsersOrdersByUserIdAndCode
*Occ.UsersApi* | [**usersPasswordByUserId**](docs/UsersApi.md#usersPasswordByUserId) | **PUT** /users/{userId}/password | UsersPasswordByUserId
*Occ.UsersApi* | [**usersPaymentdetailsByUserId**](docs/UsersApi.md#usersPaymentdetailsByUserId) | **GET** /users/{userId}/paymentdetails/{paymentDetailsId} | UsersPaymentdetailsByUserId
*Occ.UsersApi* | [**usersPaymentdetailsByUserId1**](docs/UsersApi.md#usersPaymentdetailsByUserId1) | **PUT** /users/{userId}/paymentdetails/{paymentDetailsId} | UsersPaymentdetailsByUserId
*Occ.UsersApi* | [**usersPaymentdetailsByUserId2**](docs/UsersApi.md#usersPaymentdetailsByUserId2) | **PATCH** /users/{userId}/paymentdetails/{paymentDetailsId} | UsersPaymentdetailsByUserId
*Occ.UsersApi* | [**usersPaymentdetailsByUserId3**](docs/UsersApi.md#usersPaymentdetailsByUserId3) | **DELETE** /users/{userId}/paymentdetails/{paymentDetailsId} | UsersPaymentdetailsByUserId
*Occ.UsersApi* | [**usersPaymentdetailsByUserId4**](docs/UsersApi.md#usersPaymentdetailsByUserId4) | **GET** /users/{userId}/paymentdetails | UsersPaymentdetailsByUserId
*Occ.VouchersApi* | [**vouchersByCode**](docs/VouchersApi.md#vouchersByCode) | **GET** /vouchers/{code} | VouchersByCode


## Documentation for Models

 - [Occ.AddressListWsDTOModel](docs/AddressListWsDTOModel.md)
 - [Occ.AddressWsDTO296Model](docs/AddressWsDTO296Model.md)
 - [Occ.AddressWsDTOModel](docs/AddressWsDTOModel.md)
 - [Occ.BaseOptionWsDTOModel](docs/BaseOptionWsDTOModel.md)
 - [Occ.BillingAddressModel](docs/BillingAddressModel.md)
 - [Occ.BreadcrumbWsDTOModel](docs/BreadcrumbWsDTOModel.md)
 - [Occ.CardTypeListWsDTOModel](docs/CardTypeListWsDTOModel.md)
 - [Occ.CardTypeWsDTOModel](docs/CardTypeWsDTOModel.md)
 - [Occ.CartListWsDTOModel](docs/CartListWsDTOModel.md)
 - [Occ.CartWsDTOModel](docs/CartWsDTOModel.md)
 - [Occ.CatalogListWsDTOModel](docs/CatalogListWsDTOModel.md)
 - [Occ.CatalogVersionWsDTOModel](docs/CatalogVersionWsDTOModel.md)
 - [Occ.CatalogWsDTOModel](docs/CatalogWsDTOModel.md)
 - [Occ.CategoryHierarchyWsDTOModel](docs/CategoryHierarchyWsDTOModel.md)
 - [Occ.CategoryWsDTOModel](docs/CategoryWsDTOModel.md)
 - [Occ.ClassificationWsDTOModel](docs/ClassificationWsDTOModel.md)
 - [Occ.ConsignmentEntryWsDTOModel](docs/ConsignmentEntryWsDTOModel.md)
 - [Occ.ConsignmentWsDTOModel](docs/ConsignmentWsDTOModel.md)
 - [Occ.CountryListWsDTOModel](docs/CountryListWsDTOModel.md)
 - [Occ.CountryModel](docs/CountryModel.md)
 - [Occ.CountryWsDTOModel](docs/CountryWsDTOModel.md)
 - [Occ.CurrencyListWsDTOModel](docs/CurrencyListWsDTOModel.md)
 - [Occ.CurrencyModel](docs/CurrencyModel.md)
 - [Occ.CurrencyWsDTOModel](docs/CurrencyWsDTOModel.md)
 - [Occ.DeliveryModeListWsDTOModel](docs/DeliveryModeListWsDTOModel.md)
 - [Occ.DeliveryModeWsDTOModel](docs/DeliveryModeWsDTOModel.md)
 - [Occ.DeliveryOrderEntryGroupWsDTOModel](docs/DeliveryOrderEntryGroupWsDTOModel.md)
 - [Occ.DeliveryPointOfServiceModel](docs/DeliveryPointOfServiceModel.md)
 - [Occ.FacetValueWsDTOModel](docs/FacetValueWsDTOModel.md)
 - [Occ.FacetWsDTOModel](docs/FacetWsDTOModel.md)
 - [Occ.FeatureUnitWsDTOModel](docs/FeatureUnitWsDTOModel.md)
 - [Occ.FeatureValueWsDTOModel](docs/FeatureValueWsDTOModel.md)
 - [Occ.FeatureWsDTOModel](docs/FeatureWsDTOModel.md)
 - [Occ.FutureStockWsDTOModel](docs/FutureStockWsDTOModel.md)
 - [Occ.GeoPointWsDTOModel](docs/GeoPointWsDTOModel.md)
 - [Occ.ImageWsDTOModel](docs/ImageWsDTOModel.md)
 - [Occ.LanguageListWsDTOModel](docs/LanguageListWsDTOModel.md)
 - [Occ.LanguageModel](docs/LanguageModel.md)
 - [Occ.LanguageWsDTOModel](docs/LanguageWsDTOModel.md)
 - [Occ.MemberListWsDTOModel](docs/MemberListWsDTOModel.md)
 - [Occ.MemberModel](docs/MemberModel.md)
 - [Occ.OpeningScheduleWsDTOModel](docs/OpeningScheduleWsDTOModel.md)
 - [Occ.OrderEntryListWsDTOModel](docs/OrderEntryListWsDTOModel.md)
 - [Occ.OrderEntryWsDTO542Model](docs/OrderEntryWsDTO542Model.md)
 - [Occ.OrderEntryWsDTOModel](docs/OrderEntryWsDTOModel.md)
 - [Occ.OrderHistoryListWsDTOModel](docs/OrderHistoryListWsDTOModel.md)
 - [Occ.OrderHistoryWsDTOModel](docs/OrderHistoryWsDTOModel.md)
 - [Occ.OrderStatusUpdateElementListWsDTOModel](docs/OrderStatusUpdateElementListWsDTOModel.md)
 - [Occ.OrderStatusUpdateElementWsDTOModel](docs/OrderStatusUpdateElementWsDTOModel.md)
 - [Occ.OrderWsDTOModel](docs/OrderWsDTOModel.md)
 - [Occ.PaginationWsDTOModel](docs/PaginationWsDTOModel.md)
 - [Occ.PaymentDetailsListWsDTOModel](docs/PaymentDetailsListWsDTOModel.md)
 - [Occ.PaymentDetailsWsDTO640Model](docs/PaymentDetailsWsDTO640Model.md)
 - [Occ.PaymentDetailsWsDTOModel](docs/PaymentDetailsWsDTOModel.md)
 - [Occ.PickupOrderEntryGroupWsDTOModel](docs/PickupOrderEntryGroupWsDTOModel.md)
 - [Occ.PointOfServiceStockWsDTOModel](docs/PointOfServiceStockWsDTOModel.md)
 - [Occ.PointOfServiceWsDTOModel](docs/PointOfServiceWsDTOModel.md)
 - [Occ.PriceRangeWsDTOModel](docs/PriceRangeWsDTOModel.md)
 - [Occ.PriceWsDTOModel](docs/PriceWsDTOModel.md)
 - [Occ.PrincipalWsDTOModel](docs/PrincipalWsDTOModel.md)
 - [Occ.ProductExpressUpdateElementListWsDTOModel](docs/ProductExpressUpdateElementListWsDTOModel.md)
 - [Occ.ProductExpressUpdateElementWsDTOModel](docs/ProductExpressUpdateElementWsDTOModel.md)
 - [Occ.ProductListWsDTOModel](docs/ProductListWsDTOModel.md)
 - [Occ.ProductModel](docs/ProductModel.md)
 - [Occ.ProductReferenceListWsDTOModel](docs/ProductReferenceListWsDTOModel.md)
 - [Occ.ProductReferenceWsDTO173Model](docs/ProductReferenceWsDTO173Model.md)
 - [Occ.ProductReferenceWsDTOModel](docs/ProductReferenceWsDTOModel.md)
 - [Occ.ProductSearchPageWsDTOModel](docs/ProductSearchPageWsDTOModel.md)
 - [Occ.ProductWsDTO174Model](docs/ProductWsDTO174Model.md)
 - [Occ.ProductWsDTOModel](docs/ProductWsDTOModel.md)
 - [Occ.PromotionListWsDTOModel](docs/PromotionListWsDTOModel.md)
 - [Occ.PromotionOrderEntryConsumedWsDTOModel](docs/PromotionOrderEntryConsumedWsDTOModel.md)
 - [Occ.PromotionRestrictionWsDTOModel](docs/PromotionRestrictionWsDTOModel.md)
 - [Occ.PromotionResultListWsDTOModel](docs/PromotionResultListWsDTOModel.md)
 - [Occ.PromotionResultWsDTOModel](docs/PromotionResultWsDTOModel.md)
 - [Occ.PromotionWsDTOModel](docs/PromotionWsDTOModel.md)
 - [Occ.RegionModel](docs/RegionModel.md)
 - [Occ.RegionWsDTOModel](docs/RegionWsDTOModel.md)
 - [Occ.ReviewListWsDTOModel](docs/ReviewListWsDTOModel.md)
 - [Occ.ReviewWsDTO208Model](docs/ReviewWsDTO208Model.md)
 - [Occ.ReviewWsDTOModel](docs/ReviewWsDTOModel.md)
 - [Occ.SaveCartResultWsDTOModel](docs/SaveCartResultWsDTOModel.md)
 - [Occ.SearchQueryWsDTOModel](docs/SearchQueryWsDTOModel.md)
 - [Occ.SearchStateWsDTOModel](docs/SearchStateWsDTOModel.md)
 - [Occ.SortWsDTOModel](docs/SortWsDTOModel.md)
 - [Occ.SpecialOpeningDayWsDTOModel](docs/SpecialOpeningDayWsDTOModel.md)
 - [Occ.SpellingSuggestionWsDTOModel](docs/SpellingSuggestionWsDTOModel.md)
 - [Occ.StockWsDTOModel](docs/StockWsDTOModel.md)
 - [Occ.StoreFinderSearchPageWsDTOModel](docs/StoreFinderSearchPageWsDTOModel.md)
 - [Occ.StoreFinderStockSearchPageWsDTOModel](docs/StoreFinderStockSearchPageWsDTOModel.md)
 - [Occ.SuggestionListWsDTOModel](docs/SuggestionListWsDTOModel.md)
 - [Occ.SuggestionWsDTOModel](docs/SuggestionWsDTOModel.md)
 - [Occ.TimeWsDTOModel](docs/TimeWsDTOModel.md)
 - [Occ.TitleListWsDTOModel](docs/TitleListWsDTOModel.md)
 - [Occ.TitleWsDTOModel](docs/TitleWsDTOModel.md)
 - [Occ.UserGroupListWsDTOModel](docs/UserGroupListWsDTOModel.md)
 - [Occ.UserGroupWsDTO17Model](docs/UserGroupWsDTO17Model.md)
 - [Occ.UserGroupWsDTOModel](docs/UserGroupWsDTOModel.md)
 - [Occ.UserSignUpWsDTOModel](docs/UserSignUpWsDTOModel.md)
 - [Occ.UserWsDTO286Model](docs/UserWsDTO286Model.md)
 - [Occ.UserWsDTOModel](docs/UserWsDTOModel.md)
 - [Occ.VariantCategoryWsDTOModel](docs/VariantCategoryWsDTOModel.md)
 - [Occ.VariantMatrixElementWsDTOModel](docs/VariantMatrixElementWsDTOModel.md)
 - [Occ.VariantOptionQualifierWsDTOModel](docs/VariantOptionQualifierWsDTOModel.md)
 - [Occ.VariantOptionWsDTOModel](docs/VariantOptionWsDTOModel.md)
 - [Occ.VariantValueCategoryWsDTOModel](docs/VariantValueCategoryWsDTOModel.md)
 - [Occ.VoucherListWsDTOModel](docs/VoucherListWsDTOModel.md)
 - [Occ.VoucherWsDTOModel](docs/VoucherWsDTOModel.md)
 - [Occ.WeekdayOpeningDayWsDTOModel](docs/WeekdayOpeningDayWsDTOModel.md)


## Documentation for Authorization


### auth

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: http://api-example.hybris.com/rest/authorizationserver/authorize
- **Scopes**: N/A

