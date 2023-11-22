/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 14 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 14 2023
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

module.exports = class changeProductPackageRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 14 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 14 2023
    * Description  : This function fetches all the information for product
    **/
    async changeProductPackage(headers, input) {
        try {
            let productPackageFilter = {
                ProductPackageID: input.ProductPackageID,
                IsDeleted: false
            }
            let productPackageFields = {
                IsEnabled: input.IsEnabled,
                ModifiedAuthID: input.ModifiedAuthID,
                ModifiedBy: input.ModifiedBy
            }
            let changePackageData = await ProductInternal.updateProductPackage(headers, productPackageFilter, productPackageFields)
            return changePackageData
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}