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
import FacetValue from './FacetValue'

/**
* The Facet model module.
* @module models/Facet
* @version v2
*/
export default class Facet {
    /**
    * Constructs a new <code>Facet</code>.
    * @alias module:models/Facet
    * @class
    */

    constructor() {
        /**
    *
    * @member {String} name
    */
        this.name = undefined
        /**
    *
    * @member {Number} priority
    */
        this.priority = undefined
        /**
    *
    * @member {Boolean} category
    */
        this.category = undefined
        /**
    *
    * @member {Boolean} multiSelect
    */
        this.multiSelect = undefined
        /**
    *
    * @member {Boolean} visible
    */
        this.visible = undefined
        /**
    *
    * @member {Array.<module:models/FacetValue>} topValues
    */
        this.topValues = undefined
        /**
    *
    * @member {Array.<module:models/FacetValue>} values
    */
        this.values = undefined
    }

    /**
    * Constructs a <code>Facet</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/Facet} obj Optional instance to populate.
    * @return {module:models/Facet} The populated <code>Facet</code>
    * instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Facet()

            if (data.hasOwnProperty('name')) {
                obj.name = ApiClient.convertToType(data.name, 'String')
            }
            if (data.hasOwnProperty('priority')) {
                obj.priority = ApiClient.convertToType(data.priority, 'Number')
            }
            if (data.hasOwnProperty('category')) {
                obj.category = ApiClient.convertToType(data.category, 'Boolean')
            }
            if (data.hasOwnProperty('multiSelect')) {
                obj.multiSelect = ApiClient.convertToType(data.multiSelect, 'Boolean')
            }
            if (data.hasOwnProperty('visible')) {
                obj.visible = ApiClient.convertToType(data.visible, 'Boolean')
            }
            if (data.hasOwnProperty('topValues')) {
                obj.topValues = ApiClient.convertToType(data.topValues, [FacetValue])
            }
            if (data.hasOwnProperty('values')) {
                obj.values = ApiClient.convertToType(data.values, [FacetValue])
            }
        }
        return obj
    }

}
