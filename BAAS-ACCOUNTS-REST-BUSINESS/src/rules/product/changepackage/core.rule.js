/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 14 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 14 2023
* Description : This file contains all the business rules for update product package
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages.js");
const productMock = require("../../../mocks/product.mock.json");
const changeProductPackageRule = require("./1.change.package.rule")





/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();
const ChangeProductPackageRule = new changeProductPackageRule();


module.exports = class changePackageCoreRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 14 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 14 2023
    * Description  : This function fetches all the information for product
    **/
    async changePackageCore(apiID, config, headers, input) {
        try {
            if (!config?.IsAvailable) {
                return Commons.generateServiceOutputForAvalibalityNotEnabled()
            }
            if (config?.IsMockEnabled) {
                return productMock[apiID]
            }
            else {
                let output = await ChangeProductPackageRule.changeProductPackage(headers, input)
                return Commons.generateServiceOutput(output.data, 200, Messages.MESSAGE_UPDATE_PRODUCT_PACKAGE);
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}