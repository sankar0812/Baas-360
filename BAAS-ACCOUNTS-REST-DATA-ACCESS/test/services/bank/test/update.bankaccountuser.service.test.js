

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update bankaccountuser service class
**/

/**
 * Importing all required modules here
 */

const updateBankAccountUserServiceData = require("../data/update.bankaccountuser.service.data")
const updateBankAccountUserService = require("../../../../src/services/bank/update.bankaccountuser.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateBankAccountUserService = new updateBankAccountUserService();
const UpdateBankAccountUserServiceData = new updateBankAccountUserServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.bankaccountuser.ts.001] | FunctionPath : [src/services/bank/update.bankaccountuser.service.js/updateBankAccountUser()]", () => {

	test(UpdateBankAccountUserServiceData.UPDATE_BANKACCOUNTUSER_TS001_TC001.description, async () => {

        const output = await UpdateBankAccountUserService.updateBankAccountUser(
            UpdateBankAccountUserServiceData.UPDATE_BANKACCOUNTUSER_TS001_TC001.input.databaseConnector,
            UpdateBankAccountUserServiceData.UPDATE_BANKACCOUNTUSER_TS001_TC001.input.apiID,
            UpdateBankAccountUserServiceData.UPDATE_BANKACCOUNTUSER_TS001_TC001.input.config,
            UpdateBankAccountUserServiceData.UPDATE_BANKACCOUNTUSER_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateBankAccountUserServiceData.UPDATE_BANKACCOUNTUSER_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateBankAccountUserServiceData.UPDATE_BANKACCOUNTUSER_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateBankAccountUserServiceData.UPDATE_BANKACCOUNTUSER_TS001_TC001.output)[2])
	});

    test(UpdateBankAccountUserServiceData.UPDATE_BANKACCOUNTUSER_TS001_TC002.description, async () => {

        const output = await UpdateBankAccountUserService.updateBankAccountUser(
            UpdateBankAccountUserServiceData.UPDATE_BANKACCOUNTUSER_TS001_TC002.input.databaseConnector,
            UpdateBankAccountUserServiceData.UPDATE_BANKACCOUNTUSER_TS001_TC002.input.apiID,
            UpdateBankAccountUserServiceData.UPDATE_BANKACCOUNTUSER_TS001_TC002.input.config,
            UpdateBankAccountUserServiceData.UPDATE_BANKACCOUNTUSER_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateBankAccountUserServiceData.UPDATE_BANKACCOUNTUSER_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateBankAccountUserServiceData.UPDATE_BANKACCOUNTUSER_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateBankAccountUserServiceData.UPDATE_BANKACCOUNTUSER_TS001_TC002.output.message)        
	});

    test(UpdateBankAccountUserServiceData.UPDATE_BANKACCOUNTUSER_TS001_TC003.description, async () => {

        const output = await UpdateBankAccountUserService.updateBankAccountUser(
            UpdateBankAccountUserServiceData.UPDATE_BANKACCOUNTUSER_TS001_TC003.input.databaseConnector,
            UpdateBankAccountUserServiceData.UPDATE_BANKACCOUNTUSER_TS001_TC003.input.apiID,
            UpdateBankAccountUserServiceData.UPDATE_BANKACCOUNTUSER_TS001_TC003.input.config,
            UpdateBankAccountUserServiceData.UPDATE_BANKACCOUNTUSER_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateBankAccountUserServiceData.UPDATE_BANKACCOUNTUSER_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateBankAccountUserServiceData.UPDATE_BANKACCOUNTUSER_TS001_TC003.output.message)        
	});

});
