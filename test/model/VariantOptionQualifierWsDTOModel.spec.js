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
    instance = new Occ.VariantOptionQualifierWsDTOModel();
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

  describe('VariantOptionQualifierWsDTOModel', function() {
    it('should create an instance of VariantOptionQualifierWsDTOModel', function() {
      // uncomment below and update the code to test VariantOptionQualifierWsDTOModel
      //var instane = new Occ.VariantOptionQualifierWsDTOModel();
      //expect(instance).to.be.a(Occ.VariantOptionQualifierWsDTOModel);
    });

    it('should have the property qualifier (base name: "qualifier")', function() {
      // uncomment below and update the code to test the property qualifier
      //var instane = new Occ.VariantOptionQualifierWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Occ.VariantOptionQualifierWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new Occ.VariantOptionQualifierWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instane = new Occ.VariantOptionQualifierWsDTOModel();
      //expect(instance).to.be();
    });

  });

}));