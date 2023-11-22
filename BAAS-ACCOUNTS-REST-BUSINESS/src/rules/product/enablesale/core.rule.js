/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 15 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 15 2023
* Description : This file contains all the business rules for update product Enable Sale
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages.js");
const productMock = require("../../../mocks/product.mock.json");
const readProductRule = require("./1.read.Product")
const enableSaleRule = require("./2.enable.sale")





/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();
const ReadProductRule = new readProductRule();
const EnableSaleRule = new enableSaleRule();


module.exports = class enableSaleCoreRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 14 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 14 2023
    * Description  : This function fetches all the information for product
    **/
    async enableSaleRule(apiID, config, headers, input) {
        try {
            if (!config?.IsAvailable) {
                return Commons.generateServiceOutputForAvalibalityNotEnabled()
            }
            if (config?.IsMockEnabled) {
                return productMock[apiID]
            }
            else {
                let readProductOutput = await ReadProductRule.readProduct(headers, input)
                let enableSalesOutput = await EnableSaleRule.enableSale(headers, input, readProductOutput)
                let Output = {
                    ProductInfo: readProductOutput.data,
                    EnableSaleInfo: enableSalesOutput.data
                }
                if(enableSalesOutput.status===200)
                {
                return Commons.generateServiceOutput(Output, 200, Messages.MESSAGE_UPDATE_PRODUCT_SALE);
                }
                else if(enableSalesOutput.status===404)
                {
                    return Commons.generateServiceOutput(Output, 404, enableSalesOutput.message);
                }
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}