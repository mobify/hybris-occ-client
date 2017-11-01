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
import PriceWsDTO from './PriceWsDTO'
import StockWsDTO from './StockWsDTO'
import VariantOptionQualifierWsDTO from './VariantOptionQualifierWsDTO'

/**
* The VariantOptionWsDTO model module.
* @module models/VariantOptionWsDTO
* @version v2
*/
export default class VariantOptionWsDTO {
    /**
    * Constructs a new <code>VariantOptionWsDTO</code>.
    * @alias module:models/VariantOptionWsDTO
    * @class
    */

    constructor() {
        /**
    *
    * @member {String} code
    */
        this.code = undefined
        /**
    * @member {module:models/StockWsDTO} stock
    */
        this.stock = undefined
        /**
    *
    * @member {String} url
    */
        this.url = undefined
        /**
    * @member {module:models/PriceWsDTO} priceData
    */
        this.priceData = undefined
        /**
    *
    * @member {Array.<module:models/VariantOptionQualifierWsDTO>}
    * variantOptionQualifiers
    */
        this.variantOptionQualifiers = undefined
    }

    /**
    * Constructs a <code>VariantOptionWsDTO</code> from a plain JavaScript
    * object, optionally creating a new instance. Copies all relevant properties
    * from <code>data</code> to <code>obj</code> if supplied or a new instance
    * if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/VariantOptionWsDTO} obj Optional instance to
    * populate.
    * @return {module:models/VariantOptionWsDTO} The populated
    * <code>VariantOptionWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VariantOptionWsDTO()

            if (data.hasOwnProperty('code')) {
                obj.code = ApiClient.convertToType(data.code, 'String')
            }
            if (data.hasOwnProperty('stock')) {
                obj.stock = StockWsDTO.constructFromObject(data.stock)
            }
            if (data.hasOwnProperty('url')) {
                obj.url = ApiClient.convertToType(data.url, 'String')
            }
            if (data.hasOwnProperty('priceData')) {
                obj.priceData = PriceWsDTO.constructFromObject(data.priceData)
            }
            if (data.hasOwnProperty('variantOptionQualifiers')) {
                obj.variantOptionQualifiers = ApiClient.convertToType(data.variantOptionQualifiers, [VariantOptionQualifierWsDTO])
            }
        }
        return obj
    }



}
