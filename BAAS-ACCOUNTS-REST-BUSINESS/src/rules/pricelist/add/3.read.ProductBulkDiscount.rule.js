/**
* CreatedBy    : Ayerathammal
* CreatedTime  : OCT 24 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : OCT 24 2023
* Description : This file contains all the business rules for create Price list and Price list item and Bulk Discount
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages");

const productInternal = require("../../../internals/dataaccess/product.internal")



/**
 * Initializing objects for all the imported classes
 */

const Commons = new commons();
const Messages = new messages();

const ProductInternal = new productInternal();


module.exports = class readProductBulkDiscountRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : OCT 24 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : OCT 24 2023
    * Description  : This function add the information for price list and price list item 
    **/
    async readProductBulkDiscount(headers, input) {
        try {
            let readProductBulkDiscount = null

            for (let priceListInputData of input.PriceItemInfo) {

                let priceListBulkDiscountFilterInput = {
                    ProductID: priceListInputData.ProductID,
                    IsDeleted: false
                }
                let priceListBulkDiscountFieldsInput = {
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
                readProductBulkDiscount = await ProductInternal.readProductBulkDiscount(headers, priceListBulkDiscountFilterInput, priceListBulkDiscountFieldsInput, 1000, 0, {})

            }
            return readProductBulkDiscount
        }
        catch (error) {
            if (error.status == 404) {
                return Commons.generateServiceOutput(null, 200, Messages.MESSAGE_ADD_PRICE_LIST)
            }
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }

    }
}