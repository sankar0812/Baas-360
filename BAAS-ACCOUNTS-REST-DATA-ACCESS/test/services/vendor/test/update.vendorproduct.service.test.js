

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update vendorproduct service class
**/

/**
 * Importing all required modules here
 */

const updateVendorProductServiceData = require("../data/update.vendorproduct.service.data")
const updateVendorProductService = require("../../../../src/services/vendor/update.vendorproduct.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateVendorProductService = new updateVendorProductService();
const UpdateVendorProductServiceData = new updateVendorProductServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorproduct.ts.001] | FunctionPath : [src/services/vendor/update.vendorproduct.service.js/updateVendorProduct()]", () => {

	test(UpdateVendorProductServiceData.UPDATE_VENDORPRODUCT_TS001_TC001.description, async () => {

        const output = await UpdateVendorProductService.updateVendorProduct(
            UpdateVendorProductServiceData.UPDATE_VENDORPRODUCT_TS001_TC001.input.databaseConnector,
            UpdateVendorProductServiceData.UPDATE_VENDORPRODUCT_TS001_TC001.input.apiID,
            UpdateVendorProductServiceData.UPDATE_VENDORPRODUCT_TS001_TC001.input.config,
            UpdateVendorProductServiceData.UPDATE_VENDORPRODUCT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateVendorProductServiceData.UPDATE_VENDORPRODUCT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateVendorProductServiceData.UPDATE_VENDORPRODUCT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateVendorProductServiceData.UPDATE_VENDORPRODUCT_TS001_TC001.output)[2])
	});

    test(UpdateVendorProductServiceData.UPDATE_VENDORPRODUCT_TS001_TC002.description, async () => {

        const output = await UpdateVendorProductService.updateVendorProduct(
            UpdateVendorProductServiceData.UPDATE_VENDORPRODUCT_TS001_TC002.input.databaseConnector,
            UpdateVendorProductServiceData.UPDATE_VENDORPRODUCT_TS001_TC002.input.apiID,
            UpdateVendorProductServiceData.UPDATE_VENDORPRODUCT_TS001_TC002.input.config,
            UpdateVendorProductServiceData.UPDATE_VENDORPRODUCT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateVendorProductServiceData.UPDATE_VENDORPRODUCT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateVendorProductServiceData.UPDATE_VENDORPRODUCT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateVendorProductServiceData.UPDATE_VENDORPRODUCT_TS001_TC002.output.message)        
	});

    test(UpdateVendorProductServiceData.UPDATE_VENDORPRODUCT_TS001_TC003.description, async () => {

        const output = await UpdateVendorProductService.updateVendorProduct(
            UpdateVendorProductServiceData.UPDATE_VENDORPRODUCT_TS001_TC003.input.databaseConnector,
            UpdateVendorProductServiceData.UPDATE_VENDORPRODUCT_TS001_TC003.input.apiID,
            UpdateVendorProductServiceData.UPDATE_VENDORPRODUCT_TS001_TC003.input.config,
            UpdateVendorProductServiceData.UPDATE_VENDORPRODUCT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateVendorProductServiceData.UPDATE_VENDORPRODUCT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateVendorProductServiceData.UPDATE_VENDORPRODUCT_TS001_TC003.output.message)        
	});

});
