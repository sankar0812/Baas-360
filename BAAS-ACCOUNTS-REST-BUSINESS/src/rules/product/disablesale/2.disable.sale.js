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

module.exports = class disableSaleRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 15 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 15 2023
    * Description  : This function fetches all the information for product enable sales
    **/
    async disableSale(headers, input, readProduct) {
        try {
            if (readProduct.data[0].IsSellable === false && readProduct.data[0].IsPurchase === false) {
                let disableSaleFilter = {
                    ProductID: input.ProductID,
                    IsDeleted: false
                }
                let disableSaleFields = {
                    IsSellable: false,
                    ModifiedAuthID: input.ModifiedAuthID,
                    ModifiedBy: input.ModifiedBy
                }
                let disableSaleData = await ProductInternal.updateProduct(headers, disableSaleFilter, disableSaleFields)
                return disableSaleData
            }
            else {
                return Commons.generateServiceOutput(null, 404, "Disable the Purchase and Sellable to Disable the Product")
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}