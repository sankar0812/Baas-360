/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read VendorProduct service class
**/

/**
 * Importing all required modules here
 */

const readVendorProductServiceData = require("../data/read.vendorproduct.service.data")
const readVendorProductService = require("../../../../src/services/vendor/read.vendorproduct.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadVendorProductService = new readVendorProductService();
const ReadVendorProductServiceData = new readVendorProductServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorproduct.ts.001] | FunctionPath : [src/services/vendor/read.contianer.service.js/readVendorProducts()]", () => {


	test(ReadVendorProductServiceData.READ_VENDORPRODUCT_TS001_TC001.description, async () => {

        const output = await ReadVendorProductService.readVendorProducts(
            ReadVendorProductServiceData.READ_VENDORPRODUCT_TS001_TC001.input.databaseConnector,
            ReadVendorProductServiceData.READ_VENDORPRODUCT_TS001_TC001.input.apiID,
            ReadVendorProductServiceData.READ_VENDORPRODUCT_TS001_TC001.input.config,
            ReadVendorProductServiceData.READ_VENDORPRODUCT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorProductServiceData.READ_VENDORPRODUCT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorProductServiceData.READ_VENDORPRODUCT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorProductServiceData.READ_VENDORPRODUCT_TS001_TC001.output)[2])
	});



    test(ReadVendorProductServiceData.READ_VENDORPRODUCT_TS001_TC002.description, async () => {

        const output = await ReadVendorProductService.readVendorProducts(
            ReadVendorProductServiceData.READ_VENDORPRODUCT_TS001_TC002.input.databaseConnector,
            ReadVendorProductServiceData.READ_VENDORPRODUCT_TS001_TC002.input.apiID,
            ReadVendorProductServiceData.READ_VENDORPRODUCT_TS001_TC002.input.config,
            ReadVendorProductServiceData.READ_VENDORPRODUCT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorProductServiceData.READ_VENDORPRODUCT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadVendorProductServiceData.READ_VENDORPRODUCT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadVendorProductServiceData.READ_VENDORPRODUCT_TS001_TC002.output.message)        
	});



    test(ReadVendorProductServiceData.READ_VENDORPRODUCT_TS001_TC003.description, async () => {

        const output = await ReadVendorProductService.readVendorProducts(
            ReadVendorProductServiceData.READ_VENDORPRODUCT_TS001_TC003.input.databaseConnector,
            ReadVendorProductServiceData.READ_VENDORPRODUCT_TS001_TC003.input.apiID,
            ReadVendorProductServiceData.READ_VENDORPRODUCT_TS001_TC003.input.config,
            ReadVendorProductServiceData.READ_VENDORPRODUCT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorProductServiceData.READ_VENDORPRODUCT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadVendorProductServiceData.READ_VENDORPRODUCT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.vendorproduct.ts.002] | FunctionPath : [src/services/vendor/read.vendorproduct.service.js/readOneVendorProduct()]", () => {


	test(ReadVendorProductServiceData.READ_ONE_VENDORPRODUCT_TS002_TC001.description, async () => {

        const output = await ReadVendorProductService.readOneVendorProduct(
            ReadVendorProductServiceData.READ_ONE_VENDORPRODUCT_TS002_TC001.input.databaseConnector,
            ReadVendorProductServiceData.READ_ONE_VENDORPRODUCT_TS002_TC001.input.apiID,
            ReadVendorProductServiceData.READ_ONE_VENDORPRODUCT_TS002_TC001.input.config,
            ReadVendorProductServiceData.READ_ONE_VENDORPRODUCT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorProductServiceData.READ_ONE_VENDORPRODUCT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorProductServiceData.READ_ONE_VENDORPRODUCT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorProductServiceData.READ_ONE_VENDORPRODUCT_TS002_TC001.output)[2])
	});



    test(ReadVendorProductServiceData.READ_ONE_VENDORPRODUCT_TS002_TC002.description, async () => {

        const output = await ReadVendorProductService.readOneVendorProduct(
            ReadVendorProductServiceData.READ_ONE_VENDORPRODUCT_TS002_TC002.input.databaseConnector,
            ReadVendorProductServiceData.READ_ONE_VENDORPRODUCT_TS002_TC002.input.apiID,
            ReadVendorProductServiceData.READ_ONE_VENDORPRODUCT_TS002_TC002.input.config,
            ReadVendorProductServiceData.READ_ONE_VENDORPRODUCT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorProductServiceData.READ_ONE_VENDORPRODUCT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadVendorProductServiceData.READ_ONE_VENDORPRODUCT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadVendorProductServiceData.READ_ONE_VENDORPRODUCT_TS002_TC002.output.message)        
	});



    test(ReadVendorProductServiceData.READ_ONE_VENDORPRODUCT_TS002_TC003.description, async () => {

        const output = await ReadVendorProductService.readOneVendorProduct(
            ReadVendorProductServiceData.READ_ONE_VENDORPRODUCT_TS002_TC003.input.databaseConnector,
            ReadVendorProductServiceData.READ_ONE_VENDORPRODUCT_TS002_TC003.input.apiID,
            ReadVendorProductServiceData.READ_ONE_VENDORPRODUCT_TS002_TC003.input.config,
            ReadVendorProductServiceData.READ_ONE_VENDORPRODUCT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorProductServiceData.READ_ONE_VENDORPRODUCT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadVendorProductServiceData.READ_ONE_VENDORPRODUCT_TS002_TC003.output.message)        
	});

});