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
* The FeatureValueWsDTO model module.
* @module models/FeatureValueWsDTO
* @version v2
*/
export default class FeatureValueWsDTO {
    /**
    * Constructs a new <code>FeatureValueWsDTO</code>.
    * @alias module:models/FeatureValueWsDTO
    * @class
    */

    constructor() {
        /**
    *
    * @member {String} value
    */
        this.value = undefined
    }

    /**
    * Constructs a <code>FeatureValueWsDTO</code> from a plain JavaScript
    * object, optionally creating a new instance. Copies all relevant properties
    * from <code>data</code> to <code>obj</code> if supplied or a new instance
    * if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/FeatureValueWsDTO} obj Optional instance to
    * populate.
    * @return {module:models/FeatureValueWsDTO} The populated
    * <code>FeatureValueWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FeatureValueWsDTO()

            if (data.hasOwnProperty('value')) {
                obj.value = ApiClient.convertToType(data.value, 'String')
            }
        }
        return obj
    }

}
