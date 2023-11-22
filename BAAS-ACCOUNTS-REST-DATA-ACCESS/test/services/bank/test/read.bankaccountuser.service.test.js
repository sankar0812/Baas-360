/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read BankAccountUser service class
**/

/**
 * Importing all required modules here
 */

const readBankAccountUserServiceData = require("../data/read.bankaccountuser.service.data")
const readBankAccountUserService = require("../../../../src/services/bank/read.bankaccountuser.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadBankAccountUserService = new readBankAccountUserService();
const ReadBankAccountUserServiceData = new readBankAccountUserServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.bankaccountuser.ts.001] | FunctionPath : [src/services/bank/read.contianer.service.js/readBankAccountUsers()]", () => {


	test(ReadBankAccountUserServiceData.READ_BANKACCOUNTUSER_TS001_TC001.description, async () => {

        const output = await ReadBankAccountUserService.readBankAccountUsers(
            ReadBankAccountUserServiceData.READ_BANKACCOUNTUSER_TS001_TC001.input.databaseConnector,
            ReadBankAccountUserServiceData.READ_BANKACCOUNTUSER_TS001_TC001.input.apiID,
            ReadBankAccountUserServiceData.READ_BANKACCOUNTUSER_TS001_TC001.input.config,
            ReadBankAccountUserServiceData.READ_BANKACCOUNTUSER_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadBankAccountUserServiceData.READ_BANKACCOUNTUSER_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadBankAccountUserServiceData.READ_BANKACCOUNTUSER_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadBankAccountUserServiceData.READ_BANKACCOUNTUSER_TS001_TC001.output)[2])
	});



    test(ReadBankAccountUserServiceData.READ_BANKACCOUNTUSER_TS001_TC002.description, async () => {

        const output = await ReadBankAccountUserService.readBankAccountUsers(
            ReadBankAccountUserServiceData.READ_BANKACCOUNTUSER_TS001_TC002.input.databaseConnector,
            ReadBankAccountUserServiceData.READ_BANKACCOUNTUSER_TS001_TC002.input.apiID,
            ReadBankAccountUserServiceData.READ_BANKACCOUNTUSER_TS001_TC002.input.config,
            ReadBankAccountUserServiceData.READ_BANKACCOUNTUSER_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadBankAccountUserServiceData.READ_BANKACCOUNTUSER_TS001_TC002.output.data)
        expect(output.status).toBe(ReadBankAccountUserServiceData.READ_BANKACCOUNTUSER_TS001_TC002.output.status)
        expect(output.message).toBe(ReadBankAccountUserServiceData.READ_BANKACCOUNTUSER_TS001_TC002.output.message)        
	});



    test(ReadBankAccountUserServiceData.READ_BANKACCOUNTUSER_TS001_TC003.description, async () => {

        const output = await ReadBankAccountUserService.readBankAccountUsers(
            ReadBankAccountUserServiceData.READ_BANKACCOUNTUSER_TS001_TC003.input.databaseConnector,
            ReadBankAccountUserServiceData.READ_BANKACCOUNTUSER_TS001_TC003.input.apiID,
            ReadBankAccountUserServiceData.READ_BANKACCOUNTUSER_TS001_TC003.input.config,
            ReadBankAccountUserServiceData.READ_BANKACCOUNTUSER_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadBankAccountUserServiceData.READ_BANKACCOUNTUSER_TS001_TC003.output.status)
        expect(output.message).toBe(ReadBankAccountUserServiceData.READ_BANKACCOUNTUSER_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.bankaccountuser.ts.002] | FunctionPath : [src/services/bank/read.bankaccountuser.service.js/readOneBankAccountUser()]", () => {


	test(ReadBankAccountUserServiceData.READ_ONE_BANKACCOUNTUSER_TS002_TC001.description, async () => {

        const output = await ReadBankAccountUserService.readOneBankAccountUser(
            ReadBankAccountUserServiceData.READ_ONE_BANKACCOUNTUSER_TS002_TC001.input.databaseConnector,
            ReadBankAccountUserServiceData.READ_ONE_BANKACCOUNTUSER_TS002_TC001.input.apiID,
            ReadBankAccountUserServiceData.READ_ONE_BANKACCOUNTUSER_TS002_TC001.input.config,
            ReadBankAccountUserServiceData.READ_ONE_BANKACCOUNTUSER_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadBankAccountUserServiceData.READ_ONE_BANKACCOUNTUSER_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadBankAccountUserServiceData.READ_ONE_BANKACCOUNTUSER_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadBankAccountUserServiceData.READ_ONE_BANKACCOUNTUSER_TS002_TC001.output)[2])
	});



    test(ReadBankAccountUserServiceData.READ_ONE_BANKACCOUNTUSER_TS002_TC002.description, async () => {

        const output = await ReadBankAccountUserService.readOneBankAccountUser(
            ReadBankAccountUserServiceData.READ_ONE_BANKACCOUNTUSER_TS002_TC002.input.databaseConnector,
            ReadBankAccountUserServiceData.READ_ONE_BANKACCOUNTUSER_TS002_TC002.input.apiID,
            ReadBankAccountUserServiceData.READ_ONE_BANKACCOUNTUSER_TS002_TC002.input.config,
            ReadBankAccountUserServiceData.READ_ONE_BANKACCOUNTUSER_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadBankAccountUserServiceData.READ_ONE_BANKACCOUNTUSER_TS002_TC002.output.data)
        expect(output.status).toBe(ReadBankAccountUserServiceData.READ_ONE_BANKACCOUNTUSER_TS002_TC002.output.status)
        expect(output.message).toBe(ReadBankAccountUserServiceData.READ_ONE_BANKACCOUNTUSER_TS002_TC002.output.message)        
	});



    test(ReadBankAccountUserServiceData.READ_ONE_BANKACCOUNTUSER_TS002_TC003.description, async () => {

        const output = await ReadBankAccountUserService.readOneBankAccountUser(
            ReadBankAccountUserServiceData.READ_ONE_BANKACCOUNTUSER_TS002_TC003.input.databaseConnector,
            ReadBankAccountUserServiceData.READ_ONE_BANKACCOUNTUSER_TS002_TC003.input.apiID,
            ReadBankAccountUserServiceData.READ_ONE_BANKACCOUNTUSER_TS002_TC003.input.config,
            ReadBankAccountUserServiceData.READ_ONE_BANKACCOUNTUSER_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadBankAccountUserServiceData.READ_ONE_BANKACCOUNTUSER_TS002_TC003.output.status)
        expect(output.message).toBe(ReadBankAccountUserServiceData.READ_ONE_BANKACCOUNTUSER_TS002_TC003.output.message)        
	});

});