/**
 * CreatedBy    : RaviBalan
 * CreatedTime  : NOV 08 2023
 * ModifiedBy   : RaviBalan
 * ModifiedTime : NOV 08 2023
 * Description  : This File contain rule for Category Table
 **/

/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages");
const categoryInternal = require("../../../internals/dataaccess/category.internal");
/**
 * Initializing objects for all the imported classes
 */

const CategoryInternal = new categoryInternal();
const Messages = new messages();
const Commons = new commons();

module.exports = class addCategory {

    async readCategory(headers, input) {
        try {

            const categoryFilter = {
                "CategoryID": {
                    "notIn": [input.CategoryInfo.CategoryID]
                },
                CategoryName: {
                    "equals": input.CategoryInfo.CategoryName,
                    "mode": "insensitive"
                },
                CategoryCode: {
                    "equals": input.CategoryInfo.CategoryCode,
                    "mode": "insensitive"
                },
                IsDeleted: false
            }

            const readCategory = await CategoryInternal.readCategory(headers, categoryFilter, {}, 100, 0, {}) 
            
            return readCategory.data
        }
        catch (error) {
            if (error.status == 404) {
                return Commons.generateServiceOutput(null, 404, Messages.MEESAGE_PRODUCT_CATEGORY_DUPLICATE)
            }
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }

    }
}