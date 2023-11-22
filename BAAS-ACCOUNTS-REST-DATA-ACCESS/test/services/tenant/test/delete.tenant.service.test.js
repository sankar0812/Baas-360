/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete tenant service class
**/

/**
 * Importing all required modules here
 */

const deleteTenantServiceData = require("../data/delete.tenant.service.data")
const deleteTenantService = require("../../../../src/services/tenant/delete.tenant.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteTenantService = new deleteTenantService();
const DeleteTenantServiceData = new deleteTenantServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.tenant.ts.001] | FunctionPath : [src/services/tenant/delete.tenant.service.js/deleteOneTenant()]", () => {


	test(DeleteTenantServiceData.DELETE_ONE_TENANT_TS001_TC001.description, async () => {

        const output = await DeleteTenantService.deleteOneTenant(
            DeleteTenantServiceData.DELETE_ONE_TENANT_TS001_TC001.input.databaseConnector,
            DeleteTenantServiceData.DELETE_ONE_TENANT_TS001_TC001.input.apiID,
            DeleteTenantServiceData.DELETE_ONE_TENANT_TS001_TC001.input.config,
            DeleteTenantServiceData.DELETE_ONE_TENANT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteTenantServiceData.DELETE_ONE_TENANT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteTenantServiceData.DELETE_ONE_TENANT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteTenantServiceData.DELETE_ONE_TENANT_TS001_TC001.output)[2])
	});



    test(DeleteTenantServiceData.DELETE_ONE_TENANT_TS001_TC002.description, async () => {

        const output = await DeleteTenantService.deleteOneTenant(
            DeleteTenantServiceData.DELETE_ONE_TENANT_TS001_TC002.input.databaseConnector,
            DeleteTenantServiceData.DELETE_ONE_TENANT_TS001_TC002.input.apiID,
            DeleteTenantServiceData.DELETE_ONE_TENANT_TS001_TC002.input.config,
            DeleteTenantServiceData.DELETE_ONE_TENANT_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteTenantServiceData.DELETE_ONE_TENANT_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteTenantServiceData.DELETE_ONE_TENANT_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteTenantServiceData.DELETE_ONE_TENANT_TS001_TC002.output.message)        
	});



    test(DeleteTenantServiceData.DELETE_ONE_TENANT_TS001_TC003.description, async () => {

        const output = await DeleteTenantService.deleteOneTenant(
            DeleteTenantServiceData.DELETE_ONE_TENANT_TS001_TC003.input.databaseConnector,
            DeleteTenantServiceData.DELETE_ONE_TENANT_TS001_TC003.input.apiID,
            DeleteTenantServiceData.DELETE_ONE_TENANT_TS001_TC003.input.config,
            DeleteTenantServiceData.DELETE_ONE_TENANT_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteTenantServiceData.DELETE_ONE_TENANT_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteTenantServiceData.DELETE_ONE_TENANT_TS001_TC003.output.message)        
	});

});
