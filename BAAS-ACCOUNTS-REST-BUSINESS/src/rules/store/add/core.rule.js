/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 06 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 06 2023
* Description : This file contains all the business rules for add store
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const storeMock = require("../../../mocks/store.mock.json");
const storeAddRule = require("./1.add.store.rule.js")
const messages = require ("../../../utils/messages.js")




/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const StoreAddRule = new storeAddRule ();
const Messages = new messages (); 

module.exports = class addStoreCoreRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 06 2023
    * ModifiedBy   : RAVI 
    * ModifiedTime : NOV 10 2023
    * Description  : This function add the information for price list and price list item 
    **/
    async coreAddStore(apiID, config, headers, input) {
        try {
            if (!config?.IsAvailable) {return Commons.generateServiceOutputForAvalibalityNotEnabled()}
            if (config?.IsMockEnabled) {return storeMock[apiID]}
            else {
                let output = await StoreAddRule.addStore(headers, input)

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