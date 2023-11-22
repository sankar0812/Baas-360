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

module.exports = class removePackageRule {

    async removePackage(headers, input) {
        try {

            const removePackgeFilter = {
                ProductPackageID: input.ProductPackageID,
                IsDeleted: false
            }
            const removePackgeFields = {
                IsDeleted: true,
                ModifiedAuthID: input.ModifiedAuthID,
                ModifiedBy: input.ModifiedBy,
                DeletedAuthID: input.DeletedAuthID,
                DeletedBy: input.DeletedBy

            }
            const removePackageData = await ProductInternal.updateProductPackage(headers, removePackgeFilter, removePackgeFields)
            return removePackageData

        }
        catch (error) {
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }

    }
}
