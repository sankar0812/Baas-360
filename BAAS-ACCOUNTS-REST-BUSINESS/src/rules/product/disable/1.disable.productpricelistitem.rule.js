/**
* CreatedBy    : RAVIBALAN
* CreatedTime  : NOV 15 2023
* ModifiedBy   : RAVIBALAN 
* ModifiedTime : NOV 15 2023
* Description : This file contains all the business rules for update product package
**/

/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons.js");
const messages = require("../../../utils/messages.js");
const priceListInternal = require("../../../internals/dataaccess/pricelist.internal.js")
const constants = require ("../../../utils/constants.js")

/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages ();
const PriceListInternal = new priceListInternal ();
const Constants = new constants ();
module.exports = class changeProductPackageRule {

/**
* CreatedBy    : RAVIBALAN
* CreatedTime  : NOV 15 2023
* ModifiedBy   : RAVIBALAN 
* ModifiedTime : NOV 15 2023
* Description  : This function fetches all the information for product
**/
    async checkAvailablityPriceListItem(headers, input) {
        try {

            let priceListItemFilter = {
                ProductID : input.ProductInfo.ProductID,
                IsDeleted : false
            }
            let priceListItemFields = {
                "PriceList": {
                    "select": {
                        "PriceListID": true,
                        "PriceListStatusID": true,
                        "PriceListStatus": {
                            "select": {
                                "PriceListStatusCode": true,
                                "PriceListStatus" : true
                            }
                        }
                    }
                }
            }
            let priceListItemData = await PriceListInternal.readPriceListItem(headers, priceListItemFilter, priceListItemFields, 10000, 0, {})

            let Count = 0;
            for (let PriceListStatus of priceListItemData.data) {
                if (Constants.PRICE_LIST_STATUS.PUBLISHED == PriceListStatus.PriceList.PriceListStatus.PriceListStatusCode) {
                    Count++;
                }                
                else if(Count > 0){
                    throw Commons.generateServiceOutput(null , 422 , Messages.MESSGE_INVALID_PRODUCT_PRICELIST_STATUS)
                }
            }
                return priceListItemData        
        }
        catch (error) {
            if(error.status == 404){
                return Commons.generateServiceOutput(null , 200, Messages.MESSAGE_UPDATE_PRODUCT_DISABLE)
            }
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}