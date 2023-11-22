

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update vendorcontact service class
**/

/**
 * Importing all required modules here
 */

const updateVendorContactServiceData = require("../data/update.vendorcontact.service.data")
const updateVendorContactService = require("../../../../src/services/contact/update.vendorcontact.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateVendorContactService = new updateVendorContactService();
const UpdateVendorContactServiceData = new updateVendorContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorcontact.ts.001] | FunctionPath : [src/services/contact/update.vendorcontact.service.js/updateVendorContact()]", () => {

	test(UpdateVendorContactServiceData.UPDATE_VENDORCONTACT_TS001_TC001.description, async () => {

        const output = await UpdateVendorContactService.updateVendorContact(
            UpdateVendorContactServiceData.UPDATE_VENDORCONTACT_TS001_TC001.input.databaseConnector,
            UpdateVendorContactServiceData.UPDATE_VENDORCONTACT_TS001_TC001.input.apiID,
            UpdateVendorContactServiceData.UPDATE_VENDORCONTACT_TS001_TC001.input.config,
            UpdateVendorContactServiceData.UPDATE_VENDORCONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateVendorContactServiceData.UPDATE_VENDORCONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateVendorContactServiceData.UPDATE_VENDORCONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateVendorContactServiceData.UPDATE_VENDORCONTACT_TS001_TC001.output)[2])
	});

    test(UpdateVendorContactServiceData.UPDATE_VENDORCONTACT_TS001_TC002.description, async () => {

        const output = await UpdateVendorContactService.updateVendorContact(
            UpdateVendorContactServiceData.UPDATE_VENDORCONTACT_TS001_TC002.input.databaseConnector,
            UpdateVendorContactServiceData.UPDATE_VENDORCONTACT_TS001_TC002.input.apiID,
            UpdateVendorContactServiceData.UPDATE_VENDORCONTACT_TS001_TC002.input.config,
            UpdateVendorContactServiceData.UPDATE_VENDORCONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateVendorContactServiceData.UPDATE_VENDORCONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateVendorContactServiceData.UPDATE_VENDORCONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateVendorContactServiceData.UPDATE_VENDORCONTACT_TS001_TC002.output.message)        
	});

    test(UpdateVendorContactServiceData.UPDATE_VENDORCONTACT_TS001_TC003.description, async () => {

        const output = await UpdateVendorContactService.updateVendorContact(
            UpdateVendorContactServiceData.UPDATE_VENDORCONTACT_TS001_TC003.input.databaseConnector,
            UpdateVendorContactServiceData.UPDATE_VENDORCONTACT_TS001_TC003.input.apiID,
            UpdateVendorContactServiceData.UPDATE_VENDORCONTACT_TS001_TC003.input.config,
            UpdateVendorContactServiceData.UPDATE_VENDORCONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateVendorContactServiceData.UPDATE_VENDORCONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateVendorContactServiceData.UPDATE_VENDORCONTACT_TS001_TC003.output.message)        
	});

});
