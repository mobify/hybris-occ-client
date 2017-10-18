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
import VoucherWsDTOModel from './VoucherWsDTOModel';





/**
* The VoucherListWsDTOModel model module.
* @module models/VoucherListWsDTOModel
* @version v2
*/
export default class VoucherListWsDTOModel {
    /**
    * Constructs a new <code>VoucherListWsDTOModel</code>.
    * @alias module:models/VoucherListWsDTOModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>VoucherListWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/VoucherListWsDTOModel} obj Optional instance to populate.
    * @return {module:models/VoucherListWsDTOModel} The populated <code>VoucherListWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VoucherListWsDTOModel();

            
            
            

            if (data.hasOwnProperty('vouchers')) {
                obj['vouchers'] = ApiClient.convertToType(data['vouchers'], [VoucherWsDTOModel]);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {Array.<module:models/VoucherWsDTOModel>} vouchers
    */
    vouchers = undefined;








}


