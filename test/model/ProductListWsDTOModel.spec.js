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
    instance = new Occ.ProductListWsDTOModel();
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

  describe('ProductListWsDTOModel', function() {
    it('should create an instance of ProductListWsDTOModel', function() {
      // uncomment below and update the code to test ProductListWsDTOModel
      //var instane = new Occ.ProductListWsDTOModel();
      //expect(instance).to.be.a(Occ.ProductListWsDTOModel);
    });

    it('should have the property products (base name: "products")', function() {
      // uncomment below and update the code to test the property products
      //var instane = new Occ.ProductListWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property catalog (base name: "catalog")', function() {
      // uncomment below and update the code to test the property catalog
      //var instane = new Occ.ProductListWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new Occ.ProductListWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property totalProductCount (base name: "totalProductCount")', function() {
      // uncomment below and update the code to test the property totalProductCount
      //var instane = new Occ.ProductListWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property totalPageCount (base name: "totalPageCount")', function() {
      // uncomment below and update the code to test the property totalPageCount
      //var instane = new Occ.ProductListWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property currentPage (base name: "currentPage")', function() {
      // uncomment below and update the code to test the property currentPage
      //var instane = new Occ.ProductListWsDTOModel();
      //expect(instance).to.be();
    });

  });

}));
