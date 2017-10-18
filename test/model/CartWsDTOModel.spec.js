/**
 * OCC
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Occ);
  }
}(this, function(expect, Occ) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Occ.CartWsDTOModel();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CartWsDTOModel', function() {
    it('should create an instance of CartWsDTOModel', function() {
      // uncomment below and update the code to test CartWsDTOModel
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be.a(Occ.CartWsDTOModel);
    });

    it('should have the property totalUnitCount (base name: "totalUnitCount")', function() {
      // uncomment below and update the code to test the property totalUnitCount
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property potentialOrderPromotions (base name: "potentialOrderPromotions")', function() {
      // uncomment below and update the code to test the property potentialOrderPromotions
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property potentialProductPromotions (base name: "potentialProductPromotions")', function() {
      // uncomment below and update the code to test the property potentialProductPromotions
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property expirationTime (base name: "expirationTime")', function() {
      // uncomment below and update the code to test the property expirationTime
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property saveTime (base name: "saveTime")', function() {
      // uncomment below and update the code to test the property saveTime
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property savedBy (base name: "savedBy")', function() {
      // uncomment below and update the code to test the property savedBy
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property net (base name: "net")', function() {
      // uncomment below and update the code to test the property net
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property totalPriceWithTax (base name: "totalPriceWithTax")', function() {
      // uncomment below and update the code to test the property totalPriceWithTax
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property totalPrice (base name: "totalPrice")', function() {
      // uncomment below and update the code to test the property totalPrice
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property totalTax (base name: "totalTax")', function() {
      // uncomment below and update the code to test the property totalTax
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property subTotal (base name: "subTotal")', function() {
      // uncomment below and update the code to test the property subTotal
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property deliveryCost (base name: "deliveryCost")', function() {
      // uncomment below and update the code to test the property deliveryCost
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property entries (base name: "entries")', function() {
      // uncomment below and update the code to test the property entries
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property totalItems (base name: "totalItems")', function() {
      // uncomment below and update the code to test the property totalItems
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property deliveryMode (base name: "deliveryMode")', function() {
      // uncomment below and update the code to test the property deliveryMode
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property deliveryAddress (base name: "deliveryAddress")', function() {
      // uncomment below and update the code to test the property deliveryAddress
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property paymentInfo (base name: "paymentInfo")', function() {
      // uncomment below and update the code to test the property paymentInfo
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property appliedOrderPromotions (base name: "appliedOrderPromotions")', function() {
      // uncomment below and update the code to test the property appliedOrderPromotions
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property appliedProductPromotions (base name: "appliedProductPromotions")', function() {
      // uncomment below and update the code to test the property appliedProductPromotions
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property productDiscounts (base name: "productDiscounts")', function() {
      // uncomment below and update the code to test the property productDiscounts
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property orderDiscounts (base name: "orderDiscounts")', function() {
      // uncomment below and update the code to test the property orderDiscounts
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property totalDiscounts (base name: "totalDiscounts")', function() {
      // uncomment below and update the code to test the property totalDiscounts
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property site (base name: "site")', function() {
      // uncomment below and update the code to test the property site
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property store (base name: "store")', function() {
      // uncomment below and update the code to test the property store
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property guid (base name: "guid")', function() {
      // uncomment below and update the code to test the property guid
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property calculated (base name: "calculated")', function() {
      // uncomment below and update the code to test the property calculated
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property appliedVouchers (base name: "appliedVouchers")', function() {
      // uncomment below and update the code to test the property appliedVouchers
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property pickupOrderGroups (base name: "pickupOrderGroups")', function() {
      // uncomment below and update the code to test the property pickupOrderGroups
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property deliveryOrderGroups (base name: "deliveryOrderGroups")', function() {
      // uncomment below and update the code to test the property deliveryOrderGroups
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property pickupItemsQuantity (base name: "pickupItemsQuantity")', function() {
      // uncomment below and update the code to test the property pickupItemsQuantity
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property deliveryItemsQuantity (base name: "deliveryItemsQuantity")', function() {
      // uncomment below and update the code to test the property deliveryItemsQuantity
      //var instane = new Occ.CartWsDTOModel();
      //expect(instance).to.be();
    });

  });

}));
