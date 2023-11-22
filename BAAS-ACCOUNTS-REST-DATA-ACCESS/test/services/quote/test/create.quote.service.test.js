/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create quote service class
**/

/**
 * Importing all required modules here
 */

const createQuoteServiceData = require("../data/create.quote.service.data")
const createQuoteService = require("../../../../src/services/quote/create.quote.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateQuoteService = new createQuoteService();
const CreateQuoteServiceData = new createQuoteServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.quote.ts.001] | FunctionPath : [src/services/quote/create.quote.service.js/createOneQuote()]", () => {


	test(CreateQuoteServiceData.CREATE_ONE_QUOTE_TS001_TC001.description, async () => {

        const output = await CreateQuoteService.createOneQuote(
            CreateQuoteServiceData.CREATE_ONE_QUOTE_TS001_TC001.input.databaseConnector,
            CreateQuoteServiceData.CREATE_ONE_QUOTE_TS001_TC001.input.apiID,
            CreateQuoteServiceData.CREATE_ONE_QUOTE_TS001_TC001.input.config,
            CreateQuoteServiceData.CREATE_ONE_QUOTE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateQuoteServiceData.CREATE_ONE_QUOTE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateQuoteServiceData.CREATE_ONE_QUOTE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateQuoteServiceData.CREATE_ONE_QUOTE_TS001_TC001.output)[2])
	});



    test(CreateQuoteServiceData.CREATE_ONE_QUOTE_TS001_TC002.description, async () => {

        const output = await CreateQuoteService.createOneQuote(
            CreateQuoteServiceData.CREATE_ONE_QUOTE_TS001_TC002.input.databaseConnector,
            CreateQuoteServiceData.CREATE_ONE_QUOTE_TS001_TC002.input.apiID,
            CreateQuoteServiceData.CREATE_ONE_QUOTE_TS001_TC002.input.config,
            CreateQuoteServiceData.CREATE_ONE_QUOTE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateQuoteServiceData.CREATE_ONE_QUOTE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateQuoteServiceData.CREATE_ONE_QUOTE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateQuoteServiceData.CREATE_ONE_QUOTE_TS001_TC002.output.message)        
	});



    test(CreateQuoteServiceData.CREATE_ONE_QUOTE_TS001_TC003.description, async () => {

        const output = await CreateQuoteService.createOneQuote(
            CreateQuoteServiceData.CREATE_ONE_QUOTE_TS001_TC003.input.databaseConnector,
            CreateQuoteServiceData.CREATE_ONE_QUOTE_TS001_TC003.input.apiID,
            CreateQuoteServiceData.CREATE_ONE_QUOTE_TS001_TC003.input.config,
            CreateQuoteServiceData.CREATE_ONE_QUOTE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateQuoteServiceData.CREATE_ONE_QUOTE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateQuoteServiceData.CREATE_ONE_QUOTE_TS001_TC003.output.message)        
	});

});