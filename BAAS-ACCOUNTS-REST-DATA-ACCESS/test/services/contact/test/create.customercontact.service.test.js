/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create customercontact service class
**/

/**
 * Importing all required modules here
 */

const createCustomerContactServiceData = require("../data/create.customercontact.service.data")
const createCustomerContactService = require("../../../../src/services/contact/create.customercontact.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateCustomerContactService = new createCustomerContactService();
const CreateCustomerContactServiceData = new createCustomerContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customercontact.ts.001] | FunctionPath : [src/services/contact/create.customercontact.service.js/createOneCustomerContact()]", () => {


	test(CreateCustomerContactServiceData.CREATE_ONE_CUSTOMERCONTACT_TS001_TC001.description, async () => {

        const output = await CreateCustomerContactService.createOneCustomerContact(
            CreateCustomerContactServiceData.CREATE_ONE_CUSTOMERCONTACT_TS001_TC001.input.databaseConnector,
            CreateCustomerContactServiceData.CREATE_ONE_CUSTOMERCONTACT_TS001_TC001.input.apiID,
            CreateCustomerContactServiceData.CREATE_ONE_CUSTOMERCONTACT_TS001_TC001.input.config,
            CreateCustomerContactServiceData.CREATE_ONE_CUSTOMERCONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateCustomerContactServiceData.CREATE_ONE_CUSTOMERCONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateCustomerContactServiceData.CREATE_ONE_CUSTOMERCONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateCustomerContactServiceData.CREATE_ONE_CUSTOMERCONTACT_TS001_TC001.output)[2])
	});



    test(CreateCustomerContactServiceData.CREATE_ONE_CUSTOMERCONTACT_TS001_TC002.description, async () => {

        const output = await CreateCustomerContactService.createOneCustomerContact(
            CreateCustomerContactServiceData.CREATE_ONE_CUSTOMERCONTACT_TS001_TC002.input.databaseConnector,
            CreateCustomerContactServiceData.CREATE_ONE_CUSTOMERCONTACT_TS001_TC002.input.apiID,
            CreateCustomerContactServiceData.CREATE_ONE_CUSTOMERCONTACT_TS001_TC002.input.config,
            CreateCustomerContactServiceData.CREATE_ONE_CUSTOMERCONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateCustomerContactServiceData.CREATE_ONE_CUSTOMERCONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(CreateCustomerContactServiceData.CREATE_ONE_CUSTOMERCONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(CreateCustomerContactServiceData.CREATE_ONE_CUSTOMERCONTACT_TS001_TC002.output.message)        
	});



    test(CreateCustomerContactServiceData.CREATE_ONE_CUSTOMERCONTACT_TS001_TC003.description, async () => {

        const output = await CreateCustomerContactService.createOneCustomerContact(
            CreateCustomerContactServiceData.CREATE_ONE_CUSTOMERCONTACT_TS001_TC003.input.databaseConnector,
            CreateCustomerContactServiceData.CREATE_ONE_CUSTOMERCONTACT_TS001_TC003.input.apiID,
            CreateCustomerContactServiceData.CREATE_ONE_CUSTOMERCONTACT_TS001_TC003.input.config,
            CreateCustomerContactServiceData.CREATE_ONE_CUSTOMERCONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateCustomerContactServiceData.CREATE_ONE_CUSTOMERCONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(CreateCustomerContactServiceData.CREATE_ONE_CUSTOMERCONTACT_TS001_TC003.output.message)        
	});

});