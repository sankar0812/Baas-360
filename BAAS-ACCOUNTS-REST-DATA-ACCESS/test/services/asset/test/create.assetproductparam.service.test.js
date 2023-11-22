/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create assetproductparam service class
**/

/**
 * Importing all required modules here
 */

const createAssetProductParamServiceData = require("../data/create.assetproductparam.service.data")
const createAssetProductParamService = require("../../../../src/services/asset/create.assetproductparam.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateAssetProductParamService = new createAssetProductParamService();
const CreateAssetProductParamServiceData = new createAssetProductParamServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetproductparam.ts.001] | FunctionPath : [src/services/asset/create.assetproductparam.service.js/createOneAssetProductParam()]", () => {


	test(CreateAssetProductParamServiceData.CREATE_ONE_ASSETPRODUCTPARAM_TS001_TC001.description, async () => {

        const output = await CreateAssetProductParamService.createOneAssetProductParam(
            CreateAssetProductParamServiceData.CREATE_ONE_ASSETPRODUCTPARAM_TS001_TC001.input.databaseConnector,
            CreateAssetProductParamServiceData.CREATE_ONE_ASSETPRODUCTPARAM_TS001_TC001.input.apiID,
            CreateAssetProductParamServiceData.CREATE_ONE_ASSETPRODUCTPARAM_TS001_TC001.input.config,
            CreateAssetProductParamServiceData.CREATE_ONE_ASSETPRODUCTPARAM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateAssetProductParamServiceData.CREATE_ONE_ASSETPRODUCTPARAM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateAssetProductParamServiceData.CREATE_ONE_ASSETPRODUCTPARAM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateAssetProductParamServiceData.CREATE_ONE_ASSETPRODUCTPARAM_TS001_TC001.output)[2])
	});



    test(CreateAssetProductParamServiceData.CREATE_ONE_ASSETPRODUCTPARAM_TS001_TC002.description, async () => {

        const output = await CreateAssetProductParamService.createOneAssetProductParam(
            CreateAssetProductParamServiceData.CREATE_ONE_ASSETPRODUCTPARAM_TS001_TC002.input.databaseConnector,
            CreateAssetProductParamServiceData.CREATE_ONE_ASSETPRODUCTPARAM_TS001_TC002.input.apiID,
            CreateAssetProductParamServiceData.CREATE_ONE_ASSETPRODUCTPARAM_TS001_TC002.input.config,
            CreateAssetProductParamServiceData.CREATE_ONE_ASSETPRODUCTPARAM_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateAssetProductParamServiceData.CREATE_ONE_ASSETPRODUCTPARAM_TS001_TC002.output.data)
        expect(output.status).toBe(CreateAssetProductParamServiceData.CREATE_ONE_ASSETPRODUCTPARAM_TS001_TC002.output.status)
        expect(output.message).toBe(CreateAssetProductParamServiceData.CREATE_ONE_ASSETPRODUCTPARAM_TS001_TC002.output.message)        
	});



    test(CreateAssetProductParamServiceData.CREATE_ONE_ASSETPRODUCTPARAM_TS001_TC003.description, async () => {

        const output = await CreateAssetProductParamService.createOneAssetProductParam(
            CreateAssetProductParamServiceData.CREATE_ONE_ASSETPRODUCTPARAM_TS001_TC003.input.databaseConnector,
            CreateAssetProductParamServiceData.CREATE_ONE_ASSETPRODUCTPARAM_TS001_TC003.input.apiID,
            CreateAssetProductParamServiceData.CREATE_ONE_ASSETPRODUCTPARAM_TS001_TC003.input.config,
            CreateAssetProductParamServiceData.CREATE_ONE_ASSETPRODUCTPARAM_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateAssetProductParamServiceData.CREATE_ONE_ASSETPRODUCTPARAM_TS001_TC003.output.status)
        expect(output.message).toBe(CreateAssetProductParamServiceData.CREATE_ONE_ASSETPRODUCTPARAM_TS001_TC003.output.message)        
	});

});