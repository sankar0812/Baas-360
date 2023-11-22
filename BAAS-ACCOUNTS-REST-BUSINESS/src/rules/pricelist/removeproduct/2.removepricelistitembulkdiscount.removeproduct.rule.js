/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 18 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 18 2023
* Description : This file contains all the business rules for remove pricelistitembulkdiscount
**/

/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages.js");

const priceListInternal = require("../../../internals/dataaccess/pricelist.internal")




/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();


const PriceListInternal = new priceListInternal()

module.exports = class removePriceListItemBulkDiscountRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 16 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 16 2023
    * Description  : This function fetches all the information for pricelist
    **/
    async removePriceListItemBulkDiscount(headers, input, priceListData) {
        try {
            let removePriceListItemBulkDiscountFilter = {
                PriceListItemID: priceListData.data[0].PriceListItemID,
                PriceListID: priceListData.data[0].PriceListID,
                ProductID: priceListData.data[0].ProductID,
                IsDeleted: false
            }
            let removePriceListItemBulkDiscountFields = {
                IsDeleted: true,
                ModifiedAuthID: input.ModifiedAuthID,
                ModifiedBy: input.ModifiedBy,
                DeletedAuthID: input.DeletedAuthID,
                DeletedBy: input.DeletedBy
            }
            let removePriceListItemBulkDiscountData = await PriceListInternal.updatePriceListItemBulkDiscount(headers, removePriceListItemBulkDiscountFilter, removePriceListItemBulkDiscountFields)
            return removePriceListItemBulkDiscountData
        }
        catch (error) {
            if (error.status == 404) {
                return Commons.generateServiceOutput(null, 200, Messages.MESSAGE_PRICE_LIST_REMOVE_PRODUCT)
            }
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}