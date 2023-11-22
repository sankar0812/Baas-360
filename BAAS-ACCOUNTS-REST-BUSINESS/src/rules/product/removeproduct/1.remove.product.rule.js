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
const productInternal = require("../../../internals/dataaccess/product.internal");
/**
 * Initializing objects for all the imported classes
 */

const ProductInternal = new productInternal();
const Commons = new commons();

module.exports = class addProductCategory {

    async removeProduct(headers, input) {
        try {
            const userInfo = {
                ModifiedAuthID: input.UserInfo.ModifiedAuthID,
                DeletedAuthID: input.UserInfo.DeletedAuthID,
                DeletedBy: input.UserInfo.DeletedBy,
                DeletedDate: input.UserInfo.DeletedDate,
                ModifiedBy: input.UserInfo.ModifiedBy,
                ModifiedDate: input.UserInfo.ModifiedDate
            };

            const categoryFilter = {
                CategoryID: input.CategoryInfo.CategoryID,
                ProductID: input.CategoryInfo.ProductID,
                IsDeleted: false
            }
            const categoryFields = {
                ...userInfo,
                IsDeleted: input.CategoryInfo.IsDeleted

            }
            const updatedCategory = await ProductInternal.updateProductCategory(headers, categoryFilter, categoryFields)
            return updatedCategory

        }
        catch (error) {
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }

    }
}
