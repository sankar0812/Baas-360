/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 15 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 15 2023
* Description : This file contains all the business rules for update parent product
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

module.exports = class changeParentProductRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 15 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 15 2023
    * Description  : This function fetches all the information for parent product
    **/
    async changeParentProduct(headers, input) {
        try {
            let parentProductFilter = {
                ProductID: input.ProductID,
                IsDeleted: false
            }
            let parentProductFields = {
                ParentProductID: input.ParentProductID,
                ModifiedAuthID: input.ModifiedAuthID,
                ModifiedBy: input.ModifiedBy
            }
            let parentProductData = await ProductInternal.updateProduct(headers, parentProductFilter, parentProductFields)
            return parentProductData
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}