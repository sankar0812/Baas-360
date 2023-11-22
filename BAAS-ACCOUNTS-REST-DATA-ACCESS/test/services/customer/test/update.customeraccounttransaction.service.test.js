

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update customeraccounttransaction service class
**/

/**
 * Importing all required modules here
 */

const updateCustomerAccountTransactionServiceData = require("../data/update.customeraccounttransaction.service.data")
const updateCustomerAccountTransactionService = require("../../../../src/services/customer/update.customeraccounttransaction.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateCustomerAccountTransactionService = new updateCustomerAccountTransactionService();
const UpdateCustomerAccountTransactionServiceData = new updateCustomerAccountTransactionServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customeraccounttransaction.ts.001] | FunctionPath : [src/services/customer/update.customeraccounttransaction.service.js/updateCustomerAccountTransaction()]", () => {

	test(UpdateCustomerAccountTransactionServiceData.UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.description, async () => {

        const output = await UpdateCustomerAccountTransactionService.updateCustomerAccountTransaction(
            UpdateCustomerAccountTransactionServiceData.UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.input.databaseConnector,
            UpdateCustomerAccountTransactionServiceData.UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.input.apiID,
            UpdateCustomerAccountTransactionServiceData.UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.input.config,
            UpdateCustomerAccountTransactionServiceData.UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateCustomerAccountTransactionServiceData.UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerAccountTransactionServiceData.UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerAccountTransactionServiceData.UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.output)[2])
	});

    test(UpdateCustomerAccountTransactionServiceData.UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.description, async () => {

        const output = await UpdateCustomerAccountTransactionService.updateCustomerAccountTransaction(
            UpdateCustomerAccountTransactionServiceData.UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.input.databaseConnector,
            UpdateCustomerAccountTransactionServiceData.UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.input.apiID,
            UpdateCustomerAccountTransactionServiceData.UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.input.config,
            UpdateCustomerAccountTransactionServiceData.UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateCustomerAccountTransactionServiceData.UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateCustomerAccountTransactionServiceData.UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateCustomerAccountTransactionServiceData.UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.output.message)        
	});

    test(UpdateCustomerAccountTransactionServiceData.UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.description, async () => {

        const output = await UpdateCustomerAccountTransactionService.updateCustomerAccountTransaction(
            UpdateCustomerAccountTransactionServiceData.UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.input.databaseConnector,
            UpdateCustomerAccountTransactionServiceData.UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.input.apiID,
            UpdateCustomerAccountTransactionServiceData.UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.input.config,
            UpdateCustomerAccountTransactionServiceData.UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateCustomerAccountTransactionServiceData.UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateCustomerAccountTransactionServiceData.UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.output.message)        
	});

});
