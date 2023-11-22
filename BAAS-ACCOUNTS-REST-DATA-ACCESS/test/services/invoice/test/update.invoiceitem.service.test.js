

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update invoiceitem service class
**/

/**
 * Importing all required modules here
 */

const updateInvoiceItemServiceData = require("../data/update.invoiceitem.service.data")
const updateInvoiceItemService = require("../../../../src/services/invoice/update.invoiceitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateInvoiceItemService = new updateInvoiceItemService();
const UpdateInvoiceItemServiceData = new updateInvoiceItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.invoiceitem.ts.001] | FunctionPath : [src/services/invoice/update.invoiceitem.service.js/updateInvoiceItem()]", () => {

	test(UpdateInvoiceItemServiceData.UPDATE_INVOICEITEM_TS001_TC001.description, async () => {

        const output = await UpdateInvoiceItemService.updateInvoiceItem(
            UpdateInvoiceItemServiceData.UPDATE_INVOICEITEM_TS001_TC001.input.databaseConnector,
            UpdateInvoiceItemServiceData.UPDATE_INVOICEITEM_TS001_TC001.input.apiID,
            UpdateInvoiceItemServiceData.UPDATE_INVOICEITEM_TS001_TC001.input.config,
            UpdateInvoiceItemServiceData.UPDATE_INVOICEITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateInvoiceItemServiceData.UPDATE_INVOICEITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateInvoiceItemServiceData.UPDATE_INVOICEITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateInvoiceItemServiceData.UPDATE_INVOICEITEM_TS001_TC001.output)[2])
	});

    test(UpdateInvoiceItemServiceData.UPDATE_INVOICEITEM_TS001_TC002.description, async () => {

        const output = await UpdateInvoiceItemService.updateInvoiceItem(
            UpdateInvoiceItemServiceData.UPDATE_INVOICEITEM_TS001_TC002.input.databaseConnector,
            UpdateInvoiceItemServiceData.UPDATE_INVOICEITEM_TS001_TC002.input.apiID,
            UpdateInvoiceItemServiceData.UPDATE_INVOICEITEM_TS001_TC002.input.config,
            UpdateInvoiceItemServiceData.UPDATE_INVOICEITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateInvoiceItemServiceData.UPDATE_INVOICEITEM_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateInvoiceItemServiceData.UPDATE_INVOICEITEM_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateInvoiceItemServiceData.UPDATE_INVOICEITEM_TS001_TC002.output.message)        
	});

    test(UpdateInvoiceItemServiceData.UPDATE_INVOICEITEM_TS001_TC003.description, async () => {

        const output = await UpdateInvoiceItemService.updateInvoiceItem(
            UpdateInvoiceItemServiceData.UPDATE_INVOICEITEM_TS001_TC003.input.databaseConnector,
            UpdateInvoiceItemServiceData.UPDATE_INVOICEITEM_TS001_TC003.input.apiID,
            UpdateInvoiceItemServiceData.UPDATE_INVOICEITEM_TS001_TC003.input.config,
            UpdateInvoiceItemServiceData.UPDATE_INVOICEITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateInvoiceItemServiceData.UPDATE_INVOICEITEM_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateInvoiceItemServiceData.UPDATE_INVOICEITEM_TS001_TC003.output.message)        
	});

});
