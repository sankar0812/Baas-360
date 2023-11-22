/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete costlistitembulkdiscount service class
**/

/**
 * Importing all required modules here
 */

const deleteCostListItemBulkDiscountServiceData = require("../data/delete.costlistitembulkdiscount.service.data")
const deleteCostListItemBulkDiscountService = require("../../../../src/services/cost/delete.costlistitembulkdiscount.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteCostListItemBulkDiscountService = new deleteCostListItemBulkDiscountService();
const DeleteCostListItemBulkDiscountServiceData = new deleteCostListItemBulkDiscountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.costlistitembulkdiscount.ts.001] | FunctionPath : [src/services/cost/delete.costlistitembulkdiscount.service.js/deleteOneCostListItemBulkDiscount()]", () => {


	test(DeleteCostListItemBulkDiscountServiceData.DELETE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.description, async () => {

        const output = await DeleteCostListItemBulkDiscountService.deleteOneCostListItemBulkDiscount(
            DeleteCostListItemBulkDiscountServiceData.DELETE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.input.databaseConnector,
            DeleteCostListItemBulkDiscountServiceData.DELETE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.input.apiID,
            DeleteCostListItemBulkDiscountServiceData.DELETE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.input.config,
            DeleteCostListItemBulkDiscountServiceData.DELETE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteCostListItemBulkDiscountServiceData.DELETE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteCostListItemBulkDiscountServiceData.DELETE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteCostListItemBulkDiscountServiceData.DELETE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.output)[2])
	});



    test(DeleteCostListItemBulkDiscountServiceData.DELETE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.description, async () => {

        const output = await DeleteCostListItemBulkDiscountService.deleteOneCostListItemBulkDiscount(
            DeleteCostListItemBulkDiscountServiceData.DELETE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.input.databaseConnector,
            DeleteCostListItemBulkDiscountServiceData.DELETE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.input.apiID,
            DeleteCostListItemBulkDiscountServiceData.DELETE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.input.config,
            DeleteCostListItemBulkDiscountServiceData.DELETE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteCostListItemBulkDiscountServiceData.DELETE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteCostListItemBulkDiscountServiceData.DELETE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteCostListItemBulkDiscountServiceData.DELETE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.output.message)        
	});



    test(DeleteCostListItemBulkDiscountServiceData.DELETE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC003.description, async () => {

        const output = await DeleteCostListItemBulkDiscountService.deleteOneCostListItemBulkDiscount(
            DeleteCostListItemBulkDiscountServiceData.DELETE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC003.input.databaseConnector,
            DeleteCostListItemBulkDiscountServiceData.DELETE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC003.input.apiID,
            DeleteCostListItemBulkDiscountServiceData.DELETE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC003.input.config,
            DeleteCostListItemBulkDiscountServiceData.DELETE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteCostListItemBulkDiscountServiceData.DELETE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteCostListItemBulkDiscountServiceData.DELETE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC003.output.message)        
	});

});
