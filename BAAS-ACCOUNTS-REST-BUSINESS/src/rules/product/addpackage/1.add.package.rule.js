/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 11 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 11 2023
* Description : This file contains all the business rules for create package
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
    async addPackage(headers, input) {
        try {
            let packageData = {
                ProductID: input.PackageInfo.ProductID,
                PackageTypeID: input.PackageInfo.PackageTypeID,
                Length: input.PackageInfo.Length || null,
                LengthUom: input.PackageInfo.LengthUom || null,
                Width: input.PackageInfo.Width || null,
                WidthUom: input.PackageInfo.WidthUom || null,
                Height: input.PackageInfo.Height || null,
                HeightUom: input.PackageInfo.HeightUom || null,
                Weight: input.PackageInfo.Weight || null,
                WeightUom: input.PackageInfo.WeightUom || null,
                PackageCount: input.PackageInfo.PackageCount || null,
                IsEnabled: true,
                CreatedAuthID: input.UserInfo.CreatedAuthID,
                CreatedBy: input.UserInfo.CreatedBy,
                ModifiedAuthID: input.UserInfo.ModifiedAuthID,
                ModifiedBy: input.UserInfo.ModifiedBy

            }
            let packageFilter = {
                ProductID: input.PackageInfo.ProductID,
                PackageTypeID: input.PackageInfo.PackageTypeID,
                Length: input.PackageInfo.Length || null,
                LengthUom: input.PackageInfo.LengthUom || null,
                Width: input.PackageInfo.Width || null,
                WidthUom: input.PackageInfo.WidthUom || null,
                Height: input.PackageInfo.Height || null,
                HeightUom: input.PackageInfo.HeightUom || null,
                Weight: input.PackageInfo.Weight || null,
                WeightUom: input.PackageInfo.WeightUom || null,
                PackageCount: input.PackageInfo.PackageCount || null,
                IsDeleted: false
            }
            let productData = await ProductInternal.createProductPackage(headers, packageData, packageFilter)
            return productData
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}