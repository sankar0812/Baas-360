

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update invoicestatus service class
**/

/**
 * Importing all required modules here
 */

const updateInvoiceStatusServiceData = require("../data/update.invoicestatus.service.data")
const updateInvoiceStatusService = require("../../../../src/services/invoice/update.invoicestatus.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateInvoiceStatusService = new updateInvoiceStatusService();
const UpdateInvoiceStatusServiceData = new updateInvoiceStatusServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.invoicestatus.ts.001] | FunctionPath : [src/services/invoice/update.invoicestatus.service.js/updateInvoiceStatus()]", () => {

	test(UpdateInvoiceStatusServiceData.UPDATE_INVOICESTATUS_TS001_TC001.description, async () => {

        const output = await UpdateInvoiceStatusService.updateInvoiceStatus(
            UpdateInvoiceStatusServiceData.UPDATE_INVOICESTATUS_TS001_TC001.input.databaseConnector,
            UpdateInvoiceStatusServiceData.UPDATE_INVOICESTATUS_TS001_TC001.input.apiID,
            UpdateInvoiceStatusServiceData.UPDATE_INVOICESTATUS_TS001_TC001.input.config,
            UpdateInvoiceStatusServiceData.UPDATE_INVOICESTATUS_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateInvoiceStatusServiceData.UPDATE_INVOICESTATUS_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateInvoiceStatusServiceData.UPDATE_INVOICESTATUS_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateInvoiceStatusServiceData.UPDATE_INVOICESTATUS_TS001_TC001.output)[2])
	});

    test(UpdateInvoiceStatusServiceData.UPDATE_INVOICESTATUS_TS001_TC002.description, async () => {

        const output = await UpdateInvoiceStatusService.updateInvoiceStatus(
            UpdateInvoiceStatusServiceData.UPDATE_INVOICESTATUS_TS001_TC002.input.databaseConnector,
            UpdateInvoiceStatusServiceData.UPDATE_INVOICESTATUS_TS001_TC002.input.apiID,
            UpdateInvoiceStatusServiceData.UPDATE_INVOICESTATUS_TS001_TC002.input.config,
            UpdateInvoiceStatusServiceData.UPDATE_INVOICESTATUS_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateInvoiceStatusServiceData.UPDATE_INVOICESTATUS_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateInvoiceStatusServiceData.UPDATE_INVOICESTATUS_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateInvoiceStatusServiceData.UPDATE_INVOICESTATUS_TS001_TC002.output.message)        
	});

    test(UpdateInvoiceStatusServiceData.UPDATE_INVOICESTATUS_TS001_TC003.description, async () => {

        const output = await UpdateInvoiceStatusService.updateInvoiceStatus(
            UpdateInvoiceStatusServiceData.UPDATE_INVOICESTATUS_TS001_TC003.input.databaseConnector,
            UpdateInvoiceStatusServiceData.UPDATE_INVOICESTATUS_TS001_TC003.input.apiID,
            UpdateInvoiceStatusServiceData.UPDATE_INVOICESTATUS_TS001_TC003.input.config,
            UpdateInvoiceStatusServiceData.UPDATE_INVOICESTATUS_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateInvoiceStatusServiceData.UPDATE_INVOICESTATUS_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateInvoiceStatusServiceData.UPDATE_INVOICESTATUS_TS001_TC003.output.message)        
	});

});
