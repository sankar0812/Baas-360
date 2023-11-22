

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update productparam service class
**/

/**
 * Importing all required modules here
 */

const updateProductParamServiceData = require("../data/update.productparam.service.data")
const updateProductParamService = require("../../../../src/services/product/update.productparam.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateProductParamService = new updateProductParamService();
const UpdateProductParamServiceData = new updateProductParamServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productparam.ts.001] | FunctionPath : [src/services/product/update.productparam.service.js/updateProductParam()]", () => {

	test(UpdateProductParamServiceData.UPDATE_PRODUCTPARAM_TS001_TC001.description, async () => {

        const output = await UpdateProductParamService.updateProductParam(
            UpdateProductParamServiceData.UPDATE_PRODUCTPARAM_TS001_TC001.input.databaseConnector,
            UpdateProductParamServiceData.UPDATE_PRODUCTPARAM_TS001_TC001.input.apiID,
            UpdateProductParamServiceData.UPDATE_PRODUCTPARAM_TS001_TC001.input.config,
            UpdateProductParamServiceData.UPDATE_PRODUCTPARAM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateProductParamServiceData.UPDATE_PRODUCTPARAM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateProductParamServiceData.UPDATE_PRODUCTPARAM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateProductParamServiceData.UPDATE_PRODUCTPARAM_TS001_TC001.output)[2])
	});

    test(UpdateProductParamServiceData.UPDATE_PRODUCTPARAM_TS001_TC002.description, async () => {

        const output = await UpdateProductParamService.updateProductParam(
            UpdateProductParamServiceData.UPDATE_PRODUCTPARAM_TS001_TC002.input.databaseConnector,
            UpdateProductParamServiceData.UPDATE_PRODUCTPARAM_TS001_TC002.input.apiID,
            UpdateProductParamServiceData.UPDATE_PRODUCTPARAM_TS001_TC002.input.config,
            UpdateProductParamServiceData.UPDATE_PRODUCTPARAM_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateProductParamServiceData.UPDATE_PRODUCTPARAM_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateProductParamServiceData.UPDATE_PRODUCTPARAM_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateProductParamServiceData.UPDATE_PRODUCTPARAM_TS001_TC002.output.message)        
	});

    test(UpdateProductParamServiceData.UPDATE_PRODUCTPARAM_TS001_TC003.description, async () => {

        const output = await UpdateProductParamService.updateProductParam(
            UpdateProductParamServiceData.UPDATE_PRODUCTPARAM_TS001_TC003.input.databaseConnector,
            UpdateProductParamServiceData.UPDATE_PRODUCTPARAM_TS001_TC003.input.apiID,
            UpdateProductParamServiceData.UPDATE_PRODUCTPARAM_TS001_TC003.input.config,
            UpdateProductParamServiceData.UPDATE_PRODUCTPARAM_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateProductParamServiceData.UPDATE_PRODUCTPARAM_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateProductParamServiceData.UPDATE_PRODUCTPARAM_TS001_TC003.output.message)        
	});

});
