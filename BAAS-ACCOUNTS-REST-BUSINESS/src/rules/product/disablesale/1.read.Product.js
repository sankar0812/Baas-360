/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 20 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 20 2023
* Description : This file contains all the business rules for read product 
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

module.exports = class readProductRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 20 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 20 2023
    * Description  : This function fetches all the information for product enable sales
    **/
    async readProduct(headers, input) {
        try {
            let productFilter = {
                ProductID: input.ProductID,
                IsDeleted: false
            }
            let productFields = {
                ProductID: true,
                IsEnabled: true,
                IsSellable: true,
                IsPurchase: true
            }
            let productData = await ProductInternal.readProduct(headers, productFilter, productFields, 1, 0, {})
            return productData
        }
        catch (error) {
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}