/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete vendor service class
**/

/**
 * Importing all required modules here
 */

const deleteVendorServiceData = require("../data/delete.vendor.service.data")
const deleteVendorService = require("../../../../src/services/vendor/delete.vendor.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteVendorService = new deleteVendorService();
const DeleteVendorServiceData = new deleteVendorServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendor.ts.001] | FunctionPath : [src/services/vendor/delete.vendor.service.js/deleteOneVendor()]", () => {


	test(DeleteVendorServiceData.DELETE_ONE_VENDOR_TS001_TC001.description, async () => {

        const output = await DeleteVendorService.deleteOneVendor(
            DeleteVendorServiceData.DELETE_ONE_VENDOR_TS001_TC001.input.databaseConnector,
            DeleteVendorServiceData.DELETE_ONE_VENDOR_TS001_TC001.input.apiID,
            DeleteVendorServiceData.DELETE_ONE_VENDOR_TS001_TC001.input.config,
            DeleteVendorServiceData.DELETE_ONE_VENDOR_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteVendorServiceData.DELETE_ONE_VENDOR_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteVendorServiceData.DELETE_ONE_VENDOR_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteVendorServiceData.DELETE_ONE_VENDOR_TS001_TC001.output)[2])
	});



    test(DeleteVendorServiceData.DELETE_ONE_VENDOR_TS001_TC002.description, async () => {

        const output = await DeleteVendorService.deleteOneVendor(
            DeleteVendorServiceData.DELETE_ONE_VENDOR_TS001_TC002.input.databaseConnector,
            DeleteVendorServiceData.DELETE_ONE_VENDOR_TS001_TC002.input.apiID,
            DeleteVendorServiceData.DELETE_ONE_VENDOR_TS001_TC002.input.config,
            DeleteVendorServiceData.DELETE_ONE_VENDOR_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteVendorServiceData.DELETE_ONE_VENDOR_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteVendorServiceData.DELETE_ONE_VENDOR_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteVendorServiceData.DELETE_ONE_VENDOR_TS001_TC002.output.message)        
	});



    test(DeleteVendorServiceData.DELETE_ONE_VENDOR_TS001_TC003.description, async () => {

        const output = await DeleteVendorService.deleteOneVendor(
            DeleteVendorServiceData.DELETE_ONE_VENDOR_TS001_TC003.input.databaseConnector,
            DeleteVendorServiceData.DELETE_ONE_VENDOR_TS001_TC003.input.apiID,
            DeleteVendorServiceData.DELETE_ONE_VENDOR_TS001_TC003.input.config,
            DeleteVendorServiceData.DELETE_ONE_VENDOR_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteVendorServiceData.DELETE_ONE_VENDOR_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteVendorServiceData.DELETE_ONE_VENDOR_TS001_TC003.output.message)        
	});

});
