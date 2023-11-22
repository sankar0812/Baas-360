

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update vendor service class
**/

/**
 * Importing all required modules here
 */

const updateVendorServiceData = require("../data/update.vendor.service.data")
const updateVendorService = require("../../../../src/services/vendor/update.vendor.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateVendorService = new updateVendorService();
const UpdateVendorServiceData = new updateVendorServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendor.ts.001] | FunctionPath : [src/services/vendor/update.vendor.service.js/updateVendor()]", () => {

	test(UpdateVendorServiceData.UPDATE_VENDOR_TS001_TC001.description, async () => {

        const output = await UpdateVendorService.updateVendor(
            UpdateVendorServiceData.UPDATE_VENDOR_TS001_TC001.input.databaseConnector,
            UpdateVendorServiceData.UPDATE_VENDOR_TS001_TC001.input.apiID,
            UpdateVendorServiceData.UPDATE_VENDOR_TS001_TC001.input.config,
            UpdateVendorServiceData.UPDATE_VENDOR_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateVendorServiceData.UPDATE_VENDOR_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateVendorServiceData.UPDATE_VENDOR_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateVendorServiceData.UPDATE_VENDOR_TS001_TC001.output)[2])
	});

    test(UpdateVendorServiceData.UPDATE_VENDOR_TS001_TC002.description, async () => {

        const output = await UpdateVendorService.updateVendor(
            UpdateVendorServiceData.UPDATE_VENDOR_TS001_TC002.input.databaseConnector,
            UpdateVendorServiceData.UPDATE_VENDOR_TS001_TC002.input.apiID,
            UpdateVendorServiceData.UPDATE_VENDOR_TS001_TC002.input.config,
            UpdateVendorServiceData.UPDATE_VENDOR_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateVendorServiceData.UPDATE_VENDOR_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateVendorServiceData.UPDATE_VENDOR_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateVendorServiceData.UPDATE_VENDOR_TS001_TC002.output.message)        
	});

    test(UpdateVendorServiceData.UPDATE_VENDOR_TS001_TC003.description, async () => {

        const output = await UpdateVendorService.updateVendor(
            UpdateVendorServiceData.UPDATE_VENDOR_TS001_TC003.input.databaseConnector,
            UpdateVendorServiceData.UPDATE_VENDOR_TS001_TC003.input.apiID,
            UpdateVendorServiceData.UPDATE_VENDOR_TS001_TC003.input.config,
            UpdateVendorServiceData.UPDATE_VENDOR_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateVendorServiceData.UPDATE_VENDOR_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateVendorServiceData.UPDATE_VENDOR_TS001_TC003.output.message)        
	});

});
