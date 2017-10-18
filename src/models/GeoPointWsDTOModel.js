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
* The GeoPointWsDTOModel model module.
* @module models/GeoPointWsDTOModel
* @version v2
*/
export default class GeoPointWsDTOModel {
    /**
    * Constructs a new <code>GeoPointWsDTOModel</code>.
    * @alias module:models/GeoPointWsDTOModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>GeoPointWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/GeoPointWsDTOModel} obj Optional instance to populate.
    * @return {module:models/GeoPointWsDTOModel} The populated <code>GeoPointWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeoPointWsDTOModel();

            
            
            

            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
            }
        }
        return obj;
    }

    /**
    * 
    * @member {Number} latitude
    */
    latitude = undefined;
    /**
    * 
    * @member {Number} longitude
    */
    longitude = undefined;








}


