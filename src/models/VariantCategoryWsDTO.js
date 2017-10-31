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

import ApiClient from '../ApiClient';

/**
* The VariantCategoryWsDTO model module.
* @module models/VariantCategoryWsDTO
* @version v2
*/
export default class VariantCategoryWsDTO {
    /**
    * Constructs a new <code>VariantCategoryWsDTO</code>.
    * @alias module:models/VariantCategoryWsDTO
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>VariantCategoryWsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/VariantCategoryWsDTO} obj Optional instance to populate.
    * @return {module:models/VariantCategoryWsDTO} The populated <code>VariantCategoryWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VariantCategoryWsDTO();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('hasImage')) {
                obj['hasImage'] = ApiClient.convertToType(data['hasImage'], 'Boolean');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
        }
        return obj;
    }

    /**
    * 
    * @member {String} name
    */
    name = undefined;
    /**
    * 
    * @member {Boolean} hasImage
    */
    hasImage = undefined;
    /**
    * 
    * @member {Number} priority
    */
    priority = undefined;

}