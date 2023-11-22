/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 09 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 09 2023
* Description : This file contains all the business rules for create product
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

module.exports = class addRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 09 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 09 2023
    * Description  : This function fetches all the information for product
    **/
    async addProduct(headers, input) {
        try {
            let productdata = {
                ProductName: input.ProductInfo.ProductName,
                ProductCode: input.ProductInfo.ProductCode,
                ParentProductID: input.ProductInfo.ParentProductID || null,
                CurrencyID: input.UserInfo.CurrencyID,
                BaseSaleRate: input.ProductInfo.BaseSaleRate,
                ComparisionSaleRate: input.ProductInfo.ComparisionSaleRate,
                AppSettingUomID: input.ProductInfo.AppSettingUomID,
                CreatedAuthID: input.UserInfo.CreatedAuthID,
                CreatedBy: input.UserInfo.CreatedBy,
                ModifiedAuthID: input.UserInfo.ModifiedAuthID,
                ModifiedBy: input.UserInfo.ModifiedBy

            }
            let productFilter = {
                ProductName: {
                    "equals": input.ProductInfo.ProductName,
                    "mode": "insensitive"
                },
                ProductCode: {
                    "equals": input.ProductInfo.ProductCode,
                    "mode": "insensitive"
                },
                IsDeleted: false
            }
            let productData = await ProductInternal.createProduct(headers, productdata, productFilter)
            return productData
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}