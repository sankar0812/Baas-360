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

    async changeCategory(headers, input) {
        try {
            const userInfo = {
                ModifiedAuthID: input.UserInfo.ModifiedAuthID,
                ModifiedBy: input.UserInfo.ModifiedBy,
                ModifiedDate: input.UserInfo.ModifiedDate,
                DeletedAuthID: input.UserInfo.DeletedAuthID,
                DeletedBy: input.UserInfo.DeletedBy,
                DeletedDate: input.UserInfo.DeletedDate
            };

            const categoryFilter = {
                CategoryID: input.CategoryInfo.CategoryID,
            }
            const categoryFields = {
                ...userInfo,
                CategoryName: input.CategoryInfo.CategoryName,
                CategoryCode: input.CategoryInfo.CategoryCode,
                Description: input.CategoryInfo.Description,
                IsDeleted: false
            }

            const updatedCategory = await CategoryInternal.updateCategory(headers, categoryFilter, categoryFields)
            return updatedCategory.data

        }
        catch (error) {
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }

    }
}