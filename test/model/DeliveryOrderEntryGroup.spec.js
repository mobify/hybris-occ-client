/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

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
        define(['expect.js', '../../src/index'], factory)
    } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
        factory(require('expect.js'), require('../../src/index'))
    } else {
    // Browser globals (root is window)
        factory(root.expect, root.Occ)
    }
}(this, (expect, Occ) => {
    'use strict'

    let instance

    beforeEach(() => {
        instance = new Occ.DeliveryOrderEntryGroup()
    })

    const getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('DeliveryOrderEntryGroup', () => {
        it('should create an instance of DeliveryOrderEntryGroup', () => {
            // uncomment below and update the code to test DeliveryOrderEntryGroup
            // var instane = new Occ.DeliveryOrderEntryGroup();
            // expect(instance).to.be.a(Occ.DeliveryOrderEntryGroup);
        })

        it('should have the property deliveryAddress (base name: "deliveryAddress")', () => {
            // uncomment below and update the code to test the property deliveryAddress
            // var instane = new Occ.DeliveryOrderEntryGroup();
            // expect(instance).to.be();
        })

        it('should have the property totalPriceWithTax (base name: "totalPriceWithTax")', () => {
            // uncomment below and update the code to test the property totalPriceWithTax
            // var instane = new Occ.DeliveryOrderEntryGroup();
            // expect(instance).to.be();
        })

        it('should have the property entries (base name: "entries")', () => {
            // uncomment below and update the code to test the property entries
            // var instane = new Occ.DeliveryOrderEntryGroup();
            // expect(instance).to.be();
        })

        it('should have the property quantity (base name: "quantity")', () => {
            // uncomment below and update the code to test the property quantity
            // var instane = new Occ.DeliveryOrderEntryGroup();
            // expect(instance).to.be();
        })

    })

}))
