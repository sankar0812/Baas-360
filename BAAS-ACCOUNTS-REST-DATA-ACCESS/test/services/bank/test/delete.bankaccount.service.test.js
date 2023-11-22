/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete bankaccount service class
**/

/**
 * Importing all required modules here
 */

const deleteBankAccountServiceData = require("../data/delete.bankaccount.service.data")
const deleteBankAccountService = require("../../../../src/services/bank/delete.bankaccount.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteBankAccountService = new deleteBankAccountService();
const DeleteBankAccountServiceData = new deleteBankAccountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.bankaccount.ts.001] | FunctionPath : [src/services/bank/delete.bankaccount.service.js/deleteOneBankAccount()]", () => {


	test(DeleteBankAccountServiceData.DELETE_ONE_BANKACCOUNT_TS001_TC001.description, async () => {

        const output = await DeleteBankAccountService.deleteOneBankAccount(
            DeleteBankAccountServiceData.DELETE_ONE_BANKACCOUNT_TS001_TC001.input.databaseConnector,
            DeleteBankAccountServiceData.DELETE_ONE_BANKACCOUNT_TS001_TC001.input.apiID,
            DeleteBankAccountServiceData.DELETE_ONE_BANKACCOUNT_TS001_TC001.input.config,
            DeleteBankAccountServiceData.DELETE_ONE_BANKACCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteBankAccountServiceData.DELETE_ONE_BANKACCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteBankAccountServiceData.DELETE_ONE_BANKACCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteBankAccountServiceData.DELETE_ONE_BANKACCOUNT_TS001_TC001.output)[2])
	});



    test(DeleteBankAccountServiceData.DELETE_ONE_BANKACCOUNT_TS001_TC002.description, async () => {

        const output = await DeleteBankAccountService.deleteOneBankAccount(
            DeleteBankAccountServiceData.DELETE_ONE_BANKACCOUNT_TS001_TC002.input.databaseConnector,
            DeleteBankAccountServiceData.DELETE_ONE_BANKACCOUNT_TS001_TC002.input.apiID,
            DeleteBankAccountServiceData.DELETE_ONE_BANKACCOUNT_TS001_TC002.input.config,
            DeleteBankAccountServiceData.DELETE_ONE_BANKACCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteBankAccountServiceData.DELETE_ONE_BANKACCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteBankAccountServiceData.DELETE_ONE_BANKACCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteBankAccountServiceData.DELETE_ONE_BANKACCOUNT_TS001_TC002.output.message)        
	});



    test(DeleteBankAccountServiceData.DELETE_ONE_BANKACCOUNT_TS001_TC003.description, async () => {

        const output = await DeleteBankAccountService.deleteOneBankAccount(
            DeleteBankAccountServiceData.DELETE_ONE_BANKACCOUNT_TS001_TC003.input.databaseConnector,
            DeleteBankAccountServiceData.DELETE_ONE_BANKACCOUNT_TS001_TC003.input.apiID,
            DeleteBankAccountServiceData.DELETE_ONE_BANKACCOUNT_TS001_TC003.input.config,
            DeleteBankAccountServiceData.DELETE_ONE_BANKACCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteBankAccountServiceData.DELETE_ONE_BANKACCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteBankAccountServiceData.DELETE_ONE_BANKACCOUNT_TS001_TC003.output.message)        
	});

});
