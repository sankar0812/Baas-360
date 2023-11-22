

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update invoice service class
**/

/**
 * Importing all required modules here
 */

const updateInvoiceServiceData = require("../data/update.invoice.service.data")
const updateInvoiceService = require("../../../../src/services/invoice/update.invoice.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateInvoiceService = new updateInvoiceService();
const UpdateInvoiceServiceData = new updateInvoiceServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.invoice.ts.001] | FunctionPath : [src/services/invoice/update.invoice.service.js/updateInvoice()]", () => {

	test(UpdateInvoiceServiceData.UPDATE_INVOICE_TS001_TC001.description, async () => {

        const output = await UpdateInvoiceService.updateInvoice(
            UpdateInvoiceServiceData.UPDATE_INVOICE_TS001_TC001.input.databaseConnector,
            UpdateInvoiceServiceData.UPDATE_INVOICE_TS001_TC001.input.apiID,
            UpdateInvoiceServiceData.UPDATE_INVOICE_TS001_TC001.input.config,
            UpdateInvoiceServiceData.UPDATE_INVOICE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateInvoiceServiceData.UPDATE_INVOICE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateInvoiceServiceData.UPDATE_INVOICE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateInvoiceServiceData.UPDATE_INVOICE_TS001_TC001.output)[2])
	});

    test(UpdateInvoiceServiceData.UPDATE_INVOICE_TS001_TC002.description, async () => {

        const output = await UpdateInvoiceService.updateInvoice(
            UpdateInvoiceServiceData.UPDATE_INVOICE_TS001_TC002.input.databaseConnector,
            UpdateInvoiceServiceData.UPDATE_INVOICE_TS001_TC002.input.apiID,
            UpdateInvoiceServiceData.UPDATE_INVOICE_TS001_TC002.input.config,
            UpdateInvoiceServiceData.UPDATE_INVOICE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateInvoiceServiceData.UPDATE_INVOICE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateInvoiceServiceData.UPDATE_INVOICE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateInvoiceServiceData.UPDATE_INVOICE_TS001_TC002.output.message)        
	});

    test(UpdateInvoiceServiceData.UPDATE_INVOICE_TS001_TC003.description, async () => {

        const output = await UpdateInvoiceService.updateInvoice(
            UpdateInvoiceServiceData.UPDATE_INVOICE_TS001_TC003.input.databaseConnector,
            UpdateInvoiceServiceData.UPDATE_INVOICE_TS001_TC003.input.apiID,
            UpdateInvoiceServiceData.UPDATE_INVOICE_TS001_TC003.input.config,
            UpdateInvoiceServiceData.UPDATE_INVOICE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateInvoiceServiceData.UPDATE_INVOICE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateInvoiceServiceData.UPDATE_INVOICE_TS001_TC003.output.message)        
	});

});
