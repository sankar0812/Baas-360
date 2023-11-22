/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 15 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 15 2023
* Description : This file contains all the business rules for update pricelist
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages.js");
const priceListMock = require("../../../mocks/pricelist.mock.json");
const changePriceListRule = require("./1.change.pricelist.rule")





/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();
const ChangePriceListRule = new changePriceListRule();


module.exports = class changePriceListCoreRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 15 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 15 2023
    * Description  : This function fetches all the information for pricelist
    **/
    async changePriceListCore(apiID, config, headers, input) {
        try {
            if (!config?.IsAvailable) {
                return Commons.generateServiceOutputForAvalibalityNotEnabled()
            }
            if (config?.IsMockEnabled) {
                return priceListMock[apiID]
            }
            else {
                let output = await ChangePriceListRule.changePriceList(headers, input)
                return Commons.generateServiceOutput(output.data, 200, Messages.MESSAGE_CHANGE_PRICE_LIST);
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}