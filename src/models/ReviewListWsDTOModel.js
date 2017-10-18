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
import ReviewWsDTOModel from './ReviewWsDTOModel';





/**
* The ReviewListWsDTOModel model module.
* @module models/ReviewListWsDTOModel
* @version v2
*/
export default class ReviewListWsDTOModel {
    /**
    * Constructs a new <code>ReviewListWsDTOModel</code>.
    * @alias module:models/ReviewListWsDTOModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ReviewListWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ReviewListWsDTOModel} obj Optional instance to populate.
    * @return {module:models/ReviewListWsDTOModel} The populated <code>ReviewListWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReviewListWsDTOModel();

            
            
            

            if (data.hasOwnProperty('reviews')) {
                obj['reviews'] = ApiClient.convertToType(data['reviews'], [ReviewWsDTOModel]);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {Array.<module:models/ReviewWsDTOModel>} reviews
    */
    reviews = undefined;








}


