/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Product service class
**/

/**
 * Importing all required modules here
 */

const readProductServiceData = require("../data/read.product.service.data")
const readProductService = require("../../../../src/services/product/read.product.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadProductService = new readProductService();
const ReadProductServiceData = new readProductServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.product.ts.001] | FunctionPath : [src/services/product/read.contianer.service.js/readProducts()]", () => {


	test(ReadProductServiceData.READ_PRODUCT_TS001_TC001.description, async () => {

        const output = await ReadProductService.readProducts(
            ReadProductServiceData.READ_PRODUCT_TS001_TC001.input.databaseConnector,
            ReadProductServiceData.READ_PRODUCT_TS001_TC001.input.apiID,
            ReadProductServiceData.READ_PRODUCT_TS001_TC001.input.config,
            ReadProductServiceData.READ_PRODUCT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProductServiceData.READ_PRODUCT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProductServiceData.READ_PRODUCT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProductServiceData.READ_PRODUCT_TS001_TC001.output)[2])
	});



    test(ReadProductServiceData.READ_PRODUCT_TS001_TC002.description, async () => {

        const output = await ReadProductService.readProducts(
            ReadProductServiceData.READ_PRODUCT_TS001_TC002.input.databaseConnector,
            ReadProductServiceData.READ_PRODUCT_TS001_TC002.input.apiID,
            ReadProductServiceData.READ_PRODUCT_TS001_TC002.input.config,
            ReadProductServiceData.READ_PRODUCT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadProductServiceData.READ_PRODUCT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadProductServiceData.READ_PRODUCT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadProductServiceData.READ_PRODUCT_TS001_TC002.output.message)        
	});



    test(ReadProductServiceData.READ_PRODUCT_TS001_TC003.description, async () => {

        const output = await ReadProductService.readProducts(
            ReadProductServiceData.READ_PRODUCT_TS001_TC003.input.databaseConnector,
            ReadProductServiceData.READ_PRODUCT_TS001_TC003.input.apiID,
            ReadProductServiceData.READ_PRODUCT_TS001_TC003.input.config,
            ReadProductServiceData.READ_PRODUCT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadProductServiceData.READ_PRODUCT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadProductServiceData.READ_PRODUCT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.product.ts.002] | FunctionPath : [src/services/product/read.product.service.js/readOneProduct()]", () => {


	test(ReadProductServiceData.READ_ONE_PRODUCT_TS002_TC001.description, async () => {

        const output = await ReadProductService.readOneProduct(
            ReadProductServiceData.READ_ONE_PRODUCT_TS002_TC001.input.databaseConnector,
            ReadProductServiceData.READ_ONE_PRODUCT_TS002_TC001.input.apiID,
            ReadProductServiceData.READ_ONE_PRODUCT_TS002_TC001.input.config,
            ReadProductServiceData.READ_ONE_PRODUCT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProductServiceData.READ_ONE_PRODUCT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProductServiceData.READ_ONE_PRODUCT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProductServiceData.READ_ONE_PRODUCT_TS002_TC001.output)[2])
	});



    test(ReadProductServiceData.READ_ONE_PRODUCT_TS002_TC002.description, async () => {

        const output = await ReadProductService.readOneProduct(
            ReadProductServiceData.READ_ONE_PRODUCT_TS002_TC002.input.databaseConnector,
            ReadProductServiceData.READ_ONE_PRODUCT_TS002_TC002.input.apiID,
            ReadProductServiceData.READ_ONE_PRODUCT_TS002_TC002.input.config,
            ReadProductServiceData.READ_ONE_PRODUCT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadProductServiceData.READ_ONE_PRODUCT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadProductServiceData.READ_ONE_PRODUCT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadProductServiceData.READ_ONE_PRODUCT_TS002_TC002.output.message)        
	});



    test(ReadProductServiceData.READ_ONE_PRODUCT_TS002_TC003.description, async () => {

        const output = await ReadProductService.readOneProduct(
            ReadProductServiceData.READ_ONE_PRODUCT_TS002_TC003.input.databaseConnector,
            ReadProductServiceData.READ_ONE_PRODUCT_TS002_TC003.input.apiID,
            ReadProductServiceData.READ_ONE_PRODUCT_TS002_TC003.input.config,
            ReadProductServiceData.READ_ONE_PRODUCT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadProductServiceData.READ_ONE_PRODUCT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadProductServiceData.READ_ONE_PRODUCT_TS002_TC003.output.message)        
	});

});