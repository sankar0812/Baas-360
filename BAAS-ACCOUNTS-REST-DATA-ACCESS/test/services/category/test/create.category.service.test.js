/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create category service class
**/

/**
 * Importing all required modules here
 */

const createCategoryServiceData = require("../data/create.category.service.data")
const createCategoryService = require("../../../../src/services/category/create.category.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateCategoryService = new createCategoryService();
const CreateCategoryServiceData = new createCategoryServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.category.ts.001] | FunctionPath : [src/services/category/create.category.service.js/createOneCategory()]", () => {


	test(CreateCategoryServiceData.CREATE_ONE_CATEGORY_TS001_TC001.description, async () => {

        const output = await CreateCategoryService.createOneCategory(
            CreateCategoryServiceData.CREATE_ONE_CATEGORY_TS001_TC001.input.databaseConnector,
            CreateCategoryServiceData.CREATE_ONE_CATEGORY_TS001_TC001.input.apiID,
            CreateCategoryServiceData.CREATE_ONE_CATEGORY_TS001_TC001.input.config,
            CreateCategoryServiceData.CREATE_ONE_CATEGORY_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateCategoryServiceData.CREATE_ONE_CATEGORY_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateCategoryServiceData.CREATE_ONE_CATEGORY_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateCategoryServiceData.CREATE_ONE_CATEGORY_TS001_TC001.output)[2])
	});



    test(CreateCategoryServiceData.CREATE_ONE_CATEGORY_TS001_TC002.description, async () => {

        const output = await CreateCategoryService.createOneCategory(
            CreateCategoryServiceData.CREATE_ONE_CATEGORY_TS001_TC002.input.databaseConnector,
            CreateCategoryServiceData.CREATE_ONE_CATEGORY_TS001_TC002.input.apiID,
            CreateCategoryServiceData.CREATE_ONE_CATEGORY_TS001_TC002.input.config,
            CreateCategoryServiceData.CREATE_ONE_CATEGORY_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateCategoryServiceData.CREATE_ONE_CATEGORY_TS001_TC002.output.data)
        expect(output.status).toBe(CreateCategoryServiceData.CREATE_ONE_CATEGORY_TS001_TC002.output.status)
        expect(output.message).toBe(CreateCategoryServiceData.CREATE_ONE_CATEGORY_TS001_TC002.output.message)        
	});



    test(CreateCategoryServiceData.CREATE_ONE_CATEGORY_TS001_TC003.description, async () => {

        const output = await CreateCategoryService.createOneCategory(
            CreateCategoryServiceData.CREATE_ONE_CATEGORY_TS001_TC003.input.databaseConnector,
            CreateCategoryServiceData.CREATE_ONE_CATEGORY_TS001_TC003.input.apiID,
            CreateCategoryServiceData.CREATE_ONE_CATEGORY_TS001_TC003.input.config,
            CreateCategoryServiceData.CREATE_ONE_CATEGORY_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateCategoryServiceData.CREATE_ONE_CATEGORY_TS001_TC003.output.status)
        expect(output.message).toBe(CreateCategoryServiceData.CREATE_ONE_CATEGORY_TS001_TC003.output.message)        
	});

});