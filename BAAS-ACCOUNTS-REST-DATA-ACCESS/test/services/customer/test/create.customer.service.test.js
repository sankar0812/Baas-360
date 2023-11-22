/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create customer service class
**/

/**
 * Importing all required modules here
 */

const createCustomerServiceData = require("../data/create.customer.service.data")
const createCustomerService = require("../../../../src/services/customer/create.customer.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateCustomerService = new createCustomerService();
const CreateCustomerServiceData = new createCustomerServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customer.ts.001] | FunctionPath : [src/services/customer/create.customer.service.js/createOneCustomer()]", () => {


	test(CreateCustomerServiceData.CREATE_ONE_CUSTOMER_TS001_TC001.description, async () => {

        const output = await CreateCustomerService.createOneCustomer(
            CreateCustomerServiceData.CREATE_ONE_CUSTOMER_TS001_TC001.input.databaseConnector,
            CreateCustomerServiceData.CREATE_ONE_CUSTOMER_TS001_TC001.input.apiID,
            CreateCustomerServiceData.CREATE_ONE_CUSTOMER_TS001_TC001.input.config,
            CreateCustomerServiceData.CREATE_ONE_CUSTOMER_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateCustomerServiceData.CREATE_ONE_CUSTOMER_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateCustomerServiceData.CREATE_ONE_CUSTOMER_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateCustomerServiceData.CREATE_ONE_CUSTOMER_TS001_TC001.output)[2])
	});



    test(CreateCustomerServiceData.CREATE_ONE_CUSTOMER_TS001_TC002.description, async () => {

        const output = await CreateCustomerService.createOneCustomer(
            CreateCustomerServiceData.CREATE_ONE_CUSTOMER_TS001_TC002.input.databaseConnector,
            CreateCustomerServiceData.CREATE_ONE_CUSTOMER_TS001_TC002.input.apiID,
            CreateCustomerServiceData.CREATE_ONE_CUSTOMER_TS001_TC002.input.config,
            CreateCustomerServiceData.CREATE_ONE_CUSTOMER_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateCustomerServiceData.CREATE_ONE_CUSTOMER_TS001_TC002.output.data)
        expect(output.status).toBe(CreateCustomerServiceData.CREATE_ONE_CUSTOMER_TS001_TC002.output.status)
        expect(output.message).toBe(CreateCustomerServiceData.CREATE_ONE_CUSTOMER_TS001_TC002.output.message)        
	});



    test(CreateCustomerServiceData.CREATE_ONE_CUSTOMER_TS001_TC003.description, async () => {

        const output = await CreateCustomerService.createOneCustomer(
            CreateCustomerServiceData.CREATE_ONE_CUSTOMER_TS001_TC003.input.databaseConnector,
            CreateCustomerServiceData.CREATE_ONE_CUSTOMER_TS001_TC003.input.apiID,
            CreateCustomerServiceData.CREATE_ONE_CUSTOMER_TS001_TC003.input.config,
            CreateCustomerServiceData.CREATE_ONE_CUSTOMER_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateCustomerServiceData.CREATE_ONE_CUSTOMER_TS001_TC003.output.status)
        expect(output.message).toBe(CreateCustomerServiceData.CREATE_ONE_CUSTOMER_TS001_TC003.output.message)        
	});

});