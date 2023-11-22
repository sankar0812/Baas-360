/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete customeraccounttransaction service class
**/

/**
 * Importing all required modules here
 */

const deleteCustomerAccountTransactionServiceData = require("../data/delete.customeraccounttransaction.service.data")
const deleteCustomerAccountTransactionService = require("../../../../src/services/customer/delete.customeraccounttransaction.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteCustomerAccountTransactionService = new deleteCustomerAccountTransactionService();
const DeleteCustomerAccountTransactionServiceData = new deleteCustomerAccountTransactionServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customeraccounttransaction.ts.001] | FunctionPath : [src/services/customer/delete.customeraccounttransaction.service.js/deleteOneCustomerAccountTransaction()]", () => {


	test(DeleteCustomerAccountTransactionServiceData.DELETE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.description, async () => {

        const output = await DeleteCustomerAccountTransactionService.deleteOneCustomerAccountTransaction(
            DeleteCustomerAccountTransactionServiceData.DELETE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.input.databaseConnector,
            DeleteCustomerAccountTransactionServiceData.DELETE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.input.apiID,
            DeleteCustomerAccountTransactionServiceData.DELETE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.input.config,
            DeleteCustomerAccountTransactionServiceData.DELETE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteCustomerAccountTransactionServiceData.DELETE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteCustomerAccountTransactionServiceData.DELETE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteCustomerAccountTransactionServiceData.DELETE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.output)[2])
	});



    test(DeleteCustomerAccountTransactionServiceData.DELETE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.description, async () => {

        const output = await DeleteCustomerAccountTransactionService.deleteOneCustomerAccountTransaction(
            DeleteCustomerAccountTransactionServiceData.DELETE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.input.databaseConnector,
            DeleteCustomerAccountTransactionServiceData.DELETE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.input.apiID,
            DeleteCustomerAccountTransactionServiceData.DELETE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.input.config,
            DeleteCustomerAccountTransactionServiceData.DELETE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteCustomerAccountTransactionServiceData.DELETE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteCustomerAccountTransactionServiceData.DELETE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteCustomerAccountTransactionServiceData.DELETE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.output.message)        
	});



    test(DeleteCustomerAccountTransactionServiceData.DELETE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.description, async () => {

        const output = await DeleteCustomerAccountTransactionService.deleteOneCustomerAccountTransaction(
            DeleteCustomerAccountTransactionServiceData.DELETE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.input.databaseConnector,
            DeleteCustomerAccountTransactionServiceData.DELETE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.input.apiID,
            DeleteCustomerAccountTransactionServiceData.DELETE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.input.config,
            DeleteCustomerAccountTransactionServiceData.DELETE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteCustomerAccountTransactionServiceData.DELETE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteCustomerAccountTransactionServiceData.DELETE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.output.message)        
	});

});
