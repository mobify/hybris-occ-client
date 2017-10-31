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
import ProductWsDTO from './ProductWsDTO';

/**
* The ProductReferenceWsDTO model module.
* @module models/ProductReferenceWsDTO
* @version v2
*/
export default class ProductReferenceWsDTO {
    /**
    * Constructs a new <code>ProductReferenceWsDTO</code>.
    * @alias module:models/ProductReferenceWsDTO
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>ProductReferenceWsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ProductReferenceWsDTO} obj Optional instance to populate.
    * @return {module:models/ProductReferenceWsDTO} The populated <code>ProductReferenceWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductReferenceWsDTO();

            if (data.hasOwnProperty('preselected')) {
                obj['preselected'] = ApiClient.convertToType(data['preselected'], 'Boolean');
            }
            if (data.hasOwnProperty('referenceType')) {
                obj['referenceType'] = ApiClient.convertToType(data['referenceType'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ProductWsDTO.constructFromObject(data['target']);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {Boolean} preselected
    */
    preselected = undefined;
    /**
    * 
    * @member {String} referenceType
    */
    referenceType = undefined;
    /**
    * 
    * @member {String} description
    */
    description = undefined;
    /**
    * 
    * @member {Number} quantity
    */
    quantity = undefined;
    /**
    * @member {module:models/ProductWsDTO} target
    */
    target = undefined;

}