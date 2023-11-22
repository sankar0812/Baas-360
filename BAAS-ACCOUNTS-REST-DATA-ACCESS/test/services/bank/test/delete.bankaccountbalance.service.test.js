/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete bankaccountbalance service class
**/

/**
 * Importing all required modules here
 */

const deleteBankAccountBalanceServiceData = require("../data/delete.bankaccountbalance.service.data")
const deleteBankAccountBalanceService = require("../../../../src/services/bank/delete.bankaccountbalance.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteBankAccountBalanceService = new deleteBankAccountBalanceService();
const DeleteBankAccountBalanceServiceData = new deleteBankAccountBalanceServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.bankaccountbalance.ts.001] | FunctionPath : [src/services/bank/delete.bankaccountbalance.service.js/deleteOneBankAccountBalance()]", () => {


	test(DeleteBankAccountBalanceServiceData.DELETE_ONE_BANKACCOUNTBALANCE_TS001_TC001.description, async () => {

        const output = await DeleteBankAccountBalanceService.deleteOneBankAccountBalance(
            DeleteBankAccountBalanceServiceData.DELETE_ONE_BANKACCOUNTBALANCE_TS001_TC001.input.databaseConnector,
            DeleteBankAccountBalanceServiceData.DELETE_ONE_BANKACCOUNTBALANCE_TS001_TC001.input.apiID,
            DeleteBankAccountBalanceServiceData.DELETE_ONE_BANKACCOUNTBALANCE_TS001_TC001.input.config,
            DeleteBankAccountBalanceServiceData.DELETE_ONE_BANKACCOUNTBALANCE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteBankAccountBalanceServiceData.DELETE_ONE_BANKACCOUNTBALANCE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteBankAccountBalanceServiceData.DELETE_ONE_BANKACCOUNTBALANCE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteBankAccountBalanceServiceData.DELETE_ONE_BANKACCOUNTBALANCE_TS001_TC001.output)[2])
	});



    test(DeleteBankAccountBalanceServiceData.DELETE_ONE_BANKACCOUNTBALANCE_TS001_TC002.description, async () => {

        const output = await DeleteBankAccountBalanceService.deleteOneBankAccountBalance(
            DeleteBankAccountBalanceServiceData.DELETE_ONE_BANKACCOUNTBALANCE_TS001_TC002.input.databaseConnector,
            DeleteBankAccountBalanceServiceData.DELETE_ONE_BANKACCOUNTBALANCE_TS001_TC002.input.apiID,
            DeleteBankAccountBalanceServiceData.DELETE_ONE_BANKACCOUNTBALANCE_TS001_TC002.input.config,
            DeleteBankAccountBalanceServiceData.DELETE_ONE_BANKACCOUNTBALANCE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteBankAccountBalanceServiceData.DELETE_ONE_BANKACCOUNTBALANCE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteBankAccountBalanceServiceData.DELETE_ONE_BANKACCOUNTBALANCE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteBankAccountBalanceServiceData.DELETE_ONE_BANKACCOUNTBALANCE_TS001_TC002.output.message)        
	});



    test(DeleteBankAccountBalanceServiceData.DELETE_ONE_BANKACCOUNTBALANCE_TS001_TC003.description, async () => {

        const output = await DeleteBankAccountBalanceService.deleteOneBankAccountBalance(
            DeleteBankAccountBalanceServiceData.DELETE_ONE_BANKACCOUNTBALANCE_TS001_TC003.input.databaseConnector,
            DeleteBankAccountBalanceServiceData.DELETE_ONE_BANKACCOUNTBALANCE_TS001_TC003.input.apiID,
            DeleteBankAccountBalanceServiceData.DELETE_ONE_BANKACCOUNTBALANCE_TS001_TC003.input.config,
            DeleteBankAccountBalanceServiceData.DELETE_ONE_BANKACCOUNTBALANCE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteBankAccountBalanceServiceData.DELETE_ONE_BANKACCOUNTBALANCE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteBankAccountBalanceServiceData.DELETE_ONE_BANKACCOUNTBALANCE_TS001_TC003.output.message)        
	});

});
