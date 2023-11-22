/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create storetype service class
**/

/**
 * Importing all required modules here
 */

const createStoreTypeServiceData = require("../data/create.storetype.service.data")
const createStoreTypeService = require("../../../../src/services/store/create.storetype.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateStoreTypeService = new createStoreTypeService();
const CreateStoreTypeServiceData = new createStoreTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.storetype.ts.001] | FunctionPath : [src/services/store/create.storetype.service.js/createOneStoreType()]", () => {


	test(CreateStoreTypeServiceData.CREATE_ONE_STORETYPE_TS001_TC001.description, async () => {

        const output = await CreateStoreTypeService.createOneStoreType(
            CreateStoreTypeServiceData.CREATE_ONE_STORETYPE_TS001_TC001.input.databaseConnector,
            CreateStoreTypeServiceData.CREATE_ONE_STORETYPE_TS001_TC001.input.apiID,
            CreateStoreTypeServiceData.CREATE_ONE_STORETYPE_TS001_TC001.input.config,
            CreateStoreTypeServiceData.CREATE_ONE_STORETYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateStoreTypeServiceData.CREATE_ONE_STORETYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateStoreTypeServiceData.CREATE_ONE_STORETYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateStoreTypeServiceData.CREATE_ONE_STORETYPE_TS001_TC001.output)[2])
	});



    test(CreateStoreTypeServiceData.CREATE_ONE_STORETYPE_TS001_TC002.description, async () => {

        const output = await CreateStoreTypeService.createOneStoreType(
            CreateStoreTypeServiceData.CREATE_ONE_STORETYPE_TS001_TC002.input.databaseConnector,
            CreateStoreTypeServiceData.CREATE_ONE_STORETYPE_TS001_TC002.input.apiID,
            CreateStoreTypeServiceData.CREATE_ONE_STORETYPE_TS001_TC002.input.config,
            CreateStoreTypeServiceData.CREATE_ONE_STORETYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateStoreTypeServiceData.CREATE_ONE_STORETYPE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateStoreTypeServiceData.CREATE_ONE_STORETYPE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateStoreTypeServiceData.CREATE_ONE_STORETYPE_TS001_TC002.output.message)        
	});



    test(CreateStoreTypeServiceData.CREATE_ONE_STORETYPE_TS001_TC003.description, async () => {

        const output = await CreateStoreTypeService.createOneStoreType(
            CreateStoreTypeServiceData.CREATE_ONE_STORETYPE_TS001_TC003.input.databaseConnector,
            CreateStoreTypeServiceData.CREATE_ONE_STORETYPE_TS001_TC003.input.apiID,
            CreateStoreTypeServiceData.CREATE_ONE_STORETYPE_TS001_TC003.input.config,
            CreateStoreTypeServiceData.CREATE_ONE_STORETYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateStoreTypeServiceData.CREATE_ONE_STORETYPE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateStoreTypeServiceData.CREATE_ONE_STORETYPE_TS001_TC003.output.message)        
	});

});