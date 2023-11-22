/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read CustomerAccountBalance service class
**/

/**
 * Importing all required modules here
 */

const readCustomerAccountBalanceServiceData = require("../data/read.customeraccountbalance.service.data")
const readCustomerAccountBalanceService = require("../../../../src/services/customer/read.customeraccountbalance.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadCustomerAccountBalanceService = new readCustomerAccountBalanceService();
const ReadCustomerAccountBalanceServiceData = new readCustomerAccountBalanceServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customeraccountbalance.ts.001] | FunctionPath : [src/services/customer/read.contianer.service.js/readCustomerAccountBalances()]", () => {


	test(ReadCustomerAccountBalanceServiceData.READ_CUSTOMERACCOUNTBALANCE_TS001_TC001.description, async () => {

        const output = await ReadCustomerAccountBalanceService.readCustomerAccountBalances(
            ReadCustomerAccountBalanceServiceData.READ_CUSTOMERACCOUNTBALANCE_TS001_TC001.input.databaseConnector,
            ReadCustomerAccountBalanceServiceData.READ_CUSTOMERACCOUNTBALANCE_TS001_TC001.input.apiID,
            ReadCustomerAccountBalanceServiceData.READ_CUSTOMERACCOUNTBALANCE_TS001_TC001.input.config,
            ReadCustomerAccountBalanceServiceData.READ_CUSTOMERACCOUNTBALANCE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountBalanceServiceData.READ_CUSTOMERACCOUNTBALANCE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountBalanceServiceData.READ_CUSTOMERACCOUNTBALANCE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountBalanceServiceData.READ_CUSTOMERACCOUNTBALANCE_TS001_TC001.output)[2])
	});



    test(ReadCustomerAccountBalanceServiceData.READ_CUSTOMERACCOUNTBALANCE_TS001_TC002.description, async () => {

        const output = await ReadCustomerAccountBalanceService.readCustomerAccountBalances(
            ReadCustomerAccountBalanceServiceData.READ_CUSTOMERACCOUNTBALANCE_TS001_TC002.input.databaseConnector,
            ReadCustomerAccountBalanceServiceData.READ_CUSTOMERACCOUNTBALANCE_TS001_TC002.input.apiID,
            ReadCustomerAccountBalanceServiceData.READ_CUSTOMERACCOUNTBALANCE_TS001_TC002.input.config,
            ReadCustomerAccountBalanceServiceData.READ_CUSTOMERACCOUNTBALANCE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerAccountBalanceServiceData.READ_CUSTOMERACCOUNTBALANCE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadCustomerAccountBalanceServiceData.READ_CUSTOMERACCOUNTBALANCE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadCustomerAccountBalanceServiceData.READ_CUSTOMERACCOUNTBALANCE_TS001_TC002.output.message)        
	});



    test(ReadCustomerAccountBalanceServiceData.READ_CUSTOMERACCOUNTBALANCE_TS001_TC003.description, async () => {

        const output = await ReadCustomerAccountBalanceService.readCustomerAccountBalances(
            ReadCustomerAccountBalanceServiceData.READ_CUSTOMERACCOUNTBALANCE_TS001_TC003.input.databaseConnector,
            ReadCustomerAccountBalanceServiceData.READ_CUSTOMERACCOUNTBALANCE_TS001_TC003.input.apiID,
            ReadCustomerAccountBalanceServiceData.READ_CUSTOMERACCOUNTBALANCE_TS001_TC003.input.config,
            ReadCustomerAccountBalanceServiceData.READ_CUSTOMERACCOUNTBALANCE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerAccountBalanceServiceData.READ_CUSTOMERACCOUNTBALANCE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadCustomerAccountBalanceServiceData.READ_CUSTOMERACCOUNTBALANCE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.customeraccountbalance.ts.002] | FunctionPath : [src/services/customer/read.customeraccountbalance.service.js/readOneCustomerAccountBalance()]", () => {


	test(ReadCustomerAccountBalanceServiceData.READ_ONE_CUSTOMERACCOUNTBALANCE_TS002_TC001.description, async () => {

        const output = await ReadCustomerAccountBalanceService.readOneCustomerAccountBalance(
            ReadCustomerAccountBalanceServiceData.READ_ONE_CUSTOMERACCOUNTBALANCE_TS002_TC001.input.databaseConnector,
            ReadCustomerAccountBalanceServiceData.READ_ONE_CUSTOMERACCOUNTBALANCE_TS002_TC001.input.apiID,
            ReadCustomerAccountBalanceServiceData.READ_ONE_CUSTOMERACCOUNTBALANCE_TS002_TC001.input.config,
            ReadCustomerAccountBalanceServiceData.READ_ONE_CUSTOMERACCOUNTBALANCE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountBalanceServiceData.READ_ONE_CUSTOMERACCOUNTBALANCE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountBalanceServiceData.READ_ONE_CUSTOMERACCOUNTBALANCE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountBalanceServiceData.READ_ONE_CUSTOMERACCOUNTBALANCE_TS002_TC001.output)[2])
	});



    test(ReadCustomerAccountBalanceServiceData.READ_ONE_CUSTOMERACCOUNTBALANCE_TS002_TC002.description, async () => {

        const output = await ReadCustomerAccountBalanceService.readOneCustomerAccountBalance(
            ReadCustomerAccountBalanceServiceData.READ_ONE_CUSTOMERACCOUNTBALANCE_TS002_TC002.input.databaseConnector,
            ReadCustomerAccountBalanceServiceData.READ_ONE_CUSTOMERACCOUNTBALANCE_TS002_TC002.input.apiID,
            ReadCustomerAccountBalanceServiceData.READ_ONE_CUSTOMERACCOUNTBALANCE_TS002_TC002.input.config,
            ReadCustomerAccountBalanceServiceData.READ_ONE_CUSTOMERACCOUNTBALANCE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerAccountBalanceServiceData.READ_ONE_CUSTOMERACCOUNTBALANCE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadCustomerAccountBalanceServiceData.READ_ONE_CUSTOMERACCOUNTBALANCE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadCustomerAccountBalanceServiceData.READ_ONE_CUSTOMERACCOUNTBALANCE_TS002_TC002.output.message)        
	});



    test(ReadCustomerAccountBalanceServiceData.READ_ONE_CUSTOMERACCOUNTBALANCE_TS002_TC003.description, async () => {

        const output = await ReadCustomerAccountBalanceService.readOneCustomerAccountBalance(
            ReadCustomerAccountBalanceServiceData.READ_ONE_CUSTOMERACCOUNTBALANCE_TS002_TC003.input.databaseConnector,
            ReadCustomerAccountBalanceServiceData.READ_ONE_CUSTOMERACCOUNTBALANCE_TS002_TC003.input.apiID,
            ReadCustomerAccountBalanceServiceData.READ_ONE_CUSTOMERACCOUNTBALANCE_TS002_TC003.input.config,
            ReadCustomerAccountBalanceServiceData.READ_ONE_CUSTOMERACCOUNTBALANCE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerAccountBalanceServiceData.READ_ONE_CUSTOMERACCOUNTBALANCE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadCustomerAccountBalanceServiceData.READ_ONE_CUSTOMERACCOUNTBALANCE_TS002_TC003.output.message)        
	});

});