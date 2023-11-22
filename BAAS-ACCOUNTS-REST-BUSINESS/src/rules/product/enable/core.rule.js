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
const productMock = require("../../../mocks/product.mock.json");
const enableProductCategoryRule = require("./1.enable.productcategory.rule.js")
const enableProductPackageRule = require ("./2.enable.productpackage.rule.js")
const readProdutRule = require ("./3.read.product.rule.js")
const enableProductRule = require ("./4.enable.product.rule.js")




/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();
const EnableProductCategoryRule = new enableProductCategoryRule();
const EnableProductPackageRule = new enableProductPackageRule ();
const ReadProdutRule = new readProdutRule ();
const EnableProductRule = new enableProductRule();


module.exports = class enableAvailablityProductCoreRule {

    /**
* CreatedBy    : RAVIBALAN
* CreatedTime  : NOV 15 2023
* ModifiedBy   : RAVIBALAN 
* ModifiedTime : NOV 15 2023
    * Description  : This function fetches all the information for product
    **/
    async checkEnableCoreRule(apiID, config, headers, input) {
        try {
            if (!config?.IsAvailable) {
                return Commons.generateServiceOutputForAvalibalityNotEnabled()
            }
            if (config?.IsMockEnabled) {
                return productMock[apiID]
            }
            else {
                let outputProductCategory = await EnableProductCategoryRule.checkAvailablityProductCategory(headers, input)
                    if (outputProductCategory.status == 200){
                        let outputProductPackage = await EnableProductPackageRule.checkAvailablityProductPackage(headers, input)
                        if(outputProductPackage.status == 200){
                            let outputProduct = await ReadProdutRule.checkAvailablityProduct(headers, input)
                            if (outputProduct.status == 200){
                                    let output = await EnableProductRule.updateEnableProduct(headers,input)
                                    return Commons.generateServiceOutput(output.data , 200 , Messages.MESSAGE_UPDATE_PRODUCT_AVAILABLE)
                            }
                        }        
                    }
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}