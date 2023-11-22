/**
 * CreatedBy    : Ayerathammal
 * CreatedTime  : NOV 15 2023
 * ModifiedBy   : Ayerathammal
 * ModifiedTime : NOV 15 2023
 * Description  : This File contain rule for Product Bulk Discount Table
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

module.exports = class removeBulkDiscountRule {

    async removeBulkDiscount(headers, input) {
        try {

            const removeBulkDiscountFilter = {
                ProductBulkDiscountID: input.ProductBulkDiscountID,
                IsDeleted: false
            }
            const removeBulkDiscountFields = {
                IsDeleted: true,
                ModifiedAuthID: input.ModifiedAuthID,
                ModifiedBy: input.ModifiedBy,
                DeletedAuthID: input.DeletedAuthID,
                DeletedBy: input.DeletedBy

            }
            const removeBulkDiscountData = await ProductInternal.updateProductBulkDiscount(headers, removeBulkDiscountFilter, removeBulkDiscountFields)
            return removeBulkDiscountData

        }
        catch (error) {
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }

    }
}
