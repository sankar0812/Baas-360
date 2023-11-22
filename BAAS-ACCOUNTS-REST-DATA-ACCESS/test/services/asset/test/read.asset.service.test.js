/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Asset service class
**/

/**
 * Importing all required modules here
 */

const readAssetServiceData = require("../data/read.asset.service.data")
const readAssetService = require("../../../../src/services/asset/read.asset.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadAssetService = new readAssetService();
const ReadAssetServiceData = new readAssetServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.asset.ts.001] | FunctionPath : [src/services/asset/read.contianer.service.js/readAssets()]", () => {


	test(ReadAssetServiceData.READ_ASSET_TS001_TC001.description, async () => {

        const output = await ReadAssetService.readAssets(
            ReadAssetServiceData.READ_ASSET_TS001_TC001.input.databaseConnector,
            ReadAssetServiceData.READ_ASSET_TS001_TC001.input.apiID,
            ReadAssetServiceData.READ_ASSET_TS001_TC001.input.config,
            ReadAssetServiceData.READ_ASSET_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAssetServiceData.READ_ASSET_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAssetServiceData.READ_ASSET_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAssetServiceData.READ_ASSET_TS001_TC001.output)[2])
	});



    test(ReadAssetServiceData.READ_ASSET_TS001_TC002.description, async () => {

        const output = await ReadAssetService.readAssets(
            ReadAssetServiceData.READ_ASSET_TS001_TC002.input.databaseConnector,
            ReadAssetServiceData.READ_ASSET_TS001_TC002.input.apiID,
            ReadAssetServiceData.READ_ASSET_TS001_TC002.input.config,
            ReadAssetServiceData.READ_ASSET_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadAssetServiceData.READ_ASSET_TS001_TC002.output.data)
        expect(output.status).toBe(ReadAssetServiceData.READ_ASSET_TS001_TC002.output.status)
        expect(output.message).toBe(ReadAssetServiceData.READ_ASSET_TS001_TC002.output.message)        
	});



    test(ReadAssetServiceData.READ_ASSET_TS001_TC003.description, async () => {

        const output = await ReadAssetService.readAssets(
            ReadAssetServiceData.READ_ASSET_TS001_TC003.input.databaseConnector,
            ReadAssetServiceData.READ_ASSET_TS001_TC003.input.apiID,
            ReadAssetServiceData.READ_ASSET_TS001_TC003.input.config,
            ReadAssetServiceData.READ_ASSET_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadAssetServiceData.READ_ASSET_TS001_TC003.output.status)
        expect(output.message).toBe(ReadAssetServiceData.READ_ASSET_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.asset.ts.002] | FunctionPath : [src/services/asset/read.asset.service.js/readOneAsset()]", () => {


	test(ReadAssetServiceData.READ_ONE_ASSET_TS002_TC001.description, async () => {

        const output = await ReadAssetService.readOneAsset(
            ReadAssetServiceData.READ_ONE_ASSET_TS002_TC001.input.databaseConnector,
            ReadAssetServiceData.READ_ONE_ASSET_TS002_TC001.input.apiID,
            ReadAssetServiceData.READ_ONE_ASSET_TS002_TC001.input.config,
            ReadAssetServiceData.READ_ONE_ASSET_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAssetServiceData.READ_ONE_ASSET_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAssetServiceData.READ_ONE_ASSET_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAssetServiceData.READ_ONE_ASSET_TS002_TC001.output)[2])
	});



    test(ReadAssetServiceData.READ_ONE_ASSET_TS002_TC002.description, async () => {

        const output = await ReadAssetService.readOneAsset(
            ReadAssetServiceData.READ_ONE_ASSET_TS002_TC002.input.databaseConnector,
            ReadAssetServiceData.READ_ONE_ASSET_TS002_TC002.input.apiID,
            ReadAssetServiceData.READ_ONE_ASSET_TS002_TC002.input.config,
            ReadAssetServiceData.READ_ONE_ASSET_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadAssetServiceData.READ_ONE_ASSET_TS002_TC002.output.data)
        expect(output.status).toBe(ReadAssetServiceData.READ_ONE_ASSET_TS002_TC002.output.status)
        expect(output.message).toBe(ReadAssetServiceData.READ_ONE_ASSET_TS002_TC002.output.message)        
	});



    test(ReadAssetServiceData.READ_ONE_ASSET_TS002_TC003.description, async () => {

        const output = await ReadAssetService.readOneAsset(
            ReadAssetServiceData.READ_ONE_ASSET_TS002_TC003.input.databaseConnector,
            ReadAssetServiceData.READ_ONE_ASSET_TS002_TC003.input.apiID,
            ReadAssetServiceData.READ_ONE_ASSET_TS002_TC003.input.config,
            ReadAssetServiceData.READ_ONE_ASSET_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadAssetServiceData.READ_ONE_ASSET_TS002_TC003.output.status)
        expect(output.message).toBe(ReadAssetServiceData.READ_ONE_ASSET_TS002_TC003.output.message)        
	});

});