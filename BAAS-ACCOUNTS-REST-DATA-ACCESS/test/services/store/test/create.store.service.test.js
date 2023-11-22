/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create store service class
**/

/**
 * Importing all required modules here
 */

const createStoreServiceData = require("../data/create.store.service.data")
const createStoreService = require("../../../../src/services/store/create.store.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateStoreService = new createStoreService();
const CreateStoreServiceData = new createStoreServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.store.ts.001] | FunctionPath : [src/services/store/create.store.service.js/createOneStore()]", () => {


	test(CreateStoreServiceData.CREATE_ONE_STORE_TS001_TC001.description, async () => {

        const output = await CreateStoreService.createOneStore(
            CreateStoreServiceData.CREATE_ONE_STORE_TS001_TC001.input.databaseConnector,
            CreateStoreServiceData.CREATE_ONE_STORE_TS001_TC001.input.apiID,
            CreateStoreServiceData.CREATE_ONE_STORE_TS001_TC001.input.config,
            CreateStoreServiceData.CREATE_ONE_STORE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateStoreServiceData.CREATE_ONE_STORE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateStoreServiceData.CREATE_ONE_STORE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateStoreServiceData.CREATE_ONE_STORE_TS001_TC001.output)[2])
	});



    test(CreateStoreServiceData.CREATE_ONE_STORE_TS001_TC002.description, async () => {

        const output = await CreateStoreService.createOneStore(
            CreateStoreServiceData.CREATE_ONE_STORE_TS001_TC002.input.databaseConnector,
            CreateStoreServiceData.CREATE_ONE_STORE_TS001_TC002.input.apiID,
            CreateStoreServiceData.CREATE_ONE_STORE_TS001_TC002.input.config,
            CreateStoreServiceData.CREATE_ONE_STORE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateStoreServiceData.CREATE_ONE_STORE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateStoreServiceData.CREATE_ONE_STORE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateStoreServiceData.CREATE_ONE_STORE_TS001_TC002.output.message)        
	});



    test(CreateStoreServiceData.CREATE_ONE_STORE_TS001_TC003.description, async () => {

        const output = await CreateStoreService.createOneStore(
            CreateStoreServiceData.CREATE_ONE_STORE_TS001_TC003.input.databaseConnector,
            CreateStoreServiceData.CREATE_ONE_STORE_TS001_TC003.input.apiID,
            CreateStoreServiceData.CREATE_ONE_STORE_TS001_TC003.input.config,
            CreateStoreServiceData.CREATE_ONE_STORE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateStoreServiceData.CREATE_ONE_STORE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateStoreServiceData.CREATE_ONE_STORE_TS001_TC003.output.message)        
	});

});