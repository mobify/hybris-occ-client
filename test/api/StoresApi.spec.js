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

import expect from 'expect.js'
import Occ from '../config'

let instance
const {store} = Occ

beforeEach(() => {
    instance = new Occ.StoresApi()
})

describe('StoresApi', () => {
    describe('getStores', () => {
        it('should call getStores successfully', (done) => {
            instance.getStores({query: store.name})
                .then((res) => {
                    expect(res.stores[0].name).to.equal(store.name)
                    done()
                })
        })
    })
    describe('getStore', () => {
        it('should call getStore successfully', (done) => {
            instance.getStore(store.name)
                .then((res) => {
                    expect(res.geoPoint).to.eql(store.geoPoint)
                    done()
                })
        })
    })
})
