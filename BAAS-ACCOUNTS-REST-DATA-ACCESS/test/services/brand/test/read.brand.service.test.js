/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Brand service class
**/

/**
 * Importing all required modules here
 */

const readBrandServiceData = require("../data/read.brand.service.data")
const readBrandService = require("../../../../src/services/brand/read.brand.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadBrandService = new readBrandService();
const ReadBrandServiceData = new readBrandServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.brand.ts.001] | FunctionPath : [src/services/brand/read.contianer.service.js/readBrands()]", () => {


	test(ReadBrandServiceData.READ_BRAND_TS001_TC001.description, async () => {

        const output = await ReadBrandService.readBrands(
            ReadBrandServiceData.READ_BRAND_TS001_TC001.input.databaseConnector,
            ReadBrandServiceData.READ_BRAND_TS001_TC001.input.apiID,
            ReadBrandServiceData.READ_BRAND_TS001_TC001.input.config,
            ReadBrandServiceData.READ_BRAND_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadBrandServiceData.READ_BRAND_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadBrandServiceData.READ_BRAND_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadBrandServiceData.READ_BRAND_TS001_TC001.output)[2])
	});



    test(ReadBrandServiceData.READ_BRAND_TS001_TC002.description, async () => {

        const output = await ReadBrandService.readBrands(
            ReadBrandServiceData.READ_BRAND_TS001_TC002.input.databaseConnector,
            ReadBrandServiceData.READ_BRAND_TS001_TC002.input.apiID,
            ReadBrandServiceData.READ_BRAND_TS001_TC002.input.config,
            ReadBrandServiceData.READ_BRAND_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadBrandServiceData.READ_BRAND_TS001_TC002.output.data)
        expect(output.status).toBe(ReadBrandServiceData.READ_BRAND_TS001_TC002.output.status)
        expect(output.message).toBe(ReadBrandServiceData.READ_BRAND_TS001_TC002.output.message)        
	});



    test(ReadBrandServiceData.READ_BRAND_TS001_TC003.description, async () => {

        const output = await ReadBrandService.readBrands(
            ReadBrandServiceData.READ_BRAND_TS001_TC003.input.databaseConnector,
            ReadBrandServiceData.READ_BRAND_TS001_TC003.input.apiID,
            ReadBrandServiceData.READ_BRAND_TS001_TC003.input.config,
            ReadBrandServiceData.READ_BRAND_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadBrandServiceData.READ_BRAND_TS001_TC003.output.status)
        expect(output.message).toBe(ReadBrandServiceData.READ_BRAND_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.brand.ts.002] | FunctionPath : [src/services/brand/read.brand.service.js/readOneBrand()]", () => {


	test(ReadBrandServiceData.READ_ONE_BRAND_TS002_TC001.description, async () => {

        const output = await ReadBrandService.readOneBrand(
            ReadBrandServiceData.READ_ONE_BRAND_TS002_TC001.input.databaseConnector,
            ReadBrandServiceData.READ_ONE_BRAND_TS002_TC001.input.apiID,
            ReadBrandServiceData.READ_ONE_BRAND_TS002_TC001.input.config,
            ReadBrandServiceData.READ_ONE_BRAND_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadBrandServiceData.READ_ONE_BRAND_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadBrandServiceData.READ_ONE_BRAND_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadBrandServiceData.READ_ONE_BRAND_TS002_TC001.output)[2])
	});



    test(ReadBrandServiceData.READ_ONE_BRAND_TS002_TC002.description, async () => {

        const output = await ReadBrandService.readOneBrand(
            ReadBrandServiceData.READ_ONE_BRAND_TS002_TC002.input.databaseConnector,
            ReadBrandServiceData.READ_ONE_BRAND_TS002_TC002.input.apiID,
            ReadBrandServiceData.READ_ONE_BRAND_TS002_TC002.input.config,
            ReadBrandServiceData.READ_ONE_BRAND_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadBrandServiceData.READ_ONE_BRAND_TS002_TC002.output.data)
        expect(output.status).toBe(ReadBrandServiceData.READ_ONE_BRAND_TS002_TC002.output.status)
        expect(output.message).toBe(ReadBrandServiceData.READ_ONE_BRAND_TS002_TC002.output.message)        
	});



    test(ReadBrandServiceData.READ_ONE_BRAND_TS002_TC003.description, async () => {

        const output = await ReadBrandService.readOneBrand(
            ReadBrandServiceData.READ_ONE_BRAND_TS002_TC003.input.databaseConnector,
            ReadBrandServiceData.READ_ONE_BRAND_TS002_TC003.input.apiID,
            ReadBrandServiceData.READ_ONE_BRAND_TS002_TC003.input.config,
            ReadBrandServiceData.READ_ONE_BRAND_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadBrandServiceData.READ_ONE_BRAND_TS002_TC003.output.status)
        expect(output.message).toBe(ReadBrandServiceData.READ_ONE_BRAND_TS002_TC003.output.message)        
	});

});