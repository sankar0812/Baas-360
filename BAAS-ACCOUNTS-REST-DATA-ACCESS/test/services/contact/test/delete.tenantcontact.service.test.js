/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete tenantcontact service class
**/

/**
 * Importing all required modules here
 */

const deleteTenantContactServiceData = require("../data/delete.tenantcontact.service.data")
const deleteTenantContactService = require("../../../../src/services/contact/delete.tenantcontact.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteTenantContactService = new deleteTenantContactService();
const DeleteTenantContactServiceData = new deleteTenantContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.tenantcontact.ts.001] | FunctionPath : [src/services/contact/delete.tenantcontact.service.js/deleteOneTenantContact()]", () => {


	test(DeleteTenantContactServiceData.DELETE_ONE_TENANTCONTACT_TS001_TC001.description, async () => {

        const output = await DeleteTenantContactService.deleteOneTenantContact(
            DeleteTenantContactServiceData.DELETE_ONE_TENANTCONTACT_TS001_TC001.input.databaseConnector,
            DeleteTenantContactServiceData.DELETE_ONE_TENANTCONTACT_TS001_TC001.input.apiID,
            DeleteTenantContactServiceData.DELETE_ONE_TENANTCONTACT_TS001_TC001.input.config,
            DeleteTenantContactServiceData.DELETE_ONE_TENANTCONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteTenantContactServiceData.DELETE_ONE_TENANTCONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteTenantContactServiceData.DELETE_ONE_TENANTCONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteTenantContactServiceData.DELETE_ONE_TENANTCONTACT_TS001_TC001.output)[2])
	});



    test(DeleteTenantContactServiceData.DELETE_ONE_TENANTCONTACT_TS001_TC002.description, async () => {

        const output = await DeleteTenantContactService.deleteOneTenantContact(
            DeleteTenantContactServiceData.DELETE_ONE_TENANTCONTACT_TS001_TC002.input.databaseConnector,
            DeleteTenantContactServiceData.DELETE_ONE_TENANTCONTACT_TS001_TC002.input.apiID,
            DeleteTenantContactServiceData.DELETE_ONE_TENANTCONTACT_TS001_TC002.input.config,
            DeleteTenantContactServiceData.DELETE_ONE_TENANTCONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteTenantContactServiceData.DELETE_ONE_TENANTCONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteTenantContactServiceData.DELETE_ONE_TENANTCONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteTenantContactServiceData.DELETE_ONE_TENANTCONTACT_TS001_TC002.output.message)        
	});



    test(DeleteTenantContactServiceData.DELETE_ONE_TENANTCONTACT_TS001_TC003.description, async () => {

        const output = await DeleteTenantContactService.deleteOneTenantContact(
            DeleteTenantContactServiceData.DELETE_ONE_TENANTCONTACT_TS001_TC003.input.databaseConnector,
            DeleteTenantContactServiceData.DELETE_ONE_TENANTCONTACT_TS001_TC003.input.apiID,
            DeleteTenantContactServiceData.DELETE_ONE_TENANTCONTACT_TS001_TC003.input.config,
            DeleteTenantContactServiceData.DELETE_ONE_TENANTCONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteTenantContactServiceData.DELETE_ONE_TENANTCONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteTenantContactServiceData.DELETE_ONE_TENANTCONTACT_TS001_TC003.output.message)        
	});

});
