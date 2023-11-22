

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update assetproductparam service class
**/

/**
 * Importing all required modules here
 */

const updateAssetProductParamServiceData = require("../data/update.assetproductparam.service.data")
const updateAssetProductParamService = require("../../../../src/services/asset/update.assetproductparam.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateAssetProductParamService = new updateAssetProductParamService();
const UpdateAssetProductParamServiceData = new updateAssetProductParamServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetproductparam.ts.001] | FunctionPath : [src/services/asset/update.assetproductparam.service.js/updateAssetProductParam()]", () => {

	test(UpdateAssetProductParamServiceData.UPDATE_ASSETPRODUCTPARAM_TS001_TC001.description, async () => {

        const output = await UpdateAssetProductParamService.updateAssetProductParam(
            UpdateAssetProductParamServiceData.UPDATE_ASSETPRODUCTPARAM_TS001_TC001.input.databaseConnector,
            UpdateAssetProductParamServiceData.UPDATE_ASSETPRODUCTPARAM_TS001_TC001.input.apiID,
            UpdateAssetProductParamServiceData.UPDATE_ASSETPRODUCTPARAM_TS001_TC001.input.config,
            UpdateAssetProductParamServiceData.UPDATE_ASSETPRODUCTPARAM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateAssetProductParamServiceData.UPDATE_ASSETPRODUCTPARAM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateAssetProductParamServiceData.UPDATE_ASSETPRODUCTPARAM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateAssetProductParamServiceData.UPDATE_ASSETPRODUCTPARAM_TS001_TC001.output)[2])
	});

    test(UpdateAssetProductParamServiceData.UPDATE_ASSETPRODUCTPARAM_TS001_TC002.description, async () => {

        const output = await UpdateAssetProductParamService.updateAssetProductParam(
            UpdateAssetProductParamServiceData.UPDATE_ASSETPRODUCTPARAM_TS001_TC002.input.databaseConnector,
            UpdateAssetProductParamServiceData.UPDATE_ASSETPRODUCTPARAM_TS001_TC002.input.apiID,
            UpdateAssetProductParamServiceData.UPDATE_ASSETPRODUCTPARAM_TS001_TC002.input.config,
            UpdateAssetProductParamServiceData.UPDATE_ASSETPRODUCTPARAM_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateAssetProductParamServiceData.UPDATE_ASSETPRODUCTPARAM_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateAssetProductParamServiceData.UPDATE_ASSETPRODUCTPARAM_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateAssetProductParamServiceData.UPDATE_ASSETPRODUCTPARAM_TS001_TC002.output.message)        
	});

    test(UpdateAssetProductParamServiceData.UPDATE_ASSETPRODUCTPARAM_TS001_TC003.description, async () => {

        const output = await UpdateAssetProductParamService.updateAssetProductParam(
            UpdateAssetProductParamServiceData.UPDATE_ASSETPRODUCTPARAM_TS001_TC003.input.databaseConnector,
            UpdateAssetProductParamServiceData.UPDATE_ASSETPRODUCTPARAM_TS001_TC003.input.apiID,
            UpdateAssetProductParamServiceData.UPDATE_ASSETPRODUCTPARAM_TS001_TC003.input.config,
            UpdateAssetProductParamServiceData.UPDATE_ASSETPRODUCTPARAM_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateAssetProductParamServiceData.UPDATE_ASSETPRODUCTPARAM_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateAssetProductParamServiceData.UPDATE_ASSETPRODUCTPARAM_TS001_TC003.output.message)        
	});

});
