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
const categoryInternal = require("../../../internals/dataaccess/category.internal");
/**
 * Initializing objects for all the imported classes
 */

const CategoryInternal = new categoryInternal();
const Commons = new commons();

module.exports = class addCategory {

    async addCategory(headers, input) {
        try {

            const userInfo = {
                CreatedAuthID: input.UserInfo.CreatedAuthID,
                CreatedBy: input.UserInfo.CreatedBy,
                ModifiedAuthID: input.UserInfo.ModifiedAuthID,
                ModifiedBy: input.UserInfo.ModifiedBy,
            };
            const categoryData = {
                ...userInfo,
                ParentCategoryID: input?.CategoryInfo ? parseInt(input.CategoryInfo.ParentCategoryID) : null,
                CategoryName: input.CategoryInfo.CategoryName,
                CategoryCode: input.CategoryInfo.CategoryCode,
                Description: input.CategoryInfo.Description
            };

            const categoryFilter = {
                CategoryCode: {
                    "equals": input.CategoryInfo.CategoryCode,
                    "mode": "insensitive"
                },
                CategoryName: {
                    "equals": input.CategoryInfo.CategoryName,
                    "mode": "insensitive"
                },
                IsDeleted: false
            };
            const createdCategory = await CategoryInternal.createCategory(headers, categoryData, categoryFilter);
            return createdCategory;
        }
        catch (error) {
            console.log(error);
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }

    }
}