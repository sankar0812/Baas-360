/**
 * CreatedBy    : RaviBalan
 * CreatedTime  : OCT 17 2023
 * ModifiedBy   : RaviBalan
 * ModifiedTime : OCT 17 2023
 * Description  : This file contains the all api endpoint to function mapping for all invoice module
 **/

/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages");
const categoryMock = require("../../../mocks/category.mock.json");
const categoryAddRule = require ("../add/1.add.category.rule")


/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();
const CategoryAddRule = new categoryAddRule();


module.exports = class addCategoryCoreRule {
    /**
     * CreatedBy    : RaviBalan
     * CreatedTime  : NOV 08 2023
     * ModifiedBy   : RaviBalan
     * ModifiedTime : NOV 08 2023
     * Description  : This file contains the all api endpoint to function mapping for all invoice module
     **/
    async coreAddCategory(apiID, config, headers, input) {
        try {
            if (!config.IsAvailable) { return Commons.generateServiceOutputForAvalibalityNotEnabled(); }
            if (config.IsMockEnabled) { return categoryMock[apiID]; }
            else {
                let Output = await CategoryAddRule.addCategory(headers,input)
                return Commons.generateServiceOutput(Output.data, 200, Messages.MEESAGE_CATEGORY_ADDED);

            }}
        catch (error) {
            console.log(error);
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

};
