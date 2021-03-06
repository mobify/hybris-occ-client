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
import FeatureUnit from './FeatureUnit'
import FeatureValue from './FeatureValue'

/**
* The Feature model module.
* @module models/Feature
* @version v2
*/
export default class Feature {
    /**
    * Constructs a new <code>Feature</code>.
    * @alias module:models/Feature
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
    * @member {String} description
    */
        this.description = undefined
        /**
    *
    * @member {String} type
    */
        this.type = undefined
        /**
    *
    * @member {Boolean} range
    */
        this.range = undefined
        /**
    *
    * @member {Boolean} comparable
    */
        this.comparable = undefined
        /**
    * @member {module:models/FeatureUnit} featureUnit
    */
        this.featureUnit = undefined
        /**
    *
    * @member {Array.<module:models/FeatureValue>} featureValues
    */
        this.featureValues = undefined

    }

    /**
    * Constructs a <code>Feature</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/Feature} obj Optional instance to populate.
    * @return {module:models/Feature} The populated
    * <code>Feature</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Feature()

            if (data.hasOwnProperty('code')) {
                obj.code = ApiClient.convertToType(data.code, 'String')
            }
            if (data.hasOwnProperty('name')) {
                obj.name = ApiClient.convertToType(data.name, 'String')
            }
            if (data.hasOwnProperty('description')) {
                obj.description = ApiClient.convertToType(data.description, 'String')
            }
            if (data.hasOwnProperty('type')) {
                obj.type = ApiClient.convertToType(data.type, 'String')
            }
            if (data.hasOwnProperty('range')) {
                obj.range = ApiClient.convertToType(data.range, 'Boolean')
            }
            if (data.hasOwnProperty('comparable')) {
                obj.comparable = ApiClient.convertToType(data.comparable, 'Boolean')
            }
            if (data.hasOwnProperty('featureUnit')) {
                obj.featureUnit = FeatureUnit.constructFromObject(data.featureUnit)
            }
            if (data.hasOwnProperty('featureValues')) {
                obj.featureValues = ApiClient.convertToType(data.featureValues, [FeatureValue])
            }
        }
        return obj
    }

}
