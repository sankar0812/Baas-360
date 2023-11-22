/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read InvoiceStatus service class
**/

/**
 * Importing all required modules here
 */

const readInvoiceStatusServiceData = require("../data/read.invoicestatus.service.data")
const readInvoiceStatusService = require("../../../../src/services/invoice/read.invoicestatus.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadInvoiceStatusService = new readInvoiceStatusService();
const ReadInvoiceStatusServiceData = new readInvoiceStatusServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.invoicestatus.ts.001] | FunctionPath : [src/services/invoice/read.contianer.service.js/readInvoiceStatuss()]", () => {


	test(ReadInvoiceStatusServiceData.READ_INVOICESTATUS_TS001_TC001.description, async () => {

        const output = await ReadInvoiceStatusService.readInvoiceStatuses(
            ReadInvoiceStatusServiceData.READ_INVOICESTATUS_TS001_TC001.input.databaseConnector,
            ReadInvoiceStatusServiceData.READ_INVOICESTATUS_TS001_TC001.input.apiID,
            ReadInvoiceStatusServiceData.READ_INVOICESTATUS_TS001_TC001.input.config,
            ReadInvoiceStatusServiceData.READ_INVOICESTATUS_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadInvoiceStatusServiceData.READ_INVOICESTATUS_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadInvoiceStatusServiceData.READ_INVOICESTATUS_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadInvoiceStatusServiceData.READ_INVOICESTATUS_TS001_TC001.output)[2])
	});



    test(ReadInvoiceStatusServiceData.READ_INVOICESTATUS_TS001_TC002.description, async () => {

        const output = await ReadInvoiceStatusService.readInvoiceStatuses(
            ReadInvoiceStatusServiceData.READ_INVOICESTATUS_TS001_TC002.input.databaseConnector,
            ReadInvoiceStatusServiceData.READ_INVOICESTATUS_TS001_TC002.input.apiID,
            ReadInvoiceStatusServiceData.READ_INVOICESTATUS_TS001_TC002.input.config,
            ReadInvoiceStatusServiceData.READ_INVOICESTATUS_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadInvoiceStatusServiceData.READ_INVOICESTATUS_TS001_TC002.output.data)
        expect(output.status).toBe(ReadInvoiceStatusServiceData.READ_INVOICESTATUS_TS001_TC002.output.status)
        expect(output.message).toBe(ReadInvoiceStatusServiceData.READ_INVOICESTATUS_TS001_TC002.output.message)        
	});



    test(ReadInvoiceStatusServiceData.READ_INVOICESTATUS_TS001_TC003.description, async () => {

        const output = await ReadInvoiceStatusService.readInvoiceStatuses(
            ReadInvoiceStatusServiceData.READ_INVOICESTATUS_TS001_TC003.input.databaseConnector,
            ReadInvoiceStatusServiceData.READ_INVOICESTATUS_TS001_TC003.input.apiID,
            ReadInvoiceStatusServiceData.READ_INVOICESTATUS_TS001_TC003.input.config,
            ReadInvoiceStatusServiceData.READ_INVOICESTATUS_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadInvoiceStatusServiceData.READ_INVOICESTATUS_TS001_TC003.output.status)
        expect(output.message).toBe(ReadInvoiceStatusServiceData.READ_INVOICESTATUS_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.invoicestatus.ts.002] | FunctionPath : [src/services/invoice/read.invoicestatus.service.js/readOneInvoiceStatus()]", () => {


	test(ReadInvoiceStatusServiceData.READ_ONE_INVOICESTATUS_TS002_TC001.description, async () => {

        const output = await ReadInvoiceStatusService.readOneInvoiceStatus(
            ReadInvoiceStatusServiceData.READ_ONE_INVOICESTATUS_TS002_TC001.input.databaseConnector,
            ReadInvoiceStatusServiceData.READ_ONE_INVOICESTATUS_TS002_TC001.input.apiID,
            ReadInvoiceStatusServiceData.READ_ONE_INVOICESTATUS_TS002_TC001.input.config,
            ReadInvoiceStatusServiceData.READ_ONE_INVOICESTATUS_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadInvoiceStatusServiceData.READ_ONE_INVOICESTATUS_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadInvoiceStatusServiceData.READ_ONE_INVOICESTATUS_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadInvoiceStatusServiceData.READ_ONE_INVOICESTATUS_TS002_TC001.output)[2])
	});



    test(ReadInvoiceStatusServiceData.READ_ONE_INVOICESTATUS_TS002_TC002.description, async () => {

        const output = await ReadInvoiceStatusService.readOneInvoiceStatus(
            ReadInvoiceStatusServiceData.READ_ONE_INVOICESTATUS_TS002_TC002.input.databaseConnector,
            ReadInvoiceStatusServiceData.READ_ONE_INVOICESTATUS_TS002_TC002.input.apiID,
            ReadInvoiceStatusServiceData.READ_ONE_INVOICESTATUS_TS002_TC002.input.config,
            ReadInvoiceStatusServiceData.READ_ONE_INVOICESTATUS_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadInvoiceStatusServiceData.READ_ONE_INVOICESTATUS_TS002_TC002.output.data)
        expect(output.status).toBe(ReadInvoiceStatusServiceData.READ_ONE_INVOICESTATUS_TS002_TC002.output.status)
        expect(output.message).toBe(ReadInvoiceStatusServiceData.READ_ONE_INVOICESTATUS_TS002_TC002.output.message)        
	});



    test(ReadInvoiceStatusServiceData.READ_ONE_INVOICESTATUS_TS002_TC003.description, async () => {

        const output = await ReadInvoiceStatusService.readOneInvoiceStatus(
            ReadInvoiceStatusServiceData.READ_ONE_INVOICESTATUS_TS002_TC003.input.databaseConnector,
            ReadInvoiceStatusServiceData.READ_ONE_INVOICESTATUS_TS002_TC003.input.apiID,
            ReadInvoiceStatusServiceData.READ_ONE_INVOICESTATUS_TS002_TC003.input.config,
            ReadInvoiceStatusServiceData.READ_ONE_INVOICESTATUS_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadInvoiceStatusServiceData.READ_ONE_INVOICESTATUS_TS002_TC003.output.status)
        expect(output.message).toBe(ReadInvoiceStatusServiceData.READ_ONE_INVOICESTATUS_TS002_TC003.output.message)        
	});

});