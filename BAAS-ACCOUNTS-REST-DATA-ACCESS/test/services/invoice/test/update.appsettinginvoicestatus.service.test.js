

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update appsettinginvoicestatus service class
**/

/**
 * Importing all required modules here
 */

const updateAppSettingInvoiceStatusServiceData = require("../data/update.appsettinginvoicestatus.service.data")
const updateAppSettingInvoiceStatusService = require("../../../../src/services/invoice/update.appsettinginvoicestatus.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateAppSettingInvoiceStatusService = new updateAppSettingInvoiceStatusService();
const UpdateAppSettingInvoiceStatusServiceData = new updateAppSettingInvoiceStatusServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.appsettinginvoicestatus.ts.001] | FunctionPath : [src/services/invoice/update.appsettinginvoicestatus.service.js/updateAppSettingInvoiceStatus()]", () => {

	test(UpdateAppSettingInvoiceStatusServiceData.UPDATE_APPSETTINGINVOICESTATUS_TS001_TC001.description, async () => {

        const output = await UpdateAppSettingInvoiceStatusService.updateAppSettingInvoiceStatus(
            UpdateAppSettingInvoiceStatusServiceData.UPDATE_APPSETTINGINVOICESTATUS_TS001_TC001.input.databaseConnector,
            UpdateAppSettingInvoiceStatusServiceData.UPDATE_APPSETTINGINVOICESTATUS_TS001_TC001.input.apiID,
            UpdateAppSettingInvoiceStatusServiceData.UPDATE_APPSETTINGINVOICESTATUS_TS001_TC001.input.config,
            UpdateAppSettingInvoiceStatusServiceData.UPDATE_APPSETTINGINVOICESTATUS_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateAppSettingInvoiceStatusServiceData.UPDATE_APPSETTINGINVOICESTATUS_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateAppSettingInvoiceStatusServiceData.UPDATE_APPSETTINGINVOICESTATUS_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateAppSettingInvoiceStatusServiceData.UPDATE_APPSETTINGINVOICESTATUS_TS001_TC001.output)[2])
	});

    test(UpdateAppSettingInvoiceStatusServiceData.UPDATE_APPSETTINGINVOICESTATUS_TS001_TC002.description, async () => {

        const output = await UpdateAppSettingInvoiceStatusService.updateAppSettingInvoiceStatus(
            UpdateAppSettingInvoiceStatusServiceData.UPDATE_APPSETTINGINVOICESTATUS_TS001_TC002.input.databaseConnector,
            UpdateAppSettingInvoiceStatusServiceData.UPDATE_APPSETTINGINVOICESTATUS_TS001_TC002.input.apiID,
            UpdateAppSettingInvoiceStatusServiceData.UPDATE_APPSETTINGINVOICESTATUS_TS001_TC002.input.config,
            UpdateAppSettingInvoiceStatusServiceData.UPDATE_APPSETTINGINVOICESTATUS_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateAppSettingInvoiceStatusServiceData.UPDATE_APPSETTINGINVOICESTATUS_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateAppSettingInvoiceStatusServiceData.UPDATE_APPSETTINGINVOICESTATUS_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateAppSettingInvoiceStatusServiceData.UPDATE_APPSETTINGINVOICESTATUS_TS001_TC002.output.message)        
	});

    test(UpdateAppSettingInvoiceStatusServiceData.UPDATE_APPSETTINGINVOICESTATUS_TS001_TC003.description, async () => {

        const output = await UpdateAppSettingInvoiceStatusService.updateAppSettingInvoiceStatus(
            UpdateAppSettingInvoiceStatusServiceData.UPDATE_APPSETTINGINVOICESTATUS_TS001_TC003.input.databaseConnector,
            UpdateAppSettingInvoiceStatusServiceData.UPDATE_APPSETTINGINVOICESTATUS_TS001_TC003.input.apiID,
            UpdateAppSettingInvoiceStatusServiceData.UPDATE_APPSETTINGINVOICESTATUS_TS001_TC003.input.config,
            UpdateAppSettingInvoiceStatusServiceData.UPDATE_APPSETTINGINVOICESTATUS_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateAppSettingInvoiceStatusServiceData.UPDATE_APPSETTINGINVOICESTATUS_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateAppSettingInvoiceStatusServiceData.UPDATE_APPSETTINGINVOICESTATUS_TS001_TC003.output.message)        
	});

});
