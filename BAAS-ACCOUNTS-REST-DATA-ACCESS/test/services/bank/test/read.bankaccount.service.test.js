/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read BankAccount service class
**/

/**
 * Importing all required modules here
 */

const readBankAccountServiceData = require("../data/read.bankaccount.service.data")
const readBankAccountService = require("../../../../src/services/bank/read.bankaccount.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadBankAccountService = new readBankAccountService();
const ReadBankAccountServiceData = new readBankAccountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.bankaccount.ts.001] | FunctionPath : [src/services/bank/read.contianer.service.js/readBankAccounts()]", () => {


	test(ReadBankAccountServiceData.READ_BANKACCOUNT_TS001_TC001.description, async () => {

        const output = await ReadBankAccountService.readBankAccounts(
            ReadBankAccountServiceData.READ_BANKACCOUNT_TS001_TC001.input.databaseConnector,
            ReadBankAccountServiceData.READ_BANKACCOUNT_TS001_TC001.input.apiID,
            ReadBankAccountServiceData.READ_BANKACCOUNT_TS001_TC001.input.config,
            ReadBankAccountServiceData.READ_BANKACCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadBankAccountServiceData.READ_BANKACCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadBankAccountServiceData.READ_BANKACCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadBankAccountServiceData.READ_BANKACCOUNT_TS001_TC001.output)[2])
	});



    test(ReadBankAccountServiceData.READ_BANKACCOUNT_TS001_TC002.description, async () => {

        const output = await ReadBankAccountService.readBankAccounts(
            ReadBankAccountServiceData.READ_BANKACCOUNT_TS001_TC002.input.databaseConnector,
            ReadBankAccountServiceData.READ_BANKACCOUNT_TS001_TC002.input.apiID,
            ReadBankAccountServiceData.READ_BANKACCOUNT_TS001_TC002.input.config,
            ReadBankAccountServiceData.READ_BANKACCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadBankAccountServiceData.READ_BANKACCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadBankAccountServiceData.READ_BANKACCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadBankAccountServiceData.READ_BANKACCOUNT_TS001_TC002.output.message)        
	});



    test(ReadBankAccountServiceData.READ_BANKACCOUNT_TS001_TC003.description, async () => {

        const output = await ReadBankAccountService.readBankAccounts(
            ReadBankAccountServiceData.READ_BANKACCOUNT_TS001_TC003.input.databaseConnector,
            ReadBankAccountServiceData.READ_BANKACCOUNT_TS001_TC003.input.apiID,
            ReadBankAccountServiceData.READ_BANKACCOUNT_TS001_TC003.input.config,
            ReadBankAccountServiceData.READ_BANKACCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadBankAccountServiceData.READ_BANKACCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadBankAccountServiceData.READ_BANKACCOUNT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.bankaccount.ts.002] | FunctionPath : [src/services/bank/read.bankaccount.service.js/readOneBankAccount()]", () => {


	test(ReadBankAccountServiceData.READ_ONE_BANKACCOUNT_TS002_TC001.description, async () => {

        const output = await ReadBankAccountService.readOneBankAccount(
            ReadBankAccountServiceData.READ_ONE_BANKACCOUNT_TS002_TC001.input.databaseConnector,
            ReadBankAccountServiceData.READ_ONE_BANKACCOUNT_TS002_TC001.input.apiID,
            ReadBankAccountServiceData.READ_ONE_BANKACCOUNT_TS002_TC001.input.config,
            ReadBankAccountServiceData.READ_ONE_BANKACCOUNT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadBankAccountServiceData.READ_ONE_BANKACCOUNT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadBankAccountServiceData.READ_ONE_BANKACCOUNT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadBankAccountServiceData.READ_ONE_BANKACCOUNT_TS002_TC001.output)[2])
	});



    test(ReadBankAccountServiceData.READ_ONE_BANKACCOUNT_TS002_TC002.description, async () => {

        const output = await ReadBankAccountService.readOneBankAccount(
            ReadBankAccountServiceData.READ_ONE_BANKACCOUNT_TS002_TC002.input.databaseConnector,
            ReadBankAccountServiceData.READ_ONE_BANKACCOUNT_TS002_TC002.input.apiID,
            ReadBankAccountServiceData.READ_ONE_BANKACCOUNT_TS002_TC002.input.config,
            ReadBankAccountServiceData.READ_ONE_BANKACCOUNT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadBankAccountServiceData.READ_ONE_BANKACCOUNT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadBankAccountServiceData.READ_ONE_BANKACCOUNT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadBankAccountServiceData.READ_ONE_BANKACCOUNT_TS002_TC002.output.message)        
	});



    test(ReadBankAccountServiceData.READ_ONE_BANKACCOUNT_TS002_TC003.description, async () => {

        const output = await ReadBankAccountService.readOneBankAccount(
            ReadBankAccountServiceData.READ_ONE_BANKACCOUNT_TS002_TC003.input.databaseConnector,
            ReadBankAccountServiceData.READ_ONE_BANKACCOUNT_TS002_TC003.input.apiID,
            ReadBankAccountServiceData.READ_ONE_BANKACCOUNT_TS002_TC003.input.config,
            ReadBankAccountServiceData.READ_ONE_BANKACCOUNT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadBankAccountServiceData.READ_ONE_BANKACCOUNT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadBankAccountServiceData.READ_ONE_BANKACCOUNT_TS002_TC003.output.message)        
	});

});