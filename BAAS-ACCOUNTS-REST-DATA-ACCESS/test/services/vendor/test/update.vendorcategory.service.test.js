

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update vendorcategory service class
**/

/**
 * Importing all required modules here
 */

const updateVendorCategoryServiceData = require("../data/update.vendorcategory.service.data")
const updateVendorCategoryService = require("../../../../src/services/vendor/update.vendorcategory.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateVendorCategoryService = new updateVendorCategoryService();
const UpdateVendorCategoryServiceData = new updateVendorCategoryServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorcategory.ts.001] | FunctionPath : [src/services/vendor/update.vendorcategory.service.js/updateVendorCategory()]", () => {

	test(UpdateVendorCategoryServiceData.UPDATE_VENDORCATEGORY_TS001_TC001.description, async () => {

        const output = await UpdateVendorCategoryService.updateVendorCategory(
            UpdateVendorCategoryServiceData.UPDATE_VENDORCATEGORY_TS001_TC001.input.databaseConnector,
            UpdateVendorCategoryServiceData.UPDATE_VENDORCATEGORY_TS001_TC001.input.apiID,
            UpdateVendorCategoryServiceData.UPDATE_VENDORCATEGORY_TS001_TC001.input.config,
            UpdateVendorCategoryServiceData.UPDATE_VENDORCATEGORY_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateVendorCategoryServiceData.UPDATE_VENDORCATEGORY_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateVendorCategoryServiceData.UPDATE_VENDORCATEGORY_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateVendorCategoryServiceData.UPDATE_VENDORCATEGORY_TS001_TC001.output)[2])
	});

    test(UpdateVendorCategoryServiceData.UPDATE_VENDORCATEGORY_TS001_TC002.description, async () => {

        const output = await UpdateVendorCategoryService.updateVendorCategory(
            UpdateVendorCategoryServiceData.UPDATE_VENDORCATEGORY_TS001_TC002.input.databaseConnector,
            UpdateVendorCategoryServiceData.UPDATE_VENDORCATEGORY_TS001_TC002.input.apiID,
            UpdateVendorCategoryServiceData.UPDATE_VENDORCATEGORY_TS001_TC002.input.config,
            UpdateVendorCategoryServiceData.UPDATE_VENDORCATEGORY_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateVendorCategoryServiceData.UPDATE_VENDORCATEGORY_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateVendorCategoryServiceData.UPDATE_VENDORCATEGORY_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateVendorCategoryServiceData.UPDATE_VENDORCATEGORY_TS001_TC002.output.message)        
	});

    test(UpdateVendorCategoryServiceData.UPDATE_VENDORCATEGORY_TS001_TC003.description, async () => {

        const output = await UpdateVendorCategoryService.updateVendorCategory(
            UpdateVendorCategoryServiceData.UPDATE_VENDORCATEGORY_TS001_TC003.input.databaseConnector,
            UpdateVendorCategoryServiceData.UPDATE_VENDORCATEGORY_TS001_TC003.input.apiID,
            UpdateVendorCategoryServiceData.UPDATE_VENDORCATEGORY_TS001_TC003.input.config,
            UpdateVendorCategoryServiceData.UPDATE_VENDORCATEGORY_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateVendorCategoryServiceData.UPDATE_VENDORCATEGORY_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateVendorCategoryServiceData.UPDATE_VENDORCATEGORY_TS001_TC003.output.message)        
	});

});
