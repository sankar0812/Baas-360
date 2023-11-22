/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read PriceListItem service class
**/

/**
 * Importing all required modules here
 */

const readPriceListItemServiceData = require("../data/read.pricelistitem.service.data")
const readPriceListItemService = require("../../../../src/services/pricelist/read.pricelistitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadPriceListItemService = new readPriceListItemService();
const ReadPriceListItemServiceData = new readPriceListItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.pricelistitem.ts.001] | FunctionPath : [src/services/pricelist/read.contianer.service.js/readPriceListItems()]", () => {


	test(ReadPriceListItemServiceData.READ_PRICELISTITEM_TS001_TC001.description, async () => {

        const output = await ReadPriceListItemService.readPriceListItems(
            ReadPriceListItemServiceData.READ_PRICELISTITEM_TS001_TC001.input.databaseConnector,
            ReadPriceListItemServiceData.READ_PRICELISTITEM_TS001_TC001.input.apiID,
            ReadPriceListItemServiceData.READ_PRICELISTITEM_TS001_TC001.input.config,
            ReadPriceListItemServiceData.READ_PRICELISTITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadPriceListItemServiceData.READ_PRICELISTITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadPriceListItemServiceData.READ_PRICELISTITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadPriceListItemServiceData.READ_PRICELISTITEM_TS001_TC001.output)[2])
	});



    test(ReadPriceListItemServiceData.READ_PRICELISTITEM_TS001_TC002.description, async () => {

        const output = await ReadPriceListItemService.readPriceListItems(
            ReadPriceListItemServiceData.READ_PRICELISTITEM_TS001_TC002.input.databaseConnector,
            ReadPriceListItemServiceData.READ_PRICELISTITEM_TS001_TC002.input.apiID,
            ReadPriceListItemServiceData.READ_PRICELISTITEM_TS001_TC002.input.config,
            ReadPriceListItemServiceData.READ_PRICELISTITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadPriceListItemServiceData.READ_PRICELISTITEM_TS001_TC002.output.data)
        expect(output.status).toBe(ReadPriceListItemServiceData.READ_PRICELISTITEM_TS001_TC002.output.status)
        expect(output.message).toBe(ReadPriceListItemServiceData.READ_PRICELISTITEM_TS001_TC002.output.message)        
	});



    test(ReadPriceListItemServiceData.READ_PRICELISTITEM_TS001_TC003.description, async () => {

        const output = await ReadPriceListItemService.readPriceListItems(
            ReadPriceListItemServiceData.READ_PRICELISTITEM_TS001_TC003.input.databaseConnector,
            ReadPriceListItemServiceData.READ_PRICELISTITEM_TS001_TC003.input.apiID,
            ReadPriceListItemServiceData.READ_PRICELISTITEM_TS001_TC003.input.config,
            ReadPriceListItemServiceData.READ_PRICELISTITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadPriceListItemServiceData.READ_PRICELISTITEM_TS001_TC003.output.status)
        expect(output.message).toBe(ReadPriceListItemServiceData.READ_PRICELISTITEM_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.pricelistitem.ts.002] | FunctionPath : [src/services/pricelist/read.pricelistitem.service.js/readOnePriceListItem()]", () => {


	test(ReadPriceListItemServiceData.READ_ONE_PRICELISTITEM_TS002_TC001.description, async () => {

        const output = await ReadPriceListItemService.readOnePriceListItem(
            ReadPriceListItemServiceData.READ_ONE_PRICELISTITEM_TS002_TC001.input.databaseConnector,
            ReadPriceListItemServiceData.READ_ONE_PRICELISTITEM_TS002_TC001.input.apiID,
            ReadPriceListItemServiceData.READ_ONE_PRICELISTITEM_TS002_TC001.input.config,
            ReadPriceListItemServiceData.READ_ONE_PRICELISTITEM_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadPriceListItemServiceData.READ_ONE_PRICELISTITEM_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadPriceListItemServiceData.READ_ONE_PRICELISTITEM_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadPriceListItemServiceData.READ_ONE_PRICELISTITEM_TS002_TC001.output)[2])
	});



    test(ReadPriceListItemServiceData.READ_ONE_PRICELISTITEM_TS002_TC002.description, async () => {

        const output = await ReadPriceListItemService.readOnePriceListItem(
            ReadPriceListItemServiceData.READ_ONE_PRICELISTITEM_TS002_TC002.input.databaseConnector,
            ReadPriceListItemServiceData.READ_ONE_PRICELISTITEM_TS002_TC002.input.apiID,
            ReadPriceListItemServiceData.READ_ONE_PRICELISTITEM_TS002_TC002.input.config,
            ReadPriceListItemServiceData.READ_ONE_PRICELISTITEM_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadPriceListItemServiceData.READ_ONE_PRICELISTITEM_TS002_TC002.output.data)
        expect(output.status).toBe(ReadPriceListItemServiceData.READ_ONE_PRICELISTITEM_TS002_TC002.output.status)
        expect(output.message).toBe(ReadPriceListItemServiceData.READ_ONE_PRICELISTITEM_TS002_TC002.output.message)        
	});



    test(ReadPriceListItemServiceData.READ_ONE_PRICELISTITEM_TS002_TC003.description, async () => {

        const output = await ReadPriceListItemService.readOnePriceListItem(
            ReadPriceListItemServiceData.READ_ONE_PRICELISTITEM_TS002_TC003.input.databaseConnector,
            ReadPriceListItemServiceData.READ_ONE_PRICELISTITEM_TS002_TC003.input.apiID,
            ReadPriceListItemServiceData.READ_ONE_PRICELISTITEM_TS002_TC003.input.config,
            ReadPriceListItemServiceData.READ_ONE_PRICELISTITEM_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadPriceListItemServiceData.READ_ONE_PRICELISTITEM_TS002_TC003.output.status)
        expect(output.message).toBe(ReadPriceListItemServiceData.READ_ONE_PRICELISTITEM_TS002_TC003.output.message)        
	});

});