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
import CardTypeWsDTOModel from './CardTypeWsDTOModel';





/**
* The CardTypeListWsDTOModel model module.
* @module models/CardTypeListWsDTOModel
* @version v2
*/
export default class CardTypeListWsDTOModel {
    /**
    * Constructs a new <code>CardTypeListWsDTOModel</code>.
    * @alias module:models/CardTypeListWsDTOModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>CardTypeListWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/CardTypeListWsDTOModel} obj Optional instance to populate.
    * @return {module:models/CardTypeListWsDTOModel} The populated <code>CardTypeListWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CardTypeListWsDTOModel();

            
            
            

            if (data.hasOwnProperty('cardTypes')) {
                obj['cardTypes'] = ApiClient.convertToType(data['cardTypes'], [CardTypeWsDTOModel]);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {Array.<module:models/CardTypeWsDTOModel>} cardTypes
    */
    cardTypes = undefined;








}


