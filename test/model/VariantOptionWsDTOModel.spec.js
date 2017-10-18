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
    instance = new Occ.VariantOptionWsDTOModel();
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

  describe('VariantOptionWsDTOModel', function() {
    it('should create an instance of VariantOptionWsDTOModel', function() {
      // uncomment below and update the code to test VariantOptionWsDTOModel
      //var instane = new Occ.VariantOptionWsDTOModel();
      //expect(instance).to.be.a(Occ.VariantOptionWsDTOModel);
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new Occ.VariantOptionWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property stock (base name: "stock")', function() {
      // uncomment below and update the code to test the property stock
      //var instane = new Occ.VariantOptionWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new Occ.VariantOptionWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property priceData (base name: "priceData")', function() {
      // uncomment below and update the code to test the property priceData
      //var instane = new Occ.VariantOptionWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property variantOptionQualifiers (base name: "variantOptionQualifiers")', function() {
      // uncomment below and update the code to test the property variantOptionQualifiers
      //var instane = new Occ.VariantOptionWsDTOModel();
      //expect(instance).to.be();
    });

  });

}));
