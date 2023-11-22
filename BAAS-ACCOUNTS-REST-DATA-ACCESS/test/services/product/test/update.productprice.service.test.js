

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update productprice service class
**/

/**
 * Importing all required modules here
 */

const updateProductPriceServiceData = require("../data/update.productprice.service.data")
const updateProductPriceService = require("../../../../src/services/product/update.productprice.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateProductPriceService = new updateProductPriceService();
const UpdateProductPriceServiceData = new updateProductPriceServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productprice.ts.001] | FunctionPath : [src/services/product/update.productprice.service.js/updateProductPrice()]", () => {

	test(UpdateProductPriceServiceData.UPDATE_PRODUCTPRICE_TS001_TC001.description, async () => {

        const output = await UpdateProductPriceService.updateProductPrice(
            UpdateProductPriceServiceData.UPDATE_PRODUCTPRICE_TS001_TC001.input.databaseConnector,
            UpdateProductPriceServiceData.UPDATE_PRODUCTPRICE_TS001_TC001.input.apiID,
            UpdateProductPriceServiceData.UPDATE_PRODUCTPRICE_TS001_TC001.input.config,
            UpdateProductPriceServiceData.UPDATE_PRODUCTPRICE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateProductPriceServiceData.UPDATE_PRODUCTPRICE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateProductPriceServiceData.UPDATE_PRODUCTPRICE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateProductPriceServiceData.UPDATE_PRODUCTPRICE_TS001_TC001.output)[2])
	});

    test(UpdateProductPriceServiceData.UPDATE_PRODUCTPRICE_TS001_TC002.description, async () => {

        const output = await UpdateProductPriceService.updateProductPrice(
            UpdateProductPriceServiceData.UPDATE_PRODUCTPRICE_TS001_TC002.input.databaseConnector,
            UpdateProductPriceServiceData.UPDATE_PRODUCTPRICE_TS001_TC002.input.apiID,
            UpdateProductPriceServiceData.UPDATE_PRODUCTPRICE_TS001_TC002.input.config,
            UpdateProductPriceServiceData.UPDATE_PRODUCTPRICE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateProductPriceServiceData.UPDATE_PRODUCTPRICE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateProductPriceServiceData.UPDATE_PRODUCTPRICE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateProductPriceServiceData.UPDATE_PRODUCTPRICE_TS001_TC002.output.message)        
	});

    test(UpdateProductPriceServiceData.UPDATE_PRODUCTPRICE_TS001_TC003.description, async () => {

        const output = await UpdateProductPriceService.updateProductPrice(
            UpdateProductPriceServiceData.UPDATE_PRODUCTPRICE_TS001_TC003.input.databaseConnector,
            UpdateProductPriceServiceData.UPDATE_PRODUCTPRICE_TS001_TC003.input.apiID,
            UpdateProductPriceServiceData.UPDATE_PRODUCTPRICE_TS001_TC003.input.config,
            UpdateProductPriceServiceData.UPDATE_PRODUCTPRICE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateProductPriceServiceData.UPDATE_PRODUCTPRICE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateProductPriceServiceData.UPDATE_PRODUCTPRICE_TS001_TC003.output.message)        
	});

});
