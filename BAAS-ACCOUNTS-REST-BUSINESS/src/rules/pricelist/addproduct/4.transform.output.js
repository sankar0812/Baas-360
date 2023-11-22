/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 16 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 16 2023
* Description : This file contains all the business rules for create product
**/


/**
 * Importing all the required modules
 */
// const commons = require("../../../utils/commons");

const commons = require("../../../utils/commons");
const Message = require("../../../utils/messages")



/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const message = new Message()



module.exports = class addOutputRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 09 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 09 2023
    * Description  : This function fetches all the information for product
    **/
    async addOutput(addPriceListItemData, readProductBulkDiscount, addPriceListItemBulkDiscountData) {
        let UserInfo = {
            MerchantID: addPriceListItemData.data.MerchantID,
            TenantID: addPriceListItemData.data.TenantID,
            CreatedAuthID: addPriceListItemData.data.CreatedAuthID,
            CreatedBy: addPriceListItemData.data.CreatedBy

        }
        let PriceListItem = {
            PriceListItemID: addPriceListItemData.data.PriceListItemID,
            PriceListID: addPriceListItemData.data.PriceListID,
            ProductID: addPriceListItemData.data.ProductID,
        }
        let ProductBulkDiscount = readProductBulkDiscount.data.map(item => ({
            ProductBulkDiscountID: item.ProductBulkDiscountID,
            ProductID: item.ProductID,
            CurrencyID: item.CurrencyID,
            RangeMin: item.RangeMin,
            RangeMax: item.RangeMax,
            DiscountPeriod: item.DiscountPeriod,
            DiscountType: item.DiscountType,
            DiscountPercent: item.DiscountPercent,
            DiscountRate: item.DiscountRate,
            Description: item.Description
        }))
        let PriceListItemBulkDiscount = addPriceListItemBulkDiscountData.map(item => ({
            PriceListItemBulkDiscountID: item.PriceListItemBulkDiscountID,
            PriceListItemID: item.PriceListItemID,
            PriceListID: item.PriceListID,
            ProductID: item.ProductID,
            CurrencyID: item.CurrencyID,
            RangeMin: item.RangeMin,
            RangeMax: item.RangeMax,
            DiscountPeriod: item.DiscountPeriod,
            DiscountType: item.DiscountType,
            DiscountPercent: item.DiscountPercent,
            DiscountRate: item.DiscountRate,
            Description: item.Description
        }))
        let Output = {
            UserInfo: UserInfo,
            PriceListItemInfo: PriceListItem,
            ProductBulkDiscountInfo: ProductBulkDiscount,
            PriceListItemBulkDiscount: PriceListItemBulkDiscount
        }
        let transFormOutput = await Commons.generateServiceOutput(Output, 200, message.MESSAGE_PRICE_LIST_ADD_PRODUCT)
        return transFormOutput
    }

}