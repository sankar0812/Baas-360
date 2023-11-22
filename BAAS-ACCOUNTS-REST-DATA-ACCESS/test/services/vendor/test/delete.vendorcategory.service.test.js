/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete vendorcategory service class
**/

/**
 * Importing all required modules here
 */

const deleteVendorCategoryServiceData = require("../data/delete.vendorcategory.service.data")
const deleteVendorCategoryService = require("../../../../src/services/vendor/delete.vendorcategory.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteVendorCategoryService = new deleteVendorCategoryService();
const DeleteVendorCategoryServiceData = new deleteVendorCategoryServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorcategory.ts.001] | FunctionPath : [src/services/vendor/delete.vendorcategory.service.js/deleteOneVendorCategory()]", () => {


	test(DeleteVendorCategoryServiceData.DELETE_ONE_VENDORCATEGORY_TS001_TC001.description, async () => {

        const output = await DeleteVendorCategoryService.deleteOneVendorCategory(
            DeleteVendorCategoryServiceData.DELETE_ONE_VENDORCATEGORY_TS001_TC001.input.databaseConnector,
            DeleteVendorCategoryServiceData.DELETE_ONE_VENDORCATEGORY_TS001_TC001.input.apiID,
            DeleteVendorCategoryServiceData.DELETE_ONE_VENDORCATEGORY_TS001_TC001.input.config,
            DeleteVendorCategoryServiceData.DELETE_ONE_VENDORCATEGORY_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteVendorCategoryServiceData.DELETE_ONE_VENDORCATEGORY_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteVendorCategoryServiceData.DELETE_ONE_VENDORCATEGORY_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteVendorCategoryServiceData.DELETE_ONE_VENDORCATEGORY_TS001_TC001.output)[2])
	});



    test(DeleteVendorCategoryServiceData.DELETE_ONE_VENDORCATEGORY_TS001_TC002.description, async () => {

        const output = await DeleteVendorCategoryService.deleteOneVendorCategory(
            DeleteVendorCategoryServiceData.DELETE_ONE_VENDORCATEGORY_TS001_TC002.input.databaseConnector,
            DeleteVendorCategoryServiceData.DELETE_ONE_VENDORCATEGORY_TS001_TC002.input.apiID,
            DeleteVendorCategoryServiceData.DELETE_ONE_VENDORCATEGORY_TS001_TC002.input.config,
            DeleteVendorCategoryServiceData.DELETE_ONE_VENDORCATEGORY_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteVendorCategoryServiceData.DELETE_ONE_VENDORCATEGORY_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteVendorCategoryServiceData.DELETE_ONE_VENDORCATEGORY_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteVendorCategoryServiceData.DELETE_ONE_VENDORCATEGORY_TS001_TC002.output.message)        
	});



    test(DeleteVendorCategoryServiceData.DELETE_ONE_VENDORCATEGORY_TS001_TC003.description, async () => {

        const output = await DeleteVendorCategoryService.deleteOneVendorCategory(
            DeleteVendorCategoryServiceData.DELETE_ONE_VENDORCATEGORY_TS001_TC003.input.databaseConnector,
            DeleteVendorCategoryServiceData.DELETE_ONE_VENDORCATEGORY_TS001_TC003.input.apiID,
            DeleteVendorCategoryServiceData.DELETE_ONE_VENDORCATEGORY_TS001_TC003.input.config,
            DeleteVendorCategoryServiceData.DELETE_ONE_VENDORCATEGORY_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteVendorCategoryServiceData.DELETE_ONE_VENDORCATEGORY_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteVendorCategoryServiceData.DELETE_ONE_VENDORCATEGORY_TS001_TC003.output.message)        
	});

});
