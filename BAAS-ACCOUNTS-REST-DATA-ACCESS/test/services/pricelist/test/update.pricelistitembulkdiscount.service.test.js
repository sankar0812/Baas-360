

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update pricelistitembulkdiscount service class
**/

/**
 * Importing all required modules here
 */

const updatePriceListItemBulkDiscountServiceData = require("../data/update.pricelistitembulkdiscount.service.data")
const updatePriceListItemBulkDiscountService = require("../../../../src/services/pricelist/update.pricelistitembulkdiscount.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdatePriceListItemBulkDiscountService = new updatePriceListItemBulkDiscountService();
const UpdatePriceListItemBulkDiscountServiceData = new updatePriceListItemBulkDiscountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.pricelistitembulkdiscount.ts.001] | FunctionPath : [src/services/pricelist/update.pricelistitembulkdiscount.service.js/updatePriceListItemBulkDiscount()]", () => {

	test(UpdatePriceListItemBulkDiscountServiceData.UPDATE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.description, async () => {

        const output = await UpdatePriceListItemBulkDiscountService.updatePriceListItemBulkDiscount(
            UpdatePriceListItemBulkDiscountServiceData.UPDATE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.input.databaseConnector,
            UpdatePriceListItemBulkDiscountServiceData.UPDATE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.input.apiID,
            UpdatePriceListItemBulkDiscountServiceData.UPDATE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.input.config,
            UpdatePriceListItemBulkDiscountServiceData.UPDATE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdatePriceListItemBulkDiscountServiceData.UPDATE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdatePriceListItemBulkDiscountServiceData.UPDATE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdatePriceListItemBulkDiscountServiceData.UPDATE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.output)[2])
	});

    test(UpdatePriceListItemBulkDiscountServiceData.UPDATE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.description, async () => {

        const output = await UpdatePriceListItemBulkDiscountService.updatePriceListItemBulkDiscount(
            UpdatePriceListItemBulkDiscountServiceData.UPDATE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.input.databaseConnector,
            UpdatePriceListItemBulkDiscountServiceData.UPDATE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.input.apiID,
            UpdatePriceListItemBulkDiscountServiceData.UPDATE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.input.config,
            UpdatePriceListItemBulkDiscountServiceData.UPDATE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdatePriceListItemBulkDiscountServiceData.UPDATE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdatePriceListItemBulkDiscountServiceData.UPDATE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdatePriceListItemBulkDiscountServiceData.UPDATE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.output.message)        
	});

    test(UpdatePriceListItemBulkDiscountServiceData.UPDATE_PRICELISTITEMBULKDISCOUNT_TS001_TC003.description, async () => {

        const output = await UpdatePriceListItemBulkDiscountService.updatePriceListItemBulkDiscount(
            UpdatePriceListItemBulkDiscountServiceData.UPDATE_PRICELISTITEMBULKDISCOUNT_TS001_TC003.input.databaseConnector,
            UpdatePriceListItemBulkDiscountServiceData.UPDATE_PRICELISTITEMBULKDISCOUNT_TS001_TC003.input.apiID,
            UpdatePriceListItemBulkDiscountServiceData.UPDATE_PRICELISTITEMBULKDISCOUNT_TS001_TC003.input.config,
            UpdatePriceListItemBulkDiscountServiceData.UPDATE_PRICELISTITEMBULKDISCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdatePriceListItemBulkDiscountServiceData.UPDATE_PRICELISTITEMBULKDISCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdatePriceListItemBulkDiscountServiceData.UPDATE_PRICELISTITEMBULKDISCOUNT_TS001_TC003.output.message)        
	});

});
