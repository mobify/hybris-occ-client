/**
 * OCC No description provided (generated by Swagger Codegen
 * https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git Do not edit the class
 * manually.
 *
 */

import ApiClient from '../ApiClient'
import CategoryHierarchyWsDTO from './CategoryHierarchyWsDTO'

/**
* The CatalogVersionWsDTO model module.
* @module models/CatalogVersionWsDTO
* @version v2
*/
export default class CatalogVersionWsDTO {
    /**
    * Constructs a new <code>CatalogVersionWsDTO</code>.
    * @alias module:models/CatalogVersionWsDTO
    * @class
    */

    constructor() {
        /**
    *
    * @member {Array.<module:models/CategoryHierarchyWsDTO>} categories
    */
        this.categories = undefined
        /**
    *
    * @member {String} id
    */
        this.id = undefined
        /**
    *
    * @member {String} lastModified
    */
        this.lastModified = undefined
        /**
    *
    * @member {String} name
    */
        this.name = undefined
        /**
    *
    * @member {String} url
    */
        this.url = undefined
    }

    /**
    * Constructs a <code>CatalogVersionWsDTO</code> from a plain JavaScript
    * object, optionally creating a new instance. Copies all relevant properties
    * from <code>data</code> to <code>obj</code> if supplied or a new instance
    * if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/CatalogVersionWsDTO} obj Optional instance to
    * populate.
    * @return {module:models/CatalogVersionWsDTO} The populated
    * <code>CatalogVersionWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CatalogVersionWsDTO()

            if (data.hasOwnProperty('categories')) {
                obj.categories = ApiClient.convertToType(data.categories, [CategoryHierarchyWsDTO])
            }
            if (data.hasOwnProperty('id')) {
                obj.id = ApiClient.convertToType(data.id, 'String')
            }
            if (data.hasOwnProperty('lastModified')) {
                obj.lastModified = ApiClient.convertToType(data.lastModified, 'String')
            }
            if (data.hasOwnProperty('name')) {
                obj.name = ApiClient.convertToType(data.name, 'String')
            }
            if (data.hasOwnProperty('url')) {
                obj.url = ApiClient.convertToType(data.url, 'String')
            }
        }
        return obj
    }

}
