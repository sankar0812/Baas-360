/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete vendortenantcontact service class
**/

/**
 * Importing all required modules here
 */

const deleteVendorTenantContactServiceData = require("../data/delete.vendortenantcontact.service.data")
const deleteVendorTenantContactService = require("../../../../src/services/contact/delete.vendortenantcontact.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteVendorTenantContactService = new deleteVendorTenantContactService();
const DeleteVendorTenantContactServiceData = new deleteVendorTenantContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendortenantcontact.ts.001] | FunctionPath : [src/services/contact/delete.vendortenantcontact.service.js/deleteOneVendorTenantContact()]", () => {


	test(DeleteVendorTenantContactServiceData.DELETE_ONE_VENDORTENANTCONTACT_TS001_TC001.description, async () => {

        const output = await DeleteVendorTenantContactService.deleteOneVendorTenantContact(
            DeleteVendorTenantContactServiceData.DELETE_ONE_VENDORTENANTCONTACT_TS001_TC001.input.databaseConnector,
            DeleteVendorTenantContactServiceData.DELETE_ONE_VENDORTENANTCONTACT_TS001_TC001.input.apiID,
            DeleteVendorTenantContactServiceData.DELETE_ONE_VENDORTENANTCONTACT_TS001_TC001.input.config,
            DeleteVendorTenantContactServiceData.DELETE_ONE_VENDORTENANTCONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteVendorTenantContactServiceData.DELETE_ONE_VENDORTENANTCONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteVendorTenantContactServiceData.DELETE_ONE_VENDORTENANTCONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteVendorTenantContactServiceData.DELETE_ONE_VENDORTENANTCONTACT_TS001_TC001.output)[2])
	});



    test(DeleteVendorTenantContactServiceData.DELETE_ONE_VENDORTENANTCONTACT_TS001_TC002.description, async () => {

        const output = await DeleteVendorTenantContactService.deleteOneVendorTenantContact(
            DeleteVendorTenantContactServiceData.DELETE_ONE_VENDORTENANTCONTACT_TS001_TC002.input.databaseConnector,
            DeleteVendorTenantContactServiceData.DELETE_ONE_VENDORTENANTCONTACT_TS001_TC002.input.apiID,
            DeleteVendorTenantContactServiceData.DELETE_ONE_VENDORTENANTCONTACT_TS001_TC002.input.config,
            DeleteVendorTenantContactServiceData.DELETE_ONE_VENDORTENANTCONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteVendorTenantContactServiceData.DELETE_ONE_VENDORTENANTCONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteVendorTenantContactServiceData.DELETE_ONE_VENDORTENANTCONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteVendorTenantContactServiceData.DELETE_ONE_VENDORTENANTCONTACT_TS001_TC002.output.message)        
	});



    test(DeleteVendorTenantContactServiceData.DELETE_ONE_VENDORTENANTCONTACT_TS001_TC003.description, async () => {

        const output = await DeleteVendorTenantContactService.deleteOneVendorTenantContact(
            DeleteVendorTenantContactServiceData.DELETE_ONE_VENDORTENANTCONTACT_TS001_TC003.input.databaseConnector,
            DeleteVendorTenantContactServiceData.DELETE_ONE_VENDORTENANTCONTACT_TS001_TC003.input.apiID,
            DeleteVendorTenantContactServiceData.DELETE_ONE_VENDORTENANTCONTACT_TS001_TC003.input.config,
            DeleteVendorTenantContactServiceData.DELETE_ONE_VENDORTENANTCONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteVendorTenantContactServiceData.DELETE_ONE_VENDORTENANTCONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteVendorTenantContactServiceData.DELETE_ONE_VENDORTENANTCONTACT_TS001_TC003.output.message)        
	});

});
