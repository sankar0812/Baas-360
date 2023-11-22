/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create pricelistitembulkdiscount service class
**/

/**
 * Importing all required modules here
 */

const createPriceListItemBulkDiscountServiceData = require("../data/create.pricelistitembulkdiscount.service.data")
const createPriceListItemBulkDiscountService = require("../../../../src/services/pricelist/create.pricelistitembulkdiscount.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreatePriceListItemBulkDiscountService = new createPriceListItemBulkDiscountService();
const CreatePriceListItemBulkDiscountServiceData = new createPriceListItemBulkDiscountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.pricelistitembulkdiscount.ts.001] | FunctionPath : [src/services/pricelist/create.pricelistitembulkdiscount.service.js/createOnePriceListItemBulkDiscount()]", () => {


	test(CreatePriceListItemBulkDiscountServiceData.CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.description, async () => {

        const output = await CreatePriceListItemBulkDiscountService.createOnePriceListItemBulkDiscount(
            CreatePriceListItemBulkDiscountServiceData.CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.input.databaseConnector,
            CreatePriceListItemBulkDiscountServiceData.CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.input.apiID,
            CreatePriceListItemBulkDiscountServiceData.CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.input.config,
            CreatePriceListItemBulkDiscountServiceData.CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreatePriceListItemBulkDiscountServiceData.CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreatePriceListItemBulkDiscountServiceData.CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreatePriceListItemBulkDiscountServiceData.CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC001.output)[2])
	});



    test(CreatePriceListItemBulkDiscountServiceData.CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.description, async () => {

        const output = await CreatePriceListItemBulkDiscountService.createOnePriceListItemBulkDiscount(
            CreatePriceListItemBulkDiscountServiceData.CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.input.databaseConnector,
            CreatePriceListItemBulkDiscountServiceData.CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.input.apiID,
            CreatePriceListItemBulkDiscountServiceData.CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.input.config,
            CreatePriceListItemBulkDiscountServiceData.CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreatePriceListItemBulkDiscountServiceData.CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(CreatePriceListItemBulkDiscountServiceData.CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(CreatePriceListItemBulkDiscountServiceData.CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC002.output.message)        
	});



    test(CreatePriceListItemBulkDiscountServiceData.CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC003.description, async () => {

        const output = await CreatePriceListItemBulkDiscountService.createOnePriceListItemBulkDiscount(
            CreatePriceListItemBulkDiscountServiceData.CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC003.input.databaseConnector,
            CreatePriceListItemBulkDiscountServiceData.CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC003.input.apiID,
            CreatePriceListItemBulkDiscountServiceData.CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC003.input.config,
            CreatePriceListItemBulkDiscountServiceData.CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreatePriceListItemBulkDiscountServiceData.CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(CreatePriceListItemBulkDiscountServiceData.CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC003.output.message)        
	});

});