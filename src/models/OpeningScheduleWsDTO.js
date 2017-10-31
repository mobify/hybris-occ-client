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
import SpecialOpeningDayWsDTO from './SpecialOpeningDayWsDTO';
import WeekdayOpeningDayWsDTO from './WeekdayOpeningDayWsDTO';

/**
* The OpeningScheduleWsDTO model module.
* @module models/OpeningScheduleWsDTO
* @version v2
*/
export default class OpeningScheduleWsDTO {
    /**
    * Constructs a new <code>OpeningScheduleWsDTO</code>.
    * @alias module:models/OpeningScheduleWsDTO
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>OpeningScheduleWsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/OpeningScheduleWsDTO} obj Optional instance to populate.
    * @return {module:models/OpeningScheduleWsDTO} The populated <code>OpeningScheduleWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OpeningScheduleWsDTO();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('weekDayOpeningList')) {
                obj['weekDayOpeningList'] = ApiClient.convertToType(data['weekDayOpeningList'], [WeekdayOpeningDayWsDTO]);
            }
            if (data.hasOwnProperty('specialDayOpeningList')) {
                obj['specialDayOpeningList'] = ApiClient.convertToType(data['specialDayOpeningList'], [SpecialOpeningDayWsDTO]);
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
    * @member {String} code
    */
    code = undefined;
    /**
    * 
    * @member {Array.<module:models/WeekdayOpeningDayWsDTO>} weekDayOpeningList
    */
    weekDayOpeningList = undefined;
    /**
    * 
    * @member {Array.<module:models/SpecialOpeningDayWsDTO>} specialDayOpeningList
    */
    specialDayOpeningList = undefined;

}