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
import CountryModel from './CountryModel';
import RegionModel from './RegionModel';





/**
* The AddressWsDTO296Model model module.
* @module models/AddressWsDTO296Model
* @version v2
*/
export default class AddressWsDTO296Model {
    /**
    * Constructs a new <code>AddressWsDTO296Model</code>.
    * @alias module:models/AddressWsDTO296Model
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>AddressWsDTO296Model</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/AddressWsDTO296Model} obj Optional instance to populate.
    * @return {module:models/AddressWsDTO296Model} The populated <code>AddressWsDTO296Model</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressWsDTO296Model();

            
            
            

            if (data.hasOwnProperty('titleCode')) {
                obj['titleCode'] = ApiClient.convertToType(data['titleCode'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('line1')) {
                obj['line1'] = ApiClient.convertToType(data['line1'], 'String');
            }
            if (data.hasOwnProperty('line2')) {
                obj['line2'] = ApiClient.convertToType(data['line2'], 'String');
            }
            if (data.hasOwnProperty('town')) {
                obj['town'] = ApiClient.convertToType(data['town'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = RegionModel.constructFromObject(data['region']);
            }
            if (data.hasOwnProperty('postalCode')) {
                obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = CountryModel.constructFromObject(data['country']);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {String} titleCode
    */
    titleCode = undefined;
    /**
    * 
    * @member {String} firstName
    */
    firstName = undefined;
    /**
    * 
    * @member {String} lastName
    */
    lastName = undefined;
    /**
    * 
    * @member {String} line1
    */
    line1 = undefined;
    /**
    * 
    * @member {String} line2
    */
    line2 = undefined;
    /**
    * 
    * @member {String} town
    */
    town = undefined;
    /**
    * @member {module:models/RegionModel} region
    */
    region = undefined;
    /**
    * 
    * @member {String} postalCode
    */
    postalCode = undefined;
    /**
    * @member {module:models/CountryModel} country
    */
    country = undefined;








}


