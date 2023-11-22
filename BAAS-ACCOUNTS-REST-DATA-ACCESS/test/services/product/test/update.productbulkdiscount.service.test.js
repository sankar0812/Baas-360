

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update productbulkdiscount service class
**/

/**
 * Importing all required modules here
 */

const updateProductBulkDiscountServiceData = require("../data/update.productbulkdiscount.service.data")
const updateProductBulkDiscountService = require("../../../../src/services/product/update.productbulkdiscount.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateProductBulkDiscountService = new updateProductBulkDiscountService();
const UpdateProductBulkDiscountServiceData = new updateProductBulkDiscountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productbulkdiscount.ts.001] | FunctionPath : [src/services/product/update.productbulkdiscount.service.js/updateProductBulkDiscount()]", () => {

	test(UpdateProductBulkDiscountServiceData.UPDATE_PRODUCTBULKDISCOUNT_TS001_TC001.description, async () => {

        const output = await UpdateProductBulkDiscountService.updateProductBulkDiscount(
            UpdateProductBulkDiscountServiceData.UPDATE_PRODUCTBULKDISCOUNT_TS001_TC001.input.databaseConnector,
            UpdateProductBulkDiscountServiceData.UPDATE_PRODUCTBULKDISCOUNT_TS001_TC001.input.apiID,
            UpdateProductBulkDiscountServiceData.UPDATE_PRODUCTBULKDISCOUNT_TS001_TC001.input.config,
            UpdateProductBulkDiscountServiceData.UPDATE_PRODUCTBULKDISCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateProductBulkDiscountServiceData.UPDATE_PRODUCTBULKDISCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateProductBulkDiscountServiceData.UPDATE_PRODUCTBULKDISCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateProductBulkDiscountServiceData.UPDATE_PRODUCTBULKDISCOUNT_TS001_TC001.output)[2])
	});

    test(UpdateProductBulkDiscountServiceData.UPDATE_PRODUCTBULKDISCOUNT_TS001_TC002.description, async () => {

        const output = await UpdateProductBulkDiscountService.updateProductBulkDiscount(
            UpdateProductBulkDiscountServiceData.UPDATE_PRODUCTBULKDISCOUNT_TS001_TC002.input.databaseConnector,
            UpdateProductBulkDiscountServiceData.UPDATE_PRODUCTBULKDISCOUNT_TS001_TC002.input.apiID,
            UpdateProductBulkDiscountServiceData.UPDATE_PRODUCTBULKDISCOUNT_TS001_TC002.input.config,
            UpdateProductBulkDiscountServiceData.UPDATE_PRODUCTBULKDISCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateProductBulkDiscountServiceData.UPDATE_PRODUCTBULKDISCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateProductBulkDiscountServiceData.UPDATE_PRODUCTBULKDISCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateProductBulkDiscountServiceData.UPDATE_PRODUCTBULKDISCOUNT_TS001_TC002.output.message)        
	});

    test(UpdateProductBulkDiscountServiceData.UPDATE_PRODUCTBULKDISCOUNT_TS001_TC003.description, async () => {

        const output = await UpdateProductBulkDiscountService.updateProductBulkDiscount(
            UpdateProductBulkDiscountServiceData.UPDATE_PRODUCTBULKDISCOUNT_TS001_TC003.input.databaseConnector,
            UpdateProductBulkDiscountServiceData.UPDATE_PRODUCTBULKDISCOUNT_TS001_TC003.input.apiID,
            UpdateProductBulkDiscountServiceData.UPDATE_PRODUCTBULKDISCOUNT_TS001_TC003.input.config,
            UpdateProductBulkDiscountServiceData.UPDATE_PRODUCTBULKDISCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateProductBulkDiscountServiceData.UPDATE_PRODUCTBULKDISCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateProductBulkDiscountServiceData.UPDATE_PRODUCTBULKDISCOUNT_TS001_TC003.output.message)        
	});

});
