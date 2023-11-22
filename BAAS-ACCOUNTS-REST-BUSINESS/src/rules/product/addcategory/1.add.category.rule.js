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

    async addProduct(headers, input) {
        try {
            const userInfo = {
                CreatedAuthID: input.UserInfo.CreatedAuthID,
                CreatedBy: input.UserInfo.CreatedBy,
                ModifiedAuthID: input.UserInfo.ModifiedAuthID,
                ModifiedBy: input.UserInfo.ModifiedBy,
            };
            let createdCategoryOutput = []
            for (let categoryDatas of input.CategoryInfo) {
                let categoryData = {
                    ...userInfo,
                    ProductID: categoryDatas.ProductID,
                    CategoryID: categoryDatas.CategoryID,
                    Remarks: categoryDatas.Remarks
                }
                const categoryFilter = {
                    ProductID: categoryDatas.ProductID,
                    CategoryID: categoryDatas.CategoryID,
                    IsDeleted: false
                };
                const createdCategory = await ProductInternal.createProductCategory(headers, categoryData, categoryFilter);
                createdCategoryOutput.push(createdCategory.data)

            }
            return createdCategoryOutput;
        }
        catch (error) {
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }

    }
}