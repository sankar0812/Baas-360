/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create productimage service class
**/

/**
 * Importing all required modules here
 */

const createProductImageServiceData = require("../data/create.productimage.service.data")
const createProductImageService = require("../../../../src/services/product/create.productimage.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateProductImageService = new createProductImageService();
const CreateProductImageServiceData = new createProductImageServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productimage.ts.001] | FunctionPath : [src/services/product/create.productimage.service.js/createOneProductImage()]", () => {


	test(CreateProductImageServiceData.CREATE_ONE_PRODUCTIMAGE_TS001_TC001.description, async () => {

        const output = await CreateProductImageService.createOneProductImage(
            CreateProductImageServiceData.CREATE_ONE_PRODUCTIMAGE_TS001_TC001.input.databaseConnector,
            CreateProductImageServiceData.CREATE_ONE_PRODUCTIMAGE_TS001_TC001.input.apiID,
            CreateProductImageServiceData.CREATE_ONE_PRODUCTIMAGE_TS001_TC001.input.config,
            CreateProductImageServiceData.CREATE_ONE_PRODUCTIMAGE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateProductImageServiceData.CREATE_ONE_PRODUCTIMAGE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateProductImageServiceData.CREATE_ONE_PRODUCTIMAGE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateProductImageServiceData.CREATE_ONE_PRODUCTIMAGE_TS001_TC001.output)[2])
	});



    test(CreateProductImageServiceData.CREATE_ONE_PRODUCTIMAGE_TS001_TC002.description, async () => {

        const output = await CreateProductImageService.createOneProductImage(
            CreateProductImageServiceData.CREATE_ONE_PRODUCTIMAGE_TS001_TC002.input.databaseConnector,
            CreateProductImageServiceData.CREATE_ONE_PRODUCTIMAGE_TS001_TC002.input.apiID,
            CreateProductImageServiceData.CREATE_ONE_PRODUCTIMAGE_TS001_TC002.input.config,
            CreateProductImageServiceData.CREATE_ONE_PRODUCTIMAGE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateProductImageServiceData.CREATE_ONE_PRODUCTIMAGE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateProductImageServiceData.CREATE_ONE_PRODUCTIMAGE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateProductImageServiceData.CREATE_ONE_PRODUCTIMAGE_TS001_TC002.output.message)        
	});



    test(CreateProductImageServiceData.CREATE_ONE_PRODUCTIMAGE_TS001_TC003.description, async () => {

        const output = await CreateProductImageService.createOneProductImage(
            CreateProductImageServiceData.CREATE_ONE_PRODUCTIMAGE_TS001_TC003.input.databaseConnector,
            CreateProductImageServiceData.CREATE_ONE_PRODUCTIMAGE_TS001_TC003.input.apiID,
            CreateProductImageServiceData.CREATE_ONE_PRODUCTIMAGE_TS001_TC003.input.config,
            CreateProductImageServiceData.CREATE_ONE_PRODUCTIMAGE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateProductImageServiceData.CREATE_ONE_PRODUCTIMAGE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateProductImageServiceData.CREATE_ONE_PRODUCTIMAGE_TS001_TC003.output.message)        
	});

});