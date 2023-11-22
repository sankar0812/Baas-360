/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete invoiceitem service class
**/

/**
 * Importing all required modules here
 */

const deleteInvoiceItemServiceData = require("../data/delete.invoiceitem.service.data")
const deleteInvoiceItemService = require("../../../../src/services/invoice/delete.invoiceitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteInvoiceItemService = new deleteInvoiceItemService();
const DeleteInvoiceItemServiceData = new deleteInvoiceItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.invoiceitem.ts.001] | FunctionPath : [src/services/invoice/delete.invoiceitem.service.js/deleteOneInvoiceItem()]", () => {


	test(DeleteInvoiceItemServiceData.DELETE_ONE_INVOICEITEM_TS001_TC001.description, async () => {

        const output = await DeleteInvoiceItemService.deleteOneInvoiceItem(
            DeleteInvoiceItemServiceData.DELETE_ONE_INVOICEITEM_TS001_TC001.input.databaseConnector,
            DeleteInvoiceItemServiceData.DELETE_ONE_INVOICEITEM_TS001_TC001.input.apiID,
            DeleteInvoiceItemServiceData.DELETE_ONE_INVOICEITEM_TS001_TC001.input.config,
            DeleteInvoiceItemServiceData.DELETE_ONE_INVOICEITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteInvoiceItemServiceData.DELETE_ONE_INVOICEITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteInvoiceItemServiceData.DELETE_ONE_INVOICEITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteInvoiceItemServiceData.DELETE_ONE_INVOICEITEM_TS001_TC001.output)[2])
	});



    test(DeleteInvoiceItemServiceData.DELETE_ONE_INVOICEITEM_TS001_TC002.description, async () => {

        const output = await DeleteInvoiceItemService.deleteOneInvoiceItem(
            DeleteInvoiceItemServiceData.DELETE_ONE_INVOICEITEM_TS001_TC002.input.databaseConnector,
            DeleteInvoiceItemServiceData.DELETE_ONE_INVOICEITEM_TS001_TC002.input.apiID,
            DeleteInvoiceItemServiceData.DELETE_ONE_INVOICEITEM_TS001_TC002.input.config,
            DeleteInvoiceItemServiceData.DELETE_ONE_INVOICEITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteInvoiceItemServiceData.DELETE_ONE_INVOICEITEM_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteInvoiceItemServiceData.DELETE_ONE_INVOICEITEM_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteInvoiceItemServiceData.DELETE_ONE_INVOICEITEM_TS001_TC002.output.message)        
	});



    test(DeleteInvoiceItemServiceData.DELETE_ONE_INVOICEITEM_TS001_TC003.description, async () => {

        const output = await DeleteInvoiceItemService.deleteOneInvoiceItem(
            DeleteInvoiceItemServiceData.DELETE_ONE_INVOICEITEM_TS001_TC003.input.databaseConnector,
            DeleteInvoiceItemServiceData.DELETE_ONE_INVOICEITEM_TS001_TC003.input.apiID,
            DeleteInvoiceItemServiceData.DELETE_ONE_INVOICEITEM_TS001_TC003.input.config,
            DeleteInvoiceItemServiceData.DELETE_ONE_INVOICEITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteInvoiceItemServiceData.DELETE_ONE_INVOICEITEM_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteInvoiceItemServiceData.DELETE_ONE_INVOICEITEM_TS001_TC003.output.message)        
	});

});
