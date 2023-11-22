/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete customer service class
**/

/**
 * Importing all required modules here
 */

const deleteCustomerServiceData = require("../data/delete.customer.service.data")
const deleteCustomerService = require("../../../../src/services/customer/delete.customer.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteCustomerService = new deleteCustomerService();
const DeleteCustomerServiceData = new deleteCustomerServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customer.ts.001] | FunctionPath : [src/services/customer/delete.customer.service.js/deleteOneCustomer()]", () => {


	test(DeleteCustomerServiceData.DELETE_ONE_CUSTOMER_TS001_TC001.description, async () => {

        const output = await DeleteCustomerService.deleteOneCustomer(
            DeleteCustomerServiceData.DELETE_ONE_CUSTOMER_TS001_TC001.input.databaseConnector,
            DeleteCustomerServiceData.DELETE_ONE_CUSTOMER_TS001_TC001.input.apiID,
            DeleteCustomerServiceData.DELETE_ONE_CUSTOMER_TS001_TC001.input.config,
            DeleteCustomerServiceData.DELETE_ONE_CUSTOMER_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteCustomerServiceData.DELETE_ONE_CUSTOMER_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteCustomerServiceData.DELETE_ONE_CUSTOMER_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteCustomerServiceData.DELETE_ONE_CUSTOMER_TS001_TC001.output)[2])
	});



    test(DeleteCustomerServiceData.DELETE_ONE_CUSTOMER_TS001_TC002.description, async () => {

        const output = await DeleteCustomerService.deleteOneCustomer(
            DeleteCustomerServiceData.DELETE_ONE_CUSTOMER_TS001_TC002.input.databaseConnector,
            DeleteCustomerServiceData.DELETE_ONE_CUSTOMER_TS001_TC002.input.apiID,
            DeleteCustomerServiceData.DELETE_ONE_CUSTOMER_TS001_TC002.input.config,
            DeleteCustomerServiceData.DELETE_ONE_CUSTOMER_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteCustomerServiceData.DELETE_ONE_CUSTOMER_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteCustomerServiceData.DELETE_ONE_CUSTOMER_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteCustomerServiceData.DELETE_ONE_CUSTOMER_TS001_TC002.output.message)        
	});



    test(DeleteCustomerServiceData.DELETE_ONE_CUSTOMER_TS001_TC003.description, async () => {

        const output = await DeleteCustomerService.deleteOneCustomer(
            DeleteCustomerServiceData.DELETE_ONE_CUSTOMER_TS001_TC003.input.databaseConnector,
            DeleteCustomerServiceData.DELETE_ONE_CUSTOMER_TS001_TC003.input.apiID,
            DeleteCustomerServiceData.DELETE_ONE_CUSTOMER_TS001_TC003.input.config,
            DeleteCustomerServiceData.DELETE_ONE_CUSTOMER_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteCustomerServiceData.DELETE_ONE_CUSTOMER_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteCustomerServiceData.DELETE_ONE_CUSTOMER_TS001_TC003.output.message)        
	});

});
