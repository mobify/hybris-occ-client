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
import VoucherWsDTO from './VoucherWsDTO';

/**
* The VoucherListWsDTO model module.
* @module models/VoucherListWsDTO
* @version v2
*/
export default class VoucherListWsDTO {
    /**
    * Constructs a new <code>VoucherListWsDTO</code>.
    * @alias module:models/VoucherListWsDTO
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>VoucherListWsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/VoucherListWsDTO} obj Optional instance to populate.
    * @return {module:models/VoucherListWsDTO} The populated <code>VoucherListWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VoucherListWsDTO();

            if (data.hasOwnProperty('vouchers')) {
                obj['vouchers'] = ApiClient.convertToType(data['vouchers'], [VoucherWsDTO]);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {Array.<module:models/VoucherWsDTO>} vouchers
    */
    vouchers = undefined;

}