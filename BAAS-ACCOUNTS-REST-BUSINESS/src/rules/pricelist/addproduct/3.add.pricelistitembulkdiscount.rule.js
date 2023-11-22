/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 16 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 16 2023
* Description : This file contains all the business rules for create price list item
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");

const priceListInternal = require("../../../internals/dataaccess/pricelist.internal")




/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();


const PriceListInternal = new priceListInternal()

module.exports = class addPriceListItemBulkDiscount {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 09 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 09 2023
    * Description  : This function fetches all the information for product
    **/
    async addPriceListItemBulkDiscount(headers, input, addPriceListItemData, readProductBulkDiscount) {
        try {
            let priceListItemBulkDiscountArray = []

            for (let ProductDiscount of readProductBulkDiscount.data) {
                let priceListItemBulkDiscountData = {
                    PriceListItemID: addPriceListItemData.data.PriceListItemID,
                    PriceListID: input.PriceListItemInfo.PriceListID,
                    MerchantID: input.UserInfo.MerchantID,
                    TenantID: input.UserInfo.TenantID,
                    ProductID: input.PriceListItemInfo.ProductID,
                    CurrencyID: ProductDiscount.CurrencyID,
                    RangeMin: ProductDiscount.RangeMin,
                    RangeMax: ProductDiscount.RangeMax,
                    DiscountPeriod: ProductDiscount.DiscountPeriod,
                    DiscountType: ProductDiscount.DiscountType,
                    DiscountPercent: ProductDiscount.DiscountPercent,
                    DiscountRate: ProductDiscount.DiscountRate,
                    CreatedAuthID: input.UserInfo.CreatedAuthID,
                    CreatedBy: input.UserInfo.CreatedBy

                }
                let priceListItemBulkDiscountFilter = {
                }
                let priceListItemBulkDiscount = await PriceListInternal.createPriceListItemBulkDiscount(headers, priceListItemBulkDiscountData, priceListItemBulkDiscountFilter)
                priceListItemBulkDiscountArray.push(priceListItemBulkDiscount.data)
            }
            return priceListItemBulkDiscountArray
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}