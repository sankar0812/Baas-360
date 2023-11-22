/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create tenant service class
**/

/**
 * Importing all required modules here
 */

const createTenantServiceData = require("../data/create.tenant.service.data")
const createTenantService = require("../../../../src/services/tenant/create.tenant.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateTenantService = new createTenantService();
const CreateTenantServiceData = new createTenantServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.tenant.ts.001] | FunctionPath : [src/services/tenant/create.tenant.service.js/createOneTenant()]", () => {


	test(CreateTenantServiceData.CREATE_ONE_TENANT_TS001_TC001.description, async () => {

        const output = await CreateTenantService.createOneTenant(
            CreateTenantServiceData.CREATE_ONE_TENANT_TS001_TC001.input.databaseConnector,
            CreateTenantServiceData.CREATE_ONE_TENANT_TS001_TC001.input.apiID,
            CreateTenantServiceData.CREATE_ONE_TENANT_TS001_TC001.input.config,
            CreateTenantServiceData.CREATE_ONE_TENANT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateTenantServiceData.CREATE_ONE_TENANT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateTenantServiceData.CREATE_ONE_TENANT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateTenantServiceData.CREATE_ONE_TENANT_TS001_TC001.output)[2])
	});



    test(CreateTenantServiceData.CREATE_ONE_TENANT_TS001_TC002.description, async () => {

        const output = await CreateTenantService.createOneTenant(
            CreateTenantServiceData.CREATE_ONE_TENANT_TS001_TC002.input.databaseConnector,
            CreateTenantServiceData.CREATE_ONE_TENANT_TS001_TC002.input.apiID,
            CreateTenantServiceData.CREATE_ONE_TENANT_TS001_TC002.input.config,
            CreateTenantServiceData.CREATE_ONE_TENANT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateTenantServiceData.CREATE_ONE_TENANT_TS001_TC002.output.data)
        expect(output.status).toBe(CreateTenantServiceData.CREATE_ONE_TENANT_TS001_TC002.output.status)
        expect(output.message).toBe(CreateTenantServiceData.CREATE_ONE_TENANT_TS001_TC002.output.message)        
	});



    test(CreateTenantServiceData.CREATE_ONE_TENANT_TS001_TC003.description, async () => {

        const output = await CreateTenantService.createOneTenant(
            CreateTenantServiceData.CREATE_ONE_TENANT_TS001_TC003.input.databaseConnector,
            CreateTenantServiceData.CREATE_ONE_TENANT_TS001_TC003.input.apiID,
            CreateTenantServiceData.CREATE_ONE_TENANT_TS001_TC003.input.config,
            CreateTenantServiceData.CREATE_ONE_TENANT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateTenantServiceData.CREATE_ONE_TENANT_TS001_TC003.output.status)
        expect(output.message).toBe(CreateTenantServiceData.CREATE_ONE_TENANT_TS001_TC003.output.message)        
	});

});