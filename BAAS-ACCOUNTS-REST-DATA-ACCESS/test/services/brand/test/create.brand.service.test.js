/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create brand service class
**/

/**
 * Importing all required modules here
 */

const createBrandServiceData = require("../data/create.brand.service.data")
const createBrandService = require("../../../../src/services/brand/create.brand.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateBrandService = new createBrandService();
const CreateBrandServiceData = new createBrandServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.brand.ts.001] | FunctionPath : [src/services/brand/create.brand.service.js/createOneBrand()]", () => {


	test(CreateBrandServiceData.CREATE_ONE_BRAND_TS001_TC001.description, async () => {

        const output = await CreateBrandService.createOneBrand(
            CreateBrandServiceData.CREATE_ONE_BRAND_TS001_TC001.input.databaseConnector,
            CreateBrandServiceData.CREATE_ONE_BRAND_TS001_TC001.input.apiID,
            CreateBrandServiceData.CREATE_ONE_BRAND_TS001_TC001.input.config,
            CreateBrandServiceData.CREATE_ONE_BRAND_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateBrandServiceData.CREATE_ONE_BRAND_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateBrandServiceData.CREATE_ONE_BRAND_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateBrandServiceData.CREATE_ONE_BRAND_TS001_TC001.output)[2])
	});



    test(CreateBrandServiceData.CREATE_ONE_BRAND_TS001_TC002.description, async () => {

        const output = await CreateBrandService.createOneBrand(
            CreateBrandServiceData.CREATE_ONE_BRAND_TS001_TC002.input.databaseConnector,
            CreateBrandServiceData.CREATE_ONE_BRAND_TS001_TC002.input.apiID,
            CreateBrandServiceData.CREATE_ONE_BRAND_TS001_TC002.input.config,
            CreateBrandServiceData.CREATE_ONE_BRAND_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateBrandServiceData.CREATE_ONE_BRAND_TS001_TC002.output.data)
        expect(output.status).toBe(CreateBrandServiceData.CREATE_ONE_BRAND_TS001_TC002.output.status)
        expect(output.message).toBe(CreateBrandServiceData.CREATE_ONE_BRAND_TS001_TC002.output.message)        
	});



    test(CreateBrandServiceData.CREATE_ONE_BRAND_TS001_TC003.description, async () => {

        const output = await CreateBrandService.createOneBrand(
            CreateBrandServiceData.CREATE_ONE_BRAND_TS001_TC003.input.databaseConnector,
            CreateBrandServiceData.CREATE_ONE_BRAND_TS001_TC003.input.apiID,
            CreateBrandServiceData.CREATE_ONE_BRAND_TS001_TC003.input.config,
            CreateBrandServiceData.CREATE_ONE_BRAND_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateBrandServiceData.CREATE_ONE_BRAND_TS001_TC003.output.status)
        expect(output.message).toBe(CreateBrandServiceData.CREATE_ONE_BRAND_TS001_TC003.output.message)        
	});

});