/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create assetusagetype service class
**/

/**
 * Importing all required modules here
 */

const createAssetUsageTypeServiceData = require("../data/create.assetusagetype.service.data")
const createAssetUsageTypeService = require("../../../../src/services/asset/create.assetusagetype.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateAssetUsageTypeService = new createAssetUsageTypeService();
const CreateAssetUsageTypeServiceData = new createAssetUsageTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetusagetype.ts.001] | FunctionPath : [src/services/asset/create.assetusagetype.service.js/createOneAssetUsageType()]", () => {


	test(CreateAssetUsageTypeServiceData.CREATE_ONE_ASSETUSAGETYPE_TS001_TC001.description, async () => {

        const output = await CreateAssetUsageTypeService.createOneAssetUsageType(
            CreateAssetUsageTypeServiceData.CREATE_ONE_ASSETUSAGETYPE_TS001_TC001.input.databaseConnector,
            CreateAssetUsageTypeServiceData.CREATE_ONE_ASSETUSAGETYPE_TS001_TC001.input.apiID,
            CreateAssetUsageTypeServiceData.CREATE_ONE_ASSETUSAGETYPE_TS001_TC001.input.config,
            CreateAssetUsageTypeServiceData.CREATE_ONE_ASSETUSAGETYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateAssetUsageTypeServiceData.CREATE_ONE_ASSETUSAGETYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateAssetUsageTypeServiceData.CREATE_ONE_ASSETUSAGETYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateAssetUsageTypeServiceData.CREATE_ONE_ASSETUSAGETYPE_TS001_TC001.output)[2])
	});



    test(CreateAssetUsageTypeServiceData.CREATE_ONE_ASSETUSAGETYPE_TS001_TC002.description, async () => {

        const output = await CreateAssetUsageTypeService.createOneAssetUsageType(
            CreateAssetUsageTypeServiceData.CREATE_ONE_ASSETUSAGETYPE_TS001_TC002.input.databaseConnector,
            CreateAssetUsageTypeServiceData.CREATE_ONE_ASSETUSAGETYPE_TS001_TC002.input.apiID,
            CreateAssetUsageTypeServiceData.CREATE_ONE_ASSETUSAGETYPE_TS001_TC002.input.config,
            CreateAssetUsageTypeServiceData.CREATE_ONE_ASSETUSAGETYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateAssetUsageTypeServiceData.CREATE_ONE_ASSETUSAGETYPE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateAssetUsageTypeServiceData.CREATE_ONE_ASSETUSAGETYPE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateAssetUsageTypeServiceData.CREATE_ONE_ASSETUSAGETYPE_TS001_TC002.output.message)        
	});



    test(CreateAssetUsageTypeServiceData.CREATE_ONE_ASSETUSAGETYPE_TS001_TC003.description, async () => {

        const output = await CreateAssetUsageTypeService.createOneAssetUsageType(
            CreateAssetUsageTypeServiceData.CREATE_ONE_ASSETUSAGETYPE_TS001_TC003.input.databaseConnector,
            CreateAssetUsageTypeServiceData.CREATE_ONE_ASSETUSAGETYPE_TS001_TC003.input.apiID,
            CreateAssetUsageTypeServiceData.CREATE_ONE_ASSETUSAGETYPE_TS001_TC003.input.config,
            CreateAssetUsageTypeServiceData.CREATE_ONE_ASSETUSAGETYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateAssetUsageTypeServiceData.CREATE_ONE_ASSETUSAGETYPE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateAssetUsageTypeServiceData.CREATE_ONE_ASSETUSAGETYPE_TS001_TC003.output.message)        
	});

});