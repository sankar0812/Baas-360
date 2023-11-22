/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read ProductPrice service class
**/

/**
 * Importing all required modules here
 */

const readProductPriceServiceData = require("../data/read.productprice.service.data")
const readProductPriceService = require("../../../../src/services/product/read.productprice.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadProductPriceService = new readProductPriceService();
const ReadProductPriceServiceData = new readProductPriceServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productprice.ts.001] | FunctionPath : [src/services/product/read.contianer.service.js/readProductPrices()]", () => {


	test(ReadProductPriceServiceData.READ_PRODUCTPRICE_TS001_TC001.description, async () => {

        const output = await ReadProductPriceService.readProductPrices(
            ReadProductPriceServiceData.READ_PRODUCTPRICE_TS001_TC001.input.databaseConnector,
            ReadProductPriceServiceData.READ_PRODUCTPRICE_TS001_TC001.input.apiID,
            ReadProductPriceServiceData.READ_PRODUCTPRICE_TS001_TC001.input.config,
            ReadProductPriceServiceData.READ_PRODUCTPRICE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProductPriceServiceData.READ_PRODUCTPRICE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProductPriceServiceData.READ_PRODUCTPRICE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProductPriceServiceData.READ_PRODUCTPRICE_TS001_TC001.output)[2])
	});



    test(ReadProductPriceServiceData.READ_PRODUCTPRICE_TS001_TC002.description, async () => {

        const output = await ReadProductPriceService.readProductPrices(
            ReadProductPriceServiceData.READ_PRODUCTPRICE_TS001_TC002.input.databaseConnector,
            ReadProductPriceServiceData.READ_PRODUCTPRICE_TS001_TC002.input.apiID,
            ReadProductPriceServiceData.READ_PRODUCTPRICE_TS001_TC002.input.config,
            ReadProductPriceServiceData.READ_PRODUCTPRICE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadProductPriceServiceData.READ_PRODUCTPRICE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadProductPriceServiceData.READ_PRODUCTPRICE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadProductPriceServiceData.READ_PRODUCTPRICE_TS001_TC002.output.message)        
	});



    test(ReadProductPriceServiceData.READ_PRODUCTPRICE_TS001_TC003.description, async () => {

        const output = await ReadProductPriceService.readProductPrices(
            ReadProductPriceServiceData.READ_PRODUCTPRICE_TS001_TC003.input.databaseConnector,
            ReadProductPriceServiceData.READ_PRODUCTPRICE_TS001_TC003.input.apiID,
            ReadProductPriceServiceData.READ_PRODUCTPRICE_TS001_TC003.input.config,
            ReadProductPriceServiceData.READ_PRODUCTPRICE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadProductPriceServiceData.READ_PRODUCTPRICE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadProductPriceServiceData.READ_PRODUCTPRICE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.productprice.ts.002] | FunctionPath : [src/services/product/read.productprice.service.js/readOneProductPrice()]", () => {


	test(ReadProductPriceServiceData.READ_ONE_PRODUCTPRICE_TS002_TC001.description, async () => {

        const output = await ReadProductPriceService.readOneProductPrice(
            ReadProductPriceServiceData.READ_ONE_PRODUCTPRICE_TS002_TC001.input.databaseConnector,
            ReadProductPriceServiceData.READ_ONE_PRODUCTPRICE_TS002_TC001.input.apiID,
            ReadProductPriceServiceData.READ_ONE_PRODUCTPRICE_TS002_TC001.input.config,
            ReadProductPriceServiceData.READ_ONE_PRODUCTPRICE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProductPriceServiceData.READ_ONE_PRODUCTPRICE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProductPriceServiceData.READ_ONE_PRODUCTPRICE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProductPriceServiceData.READ_ONE_PRODUCTPRICE_TS002_TC001.output)[2])
	});



    test(ReadProductPriceServiceData.READ_ONE_PRODUCTPRICE_TS002_TC002.description, async () => {

        const output = await ReadProductPriceService.readOneProductPrice(
            ReadProductPriceServiceData.READ_ONE_PRODUCTPRICE_TS002_TC002.input.databaseConnector,
            ReadProductPriceServiceData.READ_ONE_PRODUCTPRICE_TS002_TC002.input.apiID,
            ReadProductPriceServiceData.READ_ONE_PRODUCTPRICE_TS002_TC002.input.config,
            ReadProductPriceServiceData.READ_ONE_PRODUCTPRICE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadProductPriceServiceData.READ_ONE_PRODUCTPRICE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadProductPriceServiceData.READ_ONE_PRODUCTPRICE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadProductPriceServiceData.READ_ONE_PRODUCTPRICE_TS002_TC002.output.message)        
	});



    test(ReadProductPriceServiceData.READ_ONE_PRODUCTPRICE_TS002_TC003.description, async () => {

        const output = await ReadProductPriceService.readOneProductPrice(
            ReadProductPriceServiceData.READ_ONE_PRODUCTPRICE_TS002_TC003.input.databaseConnector,
            ReadProductPriceServiceData.READ_ONE_PRODUCTPRICE_TS002_TC003.input.apiID,
            ReadProductPriceServiceData.READ_ONE_PRODUCTPRICE_TS002_TC003.input.config,
            ReadProductPriceServiceData.READ_ONE_PRODUCTPRICE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadProductPriceServiceData.READ_ONE_PRODUCTPRICE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadProductPriceServiceData.READ_ONE_PRODUCTPRICE_TS002_TC003.output.message)        
	});

});