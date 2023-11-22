/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Invoice service class
**/

/**
 * Importing all required modules here
 */

const readInvoiceServiceData = require("../data/read.invoice.service.data")
const readInvoiceService = require("../../../../src/services/invoice/read.invoice.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadInvoiceService = new readInvoiceService();
const ReadInvoiceServiceData = new readInvoiceServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.invoice.ts.001] | FunctionPath : [src/services/invoice/read.contianer.service.js/readInvoices()]", () => {


	test(ReadInvoiceServiceData.READ_INVOICE_TS001_TC001.description, async () => {

        const output = await ReadInvoiceService.readInvoices(
            ReadInvoiceServiceData.READ_INVOICE_TS001_TC001.input.databaseConnector,
            ReadInvoiceServiceData.READ_INVOICE_TS001_TC001.input.apiID,
            ReadInvoiceServiceData.READ_INVOICE_TS001_TC001.input.config,
            ReadInvoiceServiceData.READ_INVOICE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadInvoiceServiceData.READ_INVOICE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadInvoiceServiceData.READ_INVOICE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadInvoiceServiceData.READ_INVOICE_TS001_TC001.output)[2])
	});



    test(ReadInvoiceServiceData.READ_INVOICE_TS001_TC002.description, async () => {

        const output = await ReadInvoiceService.readInvoices(
            ReadInvoiceServiceData.READ_INVOICE_TS001_TC002.input.databaseConnector,
            ReadInvoiceServiceData.READ_INVOICE_TS001_TC002.input.apiID,
            ReadInvoiceServiceData.READ_INVOICE_TS001_TC002.input.config,
            ReadInvoiceServiceData.READ_INVOICE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadInvoiceServiceData.READ_INVOICE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadInvoiceServiceData.READ_INVOICE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadInvoiceServiceData.READ_INVOICE_TS001_TC002.output.message)        
	});



    test(ReadInvoiceServiceData.READ_INVOICE_TS001_TC003.description, async () => {

        const output = await ReadInvoiceService.readInvoices(
            ReadInvoiceServiceData.READ_INVOICE_TS001_TC003.input.databaseConnector,
            ReadInvoiceServiceData.READ_INVOICE_TS001_TC003.input.apiID,
            ReadInvoiceServiceData.READ_INVOICE_TS001_TC003.input.config,
            ReadInvoiceServiceData.READ_INVOICE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadInvoiceServiceData.READ_INVOICE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadInvoiceServiceData.READ_INVOICE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.invoice.ts.002] | FunctionPath : [src/services/invoice/read.invoice.service.js/readOneInvoice()]", () => {


	test(ReadInvoiceServiceData.READ_ONE_INVOICE_TS002_TC001.description, async () => {

        const output = await ReadInvoiceService.readOneInvoice(
            ReadInvoiceServiceData.READ_ONE_INVOICE_TS002_TC001.input.databaseConnector,
            ReadInvoiceServiceData.READ_ONE_INVOICE_TS002_TC001.input.apiID,
            ReadInvoiceServiceData.READ_ONE_INVOICE_TS002_TC001.input.config,
            ReadInvoiceServiceData.READ_ONE_INVOICE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadInvoiceServiceData.READ_ONE_INVOICE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadInvoiceServiceData.READ_ONE_INVOICE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadInvoiceServiceData.READ_ONE_INVOICE_TS002_TC001.output)[2])
	});



    test(ReadInvoiceServiceData.READ_ONE_INVOICE_TS002_TC002.description, async () => {

        const output = await ReadInvoiceService.readOneInvoice(
            ReadInvoiceServiceData.READ_ONE_INVOICE_TS002_TC002.input.databaseConnector,
            ReadInvoiceServiceData.READ_ONE_INVOICE_TS002_TC002.input.apiID,
            ReadInvoiceServiceData.READ_ONE_INVOICE_TS002_TC002.input.config,
            ReadInvoiceServiceData.READ_ONE_INVOICE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadInvoiceServiceData.READ_ONE_INVOICE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadInvoiceServiceData.READ_ONE_INVOICE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadInvoiceServiceData.READ_ONE_INVOICE_TS002_TC002.output.message)        
	});



    test(ReadInvoiceServiceData.READ_ONE_INVOICE_TS002_TC003.description, async () => {

        const output = await ReadInvoiceService.readOneInvoice(
            ReadInvoiceServiceData.READ_ONE_INVOICE_TS002_TC003.input.databaseConnector,
            ReadInvoiceServiceData.READ_ONE_INVOICE_TS002_TC003.input.apiID,
            ReadInvoiceServiceData.READ_ONE_INVOICE_TS002_TC003.input.config,
            ReadInvoiceServiceData.READ_ONE_INVOICE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadInvoiceServiceData.READ_ONE_INVOICE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadInvoiceServiceData.READ_ONE_INVOICE_TS002_TC003.output.message)        
	});

});