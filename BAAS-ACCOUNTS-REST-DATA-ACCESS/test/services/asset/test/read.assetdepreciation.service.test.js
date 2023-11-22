/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read AssetDepreciation service class
**/

/**
 * Importing all required modules here
 */

const readAssetDepreciationServiceData = require("../data/read.assetdepreciation.service.data")
const readAssetDepreciationService = require("../../../../src/services/asset/read.assetdepreciation.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadAssetDepreciationService = new readAssetDepreciationService();
const ReadAssetDepreciationServiceData = new readAssetDepreciationServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetdepreciation.ts.001] | FunctionPath : [src/services/asset/read.contianer.service.js/readAssetDepreciations()]", () => {


	test(ReadAssetDepreciationServiceData.READ_ASSETDEPRECIATION_TS001_TC001.description, async () => {

        const output = await ReadAssetDepreciationService.readAssetDepreciations(
            ReadAssetDepreciationServiceData.READ_ASSETDEPRECIATION_TS001_TC001.input.databaseConnector,
            ReadAssetDepreciationServiceData.READ_ASSETDEPRECIATION_TS001_TC001.input.apiID,
            ReadAssetDepreciationServiceData.READ_ASSETDEPRECIATION_TS001_TC001.input.config,
            ReadAssetDepreciationServiceData.READ_ASSETDEPRECIATION_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAssetDepreciationServiceData.READ_ASSETDEPRECIATION_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAssetDepreciationServiceData.READ_ASSETDEPRECIATION_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAssetDepreciationServiceData.READ_ASSETDEPRECIATION_TS001_TC001.output)[2])
	});



    test(ReadAssetDepreciationServiceData.READ_ASSETDEPRECIATION_TS001_TC002.description, async () => {

        const output = await ReadAssetDepreciationService.readAssetDepreciations(
            ReadAssetDepreciationServiceData.READ_ASSETDEPRECIATION_TS001_TC002.input.databaseConnector,
            ReadAssetDepreciationServiceData.READ_ASSETDEPRECIATION_TS001_TC002.input.apiID,
            ReadAssetDepreciationServiceData.READ_ASSETDEPRECIATION_TS001_TC002.input.config,
            ReadAssetDepreciationServiceData.READ_ASSETDEPRECIATION_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadAssetDepreciationServiceData.READ_ASSETDEPRECIATION_TS001_TC002.output.data)
        expect(output.status).toBe(ReadAssetDepreciationServiceData.READ_ASSETDEPRECIATION_TS001_TC002.output.status)
        expect(output.message).toBe(ReadAssetDepreciationServiceData.READ_ASSETDEPRECIATION_TS001_TC002.output.message)        
	});



    test(ReadAssetDepreciationServiceData.READ_ASSETDEPRECIATION_TS001_TC003.description, async () => {

        const output = await ReadAssetDepreciationService.readAssetDepreciations(
            ReadAssetDepreciationServiceData.READ_ASSETDEPRECIATION_TS001_TC003.input.databaseConnector,
            ReadAssetDepreciationServiceData.READ_ASSETDEPRECIATION_TS001_TC003.input.apiID,
            ReadAssetDepreciationServiceData.READ_ASSETDEPRECIATION_TS001_TC003.input.config,
            ReadAssetDepreciationServiceData.READ_ASSETDEPRECIATION_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadAssetDepreciationServiceData.READ_ASSETDEPRECIATION_TS001_TC003.output.status)
        expect(output.message).toBe(ReadAssetDepreciationServiceData.READ_ASSETDEPRECIATION_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.assetdepreciation.ts.002] | FunctionPath : [src/services/asset/read.assetdepreciation.service.js/readOneAssetDepreciation()]", () => {


	test(ReadAssetDepreciationServiceData.READ_ONE_ASSETDEPRECIATION_TS002_TC001.description, async () => {

        const output = await ReadAssetDepreciationService.readOneAssetDepreciation(
            ReadAssetDepreciationServiceData.READ_ONE_ASSETDEPRECIATION_TS002_TC001.input.databaseConnector,
            ReadAssetDepreciationServiceData.READ_ONE_ASSETDEPRECIATION_TS002_TC001.input.apiID,
            ReadAssetDepreciationServiceData.READ_ONE_ASSETDEPRECIATION_TS002_TC001.input.config,
            ReadAssetDepreciationServiceData.READ_ONE_ASSETDEPRECIATION_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAssetDepreciationServiceData.READ_ONE_ASSETDEPRECIATION_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAssetDepreciationServiceData.READ_ONE_ASSETDEPRECIATION_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAssetDepreciationServiceData.READ_ONE_ASSETDEPRECIATION_TS002_TC001.output)[2])
	});



    test(ReadAssetDepreciationServiceData.READ_ONE_ASSETDEPRECIATION_TS002_TC002.description, async () => {

        const output = await ReadAssetDepreciationService.readOneAssetDepreciation(
            ReadAssetDepreciationServiceData.READ_ONE_ASSETDEPRECIATION_TS002_TC002.input.databaseConnector,
            ReadAssetDepreciationServiceData.READ_ONE_ASSETDEPRECIATION_TS002_TC002.input.apiID,
            ReadAssetDepreciationServiceData.READ_ONE_ASSETDEPRECIATION_TS002_TC002.input.config,
            ReadAssetDepreciationServiceData.READ_ONE_ASSETDEPRECIATION_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadAssetDepreciationServiceData.READ_ONE_ASSETDEPRECIATION_TS002_TC002.output.data)
        expect(output.status).toBe(ReadAssetDepreciationServiceData.READ_ONE_ASSETDEPRECIATION_TS002_TC002.output.status)
        expect(output.message).toBe(ReadAssetDepreciationServiceData.READ_ONE_ASSETDEPRECIATION_TS002_TC002.output.message)        
	});



    test(ReadAssetDepreciationServiceData.READ_ONE_ASSETDEPRECIATION_TS002_TC003.description, async () => {

        const output = await ReadAssetDepreciationService.readOneAssetDepreciation(
            ReadAssetDepreciationServiceData.READ_ONE_ASSETDEPRECIATION_TS002_TC003.input.databaseConnector,
            ReadAssetDepreciationServiceData.READ_ONE_ASSETDEPRECIATION_TS002_TC003.input.apiID,
            ReadAssetDepreciationServiceData.READ_ONE_ASSETDEPRECIATION_TS002_TC003.input.config,
            ReadAssetDepreciationServiceData.READ_ONE_ASSETDEPRECIATION_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadAssetDepreciationServiceData.READ_ONE_ASSETDEPRECIATION_TS002_TC003.output.status)
        expect(output.message).toBe(ReadAssetDepreciationServiceData.READ_ONE_ASSETDEPRECIATION_TS002_TC003.output.message)        
	});

});