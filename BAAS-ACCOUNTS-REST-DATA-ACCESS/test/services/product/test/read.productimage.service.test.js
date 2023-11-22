/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read ProductImage service class
**/

/**
 * Importing all required modules here
 */

const readProductImageServiceData = require("../data/read.productimage.service.data")
const readProductImageService = require("../../../../src/services/product/read.productimage.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadProductImageService = new readProductImageService();
const ReadProductImageServiceData = new readProductImageServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productimage.ts.001] | FunctionPath : [src/services/product/read.contianer.service.js/readProductImages()]", () => {


	test(ReadProductImageServiceData.READ_PRODUCTIMAGE_TS001_TC001.description, async () => {

        const output = await ReadProductImageService.readProductImages(
            ReadProductImageServiceData.READ_PRODUCTIMAGE_TS001_TC001.input.databaseConnector,
            ReadProductImageServiceData.READ_PRODUCTIMAGE_TS001_TC001.input.apiID,
            ReadProductImageServiceData.READ_PRODUCTIMAGE_TS001_TC001.input.config,
            ReadProductImageServiceData.READ_PRODUCTIMAGE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProductImageServiceData.READ_PRODUCTIMAGE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProductImageServiceData.READ_PRODUCTIMAGE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProductImageServiceData.READ_PRODUCTIMAGE_TS001_TC001.output)[2])
	});



    test(ReadProductImageServiceData.READ_PRODUCTIMAGE_TS001_TC002.description, async () => {

        const output = await ReadProductImageService.readProductImages(
            ReadProductImageServiceData.READ_PRODUCTIMAGE_TS001_TC002.input.databaseConnector,
            ReadProductImageServiceData.READ_PRODUCTIMAGE_TS001_TC002.input.apiID,
            ReadProductImageServiceData.READ_PRODUCTIMAGE_TS001_TC002.input.config,
            ReadProductImageServiceData.READ_PRODUCTIMAGE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadProductImageServiceData.READ_PRODUCTIMAGE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadProductImageServiceData.READ_PRODUCTIMAGE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadProductImageServiceData.READ_PRODUCTIMAGE_TS001_TC002.output.message)        
	});



    test(ReadProductImageServiceData.READ_PRODUCTIMAGE_TS001_TC003.description, async () => {

        const output = await ReadProductImageService.readProductImages(
            ReadProductImageServiceData.READ_PRODUCTIMAGE_TS001_TC003.input.databaseConnector,
            ReadProductImageServiceData.READ_PRODUCTIMAGE_TS001_TC003.input.apiID,
            ReadProductImageServiceData.READ_PRODUCTIMAGE_TS001_TC003.input.config,
            ReadProductImageServiceData.READ_PRODUCTIMAGE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadProductImageServiceData.READ_PRODUCTIMAGE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadProductImageServiceData.READ_PRODUCTIMAGE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.productimage.ts.002] | FunctionPath : [src/services/product/read.productimage.service.js/readOneProductImage()]", () => {


	test(ReadProductImageServiceData.READ_ONE_PRODUCTIMAGE_TS002_TC001.description, async () => {

        const output = await ReadProductImageService.readOneProductImage(
            ReadProductImageServiceData.READ_ONE_PRODUCTIMAGE_TS002_TC001.input.databaseConnector,
            ReadProductImageServiceData.READ_ONE_PRODUCTIMAGE_TS002_TC001.input.apiID,
            ReadProductImageServiceData.READ_ONE_PRODUCTIMAGE_TS002_TC001.input.config,
            ReadProductImageServiceData.READ_ONE_PRODUCTIMAGE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProductImageServiceData.READ_ONE_PRODUCTIMAGE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProductImageServiceData.READ_ONE_PRODUCTIMAGE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProductImageServiceData.READ_ONE_PRODUCTIMAGE_TS002_TC001.output)[2])
	});



    test(ReadProductImageServiceData.READ_ONE_PRODUCTIMAGE_TS002_TC002.description, async () => {

        const output = await ReadProductImageService.readOneProductImage(
            ReadProductImageServiceData.READ_ONE_PRODUCTIMAGE_TS002_TC002.input.databaseConnector,
            ReadProductImageServiceData.READ_ONE_PRODUCTIMAGE_TS002_TC002.input.apiID,
            ReadProductImageServiceData.READ_ONE_PRODUCTIMAGE_TS002_TC002.input.config,
            ReadProductImageServiceData.READ_ONE_PRODUCTIMAGE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadProductImageServiceData.READ_ONE_PRODUCTIMAGE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadProductImageServiceData.READ_ONE_PRODUCTIMAGE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadProductImageServiceData.READ_ONE_PRODUCTIMAGE_TS002_TC002.output.message)        
	});



    test(ReadProductImageServiceData.READ_ONE_PRODUCTIMAGE_TS002_TC003.description, async () => {

        const output = await ReadProductImageService.readOneProductImage(
            ReadProductImageServiceData.READ_ONE_PRODUCTIMAGE_TS002_TC003.input.databaseConnector,
            ReadProductImageServiceData.READ_ONE_PRODUCTIMAGE_TS002_TC003.input.apiID,
            ReadProductImageServiceData.READ_ONE_PRODUCTIMAGE_TS002_TC003.input.config,
            ReadProductImageServiceData.READ_ONE_PRODUCTIMAGE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadProductImageServiceData.READ_ONE_PRODUCTIMAGE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadProductImageServiceData.READ_ONE_PRODUCTIMAGE_TS002_TC003.output.message)        
	});

});