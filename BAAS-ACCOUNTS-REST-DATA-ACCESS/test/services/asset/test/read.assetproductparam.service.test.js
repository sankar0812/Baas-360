/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read AssetProductParam service class
**/

/**
 * Importing all required modules here
 */

const readAssetProductParamServiceData = require("../data/read.assetproductparam.service.data")
const readAssetProductParamService = require("../../../../src/services/asset/read.assetproductparam.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadAssetProductParamService = new readAssetProductParamService();
const ReadAssetProductParamServiceData = new readAssetProductParamServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetproductparam.ts.001] | FunctionPath : [src/services/asset/read.contianer.service.js/readAssetProductParams()]", () => {


	test(ReadAssetProductParamServiceData.READ_ASSETPRODUCTPARAM_TS001_TC001.description, async () => {

        const output = await ReadAssetProductParamService.readAssetProductParams(
            ReadAssetProductParamServiceData.READ_ASSETPRODUCTPARAM_TS001_TC001.input.databaseConnector,
            ReadAssetProductParamServiceData.READ_ASSETPRODUCTPARAM_TS001_TC001.input.apiID,
            ReadAssetProductParamServiceData.READ_ASSETPRODUCTPARAM_TS001_TC001.input.config,
            ReadAssetProductParamServiceData.READ_ASSETPRODUCTPARAM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAssetProductParamServiceData.READ_ASSETPRODUCTPARAM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAssetProductParamServiceData.READ_ASSETPRODUCTPARAM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAssetProductParamServiceData.READ_ASSETPRODUCTPARAM_TS001_TC001.output)[2])
	});



    test(ReadAssetProductParamServiceData.READ_ASSETPRODUCTPARAM_TS001_TC002.description, async () => {

        const output = await ReadAssetProductParamService.readAssetProductParams(
            ReadAssetProductParamServiceData.READ_ASSETPRODUCTPARAM_TS001_TC002.input.databaseConnector,
            ReadAssetProductParamServiceData.READ_ASSETPRODUCTPARAM_TS001_TC002.input.apiID,
            ReadAssetProductParamServiceData.READ_ASSETPRODUCTPARAM_TS001_TC002.input.config,
            ReadAssetProductParamServiceData.READ_ASSETPRODUCTPARAM_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadAssetProductParamServiceData.READ_ASSETPRODUCTPARAM_TS001_TC002.output.data)
        expect(output.status).toBe(ReadAssetProductParamServiceData.READ_ASSETPRODUCTPARAM_TS001_TC002.output.status)
        expect(output.message).toBe(ReadAssetProductParamServiceData.READ_ASSETPRODUCTPARAM_TS001_TC002.output.message)        
	});



    test(ReadAssetProductParamServiceData.READ_ASSETPRODUCTPARAM_TS001_TC003.description, async () => {

        const output = await ReadAssetProductParamService.readAssetProductParams(
            ReadAssetProductParamServiceData.READ_ASSETPRODUCTPARAM_TS001_TC003.input.databaseConnector,
            ReadAssetProductParamServiceData.READ_ASSETPRODUCTPARAM_TS001_TC003.input.apiID,
            ReadAssetProductParamServiceData.READ_ASSETPRODUCTPARAM_TS001_TC003.input.config,
            ReadAssetProductParamServiceData.READ_ASSETPRODUCTPARAM_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadAssetProductParamServiceData.READ_ASSETPRODUCTPARAM_TS001_TC003.output.status)
        expect(output.message).toBe(ReadAssetProductParamServiceData.READ_ASSETPRODUCTPARAM_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.assetproductparam.ts.002] | FunctionPath : [src/services/asset/read.assetproductparam.service.js/readOneAssetProductParam()]", () => {


	test(ReadAssetProductParamServiceData.READ_ONE_ASSETPRODUCTPARAM_TS002_TC001.description, async () => {

        const output = await ReadAssetProductParamService.readOneAssetProductParam(
            ReadAssetProductParamServiceData.READ_ONE_ASSETPRODUCTPARAM_TS002_TC001.input.databaseConnector,
            ReadAssetProductParamServiceData.READ_ONE_ASSETPRODUCTPARAM_TS002_TC001.input.apiID,
            ReadAssetProductParamServiceData.READ_ONE_ASSETPRODUCTPARAM_TS002_TC001.input.config,
            ReadAssetProductParamServiceData.READ_ONE_ASSETPRODUCTPARAM_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAssetProductParamServiceData.READ_ONE_ASSETPRODUCTPARAM_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAssetProductParamServiceData.READ_ONE_ASSETPRODUCTPARAM_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAssetProductParamServiceData.READ_ONE_ASSETPRODUCTPARAM_TS002_TC001.output)[2])
	});



    test(ReadAssetProductParamServiceData.READ_ONE_ASSETPRODUCTPARAM_TS002_TC002.description, async () => {

        const output = await ReadAssetProductParamService.readOneAssetProductParam(
            ReadAssetProductParamServiceData.READ_ONE_ASSETPRODUCTPARAM_TS002_TC002.input.databaseConnector,
            ReadAssetProductParamServiceData.READ_ONE_ASSETPRODUCTPARAM_TS002_TC002.input.apiID,
            ReadAssetProductParamServiceData.READ_ONE_ASSETPRODUCTPARAM_TS002_TC002.input.config,
            ReadAssetProductParamServiceData.READ_ONE_ASSETPRODUCTPARAM_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadAssetProductParamServiceData.READ_ONE_ASSETPRODUCTPARAM_TS002_TC002.output.data)
        expect(output.status).toBe(ReadAssetProductParamServiceData.READ_ONE_ASSETPRODUCTPARAM_TS002_TC002.output.status)
        expect(output.message).toBe(ReadAssetProductParamServiceData.READ_ONE_ASSETPRODUCTPARAM_TS002_TC002.output.message)        
	});



    test(ReadAssetProductParamServiceData.READ_ONE_ASSETPRODUCTPARAM_TS002_TC003.description, async () => {

        const output = await ReadAssetProductParamService.readOneAssetProductParam(
            ReadAssetProductParamServiceData.READ_ONE_ASSETPRODUCTPARAM_TS002_TC003.input.databaseConnector,
            ReadAssetProductParamServiceData.READ_ONE_ASSETPRODUCTPARAM_TS002_TC003.input.apiID,
            ReadAssetProductParamServiceData.READ_ONE_ASSETPRODUCTPARAM_TS002_TC003.input.config,
            ReadAssetProductParamServiceData.READ_ONE_ASSETPRODUCTPARAM_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadAssetProductParamServiceData.READ_ONE_ASSETPRODUCTPARAM_TS002_TC003.output.status)
        expect(output.message).toBe(ReadAssetProductParamServiceData.READ_ONE_ASSETPRODUCTPARAM_TS002_TC003.output.message)        
	});

});