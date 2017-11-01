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
import AddressWsDTO from './AddressWsDTO'
import ConsignmentEntryWsDTO from './ConsignmentEntryWsDTO'
import PointOfServiceWsDTO from './PointOfServiceWsDTO'

/**
* The ConsignmentWsDTO model module.
* @module models/ConsignmentWsDTO
* @version v2
*/
export default class ConsignmentWsDTO {
    /**
    * Constructs a new <code>ConsignmentWsDTO</code>.
    * @alias module:models/ConsignmentWsDTO
    * @class
    */

    constructor() {
        /**
    *
    * @member {String} code
    */
        this.code = undefined
        /**
    *
    * @member {String} trackingID
    */
        this.trackingID = undefined
        /**
    *
    * @member {String} status
    */
        this.status = undefined
        /**
    *
    * @member {String} statusDate
    */
        this.statusDate = undefined
        /**
    *
    * @member {Array.<module:models/ConsignmentEntryWsDTO>} entries
    */
        this.entries = undefined
        /**
    * @member {module:models/AddressWsDTO} shippingAddress
    */
        this.shippingAddress = undefined
        /**
    * @member {module:models/PointOfServiceWsDTO} deliveryPointOfService
    */
        this.deliveryPointOfService = undefined
    }

    /**
    * Constructs a <code>ConsignmentWsDTO</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/ConsignmentWsDTO} obj Optional instance to populate.
    * @return {module:models/ConsignmentWsDTO} The populated
    * <code>ConsignmentWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConsignmentWsDTO()

            if (data.hasOwnProperty('code')) {
                obj.code = ApiClient.convertToType(data.code, 'String')
            }
            if (data.hasOwnProperty('trackingID')) {
                obj.trackingID = ApiClient.convertToType(data.trackingID, 'String')
            }
            if (data.hasOwnProperty('status')) {
                obj.status = ApiClient.convertToType(data.status, 'String')
            }
            if (data.hasOwnProperty('statusDate')) {
                obj.statusDate = ApiClient.convertToType(data.statusDate, 'String')
            }
            if (data.hasOwnProperty('entries')) {
                obj.entries = ApiClient.convertToType(data.entries, [ConsignmentEntryWsDTO])
            }
            if (data.hasOwnProperty('shippingAddress')) {
                obj.shippingAddress = AddressWsDTO.constructFromObject(data.shippingAddress)
            }
            if (data.hasOwnProperty('deliveryPointOfService')) {
                obj.deliveryPointOfService = PointOfServiceWsDTO.constructFromObject(data.deliveryPointOfService)
            }
        }
        return obj
    }

}
