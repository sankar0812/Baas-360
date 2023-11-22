/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read AssetUsage service class
**/

/**
 * Importing all required modules here
 */

const readAssetUsageServiceData = require("../data/read.assetusage.service.data")
const readAssetUsageService = require("../../../../src/services/asset/read.assetusage.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadAssetUsageService = new readAssetUsageService();
const ReadAssetUsageServiceData = new readAssetUsageServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetusage.ts.001] | FunctionPath : [src/services/asset/read.contianer.service.js/readAssetUsages()]", () => {


	test(ReadAssetUsageServiceData.READ_ASSETUSAGE_TS001_TC001.description, async () => {

        const output = await ReadAssetUsageService.readAssetUsages(
            ReadAssetUsageServiceData.READ_ASSETUSAGE_TS001_TC001.input.databaseConnector,
            ReadAssetUsageServiceData.READ_ASSETUSAGE_TS001_TC001.input.apiID,
            ReadAssetUsageServiceData.READ_ASSETUSAGE_TS001_TC001.input.config,
            ReadAssetUsageServiceData.READ_ASSETUSAGE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAssetUsageServiceData.READ_ASSETUSAGE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAssetUsageServiceData.READ_ASSETUSAGE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAssetUsageServiceData.READ_ASSETUSAGE_TS001_TC001.output)[2])
	});



    test(ReadAssetUsageServiceData.READ_ASSETUSAGE_TS001_TC002.description, async () => {

        const output = await ReadAssetUsageService.readAssetUsages(
            ReadAssetUsageServiceData.READ_ASSETUSAGE_TS001_TC002.input.databaseConnector,
            ReadAssetUsageServiceData.READ_ASSETUSAGE_TS001_TC002.input.apiID,
            ReadAssetUsageServiceData.READ_ASSETUSAGE_TS001_TC002.input.config,
            ReadAssetUsageServiceData.READ_ASSETUSAGE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadAssetUsageServiceData.READ_ASSETUSAGE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadAssetUsageServiceData.READ_ASSETUSAGE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadAssetUsageServiceData.READ_ASSETUSAGE_TS001_TC002.output.message)        
	});



    test(ReadAssetUsageServiceData.READ_ASSETUSAGE_TS001_TC003.description, async () => {

        const output = await ReadAssetUsageService.readAssetUsages(
            ReadAssetUsageServiceData.READ_ASSETUSAGE_TS001_TC003.input.databaseConnector,
            ReadAssetUsageServiceData.READ_ASSETUSAGE_TS001_TC003.input.apiID,
            ReadAssetUsageServiceData.READ_ASSETUSAGE_TS001_TC003.input.config,
            ReadAssetUsageServiceData.READ_ASSETUSAGE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadAssetUsageServiceData.READ_ASSETUSAGE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadAssetUsageServiceData.READ_ASSETUSAGE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.assetusage.ts.002] | FunctionPath : [src/services/asset/read.assetusage.service.js/readOneAssetUsage()]", () => {


	test(ReadAssetUsageServiceData.READ_ONE_ASSETUSAGE_TS002_TC001.description, async () => {

        const output = await ReadAssetUsageService.readOneAssetUsage(
            ReadAssetUsageServiceData.READ_ONE_ASSETUSAGE_TS002_TC001.input.databaseConnector,
            ReadAssetUsageServiceData.READ_ONE_ASSETUSAGE_TS002_TC001.input.apiID,
            ReadAssetUsageServiceData.READ_ONE_ASSETUSAGE_TS002_TC001.input.config,
            ReadAssetUsageServiceData.READ_ONE_ASSETUSAGE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAssetUsageServiceData.READ_ONE_ASSETUSAGE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAssetUsageServiceData.READ_ONE_ASSETUSAGE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAssetUsageServiceData.READ_ONE_ASSETUSAGE_TS002_TC001.output)[2])
	});



    test(ReadAssetUsageServiceData.READ_ONE_ASSETUSAGE_TS002_TC002.description, async () => {

        const output = await ReadAssetUsageService.readOneAssetUsage(
            ReadAssetUsageServiceData.READ_ONE_ASSETUSAGE_TS002_TC002.input.databaseConnector,
            ReadAssetUsageServiceData.READ_ONE_ASSETUSAGE_TS002_TC002.input.apiID,
            ReadAssetUsageServiceData.READ_ONE_ASSETUSAGE_TS002_TC002.input.config,
            ReadAssetUsageServiceData.READ_ONE_ASSETUSAGE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadAssetUsageServiceData.READ_ONE_ASSETUSAGE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadAssetUsageServiceData.READ_ONE_ASSETUSAGE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadAssetUsageServiceData.READ_ONE_ASSETUSAGE_TS002_TC002.output.message)        
	});



    test(ReadAssetUsageServiceData.READ_ONE_ASSETUSAGE_TS002_TC003.description, async () => {

        const output = await ReadAssetUsageService.readOneAssetUsage(
            ReadAssetUsageServiceData.READ_ONE_ASSETUSAGE_TS002_TC003.input.databaseConnector,
            ReadAssetUsageServiceData.READ_ONE_ASSETUSAGE_TS002_TC003.input.apiID,
            ReadAssetUsageServiceData.READ_ONE_ASSETUSAGE_TS002_TC003.input.config,
            ReadAssetUsageServiceData.READ_ONE_ASSETUSAGE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadAssetUsageServiceData.READ_ONE_ASSETUSAGE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadAssetUsageServiceData.READ_ONE_ASSETUSAGE_TS002_TC003.output.message)        
	});

});