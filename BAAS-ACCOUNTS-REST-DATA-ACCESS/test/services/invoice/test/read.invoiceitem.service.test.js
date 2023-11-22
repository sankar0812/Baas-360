/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read InvoiceItem service class
**/

/**
 * Importing all required modules here
 */

const readInvoiceItemServiceData = require("../data/read.invoiceitem.service.data")
const readInvoiceItemService = require("../../../../src/services/invoice/read.invoiceitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadInvoiceItemService = new readInvoiceItemService();
const ReadInvoiceItemServiceData = new readInvoiceItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.invoiceitem.ts.001] | FunctionPath : [src/services/invoice/read.contianer.service.js/readInvoiceItems()]", () => {


	test(ReadInvoiceItemServiceData.READ_INVOICEITEM_TS001_TC001.description, async () => {

        const output = await ReadInvoiceItemService.readInvoiceItems(
            ReadInvoiceItemServiceData.READ_INVOICEITEM_TS001_TC001.input.databaseConnector,
            ReadInvoiceItemServiceData.READ_INVOICEITEM_TS001_TC001.input.apiID,
            ReadInvoiceItemServiceData.READ_INVOICEITEM_TS001_TC001.input.config,
            ReadInvoiceItemServiceData.READ_INVOICEITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadInvoiceItemServiceData.READ_INVOICEITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadInvoiceItemServiceData.READ_INVOICEITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadInvoiceItemServiceData.READ_INVOICEITEM_TS001_TC001.output)[2])
	});



    test(ReadInvoiceItemServiceData.READ_INVOICEITEM_TS001_TC002.description, async () => {

        const output = await ReadInvoiceItemService.readInvoiceItems(
            ReadInvoiceItemServiceData.READ_INVOICEITEM_TS001_TC002.input.databaseConnector,
            ReadInvoiceItemServiceData.READ_INVOICEITEM_TS001_TC002.input.apiID,
            ReadInvoiceItemServiceData.READ_INVOICEITEM_TS001_TC002.input.config,
            ReadInvoiceItemServiceData.READ_INVOICEITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadInvoiceItemServiceData.READ_INVOICEITEM_TS001_TC002.output.data)
        expect(output.status).toBe(ReadInvoiceItemServiceData.READ_INVOICEITEM_TS001_TC002.output.status)
        expect(output.message).toBe(ReadInvoiceItemServiceData.READ_INVOICEITEM_TS001_TC002.output.message)        
	});



    test(ReadInvoiceItemServiceData.READ_INVOICEITEM_TS001_TC003.description, async () => {

        const output = await ReadInvoiceItemService.readInvoiceItems(
            ReadInvoiceItemServiceData.READ_INVOICEITEM_TS001_TC003.input.databaseConnector,
            ReadInvoiceItemServiceData.READ_INVOICEITEM_TS001_TC003.input.apiID,
            ReadInvoiceItemServiceData.READ_INVOICEITEM_TS001_TC003.input.config,
            ReadInvoiceItemServiceData.READ_INVOICEITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadInvoiceItemServiceData.READ_INVOICEITEM_TS001_TC003.output.status)
        expect(output.message).toBe(ReadInvoiceItemServiceData.READ_INVOICEITEM_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.invoiceitem.ts.002] | FunctionPath : [src/services/invoice/read.invoiceitem.service.js/readOneInvoiceItem()]", () => {


	test(ReadInvoiceItemServiceData.READ_ONE_INVOICEITEM_TS002_TC001.description, async () => {

        const output = await ReadInvoiceItemService.readOneInvoiceItem(
            ReadInvoiceItemServiceData.READ_ONE_INVOICEITEM_TS002_TC001.input.databaseConnector,
            ReadInvoiceItemServiceData.READ_ONE_INVOICEITEM_TS002_TC001.input.apiID,
            ReadInvoiceItemServiceData.READ_ONE_INVOICEITEM_TS002_TC001.input.config,
            ReadInvoiceItemServiceData.READ_ONE_INVOICEITEM_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadInvoiceItemServiceData.READ_ONE_INVOICEITEM_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadInvoiceItemServiceData.READ_ONE_INVOICEITEM_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadInvoiceItemServiceData.READ_ONE_INVOICEITEM_TS002_TC001.output)[2])
	});



    test(ReadInvoiceItemServiceData.READ_ONE_INVOICEITEM_TS002_TC002.description, async () => {

        const output = await ReadInvoiceItemService.readOneInvoiceItem(
            ReadInvoiceItemServiceData.READ_ONE_INVOICEITEM_TS002_TC002.input.databaseConnector,
            ReadInvoiceItemServiceData.READ_ONE_INVOICEITEM_TS002_TC002.input.apiID,
            ReadInvoiceItemServiceData.READ_ONE_INVOICEITEM_TS002_TC002.input.config,
            ReadInvoiceItemServiceData.READ_ONE_INVOICEITEM_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadInvoiceItemServiceData.READ_ONE_INVOICEITEM_TS002_TC002.output.data)
        expect(output.status).toBe(ReadInvoiceItemServiceData.READ_ONE_INVOICEITEM_TS002_TC002.output.status)
        expect(output.message).toBe(ReadInvoiceItemServiceData.READ_ONE_INVOICEITEM_TS002_TC002.output.message)        
	});



    test(ReadInvoiceItemServiceData.READ_ONE_INVOICEITEM_TS002_TC003.description, async () => {

        const output = await ReadInvoiceItemService.readOneInvoiceItem(
            ReadInvoiceItemServiceData.READ_ONE_INVOICEITEM_TS002_TC003.input.databaseConnector,
            ReadInvoiceItemServiceData.READ_ONE_INVOICEITEM_TS002_TC003.input.apiID,
            ReadInvoiceItemServiceData.READ_ONE_INVOICEITEM_TS002_TC003.input.config,
            ReadInvoiceItemServiceData.READ_ONE_INVOICEITEM_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadInvoiceItemServiceData.READ_ONE_INVOICEITEM_TS002_TC003.output.status)
        expect(output.message).toBe(ReadInvoiceItemServiceData.READ_ONE_INVOICEITEM_TS002_TC003.output.message)        
	});

});