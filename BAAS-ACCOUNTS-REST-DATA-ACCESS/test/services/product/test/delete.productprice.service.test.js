/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete productprice service class
**/

/**
 * Importing all required modules here
 */

const deleteProductPriceServiceData = require("../data/delete.productprice.service.data")
const deleteProductPriceService = require("../../../../src/services/product/delete.productprice.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteProductPriceService = new deleteProductPriceService();
const DeleteProductPriceServiceData = new deleteProductPriceServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productprice.ts.001] | FunctionPath : [src/services/product/delete.productprice.service.js/deleteOneProductPrice()]", () => {


	test(DeleteProductPriceServiceData.DELETE_ONE_PRODUCTPRICE_TS001_TC001.description, async () => {

        const output = await DeleteProductPriceService.deleteOneProductPrice(
            DeleteProductPriceServiceData.DELETE_ONE_PRODUCTPRICE_TS001_TC001.input.databaseConnector,
            DeleteProductPriceServiceData.DELETE_ONE_PRODUCTPRICE_TS001_TC001.input.apiID,
            DeleteProductPriceServiceData.DELETE_ONE_PRODUCTPRICE_TS001_TC001.input.config,
            DeleteProductPriceServiceData.DELETE_ONE_PRODUCTPRICE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteProductPriceServiceData.DELETE_ONE_PRODUCTPRICE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteProductPriceServiceData.DELETE_ONE_PRODUCTPRICE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteProductPriceServiceData.DELETE_ONE_PRODUCTPRICE_TS001_TC001.output)[2])
	});



    test(DeleteProductPriceServiceData.DELETE_ONE_PRODUCTPRICE_TS001_TC002.description, async () => {

        const output = await DeleteProductPriceService.deleteOneProductPrice(
            DeleteProductPriceServiceData.DELETE_ONE_PRODUCTPRICE_TS001_TC002.input.databaseConnector,
            DeleteProductPriceServiceData.DELETE_ONE_PRODUCTPRICE_TS001_TC002.input.apiID,
            DeleteProductPriceServiceData.DELETE_ONE_PRODUCTPRICE_TS001_TC002.input.config,
            DeleteProductPriceServiceData.DELETE_ONE_PRODUCTPRICE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteProductPriceServiceData.DELETE_ONE_PRODUCTPRICE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteProductPriceServiceData.DELETE_ONE_PRODUCTPRICE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteProductPriceServiceData.DELETE_ONE_PRODUCTPRICE_TS001_TC002.output.message)        
	});



    test(DeleteProductPriceServiceData.DELETE_ONE_PRODUCTPRICE_TS001_TC003.description, async () => {

        const output = await DeleteProductPriceService.deleteOneProductPrice(
            DeleteProductPriceServiceData.DELETE_ONE_PRODUCTPRICE_TS001_TC003.input.databaseConnector,
            DeleteProductPriceServiceData.DELETE_ONE_PRODUCTPRICE_TS001_TC003.input.apiID,
            DeleteProductPriceServiceData.DELETE_ONE_PRODUCTPRICE_TS001_TC003.input.config,
            DeleteProductPriceServiceData.DELETE_ONE_PRODUCTPRICE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteProductPriceServiceData.DELETE_ONE_PRODUCTPRICE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteProductPriceServiceData.DELETE_ONE_PRODUCTPRICE_TS001_TC003.output.message)        
	});

});
