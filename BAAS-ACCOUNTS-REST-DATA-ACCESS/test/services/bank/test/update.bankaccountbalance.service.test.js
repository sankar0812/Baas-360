

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update bankaccountbalance service class
**/

/**
 * Importing all required modules here
 */

const updateBankAccountBalanceServiceData = require("../data/update.bankaccountbalance.service.data")
const updateBankAccountBalanceService = require("../../../../src/services/bank/update.bankaccountbalance.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateBankAccountBalanceService = new updateBankAccountBalanceService();
const UpdateBankAccountBalanceServiceData = new updateBankAccountBalanceServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.bankaccountbalance.ts.001] | FunctionPath : [src/services/bank/update.bankaccountbalance.service.js/updateBankAccountBalance()]", () => {

	test(UpdateBankAccountBalanceServiceData.UPDATE_BANKACCOUNTBALANCE_TS001_TC001.description, async () => {

        const output = await UpdateBankAccountBalanceService.updateBankAccountBalance(
            UpdateBankAccountBalanceServiceData.UPDATE_BANKACCOUNTBALANCE_TS001_TC001.input.databaseConnector,
            UpdateBankAccountBalanceServiceData.UPDATE_BANKACCOUNTBALANCE_TS001_TC001.input.apiID,
            UpdateBankAccountBalanceServiceData.UPDATE_BANKACCOUNTBALANCE_TS001_TC001.input.config,
            UpdateBankAccountBalanceServiceData.UPDATE_BANKACCOUNTBALANCE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateBankAccountBalanceServiceData.UPDATE_BANKACCOUNTBALANCE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateBankAccountBalanceServiceData.UPDATE_BANKACCOUNTBALANCE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateBankAccountBalanceServiceData.UPDATE_BANKACCOUNTBALANCE_TS001_TC001.output)[2])
	});

    test(UpdateBankAccountBalanceServiceData.UPDATE_BANKACCOUNTBALANCE_TS001_TC002.description, async () => {

        const output = await UpdateBankAccountBalanceService.updateBankAccountBalance(
            UpdateBankAccountBalanceServiceData.UPDATE_BANKACCOUNTBALANCE_TS001_TC002.input.databaseConnector,
            UpdateBankAccountBalanceServiceData.UPDATE_BANKACCOUNTBALANCE_TS001_TC002.input.apiID,
            UpdateBankAccountBalanceServiceData.UPDATE_BANKACCOUNTBALANCE_TS001_TC002.input.config,
            UpdateBankAccountBalanceServiceData.UPDATE_BANKACCOUNTBALANCE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateBankAccountBalanceServiceData.UPDATE_BANKACCOUNTBALANCE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateBankAccountBalanceServiceData.UPDATE_BANKACCOUNTBALANCE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateBankAccountBalanceServiceData.UPDATE_BANKACCOUNTBALANCE_TS001_TC002.output.message)        
	});

    test(UpdateBankAccountBalanceServiceData.UPDATE_BANKACCOUNTBALANCE_TS001_TC003.description, async () => {

        const output = await UpdateBankAccountBalanceService.updateBankAccountBalance(
            UpdateBankAccountBalanceServiceData.UPDATE_BANKACCOUNTBALANCE_TS001_TC003.input.databaseConnector,
            UpdateBankAccountBalanceServiceData.UPDATE_BANKACCOUNTBALANCE_TS001_TC003.input.apiID,
            UpdateBankAccountBalanceServiceData.UPDATE_BANKACCOUNTBALANCE_TS001_TC003.input.config,
            UpdateBankAccountBalanceServiceData.UPDATE_BANKACCOUNTBALANCE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateBankAccountBalanceServiceData.UPDATE_BANKACCOUNTBALANCE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateBankAccountBalanceServiceData.UPDATE_BANKACCOUNTBALANCE_TS001_TC003.output.message)        
	});

});
