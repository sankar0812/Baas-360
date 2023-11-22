

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update tenantcontact service class
**/

/**
 * Importing all required modules here
 */

const updateTenantContactServiceData = require("../data/update.tenantcontact.service.data")
const updateTenantContactService = require("../../../../src/services/contact/update.tenantcontact.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateTenantContactService = new updateTenantContactService();
const UpdateTenantContactServiceData = new updateTenantContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.tenantcontact.ts.001] | FunctionPath : [src/services/contact/update.tenantcontact.service.js/updateTenantContact()]", () => {

	test(UpdateTenantContactServiceData.UPDATE_TENANTCONTACT_TS001_TC001.description, async () => {

        const output = await UpdateTenantContactService.updateTenantContact(
            UpdateTenantContactServiceData.UPDATE_TENANTCONTACT_TS001_TC001.input.databaseConnector,
            UpdateTenantContactServiceData.UPDATE_TENANTCONTACT_TS001_TC001.input.apiID,
            UpdateTenantContactServiceData.UPDATE_TENANTCONTACT_TS001_TC001.input.config,
            UpdateTenantContactServiceData.UPDATE_TENANTCONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateTenantContactServiceData.UPDATE_TENANTCONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateTenantContactServiceData.UPDATE_TENANTCONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateTenantContactServiceData.UPDATE_TENANTCONTACT_TS001_TC001.output)[2])
	});

    test(UpdateTenantContactServiceData.UPDATE_TENANTCONTACT_TS001_TC002.description, async () => {

        const output = await UpdateTenantContactService.updateTenantContact(
            UpdateTenantContactServiceData.UPDATE_TENANTCONTACT_TS001_TC002.input.databaseConnector,
            UpdateTenantContactServiceData.UPDATE_TENANTCONTACT_TS001_TC002.input.apiID,
            UpdateTenantContactServiceData.UPDATE_TENANTCONTACT_TS001_TC002.input.config,
            UpdateTenantContactServiceData.UPDATE_TENANTCONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateTenantContactServiceData.UPDATE_TENANTCONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateTenantContactServiceData.UPDATE_TENANTCONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateTenantContactServiceData.UPDATE_TENANTCONTACT_TS001_TC002.output.message)        
	});

    test(UpdateTenantContactServiceData.UPDATE_TENANTCONTACT_TS001_TC003.description, async () => {

        const output = await UpdateTenantContactService.updateTenantContact(
            UpdateTenantContactServiceData.UPDATE_TENANTCONTACT_TS001_TC003.input.databaseConnector,
            UpdateTenantContactServiceData.UPDATE_TENANTCONTACT_TS001_TC003.input.apiID,
            UpdateTenantContactServiceData.UPDATE_TENANTCONTACT_TS001_TC003.input.config,
            UpdateTenantContactServiceData.UPDATE_TENANTCONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateTenantContactServiceData.UPDATE_TENANTCONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateTenantContactServiceData.UPDATE_TENANTCONTACT_TS001_TC003.output.message)        
	});

});
