/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create product service class
**/

/**
 * Importing all required modules here
 */

const createProductServiceData = require("../data/create.product.service.data")
const createProductService = require("../../../../src/services/product/create.product.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateProductService = new createProductService();
const CreateProductServiceData = new createProductServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.product.ts.001] | FunctionPath : [src/services/product/create.product.service.js/createOneProduct()]", () => {


	test(CreateProductServiceData.CREATE_ONE_PRODUCT_TS001_TC001.description, async () => {

        const output = await CreateProductService.createOneProduct(
            CreateProductServiceData.CREATE_ONE_PRODUCT_TS001_TC001.input.databaseConnector,
            CreateProductServiceData.CREATE_ONE_PRODUCT_TS001_TC001.input.apiID,
            CreateProductServiceData.CREATE_ONE_PRODUCT_TS001_TC001.input.config,
            CreateProductServiceData.CREATE_ONE_PRODUCT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateProductServiceData.CREATE_ONE_PRODUCT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateProductServiceData.CREATE_ONE_PRODUCT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateProductServiceData.CREATE_ONE_PRODUCT_TS001_TC001.output)[2])
	});



    test(CreateProductServiceData.CREATE_ONE_PRODUCT_TS001_TC002.description, async () => {

        const output = await CreateProductService.createOneProduct(
            CreateProductServiceData.CREATE_ONE_PRODUCT_TS001_TC002.input.databaseConnector,
            CreateProductServiceData.CREATE_ONE_PRODUCT_TS001_TC002.input.apiID,
            CreateProductServiceData.CREATE_ONE_PRODUCT_TS001_TC002.input.config,
            CreateProductServiceData.CREATE_ONE_PRODUCT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateProductServiceData.CREATE_ONE_PRODUCT_TS001_TC002.output.data)
        expect(output.status).toBe(CreateProductServiceData.CREATE_ONE_PRODUCT_TS001_TC002.output.status)
        expect(output.message).toBe(CreateProductServiceData.CREATE_ONE_PRODUCT_TS001_TC002.output.message)        
	});



    test(CreateProductServiceData.CREATE_ONE_PRODUCT_TS001_TC003.description, async () => {

        const output = await CreateProductService.createOneProduct(
            CreateProductServiceData.CREATE_ONE_PRODUCT_TS001_TC003.input.databaseConnector,
            CreateProductServiceData.CREATE_ONE_PRODUCT_TS001_TC003.input.apiID,
            CreateProductServiceData.CREATE_ONE_PRODUCT_TS001_TC003.input.config,
            CreateProductServiceData.CREATE_ONE_PRODUCT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateProductServiceData.CREATE_ONE_PRODUCT_TS001_TC003.output.status)
        expect(output.message).toBe(CreateProductServiceData.CREATE_ONE_PRODUCT_TS001_TC003.output.message)        
	});

});