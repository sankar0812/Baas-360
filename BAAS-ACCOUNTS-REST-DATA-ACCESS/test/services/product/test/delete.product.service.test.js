/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete product service class
**/

/**
 * Importing all required modules here
 */

const deleteProductServiceData = require("../data/delete.product.service.data")
const deleteProductService = require("../../../../src/services/product/delete.product.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteProductService = new deleteProductService();
const DeleteProductServiceData = new deleteProductServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.product.ts.001] | FunctionPath : [src/services/product/delete.product.service.js/deleteOneProduct()]", () => {


	test(DeleteProductServiceData.DELETE_ONE_PRODUCT_TS001_TC001.description, async () => {

        const output = await DeleteProductService.deleteOneProduct(
            DeleteProductServiceData.DELETE_ONE_PRODUCT_TS001_TC001.input.databaseConnector,
            DeleteProductServiceData.DELETE_ONE_PRODUCT_TS001_TC001.input.apiID,
            DeleteProductServiceData.DELETE_ONE_PRODUCT_TS001_TC001.input.config,
            DeleteProductServiceData.DELETE_ONE_PRODUCT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteProductServiceData.DELETE_ONE_PRODUCT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteProductServiceData.DELETE_ONE_PRODUCT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteProductServiceData.DELETE_ONE_PRODUCT_TS001_TC001.output)[2])
	});



    test(DeleteProductServiceData.DELETE_ONE_PRODUCT_TS001_TC002.description, async () => {

        const output = await DeleteProductService.deleteOneProduct(
            DeleteProductServiceData.DELETE_ONE_PRODUCT_TS001_TC002.input.databaseConnector,
            DeleteProductServiceData.DELETE_ONE_PRODUCT_TS001_TC002.input.apiID,
            DeleteProductServiceData.DELETE_ONE_PRODUCT_TS001_TC002.input.config,
            DeleteProductServiceData.DELETE_ONE_PRODUCT_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteProductServiceData.DELETE_ONE_PRODUCT_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteProductServiceData.DELETE_ONE_PRODUCT_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteProductServiceData.DELETE_ONE_PRODUCT_TS001_TC002.output.message)        
	});



    test(DeleteProductServiceData.DELETE_ONE_PRODUCT_TS001_TC003.description, async () => {

        const output = await DeleteProductService.deleteOneProduct(
            DeleteProductServiceData.DELETE_ONE_PRODUCT_TS001_TC003.input.databaseConnector,
            DeleteProductServiceData.DELETE_ONE_PRODUCT_TS001_TC003.input.apiID,
            DeleteProductServiceData.DELETE_ONE_PRODUCT_TS001_TC003.input.config,
            DeleteProductServiceData.DELETE_ONE_PRODUCT_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteProductServiceData.DELETE_ONE_PRODUCT_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteProductServiceData.DELETE_ONE_PRODUCT_TS001_TC003.output.message)        
	});

});
