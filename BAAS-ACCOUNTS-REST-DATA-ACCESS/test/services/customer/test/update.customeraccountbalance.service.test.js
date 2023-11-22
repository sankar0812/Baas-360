

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update customeraccountbalance service class
**/

/**
 * Importing all required modules here
 */

const updateCustomerAccountBalanceServiceData = require("../data/update.customeraccountbalance.service.data")
const updateCustomerAccountBalanceService = require("../../../../src/services/customer/update.customeraccountbalance.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateCustomerAccountBalanceService = new updateCustomerAccountBalanceService();
const UpdateCustomerAccountBalanceServiceData = new updateCustomerAccountBalanceServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customeraccountbalance.ts.001] | FunctionPath : [src/services/customer/update.customeraccountbalance.service.js/updateCustomerAccountBalance()]", () => {

	test(UpdateCustomerAccountBalanceServiceData.UPDATE_CUSTOMERACCOUNTBALANCE_TS001_TC001.description, async () => {

        const output = await UpdateCustomerAccountBalanceService.updateCustomerAccountBalance(
            UpdateCustomerAccountBalanceServiceData.UPDATE_CUSTOMERACCOUNTBALANCE_TS001_TC001.input.databaseConnector,
            UpdateCustomerAccountBalanceServiceData.UPDATE_CUSTOMERACCOUNTBALANCE_TS001_TC001.input.apiID,
            UpdateCustomerAccountBalanceServiceData.UPDATE_CUSTOMERACCOUNTBALANCE_TS001_TC001.input.config,
            UpdateCustomerAccountBalanceServiceData.UPDATE_CUSTOMERACCOUNTBALANCE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateCustomerAccountBalanceServiceData.UPDATE_CUSTOMERACCOUNTBALANCE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerAccountBalanceServiceData.UPDATE_CUSTOMERACCOUNTBALANCE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerAccountBalanceServiceData.UPDATE_CUSTOMERACCOUNTBALANCE_TS001_TC001.output)[2])
	});

    test(UpdateCustomerAccountBalanceServiceData.UPDATE_CUSTOMERACCOUNTBALANCE_TS001_TC002.description, async () => {

        const output = await UpdateCustomerAccountBalanceService.updateCustomerAccountBalance(
            UpdateCustomerAccountBalanceServiceData.UPDATE_CUSTOMERACCOUNTBALANCE_TS001_TC002.input.databaseConnector,
            UpdateCustomerAccountBalanceServiceData.UPDATE_CUSTOMERACCOUNTBALANCE_TS001_TC002.input.apiID,
            UpdateCustomerAccountBalanceServiceData.UPDATE_CUSTOMERACCOUNTBALANCE_TS001_TC002.input.config,
            UpdateCustomerAccountBalanceServiceData.UPDATE_CUSTOMERACCOUNTBALANCE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateCustomerAccountBalanceServiceData.UPDATE_CUSTOMERACCOUNTBALANCE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateCustomerAccountBalanceServiceData.UPDATE_CUSTOMERACCOUNTBALANCE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateCustomerAccountBalanceServiceData.UPDATE_CUSTOMERACCOUNTBALANCE_TS001_TC002.output.message)        
	});

    test(UpdateCustomerAccountBalanceServiceData.UPDATE_CUSTOMERACCOUNTBALANCE_TS001_TC003.description, async () => {

        const output = await UpdateCustomerAccountBalanceService.updateCustomerAccountBalance(
            UpdateCustomerAccountBalanceServiceData.UPDATE_CUSTOMERACCOUNTBALANCE_TS001_TC003.input.databaseConnector,
            UpdateCustomerAccountBalanceServiceData.UPDATE_CUSTOMERACCOUNTBALANCE_TS001_TC003.input.apiID,
            UpdateCustomerAccountBalanceServiceData.UPDATE_CUSTOMERACCOUNTBALANCE_TS001_TC003.input.config,
            UpdateCustomerAccountBalanceServiceData.UPDATE_CUSTOMERACCOUNTBALANCE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateCustomerAccountBalanceServiceData.UPDATE_CUSTOMERACCOUNTBALANCE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateCustomerAccountBalanceServiceData.UPDATE_CUSTOMERACCOUNTBALANCE_TS001_TC003.output.message)        
	});

});
