/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create assetdepreciation service class
**/

/**
 * Importing all required modules here
 */

const createAssetDepreciationServiceData = require("../data/create.assetdepreciation.service.data")
const createAssetDepreciationService = require("../../../../src/services/asset/create.assetdepreciation.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateAssetDepreciationService = new createAssetDepreciationService();
const CreateAssetDepreciationServiceData = new createAssetDepreciationServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetdepreciation.ts.001] | FunctionPath : [src/services/asset/create.assetdepreciation.service.js/createOneAssetDepreciation()]", () => {


	test(CreateAssetDepreciationServiceData.CREATE_ONE_ASSETDEPRECIATION_TS001_TC001.description, async () => {

        const output = await CreateAssetDepreciationService.createOneAssetDepreciation(
            CreateAssetDepreciationServiceData.CREATE_ONE_ASSETDEPRECIATION_TS001_TC001.input.databaseConnector,
            CreateAssetDepreciationServiceData.CREATE_ONE_ASSETDEPRECIATION_TS001_TC001.input.apiID,
            CreateAssetDepreciationServiceData.CREATE_ONE_ASSETDEPRECIATION_TS001_TC001.input.config,
            CreateAssetDepreciationServiceData.CREATE_ONE_ASSETDEPRECIATION_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateAssetDepreciationServiceData.CREATE_ONE_ASSETDEPRECIATION_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateAssetDepreciationServiceData.CREATE_ONE_ASSETDEPRECIATION_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateAssetDepreciationServiceData.CREATE_ONE_ASSETDEPRECIATION_TS001_TC001.output)[2])
	});



    test(CreateAssetDepreciationServiceData.CREATE_ONE_ASSETDEPRECIATION_TS001_TC002.description, async () => {

        const output = await CreateAssetDepreciationService.createOneAssetDepreciation(
            CreateAssetDepreciationServiceData.CREATE_ONE_ASSETDEPRECIATION_TS001_TC002.input.databaseConnector,
            CreateAssetDepreciationServiceData.CREATE_ONE_ASSETDEPRECIATION_TS001_TC002.input.apiID,
            CreateAssetDepreciationServiceData.CREATE_ONE_ASSETDEPRECIATION_TS001_TC002.input.config,
            CreateAssetDepreciationServiceData.CREATE_ONE_ASSETDEPRECIATION_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateAssetDepreciationServiceData.CREATE_ONE_ASSETDEPRECIATION_TS001_TC002.output.data)
        expect(output.status).toBe(CreateAssetDepreciationServiceData.CREATE_ONE_ASSETDEPRECIATION_TS001_TC002.output.status)
        expect(output.message).toBe(CreateAssetDepreciationServiceData.CREATE_ONE_ASSETDEPRECIATION_TS001_TC002.output.message)        
	});



    test(CreateAssetDepreciationServiceData.CREATE_ONE_ASSETDEPRECIATION_TS001_TC003.description, async () => {

        const output = await CreateAssetDepreciationService.createOneAssetDepreciation(
            CreateAssetDepreciationServiceData.CREATE_ONE_ASSETDEPRECIATION_TS001_TC003.input.databaseConnector,
            CreateAssetDepreciationServiceData.CREATE_ONE_ASSETDEPRECIATION_TS001_TC003.input.apiID,
            CreateAssetDepreciationServiceData.CREATE_ONE_ASSETDEPRECIATION_TS001_TC003.input.config,
            CreateAssetDepreciationServiceData.CREATE_ONE_ASSETDEPRECIATION_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateAssetDepreciationServiceData.CREATE_ONE_ASSETDEPRECIATION_TS001_TC003.output.status)
        expect(output.message).toBe(CreateAssetDepreciationServiceData.CREATE_ONE_ASSETDEPRECIATION_TS001_TC003.output.message)        
	});

});