/**
* CreatedBy    : Uma Kohila
* CreatedTime  : NOV 17 2023
* ModifiedBy   : Uma Kohila 
* ModifiedTime : NOV 17 2023
* Description : This file contains all the business rules for create customer pricelist
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages")
const customerMock = require("../../../mocks/customer.mock.json");
const createPricelistCustomerAccountRule = require("./1.create.pricelistcustomeraccount.rule")



/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();
const CreatePricelistCustomerAccountRule = new createPricelistCustomerAccountRule ()

module.exports = class addCustomerPriceListtCoreRule {

    /**
    * CreatedBy    : Uma Kohila
    * CreatedTime  : NOV 17 2023
    * ModifiedBy   : Uma Kohila 
    * ModifiedTime : NOV 17 2023
    * Description  : This function add the customer pricelist
    **/
    async addCustomerPriceList(apiID, config, headers, input) {
        try {
            if (!config?.IsAvailable) {
                return Commons.generateServiceOutputForAvalibalityNotEnabled()
            }
            if (config?.IsMockEnabled) {
                return customerMock[apiID]
            }
            else {

                let priceListOutput = await CreatePricelistCustomerAccountRule.addpriceListCustomerAccount(headers,input)

                return Commons.generateServiceOutput(priceListOutput.data , 200, Messages.MEESAGE_ADD_PRICELIST_CUSTOMER_ACCOUNT)
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}