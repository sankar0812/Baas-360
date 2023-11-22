/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read CostListItemBulkDiscount service class
**/

/**
 * Importing all required modules here
 */

const readCostListItemBulkDiscountServiceData = require("../data/read.costlistitembulkdiscount.service.data")
const readCostListItemBulkDiscountService = require("../../../../src/services/cost/read.costlistitembulkdiscount.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadCostListItemBulkDiscountService = new readCostListItemBulkDiscountService();
const ReadCostListItemBulkDiscountServiceData = new readCostListItemBulkDiscountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.costlistitembulkdiscount.ts.001] | FunctionPath : [src/services/cost/read.contianer.service.js/readCostListItemBulkDiscounts()]", () => {


	test(ReadCostListItemBulkDiscountServiceData.READ_COSTLISTITEMBULKDISCOUNT_TS001_TC001.description, async () => {

        const output = await ReadCostListItemBulkDiscountService.readCostListItemBulkDiscounts(
            ReadCostListItemBulkDiscountServiceData.READ_COSTLISTITEMBULKDISCOUNT_TS001_TC001.input.databaseConnector,
            ReadCostListItemBulkDiscountServiceData.READ_COSTLISTITEMBULKDISCOUNT_TS001_TC001.input.apiID,
            ReadCostListItemBulkDiscountServiceData.READ_COSTLISTITEMBULKDISCOUNT_TS001_TC001.input.config,
            ReadCostListItemBulkDiscountServiceData.READ_COSTLISTITEMBULKDISCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCostListItemBulkDiscountServiceData.READ_COSTLISTITEMBULKDISCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCostListItemBulkDiscountServiceData.READ_COSTLISTITEMBULKDISCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCostListItemBulkDiscountServiceData.READ_COSTLISTITEMBULKDISCOUNT_TS001_TC001.output)[2])
	});



    test(ReadCostListItemBulkDiscountServiceData.READ_COSTLISTITEMBULKDISCOUNT_TS001_TC002.description, async () => {

        const output = await ReadCostListItemBulkDiscountService.readCostListItemBulkDiscounts(
            ReadCostListItemBulkDiscountServiceData.READ_COSTLISTITEMBULKDISCOUNT_TS001_TC002.input.databaseConnector,
            ReadCostListItemBulkDiscountServiceData.READ_COSTLISTITEMBULKDISCOUNT_TS001_TC002.input.apiID,
            ReadCostListItemBulkDiscountServiceData.READ_COSTLISTITEMBULKDISCOUNT_TS001_TC002.input.config,
            ReadCostListItemBulkDiscountServiceData.READ_COSTLISTITEMBULKDISCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadCostListItemBulkDiscountServiceData.READ_COSTLISTITEMBULKDISCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadCostListItemBulkDiscountServiceData.READ_COSTLISTITEMBULKDISCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadCostListItemBulkDiscountServiceData.READ_COSTLISTITEMBULKDISCOUNT_TS001_TC002.output.message)        
	});



    test(ReadCostListItemBulkDiscountServiceData.READ_COSTLISTITEMBULKDISCOUNT_TS001_TC003.description, async () => {

        const output = await ReadCostListItemBulkDiscountService.readCostListItemBulkDiscounts(
            ReadCostListItemBulkDiscountServiceData.READ_COSTLISTITEMBULKDISCOUNT_TS001_TC003.input.databaseConnector,
            ReadCostListItemBulkDiscountServiceData.READ_COSTLISTITEMBULKDISCOUNT_TS001_TC003.input.apiID,
            ReadCostListItemBulkDiscountServiceData.READ_COSTLISTITEMBULKDISCOUNT_TS001_TC003.input.config,
            ReadCostListItemBulkDiscountServiceData.READ_COSTLISTITEMBULKDISCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadCostListItemBulkDiscountServiceData.READ_COSTLISTITEMBULKDISCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadCostListItemBulkDiscountServiceData.READ_COSTLISTITEMBULKDISCOUNT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.costlistitembulkdiscount.ts.002] | FunctionPath : [src/services/cost/read.costlistitembulkdiscount.service.js/readOneCostListItemBulkDiscount()]", () => {


	test(ReadCostListItemBulkDiscountServiceData.READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC001.description, async () => {

        const output = await ReadCostListItemBulkDiscountService.readOneCostListItemBulkDiscount(
            ReadCostListItemBulkDiscountServiceData.READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC001.input.databaseConnector,
            ReadCostListItemBulkDiscountServiceData.READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC001.input.apiID,
            ReadCostListItemBulkDiscountServiceData.READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC001.input.config,
            ReadCostListItemBulkDiscountServiceData.READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCostListItemBulkDiscountServiceData.READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCostListItemBulkDiscountServiceData.READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCostListItemBulkDiscountServiceData.READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC001.output)[2])
	});



    test(ReadCostListItemBulkDiscountServiceData.READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC002.description, async () => {

        const output = await ReadCostListItemBulkDiscountService.readOneCostListItemBulkDiscount(
            ReadCostListItemBulkDiscountServiceData.READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC002.input.databaseConnector,
            ReadCostListItemBulkDiscountServiceData.READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC002.input.apiID,
            ReadCostListItemBulkDiscountServiceData.READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC002.input.config,
            ReadCostListItemBulkDiscountServiceData.READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadCostListItemBulkDiscountServiceData.READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadCostListItemBulkDiscountServiceData.READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadCostListItemBulkDiscountServiceData.READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC002.output.message)        
	});



    test(ReadCostListItemBulkDiscountServiceData.READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC003.description, async () => {

        const output = await ReadCostListItemBulkDiscountService.readOneCostListItemBulkDiscount(
            ReadCostListItemBulkDiscountServiceData.READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC003.input.databaseConnector,
            ReadCostListItemBulkDiscountServiceData.READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC003.input.apiID,
            ReadCostListItemBulkDiscountServiceData.READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC003.input.config,
            ReadCostListItemBulkDiscountServiceData.READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadCostListItemBulkDiscountServiceData.READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadCostListItemBulkDiscountServiceData.READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC003.output.message)        
	});

});