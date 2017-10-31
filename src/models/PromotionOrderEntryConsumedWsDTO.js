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
* The PromotionOrderEntryConsumedWsDTO model module.
* @module models/PromotionOrderEntryConsumedWsDTO
* @version v2
*/
export default class PromotionOrderEntryConsumedWsDTO {
    /**
    * Constructs a new <code>PromotionOrderEntryConsumedWsDTO</code>.
    * @alias module:models/PromotionOrderEntryConsumedWsDTO
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>PromotionOrderEntryConsumedWsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/PromotionOrderEntryConsumedWsDTO} obj Optional instance to populate.
    * @return {module:models/PromotionOrderEntryConsumedWsDTO} The populated <code>PromotionOrderEntryConsumedWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PromotionOrderEntryConsumedWsDTO();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('adjustedUnitPrice')) {
                obj['adjustedUnitPrice'] = ApiClient.convertToType(data['adjustedUnitPrice'], 'Number');
            }
            if (data.hasOwnProperty('orderEntryNumber')) {
                obj['orderEntryNumber'] = ApiClient.convertToType(data['orderEntryNumber'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }

    /**
    * 
    * @member {String} code
    */
    code = undefined;
    /**
    * 
    * @member {Number} adjustedUnitPrice
    */
    adjustedUnitPrice = undefined;
    /**
    * 
    * @member {Number} orderEntryNumber
    */
    orderEntryNumber = undefined;
    /**
    * 
    * @member {Number} quantity
    */
    quantity = undefined;

}