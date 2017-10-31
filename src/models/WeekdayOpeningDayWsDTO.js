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
import TimeWsDTO from './TimeWsDTO';

/**
* The WeekdayOpeningDayWsDTO model module.
* @module models/WeekdayOpeningDayWsDTO
* @version v2
*/
export default class WeekdayOpeningDayWsDTO {
    /**
    * Constructs a new <code>WeekdayOpeningDayWsDTO</code>.
    * @alias module:models/WeekdayOpeningDayWsDTO
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>WeekdayOpeningDayWsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/WeekdayOpeningDayWsDTO} obj Optional instance to populate.
    * @return {module:models/WeekdayOpeningDayWsDTO} The populated <code>WeekdayOpeningDayWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WeekdayOpeningDayWsDTO();

            if (data.hasOwnProperty('weekDay')) {
                obj['weekDay'] = ApiClient.convertToType(data['weekDay'], 'String');
            }
            if (data.hasOwnProperty('closed')) {
                obj['closed'] = ApiClient.convertToType(data['closed'], 'Boolean');
            }
            if (data.hasOwnProperty('openingTime')) {
                obj['openingTime'] = TimeWsDTO.constructFromObject(data['openingTime']);
            }
            if (data.hasOwnProperty('closingTime')) {
                obj['closingTime'] = TimeWsDTO.constructFromObject(data['closingTime']);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {String} weekDay
    */
    weekDay = undefined;
    /**
    * 
    * @member {Boolean} closed
    */
    closed = undefined;
    /**
    * @member {module:models/TimeWsDTO} openingTime
    */
    openingTime = undefined;
    /**
    * @member {module:models/TimeWsDTO} closingTime
    */
    closingTime = undefined;

}