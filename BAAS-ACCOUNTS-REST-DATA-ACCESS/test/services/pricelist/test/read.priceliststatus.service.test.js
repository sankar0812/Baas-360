/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read PriceListStatus service class
**/

/**
 * Importing all required modules here
 */

const readPriceListStatusServiceData = require("../data/read.priceliststatus.service.data")
const readPriceListStatusService = require("../../../../src/services/pricelist/read.priceliststatus.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadPriceListStatusService = new readPriceListStatusService();
const ReadPriceListStatusServiceData = new readPriceListStatusServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.priceliststatus.ts.001] | FunctionPath : [src/services/pricelist/read.contianer.service.js/readPriceListStatuss()]", () => {


	test(ReadPriceListStatusServiceData.READ_PRICELISTSTATUS_TS001_TC001.description, async () => {

        const output = await ReadPriceListStatusService.readPriceListStatuses(
            ReadPriceListStatusServiceData.READ_PRICELISTSTATUS_TS001_TC001.input.databaseConnector,
            ReadPriceListStatusServiceData.READ_PRICELISTSTATUS_TS001_TC001.input.apiID,
            ReadPriceListStatusServiceData.READ_PRICELISTSTATUS_TS001_TC001.input.config,
            ReadPriceListStatusServiceData.READ_PRICELISTSTATUS_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadPriceListStatusServiceData.READ_PRICELISTSTATUS_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadPriceListStatusServiceData.READ_PRICELISTSTATUS_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadPriceListStatusServiceData.READ_PRICELISTSTATUS_TS001_TC001.output)[2])
	});



    test(ReadPriceListStatusServiceData.READ_PRICELISTSTATUS_TS001_TC002.description, async () => {

        const output = await ReadPriceListStatusService.readPriceListStatuses(
            ReadPriceListStatusServiceData.READ_PRICELISTSTATUS_TS001_TC002.input.databaseConnector,
            ReadPriceListStatusServiceData.READ_PRICELISTSTATUS_TS001_TC002.input.apiID,
            ReadPriceListStatusServiceData.READ_PRICELISTSTATUS_TS001_TC002.input.config,
            ReadPriceListStatusServiceData.READ_PRICELISTSTATUS_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadPriceListStatusServiceData.READ_PRICELISTSTATUS_TS001_TC002.output.data)
        expect(output.status).toBe(ReadPriceListStatusServiceData.READ_PRICELISTSTATUS_TS001_TC002.output.status)
        expect(output.message).toBe(ReadPriceListStatusServiceData.READ_PRICELISTSTATUS_TS001_TC002.output.message)        
	});



    test(ReadPriceListStatusServiceData.READ_PRICELISTSTATUS_TS001_TC003.description, async () => {

        const output = await ReadPriceListStatusService.readPriceListStatuses(
            ReadPriceListStatusServiceData.READ_PRICELISTSTATUS_TS001_TC003.input.databaseConnector,
            ReadPriceListStatusServiceData.READ_PRICELISTSTATUS_TS001_TC003.input.apiID,
            ReadPriceListStatusServiceData.READ_PRICELISTSTATUS_TS001_TC003.input.config,
            ReadPriceListStatusServiceData.READ_PRICELISTSTATUS_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadPriceListStatusServiceData.READ_PRICELISTSTATUS_TS001_TC003.output.status)
        expect(output.message).toBe(ReadPriceListStatusServiceData.READ_PRICELISTSTATUS_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.priceliststatus.ts.002] | FunctionPath : [src/services/pricelist/read.priceliststatus.service.js/readOnePriceListStatus()]", () => {


	test(ReadPriceListStatusServiceData.READ_ONE_PRICELISTSTATUS_TS002_TC001.description, async () => {

        const output = await ReadPriceListStatusService.readOnePriceListStatus(
            ReadPriceListStatusServiceData.READ_ONE_PRICELISTSTATUS_TS002_TC001.input.databaseConnector,
            ReadPriceListStatusServiceData.READ_ONE_PRICELISTSTATUS_TS002_TC001.input.apiID,
            ReadPriceListStatusServiceData.READ_ONE_PRICELISTSTATUS_TS002_TC001.input.config,
            ReadPriceListStatusServiceData.READ_ONE_PRICELISTSTATUS_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadPriceListStatusServiceData.READ_ONE_PRICELISTSTATUS_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadPriceListStatusServiceData.READ_ONE_PRICELISTSTATUS_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadPriceListStatusServiceData.READ_ONE_PRICELISTSTATUS_TS002_TC001.output)[2])
	});



    test(ReadPriceListStatusServiceData.READ_ONE_PRICELISTSTATUS_TS002_TC002.description, async () => {

        const output = await ReadPriceListStatusService.readOnePriceListStatus(
            ReadPriceListStatusServiceData.READ_ONE_PRICELISTSTATUS_TS002_TC002.input.databaseConnector,
            ReadPriceListStatusServiceData.READ_ONE_PRICELISTSTATUS_TS002_TC002.input.apiID,
            ReadPriceListStatusServiceData.READ_ONE_PRICELISTSTATUS_TS002_TC002.input.config,
            ReadPriceListStatusServiceData.READ_ONE_PRICELISTSTATUS_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadPriceListStatusServiceData.READ_ONE_PRICELISTSTATUS_TS002_TC002.output.data)
        expect(output.status).toBe(ReadPriceListStatusServiceData.READ_ONE_PRICELISTSTATUS_TS002_TC002.output.status)
        expect(output.message).toBe(ReadPriceListStatusServiceData.READ_ONE_PRICELISTSTATUS_TS002_TC002.output.message)        
	});



    test(ReadPriceListStatusServiceData.READ_ONE_PRICELISTSTATUS_TS002_TC003.description, async () => {

        const output = await ReadPriceListStatusService.readOnePriceListStatus(
            ReadPriceListStatusServiceData.READ_ONE_PRICELISTSTATUS_TS002_TC003.input.databaseConnector,
            ReadPriceListStatusServiceData.READ_ONE_PRICELISTSTATUS_TS002_TC003.input.apiID,
            ReadPriceListStatusServiceData.READ_ONE_PRICELISTSTATUS_TS002_TC003.input.config,
            ReadPriceListStatusServiceData.READ_ONE_PRICELISTSTATUS_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadPriceListStatusServiceData.READ_ONE_PRICELISTSTATUS_TS002_TC003.output.status)
        expect(output.message).toBe(ReadPriceListStatusServiceData.READ_ONE_PRICELISTSTATUS_TS002_TC003.output.message)        
	});

});