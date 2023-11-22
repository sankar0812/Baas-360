/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete customeraccount service class
**/

/**
 * Importing all required modules here
 */

const deleteCustomerAccountServiceData = require("../data/delete.customeraccount.service.data")
const deleteCustomerAccountService = require("../../../../src/services/customer/delete.customeraccount.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteCustomerAccountService = new deleteCustomerAccountService();
const DeleteCustomerAccountServiceData = new deleteCustomerAccountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customeraccount.ts.001] | FunctionPath : [src/services/customer/delete.customeraccount.service.js/deleteOneCustomerAccount()]", () => {


	test(DeleteCustomerAccountServiceData.DELETE_ONE_CUSTOMERACCOUNT_TS001_TC001.description, async () => {

        const output = await DeleteCustomerAccountService.deleteOneCustomerAccount(
            DeleteCustomerAccountServiceData.DELETE_ONE_CUSTOMERACCOUNT_TS001_TC001.input.databaseConnector,
            DeleteCustomerAccountServiceData.DELETE_ONE_CUSTOMERACCOUNT_TS001_TC001.input.apiID,
            DeleteCustomerAccountServiceData.DELETE_ONE_CUSTOMERACCOUNT_TS001_TC001.input.config,
            DeleteCustomerAccountServiceData.DELETE_ONE_CUSTOMERACCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteCustomerAccountServiceData.DELETE_ONE_CUSTOMERACCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteCustomerAccountServiceData.DELETE_ONE_CUSTOMERACCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteCustomerAccountServiceData.DELETE_ONE_CUSTOMERACCOUNT_TS001_TC001.output)[2])
	});



    test(DeleteCustomerAccountServiceData.DELETE_ONE_CUSTOMERACCOUNT_TS001_TC002.description, async () => {

        const output = await DeleteCustomerAccountService.deleteOneCustomerAccount(
            DeleteCustomerAccountServiceData.DELETE_ONE_CUSTOMERACCOUNT_TS001_TC002.input.databaseConnector,
            DeleteCustomerAccountServiceData.DELETE_ONE_CUSTOMERACCOUNT_TS001_TC002.input.apiID,
            DeleteCustomerAccountServiceData.DELETE_ONE_CUSTOMERACCOUNT_TS001_TC002.input.config,
            DeleteCustomerAccountServiceData.DELETE_ONE_CUSTOMERACCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteCustomerAccountServiceData.DELETE_ONE_CUSTOMERACCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteCustomerAccountServiceData.DELETE_ONE_CUSTOMERACCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteCustomerAccountServiceData.DELETE_ONE_CUSTOMERACCOUNT_TS001_TC002.output.message)        
	});



    test(DeleteCustomerAccountServiceData.DELETE_ONE_CUSTOMERACCOUNT_TS001_TC003.description, async () => {

        const output = await DeleteCustomerAccountService.deleteOneCustomerAccount(
            DeleteCustomerAccountServiceData.DELETE_ONE_CUSTOMERACCOUNT_TS001_TC003.input.databaseConnector,
            DeleteCustomerAccountServiceData.DELETE_ONE_CUSTOMERACCOUNT_TS001_TC003.input.apiID,
            DeleteCustomerAccountServiceData.DELETE_ONE_CUSTOMERACCOUNT_TS001_TC003.input.config,
            DeleteCustomerAccountServiceData.DELETE_ONE_CUSTOMERACCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteCustomerAccountServiceData.DELETE_ONE_CUSTOMERACCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteCustomerAccountServiceData.DELETE_ONE_CUSTOMERACCOUNT_TS001_TC003.output.message)        
	});

});
