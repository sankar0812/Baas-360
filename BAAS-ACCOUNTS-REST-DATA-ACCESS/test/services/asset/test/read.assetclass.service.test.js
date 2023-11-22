/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read AssetClass service class
**/

/**
 * Importing all required modules here
 */

const readAssetClassServiceData = require("../data/read.assetclass.service.data")
const readAssetClassService = require("../../../../src/services/asset/read.assetclass.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadAssetClassService = new readAssetClassService();
const ReadAssetClassServiceData = new readAssetClassServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetclass.ts.001] | FunctionPath : [src/services/asset/read.contianer.service.js/readAssetClasss()]", () => {


	test(ReadAssetClassServiceData.READ_ASSETCLASS_TS001_TC001.description, async () => {

        const output = await ReadAssetClassService.readAssetClasses(
            ReadAssetClassServiceData.READ_ASSETCLASS_TS001_TC001.input.databaseConnector,
            ReadAssetClassServiceData.READ_ASSETCLASS_TS001_TC001.input.apiID,
            ReadAssetClassServiceData.READ_ASSETCLASS_TS001_TC001.input.config,
            ReadAssetClassServiceData.READ_ASSETCLASS_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAssetClassServiceData.READ_ASSETCLASS_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAssetClassServiceData.READ_ASSETCLASS_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAssetClassServiceData.READ_ASSETCLASS_TS001_TC001.output)[2])
	});



    test(ReadAssetClassServiceData.READ_ASSETCLASS_TS001_TC002.description, async () => {

        const output = await ReadAssetClassService.readAssetClasses(
            ReadAssetClassServiceData.READ_ASSETCLASS_TS001_TC002.input.databaseConnector,
            ReadAssetClassServiceData.READ_ASSETCLASS_TS001_TC002.input.apiID,
            ReadAssetClassServiceData.READ_ASSETCLASS_TS001_TC002.input.config,
            ReadAssetClassServiceData.READ_ASSETCLASS_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadAssetClassServiceData.READ_ASSETCLASS_TS001_TC002.output.data)
        expect(output.status).toBe(ReadAssetClassServiceData.READ_ASSETCLASS_TS001_TC002.output.status)
        expect(output.message).toBe(ReadAssetClassServiceData.READ_ASSETCLASS_TS001_TC002.output.message)        
	});



    test(ReadAssetClassServiceData.READ_ASSETCLASS_TS001_TC003.description, async () => {

        const output = await ReadAssetClassService.readAssetClasses(
            ReadAssetClassServiceData.READ_ASSETCLASS_TS001_TC003.input.databaseConnector,
            ReadAssetClassServiceData.READ_ASSETCLASS_TS001_TC003.input.apiID,
            ReadAssetClassServiceData.READ_ASSETCLASS_TS001_TC003.input.config,
            ReadAssetClassServiceData.READ_ASSETCLASS_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadAssetClassServiceData.READ_ASSETCLASS_TS001_TC003.output.status)
        expect(output.message).toBe(ReadAssetClassServiceData.READ_ASSETCLASS_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.assetclass.ts.002] | FunctionPath : [src/services/asset/read.assetclass.service.js/readOneAssetClass()]", () => {


	test(ReadAssetClassServiceData.READ_ONE_ASSETCLASS_TS002_TC001.description, async () => {

        const output = await ReadAssetClassService.readOneAssetClass(
            ReadAssetClassServiceData.READ_ONE_ASSETCLASS_TS002_TC001.input.databaseConnector,
            ReadAssetClassServiceData.READ_ONE_ASSETCLASS_TS002_TC001.input.apiID,
            ReadAssetClassServiceData.READ_ONE_ASSETCLASS_TS002_TC001.input.config,
            ReadAssetClassServiceData.READ_ONE_ASSETCLASS_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAssetClassServiceData.READ_ONE_ASSETCLASS_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAssetClassServiceData.READ_ONE_ASSETCLASS_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAssetClassServiceData.READ_ONE_ASSETCLASS_TS002_TC001.output)[2])
	});



    test(ReadAssetClassServiceData.READ_ONE_ASSETCLASS_TS002_TC002.description, async () => {

        const output = await ReadAssetClassService.readOneAssetClass(
            ReadAssetClassServiceData.READ_ONE_ASSETCLASS_TS002_TC002.input.databaseConnector,
            ReadAssetClassServiceData.READ_ONE_ASSETCLASS_TS002_TC002.input.apiID,
            ReadAssetClassServiceData.READ_ONE_ASSETCLASS_TS002_TC002.input.config,
            ReadAssetClassServiceData.READ_ONE_ASSETCLASS_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadAssetClassServiceData.READ_ONE_ASSETCLASS_TS002_TC002.output.data)
        expect(output.status).toBe(ReadAssetClassServiceData.READ_ONE_ASSETCLASS_TS002_TC002.output.status)
        expect(output.message).toBe(ReadAssetClassServiceData.READ_ONE_ASSETCLASS_TS002_TC002.output.message)        
	});



    test(ReadAssetClassServiceData.READ_ONE_ASSETCLASS_TS002_TC003.description, async () => {

        const output = await ReadAssetClassService.readOneAssetClass(
            ReadAssetClassServiceData.READ_ONE_ASSETCLASS_TS002_TC003.input.databaseConnector,
            ReadAssetClassServiceData.READ_ONE_ASSETCLASS_TS002_TC003.input.apiID,
            ReadAssetClassServiceData.READ_ONE_ASSETCLASS_TS002_TC003.input.config,
            ReadAssetClassServiceData.READ_ONE_ASSETCLASS_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadAssetClassServiceData.READ_ONE_ASSETCLASS_TS002_TC003.output.status)
        expect(output.message).toBe(ReadAssetClassServiceData.READ_ONE_ASSETCLASS_TS002_TC003.output.message)        
	});

});