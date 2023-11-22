/**
@CreatedBy : Dinesh
@CreatedDate : 08 Jan 2023
@Description : This File Contains Read Operation Related Function For invoiceitem Schema
*/

/**
* Importing all the required modules
*/

const commons = require("../../utils/commons");
const messages = require("../../utils/messages");
const invoiceMock = require("../../mocks/invoice.mock.json");

/**
* Initializing objects for all the imported classes
*/
const Commons = new commons();
const Messages = new messages();

module.exports = class readInvoiceItemService {

    /**
    * CreatedBy : Dinesh
    * CreatedTime : jan 08 2023
    * ModifiedBy : Dinesh
    * ModifiedTime : jan 08 2023
    * Description : This function read
    **/
    async readInvoiceItems(databaseConnector, apiID, config, input) {
        try {
            if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
            if (config.IsMockEnabled == true) { return invoiceMock[apiID] }
            else {
                let output = await databaseConnector.InvoiceItem.findMany(
                    Commons.generatePrismaFindManyInput(input)
                ).catch((error) => {
                    throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
                });
                if (output.length == 0) {
                    return Commons.generateServiceOutput(null, 404, Messages.MESSAGE_INVOICE_ITEM_NOT_FOUND);
                } else {
                    return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_INVOICE_ITEM_READ_SUCCESSFULLY);
                }
            }
        }
        catch (error) {
            throw Commons.generateServiceOutput(null, error.status || 500, JSON.stringify(error.message))
        }
    }

    /**
    * CreatedBy : Dinesh
    * CreatedTime : jan 08 2023
    * ModifiedBy : Dinesh
    * ModifiedTime : jan 08 2023
    * Description : This function read
    **/
    async readOneInvoiceItem(databaseConnector, apiID, config, input) {
        try {
            if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
            if (config.IsMockEnabled == true) { return invoiceMock[apiID] }
            else {
                let output = await databaseConnector.InvoiceItem.findUnique({
                    where: {
                        InvoiceItemID: parseInt(input.invoiceitemid)
                    },
                }).catch((error) => {
                    throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
                });
                if (output == null) {
                    return Commons.generateServiceOutput(output, 404, Messages.MESSAGE_INVOICE_ITEM_NOT_FOUND);
                }
                else {
                    return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_INVOICE_ITEM_HAS_BEEN_FOUND);
                }
            }
        }
        catch (error) {
            throw Commons.generateServiceOutput(null, error.status || 500, JSON.stringify(error.message))
        }
    }

    /**
    * CreatedBy : Dinesh
    * CreatedTime : jan 08 2023
    * ModifiedBy : Dinesh
    * ModifiedTime : jan 08 2023
    * Description : This function read
    **/
    async readInvoiceItemCount(databaseConnector, apiID, config, input) {
        try {
            if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
            if (config.IsMockEnabled == true) { return invoiceMock[apiID] }
            else {
                let output = await databaseConnector.InvoiceItem.aggregate(
                    Commons.generatePrismaAggregateInput(input)

                ).catch((error) => {
                    console.log(error);
                    throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
                });

                return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_INVOICE_ITEM_READ_COUNT_SUCCESSFULLY);

            }
        }
        catch (error) {
            throw Commons.generateServiceOutput(null, error.status || 500, JSON.stringify(error.message))
        }

    }


}