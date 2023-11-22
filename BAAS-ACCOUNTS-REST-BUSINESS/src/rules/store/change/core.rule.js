/**
 * CreatedBy    : RaviBalan
 * CreatedTime  : NOV 09 2023
 * ModifiedBy   : RaviBalan
 * ModifiedTime : NOV 09 2023
 * Description  : This file contains the all api endpoint to function mapping for all invoice module
 **/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const storeMock = require("../../../mocks/store.mock.json");
const storeChangeRule = require("./1.change.store.rule.js")
const messages = require ("../../../utils/messages.js")




/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const StoreChangeRule = new storeChangeRule ();
const Messages = new messages (); 

module.exports = class changeStoreCoreRule {

/**
 * CreatedBy    : RaviBalan
 * CreatedTime  : NOV 09 2023
 * ModifiedBy   : RaviBalan
 * ModifiedTime : NOV 09 2023
 * Description  : This file contains the all api endpoint to function mapping for all invoice module
 **/
    
    async coreChangeStore(apiID, config, headers, input) {
        try {
            if (!config?.IsAvailable) {return Commons.generateServiceOutputForAvalibalityNotEnabled()}
            if (config?.IsMockEnabled) {return storeMock[apiID]}
            else {
                let output = await StoreChangeRule.changeStore(headers, input)

                if(output.status == 409 ){
                    return Commons.generateServiceOutput(output.data, 409, Messages.MEESAGE_DUPLICATE_IDENTIFIED);
                }

                return Commons.generateServiceOutput (output.data , 200, Messages.MESSAGE_ADD_STORE)                
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}