/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete productbulkdiscount service class
**/

/**
 * Importing all required modules here
 */

const deleteProductBulkDiscountServiceData = require("../data/delete.productbulkdiscount.service.data")
const deleteProductBulkDiscountService = require("../../../../src/services/product/delete.productbulkdiscount.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteProductBulkDiscountService = new deleteProductBulkDiscountService();
const DeleteProductBulkDiscountServiceData = new deleteProductBulkDiscountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productbulkdiscount.ts.001] | FunctionPath : [src/services/product/delete.productbulkdiscount.service.js/deleteOneProductBulkDiscount()]", () => {


	test(DeleteProductBulkDiscountServiceData.DELETE_ONE_PRODUCTBULKDISCOUNT_TS001_TC001.description, async () => {

        const output = await DeleteProductBulkDiscountService.deleteOneProductBulkDiscount(
            DeleteProductBulkDiscountServiceData.DELETE_ONE_PRODUCTBULKDISCOUNT_TS001_TC001.input.databaseConnector,
            DeleteProductBulkDiscountServiceData.DELETE_ONE_PRODUCTBULKDISCOUNT_TS001_TC001.input.apiID,
            DeleteProductBulkDiscountServiceData.DELETE_ONE_PRODUCTBULKDISCOUNT_TS001_TC001.input.config,
            DeleteProductBulkDiscountServiceData.DELETE_ONE_PRODUCTBULKDISCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteProductBulkDiscountServiceData.DELETE_ONE_PRODUCTBULKDISCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteProductBulkDiscountServiceData.DELETE_ONE_PRODUCTBULKDISCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteProductBulkDiscountServiceData.DELETE_ONE_PRODUCTBULKDISCOUNT_TS001_TC001.output)[2])
	});



    test(DeleteProductBulkDiscountServiceData.DELETE_ONE_PRODUCTBULKDISCOUNT_TS001_TC002.description, async () => {

        const output = await DeleteProductBulkDiscountService.deleteOneProductBulkDiscount(
            DeleteProductBulkDiscountServiceData.DELETE_ONE_PRODUCTBULKDISCOUNT_TS001_TC002.input.databaseConnector,
            DeleteProductBulkDiscountServiceData.DELETE_ONE_PRODUCTBULKDISCOUNT_TS001_TC002.input.apiID,
            DeleteProductBulkDiscountServiceData.DELETE_ONE_PRODUCTBULKDISCOUNT_TS001_TC002.input.config,
            DeleteProductBulkDiscountServiceData.DELETE_ONE_PRODUCTBULKDISCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteProductBulkDiscountServiceData.DELETE_ONE_PRODUCTBULKDISCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteProductBulkDiscountServiceData.DELETE_ONE_PRODUCTBULKDISCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteProductBulkDiscountServiceData.DELETE_ONE_PRODUCTBULKDISCOUNT_TS001_TC002.output.message)        
	});



    test(DeleteProductBulkDiscountServiceData.DELETE_ONE_PRODUCTBULKDISCOUNT_TS001_TC003.description, async () => {

        const output = await DeleteProductBulkDiscountService.deleteOneProductBulkDiscount(
            DeleteProductBulkDiscountServiceData.DELETE_ONE_PRODUCTBULKDISCOUNT_TS001_TC003.input.databaseConnector,
            DeleteProductBulkDiscountServiceData.DELETE_ONE_PRODUCTBULKDISCOUNT_TS001_TC003.input.apiID,
            DeleteProductBulkDiscountServiceData.DELETE_ONE_PRODUCTBULKDISCOUNT_TS001_TC003.input.config,
            DeleteProductBulkDiscountServiceData.DELETE_ONE_PRODUCTBULKDISCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteProductBulkDiscountServiceData.DELETE_ONE_PRODUCTBULKDISCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteProductBulkDiscountServiceData.DELETE_ONE_PRODUCTBULKDISCOUNT_TS001_TC003.output.message)        
	});

});
