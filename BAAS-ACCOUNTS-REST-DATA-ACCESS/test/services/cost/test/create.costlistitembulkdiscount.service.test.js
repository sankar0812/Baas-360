/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create costlistitembulkdiscount service class
**/

/**
 * Importing all required modules here
 */

const createCostListItemBulkDiscountServiceData = require("../data/create.costlistitembulkdiscount.service.data")
const createCostListItemBulkDiscountService = require("../../../../src/services/cost/create.costlistitembulkdiscount.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateCostListItemBulkDiscountService = new createCostListItemBulkDiscountService();
const CreateCostListItemBulkDiscountServiceData = new createCostListItemBulkDiscountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.costlistitembulkdiscount.ts.001] | FunctionPath : [src/services/cost/create.costlistitembulkdiscount.service.js/createOneCostListItemBulkDiscount()]", () => {


	test(CreateCostListItemBulkDiscountServiceData.CREATE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.description, async () => {

        const output = await CreateCostListItemBulkDiscountService.createOneCostListItemBulkDiscount(
            CreateCostListItemBulkDiscountServiceData.CREATE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.input.databaseConnector,
            CreateCostListItemBulkDiscountServiceData.CREATE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.input.apiID,
            CreateCostListItemBulkDiscountServiceData.CREATE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.input.config,
            CreateCostListItemBulkDiscountServiceData.CREATE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateCostListItemBulkDiscountServiceData.CREATE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateCostListItemBulkDiscountServiceData.CREATE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateCostListItemBulkDiscountServiceData.CREATE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC001.output)[2])
	});



    test(CreateCostListItemBulkDiscountServiceData.CREATE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.description, async () => {

        const output = await CreateCostListItemBulkDiscountService.createOneCostListItemBulkDiscount(
            CreateCostListItemBulkDiscountServiceData.CREATE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.input.databaseConnector,
            CreateCostListItemBulkDiscountServiceData.CREATE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.input.apiID,
            CreateCostListItemBulkDiscountServiceData.CREATE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.input.config,
            CreateCostListItemBulkDiscountServiceData.CREATE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateCostListItemBulkDiscountServiceData.CREATE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(CreateCostListItemBulkDiscountServiceData.CREATE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(CreateCostListItemBulkDiscountServiceData.CREATE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC002.output.message)        
	});



    test(CreateCostListItemBulkDiscountServiceData.CREATE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC003.description, async () => {

        const output = await CreateCostListItemBulkDiscountService.createOneCostListItemBulkDiscount(
            CreateCostListItemBulkDiscountServiceData.CREATE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC003.input.databaseConnector,
            CreateCostListItemBulkDiscountServiceData.CREATE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC003.input.apiID,
            CreateCostListItemBulkDiscountServiceData.CREATE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC003.input.config,
            CreateCostListItemBulkDiscountServiceData.CREATE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateCostListItemBulkDiscountServiceData.CREATE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(CreateCostListItemBulkDiscountServiceData.CREATE_ONE_COSTLISTITEMBULKDISCOUNT_TS001_TC003.output.message)        
	});

});