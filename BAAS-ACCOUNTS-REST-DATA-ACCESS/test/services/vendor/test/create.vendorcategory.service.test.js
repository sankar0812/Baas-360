/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create vendorcategory service class
**/

/**
 * Importing all required modules here
 */

const createVendorCategoryServiceData = require("../data/create.vendorcategory.service.data")
const createVendorCategoryService = require("../../../../src/services/vendor/create.vendorcategory.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateVendorCategoryService = new createVendorCategoryService();
const CreateVendorCategoryServiceData = new createVendorCategoryServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorcategory.ts.001] | FunctionPath : [src/services/vendor/create.vendorcategory.service.js/createOneVendorCategory()]", () => {


	test(CreateVendorCategoryServiceData.CREATE_ONE_VENDORCATEGORY_TS001_TC001.description, async () => {

        const output = await CreateVendorCategoryService.createOneVendorCategory(
            CreateVendorCategoryServiceData.CREATE_ONE_VENDORCATEGORY_TS001_TC001.input.databaseConnector,
            CreateVendorCategoryServiceData.CREATE_ONE_VENDORCATEGORY_TS001_TC001.input.apiID,
            CreateVendorCategoryServiceData.CREATE_ONE_VENDORCATEGORY_TS001_TC001.input.config,
            CreateVendorCategoryServiceData.CREATE_ONE_VENDORCATEGORY_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateVendorCategoryServiceData.CREATE_ONE_VENDORCATEGORY_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateVendorCategoryServiceData.CREATE_ONE_VENDORCATEGORY_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateVendorCategoryServiceData.CREATE_ONE_VENDORCATEGORY_TS001_TC001.output)[2])
	});



    test(CreateVendorCategoryServiceData.CREATE_ONE_VENDORCATEGORY_TS001_TC002.description, async () => {

        const output = await CreateVendorCategoryService.createOneVendorCategory(
            CreateVendorCategoryServiceData.CREATE_ONE_VENDORCATEGORY_TS001_TC002.input.databaseConnector,
            CreateVendorCategoryServiceData.CREATE_ONE_VENDORCATEGORY_TS001_TC002.input.apiID,
            CreateVendorCategoryServiceData.CREATE_ONE_VENDORCATEGORY_TS001_TC002.input.config,
            CreateVendorCategoryServiceData.CREATE_ONE_VENDORCATEGORY_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateVendorCategoryServiceData.CREATE_ONE_VENDORCATEGORY_TS001_TC002.output.data)
        expect(output.status).toBe(CreateVendorCategoryServiceData.CREATE_ONE_VENDORCATEGORY_TS001_TC002.output.status)
        expect(output.message).toBe(CreateVendorCategoryServiceData.CREATE_ONE_VENDORCATEGORY_TS001_TC002.output.message)        
	});



    test(CreateVendorCategoryServiceData.CREATE_ONE_VENDORCATEGORY_TS001_TC003.description, async () => {

        const output = await CreateVendorCategoryService.createOneVendorCategory(
            CreateVendorCategoryServiceData.CREATE_ONE_VENDORCATEGORY_TS001_TC003.input.databaseConnector,
            CreateVendorCategoryServiceData.CREATE_ONE_VENDORCATEGORY_TS001_TC003.input.apiID,
            CreateVendorCategoryServiceData.CREATE_ONE_VENDORCATEGORY_TS001_TC003.input.config,
            CreateVendorCategoryServiceData.CREATE_ONE_VENDORCATEGORY_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateVendorCategoryServiceData.CREATE_ONE_VENDORCATEGORY_TS001_TC003.output.status)
        expect(output.message).toBe(CreateVendorCategoryServiceData.CREATE_ONE_VENDORCATEGORY_TS001_TC003.output.message)        
	});

});