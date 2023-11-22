

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update costlistitembulkdiscount service class
**/

/**
 * Importing all required modules here
 */

const updateCostListItemBulkDiscountServiceData = require("../data/update.costlistitembulkdiscount.service.data")
const updateCostListItemBulkDiscountService = require("../../../../src/services/cost/update.costlistitembulkdiscount.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateCostListItemBulkDiscountService = new updateCostListItemBulkDiscountService();
const UpdateCostListItemBulkDiscountServiceData = new updateCostListItemBulkDiscountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.costlistitembulkdiscount.ts.001] | FunctionPath : [src/services/cost/update.costlistitembulkdiscount.service.js/updateCostListItemBulkDiscount()]", () => {

	test(UpdateCostListItemBulkDiscountServiceData.UPDATE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.description, async () => {

        const output = await UpdateCostListItemBulkDiscountService.updateCostListItemBulkDiscount(
            UpdateCostListItemBulkDiscountServiceData.UPDATE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.input.databaseConnector,
            UpdateCostListItemBulkDiscountServiceData.UPDATE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.input.apiID,
            UpdateCostListItemBulkDiscountServiceData.UPDATE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.input.config,
            UpdateCostListItemBulkDiscountServiceData.UPDATE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateCostListItemBulkDiscountServiceData.UPDATE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateCostListItemBulkDiscountServiceData.UPDATE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateCostListItemBulkDiscountServiceData.UPDATE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.output)[2])
	});

    test(UpdateCostListItemBulkDiscountServiceData.UPDATE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.description, async () => {

        const output = await UpdateCostListItemBulkDiscountService.updateCostListItemBulkDiscount(
            UpdateCostListItemBulkDiscountServiceData.UPDATE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.input.databaseConnector,
            UpdateCostListItemBulkDiscountServiceData.UPDATE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.input.apiID,
            UpdateCostListItemBulkDiscountServiceData.UPDATE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.input.config,
            UpdateCostListItemBulkDiscountServiceData.UPDATE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateCostListItemBulkDiscountServiceData.UPDATE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateCostListItemBulkDiscountServiceData.UPDATE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateCostListItemBulkDiscountServiceData.UPDATE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.output.message)        
	});

    test(UpdateCostListItemBulkDiscountServiceData.UPDATE_COSTLISTITEMBULKDISCOUNT_TS001_TC003.description, async () => {

        const output = await UpdateCostListItemBulkDiscountService.updateCostListItemBulkDiscount(
            UpdateCostListItemBulkDiscountServiceData.UPDATE_COSTLISTITEMBULKDISCOUNT_TS001_TC003.input.databaseConnector,
            UpdateCostListItemBulkDiscountServiceData.UPDATE_COSTLISTITEMBULKDISCOUNT_TS001_TC003.input.apiID,
            UpdateCostListItemBulkDiscountServiceData.UPDATE_COSTLISTITEMBULKDISCOUNT_TS001_TC003.input.config,
            UpdateCostListItemBulkDiscountServiceData.UPDATE_COSTLISTITEMBULKDISCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateCostListItemBulkDiscountServiceData.UPDATE_COSTLISTITEMBULKDISCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateCostListItemBulkDiscountServiceData.UPDATE_COSTLISTITEMBULKDISCOUNT_TS001_TC003.output.message)        
	});

});
