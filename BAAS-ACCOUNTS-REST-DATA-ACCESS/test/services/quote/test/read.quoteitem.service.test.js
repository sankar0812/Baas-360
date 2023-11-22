/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read QuoteItem service class
**/

/**
 * Importing all required modules here
 */

const readQuoteItemServiceData = require("../data/read.quoteitem.service.data")
const readQuoteItemService = require("../../../../src/services/quote/read.quoteitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadQuoteItemService = new readQuoteItemService();
const ReadQuoteItemServiceData = new readQuoteItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.quoteitem.ts.001] | FunctionPath : [src/services/quote/read.contianer.service.js/readQuoteItems()]", () => {


	test(ReadQuoteItemServiceData.READ_QUOTEITEM_TS001_TC001.description, async () => {

        const output = await ReadQuoteItemService.readQuoteItems(
            ReadQuoteItemServiceData.READ_QUOTEITEM_TS001_TC001.input.databaseConnector,
            ReadQuoteItemServiceData.READ_QUOTEITEM_TS001_TC001.input.apiID,
            ReadQuoteItemServiceData.READ_QUOTEITEM_TS001_TC001.input.config,
            ReadQuoteItemServiceData.READ_QUOTEITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadQuoteItemServiceData.READ_QUOTEITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadQuoteItemServiceData.READ_QUOTEITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadQuoteItemServiceData.READ_QUOTEITEM_TS001_TC001.output)[2])
	});



    test(ReadQuoteItemServiceData.READ_QUOTEITEM_TS001_TC002.description, async () => {

        const output = await ReadQuoteItemService.readQuoteItems(
            ReadQuoteItemServiceData.READ_QUOTEITEM_TS001_TC002.input.databaseConnector,
            ReadQuoteItemServiceData.READ_QUOTEITEM_TS001_TC002.input.apiID,
            ReadQuoteItemServiceData.READ_QUOTEITEM_TS001_TC002.input.config,
            ReadQuoteItemServiceData.READ_QUOTEITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadQuoteItemServiceData.READ_QUOTEITEM_TS001_TC002.output.data)
        expect(output.status).toBe(ReadQuoteItemServiceData.READ_QUOTEITEM_TS001_TC002.output.status)
        expect(output.message).toBe(ReadQuoteItemServiceData.READ_QUOTEITEM_TS001_TC002.output.message)        
	});



    test(ReadQuoteItemServiceData.READ_QUOTEITEM_TS001_TC003.description, async () => {

        const output = await ReadQuoteItemService.readQuoteItems(
            ReadQuoteItemServiceData.READ_QUOTEITEM_TS001_TC003.input.databaseConnector,
            ReadQuoteItemServiceData.READ_QUOTEITEM_TS001_TC003.input.apiID,
            ReadQuoteItemServiceData.READ_QUOTEITEM_TS001_TC003.input.config,
            ReadQuoteItemServiceData.READ_QUOTEITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadQuoteItemServiceData.READ_QUOTEITEM_TS001_TC003.output.status)
        expect(output.message).toBe(ReadQuoteItemServiceData.READ_QUOTEITEM_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.quoteitem.ts.002] | FunctionPath : [src/services/quote/read.quoteitem.service.js/readOneQuoteItem()]", () => {


	test(ReadQuoteItemServiceData.READ_ONE_QUOTEITEM_TS002_TC001.description, async () => {

        const output = await ReadQuoteItemService.readOneQuoteItem(
            ReadQuoteItemServiceData.READ_ONE_QUOTEITEM_TS002_TC001.input.databaseConnector,
            ReadQuoteItemServiceData.READ_ONE_QUOTEITEM_TS002_TC001.input.apiID,
            ReadQuoteItemServiceData.READ_ONE_QUOTEITEM_TS002_TC001.input.config,
            ReadQuoteItemServiceData.READ_ONE_QUOTEITEM_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadQuoteItemServiceData.READ_ONE_QUOTEITEM_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadQuoteItemServiceData.READ_ONE_QUOTEITEM_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadQuoteItemServiceData.READ_ONE_QUOTEITEM_TS002_TC001.output)[2])
	});



    test(ReadQuoteItemServiceData.READ_ONE_QUOTEITEM_TS002_TC002.description, async () => {

        const output = await ReadQuoteItemService.readOneQuoteItem(
            ReadQuoteItemServiceData.READ_ONE_QUOTEITEM_TS002_TC002.input.databaseConnector,
            ReadQuoteItemServiceData.READ_ONE_QUOTEITEM_TS002_TC002.input.apiID,
            ReadQuoteItemServiceData.READ_ONE_QUOTEITEM_TS002_TC002.input.config,
            ReadQuoteItemServiceData.READ_ONE_QUOTEITEM_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadQuoteItemServiceData.READ_ONE_QUOTEITEM_TS002_TC002.output.data)
        expect(output.status).toBe(ReadQuoteItemServiceData.READ_ONE_QUOTEITEM_TS002_TC002.output.status)
        expect(output.message).toBe(ReadQuoteItemServiceData.READ_ONE_QUOTEITEM_TS002_TC002.output.message)        
	});



    test(ReadQuoteItemServiceData.READ_ONE_QUOTEITEM_TS002_TC003.description, async () => {

        const output = await ReadQuoteItemService.readOneQuoteItem(
            ReadQuoteItemServiceData.READ_ONE_QUOTEITEM_TS002_TC003.input.databaseConnector,
            ReadQuoteItemServiceData.READ_ONE_QUOTEITEM_TS002_TC003.input.apiID,
            ReadQuoteItemServiceData.READ_ONE_QUOTEITEM_TS002_TC003.input.config,
            ReadQuoteItemServiceData.READ_ONE_QUOTEITEM_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadQuoteItemServiceData.READ_ONE_QUOTEITEM_TS002_TC003.output.status)
        expect(output.message).toBe(ReadQuoteItemServiceData.READ_ONE_QUOTEITEM_TS002_TC003.output.message)        
	});

});