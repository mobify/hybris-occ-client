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
import SearchStateWsDTOModel from './SearchStateWsDTOModel';





/**
* The FacetValueWsDTOModel model module.
* @module models/FacetValueWsDTOModel
* @version v2
*/
export default class FacetValueWsDTOModel {
    /**
    * Constructs a new <code>FacetValueWsDTOModel</code>.
    * @alias module:models/FacetValueWsDTOModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>FacetValueWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/FacetValueWsDTOModel} obj Optional instance to populate.
    * @return {module:models/FacetValueWsDTOModel} The populated <code>FacetValueWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FacetValueWsDTOModel();

            
            
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = SearchStateWsDTOModel.constructFromObject(data['query']);
            }
            if (data.hasOwnProperty('selected')) {
                obj['selected'] = ApiClient.convertToType(data['selected'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * 
    * @member {String} name
    */
    name = undefined;
    /**
    * 
    * @member {Number} count
    */
    count = undefined;
    /**
    * @member {module:models/SearchStateWsDTOModel} query
    */
    query = undefined;
    /**
    * 
    * @member {Boolean} selected
    */
    selected = undefined;








}


