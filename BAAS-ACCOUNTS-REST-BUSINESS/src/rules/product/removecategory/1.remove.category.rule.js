/**
 * CreatedBy    : Ayerathammal
 * CreatedTime  : NOV 15 2023
 * ModifiedBy   : Ayerathammal
 * ModifiedTime : NOV 15 2023
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

const Commons = new commons();
const ProductInternal = new productInternal();

module.exports = class removeCategoryRule {

    async removeCategory(headers, input) {
        try {

            const removeCategoryFilter = {
                ProductCategoryID: input.ProductCategoryID,
                IsDeleted: false
            }
            const removeCategoryFields = {
                IsDeleted: true,
                ModifiedAuthID: input.ModifiedAuthID,
                ModifiedBy: input.ModifiedBy,
                DeletedAuthID: input.DeletedAuthID,
                DeletedBy: input.DeletedBy

            }
            const removeCategoryData = await ProductInternal.updateProductCategory(headers, removeCategoryFilter, removeCategoryFields)
            return removeCategoryData

        }
        catch (error) {
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }

    }
}
