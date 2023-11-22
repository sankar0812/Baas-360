/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read VendorCategory service class
**/

/**
 * Importing all required modules here
 */

const readVendorCategoryServiceData = require("../data/read.vendorcategory.service.data")
const readVendorCategoryService = require("../../../../src/services/vendor/read.vendorcategory.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadVendorCategoryService = new readVendorCategoryService();
const ReadVendorCategoryServiceData = new readVendorCategoryServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorcategory.ts.001] | FunctionPath : [src/services/vendor/read.contianer.service.js/readVendorCategorys()]", () => {


	test(ReadVendorCategoryServiceData.READ_VENDORCATEGORY_TS001_TC001.description, async () => {

        const output = await ReadVendorCategoryService.readVendorCategories(
            ReadVendorCategoryServiceData.READ_VENDORCATEGORY_TS001_TC001.input.databaseConnector,
            ReadVendorCategoryServiceData.READ_VENDORCATEGORY_TS001_TC001.input.apiID,
            ReadVendorCategoryServiceData.READ_VENDORCATEGORY_TS001_TC001.input.config,
            ReadVendorCategoryServiceData.READ_VENDORCATEGORY_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorCategoryServiceData.READ_VENDORCATEGORY_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorCategoryServiceData.READ_VENDORCATEGORY_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorCategoryServiceData.READ_VENDORCATEGORY_TS001_TC001.output)[2])
	});



    test(ReadVendorCategoryServiceData.READ_VENDORCATEGORY_TS001_TC002.description, async () => {

        const output = await ReadVendorCategoryService.readVendorCategories(
            ReadVendorCategoryServiceData.READ_VENDORCATEGORY_TS001_TC002.input.databaseConnector,
            ReadVendorCategoryServiceData.READ_VENDORCATEGORY_TS001_TC002.input.apiID,
            ReadVendorCategoryServiceData.READ_VENDORCATEGORY_TS001_TC002.input.config,
            ReadVendorCategoryServiceData.READ_VENDORCATEGORY_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorCategoryServiceData.READ_VENDORCATEGORY_TS001_TC002.output.data)
        expect(output.status).toBe(ReadVendorCategoryServiceData.READ_VENDORCATEGORY_TS001_TC002.output.status)
        expect(output.message).toBe(ReadVendorCategoryServiceData.READ_VENDORCATEGORY_TS001_TC002.output.message)        
	});



    test(ReadVendorCategoryServiceData.READ_VENDORCATEGORY_TS001_TC003.description, async () => {

        const output = await ReadVendorCategoryService.readVendorCategories(
            ReadVendorCategoryServiceData.READ_VENDORCATEGORY_TS001_TC003.input.databaseConnector,
            ReadVendorCategoryServiceData.READ_VENDORCATEGORY_TS001_TC003.input.apiID,
            ReadVendorCategoryServiceData.READ_VENDORCATEGORY_TS001_TC003.input.config,
            ReadVendorCategoryServiceData.READ_VENDORCATEGORY_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorCategoryServiceData.READ_VENDORCATEGORY_TS001_TC003.output.status)
        expect(output.message).toBe(ReadVendorCategoryServiceData.READ_VENDORCATEGORY_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.vendorcategory.ts.002] | FunctionPath : [src/services/vendor/read.vendorcategory.service.js/readOneVendorCategory()]", () => {


	test(ReadVendorCategoryServiceData.READ_ONE_VENDORCATEGORY_TS002_TC001.description, async () => {

        const output = await ReadVendorCategoryService.readOneVendorCategory(
            ReadVendorCategoryServiceData.READ_ONE_VENDORCATEGORY_TS002_TC001.input.databaseConnector,
            ReadVendorCategoryServiceData.READ_ONE_VENDORCATEGORY_TS002_TC001.input.apiID,
            ReadVendorCategoryServiceData.READ_ONE_VENDORCATEGORY_TS002_TC001.input.config,
            ReadVendorCategoryServiceData.READ_ONE_VENDORCATEGORY_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorCategoryServiceData.READ_ONE_VENDORCATEGORY_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorCategoryServiceData.READ_ONE_VENDORCATEGORY_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorCategoryServiceData.READ_ONE_VENDORCATEGORY_TS002_TC001.output)[2])
	});



    test(ReadVendorCategoryServiceData.READ_ONE_VENDORCATEGORY_TS002_TC002.description, async () => {

        const output = await ReadVendorCategoryService.readOneVendorCategory(
            ReadVendorCategoryServiceData.READ_ONE_VENDORCATEGORY_TS002_TC002.input.databaseConnector,
            ReadVendorCategoryServiceData.READ_ONE_VENDORCATEGORY_TS002_TC002.input.apiID,
            ReadVendorCategoryServiceData.READ_ONE_VENDORCATEGORY_TS002_TC002.input.config,
            ReadVendorCategoryServiceData.READ_ONE_VENDORCATEGORY_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorCategoryServiceData.READ_ONE_VENDORCATEGORY_TS002_TC002.output.data)
        expect(output.status).toBe(ReadVendorCategoryServiceData.READ_ONE_VENDORCATEGORY_TS002_TC002.output.status)
        expect(output.message).toBe(ReadVendorCategoryServiceData.READ_ONE_VENDORCATEGORY_TS002_TC002.output.message)        
	});



    test(ReadVendorCategoryServiceData.READ_ONE_VENDORCATEGORY_TS002_TC003.description, async () => {

        const output = await ReadVendorCategoryService.readOneVendorCategory(
            ReadVendorCategoryServiceData.READ_ONE_VENDORCATEGORY_TS002_TC003.input.databaseConnector,
            ReadVendorCategoryServiceData.READ_ONE_VENDORCATEGORY_TS002_TC003.input.apiID,
            ReadVendorCategoryServiceData.READ_ONE_VENDORCATEGORY_TS002_TC003.input.config,
            ReadVendorCategoryServiceData.READ_ONE_VENDORCATEGORY_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorCategoryServiceData.READ_ONE_VENDORCATEGORY_TS002_TC003.output.status)
        expect(output.message).toBe(ReadVendorCategoryServiceData.READ_ONE_VENDORCATEGORY_TS002_TC003.output.message)        
	});

});