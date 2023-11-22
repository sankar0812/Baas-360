/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read BankAccountBalance service class
**/

/**
 * Importing all required modules here
 */

const readBankAccountBalanceServiceData = require("../data/read.bankaccountbalance.service.data")
const readBankAccountBalanceService = require("../../../../src/services/bank/read.bankaccountbalance.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadBankAccountBalanceService = new readBankAccountBalanceService();
const ReadBankAccountBalanceServiceData = new readBankAccountBalanceServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.bankaccountbalance.ts.001] | FunctionPath : [src/services/bank/read.contianer.service.js/readBankAccountBalances()]", () => {


	test(ReadBankAccountBalanceServiceData.READ_BANKACCOUNTBALANCE_TS001_TC001.description, async () => {

        const output = await ReadBankAccountBalanceService.readBankAccountBalances(
            ReadBankAccountBalanceServiceData.READ_BANKACCOUNTBALANCE_TS001_TC001.input.databaseConnector,
            ReadBankAccountBalanceServiceData.READ_BANKACCOUNTBALANCE_TS001_TC001.input.apiID,
            ReadBankAccountBalanceServiceData.READ_BANKACCOUNTBALANCE_TS001_TC001.input.config,
            ReadBankAccountBalanceServiceData.READ_BANKACCOUNTBALANCE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadBankAccountBalanceServiceData.READ_BANKACCOUNTBALANCE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadBankAccountBalanceServiceData.READ_BANKACCOUNTBALANCE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadBankAccountBalanceServiceData.READ_BANKACCOUNTBALANCE_TS001_TC001.output)[2])
	});



    test(ReadBankAccountBalanceServiceData.READ_BANKACCOUNTBALANCE_TS001_TC002.description, async () => {

        const output = await ReadBankAccountBalanceService.readBankAccountBalances(
            ReadBankAccountBalanceServiceData.READ_BANKACCOUNTBALANCE_TS001_TC002.input.databaseConnector,
            ReadBankAccountBalanceServiceData.READ_BANKACCOUNTBALANCE_TS001_TC002.input.apiID,
            ReadBankAccountBalanceServiceData.READ_BANKACCOUNTBALANCE_TS001_TC002.input.config,
            ReadBankAccountBalanceServiceData.READ_BANKACCOUNTBALANCE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadBankAccountBalanceServiceData.READ_BANKACCOUNTBALANCE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadBankAccountBalanceServiceData.READ_BANKACCOUNTBALANCE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadBankAccountBalanceServiceData.READ_BANKACCOUNTBALANCE_TS001_TC002.output.message)        
	});



    test(ReadBankAccountBalanceServiceData.READ_BANKACCOUNTBALANCE_TS001_TC003.description, async () => {

        const output = await ReadBankAccountBalanceService.readBankAccountBalances(
            ReadBankAccountBalanceServiceData.READ_BANKACCOUNTBALANCE_TS001_TC003.input.databaseConnector,
            ReadBankAccountBalanceServiceData.READ_BANKACCOUNTBALANCE_TS001_TC003.input.apiID,
            ReadBankAccountBalanceServiceData.READ_BANKACCOUNTBALANCE_TS001_TC003.input.config,
            ReadBankAccountBalanceServiceData.READ_BANKACCOUNTBALANCE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadBankAccountBalanceServiceData.READ_BANKACCOUNTBALANCE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadBankAccountBalanceServiceData.READ_BANKACCOUNTBALANCE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.bankaccountbalance.ts.002] | FunctionPath : [src/services/bank/read.bankaccountbalance.service.js/readOneBankAccountBalance()]", () => {


	test(ReadBankAccountBalanceServiceData.READ_ONE_BANKACCOUNTBALANCE_TS002_TC001.description, async () => {

        const output = await ReadBankAccountBalanceService.readOneBankAccountBalance(
            ReadBankAccountBalanceServiceData.READ_ONE_BANKACCOUNTBALANCE_TS002_TC001.input.databaseConnector,
            ReadBankAccountBalanceServiceData.READ_ONE_BANKACCOUNTBALANCE_TS002_TC001.input.apiID,
            ReadBankAccountBalanceServiceData.READ_ONE_BANKACCOUNTBALANCE_TS002_TC001.input.config,
            ReadBankAccountBalanceServiceData.READ_ONE_BANKACCOUNTBALANCE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadBankAccountBalanceServiceData.READ_ONE_BANKACCOUNTBALANCE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadBankAccountBalanceServiceData.READ_ONE_BANKACCOUNTBALANCE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadBankAccountBalanceServiceData.READ_ONE_BANKACCOUNTBALANCE_TS002_TC001.output)[2])
	});



    test(ReadBankAccountBalanceServiceData.READ_ONE_BANKACCOUNTBALANCE_TS002_TC002.description, async () => {

        const output = await ReadBankAccountBalanceService.readOneBankAccountBalance(
            ReadBankAccountBalanceServiceData.READ_ONE_BANKACCOUNTBALANCE_TS002_TC002.input.databaseConnector,
            ReadBankAccountBalanceServiceData.READ_ONE_BANKACCOUNTBALANCE_TS002_TC002.input.apiID,
            ReadBankAccountBalanceServiceData.READ_ONE_BANKACCOUNTBALANCE_TS002_TC002.input.config,
            ReadBankAccountBalanceServiceData.READ_ONE_BANKACCOUNTBALANCE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadBankAccountBalanceServiceData.READ_ONE_BANKACCOUNTBALANCE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadBankAccountBalanceServiceData.READ_ONE_BANKACCOUNTBALANCE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadBankAccountBalanceServiceData.READ_ONE_BANKACCOUNTBALANCE_TS002_TC002.output.message)        
	});



    test(ReadBankAccountBalanceServiceData.READ_ONE_BANKACCOUNTBALANCE_TS002_TC003.description, async () => {

        const output = await ReadBankAccountBalanceService.readOneBankAccountBalance(
            ReadBankAccountBalanceServiceData.READ_ONE_BANKACCOUNTBALANCE_TS002_TC003.input.databaseConnector,
            ReadBankAccountBalanceServiceData.READ_ONE_BANKACCOUNTBALANCE_TS002_TC003.input.apiID,
            ReadBankAccountBalanceServiceData.READ_ONE_BANKACCOUNTBALANCE_TS002_TC003.input.config,
            ReadBankAccountBalanceServiceData.READ_ONE_BANKACCOUNTBALANCE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadBankAccountBalanceServiceData.READ_ONE_BANKACCOUNTBALANCE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadBankAccountBalanceServiceData.READ_ONE_BANKACCOUNTBALANCE_TS002_TC003.output.message)        
	});

});