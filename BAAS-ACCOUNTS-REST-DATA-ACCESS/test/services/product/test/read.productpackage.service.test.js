/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read ProductPackage service class
**/

/**
 * Importing all required modules here
 */

const readProductPackageServiceData = require("../data/read.productpackage.service.data")
const readProductPackageService = require("../../../../src/services/product/read.productpackage.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadProductPackageService = new readProductPackageService();
const ReadProductPackageServiceData = new readProductPackageServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productpackage.ts.001] | FunctionPath : [src/services/product/read.contianer.service.js/readProductPackages()]", () => {


	test(ReadProductPackageServiceData.READ_PRODUCTPACKAGE_TS001_TC001.description, async () => {

        const output = await ReadProductPackageService.readProductPackages(
            ReadProductPackageServiceData.READ_PRODUCTPACKAGE_TS001_TC001.input.databaseConnector,
            ReadProductPackageServiceData.READ_PRODUCTPACKAGE_TS001_TC001.input.apiID,
            ReadProductPackageServiceData.READ_PRODUCTPACKAGE_TS001_TC001.input.config,
            ReadProductPackageServiceData.READ_PRODUCTPACKAGE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProductPackageServiceData.READ_PRODUCTPACKAGE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProductPackageServiceData.READ_PRODUCTPACKAGE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProductPackageServiceData.READ_PRODUCTPACKAGE_TS001_TC001.output)[2])
	});



    test(ReadProductPackageServiceData.READ_PRODUCTPACKAGE_TS001_TC002.description, async () => {

        const output = await ReadProductPackageService.readProductPackages(
            ReadProductPackageServiceData.READ_PRODUCTPACKAGE_TS001_TC002.input.databaseConnector,
            ReadProductPackageServiceData.READ_PRODUCTPACKAGE_TS001_TC002.input.apiID,
            ReadProductPackageServiceData.READ_PRODUCTPACKAGE_TS001_TC002.input.config,
            ReadProductPackageServiceData.READ_PRODUCTPACKAGE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadProductPackageServiceData.READ_PRODUCTPACKAGE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadProductPackageServiceData.READ_PRODUCTPACKAGE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadProductPackageServiceData.READ_PRODUCTPACKAGE_TS001_TC002.output.message)        
	});



    test(ReadProductPackageServiceData.READ_PRODUCTPACKAGE_TS001_TC003.description, async () => {

        const output = await ReadProductPackageService.readProductPackages(
            ReadProductPackageServiceData.READ_PRODUCTPACKAGE_TS001_TC003.input.databaseConnector,
            ReadProductPackageServiceData.READ_PRODUCTPACKAGE_TS001_TC003.input.apiID,
            ReadProductPackageServiceData.READ_PRODUCTPACKAGE_TS001_TC003.input.config,
            ReadProductPackageServiceData.READ_PRODUCTPACKAGE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadProductPackageServiceData.READ_PRODUCTPACKAGE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadProductPackageServiceData.READ_PRODUCTPACKAGE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.productpackage.ts.002] | FunctionPath : [src/services/product/read.productpackage.service.js/readOneProductPackage()]", () => {


	test(ReadProductPackageServiceData.READ_ONE_PRODUCTPACKAGE_TS002_TC001.description, async () => {

        const output = await ReadProductPackageService.readOneProductPackage(
            ReadProductPackageServiceData.READ_ONE_PRODUCTPACKAGE_TS002_TC001.input.databaseConnector,
            ReadProductPackageServiceData.READ_ONE_PRODUCTPACKAGE_TS002_TC001.input.apiID,
            ReadProductPackageServiceData.READ_ONE_PRODUCTPACKAGE_TS002_TC001.input.config,
            ReadProductPackageServiceData.READ_ONE_PRODUCTPACKAGE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProductPackageServiceData.READ_ONE_PRODUCTPACKAGE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProductPackageServiceData.READ_ONE_PRODUCTPACKAGE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProductPackageServiceData.READ_ONE_PRODUCTPACKAGE_TS002_TC001.output)[2])
	});



    test(ReadProductPackageServiceData.READ_ONE_PRODUCTPACKAGE_TS002_TC002.description, async () => {

        const output = await ReadProductPackageService.readOneProductPackage(
            ReadProductPackageServiceData.READ_ONE_PRODUCTPACKAGE_TS002_TC002.input.databaseConnector,
            ReadProductPackageServiceData.READ_ONE_PRODUCTPACKAGE_TS002_TC002.input.apiID,
            ReadProductPackageServiceData.READ_ONE_PRODUCTPACKAGE_TS002_TC002.input.config,
            ReadProductPackageServiceData.READ_ONE_PRODUCTPACKAGE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadProductPackageServiceData.READ_ONE_PRODUCTPACKAGE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadProductPackageServiceData.READ_ONE_PRODUCTPACKAGE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadProductPackageServiceData.READ_ONE_PRODUCTPACKAGE_TS002_TC002.output.message)        
	});



    test(ReadProductPackageServiceData.READ_ONE_PRODUCTPACKAGE_TS002_TC003.description, async () => {

        const output = await ReadProductPackageService.readOneProductPackage(
            ReadProductPackageServiceData.READ_ONE_PRODUCTPACKAGE_TS002_TC003.input.databaseConnector,
            ReadProductPackageServiceData.READ_ONE_PRODUCTPACKAGE_TS002_TC003.input.apiID,
            ReadProductPackageServiceData.READ_ONE_PRODUCTPACKAGE_TS002_TC003.input.config,
            ReadProductPackageServiceData.READ_ONE_PRODUCTPACKAGE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadProductPackageServiceData.READ_ONE_PRODUCTPACKAGE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadProductPackageServiceData.READ_ONE_PRODUCTPACKAGE_TS002_TC003.output.message)        
	});

});