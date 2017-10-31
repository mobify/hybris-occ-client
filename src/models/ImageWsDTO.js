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

/**
* The ImageWsDTO model module.
* @module models/ImageWsDTO
* @version v2
*/
export default class ImageWsDTO {
    /**
    * Constructs a new <code>ImageWsDTO</code>.
    * @alias module:models/ImageWsDTO
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>ImageWsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ImageWsDTO} obj Optional instance to populate.
    * @return {module:models/ImageWsDTO} The populated <code>ImageWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImageWsDTO();

            if (data.hasOwnProperty('imageType')) {
                obj['imageType'] = ApiClient.convertToType(data['imageType'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('altText')) {
                obj['altText'] = ApiClient.convertToType(data['altText'], 'String');
            }
            if (data.hasOwnProperty('galleryIndex')) {
                obj['galleryIndex'] = ApiClient.convertToType(data['galleryIndex'], 'Number');
            }
        }
        return obj;
    }

    /**
    * 
    * @member {String} imageType
    */
    imageType = undefined;
    /**
    * 
    * @member {String} format
    */
    format = undefined;
    /**
    * 
    * @member {String} url
    */
    url = undefined;
    /**
    * 
    * @member {String} altText
    */
    altText = undefined;
    /**
    * 
    * @member {Number} galleryIndex
    */
    galleryIndex = undefined;

}