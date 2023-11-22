/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Quote service class
**/

/**
 * Importing all required modules here
 */

const readQuoteServiceData = require("../data/read.quote.service.data")
const readQuoteService = require("../../../../src/services/quote/read.quote.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadQuoteService = new readQuoteService();
const ReadQuoteServiceData = new readQuoteServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.quote.ts.001] | FunctionPath : [src/services/quote/read.contianer.service.js/readQuotes()]", () => {


	test(ReadQuoteServiceData.READ_QUOTE_TS001_TC001.description, async () => {

        const output = await ReadQuoteService.readQuotes(
            ReadQuoteServiceData.READ_QUOTE_TS001_TC001.input.databaseConnector,
            ReadQuoteServiceData.READ_QUOTE_TS001_TC001.input.apiID,
            ReadQuoteServiceData.READ_QUOTE_TS001_TC001.input.config,
            ReadQuoteServiceData.READ_QUOTE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadQuoteServiceData.READ_QUOTE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadQuoteServiceData.READ_QUOTE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadQuoteServiceData.READ_QUOTE_TS001_TC001.output)[2])
	});



    test(ReadQuoteServiceData.READ_QUOTE_TS001_TC002.description, async () => {

        const output = await ReadQuoteService.readQuotes(
            ReadQuoteServiceData.READ_QUOTE_TS001_TC002.input.databaseConnector,
            ReadQuoteServiceData.READ_QUOTE_TS001_TC002.input.apiID,
            ReadQuoteServiceData.READ_QUOTE_TS001_TC002.input.config,
            ReadQuoteServiceData.READ_QUOTE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadQuoteServiceData.READ_QUOTE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadQuoteServiceData.READ_QUOTE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadQuoteServiceData.READ_QUOTE_TS001_TC002.output.message)        
	});



    test(ReadQuoteServiceData.READ_QUOTE_TS001_TC003.description, async () => {

        const output = await ReadQuoteService.readQuotes(
            ReadQuoteServiceData.READ_QUOTE_TS001_TC003.input.databaseConnector,
            ReadQuoteServiceData.READ_QUOTE_TS001_TC003.input.apiID,
            ReadQuoteServiceData.READ_QUOTE_TS001_TC003.input.config,
            ReadQuoteServiceData.READ_QUOTE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadQuoteServiceData.READ_QUOTE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadQuoteServiceData.READ_QUOTE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.quote.ts.002] | FunctionPath : [src/services/quote/read.quote.service.js/readOneQuote()]", () => {


	test(ReadQuoteServiceData.READ_ONE_QUOTE_TS002_TC001.description, async () => {

        const output = await ReadQuoteService.readOneQuote(
            ReadQuoteServiceData.READ_ONE_QUOTE_TS002_TC001.input.databaseConnector,
            ReadQuoteServiceData.READ_ONE_QUOTE_TS002_TC001.input.apiID,
            ReadQuoteServiceData.READ_ONE_QUOTE_TS002_TC001.input.config,
            ReadQuoteServiceData.READ_ONE_QUOTE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadQuoteServiceData.READ_ONE_QUOTE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadQuoteServiceData.READ_ONE_QUOTE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadQuoteServiceData.READ_ONE_QUOTE_TS002_TC001.output)[2])
	});



    test(ReadQuoteServiceData.READ_ONE_QUOTE_TS002_TC002.description, async () => {

        const output = await ReadQuoteService.readOneQuote(
            ReadQuoteServiceData.READ_ONE_QUOTE_TS002_TC002.input.databaseConnector,
            ReadQuoteServiceData.READ_ONE_QUOTE_TS002_TC002.input.apiID,
            ReadQuoteServiceData.READ_ONE_QUOTE_TS002_TC002.input.config,
            ReadQuoteServiceData.READ_ONE_QUOTE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadQuoteServiceData.READ_ONE_QUOTE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadQuoteServiceData.READ_ONE_QUOTE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadQuoteServiceData.READ_ONE_QUOTE_TS002_TC002.output.message)        
	});



    test(ReadQuoteServiceData.READ_ONE_QUOTE_TS002_TC003.description, async () => {

        const output = await ReadQuoteService.readOneQuote(
            ReadQuoteServiceData.READ_ONE_QUOTE_TS002_TC003.input.databaseConnector,
            ReadQuoteServiceData.READ_ONE_QUOTE_TS002_TC003.input.apiID,
            ReadQuoteServiceData.READ_ONE_QUOTE_TS002_TC003.input.config,
            ReadQuoteServiceData.READ_ONE_QUOTE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadQuoteServiceData.READ_ONE_QUOTE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadQuoteServiceData.READ_ONE_QUOTE_TS002_TC003.output.message)        
	});

});