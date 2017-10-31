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
* The StockWsDTO model module.
* @module models/StockWsDTO
* @version v2
*/
export default class StockWsDTO {
    /**
    * Constructs a new <code>StockWsDTO</code>.
    * @alias module:models/StockWsDTO
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>StockWsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/StockWsDTO} obj Optional instance to populate.
    * @return {module:models/StockWsDTO} The populated <code>StockWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockWsDTO();

            if (data.hasOwnProperty('stockLevelStatus')) {
                obj['stockLevelStatus'] = ApiClient.convertToType(data['stockLevelStatus'], 'String');
            }
            if (data.hasOwnProperty('stockLevel')) {
                obj['stockLevel'] = ApiClient.convertToType(data['stockLevel'], 'Number');
            }
        }
        return obj;
    }

    /**
    * 
    * @member {String} stockLevelStatus
    */
    stockLevelStatus = undefined;
    /**
    * 
    * @member {Number} stockLevel
    */
    stockLevel = undefined;

}