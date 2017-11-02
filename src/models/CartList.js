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
import Cart from './Cart'

/**
* The CartList model module.
* @module models/CartList
* @version v2
*/
export default class CartList {
    /**
    * Constructs a new <code>CartList</code>.
    * @alias module:models/CartList
    * @class
    */

    constructor() {
        /**
    *
    * @member {Array.<module:models/Cart>} carts
    */
        this.carts = undefined
    }

    /**
    * Constructs a <code>CartList</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/CartList} obj Optional instance to populate.
    * @return {module:models/CartList} The populated
    * <code>CartList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartList()

            if (data.hasOwnProperty('carts')) {
                obj.carts = ApiClient.convertToType(data.carts, [Cart])
            }
        }
        return obj
    }

}
