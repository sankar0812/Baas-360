/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create assetcategory service class
**/

/**
 * Importing all required modules here
 */

const createAssetCategoryServiceData = require("../data/create.assetcategory.service.data")
const createAssetCategoryService = require("../../../../src/services/asset/create.assetcategory.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateAssetCategoryService = new createAssetCategoryService();
const CreateAssetCategoryServiceData = new createAssetCategoryServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetcategory.ts.001] | FunctionPath : [src/services/asset/create.assetcategory.service.js/createOneAssetCategory()]", () => {


	test(CreateAssetCategoryServiceData.CREATE_ONE_ASSETCATEGORY_TS001_TC001.description, async () => {

        const output = await CreateAssetCategoryService.createOneAssetCategory(
            CreateAssetCategoryServiceData.CREATE_ONE_ASSETCATEGORY_TS001_TC001.input.databaseConnector,
            CreateAssetCategoryServiceData.CREATE_ONE_ASSETCATEGORY_TS001_TC001.input.apiID,
            CreateAssetCategoryServiceData.CREATE_ONE_ASSETCATEGORY_TS001_TC001.input.config,
            CreateAssetCategoryServiceData.CREATE_ONE_ASSETCATEGORY_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateAssetCategoryServiceData.CREATE_ONE_ASSETCATEGORY_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateAssetCategoryServiceData.CREATE_ONE_ASSETCATEGORY_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateAssetCategoryServiceData.CREATE_ONE_ASSETCATEGORY_TS001_TC001.output)[2])
	});



    test(CreateAssetCategoryServiceData.CREATE_ONE_ASSETCATEGORY_TS001_TC002.description, async () => {

        const output = await CreateAssetCategoryService.createOneAssetCategory(
            CreateAssetCategoryServiceData.CREATE_ONE_ASSETCATEGORY_TS001_TC002.input.databaseConnector,
            CreateAssetCategoryServiceData.CREATE_ONE_ASSETCATEGORY_TS001_TC002.input.apiID,
            CreateAssetCategoryServiceData.CREATE_ONE_ASSETCATEGORY_TS001_TC002.input.config,
            CreateAssetCategoryServiceData.CREATE_ONE_ASSETCATEGORY_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateAssetCategoryServiceData.CREATE_ONE_ASSETCATEGORY_TS001_TC002.output.data)
        expect(output.status).toBe(CreateAssetCategoryServiceData.CREATE_ONE_ASSETCATEGORY_TS001_TC002.output.status)
        expect(output.message).toBe(CreateAssetCategoryServiceData.CREATE_ONE_ASSETCATEGORY_TS001_TC002.output.message)        
	});



    test(CreateAssetCategoryServiceData.CREATE_ONE_ASSETCATEGORY_TS001_TC003.description, async () => {

        const output = await CreateAssetCategoryService.createOneAssetCategory(
            CreateAssetCategoryServiceData.CREATE_ONE_ASSETCATEGORY_TS001_TC003.input.databaseConnector,
            CreateAssetCategoryServiceData.CREATE_ONE_ASSETCATEGORY_TS001_TC003.input.apiID,
            CreateAssetCategoryServiceData.CREATE_ONE_ASSETCATEGORY_TS001_TC003.input.config,
            CreateAssetCategoryServiceData.CREATE_ONE_ASSETCATEGORY_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateAssetCategoryServiceData.CREATE_ONE_ASSETCATEGORY_TS001_TC003.output.status)
        expect(output.message).toBe(CreateAssetCategoryServiceData.CREATE_ONE_ASSETCATEGORY_TS001_TC003.output.message)        
	});

});