/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete brand service class
**/

/**
 * Importing all required modules here
 */

const deleteBrandServiceData = require("../data/delete.brand.service.data")
const deleteBrandService = require("../../../../src/services/brand/delete.brand.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteBrandService = new deleteBrandService();
const DeleteBrandServiceData = new deleteBrandServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.brand.ts.001] | FunctionPath : [src/services/brand/delete.brand.service.js/deleteOneBrand()]", () => {


	test(DeleteBrandServiceData.DELETE_ONE_BRAND_TS001_TC001.description, async () => {

        const output = await DeleteBrandService.deleteOneBrand(
            DeleteBrandServiceData.DELETE_ONE_BRAND_TS001_TC001.input.databaseConnector,
            DeleteBrandServiceData.DELETE_ONE_BRAND_TS001_TC001.input.apiID,
            DeleteBrandServiceData.DELETE_ONE_BRAND_TS001_TC001.input.config,
            DeleteBrandServiceData.DELETE_ONE_BRAND_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteBrandServiceData.DELETE_ONE_BRAND_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteBrandServiceData.DELETE_ONE_BRAND_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteBrandServiceData.DELETE_ONE_BRAND_TS001_TC001.output)[2])
	});



    test(DeleteBrandServiceData.DELETE_ONE_BRAND_TS001_TC002.description, async () => {

        const output = await DeleteBrandService.deleteOneBrand(
            DeleteBrandServiceData.DELETE_ONE_BRAND_TS001_TC002.input.databaseConnector,
            DeleteBrandServiceData.DELETE_ONE_BRAND_TS001_TC002.input.apiID,
            DeleteBrandServiceData.DELETE_ONE_BRAND_TS001_TC002.input.config,
            DeleteBrandServiceData.DELETE_ONE_BRAND_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteBrandServiceData.DELETE_ONE_BRAND_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteBrandServiceData.DELETE_ONE_BRAND_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteBrandServiceData.DELETE_ONE_BRAND_TS001_TC002.output.message)        
	});



    test(DeleteBrandServiceData.DELETE_ONE_BRAND_TS001_TC003.description, async () => {

        const output = await DeleteBrandService.deleteOneBrand(
            DeleteBrandServiceData.DELETE_ONE_BRAND_TS001_TC003.input.databaseConnector,
            DeleteBrandServiceData.DELETE_ONE_BRAND_TS001_TC003.input.apiID,
            DeleteBrandServiceData.DELETE_ONE_BRAND_TS001_TC003.input.config,
            DeleteBrandServiceData.DELETE_ONE_BRAND_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteBrandServiceData.DELETE_ONE_BRAND_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteBrandServiceData.DELETE_ONE_BRAND_TS001_TC003.output.message)        
	});

});
