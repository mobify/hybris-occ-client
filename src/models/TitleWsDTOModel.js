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
* The TitleWsDTOModel model module.
* @module models/TitleWsDTOModel
* @version v2
*/
export default class TitleWsDTOModel {
    /**
    * Constructs a new <code>TitleWsDTOModel</code>.
    * @alias module:models/TitleWsDTOModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>TitleWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/TitleWsDTOModel} obj Optional instance to populate.
    * @return {module:models/TitleWsDTOModel} The populated <code>TitleWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TitleWsDTOModel();

            
            
            

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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








}


