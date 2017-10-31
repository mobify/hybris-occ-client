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
import PriceWsDTO from './PriceWsDTO';

/**
* The DeliveryModeWsDTO model module.
* @module models/DeliveryModeWsDTO
* @version v2
*/
export default class DeliveryModeWsDTO {
    /**
    * Constructs a new <code>DeliveryModeWsDTO</code>.
    * @alias module:models/DeliveryModeWsDTO
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>DeliveryModeWsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/DeliveryModeWsDTO} obj Optional instance to populate.
    * @return {module:models/DeliveryModeWsDTO} The populated <code>DeliveryModeWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeliveryModeWsDTO();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('deliveryCost')) {
                obj['deliveryCost'] = PriceWsDTO.constructFromObject(data['deliveryCost']);
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
    * @member {String} name
    */
    name = undefined;
    /**
    * 
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {module:models/PriceWsDTO} deliveryCost
    */
    deliveryCost = undefined;

}