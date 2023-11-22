/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read ProductBundle service class
**/

/**
 * Importing all required modules here
 */

const readProductBundleServiceData = require("../data/read.productbundle.service.data")
const readProductBundleService = require("../../../../src/services/product/read.productbundle.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadProductBundleService = new readProductBundleService();
const ReadProductBundleServiceData = new readProductBundleServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productbundle.ts.001] | FunctionPath : [src/services/product/read.contianer.service.js/readProductBundles()]", () => {


	test(ReadProductBundleServiceData.READ_PRODUCTBUNDLE_TS001_TC001.description, async () => {

        const output = await ReadProductBundleService.readProductBundles(
            ReadProductBundleServiceData.READ_PRODUCTBUNDLE_TS001_TC001.input.databaseConnector,
            ReadProductBundleServiceData.READ_PRODUCTBUNDLE_TS001_TC001.input.apiID,
            ReadProductBundleServiceData.READ_PRODUCTBUNDLE_TS001_TC001.input.config,
            ReadProductBundleServiceData.READ_PRODUCTBUNDLE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProductBundleServiceData.READ_PRODUCTBUNDLE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProductBundleServiceData.READ_PRODUCTBUNDLE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProductBundleServiceData.READ_PRODUCTBUNDLE_TS001_TC001.output)[2])
	});



    test(ReadProductBundleServiceData.READ_PRODUCTBUNDLE_TS001_TC002.description, async () => {

        const output = await ReadProductBundleService.readProductBundles(
            ReadProductBundleServiceData.READ_PRODUCTBUNDLE_TS001_TC002.input.databaseConnector,
            ReadProductBundleServiceData.READ_PRODUCTBUNDLE_TS001_TC002.input.apiID,
            ReadProductBundleServiceData.READ_PRODUCTBUNDLE_TS001_TC002.input.config,
            ReadProductBundleServiceData.READ_PRODUCTBUNDLE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadProductBundleServiceData.READ_PRODUCTBUNDLE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadProductBundleServiceData.READ_PRODUCTBUNDLE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadProductBundleServiceData.READ_PRODUCTBUNDLE_TS001_TC002.output.message)        
	});



    test(ReadProductBundleServiceData.READ_PRODUCTBUNDLE_TS001_TC003.description, async () => {

        const output = await ReadProductBundleService.readProductBundles(
            ReadProductBundleServiceData.READ_PRODUCTBUNDLE_TS001_TC003.input.databaseConnector,
            ReadProductBundleServiceData.READ_PRODUCTBUNDLE_TS001_TC003.input.apiID,
            ReadProductBundleServiceData.READ_PRODUCTBUNDLE_TS001_TC003.input.config,
            ReadProductBundleServiceData.READ_PRODUCTBUNDLE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadProductBundleServiceData.READ_PRODUCTBUNDLE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadProductBundleServiceData.READ_PRODUCTBUNDLE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.productbundle.ts.002] | FunctionPath : [src/services/product/read.productbundle.service.js/readOneProductBundle()]", () => {


	test(ReadProductBundleServiceData.READ_ONE_PRODUCTBUNDLE_TS002_TC001.description, async () => {

        const output = await ReadProductBundleService.readOneProductBundle(
            ReadProductBundleServiceData.READ_ONE_PRODUCTBUNDLE_TS002_TC001.input.databaseConnector,
            ReadProductBundleServiceData.READ_ONE_PRODUCTBUNDLE_TS002_TC001.input.apiID,
            ReadProductBundleServiceData.READ_ONE_PRODUCTBUNDLE_TS002_TC001.input.config,
            ReadProductBundleServiceData.READ_ONE_PRODUCTBUNDLE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProductBundleServiceData.READ_ONE_PRODUCTBUNDLE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProductBundleServiceData.READ_ONE_PRODUCTBUNDLE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProductBundleServiceData.READ_ONE_PRODUCTBUNDLE_TS002_TC001.output)[2])
	});



    test(ReadProductBundleServiceData.READ_ONE_PRODUCTBUNDLE_TS002_TC002.description, async () => {

        const output = await ReadProductBundleService.readOneProductBundle(
            ReadProductBundleServiceData.READ_ONE_PRODUCTBUNDLE_TS002_TC002.input.databaseConnector,
            ReadProductBundleServiceData.READ_ONE_PRODUCTBUNDLE_TS002_TC002.input.apiID,
            ReadProductBundleServiceData.READ_ONE_PRODUCTBUNDLE_TS002_TC002.input.config,
            ReadProductBundleServiceData.READ_ONE_PRODUCTBUNDLE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadProductBundleServiceData.READ_ONE_PRODUCTBUNDLE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadProductBundleServiceData.READ_ONE_PRODUCTBUNDLE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadProductBundleServiceData.READ_ONE_PRODUCTBUNDLE_TS002_TC002.output.message)        
	});



    test(ReadProductBundleServiceData.READ_ONE_PRODUCTBUNDLE_TS002_TC003.description, async () => {

        const output = await ReadProductBundleService.readOneProductBundle(
            ReadProductBundleServiceData.READ_ONE_PRODUCTBUNDLE_TS002_TC003.input.databaseConnector,
            ReadProductBundleServiceData.READ_ONE_PRODUCTBUNDLE_TS002_TC003.input.apiID,
            ReadProductBundleServiceData.READ_ONE_PRODUCTBUNDLE_TS002_TC003.input.config,
            ReadProductBundleServiceData.READ_ONE_PRODUCTBUNDLE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadProductBundleServiceData.READ_ONE_PRODUCTBUNDLE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadProductBundleServiceData.READ_ONE_PRODUCTBUNDLE_TS002_TC003.output.message)        
	});

});