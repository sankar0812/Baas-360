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
const filterProductRule = require ("./1.filter.product.rule.js")
const filterProductCategory = require("./2.filter.productcategory.rule.js")
const _ = require('lodash')



/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();
const FilterProductRule = new filterProductRule ();
const FilterProductCategory = new filterProductCategory ();


module.exports = class enableAvailablityProductCoreRule {

    /**
* CreatedBy    : RAVIBALAN
* CreatedTime  : NOV 15 2023
* ModifiedBy   : RAVIBALAN 
* ModifiedTime : NOV 15 2023
    * Description  : This function fetches all the information for product
    **/
    async filterProductCoreRule(apiID, config, headers, input) {
        try {
            if (!config?.IsAvailable) {
                return Commons.generateServiceOutputForAvalibalityNotEnabled()
            }
            if (config?.IsMockEnabled) {
                return productMock[apiID]
            }
            else {
                let productOutputData =[]
                let productOutput = await FilterProductRule.filterProduct(headers,input)
                let categoryProduct = await FilterProductCategory.filterProductCategory(headers,input)

                if(productOutput.data !== null){
                    productOutputData = productOutput
                }
                
                if (categoryProduct.data !== null){
                    for(let categoryOutputData of categoryProduct){
                        productOutputData.push(categoryOutputData.Product)
                    }
                }
                let finalOutput = _.uniqBy(productOutputData, 'ProductID');

                if (finalOutput.length !== 0){
                    return Commons.generateServiceOutput(finalOutput , 200 , Messages.MEESAGE_PRODUCT_ADVANCED_FILTER)
                }
                else{
                    throw Commons.generateServiceOutput(null, 404, Messages.MEESAGE_CATEGORY_EMPTY_DATA)
                }    
            }
        }
        catch (error) {
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }
}