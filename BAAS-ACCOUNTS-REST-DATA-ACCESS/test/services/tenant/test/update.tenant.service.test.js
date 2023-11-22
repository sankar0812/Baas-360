

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update tenant service class
**/

/**
 * Importing all required modules here
 */

const updateTenantServiceData = require("../data/update.tenant.service.data")
const updateTenantService = require("../../../../src/services/tenant/update.tenant.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateTenantService = new updateTenantService();
const UpdateTenantServiceData = new updateTenantServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.tenant.ts.001] | FunctionPath : [src/services/tenant/update.tenant.service.js/updateTenant()]", () => {

	test(UpdateTenantServiceData.UPDATE_TENANT_TS001_TC001.description, async () => {

        const output = await UpdateTenantService.updateTenant(
            UpdateTenantServiceData.UPDATE_TENANT_TS001_TC001.input.databaseConnector,
            UpdateTenantServiceData.UPDATE_TENANT_TS001_TC001.input.apiID,
            UpdateTenantServiceData.UPDATE_TENANT_TS001_TC001.input.config,
            UpdateTenantServiceData.UPDATE_TENANT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateTenantServiceData.UPDATE_TENANT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateTenantServiceData.UPDATE_TENANT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateTenantServiceData.UPDATE_TENANT_TS001_TC001.output)[2])
	});

    test(UpdateTenantServiceData.UPDATE_TENANT_TS001_TC002.description, async () => {

        const output = await UpdateTenantService.updateTenant(
            UpdateTenantServiceData.UPDATE_TENANT_TS001_TC002.input.databaseConnector,
            UpdateTenantServiceData.UPDATE_TENANT_TS001_TC002.input.apiID,
            UpdateTenantServiceData.UPDATE_TENANT_TS001_TC002.input.config,
            UpdateTenantServiceData.UPDATE_TENANT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateTenantServiceData.UPDATE_TENANT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateTenantServiceData.UPDATE_TENANT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateTenantServiceData.UPDATE_TENANT_TS001_TC002.output.message)        
	});

    test(UpdateTenantServiceData.UPDATE_TENANT_TS001_TC003.description, async () => {

        const output = await UpdateTenantService.updateTenant(
            UpdateTenantServiceData.UPDATE_TENANT_TS001_TC003.input.databaseConnector,
            UpdateTenantServiceData.UPDATE_TENANT_TS001_TC003.input.apiID,
            UpdateTenantServiceData.UPDATE_TENANT_TS001_TC003.input.config,
            UpdateTenantServiceData.UPDATE_TENANT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateTenantServiceData.UPDATE_TENANT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateTenantServiceData.UPDATE_TENANT_TS001_TC003.output.message)        
	});

});
