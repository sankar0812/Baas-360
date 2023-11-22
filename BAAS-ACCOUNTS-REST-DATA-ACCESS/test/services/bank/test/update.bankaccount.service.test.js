

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update bankaccount service class
**/

/**
 * Importing all required modules here
 */

const updateBankAccountServiceData = require("../data/update.bankaccount.service.data")
const updateBankAccountService = require("../../../../src/services/bank/update.bankaccount.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateBankAccountService = new updateBankAccountService();
const UpdateBankAccountServiceData = new updateBankAccountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.bankaccount.ts.001] | FunctionPath : [src/services/bank/update.bankaccount.service.js/updateBankAccount()]", () => {

	test(UpdateBankAccountServiceData.UPDATE_BANKACCOUNT_TS001_TC001.description, async () => {

        const output = await UpdateBankAccountService.updateBankAccount(
            UpdateBankAccountServiceData.UPDATE_BANKACCOUNT_TS001_TC001.input.databaseConnector,
            UpdateBankAccountServiceData.UPDATE_BANKACCOUNT_TS001_TC001.input.apiID,
            UpdateBankAccountServiceData.UPDATE_BANKACCOUNT_TS001_TC001.input.config,
            UpdateBankAccountServiceData.UPDATE_BANKACCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateBankAccountServiceData.UPDATE_BANKACCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateBankAccountServiceData.UPDATE_BANKACCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateBankAccountServiceData.UPDATE_BANKACCOUNT_TS001_TC001.output)[2])
	});

    test(UpdateBankAccountServiceData.UPDATE_BANKACCOUNT_TS001_TC002.description, async () => {

        const output = await UpdateBankAccountService.updateBankAccount(
            UpdateBankAccountServiceData.UPDATE_BANKACCOUNT_TS001_TC002.input.databaseConnector,
            UpdateBankAccountServiceData.UPDATE_BANKACCOUNT_TS001_TC002.input.apiID,
            UpdateBankAccountServiceData.UPDATE_BANKACCOUNT_TS001_TC002.input.config,
            UpdateBankAccountServiceData.UPDATE_BANKACCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateBankAccountServiceData.UPDATE_BANKACCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateBankAccountServiceData.UPDATE_BANKACCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateBankAccountServiceData.UPDATE_BANKACCOUNT_TS001_TC002.output.message)        
	});

    test(UpdateBankAccountServiceData.UPDATE_BANKACCOUNT_TS001_TC003.description, async () => {

        const output = await UpdateBankAccountService.updateBankAccount(
            UpdateBankAccountServiceData.UPDATE_BANKACCOUNT_TS001_TC003.input.databaseConnector,
            UpdateBankAccountServiceData.UPDATE_BANKACCOUNT_TS001_TC003.input.apiID,
            UpdateBankAccountServiceData.UPDATE_BANKACCOUNT_TS001_TC003.input.config,
            UpdateBankAccountServiceData.UPDATE_BANKACCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateBankAccountServiceData.UPDATE_BANKACCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateBankAccountServiceData.UPDATE_BANKACCOUNT_TS001_TC003.output.message)        
	});

});
