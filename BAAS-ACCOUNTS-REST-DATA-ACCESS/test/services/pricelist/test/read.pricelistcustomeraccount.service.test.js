/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read PriceListCustomerAccount service class
**/

/**
 * Importing all required modules here
 */

const readPriceListCustomerAccountServiceData = require("../data/read.pricelistcustomeraccount.service.data")
const readPriceListCustomerAccountService = require("../../../../src/services/pricelist/read.pricelistcustomeraccount.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadPriceListCustomerAccountService = new readPriceListCustomerAccountService();
const ReadPriceListCustomerAccountServiceData = new readPriceListCustomerAccountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.pricelistcustomeraccount.ts.001] | FunctionPath : [src/services/pricelist/read.contianer.service.js/readPriceListCustomerAccounts()]", () => {


	test(ReadPriceListCustomerAccountServiceData.READ_PRICELISTCUSTOMERACCOUNT_TS001_TC001.description, async () => {

        const output = await ReadPriceListCustomerAccountService.readPriceListCustomerAccounts(
            ReadPriceListCustomerAccountServiceData.READ_PRICELISTCUSTOMERACCOUNT_TS001_TC001.input.databaseConnector,
            ReadPriceListCustomerAccountServiceData.READ_PRICELISTCUSTOMERACCOUNT_TS001_TC001.input.apiID,
            ReadPriceListCustomerAccountServiceData.READ_PRICELISTCUSTOMERACCOUNT_TS001_TC001.input.config,
            ReadPriceListCustomerAccountServiceData.READ_PRICELISTCUSTOMERACCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadPriceListCustomerAccountServiceData.READ_PRICELISTCUSTOMERACCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadPriceListCustomerAccountServiceData.READ_PRICELISTCUSTOMERACCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadPriceListCustomerAccountServiceData.READ_PRICELISTCUSTOMERACCOUNT_TS001_TC001.output)[2])
	});



    test(ReadPriceListCustomerAccountServiceData.READ_PRICELISTCUSTOMERACCOUNT_TS001_TC002.description, async () => {

        const output = await ReadPriceListCustomerAccountService.readPriceListCustomerAccounts(
            ReadPriceListCustomerAccountServiceData.READ_PRICELISTCUSTOMERACCOUNT_TS001_TC002.input.databaseConnector,
            ReadPriceListCustomerAccountServiceData.READ_PRICELISTCUSTOMERACCOUNT_TS001_TC002.input.apiID,
            ReadPriceListCustomerAccountServiceData.READ_PRICELISTCUSTOMERACCOUNT_TS001_TC002.input.config,
            ReadPriceListCustomerAccountServiceData.READ_PRICELISTCUSTOMERACCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadPriceListCustomerAccountServiceData.READ_PRICELISTCUSTOMERACCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadPriceListCustomerAccountServiceData.READ_PRICELISTCUSTOMERACCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadPriceListCustomerAccountServiceData.READ_PRICELISTCUSTOMERACCOUNT_TS001_TC002.output.message)        
	});



    test(ReadPriceListCustomerAccountServiceData.READ_PRICELISTCUSTOMERACCOUNT_TS001_TC003.description, async () => {

        const output = await ReadPriceListCustomerAccountService.readPriceListCustomerAccounts(
            ReadPriceListCustomerAccountServiceData.READ_PRICELISTCUSTOMERACCOUNT_TS001_TC003.input.databaseConnector,
            ReadPriceListCustomerAccountServiceData.READ_PRICELISTCUSTOMERACCOUNT_TS001_TC003.input.apiID,
            ReadPriceListCustomerAccountServiceData.READ_PRICELISTCUSTOMERACCOUNT_TS001_TC003.input.config,
            ReadPriceListCustomerAccountServiceData.READ_PRICELISTCUSTOMERACCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadPriceListCustomerAccountServiceData.READ_PRICELISTCUSTOMERACCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadPriceListCustomerAccountServiceData.READ_PRICELISTCUSTOMERACCOUNT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.pricelistcustomeraccount.ts.002] | FunctionPath : [src/services/pricelist/read.pricelistcustomeraccount.service.js/readOnePriceListCustomerAccount()]", () => {


	test(ReadPriceListCustomerAccountServiceData.READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC001.description, async () => {

        const output = await ReadPriceListCustomerAccountService.readOnePriceListCustomerAccount(
            ReadPriceListCustomerAccountServiceData.READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC001.input.databaseConnector,
            ReadPriceListCustomerAccountServiceData.READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC001.input.apiID,
            ReadPriceListCustomerAccountServiceData.READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC001.input.config,
            ReadPriceListCustomerAccountServiceData.READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadPriceListCustomerAccountServiceData.READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadPriceListCustomerAccountServiceData.READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadPriceListCustomerAccountServiceData.READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC001.output)[2])
	});



    test(ReadPriceListCustomerAccountServiceData.READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC002.description, async () => {

        const output = await ReadPriceListCustomerAccountService.readOnePriceListCustomerAccount(
            ReadPriceListCustomerAccountServiceData.READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC002.input.databaseConnector,
            ReadPriceListCustomerAccountServiceData.READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC002.input.apiID,
            ReadPriceListCustomerAccountServiceData.READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC002.input.config,
            ReadPriceListCustomerAccountServiceData.READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadPriceListCustomerAccountServiceData.READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadPriceListCustomerAccountServiceData.READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadPriceListCustomerAccountServiceData.READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC002.output.message)        
	});



    test(ReadPriceListCustomerAccountServiceData.READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC003.description, async () => {

        const output = await ReadPriceListCustomerAccountService.readOnePriceListCustomerAccount(
            ReadPriceListCustomerAccountServiceData.READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC003.input.databaseConnector,
            ReadPriceListCustomerAccountServiceData.READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC003.input.apiID,
            ReadPriceListCustomerAccountServiceData.READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC003.input.config,
            ReadPriceListCustomerAccountServiceData.READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadPriceListCustomerAccountServiceData.READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadPriceListCustomerAccountServiceData.READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC003.output.message)        
	});

});