/**
 * CreatedBy    : RaviBalan
 * CreatedTime  : NOV 09 2023
 * ModifiedBy   : RaviBalan
 * ModifiedTime : NOV 09 2023
 * Description  : This file contains the all api endpoint to function mapping for all invoice module
 **/

/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons.js");
const messages = require("../../../utils/messages.js");
const productMock = require("../../../mocks/product.mock.json");
const productRemoveRule = require ("./1.remove.product.rule.js")


/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();
const ProductRemoveRule = new productRemoveRule();


module.exports = class addCategoryCoreRule {
    /**
     * CreatedBy    : RaviBalan
     * CreatedTime  : NOV 08 2023
     * ModifiedBy   : RaviBalan
     * ModifiedTime : NOV 08 2023
     * Description  : This file contains the all api endpoint to function mapping for all invoice module
     **/
    async coreRemoveProduct(apiID, config, headers, input) {
        try {
            if (!config.IsAvailable) { return Commons.generateServiceOutputForAvalibalityNotEnabled(); }
            if (config.IsMockEnabled) { return productMock[apiID]; }
            else {
                let Output = await ProductRemoveRule.removeProduct(headers,input)
                return Commons.generateServiceOutput(Output, 200, Messages.MEESAGE_PRODUCT_CATEGORY);

            }}
        catch (error) {
            console.log(error);
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

};
