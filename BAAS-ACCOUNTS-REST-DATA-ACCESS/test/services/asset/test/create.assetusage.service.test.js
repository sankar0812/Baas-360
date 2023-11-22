/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create assetusage service class
**/

/**
 * Importing all required modules here
 */

const createAssetUsageServiceData = require("../data/create.assetusage.service.data")
const createAssetUsageService = require("../../../../src/services/asset/create.assetusage.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateAssetUsageService = new createAssetUsageService();
const CreateAssetUsageServiceData = new createAssetUsageServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetusage.ts.001] | FunctionPath : [src/services/asset/create.assetusage.service.js/createOneAssetUsage()]", () => {


	test(CreateAssetUsageServiceData.CREATE_ONE_ASSETUSAGE_TS001_TC001.description, async () => {

        const output = await CreateAssetUsageService.createOneAssetUsage(
            CreateAssetUsageServiceData.CREATE_ONE_ASSETUSAGE_TS001_TC001.input.databaseConnector,
            CreateAssetUsageServiceData.CREATE_ONE_ASSETUSAGE_TS001_TC001.input.apiID,
            CreateAssetUsageServiceData.CREATE_ONE_ASSETUSAGE_TS001_TC001.input.config,
            CreateAssetUsageServiceData.CREATE_ONE_ASSETUSAGE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateAssetUsageServiceData.CREATE_ONE_ASSETUSAGE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateAssetUsageServiceData.CREATE_ONE_ASSETUSAGE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateAssetUsageServiceData.CREATE_ONE_ASSETUSAGE_TS001_TC001.output)[2])
	});



    test(CreateAssetUsageServiceData.CREATE_ONE_ASSETUSAGE_TS001_TC002.description, async () => {

        const output = await CreateAssetUsageService.createOneAssetUsage(
            CreateAssetUsageServiceData.CREATE_ONE_ASSETUSAGE_TS001_TC002.input.databaseConnector,
            CreateAssetUsageServiceData.CREATE_ONE_ASSETUSAGE_TS001_TC002.input.apiID,
            CreateAssetUsageServiceData.CREATE_ONE_ASSETUSAGE_TS001_TC002.input.config,
            CreateAssetUsageServiceData.CREATE_ONE_ASSETUSAGE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateAssetUsageServiceData.CREATE_ONE_ASSETUSAGE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateAssetUsageServiceData.CREATE_ONE_ASSETUSAGE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateAssetUsageServiceData.CREATE_ONE_ASSETUSAGE_TS001_TC002.output.message)        
	});



    test(CreateAssetUsageServiceData.CREATE_ONE_ASSETUSAGE_TS001_TC003.description, async () => {

        const output = await CreateAssetUsageService.createOneAssetUsage(
            CreateAssetUsageServiceData.CREATE_ONE_ASSETUSAGE_TS001_TC003.input.databaseConnector,
            CreateAssetUsageServiceData.CREATE_ONE_ASSETUSAGE_TS001_TC003.input.apiID,
            CreateAssetUsageServiceData.CREATE_ONE_ASSETUSAGE_TS001_TC003.input.config,
            CreateAssetUsageServiceData.CREATE_ONE_ASSETUSAGE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateAssetUsageServiceData.CREATE_ONE_ASSETUSAGE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateAssetUsageServiceData.CREATE_ONE_ASSETUSAGE_TS001_TC003.output.message)        
	});

});