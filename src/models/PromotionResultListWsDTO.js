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
import PromotionResultWsDTO from './PromotionResultWsDTO';

/**
* The PromotionResultListWsDTO model module.
* @module models/PromotionResultListWsDTO
* @version v2
*/
export default class PromotionResultListWsDTO {
    /**
    * Constructs a new <code>PromotionResultListWsDTO</code>.
    * @alias module:models/PromotionResultListWsDTO
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>PromotionResultListWsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/PromotionResultListWsDTO} obj Optional instance to populate.
    * @return {module:models/PromotionResultListWsDTO} The populated <code>PromotionResultListWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PromotionResultListWsDTO();

            if (data.hasOwnProperty('promotions')) {
                obj['promotions'] = ApiClient.convertToType(data['promotions'], [PromotionResultWsDTO]);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {Array.<module:models/PromotionResultWsDTO>} promotions
    */
    promotions = undefined;

}