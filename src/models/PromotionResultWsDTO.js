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
import PromotionOrderEntryConsumedWsDTO from './PromotionOrderEntryConsumedWsDTO';
import PromotionWsDTO from './PromotionWsDTO';

/**
* The PromotionResultWsDTO model module.
* @module models/PromotionResultWsDTO
* @version v2
*/
export default class PromotionResultWsDTO {
    /**
    * Constructs a new <code>PromotionResultWsDTO</code>.
    * @alias module:models/PromotionResultWsDTO
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>PromotionResultWsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/PromotionResultWsDTO} obj Optional instance to populate.
    * @return {module:models/PromotionResultWsDTO} The populated <code>PromotionResultWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PromotionResultWsDTO();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('promotion')) {
                obj['promotion'] = PromotionWsDTO.constructFromObject(data['promotion']);
            }
            if (data.hasOwnProperty('consumedEntries')) {
                obj['consumedEntries'] = ApiClient.convertToType(data['consumedEntries'], [PromotionOrderEntryConsumedWsDTO]);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {module:models/PromotionWsDTO} promotion
    */
    promotion = undefined;
    /**
    * 
    * @member {Array.<module:models/PromotionOrderEntryConsumedWsDTO>} consumedEntries
    */
    consumedEntries = undefined;

}