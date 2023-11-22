/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read ProductBulkDiscount service class
**/

/**
 * Importing all required modules here
 */

const readProductBulkDiscountServiceData = require("../data/read.productbulkdiscount.service.data")
const readProductBulkDiscountService = require("../../../../src/services/product/read.productbulkdiscount.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadProductBulkDiscountService = new readProductBulkDiscountService();
const ReadProductBulkDiscountServiceData = new readProductBulkDiscountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productbulkdiscount.ts.001] | FunctionPath : [src/services/product/read.contianer.service.js/readProductBulkDiscounts()]", () => {


	test(ReadProductBulkDiscountServiceData.READ_PRODUCTBULKDISCOUNT_TS001_TC001.description, async () => {

        const output = await ReadProductBulkDiscountService.readProductBulkDiscounts(
            ReadProductBulkDiscountServiceData.READ_PRODUCTBULKDISCOUNT_TS001_TC001.input.databaseConnector,
            ReadProductBulkDiscountServiceData.READ_PRODUCTBULKDISCOUNT_TS001_TC001.input.apiID,
            ReadProductBulkDiscountServiceData.READ_PRODUCTBULKDISCOUNT_TS001_TC001.input.config,
            ReadProductBulkDiscountServiceData.READ_PRODUCTBULKDISCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProductBulkDiscountServiceData.READ_PRODUCTBULKDISCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProductBulkDiscountServiceData.READ_PRODUCTBULKDISCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProductBulkDiscountServiceData.READ_PRODUCTBULKDISCOUNT_TS001_TC001.output)[2])
	});



    test(ReadProductBulkDiscountServiceData.READ_PRODUCTBULKDISCOUNT_TS001_TC002.description, async () => {

        const output = await ReadProductBulkDiscountService.readProductBulkDiscounts(
            ReadProductBulkDiscountServiceData.READ_PRODUCTBULKDISCOUNT_TS001_TC002.input.databaseConnector,
            ReadProductBulkDiscountServiceData.READ_PRODUCTBULKDISCOUNT_TS001_TC002.input.apiID,
            ReadProductBulkDiscountServiceData.READ_PRODUCTBULKDISCOUNT_TS001_TC002.input.config,
            ReadProductBulkDiscountServiceData.READ_PRODUCTBULKDISCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadProductBulkDiscountServiceData.READ_PRODUCTBULKDISCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadProductBulkDiscountServiceData.READ_PRODUCTBULKDISCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadProductBulkDiscountServiceData.READ_PRODUCTBULKDISCOUNT_TS001_TC002.output.message)        
	});



    test(ReadProductBulkDiscountServiceData.READ_PRODUCTBULKDISCOUNT_TS001_TC003.description, async () => {

        const output = await ReadProductBulkDiscountService.readProductBulkDiscounts(
            ReadProductBulkDiscountServiceData.READ_PRODUCTBULKDISCOUNT_TS001_TC003.input.databaseConnector,
            ReadProductBulkDiscountServiceData.READ_PRODUCTBULKDISCOUNT_TS001_TC003.input.apiID,
            ReadProductBulkDiscountServiceData.READ_PRODUCTBULKDISCOUNT_TS001_TC003.input.config,
            ReadProductBulkDiscountServiceData.READ_PRODUCTBULKDISCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadProductBulkDiscountServiceData.READ_PRODUCTBULKDISCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadProductBulkDiscountServiceData.READ_PRODUCTBULKDISCOUNT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.productbulkdiscount.ts.002] | FunctionPath : [src/services/product/read.productbulkdiscount.service.js/readOneProductBulkDiscount()]", () => {


	test(ReadProductBulkDiscountServiceData.READ_ONE_PRODUCTBULKDISCOUNT_TS002_TC001.description, async () => {

        const output = await ReadProductBulkDiscountService.readOneProductBulkDiscount(
            ReadProductBulkDiscountServiceData.READ_ONE_PRODUCTBULKDISCOUNT_TS002_TC001.input.databaseConnector,
            ReadProductBulkDiscountServiceData.READ_ONE_PRODUCTBULKDISCOUNT_TS002_TC001.input.apiID,
            ReadProductBulkDiscountServiceData.READ_ONE_PRODUCTBULKDISCOUNT_TS002_TC001.input.config,
            ReadProductBulkDiscountServiceData.READ_ONE_PRODUCTBULKDISCOUNT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProductBulkDiscountServiceData.READ_ONE_PRODUCTBULKDISCOUNT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProductBulkDiscountServiceData.READ_ONE_PRODUCTBULKDISCOUNT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProductBulkDiscountServiceData.READ_ONE_PRODUCTBULKDISCOUNT_TS002_TC001.output)[2])
	});



    test(ReadProductBulkDiscountServiceData.READ_ONE_PRODUCTBULKDISCOUNT_TS002_TC002.description, async () => {

        const output = await ReadProductBulkDiscountService.readOneProductBulkDiscount(
            ReadProductBulkDiscountServiceData.READ_ONE_PRODUCTBULKDISCOUNT_TS002_TC002.input.databaseConnector,
            ReadProductBulkDiscountServiceData.READ_ONE_PRODUCTBULKDISCOUNT_TS002_TC002.input.apiID,
            ReadProductBulkDiscountServiceData.READ_ONE_PRODUCTBULKDISCOUNT_TS002_TC002.input.config,
            ReadProductBulkDiscountServiceData.READ_ONE_PRODUCTBULKDISCOUNT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadProductBulkDiscountServiceData.READ_ONE_PRODUCTBULKDISCOUNT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadProductBulkDiscountServiceData.READ_ONE_PRODUCTBULKDISCOUNT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadProductBulkDiscountServiceData.READ_ONE_PRODUCTBULKDISCOUNT_TS002_TC002.output.message)        
	});



    test(ReadProductBulkDiscountServiceData.READ_ONE_PRODUCTBULKDISCOUNT_TS002_TC003.description, async () => {

        const output = await ReadProductBulkDiscountService.readOneProductBulkDiscount(
            ReadProductBulkDiscountServiceData.READ_ONE_PRODUCTBULKDISCOUNT_TS002_TC003.input.databaseConnector,
            ReadProductBulkDiscountServiceData.READ_ONE_PRODUCTBULKDISCOUNT_TS002_TC003.input.apiID,
            ReadProductBulkDiscountServiceData.READ_ONE_PRODUCTBULKDISCOUNT_TS002_TC003.input.config,
            ReadProductBulkDiscountServiceData.READ_ONE_PRODUCTBULKDISCOUNT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadProductBulkDiscountServiceData.READ_ONE_PRODUCTBULKDISCOUNT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadProductBulkDiscountServiceData.READ_ONE_PRODUCTBULKDISCOUNT_TS002_TC003.output.message)        
	});

});