/**
 * CreatedBy    : RaviBalan
 * CreatedTime  : NOV 10 2023
 * ModifiedBy   : RaviBalan
 * ModifiedTime : NOV 10 2023
 * Description  : This file contains the all api endpoint to function mapping for all invoice module
 **/

/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages");
const storeMock = require("../../../mocks/store.mock.json");
const changeEffectiveDateStoreRule = require ("./1.changedate.store.rule")


/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();
const ChangeEffectiveDateStoreRule = new changeEffectiveDateStoreRule();


module.exports = class addStoreCoreRule {
    /**
     * CreatedBy    : RaviBalan
     * CreatedTime  : NOV 08 2023
     * ModifiedBy   : RaviBalan
     * ModifiedTime : NOV 08 2023
     * Description  : This file contains the all api endpoint to function mapping for all invoice module
     **/
    async coreChangeEffectiveDate(apiID, config, headers, input) {
        try {
            if (!config.IsAvailable) { return Commons.generateServiceOutputForAvalibalityNotEnabled(); }
            if (config.IsMockEnabled) { return storeMock[apiID]}
            else {
                let Output = await ChangeEffectiveDateStoreRule.changeEffectiveDate(headers,input)
                

                return Commons.generateServiceOutput(Output.data, 200, Messages.MESSAGE_STORE_ADD_PRICELIST);

            }}
        catch (error) {
            console.log(error);
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

};
