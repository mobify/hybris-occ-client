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
import BillingAddress from './BillingAddress'

/**
* The PaymentDetailsWsDTO640 model module.
* @module models/PaymentDetailsWsDTO640
* @version v2
*/
export default class PaymentDetailsWsDTO640 {
    /**
    * Constructs a new <code>PaymentDetailsWsDTO640</code>.
    * @alias module:models/PaymentDetailsWsDTO640
    * @class
    */

    constructor() {
        /**
    *
    * @member {String} accountHolderName
    */
        this.accountHolderName = undefined
        /**
    *
    * @member {Object} cardType
    */
        this.cardType = undefined
        /**
    *
    * @member {String} cardNumber
    */
        this.cardNumber = undefined
        /**
    *
    * @member {String} startMonth
    */
        this.startMonth = undefined
        /**
    *
    * @member {String} startYear
    */
        this.startYear = undefined
        /**
    *
    * @member {String} expiryMonth
    */
        this.expiryMonth = undefined
        /**
    *
    * @member {String} expiryYear
    */
        this.expiryYear = undefined
        /**
    *
    * @member {String} issueNumber
    */
        this.issueNumber = undefined
        /**
    *
    * @member {String} subscriptionId
    */
        this.subscriptionId = undefined
        /**
    *
    * @member {Boolean} saved
    */
        this.saved = undefined
        /**
    * @member {module:models/BillingAddress} billingAddress
    */
        this.billingAddress = undefined
    }

    /**
    * Constructs a <code>PaymentDetailsWsDTO640</code> from a plain JavaScript
    * object, optionally creating a new instance. Copies all relevant properties
    * from <code>data</code> to <code>obj</code> if supplied or a new instance
    * if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/PaymentDetailsWsDTO640} obj Optional instance to
    * populate.
    * @return {module:models/PaymentDetailsWsDTO640} The populated
    * <code>PaymentDetailsWsDTO640</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentDetailsWsDTO640()

            if (data.hasOwnProperty('accountHolderName')) {
                obj.accountHolderName = ApiClient.convertToType(data.accountHolderName, 'String')
            }
            if (data.hasOwnProperty('cardType')) {
                obj.cardType = ApiClient.convertToType(data.cardType, Object)
            }
            if (data.hasOwnProperty('cardNumber')) {
                obj.cardNumber = ApiClient.convertToType(data.cardNumber, 'String')
            }
            if (data.hasOwnProperty('startMonth')) {
                obj.startMonth = ApiClient.convertToType(data.startMonth, 'String')
            }
            if (data.hasOwnProperty('startYear')) {
                obj.startYear = ApiClient.convertToType(data.startYear, 'String')
            }
            if (data.hasOwnProperty('expiryMonth')) {
                obj.expiryMonth = ApiClient.convertToType(data.expiryMonth, 'String')
            }
            if (data.hasOwnProperty('expiryYear')) {
                obj.expiryYear = ApiClient.convertToType(data.expiryYear, 'String')
            }
            if (data.hasOwnProperty('issueNumber')) {
                obj.issueNumber = ApiClient.convertToType(data.issueNumber, 'String')
            }
            if (data.hasOwnProperty('subscriptionId')) {
                obj.subscriptionId = ApiClient.convertToType(data.subscriptionId, 'String')
            }
            if (data.hasOwnProperty('saved')) {
                obj.saved = ApiClient.convertToType(data.saved, 'Boolean')
            }
            if (data.hasOwnProperty('billingAddress')) {
                obj.billingAddress = BillingAddress.constructFromObject(data.billingAddress)
            }
        }
        return obj
    }



}
