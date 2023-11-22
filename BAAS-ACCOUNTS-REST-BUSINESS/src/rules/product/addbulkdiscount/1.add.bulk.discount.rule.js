/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 14 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 14 2023
* Description : This file contains all the business rules for create product bulk discount
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");

const productInternal = require("../../../internals/dataaccess/product.internal");




/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();


const ProductInternal = new productInternal()

module.exports = class addBulkDiscountRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 14 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 14 2023
    * Description  : This function fetches all the information for product
    **/
    async addBulkdDiscount(headers, input) {
        try {
            let BulkDiscountArrayOutput = []
            let userInfo = {
                CreatedAuthID: input.UserInfo.CreatedAuthID,
                CreatedBy: input.UserInfo.CreatedBy,
                ModifiedAuthID: input.UserInfo.ModifiedAuthID,
                ModifiedBy: input.UserInfo.ModifiedBy,
                MerchantID: input.UserInfo.MerchantID,
                TenantID: input.UserInfo.TenantID,
                CurrencyID: input.UserInfo.CurrencyID,
                ProductID: input.UserInfo.ProductID

            }
            for (let blukDiscountInfo of input.BlukDiscountInfo) {
                let bulkDiscoutnData = {
                    ...userInfo,
                    RangeMin: blukDiscountInfo.RangeMin,
                    RangeMax: blukDiscountInfo.RangeMax,
                    DiscountPeriod: blukDiscountInfo.DiscountPeriod,
                    DiscountType: blukDiscountInfo.DiscountType,
                    DiscountPercent: blukDiscountInfo.DiscountPercent === "" ? null : parseFloat(blukDiscountInfo.DiscountPercent),
                    DiscountRate: blukDiscountInfo.DiscountRate === "" ? null : parseFloat(blukDiscountInfo.DiscountRate),
                    Description: blukDiscountInfo.Description || null

                }
                let bulkDiscoutnFilter = {
                    ProductID: input.UserInfo.ProductID,
                    RangeMin: blukDiscountInfo.RangeMin,
                    RangeMax: blukDiscountInfo.RangeMax,
                    DiscountPeriod: blukDiscountInfo.DiscountPeriod,
                    DiscountType: blukDiscountInfo.DiscountType,
                    DiscountPercent: blukDiscountInfo.DiscountPercent === "" ? null : parseFloat(blukDiscountInfo.DiscountPercent),
                    DiscountRate: blukDiscountInfo.DiscountRate === "" ? null : parseFloat(blukDiscountInfo.DiscountRate),
                    IsDeleted: false
                }
                let bulkDiscountData = await ProductInternal.createProductBulkDiscount(headers, bulkDiscoutnData, bulkDiscoutnFilter)
                BulkDiscountArrayOutput.push(bulkDiscountData)
            }
            return BulkDiscountArrayOutput
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}