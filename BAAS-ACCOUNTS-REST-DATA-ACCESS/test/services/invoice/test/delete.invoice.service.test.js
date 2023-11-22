/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete invoice service class
**/

/**
 * Importing all required modules here
 */

const deleteInvoiceServiceData = require("../data/delete.invoice.service.data")
const deleteInvoiceService = require("../../../../src/services/invoice/delete.invoice.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteInvoiceService = new deleteInvoiceService();
const DeleteInvoiceServiceData = new deleteInvoiceServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.invoice.ts.001] | FunctionPath : [src/services/invoice/delete.invoice.service.js/deleteOneInvoice()]", () => {


	test(DeleteInvoiceServiceData.DELETE_ONE_INVOICE_TS001_TC001.description, async () => {

        const output = await DeleteInvoiceService.deleteOneInvoice(
            DeleteInvoiceServiceData.DELETE_ONE_INVOICE_TS001_TC001.input.databaseConnector,
            DeleteInvoiceServiceData.DELETE_ONE_INVOICE_TS001_TC001.input.apiID,
            DeleteInvoiceServiceData.DELETE_ONE_INVOICE_TS001_TC001.input.config,
            DeleteInvoiceServiceData.DELETE_ONE_INVOICE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteInvoiceServiceData.DELETE_ONE_INVOICE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteInvoiceServiceData.DELETE_ONE_INVOICE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteInvoiceServiceData.DELETE_ONE_INVOICE_TS001_TC001.output)[2])
	});



    test(DeleteInvoiceServiceData.DELETE_ONE_INVOICE_TS001_TC002.description, async () => {

        const output = await DeleteInvoiceService.deleteOneInvoice(
            DeleteInvoiceServiceData.DELETE_ONE_INVOICE_TS001_TC002.input.databaseConnector,
            DeleteInvoiceServiceData.DELETE_ONE_INVOICE_TS001_TC002.input.apiID,
            DeleteInvoiceServiceData.DELETE_ONE_INVOICE_TS001_TC002.input.config,
            DeleteInvoiceServiceData.DELETE_ONE_INVOICE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteInvoiceServiceData.DELETE_ONE_INVOICE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteInvoiceServiceData.DELETE_ONE_INVOICE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteInvoiceServiceData.DELETE_ONE_INVOICE_TS001_TC002.output.message)        
	});



    test(DeleteInvoiceServiceData.DELETE_ONE_INVOICE_TS001_TC003.description, async () => {

        const output = await DeleteInvoiceService.deleteOneInvoice(
            DeleteInvoiceServiceData.DELETE_ONE_INVOICE_TS001_TC003.input.databaseConnector,
            DeleteInvoiceServiceData.DELETE_ONE_INVOICE_TS001_TC003.input.apiID,
            DeleteInvoiceServiceData.DELETE_ONE_INVOICE_TS001_TC003.input.config,
            DeleteInvoiceServiceData.DELETE_ONE_INVOICE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteInvoiceServiceData.DELETE_ONE_INVOICE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteInvoiceServiceData.DELETE_ONE_INVOICE_TS001_TC003.output.message)        
	});

});
