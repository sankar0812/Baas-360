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
const readCategoryRule = require("./1.read.category.rule")
const categoryChangeRule = require("./2.change.category.rule")


/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();
const ReadCategoryRule = new readCategoryRule();
const CategoryChangeRule = new categoryChangeRule();


module.exports = class addCategoryCoreRule {
    /**
     * CreatedBy    : RaviBalan
     * CreatedTime  : NOV 08 2023
     * ModifiedBy   : RaviBalan
     * ModifiedTime : NOV 08 2023
     * Description  : This file contains the all api endpoint to function mapping for all invoice module
     **/
    async coreChangeCategory(apiID, config, headers, input) {
        try {
            if (!config.IsAvailable) { return Commons.generateServiceOutputForAvalibalityNotEnabled(); }
            if (config.IsMockEnabled) { return categoryMock[apiID]; }
            else {
                let changeCategoryOutput = null
                let readCategory = await ReadCategoryRule.readCategory(headers, input)

                if (readCategory.status == 404) {
                    changeCategoryOutput = await CategoryChangeRule.changeCategory(headers, input)
                }
                else if (readCategory.status == 200) {
                    return Commons.generateServiceOutput(readCategory.data, 409, Messages.MEESAGE_PRODUCT_CATEGORY_DUPLICATE)

                }

                let Output = {
                    ReadCategory: readCategory.data,
                    UpdateCategory: changeCategoryOutput.data
                }
                return Commons.generateServiceOutput(Output, 200, Messages.MESSAGE_UPDATED_CATEGORY);

            }
        }
        catch (error) {
            console.log(error);
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

};
