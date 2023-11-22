/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 16 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 16 2023
* Description : This file contains all the business rules for Read Product Bulk Discount
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

module.exports = class readProductBulkDiscountRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 16 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 16 2023
    * Description  : This function fetches all the information for product
    **/
    async readProductBulkDiscount(headers, input) {
        try {
            let ProductBulkDiscountFilter = {
                ProductID: input.PriceListItemInfo.ProductID,
                IsDeleted: false

            }
            let ProductBulkDiscountFields = {
                "ProductBulkDiscountID": true,
                "MerchantID": true,
                "TenantID": true,
                "ProductID": true,
                "CurrencyID": true,
                "RangeMin": true,
                "RangeMax": true,
                "DiscountPeriod": true,
                "DiscountType": true,
                "DiscountPercent": true,
                "DiscountRate": true,
                "Description": true
            }
            const readProductBulkDiscount = await ProductInternal.readProductBulkDiscount(headers, ProductBulkDiscountFilter, ProductBulkDiscountFields, 1000, 0, {})
            return readProductBulkDiscount
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}