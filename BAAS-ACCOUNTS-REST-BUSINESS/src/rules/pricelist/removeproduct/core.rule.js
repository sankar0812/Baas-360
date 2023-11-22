/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 16 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 16 2023
* Description : This file contains all the business rules for remove product
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages.js");
const priceListMock = require("../../../mocks/pricelist.mock.json");
const removePriceListItemRule = require("./1.removepricelistitem.removeproduct.rule")
const removePriceListItemBulkDiscount = require("./2.removepricelistitembulkdiscount.removeproduct.rule")





/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();
const RemovePriceListItemRule = new removePriceListItemRule();
const RemovePriceListItemBulkDiscount = new removePriceListItemBulkDiscount();


module.exports = class removeProductCoreRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 16 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 16 2023
    * Description  : This function fetches all the information for remove product
    **/
    async removeProductCore(apiID, config, headers, input) {
        try {
            if (!config?.IsAvailable) {
                return Commons.generateServiceOutputForAvalibalityNotEnabled()
            }
            if (config?.IsMockEnabled) {
                return priceListMock[apiID]
            }
            else {
                let removepriceListItem = await RemovePriceListItemRule.removePriceListItem(headers, input)
                let removePriceListItemBulkDiscount = await RemovePriceListItemBulkDiscount.removePriceListItemBulkDiscount(headers, input)
                let Output = {
                    RemovePriceListItem: removepriceListItem.data,
                    RemovePriceListItemBulkDiscount: removePriceListItemBulkDiscount.data
                }
                return Commons.generateServiceOutput(Output, 200, Messages.MESSAGE_PRICE_LIST_REMOVE_PRODUCT);
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}