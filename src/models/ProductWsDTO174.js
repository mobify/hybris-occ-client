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
import BaseOptionWsDTO from './BaseOptionWsDTO'
import CategoryWsDTO from './CategoryWsDTO'
import ClassificationWsDTO from './ClassificationWsDTO'
import FutureStockWsDTO from './FutureStockWsDTO'
import ImageWsDTO from './ImageWsDTO'
import PriceRangeWsDTO from './PriceRangeWsDTO'
import PriceWsDTO from './PriceWsDTO'
import ProductReferenceOCC from './ProductReferenceOCC'
import PromotionWsDTO from './PromotionWsDTO'
import ReviewWsDTO from './ReviewWsDTO'
import StockWsDTO from './StockWsDTO'
import VariantMatrixElementWsDTO from './VariantMatrixElementWsDTO'
import VariantOptionWsDTO from './VariantOptionWsDTO'

/**
* The ProductWsDTO174 model module.
* @module models/ProductWsDTO174
* @version v2
*/
export default class ProductWsDTO174 {
    /**
    * Constructs a new <code>ProductWsDTO174</code>.
    * @alias module:models/ProductWsDTO174
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
    * @member {String} name
    */
        this.name = undefined
        /**
    *
    * @member {String} url
    */
        this.url = undefined
        /**
    *
    * @member {String} description
    */
        this.description = undefined
        /**
    *
    * @member {Boolean} purchasable
    */
        this.purchasable = undefined
        /**
    * @member {module:models/StockWsDTO} stock
    */
        this.stock = undefined
        /**
    *
    * @member {Array.<module:models/FutureStockWsDTO>} futureStocks
    */
        this.futureStocks = undefined
        /**
    *
    * @member {Boolean} availableForPickup
    */
        this.availableForPickup = undefined
        /**
    *
    * @member {Number} averageRating
    */
        this.averageRating = undefined
        /**
    *
    * @member {Number} numberOfReviews
    */
        this.numberOfReviews = undefined
        /**
    *
    * @member {String} summary
    */
        this.summary = undefined
        /**
    *
    * @member {String} manufacturer
    */
        this.manufacturer = undefined
        /**
    *
    * @member {String} variantType
    */
        this.variantType = undefined
        /**
    * @member {module:models/PriceWsDTO} price
    */
        this.price = undefined
        /**
    *
    * @member {String} baseProduct
    */
        this.baseProduct = undefined
        /**
    *
    * @member {Array.<module:models/ImageWsDTO>} images
    */
        this.images = undefined
        /**
    *
    * @member {Array.<module:models/CategoryWsDTO>} categories
    */
        this.categories = undefined
        /**
    *
    * @member {Array.<module:models/ReviewWsDTO>} reviews
    */
        this.reviews = undefined
        /**
    *
    * @member {Array.<module:models/ClassificationWsDTO>} classifications
    */
        this.classifications = undefined
        /**
    *
    * @member {Array.<module:models/PromotionWsDTO>} potentialPromotions
    */
        this.potentialPromotions = undefined
        /**
    *
    * @member {Array.<module:models/VariantOptionWsDTO>} variantOptions
    */
        this.variantOptions = undefined
        /**
    *
    * @member {Array.<module:models/BaseOptionWsDTO>} baseOptions
    */
        this.baseOptions = undefined
        /**
    *
    * @member {Boolean} volumePricesFlag
    */
        this.volumePricesFlag = undefined
        /**
    *
    * @member {Array.<module:models/PriceWsDTO>} volumePrices
    */
        this.volumePrices = undefined
        /**
    *
    * @member {Array.<module:models/ProductReferenceOCC>} productReferences
    */
        this.productReferences = undefined
        /**
    *
    * @member {Array.<module:models/VariantMatrixElementWsDTO>} variantMatrix
    */
        this.variantMatrix = undefined
        /**
    * @member {module:models/PriceRangeWsDTO} priceRange
    */
        this.priceRange = undefined
        /**
    *
    * @member {Boolean} multidimensional
    */
        this.multidimensional = undefined
    }

    /**
    * Constructs a <code>ProductWsDTO174</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/ProductWsDTO174} obj Optional instance to populate.
    * @return {module:models/ProductWsDTO174} The populated
    * <code>ProductWsDTO174</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductWsDTO174()

            if (data.hasOwnProperty('code')) {
                obj.code = ApiClient.convertToType(data.code, 'String')
            }
            if (data.hasOwnProperty('name')) {
                obj.name = ApiClient.convertToType(data.name, 'String')
            }
            if (data.hasOwnProperty('url')) {
                obj.url = ApiClient.convertToType(data.url, 'String')
            }
            if (data.hasOwnProperty('description')) {
                obj.description = ApiClient.convertToType(data.description, 'String')
            }
            if (data.hasOwnProperty('purchasable')) {
                obj.purchasable = ApiClient.convertToType(data.purchasable, 'Boolean')
            }
            if (data.hasOwnProperty('stock')) {
                obj.stock = StockWsDTO.constructFromObject(data.stock)
            }
            if (data.hasOwnProperty('futureStocks')) {
                obj.futureStocks = ApiClient.convertToType(data.futureStocks, [FutureStockWsDTO])
            }
            if (data.hasOwnProperty('availableForPickup')) {
                obj.availableForPickup = ApiClient.convertToType(data.availableForPickup, 'Boolean')
            }
            if (data.hasOwnProperty('averageRating')) {
                obj.averageRating = ApiClient.convertToType(data.averageRating, 'Number')
            }
            if (data.hasOwnProperty('numberOfReviews')) {
                obj.numberOfReviews = ApiClient.convertToType(data.numberOfReviews, 'Number')
            }
            if (data.hasOwnProperty('summary')) {
                obj.summary = ApiClient.convertToType(data.summary, 'String')
            }
            if (data.hasOwnProperty('manufacturer')) {
                obj.manufacturer = ApiClient.convertToType(data.manufacturer, 'String')
            }
            if (data.hasOwnProperty('variantType')) {
                obj.variantType = ApiClient.convertToType(data.variantType, 'String')
            }
            if (data.hasOwnProperty('price')) {
                obj.price = PriceWsDTO.constructFromObject(data.price)
            }
            if (data.hasOwnProperty('baseProduct')) {
                obj.baseProduct = ApiClient.convertToType(data.baseProduct, 'String')
            }
            if (data.hasOwnProperty('images')) {
                obj.images = ApiClient.convertToType(data.images, [ImageWsDTO])
            }
            if (data.hasOwnProperty('categories')) {
                obj.categories = ApiClient.convertToType(data.categories, [CategoryWsDTO])
            }
            if (data.hasOwnProperty('reviews')) {
                obj.reviews = ApiClient.convertToType(data.reviews, [ReviewWsDTO])
            }
            if (data.hasOwnProperty('classifications')) {
                obj.classifications = ApiClient.convertToType(data.classifications, [ClassificationWsDTO])
            }
            if (data.hasOwnProperty('potentialPromotions')) {
                obj.potentialPromotions = ApiClient.convertToType(data.potentialPromotions, [PromotionWsDTO])
            }
            if (data.hasOwnProperty('variantOptions')) {
                obj.variantOptions = ApiClient.convertToType(data.variantOptions, [VariantOptionWsDTO])
            }
            if (data.hasOwnProperty('baseOptions')) {
                obj.baseOptions = ApiClient.convertToType(data.baseOptions, [BaseOptionWsDTO])
            }
            if (data.hasOwnProperty('volumePricesFlag')) {
                obj.volumePricesFlag = ApiClient.convertToType(data.volumePricesFlag, 'Boolean')
            }
            if (data.hasOwnProperty('volumePrices')) {
                obj.volumePrices = ApiClient.convertToType(data.volumePrices, [PriceWsDTO])
            }
            if (data.hasOwnProperty('productReferences')) {
                obj.productReferences = ApiClient.convertToType(data.productReferences, [ProductReferenceOCC])
            }
            if (data.hasOwnProperty('variantMatrix')) {
                obj.variantMatrix = ApiClient.convertToType(data.variantMatrix, [VariantMatrixElementWsDTO])
            }
            if (data.hasOwnProperty('priceRange')) {
                obj.priceRange = PriceRangeWsDTO.constructFromObject(data.priceRange)
            }
            if (data.hasOwnProperty('multidimensional')) {
                obj.multidimensional = ApiClient.convertToType(data.multidimensional, 'Boolean')
            }
        }
        return obj
    }



}
