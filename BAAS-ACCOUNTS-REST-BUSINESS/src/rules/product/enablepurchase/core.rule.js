/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 15 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 15 2023
* Description : This file contains all the business rules for update product Enable Purchase
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages.js");
const productMock = require("../../../mocks/product.mock.json");
const readProductRule = require("./1.read.Product")
const enablePurchaseRule = require("./2.enable.purchase")





/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();
const ReadProductRule = new readProductRule();
const EnablePurchaseRule = new enablePurchaseRule();


module.exports = class enablePurchaseCoreRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 14 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 14 2023
    * Description  : This function fetches all the information for product
    **/
    async enablePurchaseRule(apiID, config, headers, input) {
        try {
            if (!config?.IsAvailable) {
                return Commons.generateServiceOutputForAvalibalityNotEnabled()
            }
            if (config?.IsMockEnabled) {
                return productMock[apiID]
            }
            else {
                let readProductOutput = await ReadProductRule.readProduct(headers, input)
                let enablePurchaseOutput = await EnablePurchaseRule.enablePurchase(headers, input, readProductOutput)

                let Output = {
                    ProductInfo: readProductOutput.data,
                    EnablePurchaseInfo: enablePurchaseOutput.data
                }
                if (enablePurchaseOutput.status === 200) {
                    return Commons.generateServiceOutput(Output, 200, Messages.MESSAGE_UPDATE_PRODUCT_SALE);
                }
                else if (enablePurchaseOutput.status === 404) {
                    return Commons.generateServiceOutput(Output, 404, enablePurchaseOutput.message);
                }
                return Commons.generateServiceOutput(Output, 200, Messages.MESSAGE_UPDATE_PRODUCT_PURCHASE);
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}