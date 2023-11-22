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
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages.js");
const productInternal = require("../../../internals/dataaccess/product.internal")




/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages ();


const ProductInternal = new productInternal()

module.exports = class changeProductPackageRule {

    /**
* CreatedBy    : RAVIBALAN
* CreatedTime  : NOV 15 2023
* ModifiedBy   : RAVIBALAN 
* ModifiedTime : NOV 15 2023
    * Description  : This function fetches all the information for product
    **/
    async checkAvailablityProductCategory(headers, input) {
        try {

            let productCategoryFilter = {
                ProductID: input.ProductInfo.ProductID,
                IsDeleted : false
            }
            let productCategoryFields = {
            }
            let productCategoryData = await ProductInternal.readProductCategory(headers, productCategoryFilter, productCategoryFields, 100, 0, {})
            return productCategoryData
        }
        catch (error) {
            if(error.status == 404){
                throw Commons.generateServiceOutput(null , 422, Messages.MESSAGE_INVALID_PRODUCT_CATEGORY_AVAILABLE)
            }
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}