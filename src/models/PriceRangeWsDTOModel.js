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
import PriceWsDTOModel from './PriceWsDTOModel';





/**
* The PriceRangeWsDTOModel model module.
* @module models/PriceRangeWsDTOModel
* @version v2
*/
export default class PriceRangeWsDTOModel {
    /**
    * Constructs a new <code>PriceRangeWsDTOModel</code>.
    * @alias module:models/PriceRangeWsDTOModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PriceRangeWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/PriceRangeWsDTOModel} obj Optional instance to populate.
    * @return {module:models/PriceRangeWsDTOModel} The populated <code>PriceRangeWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceRangeWsDTOModel();

            
            
            

            if (data.hasOwnProperty('maxPrice')) {
                obj['maxPrice'] = PriceWsDTOModel.constructFromObject(data['maxPrice']);
            }
            if (data.hasOwnProperty('minPrice')) {
                obj['minPrice'] = PriceWsDTOModel.constructFromObject(data['minPrice']);
            }
        }
        return obj;
    }

    /**
    * @member {module:models/PriceWsDTOModel} maxPrice
    */
    maxPrice = undefined;
    /**
    * @member {module:models/PriceWsDTOModel} minPrice
    */
    minPrice = undefined;








}


