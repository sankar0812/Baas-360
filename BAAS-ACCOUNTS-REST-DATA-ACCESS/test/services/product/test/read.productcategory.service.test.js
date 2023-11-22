/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read ProductCategory service class
**/

/**
 * Importing all required modules here
 */

const readProductCategoryServiceData = require("../data/read.productcategory.service.data")
const readProductCategoryService = require("../../../../src/services/product/read.productcategory.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadProductCategoryService = new readProductCategoryService();
const ReadProductCategoryServiceData = new readProductCategoryServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productcategory.ts.001] | FunctionPath : [src/services/product/read.contianer.service.js/readProductCategorys()]", () => {


	test(ReadProductCategoryServiceData.READ_PRODUCTCATEGORY_TS001_TC001.description, async () => {

        const output = await ReadProductCategoryService.readProductCategorys(
            ReadProductCategoryServiceData.READ_PRODUCTCATEGORY_TS001_TC001.input.databaseConnector,
            ReadProductCategoryServiceData.READ_PRODUCTCATEGORY_TS001_TC001.input.apiID,
            ReadProductCategoryServiceData.READ_PRODUCTCATEGORY_TS001_TC001.input.config,
            ReadProductCategoryServiceData.READ_PRODUCTCATEGORY_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProductCategoryServiceData.READ_PRODUCTCATEGORY_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProductCategoryServiceData.READ_PRODUCTCATEGORY_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProductCategoryServiceData.READ_PRODUCTCATEGORY_TS001_TC001.output)[2])
	});



    test(ReadProductCategoryServiceData.READ_PRODUCTCATEGORY_TS001_TC002.description, async () => {

        const output = await ReadProductCategoryService.readProductCategorys(
            ReadProductCategoryServiceData.READ_PRODUCTCATEGORY_TS001_TC002.input.databaseConnector,
            ReadProductCategoryServiceData.READ_PRODUCTCATEGORY_TS001_TC002.input.apiID,
            ReadProductCategoryServiceData.READ_PRODUCTCATEGORY_TS001_TC002.input.config,
            ReadProductCategoryServiceData.READ_PRODUCTCATEGORY_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadProductCategoryServiceData.READ_PRODUCTCATEGORY_TS001_TC002.output.data)
        expect(output.status).toBe(ReadProductCategoryServiceData.READ_PRODUCTCATEGORY_TS001_TC002.output.status)
        expect(output.message).toBe(ReadProductCategoryServiceData.READ_PRODUCTCATEGORY_TS001_TC002.output.message)        
	});



    test(ReadProductCategoryServiceData.READ_PRODUCTCATEGORY_TS001_TC003.description, async () => {

        const output = await ReadProductCategoryService.readProductCategorys(
            ReadProductCategoryServiceData.READ_PRODUCTCATEGORY_TS001_TC003.input.databaseConnector,
            ReadProductCategoryServiceData.READ_PRODUCTCATEGORY_TS001_TC003.input.apiID,
            ReadProductCategoryServiceData.READ_PRODUCTCATEGORY_TS001_TC003.input.config,
            ReadProductCategoryServiceData.READ_PRODUCTCATEGORY_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadProductCategoryServiceData.READ_PRODUCTCATEGORY_TS001_TC003.output.status)
        expect(output.message).toBe(ReadProductCategoryServiceData.READ_PRODUCTCATEGORY_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.productcategory.ts.002] | FunctionPath : [src/services/product/read.productcategory.service.js/readOneProductCategory()]", () => {


	test(ReadProductCategoryServiceData.READ_ONE_PRODUCTCATEGORY_TS002_TC001.description, async () => {

        const output = await ReadProductCategoryService.readOneProductCategory(
            ReadProductCategoryServiceData.READ_ONE_PRODUCTCATEGORY_TS002_TC001.input.databaseConnector,
            ReadProductCategoryServiceData.READ_ONE_PRODUCTCATEGORY_TS002_TC001.input.apiID,
            ReadProductCategoryServiceData.READ_ONE_PRODUCTCATEGORY_TS002_TC001.input.config,
            ReadProductCategoryServiceData.READ_ONE_PRODUCTCATEGORY_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProductCategoryServiceData.READ_ONE_PRODUCTCATEGORY_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProductCategoryServiceData.READ_ONE_PRODUCTCATEGORY_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProductCategoryServiceData.READ_ONE_PRODUCTCATEGORY_TS002_TC001.output)[2])
	});



    test(ReadProductCategoryServiceData.READ_ONE_PRODUCTCATEGORY_TS002_TC002.description, async () => {

        const output = await ReadProductCategoryService.readOneProductCategory(
            ReadProductCategoryServiceData.READ_ONE_PRODUCTCATEGORY_TS002_TC002.input.databaseConnector,
            ReadProductCategoryServiceData.READ_ONE_PRODUCTCATEGORY_TS002_TC002.input.apiID,
            ReadProductCategoryServiceData.READ_ONE_PRODUCTCATEGORY_TS002_TC002.input.config,
            ReadProductCategoryServiceData.READ_ONE_PRODUCTCATEGORY_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadProductCategoryServiceData.READ_ONE_PRODUCTCATEGORY_TS002_TC002.output.data)
        expect(output.status).toBe(ReadProductCategoryServiceData.READ_ONE_PRODUCTCATEGORY_TS002_TC002.output.status)
        expect(output.message).toBe(ReadProductCategoryServiceData.READ_ONE_PRODUCTCATEGORY_TS002_TC002.output.message)        
	});



    test(ReadProductCategoryServiceData.READ_ONE_PRODUCTCATEGORY_TS002_TC003.description, async () => {

        const output = await ReadProductCategoryService.readOneProductCategory(
            ReadProductCategoryServiceData.READ_ONE_PRODUCTCATEGORY_TS002_TC003.input.databaseConnector,
            ReadProductCategoryServiceData.READ_ONE_PRODUCTCATEGORY_TS002_TC003.input.apiID,
            ReadProductCategoryServiceData.READ_ONE_PRODUCTCATEGORY_TS002_TC003.input.config,
            ReadProductCategoryServiceData.READ_ONE_PRODUCTCATEGORY_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadProductCategoryServiceData.READ_ONE_PRODUCTCATEGORY_TS002_TC003.output.status)
        expect(output.message).toBe(ReadProductCategoryServiceData.READ_ONE_PRODUCTCATEGORY_TS002_TC003.output.message)        
	});

});