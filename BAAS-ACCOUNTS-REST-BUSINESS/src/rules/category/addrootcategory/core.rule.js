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
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages");
const categoryMock = require("../../../mocks/category.mock.json");
const categoryAddRootRule = require ("./1.addroot.category.rule")


/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();
const CategoryAddRootRule = new categoryAddRootRule();


module.exports = class addRootCategoryCoreRule {
    /**
     * CreatedBy    : RaviBalan
     * CreatedTime  : NOV 09 2023
     * ModifiedBy   : RaviBalan
     * ModifiedTime : NOV 09 2023
     * Description  : This file contains the all api endpoint to function mapping for all invoice module
     **/
    async coreAddRootCategory(apiID, config, headers, input) {
        try {
            if (!config.IsAvailable) { return Commons.generateServiceOutputForAvalibalityNotEnabled(); }
            if (config.IsMockEnabled) { return categoryMock[apiID]; }
            else {
                let Output = await CategoryAddRootRule.addRootCategory(headers,input)
                return Commons.generateServiceOutput(Output, 200, Messages.MESSAGE_UPDATED_ROOT_CATEGORY);

            }}
        catch (error) {
            console.log(error);
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

};
