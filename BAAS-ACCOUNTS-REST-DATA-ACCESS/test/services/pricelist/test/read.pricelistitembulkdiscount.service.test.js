/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read PriceListItemBulkDiscount service class
**/

/**
 * Importing all required modules here
 */

const readPriceListItemBulkDiscountServiceData = require("../data/read.pricelistitembulkdiscount.service.data")
const readPriceListItemBulkDiscountService = require("../../../../src/services/pricelist/read.pricelistitembulkdiscount.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadPriceListItemBulkDiscountService = new readPriceListItemBulkDiscountService();
const ReadPriceListItemBulkDiscountServiceData = new readPriceListItemBulkDiscountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.pricelistitembulkdiscount.ts.001] | FunctionPath : [src/services/pricelist/read.contianer.service.js/readPriceListItemBulkDiscounts()]", () => {


	test(ReadPriceListItemBulkDiscountServiceData.READ_PRICELISTITEMBULKDISCOUNT_TS001_TC001.description, async () => {

        const output = await ReadPriceListItemBulkDiscountService.readPriceListItemBulkDiscounts(
            ReadPriceListItemBulkDiscountServiceData.READ_PRICELISTITEMBULKDISCOUNT_TS001_TC001.input.databaseConnector,
            ReadPriceListItemBulkDiscountServiceData.READ_PRICELISTITEMBULKDISCOUNT_TS001_TC001.input.apiID,
            ReadPriceListItemBulkDiscountServiceData.READ_PRICELISTITEMBULKDISCOUNT_TS001_TC001.input.config,
            ReadPriceListItemBulkDiscountServiceData.READ_PRICELISTITEMBULKDISCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadPriceListItemBulkDiscountServiceData.READ_PRICELISTITEMBULKDISCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadPriceListItemBulkDiscountServiceData.READ_PRICELISTITEMBULKDISCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadPriceListItemBulkDiscountServiceData.READ_PRICELISTITEMBULKDISCOUNT_TS001_TC001.output)[2])
	});



    test(ReadPriceListItemBulkDiscountServiceData.READ_PRICELISTITEMBULKDISCOUNT_TS001_TC002.description, async () => {

        const output = await ReadPriceListItemBulkDiscountService.readPriceListItemBulkDiscounts(
            ReadPriceListItemBulkDiscountServiceData.READ_PRICELISTITEMBULKDISCOUNT_TS001_TC002.input.databaseConnector,
            ReadPriceListItemBulkDiscountServiceData.READ_PRICELISTITEMBULKDISCOUNT_TS001_TC002.input.apiID,
            ReadPriceListItemBulkDiscountServiceData.READ_PRICELISTITEMBULKDISCOUNT_TS001_TC002.input.config,
            ReadPriceListItemBulkDiscountServiceData.READ_PRICELISTITEMBULKDISCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadPriceListItemBulkDiscountServiceData.READ_PRICELISTITEMBULKDISCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadPriceListItemBulkDiscountServiceData.READ_PRICELISTITEMBULKDISCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadPriceListItemBulkDiscountServiceData.READ_PRICELISTITEMBULKDISCOUNT_TS001_TC002.output.message)        
	});



    test(ReadPriceListItemBulkDiscountServiceData.READ_PRICELISTITEMBULKDISCOUNT_TS001_TC003.description, async () => {

        const output = await ReadPriceListItemBulkDiscountService.readPriceListItemBulkDiscounts(
            ReadPriceListItemBulkDiscountServiceData.READ_PRICELISTITEMBULKDISCOUNT_TS001_TC003.input.databaseConnector,
            ReadPriceListItemBulkDiscountServiceData.READ_PRICELISTITEMBULKDISCOUNT_TS001_TC003.input.apiID,
            ReadPriceListItemBulkDiscountServiceData.READ_PRICELISTITEMBULKDISCOUNT_TS001_TC003.input.config,
            ReadPriceListItemBulkDiscountServiceData.READ_PRICELISTITEMBULKDISCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadPriceListItemBulkDiscountServiceData.READ_PRICELISTITEMBULKDISCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadPriceListItemBulkDiscountServiceData.READ_PRICELISTITEMBULKDISCOUNT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.pricelistitembulkdiscount.ts.002] | FunctionPath : [src/services/pricelist/read.pricelistitembulkdiscount.service.js/readOnePriceListItemBulkDiscount()]", () => {


	test(ReadPriceListItemBulkDiscountServiceData.READ_ONE_PRICELISTITEMBULKDISCOUNT_TS002_TC001.description, async () => {

        const output = await ReadPriceListItemBulkDiscountService.readOnePriceListItemBulkDiscount(
            ReadPriceListItemBulkDiscountServiceData.READ_ONE_PRICELISTITEMBULKDISCOUNT_TS002_TC001.input.databaseConnector,
            ReadPriceListItemBulkDiscountServiceData.READ_ONE_PRICELISTITEMBULKDISCOUNT_TS002_TC001.input.apiID,
            ReadPriceListItemBulkDiscountServiceData.READ_ONE_PRICELISTITEMBULKDISCOUNT_TS002_TC001.input.config,
            ReadPriceListItemBulkDiscountServiceData.READ_ONE_PRICELISTITEMBULKDISCOUNT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadPriceListItemBulkDiscountServiceData.READ_ONE_PRICELISTITEMBULKDISCOUNT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadPriceListItemBulkDiscountServiceData.READ_ONE_PRICELISTITEMBULKDISCOUNT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadPriceListItemBulkDiscountServiceData.READ_ONE_PRICELISTITEMBULKDISCOUNT_TS002_TC001.output)[2])
	});



    test(ReadPriceListItemBulkDiscountServiceData.READ_ONE_PRICELISTITEMBULKDISCOUNT_TS002_TC002.description, async () => {

        const output = await ReadPriceListItemBulkDiscountService.readOnePriceListItemBulkDiscount(
            ReadPriceListItemBulkDiscountServiceData.READ_ONE_PRICELISTITEMBULKDISCOUNT_TS002_TC002.input.databaseConnector,
            ReadPriceListItemBulkDiscountServiceData.READ_ONE_PRICELISTITEMBULKDISCOUNT_TS002_TC002.input.apiID,
            ReadPriceListItemBulkDiscountServiceData.READ_ONE_PRICELISTITEMBULKDISCOUNT_TS002_TC002.input.config,
            ReadPriceListItemBulkDiscountServiceData.READ_ONE_PRICELISTITEMBULKDISCOUNT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadPriceListItemBulkDiscountServiceData.READ_ONE_PRICELISTITEMBULKDISCOUNT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadPriceListItemBulkDiscountServiceData.READ_ONE_PRICELISTITEMBULKDISCOUNT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadPriceListItemBulkDiscountServiceData.READ_ONE_PRICELISTITEMBULKDISCOUNT_TS002_TC002.output.message)        
	});



    test(ReadPriceListItemBulkDiscountServiceData.READ_ONE_PRICELISTITEMBULKDISCOUNT_TS002_TC003.description, async () => {

        const output = await ReadPriceListItemBulkDiscountService.readOnePriceListItemBulkDiscount(
            ReadPriceListItemBulkDiscountServiceData.READ_ONE_PRICELISTITEMBULKDISCOUNT_TS002_TC003.input.databaseConnector,
            ReadPriceListItemBulkDiscountServiceData.READ_ONE_PRICELISTITEMBULKDISCOUNT_TS002_TC003.input.apiID,
            ReadPriceListItemBulkDiscountServiceData.READ_ONE_PRICELISTITEMBULKDISCOUNT_TS002_TC003.input.config,
            ReadPriceListItemBulkDiscountServiceData.READ_ONE_PRICELISTITEMBULKDISCOUNT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadPriceListItemBulkDiscountServiceData.READ_ONE_PRICELISTITEMBULKDISCOUNT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadPriceListItemBulkDiscountServiceData.READ_ONE_PRICELISTITEMBULKDISCOUNT_TS002_TC003.output.message)        
	});

});