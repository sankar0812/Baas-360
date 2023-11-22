/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read StoreType service class
**/

/**
 * Importing all required modules here
 */

const readStoreTypeServiceData = require("../data/read.storetype.service.data")
const readStoreTypeService = require("../../../../src/services/store/read.storetype.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadStoreTypeService = new readStoreTypeService();
const ReadStoreTypeServiceData = new readStoreTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.storetype.ts.001] | FunctionPath : [src/services/store/read.contianer.service.js/readStoreTypes()]", () => {


	test(ReadStoreTypeServiceData.READ_STORETYPE_TS001_TC001.description, async () => {

        const output = await ReadStoreTypeService.readStoreTypes(
            ReadStoreTypeServiceData.READ_STORETYPE_TS001_TC001.input.databaseConnector,
            ReadStoreTypeServiceData.READ_STORETYPE_TS001_TC001.input.apiID,
            ReadStoreTypeServiceData.READ_STORETYPE_TS001_TC001.input.config,
            ReadStoreTypeServiceData.READ_STORETYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadStoreTypeServiceData.READ_STORETYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadStoreTypeServiceData.READ_STORETYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadStoreTypeServiceData.READ_STORETYPE_TS001_TC001.output)[2])
	});



    test(ReadStoreTypeServiceData.READ_STORETYPE_TS001_TC002.description, async () => {

        const output = await ReadStoreTypeService.readStoreTypes(
            ReadStoreTypeServiceData.READ_STORETYPE_TS001_TC002.input.databaseConnector,
            ReadStoreTypeServiceData.READ_STORETYPE_TS001_TC002.input.apiID,
            ReadStoreTypeServiceData.READ_STORETYPE_TS001_TC002.input.config,
            ReadStoreTypeServiceData.READ_STORETYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadStoreTypeServiceData.READ_STORETYPE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadStoreTypeServiceData.READ_STORETYPE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadStoreTypeServiceData.READ_STORETYPE_TS001_TC002.output.message)        
	});



    test(ReadStoreTypeServiceData.READ_STORETYPE_TS001_TC003.description, async () => {

        const output = await ReadStoreTypeService.readStoreTypes(
            ReadStoreTypeServiceData.READ_STORETYPE_TS001_TC003.input.databaseConnector,
            ReadStoreTypeServiceData.READ_STORETYPE_TS001_TC003.input.apiID,
            ReadStoreTypeServiceData.READ_STORETYPE_TS001_TC003.input.config,
            ReadStoreTypeServiceData.READ_STORETYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadStoreTypeServiceData.READ_STORETYPE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadStoreTypeServiceData.READ_STORETYPE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.storetype.ts.002] | FunctionPath : [src/services/store/read.storetype.service.js/readOneStoreType()]", () => {


	test(ReadStoreTypeServiceData.READ_ONE_STORETYPE_TS002_TC001.description, async () => {

        const output = await ReadStoreTypeService.readOneStoreType(
            ReadStoreTypeServiceData.READ_ONE_STORETYPE_TS002_TC001.input.databaseConnector,
            ReadStoreTypeServiceData.READ_ONE_STORETYPE_TS002_TC001.input.apiID,
            ReadStoreTypeServiceData.READ_ONE_STORETYPE_TS002_TC001.input.config,
            ReadStoreTypeServiceData.READ_ONE_STORETYPE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadStoreTypeServiceData.READ_ONE_STORETYPE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadStoreTypeServiceData.READ_ONE_STORETYPE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadStoreTypeServiceData.READ_ONE_STORETYPE_TS002_TC001.output)[2])
	});



    test(ReadStoreTypeServiceData.READ_ONE_STORETYPE_TS002_TC002.description, async () => {

        const output = await ReadStoreTypeService.readOneStoreType(
            ReadStoreTypeServiceData.READ_ONE_STORETYPE_TS002_TC002.input.databaseConnector,
            ReadStoreTypeServiceData.READ_ONE_STORETYPE_TS002_TC002.input.apiID,
            ReadStoreTypeServiceData.READ_ONE_STORETYPE_TS002_TC002.input.config,
            ReadStoreTypeServiceData.READ_ONE_STORETYPE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadStoreTypeServiceData.READ_ONE_STORETYPE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadStoreTypeServiceData.READ_ONE_STORETYPE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadStoreTypeServiceData.READ_ONE_STORETYPE_TS002_TC002.output.message)        
	});



    test(ReadStoreTypeServiceData.READ_ONE_STORETYPE_TS002_TC003.description, async () => {

        const output = await ReadStoreTypeService.readOneStoreType(
            ReadStoreTypeServiceData.READ_ONE_STORETYPE_TS002_TC003.input.databaseConnector,
            ReadStoreTypeServiceData.READ_ONE_STORETYPE_TS002_TC003.input.apiID,
            ReadStoreTypeServiceData.READ_ONE_STORETYPE_TS002_TC003.input.config,
            ReadStoreTypeServiceData.READ_ONE_STORETYPE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadStoreTypeServiceData.READ_ONE_STORETYPE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadStoreTypeServiceData.READ_ONE_STORETYPE_TS002_TC003.output.message)        
	});

});