/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read PriceList service class
**/

/**
 * Importing all required modules here
 */

const readPriceListServiceData = require("../data/read.pricelist.service.data")
const readPriceListService = require("../../../../src/services/pricelist/read.pricelist.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadPriceListService = new readPriceListService();
const ReadPriceListServiceData = new readPriceListServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.pricelist.ts.001] | FunctionPath : [src/services/pricelist/read.contianer.service.js/readPriceLists()]", () => {


	test(ReadPriceListServiceData.READ_PRICELIST_TS001_TC001.description, async () => {

        const output = await ReadPriceListService.readPriceLists(
            ReadPriceListServiceData.READ_PRICELIST_TS001_TC001.input.databaseConnector,
            ReadPriceListServiceData.READ_PRICELIST_TS001_TC001.input.apiID,
            ReadPriceListServiceData.READ_PRICELIST_TS001_TC001.input.config,
            ReadPriceListServiceData.READ_PRICELIST_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadPriceListServiceData.READ_PRICELIST_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadPriceListServiceData.READ_PRICELIST_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadPriceListServiceData.READ_PRICELIST_TS001_TC001.output)[2])
	});



    test(ReadPriceListServiceData.READ_PRICELIST_TS001_TC002.description, async () => {

        const output = await ReadPriceListService.readPriceLists(
            ReadPriceListServiceData.READ_PRICELIST_TS001_TC002.input.databaseConnector,
            ReadPriceListServiceData.READ_PRICELIST_TS001_TC002.input.apiID,
            ReadPriceListServiceData.READ_PRICELIST_TS001_TC002.input.config,
            ReadPriceListServiceData.READ_PRICELIST_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadPriceListServiceData.READ_PRICELIST_TS001_TC002.output.data)
        expect(output.status).toBe(ReadPriceListServiceData.READ_PRICELIST_TS001_TC002.output.status)
        expect(output.message).toBe(ReadPriceListServiceData.READ_PRICELIST_TS001_TC002.output.message)        
	});



    test(ReadPriceListServiceData.READ_PRICELIST_TS001_TC003.description, async () => {

        const output = await ReadPriceListService.readPriceLists(
            ReadPriceListServiceData.READ_PRICELIST_TS001_TC003.input.databaseConnector,
            ReadPriceListServiceData.READ_PRICELIST_TS001_TC003.input.apiID,
            ReadPriceListServiceData.READ_PRICELIST_TS001_TC003.input.config,
            ReadPriceListServiceData.READ_PRICELIST_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadPriceListServiceData.READ_PRICELIST_TS001_TC003.output.status)
        expect(output.message).toBe(ReadPriceListServiceData.READ_PRICELIST_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.pricelist.ts.002] | FunctionPath : [src/services/pricelist/read.pricelist.service.js/readOnePriceList()]", () => {


	test(ReadPriceListServiceData.READ_ONE_PRICELIST_TS002_TC001.description, async () => {

        const output = await ReadPriceListService.readOnePriceList(
            ReadPriceListServiceData.READ_ONE_PRICELIST_TS002_TC001.input.databaseConnector,
            ReadPriceListServiceData.READ_ONE_PRICELIST_TS002_TC001.input.apiID,
            ReadPriceListServiceData.READ_ONE_PRICELIST_TS002_TC001.input.config,
            ReadPriceListServiceData.READ_ONE_PRICELIST_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadPriceListServiceData.READ_ONE_PRICELIST_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadPriceListServiceData.READ_ONE_PRICELIST_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadPriceListServiceData.READ_ONE_PRICELIST_TS002_TC001.output)[2])
	});



    test(ReadPriceListServiceData.READ_ONE_PRICELIST_TS002_TC002.description, async () => {

        const output = await ReadPriceListService.readOnePriceList(
            ReadPriceListServiceData.READ_ONE_PRICELIST_TS002_TC002.input.databaseConnector,
            ReadPriceListServiceData.READ_ONE_PRICELIST_TS002_TC002.input.apiID,
            ReadPriceListServiceData.READ_ONE_PRICELIST_TS002_TC002.input.config,
            ReadPriceListServiceData.READ_ONE_PRICELIST_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadPriceListServiceData.READ_ONE_PRICELIST_TS002_TC002.output.data)
        expect(output.status).toBe(ReadPriceListServiceData.READ_ONE_PRICELIST_TS002_TC002.output.status)
        expect(output.message).toBe(ReadPriceListServiceData.READ_ONE_PRICELIST_TS002_TC002.output.message)        
	});



    test(ReadPriceListServiceData.READ_ONE_PRICELIST_TS002_TC003.description, async () => {

        const output = await ReadPriceListService.readOnePriceList(
            ReadPriceListServiceData.READ_ONE_PRICELIST_TS002_TC003.input.databaseConnector,
            ReadPriceListServiceData.READ_ONE_PRICELIST_TS002_TC003.input.apiID,
            ReadPriceListServiceData.READ_ONE_PRICELIST_TS002_TC003.input.config,
            ReadPriceListServiceData.READ_ONE_PRICELIST_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadPriceListServiceData.READ_ONE_PRICELIST_TS002_TC003.output.status)
        expect(output.message).toBe(ReadPriceListServiceData.READ_ONE_PRICELIST_TS002_TC003.output.message)        
	});

});