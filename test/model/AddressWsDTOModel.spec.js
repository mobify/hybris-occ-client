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
    instance = new Occ.AddressWsDTOModel();
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

  describe('AddressWsDTOModel', function() {
    it('should create an instance of AddressWsDTOModel', function() {
      // uncomment below and update the code to test AddressWsDTOModel
      //var instane = new Occ.AddressWsDTOModel();
      //expect(instance).to.be.a(Occ.AddressWsDTOModel);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Occ.AddressWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new Occ.AddressWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property titleCode (base name: "titleCode")', function() {
      // uncomment below and update the code to test the property titleCode
      //var instane = new Occ.AddressWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new Occ.AddressWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new Occ.AddressWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property companyName (base name: "companyName")', function() {
      // uncomment below and update the code to test the property companyName
      //var instane = new Occ.AddressWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property line1 (base name: "line1")', function() {
      // uncomment below and update the code to test the property line1
      //var instane = new Occ.AddressWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property line2 (base name: "line2")', function() {
      // uncomment below and update the code to test the property line2
      //var instane = new Occ.AddressWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property town (base name: "town")', function() {
      // uncomment below and update the code to test the property town
      //var instane = new Occ.AddressWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property region (base name: "region")', function() {
      // uncomment below and update the code to test the property region
      //var instane = new Occ.AddressWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postalCode")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instane = new Occ.AddressWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instane = new Occ.AddressWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new Occ.AddressWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new Occ.AddressWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property shippingAddress (base name: "shippingAddress")', function() {
      // uncomment below and update the code to test the property shippingAddress
      //var instane = new Occ.AddressWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property visibleInAddressBook (base name: "visibleInAddressBook")', function() {
      // uncomment below and update the code to test the property visibleInAddressBook
      //var instane = new Occ.AddressWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property formattedAddress (base name: "formattedAddress")', function() {
      // uncomment below and update the code to test the property formattedAddress
      //var instane = new Occ.AddressWsDTOModel();
      //expect(instance).to.be();
    });

  });

}));
