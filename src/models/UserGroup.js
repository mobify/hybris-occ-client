/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

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
import Member from './Member'

/**
* The UserGroup model module.
* @module models/UserGroup
* @version v2
*/
export default class UserGroup {
    /**
    * Constructs a new <code>UserGroup</code>.
    * @alias module:models/UserGroup
    * @class
    */

    constructor() {
        /**
    *
    * @member {Array.<module:models/Member>} members
    */
        this.members = undefined
        /**
    *
    * @member {String} uid
    */
        this.uid = undefined
        /**
    *
    * @member {String} name
    */
        this.name = undefined
    }

    /**
    * Constructs a <code>UserGroup</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/UserGroup} obj Optional instance to populate.
    * @return {module:models/UserGroup} The populated
    * <code>UserGroup</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserGroup()

            if (data.hasOwnProperty('members')) {
                obj.members = ApiClient.convertToType(data.members, [Member])
            }
            if (data.hasOwnProperty('uid')) {
                obj.uid = ApiClient.convertToType(data.uid, 'String')
            }
            if (data.hasOwnProperty('name')) {
                obj.name = ApiClient.convertToType(data.name, 'String')
            }
        }
        return obj
    }



}
