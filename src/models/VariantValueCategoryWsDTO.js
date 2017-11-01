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
import VariantCategoryWsDTO from './VariantCategoryWsDTO'

/**
* The VariantValueCategoryWsDTO model module.
* @module models/VariantValueCategoryWsDTO
* @version v2
*/
export default class VariantValueCategoryWsDTO {
    /**
    * Constructs a new <code>VariantValueCategoryWsDTO</code>.
    * @alias module:models/VariantValueCategoryWsDTO
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
    * @member {Number} sequence
    */
        this.sequence = undefined
        /**
    *
    * @member {Array.<module:models/VariantCategoryWsDTO>} superCategories
    */
        this.superCategories = undefined
    }

    /**
    * Constructs a <code>VariantValueCategoryWsDTO</code> from a plain
    * JavaScript object, optionally creating a new instance. Copies all relevant
    * properties from <code>data</code> to <code>obj</code> if supplied or a new
    * instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/VariantValueCategoryWsDTO} obj Optional instance to
    * populate.
    * @return {module:models/VariantValueCategoryWsDTO} The populated
    * <code>VariantValueCategoryWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VariantValueCategoryWsDTO()

            if (data.hasOwnProperty('name')) {
                obj.name = ApiClient.convertToType(data.name, 'String')
            }
            if (data.hasOwnProperty('sequence')) {
                obj.sequence = ApiClient.convertToType(data.sequence, 'Number')
            }
            if (data.hasOwnProperty('superCategories')) {
                obj.superCategories = ApiClient.convertToType(data.superCategories, [VariantCategoryWsDTO])
            }
        }
        return obj
    }



}
