/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create customeraccountcard service class
**/

/**
 * Importing all required modules here
 */

const createCustomerAccountCardServiceData = require("../data/create.customeraccountcard.service.data")
const createCustomerAccountCardService = require("../../../../src/services/customer/create.customeraccountcard.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateCustomerAccountCardService = new createCustomerAccountCardService();
const CreateCustomerAccountCardServiceData = new createCustomerAccountCardServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customeraccountcard.ts.001] | FunctionPath : [src/services/customer/create.customeraccountcard.service.js/createOneCustomerAccountCard()]", () => {


	test(CreateCustomerAccountCardServiceData.CREATE_ONE_CUSTOMERACCOUNTCARD_TS001_TC001.description, async () => {

        const output = await CreateCustomerAccountCardService.createOneCustomerAccountCard(
            CreateCustomerAccountCardServiceData.CREATE_ONE_CUSTOMERACCOUNTCARD_TS001_TC001.input.databaseConnector,
            CreateCustomerAccountCardServiceData.CREATE_ONE_CUSTOMERACCOUNTCARD_TS001_TC001.input.apiID,
            CreateCustomerAccountCardServiceData.CREATE_ONE_CUSTOMERACCOUNTCARD_TS001_TC001.input.config,
            CreateCustomerAccountCardServiceData.CREATE_ONE_CUSTOMERACCOUNTCARD_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateCustomerAccountCardServiceData.CREATE_ONE_CUSTOMERACCOUNTCARD_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateCustomerAccountCardServiceData.CREATE_ONE_CUSTOMERACCOUNTCARD_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateCustomerAccountCardServiceData.CREATE_ONE_CUSTOMERACCOUNTCARD_TS001_TC001.output)[2])
	});



    test(CreateCustomerAccountCardServiceData.CREATE_ONE_CUSTOMERACCOUNTCARD_TS001_TC002.description, async () => {

        const output = await CreateCustomerAccountCardService.createOneCustomerAccountCard(
            CreateCustomerAccountCardServiceData.CREATE_ONE_CUSTOMERACCOUNTCARD_TS001_TC002.input.databaseConnector,
            CreateCustomerAccountCardServiceData.CREATE_ONE_CUSTOMERACCOUNTCARD_TS001_TC002.input.apiID,
            CreateCustomerAccountCardServiceData.CREATE_ONE_CUSTOMERACCOUNTCARD_TS001_TC002.input.config,
            CreateCustomerAccountCardServiceData.CREATE_ONE_CUSTOMERACCOUNTCARD_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateCustomerAccountCardServiceData.CREATE_ONE_CUSTOMERACCOUNTCARD_TS001_TC002.output.data)
        expect(output.status).toBe(CreateCustomerAccountCardServiceData.CREATE_ONE_CUSTOMERACCOUNTCARD_TS001_TC002.output.status)
        expect(output.message).toBe(CreateCustomerAccountCardServiceData.CREATE_ONE_CUSTOMERACCOUNTCARD_TS001_TC002.output.message)        
	});



    test(CreateCustomerAccountCardServiceData.CREATE_ONE_CUSTOMERACCOUNTCARD_TS001_TC003.description, async () => {

        const output = await CreateCustomerAccountCardService.createOneCustomerAccountCard(
            CreateCustomerAccountCardServiceData.CREATE_ONE_CUSTOMERACCOUNTCARD_TS001_TC003.input.databaseConnector,
            CreateCustomerAccountCardServiceData.CREATE_ONE_CUSTOMERACCOUNTCARD_TS001_TC003.input.apiID,
            CreateCustomerAccountCardServiceData.CREATE_ONE_CUSTOMERACCOUNTCARD_TS001_TC003.input.config,
            CreateCustomerAccountCardServiceData.CREATE_ONE_CUSTOMERACCOUNTCARD_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateCustomerAccountCardServiceData.CREATE_ONE_CUSTOMERACCOUNTCARD_TS001_TC003.output.status)
        expect(output.message).toBe(CreateCustomerAccountCardServiceData.CREATE_ONE_CUSTOMERACCOUNTCARD_TS001_TC003.output.message)        
	});

});