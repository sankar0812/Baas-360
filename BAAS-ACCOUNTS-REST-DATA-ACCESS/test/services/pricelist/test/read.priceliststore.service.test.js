/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read PriceListStore service class
**/

/**
 * Importing all required modules here
 */

const readPriceListStoreServiceData = require("../data/read.priceliststore.service.data")
const readPriceListStoreService = require("../../../../src/services/pricelist/read.priceliststore.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadPriceListStoreService = new readPriceListStoreService();
const ReadPriceListStoreServiceData = new readPriceListStoreServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.priceliststore.ts.001] | FunctionPath : [src/services/pricelist/read.contianer.service.js/readPriceListStores()]", () => {


	test(ReadPriceListStoreServiceData.READ_PRICELISTSTORE_TS001_TC001.description, async () => {

        const output = await ReadPriceListStoreService.readPriceListStores(
            ReadPriceListStoreServiceData.READ_PRICELISTSTORE_TS001_TC001.input.databaseConnector,
            ReadPriceListStoreServiceData.READ_PRICELISTSTORE_TS001_TC001.input.apiID,
            ReadPriceListStoreServiceData.READ_PRICELISTSTORE_TS001_TC001.input.config,
            ReadPriceListStoreServiceData.READ_PRICELISTSTORE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadPriceListStoreServiceData.READ_PRICELISTSTORE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadPriceListStoreServiceData.READ_PRICELISTSTORE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadPriceListStoreServiceData.READ_PRICELISTSTORE_TS001_TC001.output)[2])
	});



    test(ReadPriceListStoreServiceData.READ_PRICELISTSTORE_TS001_TC002.description, async () => {

        const output = await ReadPriceListStoreService.readPriceListStores(
            ReadPriceListStoreServiceData.READ_PRICELISTSTORE_TS001_TC002.input.databaseConnector,
            ReadPriceListStoreServiceData.READ_PRICELISTSTORE_TS001_TC002.input.apiID,
            ReadPriceListStoreServiceData.READ_PRICELISTSTORE_TS001_TC002.input.config,
            ReadPriceListStoreServiceData.READ_PRICELISTSTORE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadPriceListStoreServiceData.READ_PRICELISTSTORE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadPriceListStoreServiceData.READ_PRICELISTSTORE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadPriceListStoreServiceData.READ_PRICELISTSTORE_TS001_TC002.output.message)        
	});



    test(ReadPriceListStoreServiceData.READ_PRICELISTSTORE_TS001_TC003.description, async () => {

        const output = await ReadPriceListStoreService.readPriceListStores(
            ReadPriceListStoreServiceData.READ_PRICELISTSTORE_TS001_TC003.input.databaseConnector,
            ReadPriceListStoreServiceData.READ_PRICELISTSTORE_TS001_TC003.input.apiID,
            ReadPriceListStoreServiceData.READ_PRICELISTSTORE_TS001_TC003.input.config,
            ReadPriceListStoreServiceData.READ_PRICELISTSTORE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadPriceListStoreServiceData.READ_PRICELISTSTORE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadPriceListStoreServiceData.READ_PRICELISTSTORE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.priceliststore.ts.002] | FunctionPath : [src/services/pricelist/read.priceliststore.service.js/readOnePriceListStore()]", () => {


	test(ReadPriceListStoreServiceData.READ_ONE_PRICELISTSTORE_TS002_TC001.description, async () => {

        const output = await ReadPriceListStoreService.readOnePriceListStore(
            ReadPriceListStoreServiceData.READ_ONE_PRICELISTSTORE_TS002_TC001.input.databaseConnector,
            ReadPriceListStoreServiceData.READ_ONE_PRICELISTSTORE_TS002_TC001.input.apiID,
            ReadPriceListStoreServiceData.READ_ONE_PRICELISTSTORE_TS002_TC001.input.config,
            ReadPriceListStoreServiceData.READ_ONE_PRICELISTSTORE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadPriceListStoreServiceData.READ_ONE_PRICELISTSTORE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadPriceListStoreServiceData.READ_ONE_PRICELISTSTORE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadPriceListStoreServiceData.READ_ONE_PRICELISTSTORE_TS002_TC001.output)[2])
	});



    test(ReadPriceListStoreServiceData.READ_ONE_PRICELISTSTORE_TS002_TC002.description, async () => {

        const output = await ReadPriceListStoreService.readOnePriceListStore(
            ReadPriceListStoreServiceData.READ_ONE_PRICELISTSTORE_TS002_TC002.input.databaseConnector,
            ReadPriceListStoreServiceData.READ_ONE_PRICELISTSTORE_TS002_TC002.input.apiID,
            ReadPriceListStoreServiceData.READ_ONE_PRICELISTSTORE_TS002_TC002.input.config,
            ReadPriceListStoreServiceData.READ_ONE_PRICELISTSTORE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadPriceListStoreServiceData.READ_ONE_PRICELISTSTORE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadPriceListStoreServiceData.READ_ONE_PRICELISTSTORE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadPriceListStoreServiceData.READ_ONE_PRICELISTSTORE_TS002_TC002.output.message)        
	});



    test(ReadPriceListStoreServiceData.READ_ONE_PRICELISTSTORE_TS002_TC003.description, async () => {

        const output = await ReadPriceListStoreService.readOnePriceListStore(
            ReadPriceListStoreServiceData.READ_ONE_PRICELISTSTORE_TS002_TC003.input.databaseConnector,
            ReadPriceListStoreServiceData.READ_ONE_PRICELISTSTORE_TS002_TC003.input.apiID,
            ReadPriceListStoreServiceData.READ_ONE_PRICELISTSTORE_TS002_TC003.input.config,
            ReadPriceListStoreServiceData.READ_ONE_PRICELISTSTORE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadPriceListStoreServiceData.READ_ONE_PRICELISTSTORE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadPriceListStoreServiceData.READ_ONE_PRICELISTSTORE_TS002_TC003.output.message)        
	});

});