/**
* CreatedBy    : RAVIBALAN
* CreatedTime  : NOV 15 2023
* ModifiedBy   : RAVIBALAN 
* ModifiedTime : NOV 15 2023
* Description : This file contains all the business rules for update product package
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons.js");
const messages = require("../../../utils/messages.js");
const productInternal = require("../../../internals/dataaccess/product.internal.js")




/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();

const ProductInternal = new productInternal()

module.exports = class changeProductPackageRule {

    /**
* CreatedBy    : RAVIBALAN
* CreatedTime  : NOV 15 2023
* ModifiedBy   : RAVIBALAN 
* ModifiedTime : NOV 15 2023
    **/
    async checkAvailablityProduct(headers, input) {
        try {

            let productBulkDiscountFilter = {
                ProductID: input.ProductInfo.ProductID,
                IsDeleted: false

            }
            let productBulkDiscountFields = {
                ProductUPC: true,
                ProductSKU: true
            }
            let productData = await (await ProductInternal.readProduct(headers, productBulkDiscountFilter, productBulkDiscountFields, 1, 0, {}))
            if (
                (productData.data[0].ProductUPC === null || productData.data[0].ProductUPC === '') &&
                (productData.data[0].ProductSKU === null || productData.data[0].ProductSKU === '')
            ) {
                throw Commons.generateServiceOutput(productData, 422, Messages.MESSAGE_INVALID_PRODUCT_AVAILABLE_UPC);
            }
            return productData

        }
        catch (error) {
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}