

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update quote service class
**/

/**
 * Importing all required modules here
 */

const updateQuoteServiceData = require("../data/update.quote.service.data")
const updateQuoteService = require("../../../../src/services/quote/update.quote.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateQuoteService = new updateQuoteService();
const UpdateQuoteServiceData = new updateQuoteServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.quote.ts.001] | FunctionPath : [src/services/quote/update.quote.service.js/updateQuote()]", () => {

	test(UpdateQuoteServiceData.UPDATE_QUOTE_TS001_TC001.description, async () => {

        const output = await UpdateQuoteService.updateQuote(
            UpdateQuoteServiceData.UPDATE_QUOTE_TS001_TC001.input.databaseConnector,
            UpdateQuoteServiceData.UPDATE_QUOTE_TS001_TC001.input.apiID,
            UpdateQuoteServiceData.UPDATE_QUOTE_TS001_TC001.input.config,
            UpdateQuoteServiceData.UPDATE_QUOTE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateQuoteServiceData.UPDATE_QUOTE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateQuoteServiceData.UPDATE_QUOTE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateQuoteServiceData.UPDATE_QUOTE_TS001_TC001.output)[2])
	});

    test(UpdateQuoteServiceData.UPDATE_QUOTE_TS001_TC002.description, async () => {

        const output = await UpdateQuoteService.updateQuote(
            UpdateQuoteServiceData.UPDATE_QUOTE_TS001_TC002.input.databaseConnector,
            UpdateQuoteServiceData.UPDATE_QUOTE_TS001_TC002.input.apiID,
            UpdateQuoteServiceData.UPDATE_QUOTE_TS001_TC002.input.config,
            UpdateQuoteServiceData.UPDATE_QUOTE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateQuoteServiceData.UPDATE_QUOTE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateQuoteServiceData.UPDATE_QUOTE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateQuoteServiceData.UPDATE_QUOTE_TS001_TC002.output.message)        
	});

    test(UpdateQuoteServiceData.UPDATE_QUOTE_TS001_TC003.description, async () => {

        const output = await UpdateQuoteService.updateQuote(
            UpdateQuoteServiceData.UPDATE_QUOTE_TS001_TC003.input.databaseConnector,
            UpdateQuoteServiceData.UPDATE_QUOTE_TS001_TC003.input.apiID,
            UpdateQuoteServiceData.UPDATE_QUOTE_TS001_TC003.input.config,
            UpdateQuoteServiceData.UPDATE_QUOTE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateQuoteServiceData.UPDATE_QUOTE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateQuoteServiceData.UPDATE_QUOTE_TS001_TC003.output.message)        
	});

});
