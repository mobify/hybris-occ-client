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
import Feature from './Feature'

/**
* The Classification model module.
* @module models/Classification
* @version v2
*/
export default class Classification {
    /**
    * Constructs a new <code>Classification</code>.
    * @alias module:models/Classification
    * @class
    */

    constructor() {
        /**
    *
    * @member {String} code
    */
        this.code = undefined
        /**
    *
    * @member {String} name
    */
        this.name = undefined
        /**
    *
    * @member {Array.<module:models/Feature>} features
    */
        this.features = undefined
    }

    /**
    * Constructs a <code>Classification</code> from a plain JavaScript
    * object, optionally creating a new instance. Copies all relevant properties
    * from <code>data</code> to <code>obj</code> if supplied or a new instance
    * if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/Classification} obj Optional instance to
    * populate.
    * @return {module:models/Classification} The populated
    * <code>Classification</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Classification()

            if (data.hasOwnProperty('code')) {
                obj.code = ApiClient.convertToType(data.code, 'String')
            }
            if (data.hasOwnProperty('name')) {
                obj.name = ApiClient.convertToType(data.name, 'String')
            }
            if (data.hasOwnProperty('features')) {
                obj.features = ApiClient.convertToType(data.features, [Feature])
            }
        }
        return obj
    }

}
