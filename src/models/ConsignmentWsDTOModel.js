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
import AddressWsDTOModel from './AddressWsDTOModel';
import ConsignmentEntryWsDTOModel from './ConsignmentEntryWsDTOModel';
import PointOfServiceWsDTOModel from './PointOfServiceWsDTOModel';





/**
* The ConsignmentWsDTOModel model module.
* @module models/ConsignmentWsDTOModel
* @version v2
*/
export default class ConsignmentWsDTOModel {
    /**
    * Constructs a new <code>ConsignmentWsDTOModel</code>.
    * @alias module:models/ConsignmentWsDTOModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ConsignmentWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ConsignmentWsDTOModel} obj Optional instance to populate.
    * @return {module:models/ConsignmentWsDTOModel} The populated <code>ConsignmentWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConsignmentWsDTOModel();

            
            
            

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('trackingID')) {
                obj['trackingID'] = ApiClient.convertToType(data['trackingID'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('statusDate')) {
                obj['statusDate'] = ApiClient.convertToType(data['statusDate'], 'String');
            }
            if (data.hasOwnProperty('entries')) {
                obj['entries'] = ApiClient.convertToType(data['entries'], [ConsignmentEntryWsDTOModel]);
            }
            if (data.hasOwnProperty('shippingAddress')) {
                obj['shippingAddress'] = AddressWsDTOModel.constructFromObject(data['shippingAddress']);
            }
            if (data.hasOwnProperty('deliveryPointOfService')) {
                obj['deliveryPointOfService'] = PointOfServiceWsDTOModel.constructFromObject(data['deliveryPointOfService']);
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
    * @member {String} trackingID
    */
    trackingID = undefined;
    /**
    * 
    * @member {String} status
    */
    status = undefined;
    /**
    * 
    * @member {String} statusDate
    */
    statusDate = undefined;
    /**
    * 
    * @member {Array.<module:models/ConsignmentEntryWsDTOModel>} entries
    */
    entries = undefined;
    /**
    * @member {module:models/AddressWsDTOModel} shippingAddress
    */
    shippingAddress = undefined;
    /**
    * @member {module:models/PointOfServiceWsDTOModel} deliveryPointOfService
    */
    deliveryPointOfService = undefined;








}


