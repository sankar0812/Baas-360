/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 15 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 15 2023
* Description : This file contains all the business rules for update product disable sales
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

module.exports = class disablePurchaseRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 15 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 15 2023
    * Description  : This function fetches all the information for product enable sales
    **/
    async disablePurchase(headers, input) {
        try {
            let disablePurchaseFilter = {
                ProductID: input.ProductID,
                IsDeleted: false
            }
            let disablePurchaseFields = {
                IsPurchase: false,
                ModifiedAuthID: input.ModifiedAuthID,
                ModifiedBy: input.ModifiedBy
            }
            let disablePurchaseData = await ProductInternal.updateProduct(headers, disablePurchaseFilter, disablePurchaseFields)
            return disablePurchaseData
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}