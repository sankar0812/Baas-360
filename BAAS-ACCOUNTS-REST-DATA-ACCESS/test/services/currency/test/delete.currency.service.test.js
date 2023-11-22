/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete currency service class
**/

/**
 * Importing all required modules here
 */

const deleteCurrencyServiceData = require("../data/delete.currency.service.data")
const deleteCurrencyService = require("../../../../src/services/currency/delete.currency.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteCurrencyService = new deleteCurrencyService();
const DeleteCurrencyServiceData = new deleteCurrencyServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.currency.ts.001] | FunctionPath : [src/services/currency/delete.currency.service.js/deleteOneCurrency()]", () => {


	test(DeleteCurrencyServiceData.DELETE_ONE_CURRENCY_TS001_TC001.description, async () => {

        const output = await DeleteCurrencyService.deleteOneCurrency(
            DeleteCurrencyServiceData.DELETE_ONE_CURRENCY_TS001_TC001.input.databaseConnector,
            DeleteCurrencyServiceData.DELETE_ONE_CURRENCY_TS001_TC001.input.apiID,
            DeleteCurrencyServiceData.DELETE_ONE_CURRENCY_TS001_TC001.input.config,
            DeleteCurrencyServiceData.DELETE_ONE_CURRENCY_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteCurrencyServiceData.DELETE_ONE_CURRENCY_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteCurrencyServiceData.DELETE_ONE_CURRENCY_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteCurrencyServiceData.DELETE_ONE_CURRENCY_TS001_TC001.output)[2])
	});



    test(DeleteCurrencyServiceData.DELETE_ONE_CURRENCY_TS001_TC002.description, async () => {

        const output = await DeleteCurrencyService.deleteOneCurrency(
            DeleteCurrencyServiceData.DELETE_ONE_CURRENCY_TS001_TC002.input.databaseConnector,
            DeleteCurrencyServiceData.DELETE_ONE_CURRENCY_TS001_TC002.input.apiID,
            DeleteCurrencyServiceData.DELETE_ONE_CURRENCY_TS001_TC002.input.config,
            DeleteCurrencyServiceData.DELETE_ONE_CURRENCY_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteCurrencyServiceData.DELETE_ONE_CURRENCY_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteCurrencyServiceData.DELETE_ONE_CURRENCY_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteCurrencyServiceData.DELETE_ONE_CURRENCY_TS001_TC002.output.message)        
	});



    test(DeleteCurrencyServiceData.DELETE_ONE_CURRENCY_TS001_TC003.description, async () => {

        const output = await DeleteCurrencyService.deleteOneCurrency(
            DeleteCurrencyServiceData.DELETE_ONE_CURRENCY_TS001_TC003.input.databaseConnector,
            DeleteCurrencyServiceData.DELETE_ONE_CURRENCY_TS001_TC003.input.apiID,
            DeleteCurrencyServiceData.DELETE_ONE_CURRENCY_TS001_TC003.input.config,
            DeleteCurrencyServiceData.DELETE_ONE_CURRENCY_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteCurrencyServiceData.DELETE_ONE_CURRENCY_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteCurrencyServiceData.DELETE_ONE_CURRENCY_TS001_TC003.output.message)        
	});

});
