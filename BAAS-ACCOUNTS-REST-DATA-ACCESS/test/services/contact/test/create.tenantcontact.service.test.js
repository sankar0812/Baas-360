/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create tenantcontact service class
**/

/**
 * Importing all required modules here
 */

const createTenantContactServiceData = require("../data/create.tenantcontact.service.data")
const createTenantContactService = require("../../../../src/services/contact/create.tenantcontact.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateTenantContactService = new createTenantContactService();
const CreateTenantContactServiceData = new createTenantContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.tenantcontact.ts.001] | FunctionPath : [src/services/contact/create.tenantcontact.service.js/createOneTenantContact()]", () => {


	test(CreateTenantContactServiceData.CREATE_ONE_TENANTCONTACT_TS001_TC001.description, async () => {

        const output = await CreateTenantContactService.createOneTenantContact(
            CreateTenantContactServiceData.CREATE_ONE_TENANTCONTACT_TS001_TC001.input.databaseConnector,
            CreateTenantContactServiceData.CREATE_ONE_TENANTCONTACT_TS001_TC001.input.apiID,
            CreateTenantContactServiceData.CREATE_ONE_TENANTCONTACT_TS001_TC001.input.config,
            CreateTenantContactServiceData.CREATE_ONE_TENANTCONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateTenantContactServiceData.CREATE_ONE_TENANTCONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateTenantContactServiceData.CREATE_ONE_TENANTCONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateTenantContactServiceData.CREATE_ONE_TENANTCONTACT_TS001_TC001.output)[2])
	});



    test(CreateTenantContactServiceData.CREATE_ONE_TENANTCONTACT_TS001_TC002.description, async () => {

        const output = await CreateTenantContactService.createOneTenantContact(
            CreateTenantContactServiceData.CREATE_ONE_TENANTCONTACT_TS001_TC002.input.databaseConnector,
            CreateTenantContactServiceData.CREATE_ONE_TENANTCONTACT_TS001_TC002.input.apiID,
            CreateTenantContactServiceData.CREATE_ONE_TENANTCONTACT_TS001_TC002.input.config,
            CreateTenantContactServiceData.CREATE_ONE_TENANTCONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateTenantContactServiceData.CREATE_ONE_TENANTCONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(CreateTenantContactServiceData.CREATE_ONE_TENANTCONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(CreateTenantContactServiceData.CREATE_ONE_TENANTCONTACT_TS001_TC002.output.message)        
	});



    test(CreateTenantContactServiceData.CREATE_ONE_TENANTCONTACT_TS001_TC003.description, async () => {

        const output = await CreateTenantContactService.createOneTenantContact(
            CreateTenantContactServiceData.CREATE_ONE_TENANTCONTACT_TS001_TC003.input.databaseConnector,
            CreateTenantContactServiceData.CREATE_ONE_TENANTCONTACT_TS001_TC003.input.apiID,
            CreateTenantContactServiceData.CREATE_ONE_TENANTCONTACT_TS001_TC003.input.config,
            CreateTenantContactServiceData.CREATE_ONE_TENANTCONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateTenantContactServiceData.CREATE_ONE_TENANTCONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(CreateTenantContactServiceData.CREATE_ONE_TENANTCONTACT_TS001_TC003.output.message)        
	});

});