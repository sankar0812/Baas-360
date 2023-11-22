/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete asset service class
**/

/**
 * Importing all required modules here
 */

const deleteAssetServiceData = require("../data/delete.asset.service.data")
const deleteAssetService = require("../../../../src/services/asset/delete.asset.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteAssetService = new deleteAssetService();
const DeleteAssetServiceData = new deleteAssetServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.asset.ts.001] | FunctionPath : [src/services/asset/delete.asset.service.js/deleteOneAsset()]", () => {


	test(DeleteAssetServiceData.DELETE_ONE_ASSET_TS001_TC001.description, async () => {

        const output = await DeleteAssetService.deleteOneAsset(
            DeleteAssetServiceData.DELETE_ONE_ASSET_TS001_TC001.input.databaseConnector,
            DeleteAssetServiceData.DELETE_ONE_ASSET_TS001_TC001.input.apiID,
            DeleteAssetServiceData.DELETE_ONE_ASSET_TS001_TC001.input.config,
            DeleteAssetServiceData.DELETE_ONE_ASSET_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteAssetServiceData.DELETE_ONE_ASSET_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteAssetServiceData.DELETE_ONE_ASSET_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteAssetServiceData.DELETE_ONE_ASSET_TS001_TC001.output)[2])
	});



    test(DeleteAssetServiceData.DELETE_ONE_ASSET_TS001_TC002.description, async () => {

        const output = await DeleteAssetService.deleteOneAsset(
            DeleteAssetServiceData.DELETE_ONE_ASSET_TS001_TC002.input.databaseConnector,
            DeleteAssetServiceData.DELETE_ONE_ASSET_TS001_TC002.input.apiID,
            DeleteAssetServiceData.DELETE_ONE_ASSET_TS001_TC002.input.config,
            DeleteAssetServiceData.DELETE_ONE_ASSET_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteAssetServiceData.DELETE_ONE_ASSET_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteAssetServiceData.DELETE_ONE_ASSET_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteAssetServiceData.DELETE_ONE_ASSET_TS001_TC002.output.message)        
	});



    test(DeleteAssetServiceData.DELETE_ONE_ASSET_TS001_TC003.description, async () => {

        const output = await DeleteAssetService.deleteOneAsset(
            DeleteAssetServiceData.DELETE_ONE_ASSET_TS001_TC003.input.databaseConnector,
            DeleteAssetServiceData.DELETE_ONE_ASSET_TS001_TC003.input.apiID,
            DeleteAssetServiceData.DELETE_ONE_ASSET_TS001_TC003.input.config,
            DeleteAssetServiceData.DELETE_ONE_ASSET_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteAssetServiceData.DELETE_ONE_ASSET_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteAssetServiceData.DELETE_ONE_ASSET_TS001_TC003.output.message)        
	});

});
