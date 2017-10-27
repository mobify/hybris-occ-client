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
    instance = new Occ.RegionWsDTOModel();
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

  describe('RegionWsDTOModel', function() {
    it('should create an instance of RegionWsDTOModel', function() {
      // uncomment below and update the code to test RegionWsDTOModel
      //var instane = new Occ.RegionWsDTOModel();
      //expect(instance).to.be.a(Occ.RegionWsDTOModel);
    });

    it('should have the property isocode (base name: "isocode")', function() {
      // uncomment below and update the code to test the property isocode
      //var instane = new Occ.RegionWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property isocodeShort (base name: "isocodeShort")', function() {
      // uncomment below and update the code to test the property isocodeShort
      //var instane = new Occ.RegionWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property countryIso (base name: "countryIso")', function() {
      // uncomment below and update the code to test the property countryIso
      //var instane = new Occ.RegionWsDTOModel();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Occ.RegionWsDTOModel();
      //expect(instance).to.be();
    });

  });

}));