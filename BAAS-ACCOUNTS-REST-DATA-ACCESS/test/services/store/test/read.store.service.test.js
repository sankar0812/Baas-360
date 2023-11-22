/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Store service class
**/

/**
 * Importing all required modules here
 */

const readStoreServiceData = require("../data/read.store.service.data")
const readStoreService = require("../../../../src/services/store/read.store.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadStoreService = new readStoreService();
const ReadStoreServiceData = new readStoreServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.store.ts.001] | FunctionPath : [src/services/store/read.contianer.service.js/readStores()]", () => {


	test(ReadStoreServiceData.READ_STORE_TS001_TC001.description, async () => {

        const output = await ReadStoreService.readStores(
            ReadStoreServiceData.READ_STORE_TS001_TC001.input.databaseConnector,
            ReadStoreServiceData.READ_STORE_TS001_TC001.input.apiID,
            ReadStoreServiceData.READ_STORE_TS001_TC001.input.config,
            ReadStoreServiceData.READ_STORE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadStoreServiceData.READ_STORE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadStoreServiceData.READ_STORE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadStoreServiceData.READ_STORE_TS001_TC001.output)[2])
	});



    test(ReadStoreServiceData.READ_STORE_TS001_TC002.description, async () => {

        const output = await ReadStoreService.readStores(
            ReadStoreServiceData.READ_STORE_TS001_TC002.input.databaseConnector,
            ReadStoreServiceData.READ_STORE_TS001_TC002.input.apiID,
            ReadStoreServiceData.READ_STORE_TS001_TC002.input.config,
            ReadStoreServiceData.READ_STORE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadStoreServiceData.READ_STORE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadStoreServiceData.READ_STORE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadStoreServiceData.READ_STORE_TS001_TC002.output.message)        
	});



    test(ReadStoreServiceData.READ_STORE_TS001_TC003.description, async () => {

        const output = await ReadStoreService.readStores(
            ReadStoreServiceData.READ_STORE_TS001_TC003.input.databaseConnector,
            ReadStoreServiceData.READ_STORE_TS001_TC003.input.apiID,
            ReadStoreServiceData.READ_STORE_TS001_TC003.input.config,
            ReadStoreServiceData.READ_STORE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadStoreServiceData.READ_STORE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadStoreServiceData.READ_STORE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.store.ts.002] | FunctionPath : [src/services/store/read.store.service.js/readOneStore()]", () => {


	test(ReadStoreServiceData.READ_ONE_STORE_TS002_TC001.description, async () => {

        const output = await ReadStoreService.readOneStore(
            ReadStoreServiceData.READ_ONE_STORE_TS002_TC001.input.databaseConnector,
            ReadStoreServiceData.READ_ONE_STORE_TS002_TC001.input.apiID,
            ReadStoreServiceData.READ_ONE_STORE_TS002_TC001.input.config,
            ReadStoreServiceData.READ_ONE_STORE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadStoreServiceData.READ_ONE_STORE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadStoreServiceData.READ_ONE_STORE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadStoreServiceData.READ_ONE_STORE_TS002_TC001.output)[2])
	});



    test(ReadStoreServiceData.READ_ONE_STORE_TS002_TC002.description, async () => {

        const output = await ReadStoreService.readOneStore(
            ReadStoreServiceData.READ_ONE_STORE_TS002_TC002.input.databaseConnector,
            ReadStoreServiceData.READ_ONE_STORE_TS002_TC002.input.apiID,
            ReadStoreServiceData.READ_ONE_STORE_TS002_TC002.input.config,
            ReadStoreServiceData.READ_ONE_STORE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadStoreServiceData.READ_ONE_STORE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadStoreServiceData.READ_ONE_STORE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadStoreServiceData.READ_ONE_STORE_TS002_TC002.output.message)        
	});



    test(ReadStoreServiceData.READ_ONE_STORE_TS002_TC003.description, async () => {

        const output = await ReadStoreService.readOneStore(
            ReadStoreServiceData.READ_ONE_STORE_TS002_TC003.input.databaseConnector,
            ReadStoreServiceData.READ_ONE_STORE_TS002_TC003.input.apiID,
            ReadStoreServiceData.READ_ONE_STORE_TS002_TC003.input.config,
            ReadStoreServiceData.READ_ONE_STORE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadStoreServiceData.READ_ONE_STORE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadStoreServiceData.READ_ONE_STORE_TS002_TC003.output.message)        
	});

});