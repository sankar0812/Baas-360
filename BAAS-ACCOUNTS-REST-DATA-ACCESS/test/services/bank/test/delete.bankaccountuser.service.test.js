/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete bankaccountuser service class
**/

/**
 * Importing all required modules here
 */

const deleteBankAccountUserServiceData = require("../data/delete.bankaccountuser.service.data")
const deleteBankAccountUserService = require("../../../../src/services/bank/delete.bankaccountuser.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteBankAccountUserService = new deleteBankAccountUserService();
const DeleteBankAccountUserServiceData = new deleteBankAccountUserServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.bankaccountuser.ts.001] | FunctionPath : [src/services/bank/delete.bankaccountuser.service.js/deleteOneBankAccountUser()]", () => {


	test(DeleteBankAccountUserServiceData.DELETE_ONE_BANKACCOUNTUSER_TS001_TC001.description, async () => {

        const output = await DeleteBankAccountUserService.deleteOneBankAccountUser(
            DeleteBankAccountUserServiceData.DELETE_ONE_BANKACCOUNTUSER_TS001_TC001.input.databaseConnector,
            DeleteBankAccountUserServiceData.DELETE_ONE_BANKACCOUNTUSER_TS001_TC001.input.apiID,
            DeleteBankAccountUserServiceData.DELETE_ONE_BANKACCOUNTUSER_TS001_TC001.input.config,
            DeleteBankAccountUserServiceData.DELETE_ONE_BANKACCOUNTUSER_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteBankAccountUserServiceData.DELETE_ONE_BANKACCOUNTUSER_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteBankAccountUserServiceData.DELETE_ONE_BANKACCOUNTUSER_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteBankAccountUserServiceData.DELETE_ONE_BANKACCOUNTUSER_TS001_TC001.output)[2])
	});



    test(DeleteBankAccountUserServiceData.DELETE_ONE_BANKACCOUNTUSER_TS001_TC002.description, async () => {

        const output = await DeleteBankAccountUserService.deleteOneBankAccountUser(
            DeleteBankAccountUserServiceData.DELETE_ONE_BANKACCOUNTUSER_TS001_TC002.input.databaseConnector,
            DeleteBankAccountUserServiceData.DELETE_ONE_BANKACCOUNTUSER_TS001_TC002.input.apiID,
            DeleteBankAccountUserServiceData.DELETE_ONE_BANKACCOUNTUSER_TS001_TC002.input.config,
            DeleteBankAccountUserServiceData.DELETE_ONE_BANKACCOUNTUSER_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteBankAccountUserServiceData.DELETE_ONE_BANKACCOUNTUSER_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteBankAccountUserServiceData.DELETE_ONE_BANKACCOUNTUSER_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteBankAccountUserServiceData.DELETE_ONE_BANKACCOUNTUSER_TS001_TC002.output.message)        
	});



    test(DeleteBankAccountUserServiceData.DELETE_ONE_BANKACCOUNTUSER_TS001_TC003.description, async () => {

        const output = await DeleteBankAccountUserService.deleteOneBankAccountUser(
            DeleteBankAccountUserServiceData.DELETE_ONE_BANKACCOUNTUSER_TS001_TC003.input.databaseConnector,
            DeleteBankAccountUserServiceData.DELETE_ONE_BANKACCOUNTUSER_TS001_TC003.input.apiID,
            DeleteBankAccountUserServiceData.DELETE_ONE_BANKACCOUNTUSER_TS001_TC003.input.config,
            DeleteBankAccountUserServiceData.DELETE_ONE_BANKACCOUNTUSER_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteBankAccountUserServiceData.DELETE_ONE_BANKACCOUNTUSER_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteBankAccountUserServiceData.DELETE_ONE_BANKACCOUNTUSER_TS001_TC003.output.message)        
	});

});
