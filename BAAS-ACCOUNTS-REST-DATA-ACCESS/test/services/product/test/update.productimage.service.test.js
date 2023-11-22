

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update productimage service class
**/

/**
 * Importing all required modules here
 */

const updateProductImageServiceData = require("../data/update.productimage.service.data")
const updateProductImageService = require("../../../../src/services/product/update.productimage.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateProductImageService = new updateProductImageService();
const UpdateProductImageServiceData = new updateProductImageServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productimage.ts.001] | FunctionPath : [src/services/product/update.productimage.service.js/updateProductImage()]", () => {

	test(UpdateProductImageServiceData.UPDATE_PRODUCTIMAGE_TS001_TC001.description, async () => {

        const output = await UpdateProductImageService.updateProductImage(
            UpdateProductImageServiceData.UPDATE_PRODUCTIMAGE_TS001_TC001.input.databaseConnector,
            UpdateProductImageServiceData.UPDATE_PRODUCTIMAGE_TS001_TC001.input.apiID,
            UpdateProductImageServiceData.UPDATE_PRODUCTIMAGE_TS001_TC001.input.config,
            UpdateProductImageServiceData.UPDATE_PRODUCTIMAGE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateProductImageServiceData.UPDATE_PRODUCTIMAGE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateProductImageServiceData.UPDATE_PRODUCTIMAGE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateProductImageServiceData.UPDATE_PRODUCTIMAGE_TS001_TC001.output)[2])
	});

    test(UpdateProductImageServiceData.UPDATE_PRODUCTIMAGE_TS001_TC002.description, async () => {

        const output = await UpdateProductImageService.updateProductImage(
            UpdateProductImageServiceData.UPDATE_PRODUCTIMAGE_TS001_TC002.input.databaseConnector,
            UpdateProductImageServiceData.UPDATE_PRODUCTIMAGE_TS001_TC002.input.apiID,
            UpdateProductImageServiceData.UPDATE_PRODUCTIMAGE_TS001_TC002.input.config,
            UpdateProductImageServiceData.UPDATE_PRODUCTIMAGE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateProductImageServiceData.UPDATE_PRODUCTIMAGE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateProductImageServiceData.UPDATE_PRODUCTIMAGE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateProductImageServiceData.UPDATE_PRODUCTIMAGE_TS001_TC002.output.message)        
	});

    test(UpdateProductImageServiceData.UPDATE_PRODUCTIMAGE_TS001_TC003.description, async () => {

        const output = await UpdateProductImageService.updateProductImage(
            UpdateProductImageServiceData.UPDATE_PRODUCTIMAGE_TS001_TC003.input.databaseConnector,
            UpdateProductImageServiceData.UPDATE_PRODUCTIMAGE_TS001_TC003.input.apiID,
            UpdateProductImageServiceData.UPDATE_PRODUCTIMAGE_TS001_TC003.input.config,
            UpdateProductImageServiceData.UPDATE_PRODUCTIMAGE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateProductImageServiceData.UPDATE_PRODUCTIMAGE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateProductImageServiceData.UPDATE_PRODUCTIMAGE_TS001_TC003.output.message)        
	});

});
