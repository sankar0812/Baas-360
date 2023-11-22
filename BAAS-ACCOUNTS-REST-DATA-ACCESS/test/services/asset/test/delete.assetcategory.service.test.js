/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete assetcategory service class
**/

/**
 * Importing all required modules here
 */

const deleteAssetCategoryServiceData = require("../data/delete.assetcategory.service.data")
const deleteAssetCategoryService = require("../../../../src/services/asset/delete.assetcategory.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteAssetCategoryService = new deleteAssetCategoryService();
const DeleteAssetCategoryServiceData = new deleteAssetCategoryServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetcategory.ts.001] | FunctionPath : [src/services/asset/delete.assetcategory.service.js/deleteOneAssetCategory()]", () => {


	test(DeleteAssetCategoryServiceData.DELETE_ONE_ASSETCATEGORY_TS001_TC001.description, async () => {

        const output = await DeleteAssetCategoryService.deleteOneAssetCategory(
            DeleteAssetCategoryServiceData.DELETE_ONE_ASSETCATEGORY_TS001_TC001.input.databaseConnector,
            DeleteAssetCategoryServiceData.DELETE_ONE_ASSETCATEGORY_TS001_TC001.input.apiID,
            DeleteAssetCategoryServiceData.DELETE_ONE_ASSETCATEGORY_TS001_TC001.input.config,
            DeleteAssetCategoryServiceData.DELETE_ONE_ASSETCATEGORY_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteAssetCategoryServiceData.DELETE_ONE_ASSETCATEGORY_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteAssetCategoryServiceData.DELETE_ONE_ASSETCATEGORY_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteAssetCategoryServiceData.DELETE_ONE_ASSETCATEGORY_TS001_TC001.output)[2])
	});



    test(DeleteAssetCategoryServiceData.DELETE_ONE_ASSETCATEGORY_TS001_TC002.description, async () => {

        const output = await DeleteAssetCategoryService.deleteOneAssetCategory(
            DeleteAssetCategoryServiceData.DELETE_ONE_ASSETCATEGORY_TS001_TC002.input.databaseConnector,
            DeleteAssetCategoryServiceData.DELETE_ONE_ASSETCATEGORY_TS001_TC002.input.apiID,
            DeleteAssetCategoryServiceData.DELETE_ONE_ASSETCATEGORY_TS001_TC002.input.config,
            DeleteAssetCategoryServiceData.DELETE_ONE_ASSETCATEGORY_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteAssetCategoryServiceData.DELETE_ONE_ASSETCATEGORY_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteAssetCategoryServiceData.DELETE_ONE_ASSETCATEGORY_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteAssetCategoryServiceData.DELETE_ONE_ASSETCATEGORY_TS001_TC002.output.message)        
	});



    test(DeleteAssetCategoryServiceData.DELETE_ONE_ASSETCATEGORY_TS001_TC003.description, async () => {

        const output = await DeleteAssetCategoryService.deleteOneAssetCategory(
            DeleteAssetCategoryServiceData.DELETE_ONE_ASSETCATEGORY_TS001_TC003.input.databaseConnector,
            DeleteAssetCategoryServiceData.DELETE_ONE_ASSETCATEGORY_TS001_TC003.input.apiID,
            DeleteAssetCategoryServiceData.DELETE_ONE_ASSETCATEGORY_TS001_TC003.input.config,
            DeleteAssetCategoryServiceData.DELETE_ONE_ASSETCATEGORY_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteAssetCategoryServiceData.DELETE_ONE_ASSETCATEGORY_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteAssetCategoryServiceData.DELETE_ONE_ASSETCATEGORY_TS001_TC003.output.message)        
	});

});
