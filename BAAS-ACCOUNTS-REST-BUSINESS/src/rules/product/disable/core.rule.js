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
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages.js");
const productMock = require("../../../mocks/product.mock.json");
const disablePricelistItemRule = require("./1.disable.productpricelistitem.rule.js")
const disableProductRule = require("./2.disable.product.rule.js")


/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();
const DisablePricelistItemRule = new disablePricelistItemRule(); 
const DisableProductRule = new disableProductRule ();


module.exports = class enableAvailablityProductCoreRule {

    /**
* CreatedBy    : RAVIBALAN
* CreatedTime  : NOV 15 2023
* ModifiedBy   : RAVIBALAN 
* ModifiedTime : NOV 15 2023
    * Description  : This function fetches all the information for product
    **/
    async checkDisableCoreRule(apiID, config, headers, input) {
        try {
            if (!config?.IsAvailable) {
                return Commons.generateServiceOutputForAvalibalityNotEnabled()
            }
            if (config?.IsMockEnabled) {
                return productMock[apiID]
            }
            else {
                   let priceListItemOutput = await DisablePricelistItemRule.checkAvailablityPriceListItem(headers,input)
                   if(priceListItemOutput.status == 200){
                       let output = await DisableProductRule.updateDisableProduct(headers,input)
                        return Commons.generateServiceOutput(output.data ,200 , Messages.MESSAGE_UPDATE_PRODUCT_DISABLE)

                   }
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}