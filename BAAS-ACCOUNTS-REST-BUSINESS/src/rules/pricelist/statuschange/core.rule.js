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
const statusChangeRule = require("./1.statuschange.rule")





/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();
const StatusChangeRule = new statusChangeRule();


module.exports = class statusChangeRuleCore {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 15 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 15 2023
    * Description  : This function fetches all the information for pricelist
    **/
    async statusChangeCore(apiID, config, headers, input) {
        try {
            if (!config?.IsAvailable) {
                return Commons.generateServiceOutputForAvalibalityNotEnabled()
            }
            if (config?.IsMockEnabled) {
                return priceListMock[apiID]
            }
            else {
                let output = await StatusChangeRule.statusChange(headers, input)
                return Commons.generateServiceOutput(output.data, 200, Messages.MESSAGE_ADD_PRICE_LIST_STATUS);
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}