/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read CustomerAccount service class
**/

/**
 * Importing all required modules here
 */

const readCustomerAccountServiceData = require("../data/read.customeraccount.service.data")
const readCustomerAccountService = require("../../../../src/services/customer/read.customeraccount.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadCustomerAccountService = new readCustomerAccountService();
const ReadCustomerAccountServiceData = new readCustomerAccountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customeraccount.ts.001] | FunctionPath : [src/services/customer/read.contianer.service.js/readCustomerAccounts()]", () => {


	test(ReadCustomerAccountServiceData.READ_CUSTOMERACCOUNT_TS001_TC001.description, async () => {

        const output = await ReadCustomerAccountService.readCustomerAccounts(
            ReadCustomerAccountServiceData.READ_CUSTOMERACCOUNT_TS001_TC001.input.databaseConnector,
            ReadCustomerAccountServiceData.READ_CUSTOMERACCOUNT_TS001_TC001.input.apiID,
            ReadCustomerAccountServiceData.READ_CUSTOMERACCOUNT_TS001_TC001.input.config,
            ReadCustomerAccountServiceData.READ_CUSTOMERACCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountServiceData.READ_CUSTOMERACCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountServiceData.READ_CUSTOMERACCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountServiceData.READ_CUSTOMERACCOUNT_TS001_TC001.output)[2])
	});



    test(ReadCustomerAccountServiceData.READ_CUSTOMERACCOUNT_TS001_TC002.description, async () => {

        const output = await ReadCustomerAccountService.readCustomerAccounts(
            ReadCustomerAccountServiceData.READ_CUSTOMERACCOUNT_TS001_TC002.input.databaseConnector,
            ReadCustomerAccountServiceData.READ_CUSTOMERACCOUNT_TS001_TC002.input.apiID,
            ReadCustomerAccountServiceData.READ_CUSTOMERACCOUNT_TS001_TC002.input.config,
            ReadCustomerAccountServiceData.READ_CUSTOMERACCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerAccountServiceData.READ_CUSTOMERACCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadCustomerAccountServiceData.READ_CUSTOMERACCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadCustomerAccountServiceData.READ_CUSTOMERACCOUNT_TS001_TC002.output.message)        
	});



    test(ReadCustomerAccountServiceData.READ_CUSTOMERACCOUNT_TS001_TC003.description, async () => {

        const output = await ReadCustomerAccountService.readCustomerAccounts(
            ReadCustomerAccountServiceData.READ_CUSTOMERACCOUNT_TS001_TC003.input.databaseConnector,
            ReadCustomerAccountServiceData.READ_CUSTOMERACCOUNT_TS001_TC003.input.apiID,
            ReadCustomerAccountServiceData.READ_CUSTOMERACCOUNT_TS001_TC003.input.config,
            ReadCustomerAccountServiceData.READ_CUSTOMERACCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerAccountServiceData.READ_CUSTOMERACCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadCustomerAccountServiceData.READ_CUSTOMERACCOUNT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.customeraccount.ts.002] | FunctionPath : [src/services/customer/read.customeraccount.service.js/readOneCustomerAccount()]", () => {


	test(ReadCustomerAccountServiceData.READ_ONE_CUSTOMERACCOUNT_TS002_TC001.description, async () => {

        const output = await ReadCustomerAccountService.readOneCustomerAccount(
            ReadCustomerAccountServiceData.READ_ONE_CUSTOMERACCOUNT_TS002_TC001.input.databaseConnector,
            ReadCustomerAccountServiceData.READ_ONE_CUSTOMERACCOUNT_TS002_TC001.input.apiID,
            ReadCustomerAccountServiceData.READ_ONE_CUSTOMERACCOUNT_TS002_TC001.input.config,
            ReadCustomerAccountServiceData.READ_ONE_CUSTOMERACCOUNT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountServiceData.READ_ONE_CUSTOMERACCOUNT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountServiceData.READ_ONE_CUSTOMERACCOUNT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountServiceData.READ_ONE_CUSTOMERACCOUNT_TS002_TC001.output)[2])
	});



    test(ReadCustomerAccountServiceData.READ_ONE_CUSTOMERACCOUNT_TS002_TC002.description, async () => {

        const output = await ReadCustomerAccountService.readOneCustomerAccount(
            ReadCustomerAccountServiceData.READ_ONE_CUSTOMERACCOUNT_TS002_TC002.input.databaseConnector,
            ReadCustomerAccountServiceData.READ_ONE_CUSTOMERACCOUNT_TS002_TC002.input.apiID,
            ReadCustomerAccountServiceData.READ_ONE_CUSTOMERACCOUNT_TS002_TC002.input.config,
            ReadCustomerAccountServiceData.READ_ONE_CUSTOMERACCOUNT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerAccountServiceData.READ_ONE_CUSTOMERACCOUNT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadCustomerAccountServiceData.READ_ONE_CUSTOMERACCOUNT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadCustomerAccountServiceData.READ_ONE_CUSTOMERACCOUNT_TS002_TC002.output.message)        
	});



    test(ReadCustomerAccountServiceData.READ_ONE_CUSTOMERACCOUNT_TS002_TC003.description, async () => {

        const output = await ReadCustomerAccountService.readOneCustomerAccount(
            ReadCustomerAccountServiceData.READ_ONE_CUSTOMERACCOUNT_TS002_TC003.input.databaseConnector,
            ReadCustomerAccountServiceData.READ_ONE_CUSTOMERACCOUNT_TS002_TC003.input.apiID,
            ReadCustomerAccountServiceData.READ_ONE_CUSTOMERACCOUNT_TS002_TC003.input.config,
            ReadCustomerAccountServiceData.READ_ONE_CUSTOMERACCOUNT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerAccountServiceData.READ_ONE_CUSTOMERACCOUNT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadCustomerAccountServiceData.READ_ONE_CUSTOMERACCOUNT_TS002_TC003.output.message)        
	});

});