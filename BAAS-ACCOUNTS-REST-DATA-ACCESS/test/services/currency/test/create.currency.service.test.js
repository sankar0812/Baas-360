/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create currency service class
**/

/**
 * Importing all required modules here
 */

const createCurrencyServiceData = require("../data/create.currency.service.data")
const createCurrencyService = require("../../../../src/services/currency/create.currency.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateCurrencyService = new createCurrencyService();
const CreateCurrencyServiceData = new createCurrencyServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.currency.ts.001] | FunctionPath : [src/services/currency/create.currency.service.js/createOneCurrency()]", () => {


	test(CreateCurrencyServiceData.CREATE_ONE_CURRENCY_TS001_TC001.description, async () => {

        const output = await CreateCurrencyService.createOneCurrency(
            CreateCurrencyServiceData.CREATE_ONE_CURRENCY_TS001_TC001.input.databaseConnector,
            CreateCurrencyServiceData.CREATE_ONE_CURRENCY_TS001_TC001.input.apiID,
            CreateCurrencyServiceData.CREATE_ONE_CURRENCY_TS001_TC001.input.config,
            CreateCurrencyServiceData.CREATE_ONE_CURRENCY_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateCurrencyServiceData.CREATE_ONE_CURRENCY_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateCurrencyServiceData.CREATE_ONE_CURRENCY_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateCurrencyServiceData.CREATE_ONE_CURRENCY_TS001_TC001.output)[2])
	});



    test(CreateCurrencyServiceData.CREATE_ONE_CURRENCY_TS001_TC002.description, async () => {

        const output = await CreateCurrencyService.createOneCurrency(
            CreateCurrencyServiceData.CREATE_ONE_CURRENCY_TS001_TC002.input.databaseConnector,
            CreateCurrencyServiceData.CREATE_ONE_CURRENCY_TS001_TC002.input.apiID,
            CreateCurrencyServiceData.CREATE_ONE_CURRENCY_TS001_TC002.input.config,
            CreateCurrencyServiceData.CREATE_ONE_CURRENCY_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateCurrencyServiceData.CREATE_ONE_CURRENCY_TS001_TC002.output.data)
        expect(output.status).toBe(CreateCurrencyServiceData.CREATE_ONE_CURRENCY_TS001_TC002.output.status)
        expect(output.message).toBe(CreateCurrencyServiceData.CREATE_ONE_CURRENCY_TS001_TC002.output.message)        
	});



    test(CreateCurrencyServiceData.CREATE_ONE_CURRENCY_TS001_TC003.description, async () => {

        const output = await CreateCurrencyService.createOneCurrency(
            CreateCurrencyServiceData.CREATE_ONE_CURRENCY_TS001_TC003.input.databaseConnector,
            CreateCurrencyServiceData.CREATE_ONE_CURRENCY_TS001_TC003.input.apiID,
            CreateCurrencyServiceData.CREATE_ONE_CURRENCY_TS001_TC003.input.config,
            CreateCurrencyServiceData.CREATE_ONE_CURRENCY_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateCurrencyServiceData.CREATE_ONE_CURRENCY_TS001_TC003.output.status)
        expect(output.message).toBe(CreateCurrencyServiceData.CREATE_ONE_CURRENCY_TS001_TC003.output.message)        
	});

});