

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update asset service class
**/

/**
 * Importing all required modules here
 */

const updateAssetServiceData = require("../data/update.asset.service.data")
const updateAssetService = require("../../../../src/services/asset/update.asset.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateAssetService = new updateAssetService();
const UpdateAssetServiceData = new updateAssetServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.asset.ts.001] | FunctionPath : [src/services/asset/update.asset.service.js/updateAsset()]", () => {

	test(UpdateAssetServiceData.UPDATE_ASSET_TS001_TC001.description, async () => {

        const output = await UpdateAssetService.updateAsset(
            UpdateAssetServiceData.UPDATE_ASSET_TS001_TC001.input.databaseConnector,
            UpdateAssetServiceData.UPDATE_ASSET_TS001_TC001.input.apiID,
            UpdateAssetServiceData.UPDATE_ASSET_TS001_TC001.input.config,
            UpdateAssetServiceData.UPDATE_ASSET_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateAssetServiceData.UPDATE_ASSET_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateAssetServiceData.UPDATE_ASSET_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateAssetServiceData.UPDATE_ASSET_TS001_TC001.output)[2])
	});

    test(UpdateAssetServiceData.UPDATE_ASSET_TS001_TC002.description, async () => {

        const output = await UpdateAssetService.updateAsset(
            UpdateAssetServiceData.UPDATE_ASSET_TS001_TC002.input.databaseConnector,
            UpdateAssetServiceData.UPDATE_ASSET_TS001_TC002.input.apiID,
            UpdateAssetServiceData.UPDATE_ASSET_TS001_TC002.input.config,
            UpdateAssetServiceData.UPDATE_ASSET_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateAssetServiceData.UPDATE_ASSET_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateAssetServiceData.UPDATE_ASSET_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateAssetServiceData.UPDATE_ASSET_TS001_TC002.output.message)        
	});

    test(UpdateAssetServiceData.UPDATE_ASSET_TS001_TC003.description, async () => {

        const output = await UpdateAssetService.updateAsset(
            UpdateAssetServiceData.UPDATE_ASSET_TS001_TC003.input.databaseConnector,
            UpdateAssetServiceData.UPDATE_ASSET_TS001_TC003.input.apiID,
            UpdateAssetServiceData.UPDATE_ASSET_TS001_TC003.input.config,
            UpdateAssetServiceData.UPDATE_ASSET_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateAssetServiceData.UPDATE_ASSET_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateAssetServiceData.UPDATE_ASSET_TS001_TC003.output.message)        
	});

});
