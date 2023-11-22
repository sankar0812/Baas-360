

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update vendortenantcontact service class
**/

/**
 * Importing all required modules here
 */

const updateVendorTenantContactServiceData = require("../data/update.vendortenantcontact.service.data")
const updateVendorTenantContactService = require("../../../../src/services/contact/update.vendortenantcontact.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateVendorTenantContactService = new updateVendorTenantContactService();
const UpdateVendorTenantContactServiceData = new updateVendorTenantContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendortenantcontact.ts.001] | FunctionPath : [src/services/contact/update.vendortenantcontact.service.js/updateVendorTenantContact()]", () => {

	test(UpdateVendorTenantContactServiceData.UPDATE_VENDORTENANTCONTACT_TS001_TC001.description, async () => {

        const output = await UpdateVendorTenantContactService.updateVendorTenantContact(
            UpdateVendorTenantContactServiceData.UPDATE_VENDORTENANTCONTACT_TS001_TC001.input.databaseConnector,
            UpdateVendorTenantContactServiceData.UPDATE_VENDORTENANTCONTACT_TS001_TC001.input.apiID,
            UpdateVendorTenantContactServiceData.UPDATE_VENDORTENANTCONTACT_TS001_TC001.input.config,
            UpdateVendorTenantContactServiceData.UPDATE_VENDORTENANTCONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateVendorTenantContactServiceData.UPDATE_VENDORTENANTCONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateVendorTenantContactServiceData.UPDATE_VENDORTENANTCONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateVendorTenantContactServiceData.UPDATE_VENDORTENANTCONTACT_TS001_TC001.output)[2])
	});

    test(UpdateVendorTenantContactServiceData.UPDATE_VENDORTENANTCONTACT_TS001_TC002.description, async () => {

        const output = await UpdateVendorTenantContactService.updateVendorTenantContact(
            UpdateVendorTenantContactServiceData.UPDATE_VENDORTENANTCONTACT_TS001_TC002.input.databaseConnector,
            UpdateVendorTenantContactServiceData.UPDATE_VENDORTENANTCONTACT_TS001_TC002.input.apiID,
            UpdateVendorTenantContactServiceData.UPDATE_VENDORTENANTCONTACT_TS001_TC002.input.config,
            UpdateVendorTenantContactServiceData.UPDATE_VENDORTENANTCONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateVendorTenantContactServiceData.UPDATE_VENDORTENANTCONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateVendorTenantContactServiceData.UPDATE_VENDORTENANTCONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateVendorTenantContactServiceData.UPDATE_VENDORTENANTCONTACT_TS001_TC002.output.message)        
	});

    test(UpdateVendorTenantContactServiceData.UPDATE_VENDORTENANTCONTACT_TS001_TC003.description, async () => {

        const output = await UpdateVendorTenantContactService.updateVendorTenantContact(
            UpdateVendorTenantContactServiceData.UPDATE_VENDORTENANTCONTACT_TS001_TC003.input.databaseConnector,
            UpdateVendorTenantContactServiceData.UPDATE_VENDORTENANTCONTACT_TS001_TC003.input.apiID,
            UpdateVendorTenantContactServiceData.UPDATE_VENDORTENANTCONTACT_TS001_TC003.input.config,
            UpdateVendorTenantContactServiceData.UPDATE_VENDORTENANTCONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateVendorTenantContactServiceData.UPDATE_VENDORTENANTCONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateVendorTenantContactServiceData.UPDATE_VENDORTENANTCONTACT_TS001_TC003.output.message)        
	});

});
