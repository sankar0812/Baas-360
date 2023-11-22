/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete quote service class
**/

/**
 * Importing all required modules here
 */

const deleteQuoteServiceData = require("../data/delete.quote.service.data")
const deleteQuoteService = require("../../../../src/services/quote/delete.quote.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteQuoteService = new deleteQuoteService();
const DeleteQuoteServiceData = new deleteQuoteServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.quote.ts.001] | FunctionPath : [src/services/quote/delete.quote.service.js/deleteOneQuote()]", () => {


	test(DeleteQuoteServiceData.DELETE_ONE_QUOTE_TS001_TC001.description, async () => {

        const output = await DeleteQuoteService.deleteOneQuote(
            DeleteQuoteServiceData.DELETE_ONE_QUOTE_TS001_TC001.input.databaseConnector,
            DeleteQuoteServiceData.DELETE_ONE_QUOTE_TS001_TC001.input.apiID,
            DeleteQuoteServiceData.DELETE_ONE_QUOTE_TS001_TC001.input.config,
            DeleteQuoteServiceData.DELETE_ONE_QUOTE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteQuoteServiceData.DELETE_ONE_QUOTE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteQuoteServiceData.DELETE_ONE_QUOTE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteQuoteServiceData.DELETE_ONE_QUOTE_TS001_TC001.output)[2])
	});



    test(DeleteQuoteServiceData.DELETE_ONE_QUOTE_TS001_TC002.description, async () => {

        const output = await DeleteQuoteService.deleteOneQuote(
            DeleteQuoteServiceData.DELETE_ONE_QUOTE_TS001_TC002.input.databaseConnector,
            DeleteQuoteServiceData.DELETE_ONE_QUOTE_TS001_TC002.input.apiID,
            DeleteQuoteServiceData.DELETE_ONE_QUOTE_TS001_TC002.input.config,
            DeleteQuoteServiceData.DELETE_ONE_QUOTE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteQuoteServiceData.DELETE_ONE_QUOTE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteQuoteServiceData.DELETE_ONE_QUOTE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteQuoteServiceData.DELETE_ONE_QUOTE_TS001_TC002.output.message)        
	});



    test(DeleteQuoteServiceData.DELETE_ONE_QUOTE_TS001_TC003.description, async () => {

        const output = await DeleteQuoteService.deleteOneQuote(
            DeleteQuoteServiceData.DELETE_ONE_QUOTE_TS001_TC003.input.databaseConnector,
            DeleteQuoteServiceData.DELETE_ONE_QUOTE_TS001_TC003.input.apiID,
            DeleteQuoteServiceData.DELETE_ONE_QUOTE_TS001_TC003.input.config,
            DeleteQuoteServiceData.DELETE_ONE_QUOTE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteQuoteServiceData.DELETE_ONE_QUOTE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteQuoteServiceData.DELETE_ONE_QUOTE_TS001_TC003.output.message)        
	});

});
