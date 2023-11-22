/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 11 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 11 2023
* Description : This file contains all the business rules for create package
**/


/**
 * Importing all the required modules
 */
// const commons = require("../../../utils/commons");

const commons = require("../../../utils/commons");
const Message = require("../../../utils/messages")



/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const message = new Message()



module.exports = class addOutputRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : NOV 11 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 11 2023
    * Description  : This function fetches all the information for package
    **/
    async addOutput(addPackage) {
        let Output = {
            PakcageInfo: addPackage.data
        }
        let transFormOutput = await Commons.generateServiceOutput(Output, 200, message.MESSAGE_ADD_PRODUCT_PACKAGE)
        return transFormOutput
    }

}