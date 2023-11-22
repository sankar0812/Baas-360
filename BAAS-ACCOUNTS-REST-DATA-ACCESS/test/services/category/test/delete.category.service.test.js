/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete category service class
**/

/**
 * Importing all required modules here
 */

const deleteCategoryServiceData = require("../data/delete.category.service.data")
const deleteCategoryService = require("../../../../src/services/category/delete.category.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteCategoryService = new deleteCategoryService();
const DeleteCategoryServiceData = new deleteCategoryServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.category.ts.001] | FunctionPath : [src/services/category/delete.category.service.js/deleteOneCategory()]", () => {


	test(DeleteCategoryServiceData.DELETE_ONE_CATEGORY_TS001_TC001.description, async () => {

        const output = await DeleteCategoryService.deleteOneCategory(
            DeleteCategoryServiceData.DELETE_ONE_CATEGORY_TS001_TC001.input.databaseConnector,
            DeleteCategoryServiceData.DELETE_ONE_CATEGORY_TS001_TC001.input.apiID,
            DeleteCategoryServiceData.DELETE_ONE_CATEGORY_TS001_TC001.input.config,
            DeleteCategoryServiceData.DELETE_ONE_CATEGORY_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteCategoryServiceData.DELETE_ONE_CATEGORY_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteCategoryServiceData.DELETE_ONE_CATEGORY_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteCategoryServiceData.DELETE_ONE_CATEGORY_TS001_TC001.output)[2])
	});



    test(DeleteCategoryServiceData.DELETE_ONE_CATEGORY_TS001_TC002.description, async () => {

        const output = await DeleteCategoryService.deleteOneCategory(
            DeleteCategoryServiceData.DELETE_ONE_CATEGORY_TS001_TC002.input.databaseConnector,
            DeleteCategoryServiceData.DELETE_ONE_CATEGORY_TS001_TC002.input.apiID,
            DeleteCategoryServiceData.DELETE_ONE_CATEGORY_TS001_TC002.input.config,
            DeleteCategoryServiceData.DELETE_ONE_CATEGORY_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteCategoryServiceData.DELETE_ONE_CATEGORY_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteCategoryServiceData.DELETE_ONE_CATEGORY_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteCategoryServiceData.DELETE_ONE_CATEGORY_TS001_TC002.output.message)        
	});



    test(DeleteCategoryServiceData.DELETE_ONE_CATEGORY_TS001_TC003.description, async () => {

        const output = await DeleteCategoryService.deleteOneCategory(
            DeleteCategoryServiceData.DELETE_ONE_CATEGORY_TS001_TC003.input.databaseConnector,
            DeleteCategoryServiceData.DELETE_ONE_CATEGORY_TS001_TC003.input.apiID,
            DeleteCategoryServiceData.DELETE_ONE_CATEGORY_TS001_TC003.input.config,
            DeleteCategoryServiceData.DELETE_ONE_CATEGORY_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteCategoryServiceData.DELETE_ONE_CATEGORY_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteCategoryServiceData.DELETE_ONE_CATEGORY_TS001_TC003.output.message)        
	});

});
