/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create productcategory service class
**/

/**
 * Importing all required modules here
 */

const createProductCategoryServiceData = require("../data/create.productcategory.service.data")
const createProductCategoryService = require("../../../../src/services/product/create.productcategory.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateProductCategoryService = new createProductCategoryService();
const CreateProductCategoryServiceData = new createProductCategoryServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productcategory.ts.001] | FunctionPath : [src/services/product/create.productcategory.service.js/createOneProductCategory()]", () => {


	test(CreateProductCategoryServiceData.CREATE_ONE_PRODUCTCATEGORY_TS001_TC001.description, async () => {

        const output = await CreateProductCategoryService.createOneProductCategory(
            CreateProductCategoryServiceData.CREATE_ONE_PRODUCTCATEGORY_TS001_TC001.input.databaseConnector,
            CreateProductCategoryServiceData.CREATE_ONE_PRODUCTCATEGORY_TS001_TC001.input.apiID,
            CreateProductCategoryServiceData.CREATE_ONE_PRODUCTCATEGORY_TS001_TC001.input.config,
            CreateProductCategoryServiceData.CREATE_ONE_PRODUCTCATEGORY_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateProductCategoryServiceData.CREATE_ONE_PRODUCTCATEGORY_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateProductCategoryServiceData.CREATE_ONE_PRODUCTCATEGORY_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateProductCategoryServiceData.CREATE_ONE_PRODUCTCATEGORY_TS001_TC001.output)[2])
	});



    test(CreateProductCategoryServiceData.CREATE_ONE_PRODUCTCATEGORY_TS001_TC002.description, async () => {

        const output = await CreateProductCategoryService.createOneProductCategory(
            CreateProductCategoryServiceData.CREATE_ONE_PRODUCTCATEGORY_TS001_TC002.input.databaseConnector,
            CreateProductCategoryServiceData.CREATE_ONE_PRODUCTCATEGORY_TS001_TC002.input.apiID,
            CreateProductCategoryServiceData.CREATE_ONE_PRODUCTCATEGORY_TS001_TC002.input.config,
            CreateProductCategoryServiceData.CREATE_ONE_PRODUCTCATEGORY_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateProductCategoryServiceData.CREATE_ONE_PRODUCTCATEGORY_TS001_TC002.output.data)
        expect(output.status).toBe(CreateProductCategoryServiceData.CREATE_ONE_PRODUCTCATEGORY_TS001_TC002.output.status)
        expect(output.message).toBe(CreateProductCategoryServiceData.CREATE_ONE_PRODUCTCATEGORY_TS001_TC002.output.message)        
	});



    test(CreateProductCategoryServiceData.CREATE_ONE_PRODUCTCATEGORY_TS001_TC003.description, async () => {

        const output = await CreateProductCategoryService.createOneProductCategory(
            CreateProductCategoryServiceData.CREATE_ONE_PRODUCTCATEGORY_TS001_TC003.input.databaseConnector,
            CreateProductCategoryServiceData.CREATE_ONE_PRODUCTCATEGORY_TS001_TC003.input.apiID,
            CreateProductCategoryServiceData.CREATE_ONE_PRODUCTCATEGORY_TS001_TC003.input.config,
            CreateProductCategoryServiceData.CREATE_ONE_PRODUCTCATEGORY_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateProductCategoryServiceData.CREATE_ONE_PRODUCTCATEGORY_TS001_TC003.output.status)
        expect(output.message).toBe(CreateProductCategoryServiceData.CREATE_ONE_PRODUCTCATEGORY_TS001_TC003.output.message)        
	});

});