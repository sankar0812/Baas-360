/**
* CreatedBy    : Ayerathammal
* CreatedTime  : OCT 18 2023
* ModifiedBy   : Ayerathammal 
* ModifiedTime : OCT 18 2023
* Description : This file contains all the business rules for read product list and product list item
**/


/**
 * Importing all the required modules
 */
const commons = require("../../../utils/commons");
const messages = require("../../../utils/messages")
const invoiceMock = require("../../../mocks/invoice.mock.json");
const customerInternal = require("../../../internals/dataaccess/customer.internal")



/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();

const CustomerInternal = new customerInternal()

module.exports = class generateNumberCoreRule {

    /**
    * CreatedBy    : Ayerathammal
    * CreatedTime  : OCT 18 2023
    * ModifiedBy   : Ayerathammal 
    * ModifiedTime : OCT 18 2023
    * Description  : This function fetches all the information for product list
    **/
    async generateNumber(apiID, config, headers, input) {
        try {
            if (!config?.IsAvailable) {
                return Commons.generateServiceOutputForAvalibalityNotEnabled()
            }
            if (config?.IsMockEnabled) {
                return invoiceMock[apiID]
            }
            else {
                let genNumFilter = {
                    CustomerID: input.CustomerID,
                    IsDeleted: false
                }
                let genNumFields = {
                    "CustomerID": true,
                    "CustomerName": true,
                    "CustomerCode": true,
                    "TenantID": true,
                    "InvoicePrefix": true,
                    "InvoieSequence": true
                }
                let generateNumberData = await CustomerInternal.readCustomer(headers, genNumFilter, genNumFields, 1, 0, {})

                let invoiceCountDataObj = parseInt(generateNumberData.data[0].InvoieSequence) + 1

                let generateNumberObj = generateNumberData.data[0].InvoicePrefix + invoiceCountDataObj.toString().padStart(5, '0')
                let output = {
                    "InvoiceNumber": generateNumberObj
                }

                return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_GENERATE_NUMBER);
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}