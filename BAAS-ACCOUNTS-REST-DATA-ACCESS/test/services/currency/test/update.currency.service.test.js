

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update currency service class
**/

/**
 * Importing all required modules here
 */

const updateCurrencyServiceData = require("../data/update.currency.service.data")
const updateCurrencyService = require("../../../../src/services/currency/update.currency.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateCurrencyService = new updateCurrencyService();
const UpdateCurrencyServiceData = new updateCurrencyServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.currency.ts.001] | FunctionPath : [src/services/currency/update.currency.service.js/updateCurrency()]", () => {

	test(UpdateCurrencyServiceData.UPDATE_CURRENCY_TS001_TC001.description, async () => {

        const output = await UpdateCurrencyService.updateCurrency(
            UpdateCurrencyServiceData.UPDATE_CURRENCY_TS001_TC001.input.databaseConnector,
            UpdateCurrencyServiceData.UPDATE_CURRENCY_TS001_TC001.input.apiID,
            UpdateCurrencyServiceData.UPDATE_CURRENCY_TS001_TC001.input.config,
            UpdateCurrencyServiceData.UPDATE_CURRENCY_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateCurrencyServiceData.UPDATE_CURRENCY_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateCurrencyServiceData.UPDATE_CURRENCY_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateCurrencyServiceData.UPDATE_CURRENCY_TS001_TC001.output)[2])
	});

    test(UpdateCurrencyServiceData.UPDATE_CURRENCY_TS001_TC002.description, async () => {

        const output = await UpdateCurrencyService.updateCurrency(
            UpdateCurrencyServiceData.UPDATE_CURRENCY_TS001_TC002.input.databaseConnector,
            UpdateCurrencyServiceData.UPDATE_CURRENCY_TS001_TC002.input.apiID,
            UpdateCurrencyServiceData.UPDATE_CURRENCY_TS001_TC002.input.config,
            UpdateCurrencyServiceData.UPDATE_CURRENCY_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateCurrencyServiceData.UPDATE_CURRENCY_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateCurrencyServiceData.UPDATE_CURRENCY_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateCurrencyServiceData.UPDATE_CURRENCY_TS001_TC002.output.message)        
	});

    test(UpdateCurrencyServiceData.UPDATE_CURRENCY_TS001_TC003.description, async () => {

        const output = await UpdateCurrencyService.updateCurrency(
            UpdateCurrencyServiceData.UPDATE_CURRENCY_TS001_TC003.input.databaseConnector,
            UpdateCurrencyServiceData.UPDATE_CURRENCY_TS001_TC003.input.apiID,
            UpdateCurrencyServiceData.UPDATE_CURRENCY_TS001_TC003.input.config,
            UpdateCurrencyServiceData.UPDATE_CURRENCY_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateCurrencyServiceData.UPDATE_CURRENCY_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateCurrencyServiceData.UPDATE_CURRENCY_TS001_TC003.output.message)        
	});

});
