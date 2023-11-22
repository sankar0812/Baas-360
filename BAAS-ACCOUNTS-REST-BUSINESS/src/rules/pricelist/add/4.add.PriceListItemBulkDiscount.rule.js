/**
* CreatedBy    : Ayerathammal
* CreatedTime  : OCT 24 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : OCT 24 2023
* Description : This file contains all the business rules for create Price list and Price list item and Bulk Discount
**/


/**
 * Importing all the required modules
 */

const priceListInternal = require("../../../internals/dataaccess/pricelist.internal")



/**
 * Initializing objects for all the imported classes
 */

const PriceListInternal = new priceListInternal();


module.exports = class addPriceListItemBulkDiscountRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : OCT 24 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : OCT 24 2023
    * Description  : This function add the information for price list and price list item 
    **/
    async addPriceListItemBulkDiscount(headers, input, PriceListOutputData, PriceListItemData, readProductBulkDiscount) {

        let priceListItemDiscountDataOutput = []
        for (let pricelistItemdDiscountData of readProductBulkDiscount.data) {

            let priceListItemDiscountDatas = {
                MerchantID: input.UserInfo.MerchantID,
                TenantID: input.UserInfo.TenantID,
                CreatedAuthID: input.UserInfo.CreatedAuthID,
                CreatedBy: input.UserInfo.CreatedBy,
                ModifiedAuthID: input.UserInfo.ModifiedAuthID,
                ModifiedBy: input.UserInfo.ModifiedBy,
                PriceListItemID: PriceListItemData.data.PriceListItemID,
                PriceListID: PriceListOutputData.PriceListID,
                ProductID: pricelistItemdDiscountData.ProductID,
                CurrencyID: pricelistItemdDiscountData.CurrencyID,
                RangeMin: pricelistItemdDiscountData.RangeMin,
                RangeMax: pricelistItemdDiscountData.RangeMax,
                DiscountPeriod: pricelistItemdDiscountData.DiscountPeriod,
                DiscountType: pricelistItemdDiscountData.DiscountType,
                DiscountPercent: pricelistItemdDiscountData.DiscountPercent,
                DiscountRate: pricelistItemdDiscountData.DiscountRate,
                Description: pricelistItemdDiscountData.Description,
            }
            let priceListItemDiscountFilter = {
                PriceListItemID: PriceListItemData.data.PriceListItemID,
                PriceListID: PriceListOutputData.PriceListID,
                ProductID: pricelistItemdDiscountData.ProductID,
                RangeMin: pricelistItemdDiscountData.RangeMin,
                RangeMax: pricelistItemdDiscountData.RangeMax,
                DiscountPeriod: pricelistItemdDiscountData.DiscountPeriod,
                DiscountType: pricelistItemdDiscountData.DiscountType,
                DiscountPercent: pricelistItemdDiscountData.DiscountPercent,
                DiscountRate: pricelistItemdDiscountData.DiscountRate,
                IsDeleted: false
            }
            let PriceListItemDiscountData = await PriceListInternal.createPriceListItemBulkDiscount(headers, priceListItemDiscountDatas, priceListItemDiscountFilter)
            priceListItemDiscountDataOutput.push(PriceListItemDiscountData.data)
        }
        return priceListItemDiscountDataOutput
    }

}