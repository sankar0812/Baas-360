/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create assetclass service class
**/

/**
 * Importing all required modules here
 */

const createAssetClassServiceData = require("../data/create.assetclass.service.data")
const createAssetClassService = require("../../../../src/services/asset/create.assetclass.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateAssetClassService = new createAssetClassService();
const CreateAssetClassServiceData = new createAssetClassServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetclass.ts.001] | FunctionPath : [src/services/asset/create.assetclass.service.js/createOneAssetClass()]", () => {


	test(CreateAssetClassServiceData.CREATE_ONE_ASSETCLASS_TS001_TC001.description, async () => {

        const output = await CreateAssetClassService.createOneAssetClass(
            CreateAssetClassServiceData.CREATE_ONE_ASSETCLASS_TS001_TC001.input.databaseConnector,
            CreateAssetClassServiceData.CREATE_ONE_ASSETCLASS_TS001_TC001.input.apiID,
            CreateAssetClassServiceData.CREATE_ONE_ASSETCLASS_TS001_TC001.input.config,
            CreateAssetClassServiceData.CREATE_ONE_ASSETCLASS_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateAssetClassServiceData.CREATE_ONE_ASSETCLASS_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateAssetClassServiceData.CREATE_ONE_ASSETCLASS_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateAssetClassServiceData.CREATE_ONE_ASSETCLASS_TS001_TC001.output)[2])
	});



    test(CreateAssetClassServiceData.CREATE_ONE_ASSETCLASS_TS001_TC002.description, async () => {

        const output = await CreateAssetClassService.createOneAssetClass(
            CreateAssetClassServiceData.CREATE_ONE_ASSETCLASS_TS001_TC002.input.databaseConnector,
            CreateAssetClassServiceData.CREATE_ONE_ASSETCLASS_TS001_TC002.input.apiID,
            CreateAssetClassServiceData.CREATE_ONE_ASSETCLASS_TS001_TC002.input.config,
            CreateAssetClassServiceData.CREATE_ONE_ASSETCLASS_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateAssetClassServiceData.CREATE_ONE_ASSETCLASS_TS001_TC002.output.data)
        expect(output.status).toBe(CreateAssetClassServiceData.CREATE_ONE_ASSETCLASS_TS001_TC002.output.status)
        expect(output.message).toBe(CreateAssetClassServiceData.CREATE_ONE_ASSETCLASS_TS001_TC002.output.message)        
	});



    test(CreateAssetClassServiceData.CREATE_ONE_ASSETCLASS_TS001_TC003.description, async () => {

        const output = await CreateAssetClassService.createOneAssetClass(
            CreateAssetClassServiceData.CREATE_ONE_ASSETCLASS_TS001_TC003.input.databaseConnector,
            CreateAssetClassServiceData.CREATE_ONE_ASSETCLASS_TS001_TC003.input.apiID,
            CreateAssetClassServiceData.CREATE_ONE_ASSETCLASS_TS001_TC003.input.config,
            CreateAssetClassServiceData.CREATE_ONE_ASSETCLASS_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateAssetClassServiceData.CREATE_ONE_ASSETCLASS_TS001_TC003.output.status)
        expect(output.message).toBe(CreateAssetClassServiceData.CREATE_ONE_ASSETCLASS_TS001_TC003.output.message)        
	});

});