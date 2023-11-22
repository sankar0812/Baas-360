/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete productimage service class
**/

/**
 * Importing all required modules here
 */

const deleteProductImageServiceData = require("../data/delete.productimage.service.data")
const deleteProductImageService = require("../../../../src/services/product/delete.productimage.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteProductImageService = new deleteProductImageService();
const DeleteProductImageServiceData = new deleteProductImageServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productimage.ts.001] | FunctionPath : [src/services/product/delete.productimage.service.js/deleteOneProductImage()]", () => {


	test(DeleteProductImageServiceData.DELETE_ONE_PRODUCTIMAGE_TS001_TC001.description, async () => {

        const output = await DeleteProductImageService.deleteOneProductImage(
            DeleteProductImageServiceData.DELETE_ONE_PRODUCTIMAGE_TS001_TC001.input.databaseConnector,
            DeleteProductImageServiceData.DELETE_ONE_PRODUCTIMAGE_TS001_TC001.input.apiID,
            DeleteProductImageServiceData.DELETE_ONE_PRODUCTIMAGE_TS001_TC001.input.config,
            DeleteProductImageServiceData.DELETE_ONE_PRODUCTIMAGE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteProductImageServiceData.DELETE_ONE_PRODUCTIMAGE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteProductImageServiceData.DELETE_ONE_PRODUCTIMAGE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteProductImageServiceData.DELETE_ONE_PRODUCTIMAGE_TS001_TC001.output)[2])
	});



    test(DeleteProductImageServiceData.DELETE_ONE_PRODUCTIMAGE_TS001_TC002.description, async () => {

        const output = await DeleteProductImageService.deleteOneProductImage(
            DeleteProductImageServiceData.DELETE_ONE_PRODUCTIMAGE_TS001_TC002.input.databaseConnector,
            DeleteProductImageServiceData.DELETE_ONE_PRODUCTIMAGE_TS001_TC002.input.apiID,
            DeleteProductImageServiceData.DELETE_ONE_PRODUCTIMAGE_TS001_TC002.input.config,
            DeleteProductImageServiceData.DELETE_ONE_PRODUCTIMAGE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteProductImageServiceData.DELETE_ONE_PRODUCTIMAGE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteProductImageServiceData.DELETE_ONE_PRODUCTIMAGE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteProductImageServiceData.DELETE_ONE_PRODUCTIMAGE_TS001_TC002.output.message)        
	});



    test(DeleteProductImageServiceData.DELETE_ONE_PRODUCTIMAGE_TS001_TC003.description, async () => {

        const output = await DeleteProductImageService.deleteOneProductImage(
            DeleteProductImageServiceData.DELETE_ONE_PRODUCTIMAGE_TS001_TC003.input.databaseConnector,
            DeleteProductImageServiceData.DELETE_ONE_PRODUCTIMAGE_TS001_TC003.input.apiID,
            DeleteProductImageServiceData.DELETE_ONE_PRODUCTIMAGE_TS001_TC003.input.config,
            DeleteProductImageServiceData.DELETE_ONE_PRODUCTIMAGE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteProductImageServiceData.DELETE_ONE_PRODUCTIMAGE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteProductImageServiceData.DELETE_ONE_PRODUCTIMAGE_TS001_TC003.output.message)        
	});

});
