/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 14 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 14 2023
* Description : This file contains all the business rules for create Product Bluk Discount
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const productMock = require("../../../mocks/product.mock.json");
const addBulkDiscountRule = require("../addbulkdiscount/1.add.bulk.discount.rule");
const transformOutputRule = require("../addbulkdiscount/2.transform.output.rule")

/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const AddBulkDiscountRule = new addBulkDiscountRule();
const TransformOutputRule = new transformOutputRule();



module.exports = class addBulkDiscountCoreRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 14 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 14 2023
    * Description  : This function add the information for product Bulk Discount
    **/
    async addBulkDiscountCore(apiID, config,headers,input) {
        try {
            if (!config?.IsAvailable) {
                return Commons.generateServiceOutputForAvalibalityNotEnabled()
            }
            if (config?.IsMockEnabled) {
                return productMock[apiID]
            }
            else {
                let addBulkDiscount = await AddBulkDiscountRule.addBulkdDiscount(headers,input)
                let bulkDiscountOutput = await TransformOutputRule.addOutput(addBulkDiscount)
                return bulkDiscountOutput
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}