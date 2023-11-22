/**
* CreatedBy    : Ayerathammal
* CreatedTime  : NOV 09 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : NOV 09 2023
* Description : This file contains all the business rules for create product
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
    * CreatedTime  : NOV 09 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : NOV 09 2023
    * Description  : This function fetches all the information for product
    **/
    async addOutput(addProduct) {
        let Output = {
            ProductInfo: addProduct.data
        }
        let transFormOutput = await Commons.generateServiceOutput(Output, 200, message.MESSAGE_ADD_PRODUCT)
        return transFormOutput
    }

}