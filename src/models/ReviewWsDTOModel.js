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
import UserWsDTOModel from './UserWsDTOModel';





/**
* The ReviewWsDTOModel model module.
* @module models/ReviewWsDTOModel
* @version v2
*/
export default class ReviewWsDTOModel {
    /**
    * Constructs a new <code>ReviewWsDTOModel</code>.
    * @alias module:models/ReviewWsDTOModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ReviewWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ReviewWsDTOModel} obj Optional instance to populate.
    * @return {module:models/ReviewWsDTOModel} The populated <code>ReviewWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReviewWsDTOModel();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('headline')) {
                obj['headline'] = ApiClient.convertToType(data['headline'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('rating')) {
                obj['rating'] = ApiClient.convertToType(data['rating'], 'Number');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('alias')) {
                obj['alias'] = ApiClient.convertToType(data['alias'], 'String');
            }
            if (data.hasOwnProperty('principal')) {
                obj['principal'] = UserWsDTOModel.constructFromObject(data['principal']);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {String} id
    */
    id = undefined;
    /**
    * 
    * @member {String} headline
    */
    headline = undefined;
    /**
    * 
    * @member {String} comment
    */
    comment = undefined;
    /**
    * 
    * @member {Number} rating
    */
    rating = undefined;
    /**
    * 
    * @member {String} date
    */
    date = undefined;
    /**
    * 
    * @member {String} alias
    */
    alias = undefined;
    /**
    * @member {module:models/UserWsDTOModel} principal
    */
    principal = undefined;








}


