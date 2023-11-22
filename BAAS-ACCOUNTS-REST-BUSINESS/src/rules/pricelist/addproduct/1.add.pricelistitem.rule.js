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

module.exports = class addPriceListItem {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 09 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 09 2023
    * Description  : This function fetches all the information for product
    **/
    async addPriceListItem(headers, input) {
        try {
            let priceListItemData = {
                PriceListID: input.PriceListItemInfo.PriceListID,
                MerchantID: input.UserInfo.MerchantID,
                TenantID: input.UserInfo.TenantID,
                ProductID: input.PriceListItemInfo.ProductID,
                Rate: input.PriceListItemInfo.Rate,
                CreatedAuthID: input.UserInfo.CreatedAuthID,
                CreatedBy: input.UserInfo.CreatedBy

            }
            let priceListItemFilter = {
                ProductID: input.PriceListItemInfo.ProductID,
                PriceListID: input.PriceListItemInfo.PriceListID,
                IsDeleted:false
            }
            let priceListItem = await PriceListInternal.createPriceListItem(headers, priceListItemData, priceListItemFilter)
            return priceListItem
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}