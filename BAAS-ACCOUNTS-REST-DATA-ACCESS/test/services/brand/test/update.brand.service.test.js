

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update brand service class
**/

/**
 * Importing all required modules here
 */

const updateBrandServiceData = require("../data/update.brand.service.data")
const updateBrandService = require("../../../../src/services/brand/update.brand.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateBrandService = new updateBrandService();
const UpdateBrandServiceData = new updateBrandServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.brand.ts.001] | FunctionPath : [src/services/brand/update.brand.service.js/updateBrand()]", () => {

	test(UpdateBrandServiceData.UPDATE_BRAND_TS001_TC001.description, async () => {

        const output = await UpdateBrandService.updateBrand(
            UpdateBrandServiceData.UPDATE_BRAND_TS001_TC001.input.databaseConnector,
            UpdateBrandServiceData.UPDATE_BRAND_TS001_TC001.input.apiID,
            UpdateBrandServiceData.UPDATE_BRAND_TS001_TC001.input.config,
            UpdateBrandServiceData.UPDATE_BRAND_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateBrandServiceData.UPDATE_BRAND_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateBrandServiceData.UPDATE_BRAND_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateBrandServiceData.UPDATE_BRAND_TS001_TC001.output)[2])
	});

    test(UpdateBrandServiceData.UPDATE_BRAND_TS001_TC002.description, async () => {

        const output = await UpdateBrandService.updateBrand(
            UpdateBrandServiceData.UPDATE_BRAND_TS001_TC002.input.databaseConnector,
            UpdateBrandServiceData.UPDATE_BRAND_TS001_TC002.input.apiID,
            UpdateBrandServiceData.UPDATE_BRAND_TS001_TC002.input.config,
            UpdateBrandServiceData.UPDATE_BRAND_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateBrandServiceData.UPDATE_BRAND_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateBrandServiceData.UPDATE_BRAND_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateBrandServiceData.UPDATE_BRAND_TS001_TC002.output.message)        
	});

    test(UpdateBrandServiceData.UPDATE_BRAND_TS001_TC003.description, async () => {

        const output = await UpdateBrandService.updateBrand(
            UpdateBrandServiceData.UPDATE_BRAND_TS001_TC003.input.databaseConnector,
            UpdateBrandServiceData.UPDATE_BRAND_TS001_TC003.input.apiID,
            UpdateBrandServiceData.UPDATE_BRAND_TS001_TC003.input.config,
            UpdateBrandServiceData.UPDATE_BRAND_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateBrandServiceData.UPDATE_BRAND_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateBrandServiceData.UPDATE_BRAND_TS001_TC003.output.message)        
	});

});
