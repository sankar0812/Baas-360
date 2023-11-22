/**
* CreatedBy    : RAVIBALAN
* CreatedTime  : NOV 15 2023
* ModifiedBy   : RAVIBALAN 
* ModifiedTime : NOV 15 2023
* Description : This file contains all the business rules for update product package
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");

const productInternal = require("../../../internals/dataaccess/product.internal")




/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();


const ProductInternal = new productInternal()

module.exports = class disableProductRule {

    /**
* CreatedBy    : RAVIBALAN
* CreatedTime  : NOV 15 2023
* ModifiedBy   : RAVIBALAN 
* ModifiedTime : NOV 15 2023
    * Description  : This function fetches all the information for product
    **/
    async updateDisableProduct(headers, input) {
        try {

            let userInfo = {
                ModifiedAuthID: input.UserInfo.ModifiedAuthID,
                ModifiedBy: input.UserInfo.ModifiedBy,
                ModifiedDate: input.UserInfo.ModifiedDate
            }
            let productCategoryFilter = {
                ProductID: input.ProductInfo.ProductID,
                IsDeleted: false
            }
            let productCategoryFields = {
                ...userInfo,
                IsEnabled: false
            }
            let changeProductData = await ProductInternal.updateProduct(headers, productCategoryFilter, productCategoryFields, 100, 0, {})
            return changeProductData
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}