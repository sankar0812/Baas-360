/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete productcategory service class
**/

/**
 * Importing all required modules here
 */

const deleteProductCategoryServiceData = require("../data/delete.productcategory.service.data")
const deleteProductCategoryService = require("../../../../src/services/product/delete.productcategory.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteProductCategoryService = new deleteProductCategoryService();
const DeleteProductCategoryServiceData = new deleteProductCategoryServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productcategory.ts.001] | FunctionPath : [src/services/product/delete.productcategory.service.js/deleteOneProductCategory()]", () => {


	test(DeleteProductCategoryServiceData.DELETE_ONE_PRODUCTCATEGORY_TS001_TC001.description, async () => {

        const output = await DeleteProductCategoryService.deleteOneProductCategory(
            DeleteProductCategoryServiceData.DELETE_ONE_PRODUCTCATEGORY_TS001_TC001.input.databaseConnector,
            DeleteProductCategoryServiceData.DELETE_ONE_PRODUCTCATEGORY_TS001_TC001.input.apiID,
            DeleteProductCategoryServiceData.DELETE_ONE_PRODUCTCATEGORY_TS001_TC001.input.config,
            DeleteProductCategoryServiceData.DELETE_ONE_PRODUCTCATEGORY_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteProductCategoryServiceData.DELETE_ONE_PRODUCTCATEGORY_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteProductCategoryServiceData.DELETE_ONE_PRODUCTCATEGORY_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteProductCategoryServiceData.DELETE_ONE_PRODUCTCATEGORY_TS001_TC001.output)[2])
	});



    test(DeleteProductCategoryServiceData.DELETE_ONE_PRODUCTCATEGORY_TS001_TC002.description, async () => {

        const output = await DeleteProductCategoryService.deleteOneProductCategory(
            DeleteProductCategoryServiceData.DELETE_ONE_PRODUCTCATEGORY_TS001_TC002.input.databaseConnector,
            DeleteProductCategoryServiceData.DELETE_ONE_PRODUCTCATEGORY_TS001_TC002.input.apiID,
            DeleteProductCategoryServiceData.DELETE_ONE_PRODUCTCATEGORY_TS001_TC002.input.config,
            DeleteProductCategoryServiceData.DELETE_ONE_PRODUCTCATEGORY_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteProductCategoryServiceData.DELETE_ONE_PRODUCTCATEGORY_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteProductCategoryServiceData.DELETE_ONE_PRODUCTCATEGORY_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteProductCategoryServiceData.DELETE_ONE_PRODUCTCATEGORY_TS001_TC002.output.message)        
	});



    test(DeleteProductCategoryServiceData.DELETE_ONE_PRODUCTCATEGORY_TS001_TC003.description, async () => {

        const output = await DeleteProductCategoryService.deleteOneProductCategory(
            DeleteProductCategoryServiceData.DELETE_ONE_PRODUCTCATEGORY_TS001_TC003.input.databaseConnector,
            DeleteProductCategoryServiceData.DELETE_ONE_PRODUCTCATEGORY_TS001_TC003.input.apiID,
            DeleteProductCategoryServiceData.DELETE_ONE_PRODUCTCATEGORY_TS001_TC003.input.config,
            DeleteProductCategoryServiceData.DELETE_ONE_PRODUCTCATEGORY_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteProductCategoryServiceData.DELETE_ONE_PRODUCTCATEGORY_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteProductCategoryServiceData.DELETE_ONE_PRODUCTCATEGORY_TS001_TC003.output.message)        
	});

});
