/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 16 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 16 2023
* Description : This file contains all the business rules for remove pricelistitem
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

module.exports = class removePriceListItemRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 16 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 16 2023
    * Description  : This function fetches all the information for pricelist
    **/
    async removePriceListItem(headers, input) {
        try {
            let removePriceListItemFilter = {
                PriceListItemID: input.PriceListItemID,
                PriceListID: input.PriceListID,
                ProductID: input.ProductID,
                IsDeleted: false
            }
            let removePriceListItemFields = {
                IsDeleted: true,
                ModifiedAuthID: input.ModifiedAuthID,
                ModifiedBy: input.ModifiedBy,
                DeletedAuthID: input.DeletedAuthID,
                DeletedBy: input.DeletedBy
            }
            let removePriceListItemData = await PriceListInternal.updatePriceListItem(headers, removePriceListItemFilter, removePriceListItemFields)
            return removePriceListItemData
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}