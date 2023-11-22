/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete customeraccountcard service class
**/

/**
 * Importing all required modules here
 */

const deleteCustomerAccountCardServiceData = require("../data/delete.customeraccountcard.service.data")
const deleteCustomerAccountCardService = require("../../../../src/services/customer/delete.customeraccountcard.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteCustomerAccountCardService = new deleteCustomerAccountCardService();
const DeleteCustomerAccountCardServiceData = new deleteCustomerAccountCardServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customeraccountcard.ts.001] | FunctionPath : [src/services/customer/delete.customeraccountcard.service.js/deleteOneCustomerAccountCard()]", () => {


	test(DeleteCustomerAccountCardServiceData.DELETE_ONE_CUSTOMERACCOUNTCARD_TS001_TC001.description, async () => {

        const output = await DeleteCustomerAccountCardService.deleteOneCustomerAccountCard(
            DeleteCustomerAccountCardServiceData.DELETE_ONE_CUSTOMERACCOUNTCARD_TS001_TC001.input.databaseConnector,
            DeleteCustomerAccountCardServiceData.DELETE_ONE_CUSTOMERACCOUNTCARD_TS001_TC001.input.apiID,
            DeleteCustomerAccountCardServiceData.DELETE_ONE_CUSTOMERACCOUNTCARD_TS001_TC001.input.config,
            DeleteCustomerAccountCardServiceData.DELETE_ONE_CUSTOMERACCOUNTCARD_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteCustomerAccountCardServiceData.DELETE_ONE_CUSTOMERACCOUNTCARD_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteCustomerAccountCardServiceData.DELETE_ONE_CUSTOMERACCOUNTCARD_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteCustomerAccountCardServiceData.DELETE_ONE_CUSTOMERACCOUNTCARD_TS001_TC001.output)[2])
	});



    test(DeleteCustomerAccountCardServiceData.DELETE_ONE_CUSTOMERACCOUNTCARD_TS001_TC002.description, async () => {

        const output = await DeleteCustomerAccountCardService.deleteOneCustomerAccountCard(
            DeleteCustomerAccountCardServiceData.DELETE_ONE_CUSTOMERACCOUNTCARD_TS001_TC002.input.databaseConnector,
            DeleteCustomerAccountCardServiceData.DELETE_ONE_CUSTOMERACCOUNTCARD_TS001_TC002.input.apiID,
            DeleteCustomerAccountCardServiceData.DELETE_ONE_CUSTOMERACCOUNTCARD_TS001_TC002.input.config,
            DeleteCustomerAccountCardServiceData.DELETE_ONE_CUSTOMERACCOUNTCARD_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteCustomerAccountCardServiceData.DELETE_ONE_CUSTOMERACCOUNTCARD_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteCustomerAccountCardServiceData.DELETE_ONE_CUSTOMERACCOUNTCARD_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteCustomerAccountCardServiceData.DELETE_ONE_CUSTOMERACCOUNTCARD_TS001_TC002.output.message)        
	});



    test(DeleteCustomerAccountCardServiceData.DELETE_ONE_CUSTOMERACCOUNTCARD_TS001_TC003.description, async () => {

        const output = await DeleteCustomerAccountCardService.deleteOneCustomerAccountCard(
            DeleteCustomerAccountCardServiceData.DELETE_ONE_CUSTOMERACCOUNTCARD_TS001_TC003.input.databaseConnector,
            DeleteCustomerAccountCardServiceData.DELETE_ONE_CUSTOMERACCOUNTCARD_TS001_TC003.input.apiID,
            DeleteCustomerAccountCardServiceData.DELETE_ONE_CUSTOMERACCOUNTCARD_TS001_TC003.input.config,
            DeleteCustomerAccountCardServiceData.DELETE_ONE_CUSTOMERACCOUNTCARD_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteCustomerAccountCardServiceData.DELETE_ONE_CUSTOMERACCOUNTCARD_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteCustomerAccountCardServiceData.DELETE_ONE_CUSTOMERACCOUNTCARD_TS001_TC003.output.message)        
	});

});
