/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read AssetCategory service class
**/

/**
 * Importing all required modules here
 */

const readAssetCategoryServiceData = require("../data/read.assetcategory.service.data")
const readAssetCategoryService = require("../../../../src/services/asset/read.assetcategory.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadAssetCategoryService = new readAssetCategoryService();
const ReadAssetCategoryServiceData = new readAssetCategoryServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetcategory.ts.001] | FunctionPath : [src/services/asset/read.contianer.service.js/readAssetCategorys()]", () => {


	test(ReadAssetCategoryServiceData.READ_ASSETCATEGORY_TS001_TC001.description, async () => {

        const output = await ReadAssetCategoryService.readAssetCategorys(
            ReadAssetCategoryServiceData.READ_ASSETCATEGORY_TS001_TC001.input.databaseConnector,
            ReadAssetCategoryServiceData.READ_ASSETCATEGORY_TS001_TC001.input.apiID,
            ReadAssetCategoryServiceData.READ_ASSETCATEGORY_TS001_TC001.input.config,
            ReadAssetCategoryServiceData.READ_ASSETCATEGORY_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAssetCategoryServiceData.READ_ASSETCATEGORY_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAssetCategoryServiceData.READ_ASSETCATEGORY_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAssetCategoryServiceData.READ_ASSETCATEGORY_TS001_TC001.output)[2])
	});



    test(ReadAssetCategoryServiceData.READ_ASSETCATEGORY_TS001_TC002.description, async () => {

        const output = await ReadAssetCategoryService.readAssetCategorys(
            ReadAssetCategoryServiceData.READ_ASSETCATEGORY_TS001_TC002.input.databaseConnector,
            ReadAssetCategoryServiceData.READ_ASSETCATEGORY_TS001_TC002.input.apiID,
            ReadAssetCategoryServiceData.READ_ASSETCATEGORY_TS001_TC002.input.config,
            ReadAssetCategoryServiceData.READ_ASSETCATEGORY_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadAssetCategoryServiceData.READ_ASSETCATEGORY_TS001_TC002.output.data)
        expect(output.status).toBe(ReadAssetCategoryServiceData.READ_ASSETCATEGORY_TS001_TC002.output.status)
        expect(output.message).toBe(ReadAssetCategoryServiceData.READ_ASSETCATEGORY_TS001_TC002.output.message)        
	});



    test(ReadAssetCategoryServiceData.READ_ASSETCATEGORY_TS001_TC003.description, async () => {

        const output = await ReadAssetCategoryService.readAssetCategorys(
            ReadAssetCategoryServiceData.READ_ASSETCATEGORY_TS001_TC003.input.databaseConnector,
            ReadAssetCategoryServiceData.READ_ASSETCATEGORY_TS001_TC003.input.apiID,
            ReadAssetCategoryServiceData.READ_ASSETCATEGORY_TS001_TC003.input.config,
            ReadAssetCategoryServiceData.READ_ASSETCATEGORY_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadAssetCategoryServiceData.READ_ASSETCATEGORY_TS001_TC003.output.status)
        expect(output.message).toBe(ReadAssetCategoryServiceData.READ_ASSETCATEGORY_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.assetcategory.ts.002] | FunctionPath : [src/services/asset/read.assetcategory.service.js/readOneAssetCategory()]", () => {


	test(ReadAssetCategoryServiceData.READ_ONE_ASSETCATEGORY_TS002_TC001.description, async () => {

        const output = await ReadAssetCategoryService.readOneAssetCategory(
            ReadAssetCategoryServiceData.READ_ONE_ASSETCATEGORY_TS002_TC001.input.databaseConnector,
            ReadAssetCategoryServiceData.READ_ONE_ASSETCATEGORY_TS002_TC001.input.apiID,
            ReadAssetCategoryServiceData.READ_ONE_ASSETCATEGORY_TS002_TC001.input.config,
            ReadAssetCategoryServiceData.READ_ONE_ASSETCATEGORY_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAssetCategoryServiceData.READ_ONE_ASSETCATEGORY_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAssetCategoryServiceData.READ_ONE_ASSETCATEGORY_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAssetCategoryServiceData.READ_ONE_ASSETCATEGORY_TS002_TC001.output)[2])
	});



    test(ReadAssetCategoryServiceData.READ_ONE_ASSETCATEGORY_TS002_TC002.description, async () => {

        const output = await ReadAssetCategoryService.readOneAssetCategory(
            ReadAssetCategoryServiceData.READ_ONE_ASSETCATEGORY_TS002_TC002.input.databaseConnector,
            ReadAssetCategoryServiceData.READ_ONE_ASSETCATEGORY_TS002_TC002.input.apiID,
            ReadAssetCategoryServiceData.READ_ONE_ASSETCATEGORY_TS002_TC002.input.config,
            ReadAssetCategoryServiceData.READ_ONE_ASSETCATEGORY_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadAssetCategoryServiceData.READ_ONE_ASSETCATEGORY_TS002_TC002.output.data)
        expect(output.status).toBe(ReadAssetCategoryServiceData.READ_ONE_ASSETCATEGORY_TS002_TC002.output.status)
        expect(output.message).toBe(ReadAssetCategoryServiceData.READ_ONE_ASSETCATEGORY_TS002_TC002.output.message)        
	});



    test(ReadAssetCategoryServiceData.READ_ONE_ASSETCATEGORY_TS002_TC003.description, async () => {

        const output = await ReadAssetCategoryService.readOneAssetCategory(
            ReadAssetCategoryServiceData.READ_ONE_ASSETCATEGORY_TS002_TC003.input.databaseConnector,
            ReadAssetCategoryServiceData.READ_ONE_ASSETCATEGORY_TS002_TC003.input.apiID,
            ReadAssetCategoryServiceData.READ_ONE_ASSETCATEGORY_TS002_TC003.input.config,
            ReadAssetCategoryServiceData.READ_ONE_ASSETCATEGORY_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadAssetCategoryServiceData.READ_ONE_ASSETCATEGORY_TS002_TC003.output.status)
        expect(output.message).toBe(ReadAssetCategoryServiceData.READ_ONE_ASSETCATEGORY_TS002_TC003.output.message)        
	});

});