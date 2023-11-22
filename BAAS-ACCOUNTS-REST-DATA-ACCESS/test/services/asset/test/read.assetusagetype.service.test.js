/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read AssetUsageType service class
**/

/**
 * Importing all required modules here
 */

const readAssetUsageTypeServiceData = require("../data/read.assetusagetype.service.data")
const readAssetUsageTypeService = require("../../../../src/services/asset/read.assetusagetype.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadAssetUsageTypeService = new readAssetUsageTypeService();
const ReadAssetUsageTypeServiceData = new readAssetUsageTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetusagetype.ts.001] | FunctionPath : [src/services/asset/read.contianer.service.js/readAssetUsageTypes()]", () => {


	test(ReadAssetUsageTypeServiceData.READ_ASSETUSAGETYPE_TS001_TC001.description, async () => {

        const output = await ReadAssetUsageTypeService.readAssetUsageTypes(
            ReadAssetUsageTypeServiceData.READ_ASSETUSAGETYPE_TS001_TC001.input.databaseConnector,
            ReadAssetUsageTypeServiceData.READ_ASSETUSAGETYPE_TS001_TC001.input.apiID,
            ReadAssetUsageTypeServiceData.READ_ASSETUSAGETYPE_TS001_TC001.input.config,
            ReadAssetUsageTypeServiceData.READ_ASSETUSAGETYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAssetUsageTypeServiceData.READ_ASSETUSAGETYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAssetUsageTypeServiceData.READ_ASSETUSAGETYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAssetUsageTypeServiceData.READ_ASSETUSAGETYPE_TS001_TC001.output)[2])
	});



    test(ReadAssetUsageTypeServiceData.READ_ASSETUSAGETYPE_TS001_TC002.description, async () => {

        const output = await ReadAssetUsageTypeService.readAssetUsageTypes(
            ReadAssetUsageTypeServiceData.READ_ASSETUSAGETYPE_TS001_TC002.input.databaseConnector,
            ReadAssetUsageTypeServiceData.READ_ASSETUSAGETYPE_TS001_TC002.input.apiID,
            ReadAssetUsageTypeServiceData.READ_ASSETUSAGETYPE_TS001_TC002.input.config,
            ReadAssetUsageTypeServiceData.READ_ASSETUSAGETYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadAssetUsageTypeServiceData.READ_ASSETUSAGETYPE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadAssetUsageTypeServiceData.READ_ASSETUSAGETYPE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadAssetUsageTypeServiceData.READ_ASSETUSAGETYPE_TS001_TC002.output.message)        
	});



    test(ReadAssetUsageTypeServiceData.READ_ASSETUSAGETYPE_TS001_TC003.description, async () => {

        const output = await ReadAssetUsageTypeService.readAssetUsageTypes(
            ReadAssetUsageTypeServiceData.READ_ASSETUSAGETYPE_TS001_TC003.input.databaseConnector,
            ReadAssetUsageTypeServiceData.READ_ASSETUSAGETYPE_TS001_TC003.input.apiID,
            ReadAssetUsageTypeServiceData.READ_ASSETUSAGETYPE_TS001_TC003.input.config,
            ReadAssetUsageTypeServiceData.READ_ASSETUSAGETYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadAssetUsageTypeServiceData.READ_ASSETUSAGETYPE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadAssetUsageTypeServiceData.READ_ASSETUSAGETYPE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.assetusagetype.ts.002] | FunctionPath : [src/services/asset/read.assetusagetype.service.js/readOneAssetUsageType()]", () => {


	test(ReadAssetUsageTypeServiceData.READ_ONE_ASSETUSAGETYPE_TS002_TC001.description, async () => {

        const output = await ReadAssetUsageTypeService.readOneAssetUsageType(
            ReadAssetUsageTypeServiceData.READ_ONE_ASSETUSAGETYPE_TS002_TC001.input.databaseConnector,
            ReadAssetUsageTypeServiceData.READ_ONE_ASSETUSAGETYPE_TS002_TC001.input.apiID,
            ReadAssetUsageTypeServiceData.READ_ONE_ASSETUSAGETYPE_TS002_TC001.input.config,
            ReadAssetUsageTypeServiceData.READ_ONE_ASSETUSAGETYPE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAssetUsageTypeServiceData.READ_ONE_ASSETUSAGETYPE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAssetUsageTypeServiceData.READ_ONE_ASSETUSAGETYPE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAssetUsageTypeServiceData.READ_ONE_ASSETUSAGETYPE_TS002_TC001.output)[2])
	});



    test(ReadAssetUsageTypeServiceData.READ_ONE_ASSETUSAGETYPE_TS002_TC002.description, async () => {

        const output = await ReadAssetUsageTypeService.readOneAssetUsageType(
            ReadAssetUsageTypeServiceData.READ_ONE_ASSETUSAGETYPE_TS002_TC002.input.databaseConnector,
            ReadAssetUsageTypeServiceData.READ_ONE_ASSETUSAGETYPE_TS002_TC002.input.apiID,
            ReadAssetUsageTypeServiceData.READ_ONE_ASSETUSAGETYPE_TS002_TC002.input.config,
            ReadAssetUsageTypeServiceData.READ_ONE_ASSETUSAGETYPE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadAssetUsageTypeServiceData.READ_ONE_ASSETUSAGETYPE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadAssetUsageTypeServiceData.READ_ONE_ASSETUSAGETYPE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadAssetUsageTypeServiceData.READ_ONE_ASSETUSAGETYPE_TS002_TC002.output.message)        
	});



    test(ReadAssetUsageTypeServiceData.READ_ONE_ASSETUSAGETYPE_TS002_TC003.description, async () => {

        const output = await ReadAssetUsageTypeService.readOneAssetUsageType(
            ReadAssetUsageTypeServiceData.READ_ONE_ASSETUSAGETYPE_TS002_TC003.input.databaseConnector,
            ReadAssetUsageTypeServiceData.READ_ONE_ASSETUSAGETYPE_TS002_TC003.input.apiID,
            ReadAssetUsageTypeServiceData.READ_ONE_ASSETUSAGETYPE_TS002_TC003.input.config,
            ReadAssetUsageTypeServiceData.READ_ONE_ASSETUSAGETYPE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadAssetUsageTypeServiceData.READ_ONE_ASSETUSAGETYPE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadAssetUsageTypeServiceData.READ_ONE_ASSETUSAGETYPE_TS002_TC003.output.message)        
	});

});