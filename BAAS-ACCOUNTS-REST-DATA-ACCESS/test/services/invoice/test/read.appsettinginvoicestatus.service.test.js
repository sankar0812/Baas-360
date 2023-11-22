/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read AppSettingInvoiceStatus service class
**/

/**
 * Importing all required modules here
 */

const readAppSettingInvoiceStatusServiceData = require("../data/read.appsettinginvoicestatus.service.data")
const readAppSettingInvoiceStatusService = require("../../../../src/services/invoice/read.appsettinginvoicestatus.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadAppSettingInvoiceStatusService = new readAppSettingInvoiceStatusService();
const ReadAppSettingInvoiceStatusServiceData = new readAppSettingInvoiceStatusServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.appsettinginvoicestatus.ts.001] | FunctionPath : [src/services/invoice/read.contianer.service.js/readAppSettingInvoiceStatuss()]", () => {


	test(ReadAppSettingInvoiceStatusServiceData.READ_APPSETTINGINVOICESTATUS_TS001_TC001.description, async () => {

        const output = await ReadAppSettingInvoiceStatusService.readAppSettingInvoiceStatuses(
            ReadAppSettingInvoiceStatusServiceData.READ_APPSETTINGINVOICESTATUS_TS001_TC001.input.databaseConnector,
            ReadAppSettingInvoiceStatusServiceData.READ_APPSETTINGINVOICESTATUS_TS001_TC001.input.apiID,
            ReadAppSettingInvoiceStatusServiceData.READ_APPSETTINGINVOICESTATUS_TS001_TC001.input.config,
            ReadAppSettingInvoiceStatusServiceData.READ_APPSETTINGINVOICESTATUS_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAppSettingInvoiceStatusServiceData.READ_APPSETTINGINVOICESTATUS_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAppSettingInvoiceStatusServiceData.READ_APPSETTINGINVOICESTATUS_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAppSettingInvoiceStatusServiceData.READ_APPSETTINGINVOICESTATUS_TS001_TC001.output)[2])
	});



    test(ReadAppSettingInvoiceStatusServiceData.READ_APPSETTINGINVOICESTATUS_TS001_TC002.description, async () => {

        const output = await ReadAppSettingInvoiceStatusService.readAppSettingInvoiceStatuses(
            ReadAppSettingInvoiceStatusServiceData.READ_APPSETTINGINVOICESTATUS_TS001_TC002.input.databaseConnector,
            ReadAppSettingInvoiceStatusServiceData.READ_APPSETTINGINVOICESTATUS_TS001_TC002.input.apiID,
            ReadAppSettingInvoiceStatusServiceData.READ_APPSETTINGINVOICESTATUS_TS001_TC002.input.config,
            ReadAppSettingInvoiceStatusServiceData.READ_APPSETTINGINVOICESTATUS_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadAppSettingInvoiceStatusServiceData.READ_APPSETTINGINVOICESTATUS_TS001_TC002.output.data)
        expect(output.status).toBe(ReadAppSettingInvoiceStatusServiceData.READ_APPSETTINGINVOICESTATUS_TS001_TC002.output.status)
        expect(output.message).toBe(ReadAppSettingInvoiceStatusServiceData.READ_APPSETTINGINVOICESTATUS_TS001_TC002.output.message)        
	});



    test(ReadAppSettingInvoiceStatusServiceData.READ_APPSETTINGINVOICESTATUS_TS001_TC003.description, async () => {

        const output = await ReadAppSettingInvoiceStatusService.readAppSettingInvoiceStatuses(
            ReadAppSettingInvoiceStatusServiceData.READ_APPSETTINGINVOICESTATUS_TS001_TC003.input.databaseConnector,
            ReadAppSettingInvoiceStatusServiceData.READ_APPSETTINGINVOICESTATUS_TS001_TC003.input.apiID,
            ReadAppSettingInvoiceStatusServiceData.READ_APPSETTINGINVOICESTATUS_TS001_TC003.input.config,
            ReadAppSettingInvoiceStatusServiceData.READ_APPSETTINGINVOICESTATUS_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadAppSettingInvoiceStatusServiceData.READ_APPSETTINGINVOICESTATUS_TS001_TC003.output.status)
        expect(output.message).toBe(ReadAppSettingInvoiceStatusServiceData.READ_APPSETTINGINVOICESTATUS_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.appsettinginvoicestatus.ts.002] | FunctionPath : [src/services/invoice/read.appsettinginvoicestatus.service.js/readOneAppSettingInvoiceStatus()]", () => {


	test(ReadAppSettingInvoiceStatusServiceData.READ_ONE_APPSETTINGINVOICESTATUS_TS002_TC001.description, async () => {

        const output = await ReadAppSettingInvoiceStatusService.readOneAppSettingInvoiceStatus(
            ReadAppSettingInvoiceStatusServiceData.READ_ONE_APPSETTINGINVOICESTATUS_TS002_TC001.input.databaseConnector,
            ReadAppSettingInvoiceStatusServiceData.READ_ONE_APPSETTINGINVOICESTATUS_TS002_TC001.input.apiID,
            ReadAppSettingInvoiceStatusServiceData.READ_ONE_APPSETTINGINVOICESTATUS_TS002_TC001.input.config,
            ReadAppSettingInvoiceStatusServiceData.READ_ONE_APPSETTINGINVOICESTATUS_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAppSettingInvoiceStatusServiceData.READ_ONE_APPSETTINGINVOICESTATUS_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAppSettingInvoiceStatusServiceData.READ_ONE_APPSETTINGINVOICESTATUS_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAppSettingInvoiceStatusServiceData.READ_ONE_APPSETTINGINVOICESTATUS_TS002_TC001.output)[2])
	});



    test(ReadAppSettingInvoiceStatusServiceData.READ_ONE_APPSETTINGINVOICESTATUS_TS002_TC002.description, async () => {

        const output = await ReadAppSettingInvoiceStatusService.readOneAppSettingInvoiceStatus(
            ReadAppSettingInvoiceStatusServiceData.READ_ONE_APPSETTINGINVOICESTATUS_TS002_TC002.input.databaseConnector,
            ReadAppSettingInvoiceStatusServiceData.READ_ONE_APPSETTINGINVOICESTATUS_TS002_TC002.input.apiID,
            ReadAppSettingInvoiceStatusServiceData.READ_ONE_APPSETTINGINVOICESTATUS_TS002_TC002.input.config,
            ReadAppSettingInvoiceStatusServiceData.READ_ONE_APPSETTINGINVOICESTATUS_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadAppSettingInvoiceStatusServiceData.READ_ONE_APPSETTINGINVOICESTATUS_TS002_TC002.output.data)
        expect(output.status).toBe(ReadAppSettingInvoiceStatusServiceData.READ_ONE_APPSETTINGINVOICESTATUS_TS002_TC002.output.status)
        expect(output.message).toBe(ReadAppSettingInvoiceStatusServiceData.READ_ONE_APPSETTINGINVOICESTATUS_TS002_TC002.output.message)        
	});



    test(ReadAppSettingInvoiceStatusServiceData.READ_ONE_APPSETTINGINVOICESTATUS_TS002_TC003.description, async () => {

        const output = await ReadAppSettingInvoiceStatusService.readOneAppSettingInvoiceStatus(
            ReadAppSettingInvoiceStatusServiceData.READ_ONE_APPSETTINGINVOICESTATUS_TS002_TC003.input.databaseConnector,
            ReadAppSettingInvoiceStatusServiceData.READ_ONE_APPSETTINGINVOICESTATUS_TS002_TC003.input.apiID,
            ReadAppSettingInvoiceStatusServiceData.READ_ONE_APPSETTINGINVOICESTATUS_TS002_TC003.input.config,
            ReadAppSettingInvoiceStatusServiceData.READ_ONE_APPSETTINGINVOICESTATUS_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadAppSettingInvoiceStatusServiceData.READ_ONE_APPSETTINGINVOICESTATUS_TS002_TC003.output.status)
        expect(output.message).toBe(ReadAppSettingInvoiceStatusServiceData.READ_ONE_APPSETTINGINVOICESTATUS_TS002_TC003.output.message)        
	});

});