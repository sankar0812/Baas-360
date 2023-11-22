/**
* CreatedBy    : Ayerathammal
* CreatedTime  : OCT 24 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : OCT 24 2023
* Description : This file contains all the business rules for create Price list item 
**/


/**
 * Importing all the required modules
 */

const priceListInternal = require("../../../internals/dataaccess/pricelist.internal")



/**
 * Initializing objects for all the imported classes
 */

const PriceListInternal = new priceListInternal();


module.exports = class addPriceListItemRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 21 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 21 2023
    * Description  : This function add the information for price list item 
    **/
    async addPriceListItem(headers, input, PriceListData) {
        let PriceListOutputData = PriceListData.data
        let priceListItemDataOutput = []

        for (let priceListInputData of input.PriceItemInfo) {
            let priceListItemData = {
                MerchantID: input.UserInfo.MerchantID,
                TenantID: input.UserInfo.TenantID,
                CreatedAuthID: input.UserInfo.CreatedAuthID,
                CreatedBy: input.UserInfo.CreatedBy,
                ModifiedAuthID: input.UserInfo.ModifiedAuthID,
                ModifiedBy: input.UserInfo.ModifiedBy,
                CustomerID: PriceListOutputData.CustomerID,
                PriceListID: PriceListOutputData.PriceListID,
                ProductID: priceListInputData.ProductID,
                Rate: priceListInputData.Rate,
                Remarks: priceListInputData.Remarks || null
            }
            let priceListItemFilter = {
                PriceListID: PriceListOutputData.PriceListID,
                ProductID: priceListInputData.ProductID,
                IsDeleted: false
            }

            let PriceListItemData = await PriceListInternal.createPriceListItem(headers, priceListItemData, priceListItemFilter)
            priceListItemDataOutput.push(PriceListItemData.data)
        }
        return priceListItemDataOutput
    }

}