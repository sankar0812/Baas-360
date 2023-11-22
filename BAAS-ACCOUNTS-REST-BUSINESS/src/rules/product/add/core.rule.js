/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 09 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 09 2023
* Description : This file contains all the business rules for create Product
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const productMock = require("../../../mocks/product.mock.json");
const addRule = require("./1.add.product.rule")
const addOutputRule = require("./2.transform.output.rule")


/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();

const AddRule = new addRule();
const AddOutputRule = new addOutputRule();


module.exports = class addCoreRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 09 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 09 2023
    * Description  : This function add the information for product 
    **/
    async addCore(apiID, config, headers, input) {
        try {
            if (!config?.IsAvailable) {
                return Commons.generateServiceOutputForAvalibalityNotEnabled()
            }
            if (config?.IsMockEnabled) {
                return productMock[apiID]
            }
            else {
                let addProduct = await AddRule.addProduct(headers, input)
                let ProductOutput = await AddOutputRule.addOutput(addProduct)
                return ProductOutput
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}