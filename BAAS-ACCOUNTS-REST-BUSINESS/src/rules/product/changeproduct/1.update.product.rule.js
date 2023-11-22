/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 14 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 14 2023
* Description : This file contains all the business rules for update product
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

module.exports = class updateRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 09 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 09 2023
    * Description  : This function fetches all the information for product
    **/
    async updateProduct(headers, input) {
        try {
            let productFilter = {
                ProductID: input.ProductID,
                IsDeleted: false
            }
            let productFields = {
                ProductName: input.ProductName,
                ProductCode: input.ProductCode,
                ProductUPC: input.ProductUPC,
                ProductSKU: input.ProductSKU,
                BaseSaleRate: input.BaseSaleRate,
                ComparisionSaleRate: input.ComparisionSaleRate,
                CurrencyID: input.CurrencyID,
                AppSettingUomID: input.AppSettingUomID,
                IsGoods: input.IsGoods,
                IsService: input.IsService,
                StockLimit: input.Description,
                ModifiedAuthID: input.ModifiedAuthID,
                ModifiedBy: input.ModifiedBy
            }
            let productUpdatedData = await ProductInternal.updateProduct(headers, productFilter, productFields)
            return productUpdatedData
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}