/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 15 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 15 2023
* Description : This file contains all the business rules for update product enable purchase
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

module.exports = class enablePurchaseRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 15 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 15 2023
    * Description  : This function fetches all the information for product enable purchase
    **/
    async enablePurchase(headers, input, readProduct) {
        try {
            if (readProduct.data[0].IsEnabled === true) {
                let enablePurchaseFilter = {
                    ProductID: input.ProductID,
                    IsDeleted: false
                }
                let enablePurchaseFields = {
                    IsEnable: true,
                    ModifiedAuthID: input.ModifiedAuthID,
                    ModifiedBy: input.ModifiedBy
                }
                let enabelPurchaseData = await ProductInternal.updateProduct(headers, enablePurchaseFilter, enablePurchaseFields)
                return enabelPurchaseData
            }
            else {
                return Commons.generateServiceOutput(null, 404, "Should Enable the Product")
            }

        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}