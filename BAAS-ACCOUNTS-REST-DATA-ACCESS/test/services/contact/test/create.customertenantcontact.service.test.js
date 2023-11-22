/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create customertenantcontact service class
**/

/**
 * Importing all required modules here
 */

const createCustomerTenantContactServiceData = require("../data/create.customertenantcontact.service.data")
const createCustomerTenantContactService = require("../../../../src/services/contact/create.customertenantcontact.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateCustomerTenantContactService = new createCustomerTenantContactService();
const CreateCustomerTenantContactServiceData = new createCustomerTenantContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customertenantcontact.ts.001] | FunctionPath : [src/services/contact/create.customertenantcontact.service.js/createOneCustomerTenantContact()]", () => {


	test(CreateCustomerTenantContactServiceData.CREATE_ONE_CUSTOMERTENANTCONTACT_TS001_TC001.description, async () => {

        const output = await CreateCustomerTenantContactService.createOneCustomerTenantContact(
            CreateCustomerTenantContactServiceData.CREATE_ONE_CUSTOMERTENANTCONTACT_TS001_TC001.input.databaseConnector,
            CreateCustomerTenantContactServiceData.CREATE_ONE_CUSTOMERTENANTCONTACT_TS001_TC001.input.apiID,
            CreateCustomerTenantContactServiceData.CREATE_ONE_CUSTOMERTENANTCONTACT_TS001_TC001.input.config,
            CreateCustomerTenantContactServiceData.CREATE_ONE_CUSTOMERTENANTCONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateCustomerTenantContactServiceData.CREATE_ONE_CUSTOMERTENANTCONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateCustomerTenantContactServiceData.CREATE_ONE_CUSTOMERTENANTCONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateCustomerTenantContactServiceData.CREATE_ONE_CUSTOMERTENANTCONTACT_TS001_TC001.output)[2])
	});



    test(CreateCustomerTenantContactServiceData.CREATE_ONE_CUSTOMERTENANTCONTACT_TS001_TC002.description, async () => {

        const output = await CreateCustomerTenantContactService.createOneCustomerTenantContact(
            CreateCustomerTenantContactServiceData.CREATE_ONE_CUSTOMERTENANTCONTACT_TS001_TC002.input.databaseConnector,
            CreateCustomerTenantContactServiceData.CREATE_ONE_CUSTOMERTENANTCONTACT_TS001_TC002.input.apiID,
            CreateCustomerTenantContactServiceData.CREATE_ONE_CUSTOMERTENANTCONTACT_TS001_TC002.input.config,
            CreateCustomerTenantContactServiceData.CREATE_ONE_CUSTOMERTENANTCONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateCustomerTenantContactServiceData.CREATE_ONE_CUSTOMERTENANTCONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(CreateCustomerTenantContactServiceData.CREATE_ONE_CUSTOMERTENANTCONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(CreateCustomerTenantContactServiceData.CREATE_ONE_CUSTOMERTENANTCONTACT_TS001_TC002.output.message)        
	});



    test(CreateCustomerTenantContactServiceData.CREATE_ONE_CUSTOMERTENANTCONTACT_TS001_TC003.description, async () => {

        const output = await CreateCustomerTenantContactService.createOneCustomerTenantContact(
            CreateCustomerTenantContactServiceData.CREATE_ONE_CUSTOMERTENANTCONTACT_TS001_TC003.input.databaseConnector,
            CreateCustomerTenantContactServiceData.CREATE_ONE_CUSTOMERTENANTCONTACT_TS001_TC003.input.apiID,
            CreateCustomerTenantContactServiceData.CREATE_ONE_CUSTOMERTENANTCONTACT_TS001_TC003.input.config,
            CreateCustomerTenantContactServiceData.CREATE_ONE_CUSTOMERTENANTCONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateCustomerTenantContactServiceData.CREATE_ONE_CUSTOMERTENANTCONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(CreateCustomerTenantContactServiceData.CREATE_ONE_CUSTOMERTENANTCONTACT_TS001_TC003.output.message)        
	});

});