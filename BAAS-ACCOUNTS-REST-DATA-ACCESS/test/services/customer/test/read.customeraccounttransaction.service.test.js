/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read CustomerAccountTransaction service class
**/

/**
 * Importing all required modules here
 */

const readCustomerAccountTransactionServiceData = require("../data/read.customeraccounttransaction.service.data")
const readCustomerAccountTransactionService = require("../../../../src/services/customer/read.customeraccounttransaction.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadCustomerAccountTransactionService = new readCustomerAccountTransactionService();
const ReadCustomerAccountTransactionServiceData = new readCustomerAccountTransactionServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customeraccounttransaction.ts.001] | FunctionPath : [src/services/customer/read.contianer.service.js/readCustomerAccountTransactions()]", () => {


	test(ReadCustomerAccountTransactionServiceData.READ_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.description, async () => {

        const output = await ReadCustomerAccountTransactionService.readCustomerAccountTransactions(
            ReadCustomerAccountTransactionServiceData.READ_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.input.databaseConnector,
            ReadCustomerAccountTransactionServiceData.READ_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.input.apiID,
            ReadCustomerAccountTransactionServiceData.READ_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.input.config,
            ReadCustomerAccountTransactionServiceData.READ_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountTransactionServiceData.READ_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountTransactionServiceData.READ_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountTransactionServiceData.READ_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.output)[2])
	});



    test(ReadCustomerAccountTransactionServiceData.READ_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.description, async () => {

        const output = await ReadCustomerAccountTransactionService.readCustomerAccountTransactions(
            ReadCustomerAccountTransactionServiceData.READ_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.input.databaseConnector,
            ReadCustomerAccountTransactionServiceData.READ_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.input.apiID,
            ReadCustomerAccountTransactionServiceData.READ_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.input.config,
            ReadCustomerAccountTransactionServiceData.READ_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerAccountTransactionServiceData.READ_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.output.data)
        expect(output.status).toBe(ReadCustomerAccountTransactionServiceData.READ_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.output.status)
        expect(output.message).toBe(ReadCustomerAccountTransactionServiceData.READ_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.output.message)        
	});



    test(ReadCustomerAccountTransactionServiceData.READ_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.description, async () => {

        const output = await ReadCustomerAccountTransactionService.readCustomerAccountTransactions(
            ReadCustomerAccountTransactionServiceData.READ_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.input.databaseConnector,
            ReadCustomerAccountTransactionServiceData.READ_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.input.apiID,
            ReadCustomerAccountTransactionServiceData.READ_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.input.config,
            ReadCustomerAccountTransactionServiceData.READ_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerAccountTransactionServiceData.READ_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.output.status)
        expect(output.message).toBe(ReadCustomerAccountTransactionServiceData.READ_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.customeraccounttransaction.ts.002] | FunctionPath : [src/services/customer/read.customeraccounttransaction.service.js/readOneCustomerAccountTransaction()]", () => {


	test(ReadCustomerAccountTransactionServiceData.READ_ONE_CUSTOMERACCOUNTTRANSACTION_TS002_TC001.description, async () => {

        const output = await ReadCustomerAccountTransactionService.readOneCustomerAccountTransaction(
            ReadCustomerAccountTransactionServiceData.READ_ONE_CUSTOMERACCOUNTTRANSACTION_TS002_TC001.input.databaseConnector,
            ReadCustomerAccountTransactionServiceData.READ_ONE_CUSTOMERACCOUNTTRANSACTION_TS002_TC001.input.apiID,
            ReadCustomerAccountTransactionServiceData.READ_ONE_CUSTOMERACCOUNTTRANSACTION_TS002_TC001.input.config,
            ReadCustomerAccountTransactionServiceData.READ_ONE_CUSTOMERACCOUNTTRANSACTION_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountTransactionServiceData.READ_ONE_CUSTOMERACCOUNTTRANSACTION_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountTransactionServiceData.READ_ONE_CUSTOMERACCOUNTTRANSACTION_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerAccountTransactionServiceData.READ_ONE_CUSTOMERACCOUNTTRANSACTION_TS002_TC001.output)[2])
	});



    test(ReadCustomerAccountTransactionServiceData.READ_ONE_CUSTOMERACCOUNTTRANSACTION_TS002_TC002.description, async () => {

        const output = await ReadCustomerAccountTransactionService.readOneCustomerAccountTransaction(
            ReadCustomerAccountTransactionServiceData.READ_ONE_CUSTOMERACCOUNTTRANSACTION_TS002_TC002.input.databaseConnector,
            ReadCustomerAccountTransactionServiceData.READ_ONE_CUSTOMERACCOUNTTRANSACTION_TS002_TC002.input.apiID,
            ReadCustomerAccountTransactionServiceData.READ_ONE_CUSTOMERACCOUNTTRANSACTION_TS002_TC002.input.config,
            ReadCustomerAccountTransactionServiceData.READ_ONE_CUSTOMERACCOUNTTRANSACTION_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerAccountTransactionServiceData.READ_ONE_CUSTOMERACCOUNTTRANSACTION_TS002_TC002.output.data)
        expect(output.status).toBe(ReadCustomerAccountTransactionServiceData.READ_ONE_CUSTOMERACCOUNTTRANSACTION_TS002_TC002.output.status)
        expect(output.message).toBe(ReadCustomerAccountTransactionServiceData.READ_ONE_CUSTOMERACCOUNTTRANSACTION_TS002_TC002.output.message)        
	});



    test(ReadCustomerAccountTransactionServiceData.READ_ONE_CUSTOMERACCOUNTTRANSACTION_TS002_TC003.description, async () => {

        const output = await ReadCustomerAccountTransactionService.readOneCustomerAccountTransaction(
            ReadCustomerAccountTransactionServiceData.READ_ONE_CUSTOMERACCOUNTTRANSACTION_TS002_TC003.input.databaseConnector,
            ReadCustomerAccountTransactionServiceData.READ_ONE_CUSTOMERACCOUNTTRANSACTION_TS002_TC003.input.apiID,
            ReadCustomerAccountTransactionServiceData.READ_ONE_CUSTOMERACCOUNTTRANSACTION_TS002_TC003.input.config,
            ReadCustomerAccountTransactionServiceData.READ_ONE_CUSTOMERACCOUNTTRANSACTION_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerAccountTransactionServiceData.READ_ONE_CUSTOMERACCOUNTTRANSACTION_TS002_TC003.output.status)
        expect(output.message).toBe(ReadCustomerAccountTransactionServiceData.READ_ONE_CUSTOMERACCOUNTTRANSACTION_TS002_TC003.output.message)        
	});

});