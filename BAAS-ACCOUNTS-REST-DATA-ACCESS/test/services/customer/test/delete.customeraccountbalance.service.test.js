/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete customeraccountbalance service class
**/

/**
 * Importing all required modules here
 */

const deleteCustomerAccountBalanceServiceData = require("../data/delete.customeraccountbalance.service.data")
const deleteCustomerAccountBalanceService = require("../../../../src/services/customer/delete.customeraccountbalance.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteCustomerAccountBalanceService = new deleteCustomerAccountBalanceService();
const DeleteCustomerAccountBalanceServiceData = new deleteCustomerAccountBalanceServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customeraccountbalance.ts.001] | FunctionPath : [src/services/customer/delete.customeraccountbalance.service.js/deleteOneCustomerAccountBalance()]", () => {


	test(DeleteCustomerAccountBalanceServiceData.DELETE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC001.description, async () => {

        const output = await DeleteCustomerAccountBalanceService.deleteOneCustomerAccountBalance(
            DeleteCustomerAccountBalanceServiceData.DELETE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC001.input.databaseConnector,
            DeleteCustomerAccountBalanceServiceData.DELETE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC001.input.apiID,
            DeleteCustomerAccountBalanceServiceData.DELETE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC001.input.config,
            DeleteCustomerAccountBalanceServiceData.DELETE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteCustomerAccountBalanceServiceData.DELETE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteCustomerAccountBalanceServiceData.DELETE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteCustomerAccountBalanceServiceData.DELETE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC001.output)[2])
	});



    test(DeleteCustomerAccountBalanceServiceData.DELETE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC002.description, async () => {

        const output = await DeleteCustomerAccountBalanceService.deleteOneCustomerAccountBalance(
            DeleteCustomerAccountBalanceServiceData.DELETE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC002.input.databaseConnector,
            DeleteCustomerAccountBalanceServiceData.DELETE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC002.input.apiID,
            DeleteCustomerAccountBalanceServiceData.DELETE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC002.input.config,
            DeleteCustomerAccountBalanceServiceData.DELETE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteCustomerAccountBalanceServiceData.DELETE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteCustomerAccountBalanceServiceData.DELETE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteCustomerAccountBalanceServiceData.DELETE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC002.output.message)        
	});



    test(DeleteCustomerAccountBalanceServiceData.DELETE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC003.description, async () => {

        const output = await DeleteCustomerAccountBalanceService.deleteOneCustomerAccountBalance(
            DeleteCustomerAccountBalanceServiceData.DELETE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC003.input.databaseConnector,
            DeleteCustomerAccountBalanceServiceData.DELETE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC003.input.apiID,
            DeleteCustomerAccountBalanceServiceData.DELETE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC003.input.config,
            DeleteCustomerAccountBalanceServiceData.DELETE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteCustomerAccountBalanceServiceData.DELETE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteCustomerAccountBalanceServiceData.DELETE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC003.output.message)        
	});

});
