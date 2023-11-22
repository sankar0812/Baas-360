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
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 14 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 14 2023
    * Description  : This function fetches all the information for product
    **/
    async checkAvailablityProductPackage(headers, input) {
        try {

            let productPackageFilter = {
                ProductID: input.ProductInfo.ProductID,
                IsDeleted : false

            }
            let productPackageFields = {
            }
            let productPackageData = await ProductInternal.readProductPackage(headers, productPackageFilter, productPackageFields, 1, 0, {})
            
            return productPackageData
        }
        catch (error) {
            if(error.status == 404){
                throw Commons.generateServiceOutput(null , 422, Messages.MESSAGE_INVALID_PRODUCT_PACKAGE_AVAILABLE)
            }
            throw Commons.generateServiceOutput(null, error.status, Messages.MEESAGE_CATEGORY_ADDED);
        }
    }

}