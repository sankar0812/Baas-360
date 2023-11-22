/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Category service class
**/

/**
 * Importing all required modules here
 */

const readCategoryServiceData = require("../data/read.category.service.data")
const readCategoryService = require("../../../../src/services/category/read.category.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadCategoryService = new readCategoryService();
const ReadCategoryServiceData = new readCategoryServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.category.ts.001] | FunctionPath : [src/services/category/read.contianer.service.js/readCategorys()]", () => {


	test(ReadCategoryServiceData.READ_CATEGORY_TS001_TC001.description, async () => {

        const output = await ReadCategoryService.readCategorys(
            ReadCategoryServiceData.READ_CATEGORY_TS001_TC001.input.databaseConnector,
            ReadCategoryServiceData.READ_CATEGORY_TS001_TC001.input.apiID,
            ReadCategoryServiceData.READ_CATEGORY_TS001_TC001.input.config,
            ReadCategoryServiceData.READ_CATEGORY_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCategoryServiceData.READ_CATEGORY_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCategoryServiceData.READ_CATEGORY_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCategoryServiceData.READ_CATEGORY_TS001_TC001.output)[2])
	});



    test(ReadCategoryServiceData.READ_CATEGORY_TS001_TC002.description, async () => {

        const output = await ReadCategoryService.readCategorys(
            ReadCategoryServiceData.READ_CATEGORY_TS001_TC002.input.databaseConnector,
            ReadCategoryServiceData.READ_CATEGORY_TS001_TC002.input.apiID,
            ReadCategoryServiceData.READ_CATEGORY_TS001_TC002.input.config,
            ReadCategoryServiceData.READ_CATEGORY_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadCategoryServiceData.READ_CATEGORY_TS001_TC002.output.data)
        expect(output.status).toBe(ReadCategoryServiceData.READ_CATEGORY_TS001_TC002.output.status)
        expect(output.message).toBe(ReadCategoryServiceData.READ_CATEGORY_TS001_TC002.output.message)        
	});



    test(ReadCategoryServiceData.READ_CATEGORY_TS001_TC003.description, async () => {

        const output = await ReadCategoryService.readCategorys(
            ReadCategoryServiceData.READ_CATEGORY_TS001_TC003.input.databaseConnector,
            ReadCategoryServiceData.READ_CATEGORY_TS001_TC003.input.apiID,
            ReadCategoryServiceData.READ_CATEGORY_TS001_TC003.input.config,
            ReadCategoryServiceData.READ_CATEGORY_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadCategoryServiceData.READ_CATEGORY_TS001_TC003.output.status)
        expect(output.message).toBe(ReadCategoryServiceData.READ_CATEGORY_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.category.ts.002] | FunctionPath : [src/services/category/read.category.service.js/readOneCategory()]", () => {


	test(ReadCategoryServiceData.READ_ONE_CATEGORY_TS002_TC001.description, async () => {

        const output = await ReadCategoryService.readOneCategory(
            ReadCategoryServiceData.READ_ONE_CATEGORY_TS002_TC001.input.databaseConnector,
            ReadCategoryServiceData.READ_ONE_CATEGORY_TS002_TC001.input.apiID,
            ReadCategoryServiceData.READ_ONE_CATEGORY_TS002_TC001.input.config,
            ReadCategoryServiceData.READ_ONE_CATEGORY_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCategoryServiceData.READ_ONE_CATEGORY_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCategoryServiceData.READ_ONE_CATEGORY_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCategoryServiceData.READ_ONE_CATEGORY_TS002_TC001.output)[2])
	});



    test(ReadCategoryServiceData.READ_ONE_CATEGORY_TS002_TC002.description, async () => {

        const output = await ReadCategoryService.readOneCategory(
            ReadCategoryServiceData.READ_ONE_CATEGORY_TS002_TC002.input.databaseConnector,
            ReadCategoryServiceData.READ_ONE_CATEGORY_TS002_TC002.input.apiID,
            ReadCategoryServiceData.READ_ONE_CATEGORY_TS002_TC002.input.config,
            ReadCategoryServiceData.READ_ONE_CATEGORY_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadCategoryServiceData.READ_ONE_CATEGORY_TS002_TC002.output.data)
        expect(output.status).toBe(ReadCategoryServiceData.READ_ONE_CATEGORY_TS002_TC002.output.status)
        expect(output.message).toBe(ReadCategoryServiceData.READ_ONE_CATEGORY_TS002_TC002.output.message)        
	});



    test(ReadCategoryServiceData.READ_ONE_CATEGORY_TS002_TC003.description, async () => {

        const output = await ReadCategoryService.readOneCategory(
            ReadCategoryServiceData.READ_ONE_CATEGORY_TS002_TC003.input.databaseConnector,
            ReadCategoryServiceData.READ_ONE_CATEGORY_TS002_TC003.input.apiID,
            ReadCategoryServiceData.READ_ONE_CATEGORY_TS002_TC003.input.config,
            ReadCategoryServiceData.READ_ONE_CATEGORY_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadCategoryServiceData.READ_ONE_CATEGORY_TS002_TC003.output.status)
        expect(output.message).toBe(ReadCategoryServiceData.READ_ONE_CATEGORY_TS002_TC003.output.message)        
	});

});