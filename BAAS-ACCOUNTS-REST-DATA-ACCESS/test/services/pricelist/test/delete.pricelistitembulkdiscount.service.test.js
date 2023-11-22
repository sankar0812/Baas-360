/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete pricelistitembulkdiscount service class
**/

/**
 * Importing all required modules here
 */

const deletePriceListItemBulkDiscountServiceData = require("../data/delete.pricelistitembulkdiscount.service.data")
const deletePriceListItemBulkDiscountService = require("../../../../src/services/pricelist/delete.pricelistitembulkdiscount.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeletePriceListItemBulkDiscountService = new deletePriceListItemBulkDiscountService();
const DeletePriceListItemBulkDiscountServiceData = new deletePriceListItemBulkDiscountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.pricelistitembulkdiscount.ts.001] | FunctionPath : [src/services/pricelist/delete.pricelistitembulkdiscount.service.js/deleteOnePriceListItemBulkDiscount()]", () => {


	test(DeletePriceListItemBulkDiscountServiceData.DELETE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.description, async () => {

        const output = await DeletePriceListItemBulkDiscountService.deleteOnePriceListItemBulkDiscount(
            DeletePriceListItemBulkDiscountServiceData.DELETE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.input.databaseConnector,
            DeletePriceListItemBulkDiscountServiceData.DELETE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.input.apiID,
            DeletePriceListItemBulkDiscountServiceData.DELETE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.input.config,
            DeletePriceListItemBulkDiscountServiceData.DELETE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeletePriceListItemBulkDiscountServiceData.DELETE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeletePriceListItemBulkDiscountServiceData.DELETE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeletePriceListItemBulkDiscountServiceData.DELETE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.output)[2])
	});



    test(DeletePriceListItemBulkDiscountServiceData.DELETE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.description, async () => {

        const output = await DeletePriceListItemBulkDiscountService.deleteOnePriceListItemBulkDiscount(
            DeletePriceListItemBulkDiscountServiceData.DELETE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.input.databaseConnector,
            DeletePriceListItemBulkDiscountServiceData.DELETE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.input.apiID,
            DeletePriceListItemBulkDiscountServiceData.DELETE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.input.config,
            DeletePriceListItemBulkDiscountServiceData.DELETE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeletePriceListItemBulkDiscountServiceData.DELETE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(DeletePriceListItemBulkDiscountServiceData.DELETE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(DeletePriceListItemBulkDiscountServiceData.DELETE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.output.message)        
	});



    test(DeletePriceListItemBulkDiscountServiceData.DELETE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC003.description, async () => {

        const output = await DeletePriceListItemBulkDiscountService.deleteOnePriceListItemBulkDiscount(
            DeletePriceListItemBulkDiscountServiceData.DELETE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC003.input.databaseConnector,
            DeletePriceListItemBulkDiscountServiceData.DELETE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC003.input.apiID,
            DeletePriceListItemBulkDiscountServiceData.DELETE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC003.input.config,
            DeletePriceListItemBulkDiscountServiceData.DELETE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeletePriceListItemBulkDiscountServiceData.DELETE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(DeletePriceListItemBulkDiscountServiceData.DELETE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC003.output.message)        
	});

});
