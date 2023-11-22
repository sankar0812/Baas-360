

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update assetcategory service class
**/

/**
 * Importing all required modules here
 */

const updateAssetCategoryServiceData = require("../data/update.assetcategory.service.data")
const updateAssetCategoryService = require("../../../../src/services/asset/update.assetcategory.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateAssetCategoryService = new updateAssetCategoryService();
const UpdateAssetCategoryServiceData = new updateAssetCategoryServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetcategory.ts.001] | FunctionPath : [src/services/asset/update.assetcategory.service.js/updateAssetCategory()]", () => {

	test(UpdateAssetCategoryServiceData.UPDATE_ASSETCATEGORY_TS001_TC001.description, async () => {

        const output = await UpdateAssetCategoryService.updateAssetCategory(
            UpdateAssetCategoryServiceData.UPDATE_ASSETCATEGORY_TS001_TC001.input.databaseConnector,
            UpdateAssetCategoryServiceData.UPDATE_ASSETCATEGORY_TS001_TC001.input.apiID,
            UpdateAssetCategoryServiceData.UPDATE_ASSETCATEGORY_TS001_TC001.input.config,
            UpdateAssetCategoryServiceData.UPDATE_ASSETCATEGORY_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateAssetCategoryServiceData.UPDATE_ASSETCATEGORY_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateAssetCategoryServiceData.UPDATE_ASSETCATEGORY_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateAssetCategoryServiceData.UPDATE_ASSETCATEGORY_TS001_TC001.output)[2])
	});

    test(UpdateAssetCategoryServiceData.UPDATE_ASSETCATEGORY_TS001_TC002.description, async () => {

        const output = await UpdateAssetCategoryService.updateAssetCategory(
            UpdateAssetCategoryServiceData.UPDATE_ASSETCATEGORY_TS001_TC002.input.databaseConnector,
            UpdateAssetCategoryServiceData.UPDATE_ASSETCATEGORY_TS001_TC002.input.apiID,
            UpdateAssetCategoryServiceData.UPDATE_ASSETCATEGORY_TS001_TC002.input.config,
            UpdateAssetCategoryServiceData.UPDATE_ASSETCATEGORY_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateAssetCategoryServiceData.UPDATE_ASSETCATEGORY_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateAssetCategoryServiceData.UPDATE_ASSETCATEGORY_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateAssetCategoryServiceData.UPDATE_ASSETCATEGORY_TS001_TC002.output.message)        
	});

    test(UpdateAssetCategoryServiceData.UPDATE_ASSETCATEGORY_TS001_TC003.description, async () => {

        const output = await UpdateAssetCategoryService.updateAssetCategory(
            UpdateAssetCategoryServiceData.UPDATE_ASSETCATEGORY_TS001_TC003.input.databaseConnector,
            UpdateAssetCategoryServiceData.UPDATE_ASSETCATEGORY_TS001_TC003.input.apiID,
            UpdateAssetCategoryServiceData.UPDATE_ASSETCATEGORY_TS001_TC003.input.config,
            UpdateAssetCategoryServiceData.UPDATE_ASSETCATEGORY_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateAssetCategoryServiceData.UPDATE_ASSETCATEGORY_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateAssetCategoryServiceData.UPDATE_ASSETCATEGORY_TS001_TC003.output.message)        
	});

});
