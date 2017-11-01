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
import UserWsDTO from './UserWsDTO'

/**
* The ReviewWsDTO model module.
* @module models/ReviewWsDTO
* @version v2
*/
export default class ReviewWsDTO {
    /**
    * Constructs a new <code>ReviewWsDTO</code>.
    * @alias module:models/ReviewWsDTO
    * @class
    */

    constructor() {
        /**
    *
    * @member {String} id
    */
        this.id = undefined
        /**
    *
    * @member {String} headline
    */
        this.headline = undefined
        /**
    *
    * @member {String} comment
    */
        this.comment = undefined
        /**
    *
    * @member {Number} rating
    */
        this.rating = undefined
        /**
    *
    * @member {String} date
    */
        this.date = undefined
        /**
    *
    * @member {String} alias
    */
        this.alias = undefined
        /**
    * @member {module:models/UserWsDTO} principal
    */
        this.principal = undefined
    }

    /**
    * Constructs a <code>ReviewWsDTO</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/ReviewWsDTO} obj Optional instance to populate.
    * @return {module:models/ReviewWsDTO} The populated <code>ReviewWsDTO</code>
    * instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReviewWsDTO()

            if (data.hasOwnProperty('id')) {
                obj.id = ApiClient.convertToType(data.id, 'String')
            }
            if (data.hasOwnProperty('headline')) {
                obj.headline = ApiClient.convertToType(data.headline, 'String')
            }
            if (data.hasOwnProperty('comment')) {
                obj.comment = ApiClient.convertToType(data.comment, 'String')
            }
            if (data.hasOwnProperty('rating')) {
                obj.rating = ApiClient.convertToType(data.rating, 'Number')
            }
            if (data.hasOwnProperty('date')) {
                obj.date = ApiClient.convertToType(data.date, 'String')
            }
            if (data.hasOwnProperty('alias')) {
                obj.alias = ApiClient.convertToType(data.alias, 'String')
            }
            if (data.hasOwnProperty('principal')) {
                obj.principal = UserWsDTO.constructFromObject(data.principal)
            }
        }
        return obj
    }



}
