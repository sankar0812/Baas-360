/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read AssetType service class
**/

/**
 * Importing all required modules here
 */

const readAssetTypeServiceData = require("../data/read.assettype.service.data")
const readAssetTypeService = require("../../../../src/services/asset/read.assettype.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadAssetTypeService = new readAssetTypeService();
const ReadAssetTypeServiceData = new readAssetTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assettype.ts.001] | FunctionPath : [src/services/asset/read.contianer.service.js/readAssetTypes()]", () => {


	test(ReadAssetTypeServiceData.READ_ASSETTYPE_TS001_TC001.description, async () => {

        const output = await ReadAssetTypeService.readAssetTypes(
            ReadAssetTypeServiceData.READ_ASSETTYPE_TS001_TC001.input.databaseConnector,
            ReadAssetTypeServiceData.READ_ASSETTYPE_TS001_TC001.input.apiID,
            ReadAssetTypeServiceData.READ_ASSETTYPE_TS001_TC001.input.config,
            ReadAssetTypeServiceData.READ_ASSETTYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAssetTypeServiceData.READ_ASSETTYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAssetTypeServiceData.READ_ASSETTYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAssetTypeServiceData.READ_ASSETTYPE_TS001_TC001.output)[2])
	});



    test(ReadAssetTypeServiceData.READ_ASSETTYPE_TS001_TC002.description, async () => {

        const output = await ReadAssetTypeService.readAssetTypes(
            ReadAssetTypeServiceData.READ_ASSETTYPE_TS001_TC002.input.databaseConnector,
            ReadAssetTypeServiceData.READ_ASSETTYPE_TS001_TC002.input.apiID,
            ReadAssetTypeServiceData.READ_ASSETTYPE_TS001_TC002.input.config,
            ReadAssetTypeServiceData.READ_ASSETTYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadAssetTypeServiceData.READ_ASSETTYPE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadAssetTypeServiceData.READ_ASSETTYPE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadAssetTypeServiceData.READ_ASSETTYPE_TS001_TC002.output.message)        
	});



    test(ReadAssetTypeServiceData.READ_ASSETTYPE_TS001_TC003.description, async () => {

        const output = await ReadAssetTypeService.readAssetTypes(
            ReadAssetTypeServiceData.READ_ASSETTYPE_TS001_TC003.input.databaseConnector,
            ReadAssetTypeServiceData.READ_ASSETTYPE_TS001_TC003.input.apiID,
            ReadAssetTypeServiceData.READ_ASSETTYPE_TS001_TC003.input.config,
            ReadAssetTypeServiceData.READ_ASSETTYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadAssetTypeServiceData.READ_ASSETTYPE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadAssetTypeServiceData.READ_ASSETTYPE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.assettype.ts.002] | FunctionPath : [src/services/asset/read.assettype.service.js/readOneAssetType()]", () => {


	test(ReadAssetTypeServiceData.READ_ONE_ASSETTYPE_TS002_TC001.description, async () => {

        const output = await ReadAssetTypeService.readOneAssetType(
            ReadAssetTypeServiceData.READ_ONE_ASSETTYPE_TS002_TC001.input.databaseConnector,
            ReadAssetTypeServiceData.READ_ONE_ASSETTYPE_TS002_TC001.input.apiID,
            ReadAssetTypeServiceData.READ_ONE_ASSETTYPE_TS002_TC001.input.config,
            ReadAssetTypeServiceData.READ_ONE_ASSETTYPE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAssetTypeServiceData.READ_ONE_ASSETTYPE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAssetTypeServiceData.READ_ONE_ASSETTYPE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAssetTypeServiceData.READ_ONE_ASSETTYPE_TS002_TC001.output)[2])
	});



    test(ReadAssetTypeServiceData.READ_ONE_ASSETTYPE_TS002_TC002.description, async () => {

        const output = await ReadAssetTypeService.readOneAssetType(
            ReadAssetTypeServiceData.READ_ONE_ASSETTYPE_TS002_TC002.input.databaseConnector,
            ReadAssetTypeServiceData.READ_ONE_ASSETTYPE_TS002_TC002.input.apiID,
            ReadAssetTypeServiceData.READ_ONE_ASSETTYPE_TS002_TC002.input.config,
            ReadAssetTypeServiceData.READ_ONE_ASSETTYPE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadAssetTypeServiceData.READ_ONE_ASSETTYPE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadAssetTypeServiceData.READ_ONE_ASSETTYPE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadAssetTypeServiceData.READ_ONE_ASSETTYPE_TS002_TC002.output.message)        
	});



    test(ReadAssetTypeServiceData.READ_ONE_ASSETTYPE_TS002_TC003.description, async () => {

        const output = await ReadAssetTypeService.readOneAssetType(
            ReadAssetTypeServiceData.READ_ONE_ASSETTYPE_TS002_TC003.input.databaseConnector,
            ReadAssetTypeServiceData.READ_ONE_ASSETTYPE_TS002_TC003.input.apiID,
            ReadAssetTypeServiceData.READ_ONE_ASSETTYPE_TS002_TC003.input.config,
            ReadAssetTypeServiceData.READ_ONE_ASSETTYPE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadAssetTypeServiceData.READ_ONE_ASSETTYPE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadAssetTypeServiceData.READ_ONE_ASSETTYPE_TS002_TC003.output.message)        
	});

});