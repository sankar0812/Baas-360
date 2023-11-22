

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update customeraccount service class
**/

/**
 * Importing all required modules here
 */

const updateCustomerAccountServiceData = require("../data/update.customeraccount.service.data")
const updateCustomerAccountService = require("../../../../src/services/customer/update.customeraccount.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateCustomerAccountService = new updateCustomerAccountService();
const UpdateCustomerAccountServiceData = new updateCustomerAccountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customeraccount.ts.001] | FunctionPath : [src/services/customer/update.customeraccount.service.js/updateCustomerAccount()]", () => {

	test(UpdateCustomerAccountServiceData.UPDATE_CUSTOMERACCOUNT_TS001_TC001.description, async () => {

        const output = await UpdateCustomerAccountService.updateCustomerAccount(
            UpdateCustomerAccountServiceData.UPDATE_CUSTOMERACCOUNT_TS001_TC001.input.databaseConnector,
            UpdateCustomerAccountServiceData.UPDATE_CUSTOMERACCOUNT_TS001_TC001.input.apiID,
            UpdateCustomerAccountServiceData.UPDATE_CUSTOMERACCOUNT_TS001_TC001.input.config,
            UpdateCustomerAccountServiceData.UPDATE_CUSTOMERACCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateCustomerAccountServiceData.UPDATE_CUSTOMERACCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerAccountServiceData.UPDATE_CUSTOMERACCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerAccountServiceData.UPDATE_CUSTOMERACCOUNT_TS001_TC001.output)[2])
	});

    test(UpdateCustomerAccountServiceData.UPDATE_CUSTOMERACCOUNT_TS001_TC002.description, async () => {

        const output = await UpdateCustomerAccountService.updateCustomerAccount(
            UpdateCustomerAccountServiceData.UPDATE_CUSTOMERACCOUNT_TS001_TC002.input.databaseConnector,
            UpdateCustomerAccountServiceData.UPDATE_CUSTOMERACCOUNT_TS001_TC002.input.apiID,
            UpdateCustomerAccountServiceData.UPDATE_CUSTOMERACCOUNT_TS001_TC002.input.config,
            UpdateCustomerAccountServiceData.UPDATE_CUSTOMERACCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateCustomerAccountServiceData.UPDATE_CUSTOMERACCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateCustomerAccountServiceData.UPDATE_CUSTOMERACCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateCustomerAccountServiceData.UPDATE_CUSTOMERACCOUNT_TS001_TC002.output.message)        
	});

    test(UpdateCustomerAccountServiceData.UPDATE_CUSTOMERACCOUNT_TS001_TC003.description, async () => {

        const output = await UpdateCustomerAccountService.updateCustomerAccount(
            UpdateCustomerAccountServiceData.UPDATE_CUSTOMERACCOUNT_TS001_TC003.input.databaseConnector,
            UpdateCustomerAccountServiceData.UPDATE_CUSTOMERACCOUNT_TS001_TC003.input.apiID,
            UpdateCustomerAccountServiceData.UPDATE_CUSTOMERACCOUNT_TS001_TC003.input.config,
            UpdateCustomerAccountServiceData.UPDATE_CUSTOMERACCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateCustomerAccountServiceData.UPDATE_CUSTOMERACCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateCustomerAccountServiceData.UPDATE_CUSTOMERACCOUNT_TS001_TC003.output.message)        
	});

});
