/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 15 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 15 2023
* Description : This file contains all the business rules for remove product category
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages.js");
const productMock = require("../../../mocks/product.mock.json");
const removeBulkDiscountRule = require("./1.remove.bulkdiscount.rule")





/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();
const RemoveBulkDiscountRule = new removeBulkDiscountRule();


module.exports = class removeBulkDiscountCoreRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 15 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 15 2023
    * Description  : This function fetches all the information for product
    **/
    async removeBulkDiscountCore(apiID, config, headers, input) {
        try {
            if (!config?.IsAvailable) {
                return Commons.generateServiceOutputForAvalibalityNotEnabled()
            }
            if (config?.IsMockEnabled) {
                return productMock[apiID]
            }
            else {
                let Output = await RemoveBulkDiscountRule.removeBulkDiscount(headers, input)
                return Commons.generateServiceOutput(Output.data, 200, Messages.MESSAGE_UPDATE_PRODUCT_BULK_DISCOUNT);
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}