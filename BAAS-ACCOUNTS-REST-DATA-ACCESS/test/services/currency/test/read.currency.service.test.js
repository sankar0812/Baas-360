/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Currency service class
**/

/**
 * Importing all required modules here
 */

const readCurrencyServiceData = require("../data/read.currency.service.data")
const readCurrencyService = require("../../../../src/services/currency/read.currency.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadCurrencyService = new readCurrencyService();
const ReadCurrencyServiceData = new readCurrencyServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.currency.ts.001] | FunctionPath : [src/services/currency/read.contianer.service.js/readCurrencys()]", () => {


	test(ReadCurrencyServiceData.READ_CURRENCY_TS001_TC001.description, async () => {

        const output = await ReadCurrencyService.readCurrencys(
            ReadCurrencyServiceData.READ_CURRENCY_TS001_TC001.input.databaseConnector,
            ReadCurrencyServiceData.READ_CURRENCY_TS001_TC001.input.apiID,
            ReadCurrencyServiceData.READ_CURRENCY_TS001_TC001.input.config,
            ReadCurrencyServiceData.READ_CURRENCY_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCurrencyServiceData.READ_CURRENCY_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCurrencyServiceData.READ_CURRENCY_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCurrencyServiceData.READ_CURRENCY_TS001_TC001.output)[2])
	});



    test(ReadCurrencyServiceData.READ_CURRENCY_TS001_TC002.description, async () => {

        const output = await ReadCurrencyService.readCurrencys(
            ReadCurrencyServiceData.READ_CURRENCY_TS001_TC002.input.databaseConnector,
            ReadCurrencyServiceData.READ_CURRENCY_TS001_TC002.input.apiID,
            ReadCurrencyServiceData.READ_CURRENCY_TS001_TC002.input.config,
            ReadCurrencyServiceData.READ_CURRENCY_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadCurrencyServiceData.READ_CURRENCY_TS001_TC002.output.data)
        expect(output.status).toBe(ReadCurrencyServiceData.READ_CURRENCY_TS001_TC002.output.status)
        expect(output.message).toBe(ReadCurrencyServiceData.READ_CURRENCY_TS001_TC002.output.message)        
	});



    test(ReadCurrencyServiceData.READ_CURRENCY_TS001_TC003.description, async () => {

        const output = await ReadCurrencyService.readCurrencys(
            ReadCurrencyServiceData.READ_CURRENCY_TS001_TC003.input.databaseConnector,
            ReadCurrencyServiceData.READ_CURRENCY_TS001_TC003.input.apiID,
            ReadCurrencyServiceData.READ_CURRENCY_TS001_TC003.input.config,
            ReadCurrencyServiceData.READ_CURRENCY_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadCurrencyServiceData.READ_CURRENCY_TS001_TC003.output.status)
        expect(output.message).toBe(ReadCurrencyServiceData.READ_CURRENCY_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.currency.ts.002] | FunctionPath : [src/services/currency/read.currency.service.js/readOneCurrency()]", () => {


	test(ReadCurrencyServiceData.READ_ONE_CURRENCY_TS002_TC001.description, async () => {

        const output = await ReadCurrencyService.readOneCurrency(
            ReadCurrencyServiceData.READ_ONE_CURRENCY_TS002_TC001.input.databaseConnector,
            ReadCurrencyServiceData.READ_ONE_CURRENCY_TS002_TC001.input.apiID,
            ReadCurrencyServiceData.READ_ONE_CURRENCY_TS002_TC001.input.config,
            ReadCurrencyServiceData.READ_ONE_CURRENCY_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCurrencyServiceData.READ_ONE_CURRENCY_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCurrencyServiceData.READ_ONE_CURRENCY_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCurrencyServiceData.READ_ONE_CURRENCY_TS002_TC001.output)[2])
	});



    test(ReadCurrencyServiceData.READ_ONE_CURRENCY_TS002_TC002.description, async () => {

        const output = await ReadCurrencyService.readOneCurrency(
            ReadCurrencyServiceData.READ_ONE_CURRENCY_TS002_TC002.input.databaseConnector,
            ReadCurrencyServiceData.READ_ONE_CURRENCY_TS002_TC002.input.apiID,
            ReadCurrencyServiceData.READ_ONE_CURRENCY_TS002_TC002.input.config,
            ReadCurrencyServiceData.READ_ONE_CURRENCY_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadCurrencyServiceData.READ_ONE_CURRENCY_TS002_TC002.output.data)
        expect(output.status).toBe(ReadCurrencyServiceData.READ_ONE_CURRENCY_TS002_TC002.output.status)
        expect(output.message).toBe(ReadCurrencyServiceData.READ_ONE_CURRENCY_TS002_TC002.output.message)        
	});



    test(ReadCurrencyServiceData.READ_ONE_CURRENCY_TS002_TC003.description, async () => {

        const output = await ReadCurrencyService.readOneCurrency(
            ReadCurrencyServiceData.READ_ONE_CURRENCY_TS002_TC003.input.databaseConnector,
            ReadCurrencyServiceData.READ_ONE_CURRENCY_TS002_TC003.input.apiID,
            ReadCurrencyServiceData.READ_ONE_CURRENCY_TS002_TC003.input.config,
            ReadCurrencyServiceData.READ_ONE_CURRENCY_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadCurrencyServiceData.READ_ONE_CURRENCY_TS002_TC003.output.status)
        expect(output.message).toBe(ReadCurrencyServiceData.READ_ONE_CURRENCY_TS002_TC003.output.message)        
	});

});