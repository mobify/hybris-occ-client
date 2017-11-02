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
import CurrencyOCC from './CurrencyOCC'

/**
* The CurrencyList model module.
* @module models/CurrencyList
* @version v2
*/
export default class CurrencyList {
    /**
    * Constructs a new <code>CurrencyList</code>.
    * @alias module:models/CurrencyList
    * @class
    */

    constructor() {
        /**
    *
    * @member {Array.<module:models/CurrencyOCC>} currencies
    */
        this.currencies = undefined
    }

    /**
    * Constructs a <code>CurrencyList</code> from a plain JavaScript
    * object, optionally creating a new instance. Copies all relevant properties
    * from <code>data</code> to <code>obj</code> if supplied or a new instance
    * if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/CurrencyList} obj Optional instance to
    * populate.
    * @return {module:models/CurrencyList} The populated
    * <code>CurrencyList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CurrencyList()

            if (data.hasOwnProperty('currencies')) {
                obj.currencies = ApiClient.convertToType(data.currencies, [CurrencyOCC])
            }
        }
        return obj
    }

}
