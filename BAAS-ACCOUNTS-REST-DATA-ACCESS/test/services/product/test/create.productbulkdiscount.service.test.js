/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create productbulkdiscount service class
**/

/**
 * Importing all required modules here
 */

const createProductBulkDiscountServiceData = require("../data/create.productbulkdiscount.service.data")
const createProductBulkDiscountService = require("../../../../src/services/product/create.productbulkdiscount.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateProductBulkDiscountService = new createProductBulkDiscountService();
const CreateProductBulkDiscountServiceData = new createProductBulkDiscountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productbulkdiscount.ts.001] | FunctionPath : [src/services/product/create.productbulkdiscount.service.js/createOneProductBulkDiscount()]", () => {


	test(CreateProductBulkDiscountServiceData.CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC001.description, async () => {

        const output = await CreateProductBulkDiscountService.createOneProductBulkDiscount(
            CreateProductBulkDiscountServiceData.CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC001.input.databaseConnector,
            CreateProductBulkDiscountServiceData.CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC001.input.apiID,
            CreateProductBulkDiscountServiceData.CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC001.input.config,
            CreateProductBulkDiscountServiceData.CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateProductBulkDiscountServiceData.CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateProductBulkDiscountServiceData.CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateProductBulkDiscountServiceData.CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC001.output)[2])
	});



    test(CreateProductBulkDiscountServiceData.CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC002.description, async () => {

        const output = await CreateProductBulkDiscountService.createOneProductBulkDiscount(
            CreateProductBulkDiscountServiceData.CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC002.input.databaseConnector,
            CreateProductBulkDiscountServiceData.CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC002.input.apiID,
            CreateProductBulkDiscountServiceData.CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC002.input.config,
            CreateProductBulkDiscountServiceData.CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateProductBulkDiscountServiceData.CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(CreateProductBulkDiscountServiceData.CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(CreateProductBulkDiscountServiceData.CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC002.output.message)        
	});



    test(CreateProductBulkDiscountServiceData.CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC003.description, async () => {

        const output = await CreateProductBulkDiscountService.createOneProductBulkDiscount(
            CreateProductBulkDiscountServiceData.CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC003.input.databaseConnector,
            CreateProductBulkDiscountServiceData.CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC003.input.apiID,
            CreateProductBulkDiscountServiceData.CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC003.input.config,
            CreateProductBulkDiscountServiceData.CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateProductBulkDiscountServiceData.CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(CreateProductBulkDiscountServiceData.CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC003.output.message)        
	});

});