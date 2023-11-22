

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update productcategory service class
**/

/**
 * Importing all required modules here
 */

const updateProductCategoryServiceData = require("../data/update.productcategory.service.data")
const updateProductCategoryService = require("../../../../src/services/product/update.productcategory.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateProductCategoryService = new updateProductCategoryService();
const UpdateProductCategoryServiceData = new updateProductCategoryServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productcategory.ts.001] | FunctionPath : [src/services/product/update.productcategory.service.js/updateProductCategory()]", () => {

	test(UpdateProductCategoryServiceData.UPDATE_PRODUCTCATEGORY_TS001_TC001.description, async () => {

        const output = await UpdateProductCategoryService.updateProductCategory(
            UpdateProductCategoryServiceData.UPDATE_PRODUCTCATEGORY_TS001_TC001.input.databaseConnector,
            UpdateProductCategoryServiceData.UPDATE_PRODUCTCATEGORY_TS001_TC001.input.apiID,
            UpdateProductCategoryServiceData.UPDATE_PRODUCTCATEGORY_TS001_TC001.input.config,
            UpdateProductCategoryServiceData.UPDATE_PRODUCTCATEGORY_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateProductCategoryServiceData.UPDATE_PRODUCTCATEGORY_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateProductCategoryServiceData.UPDATE_PRODUCTCATEGORY_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateProductCategoryServiceData.UPDATE_PRODUCTCATEGORY_TS001_TC001.output)[2])
	});

    test(UpdateProductCategoryServiceData.UPDATE_PRODUCTCATEGORY_TS001_TC002.description, async () => {

        const output = await UpdateProductCategoryService.updateProductCategory(
            UpdateProductCategoryServiceData.UPDATE_PRODUCTCATEGORY_TS001_TC002.input.databaseConnector,
            UpdateProductCategoryServiceData.UPDATE_PRODUCTCATEGORY_TS001_TC002.input.apiID,
            UpdateProductCategoryServiceData.UPDATE_PRODUCTCATEGORY_TS001_TC002.input.config,
            UpdateProductCategoryServiceData.UPDATE_PRODUCTCATEGORY_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateProductCategoryServiceData.UPDATE_PRODUCTCATEGORY_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateProductCategoryServiceData.UPDATE_PRODUCTCATEGORY_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateProductCategoryServiceData.UPDATE_PRODUCTCATEGORY_TS001_TC002.output.message)        
	});

    test(UpdateProductCategoryServiceData.UPDATE_PRODUCTCATEGORY_TS001_TC003.description, async () => {

        const output = await UpdateProductCategoryService.updateProductCategory(
            UpdateProductCategoryServiceData.UPDATE_PRODUCTCATEGORY_TS001_TC003.input.databaseConnector,
            UpdateProductCategoryServiceData.UPDATE_PRODUCTCATEGORY_TS001_TC003.input.apiID,
            UpdateProductCategoryServiceData.UPDATE_PRODUCTCATEGORY_TS001_TC003.input.config,
            UpdateProductCategoryServiceData.UPDATE_PRODUCTCATEGORY_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateProductCategoryServiceData.UPDATE_PRODUCTCATEGORY_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateProductCategoryServiceData.UPDATE_PRODUCTCATEGORY_TS001_TC003.output.message)        
	});

});
