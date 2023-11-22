/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create appsettinginvoicestatus service class
**/

/**
 * Importing all required modules here
 */

const createAppSettingInvoiceStatusServiceData = require("../data/create.appsettinginvoicestatus.service.data")
const createAppSettingInvoiceStatusService = require("../../../../src/services/invoice/create.appsettinginvoicestatus.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateAppSettingInvoiceStatusService = new createAppSettingInvoiceStatusService();
const CreateAppSettingInvoiceStatusServiceData = new createAppSettingInvoiceStatusServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.appsettinginvoicestatus.ts.001] | FunctionPath : [src/services/invoice/create.appsettinginvoicestatus.service.js/createOneAppSettingInvoiceStatus()]", () => {


	test(CreateAppSettingInvoiceStatusServiceData.CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC001.description, async () => {

        const output = await CreateAppSettingInvoiceStatusService.createOneAppSettingInvoiceStatus(
            CreateAppSettingInvoiceStatusServiceData.CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC001.input.databaseConnector,
            CreateAppSettingInvoiceStatusServiceData.CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC001.input.apiID,
            CreateAppSettingInvoiceStatusServiceData.CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC001.input.config,
            CreateAppSettingInvoiceStatusServiceData.CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateAppSettingInvoiceStatusServiceData.CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateAppSettingInvoiceStatusServiceData.CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateAppSettingInvoiceStatusServiceData.CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC001.output)[2])
	});



    test(CreateAppSettingInvoiceStatusServiceData.CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC002.description, async () => {

        const output = await CreateAppSettingInvoiceStatusService.createOneAppSettingInvoiceStatus(
            CreateAppSettingInvoiceStatusServiceData.CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC002.input.databaseConnector,
            CreateAppSettingInvoiceStatusServiceData.CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC002.input.apiID,
            CreateAppSettingInvoiceStatusServiceData.CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC002.input.config,
            CreateAppSettingInvoiceStatusServiceData.CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateAppSettingInvoiceStatusServiceData.CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC002.output.data)
        expect(output.status).toBe(CreateAppSettingInvoiceStatusServiceData.CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC002.output.status)
        expect(output.message).toBe(CreateAppSettingInvoiceStatusServiceData.CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC002.output.message)        
	});



    test(CreateAppSettingInvoiceStatusServiceData.CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC003.description, async () => {

        const output = await CreateAppSettingInvoiceStatusService.createOneAppSettingInvoiceStatus(
            CreateAppSettingInvoiceStatusServiceData.CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC003.input.databaseConnector,
            CreateAppSettingInvoiceStatusServiceData.CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC003.input.apiID,
            CreateAppSettingInvoiceStatusServiceData.CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC003.input.config,
            CreateAppSettingInvoiceStatusServiceData.CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateAppSettingInvoiceStatusServiceData.CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC003.output.status)
        expect(output.message).toBe(CreateAppSettingInvoiceStatusServiceData.CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC003.output.message)        
	});

});