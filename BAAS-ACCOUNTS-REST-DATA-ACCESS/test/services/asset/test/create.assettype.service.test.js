/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create assettype service class
**/

/**
 * Importing all required modules here
 */

const createAssetTypeServiceData = require("../data/create.assettype.service.data")
const createAssetTypeService = require("../../../../src/services/asset/create.assettype.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateAssetTypeService = new createAssetTypeService();
const CreateAssetTypeServiceData = new createAssetTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assettype.ts.001] | FunctionPath : [src/services/asset/create.assettype.service.js/createOneAssetType()]", () => {


	test(CreateAssetTypeServiceData.CREATE_ONE_ASSETTYPE_TS001_TC001.description, async () => {

        const output = await CreateAssetTypeService.createOneAssetType(
            CreateAssetTypeServiceData.CREATE_ONE_ASSETTYPE_TS001_TC001.input.databaseConnector,
            CreateAssetTypeServiceData.CREATE_ONE_ASSETTYPE_TS001_TC001.input.apiID,
            CreateAssetTypeServiceData.CREATE_ONE_ASSETTYPE_TS001_TC001.input.config,
            CreateAssetTypeServiceData.CREATE_ONE_ASSETTYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateAssetTypeServiceData.CREATE_ONE_ASSETTYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateAssetTypeServiceData.CREATE_ONE_ASSETTYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateAssetTypeServiceData.CREATE_ONE_ASSETTYPE_TS001_TC001.output)[2])
	});



    test(CreateAssetTypeServiceData.CREATE_ONE_ASSETTYPE_TS001_TC002.description, async () => {

        const output = await CreateAssetTypeService.createOneAssetType(
            CreateAssetTypeServiceData.CREATE_ONE_ASSETTYPE_TS001_TC002.input.databaseConnector,
            CreateAssetTypeServiceData.CREATE_ONE_ASSETTYPE_TS001_TC002.input.apiID,
            CreateAssetTypeServiceData.CREATE_ONE_ASSETTYPE_TS001_TC002.input.config,
            CreateAssetTypeServiceData.CREATE_ONE_ASSETTYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateAssetTypeServiceData.CREATE_ONE_ASSETTYPE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateAssetTypeServiceData.CREATE_ONE_ASSETTYPE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateAssetTypeServiceData.CREATE_ONE_ASSETTYPE_TS001_TC002.output.message)        
	});



    test(CreateAssetTypeServiceData.CREATE_ONE_ASSETTYPE_TS001_TC003.description, async () => {

        const output = await CreateAssetTypeService.createOneAssetType(
            CreateAssetTypeServiceData.CREATE_ONE_ASSETTYPE_TS001_TC003.input.databaseConnector,
            CreateAssetTypeServiceData.CREATE_ONE_ASSETTYPE_TS001_TC003.input.apiID,
            CreateAssetTypeServiceData.CREATE_ONE_ASSETTYPE_TS001_TC003.input.config,
            CreateAssetTypeServiceData.CREATE_ONE_ASSETTYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateAssetTypeServiceData.CREATE_ONE_ASSETTYPE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateAssetTypeServiceData.CREATE_ONE_ASSETTYPE_TS001_TC003.output.message)        
	});

});