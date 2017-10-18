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
    instance = new Occ.ConsignmentEntryWsDTOModel();
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

  describe('ConsignmentEntryWsDTOModel', function() {
    it('should create an instance of ConsignmentEntryWsDTOModel', function() {
      // uncomment below and update the code to test ConsignmentEntryWsDTOModel
      //var instane = new Occ.ConsignmentEntryWsDTOModel();
      //expect(instance).to.be.a(Occ.ConsignmentEntryWsDTOModel);
    });

    it('should have the property orderEntry (base name: "orderEntry")', function() {
      // uncomment below and update the code to test the property orderEntry
      //var instane = new Occ.ConsignmentEntryWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instane = new Occ.ConsignmentEntryWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property shippedQuantity (base name: "shippedQuantity")', function() {
      // uncomment below and update the code to test the property shippedQuantity
      //var instane = new Occ.ConsignmentEntryWsDTOModel();
      //expect(instance).to.be();
    });

  });

}));
