

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update customer service class
**/

/**
 * Importing all required modules here
 */

const updateCustomerServiceData = require("../data/update.customer.service.data")
const updateCustomerService = require("../../../../src/services/customer/update.customer.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateCustomerService = new updateCustomerService();
const UpdateCustomerServiceData = new updateCustomerServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customer.ts.001] | FunctionPath : [src/services/customer/update.customer.service.js/updateCustomer()]", () => {

	test(UpdateCustomerServiceData.UPDATE_CUSTOMER_TS001_TC001.description, async () => {

        const output = await UpdateCustomerService.updateCustomer(
            UpdateCustomerServiceData.UPDATE_CUSTOMER_TS001_TC001.input.databaseConnector,
            UpdateCustomerServiceData.UPDATE_CUSTOMER_TS001_TC001.input.apiID,
            UpdateCustomerServiceData.UPDATE_CUSTOMER_TS001_TC001.input.config,
            UpdateCustomerServiceData.UPDATE_CUSTOMER_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateCustomerServiceData.UPDATE_CUSTOMER_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerServiceData.UPDATE_CUSTOMER_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerServiceData.UPDATE_CUSTOMER_TS001_TC001.output)[2])
	});

    test(UpdateCustomerServiceData.UPDATE_CUSTOMER_TS001_TC002.description, async () => {

        const output = await UpdateCustomerService.updateCustomer(
            UpdateCustomerServiceData.UPDATE_CUSTOMER_TS001_TC002.input.databaseConnector,
            UpdateCustomerServiceData.UPDATE_CUSTOMER_TS001_TC002.input.apiID,
            UpdateCustomerServiceData.UPDATE_CUSTOMER_TS001_TC002.input.config,
            UpdateCustomerServiceData.UPDATE_CUSTOMER_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateCustomerServiceData.UPDATE_CUSTOMER_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateCustomerServiceData.UPDATE_CUSTOMER_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateCustomerServiceData.UPDATE_CUSTOMER_TS001_TC002.output.message)        
	});

    test(UpdateCustomerServiceData.UPDATE_CUSTOMER_TS001_TC003.description, async () => {

        const output = await UpdateCustomerService.updateCustomer(
            UpdateCustomerServiceData.UPDATE_CUSTOMER_TS001_TC003.input.databaseConnector,
            UpdateCustomerServiceData.UPDATE_CUSTOMER_TS001_TC003.input.apiID,
            UpdateCustomerServiceData.UPDATE_CUSTOMER_TS001_TC003.input.config,
            UpdateCustomerServiceData.UPDATE_CUSTOMER_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateCustomerServiceData.UPDATE_CUSTOMER_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateCustomerServiceData.UPDATE_CUSTOMER_TS001_TC003.output.message)        
	});

});
