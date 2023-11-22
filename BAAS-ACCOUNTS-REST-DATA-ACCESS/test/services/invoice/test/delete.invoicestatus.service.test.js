/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete invoicestatus service class
**/

/**
 * Importing all required modules here
 */

const deleteInvoiceStatusServiceData = require("../data/delete.invoicestatus.service.data")
const deleteInvoiceStatusService = require("../../../../src/services/invoice/delete.invoicestatus.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteInvoiceStatusService = new deleteInvoiceStatusService();
const DeleteInvoiceStatusServiceData = new deleteInvoiceStatusServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.invoicestatus.ts.001] | FunctionPath : [src/services/invoice/delete.invoicestatus.service.js/deleteOneInvoiceStatus()]", () => {


	test(DeleteInvoiceStatusServiceData.DELETE_ONE_INVOICESTATUS_TS001_TC001.description, async () => {

        const output = await DeleteInvoiceStatusService.deleteOneInvoiceStatus(
            DeleteInvoiceStatusServiceData.DELETE_ONE_INVOICESTATUS_TS001_TC001.input.databaseConnector,
            DeleteInvoiceStatusServiceData.DELETE_ONE_INVOICESTATUS_TS001_TC001.input.apiID,
            DeleteInvoiceStatusServiceData.DELETE_ONE_INVOICESTATUS_TS001_TC001.input.config,
            DeleteInvoiceStatusServiceData.DELETE_ONE_INVOICESTATUS_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteInvoiceStatusServiceData.DELETE_ONE_INVOICESTATUS_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteInvoiceStatusServiceData.DELETE_ONE_INVOICESTATUS_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteInvoiceStatusServiceData.DELETE_ONE_INVOICESTATUS_TS001_TC001.output)[2])
	});



    test(DeleteInvoiceStatusServiceData.DELETE_ONE_INVOICESTATUS_TS001_TC002.description, async () => {

        const output = await DeleteInvoiceStatusService.deleteOneInvoiceStatus(
            DeleteInvoiceStatusServiceData.DELETE_ONE_INVOICESTATUS_TS001_TC002.input.databaseConnector,
            DeleteInvoiceStatusServiceData.DELETE_ONE_INVOICESTATUS_TS001_TC002.input.apiID,
            DeleteInvoiceStatusServiceData.DELETE_ONE_INVOICESTATUS_TS001_TC002.input.config,
            DeleteInvoiceStatusServiceData.DELETE_ONE_INVOICESTATUS_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteInvoiceStatusServiceData.DELETE_ONE_INVOICESTATUS_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteInvoiceStatusServiceData.DELETE_ONE_INVOICESTATUS_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteInvoiceStatusServiceData.DELETE_ONE_INVOICESTATUS_TS001_TC002.output.message)        
	});



    test(DeleteInvoiceStatusServiceData.DELETE_ONE_INVOICESTATUS_TS001_TC003.description, async () => {

        const output = await DeleteInvoiceStatusService.deleteOneInvoiceStatus(
            DeleteInvoiceStatusServiceData.DELETE_ONE_INVOICESTATUS_TS001_TC003.input.databaseConnector,
            DeleteInvoiceStatusServiceData.DELETE_ONE_INVOICESTATUS_TS001_TC003.input.apiID,
            DeleteInvoiceStatusServiceData.DELETE_ONE_INVOICESTATUS_TS001_TC003.input.config,
            DeleteInvoiceStatusServiceData.DELETE_ONE_INVOICESTATUS_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteInvoiceStatusServiceData.DELETE_ONE_INVOICESTATUS_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteInvoiceStatusServiceData.DELETE_ONE_INVOICESTATUS_TS001_TC003.output.message)        
	});

});
