/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete vendorcontact service class
**/

/**
 * Importing all required modules here
 */

const deleteVendorContactServiceData = require("../data/delete.vendorcontact.service.data")
const deleteVendorContactService = require("../../../../src/services/contact/delete.vendorcontact.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteVendorContactService = new deleteVendorContactService();
const DeleteVendorContactServiceData = new deleteVendorContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorcontact.ts.001] | FunctionPath : [src/services/contact/delete.vendorcontact.service.js/deleteOneVendorContact()]", () => {


	test(DeleteVendorContactServiceData.DELETE_ONE_VENDORCONTACT_TS001_TC001.description, async () => {

        const output = await DeleteVendorContactService.deleteOneVendorContact(
            DeleteVendorContactServiceData.DELETE_ONE_VENDORCONTACT_TS001_TC001.input.databaseConnector,
            DeleteVendorContactServiceData.DELETE_ONE_VENDORCONTACT_TS001_TC001.input.apiID,
            DeleteVendorContactServiceData.DELETE_ONE_VENDORCONTACT_TS001_TC001.input.config,
            DeleteVendorContactServiceData.DELETE_ONE_VENDORCONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteVendorContactServiceData.DELETE_ONE_VENDORCONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteVendorContactServiceData.DELETE_ONE_VENDORCONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteVendorContactServiceData.DELETE_ONE_VENDORCONTACT_TS001_TC001.output)[2])
	});



    test(DeleteVendorContactServiceData.DELETE_ONE_VENDORCONTACT_TS001_TC002.description, async () => {

        const output = await DeleteVendorContactService.deleteOneVendorContact(
            DeleteVendorContactServiceData.DELETE_ONE_VENDORCONTACT_TS001_TC002.input.databaseConnector,
            DeleteVendorContactServiceData.DELETE_ONE_VENDORCONTACT_TS001_TC002.input.apiID,
            DeleteVendorContactServiceData.DELETE_ONE_VENDORCONTACT_TS001_TC002.input.config,
            DeleteVendorContactServiceData.DELETE_ONE_VENDORCONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteVendorContactServiceData.DELETE_ONE_VENDORCONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteVendorContactServiceData.DELETE_ONE_VENDORCONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteVendorContactServiceData.DELETE_ONE_VENDORCONTACT_TS001_TC002.output.message)        
	});



    test(DeleteVendorContactServiceData.DELETE_ONE_VENDORCONTACT_TS001_TC003.description, async () => {

        const output = await DeleteVendorContactService.deleteOneVendorContact(
            DeleteVendorContactServiceData.DELETE_ONE_VENDORCONTACT_TS001_TC003.input.databaseConnector,
            DeleteVendorContactServiceData.DELETE_ONE_VENDORCONTACT_TS001_TC003.input.apiID,
            DeleteVendorContactServiceData.DELETE_ONE_VENDORCONTACT_TS001_TC003.input.config,
            DeleteVendorContactServiceData.DELETE_ONE_VENDORCONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteVendorContactServiceData.DELETE_ONE_VENDORCONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteVendorContactServiceData.DELETE_ONE_VENDORCONTACT_TS001_TC003.output.message)        
	});

});
