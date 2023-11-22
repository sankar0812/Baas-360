/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create asset service class
**/

/**
 * Importing all required modules here
 */

const createAssetServiceData = require("../data/create.asset.service.data")
const createAssetService = require("../../../../src/services/asset/create.asset.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateAssetService = new createAssetService();
const CreateAssetServiceData = new createAssetServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.asset.ts.001] | FunctionPath : [src/services/asset/create.asset.service.js/createOneAsset()]", () => {


	test(CreateAssetServiceData.CREATE_ONE_ASSET_TS001_TC001.description, async () => {

        const output = await CreateAssetService.createOneAsset(
            CreateAssetServiceData.CREATE_ONE_ASSET_TS001_TC001.input.databaseConnector,
            CreateAssetServiceData.CREATE_ONE_ASSET_TS001_TC001.input.apiID,
            CreateAssetServiceData.CREATE_ONE_ASSET_TS001_TC001.input.config,
            CreateAssetServiceData.CREATE_ONE_ASSET_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateAssetServiceData.CREATE_ONE_ASSET_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateAssetServiceData.CREATE_ONE_ASSET_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateAssetServiceData.CREATE_ONE_ASSET_TS001_TC001.output)[2])
	});



    test(CreateAssetServiceData.CREATE_ONE_ASSET_TS001_TC002.description, async () => {

        const output = await CreateAssetService.createOneAsset(
            CreateAssetServiceData.CREATE_ONE_ASSET_TS001_TC002.input.databaseConnector,
            CreateAssetServiceData.CREATE_ONE_ASSET_TS001_TC002.input.apiID,
            CreateAssetServiceData.CREATE_ONE_ASSET_TS001_TC002.input.config,
            CreateAssetServiceData.CREATE_ONE_ASSET_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateAssetServiceData.CREATE_ONE_ASSET_TS001_TC002.output.data)
        expect(output.status).toBe(CreateAssetServiceData.CREATE_ONE_ASSET_TS001_TC002.output.status)
        expect(output.message).toBe(CreateAssetServiceData.CREATE_ONE_ASSET_TS001_TC002.output.message)        
	});



    test(CreateAssetServiceData.CREATE_ONE_ASSET_TS001_TC003.description, async () => {

        const output = await CreateAssetService.createOneAsset(
            CreateAssetServiceData.CREATE_ONE_ASSET_TS001_TC003.input.databaseConnector,
            CreateAssetServiceData.CREATE_ONE_ASSET_TS001_TC003.input.apiID,
            CreateAssetServiceData.CREATE_ONE_ASSET_TS001_TC003.input.config,
            CreateAssetServiceData.CREATE_ONE_ASSET_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateAssetServiceData.CREATE_ONE_ASSET_TS001_TC003.output.status)
        expect(output.message).toBe(CreateAssetServiceData.CREATE_ONE_ASSET_TS001_TC003.output.message)        
	});

});