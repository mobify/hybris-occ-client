/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/**
 * OCC No description provided (generated by Swagger Codegen
 * https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git Do not edit the class
 * manually.
 *
 */

import ApiClient from '../ApiClient'

/**
* The Product model module.
* @module models/Product
* @version v2
*/
export default class Product {
    /**
    * Constructs a new <code>Product</code>.
    * @alias module:models/Product
    * @class
    */

    constructor() {
        /**
    *
    * @member {String} code
    */
        this.code = undefined
    }

    /**
    * Constructs a <code>Product</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/Product} obj Optional instance to populate.
    * @return {module:models/Product} The populated <code>Product</code>
    * instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Product()

            if (data.hasOwnProperty('code')) {
                obj.code = ApiClient.convertToType(data.code, 'String')
            }
        }
        return obj
    }



}
