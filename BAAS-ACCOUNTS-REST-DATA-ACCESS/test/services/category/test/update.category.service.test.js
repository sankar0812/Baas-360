

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update category service class
**/

/**
 * Importing all required modules here
 */

const updateCategoryServiceData = require("../data/update.category.service.data")
const updateCategoryService = require("../../../../src/services/category/update.category.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateCategoryService = new updateCategoryService();
const UpdateCategoryServiceData = new updateCategoryServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.category.ts.001] | FunctionPath : [src/services/category/update.category.service.js/updateCategory()]", () => {

	test(UpdateCategoryServiceData.UPDATE_CATEGORY_TS001_TC001.description, async () => {

        const output = await UpdateCategoryService.updateCategory(
            UpdateCategoryServiceData.UPDATE_CATEGORY_TS001_TC001.input.databaseConnector,
            UpdateCategoryServiceData.UPDATE_CATEGORY_TS001_TC001.input.apiID,
            UpdateCategoryServiceData.UPDATE_CATEGORY_TS001_TC001.input.config,
            UpdateCategoryServiceData.UPDATE_CATEGORY_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateCategoryServiceData.UPDATE_CATEGORY_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateCategoryServiceData.UPDATE_CATEGORY_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateCategoryServiceData.UPDATE_CATEGORY_TS001_TC001.output)[2])
	});

    test(UpdateCategoryServiceData.UPDATE_CATEGORY_TS001_TC002.description, async () => {

        const output = await UpdateCategoryService.updateCategory(
            UpdateCategoryServiceData.UPDATE_CATEGORY_TS001_TC002.input.databaseConnector,
            UpdateCategoryServiceData.UPDATE_CATEGORY_TS001_TC002.input.apiID,
            UpdateCategoryServiceData.UPDATE_CATEGORY_TS001_TC002.input.config,
            UpdateCategoryServiceData.UPDATE_CATEGORY_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateCategoryServiceData.UPDATE_CATEGORY_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateCategoryServiceData.UPDATE_CATEGORY_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateCategoryServiceData.UPDATE_CATEGORY_TS001_TC002.output.message)        
	});

    test(UpdateCategoryServiceData.UPDATE_CATEGORY_TS001_TC003.description, async () => {

        const output = await UpdateCategoryService.updateCategory(
            UpdateCategoryServiceData.UPDATE_CATEGORY_TS001_TC003.input.databaseConnector,
            UpdateCategoryServiceData.UPDATE_CATEGORY_TS001_TC003.input.apiID,
            UpdateCategoryServiceData.UPDATE_CATEGORY_TS001_TC003.input.config,
            UpdateCategoryServiceData.UPDATE_CATEGORY_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateCategoryServiceData.UPDATE_CATEGORY_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateCategoryServiceData.UPDATE_CATEGORY_TS001_TC003.output.message)        
	});

});
