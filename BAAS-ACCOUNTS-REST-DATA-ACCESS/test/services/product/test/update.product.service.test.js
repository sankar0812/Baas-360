

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update product service class
**/

/**
 * Importing all required modules here
 */

const updateProductServiceData = require("../data/update.product.service.data")
const updateProductService = require("../../../../src/services/product/update.product.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateProductService = new updateProductService();
const UpdateProductServiceData = new updateProductServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.product.ts.001] | FunctionPath : [src/services/product/update.product.service.js/updateProduct()]", () => {

	test(UpdateProductServiceData.UPDATE_PRODUCT_TS001_TC001.description, async () => {

        const output = await UpdateProductService.updateProduct(
            UpdateProductServiceData.UPDATE_PRODUCT_TS001_TC001.input.databaseConnector,
            UpdateProductServiceData.UPDATE_PRODUCT_TS001_TC001.input.apiID,
            UpdateProductServiceData.UPDATE_PRODUCT_TS001_TC001.input.config,
            UpdateProductServiceData.UPDATE_PRODUCT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateProductServiceData.UPDATE_PRODUCT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateProductServiceData.UPDATE_PRODUCT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateProductServiceData.UPDATE_PRODUCT_TS001_TC001.output)[2])
	});

    test(UpdateProductServiceData.UPDATE_PRODUCT_TS001_TC002.description, async () => {

        const output = await UpdateProductService.updateProduct(
            UpdateProductServiceData.UPDATE_PRODUCT_TS001_TC002.input.databaseConnector,
            UpdateProductServiceData.UPDATE_PRODUCT_TS001_TC002.input.apiID,
            UpdateProductServiceData.UPDATE_PRODUCT_TS001_TC002.input.config,
            UpdateProductServiceData.UPDATE_PRODUCT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateProductServiceData.UPDATE_PRODUCT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateProductServiceData.UPDATE_PRODUCT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateProductServiceData.UPDATE_PRODUCT_TS001_TC002.output.message)        
	});

    test(UpdateProductServiceData.UPDATE_PRODUCT_TS001_TC003.description, async () => {

        const output = await UpdateProductService.updateProduct(
            UpdateProductServiceData.UPDATE_PRODUCT_TS001_TC003.input.databaseConnector,
            UpdateProductServiceData.UPDATE_PRODUCT_TS001_TC003.input.apiID,
            UpdateProductServiceData.UPDATE_PRODUCT_TS001_TC003.input.config,
            UpdateProductServiceData.UPDATE_PRODUCT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateProductServiceData.UPDATE_PRODUCT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateProductServiceData.UPDATE_PRODUCT_TS001_TC003.output.message)        
	});

});
