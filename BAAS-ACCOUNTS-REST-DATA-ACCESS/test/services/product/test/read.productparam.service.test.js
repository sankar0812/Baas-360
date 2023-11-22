/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read ProductParam service class
**/

/**
 * Importing all required modules here
 */

const readProductParamServiceData = require("../data/read.productparam.service.data")
const readProductParamService = require("../../../../src/services/product/read.productparam.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadProductParamService = new readProductParamService();
const ReadProductParamServiceData = new readProductParamServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.productparam.ts.001] | FunctionPath : [src/services/product/read.contianer.service.js/readProductParams()]", () => {


	test(ReadProductParamServiceData.READ_PRODUCTPARAM_TS001_TC001.description, async () => {

        const output = await ReadProductParamService.readProductParams(
            ReadProductParamServiceData.READ_PRODUCTPARAM_TS001_TC001.input.databaseConnector,
            ReadProductParamServiceData.READ_PRODUCTPARAM_TS001_TC001.input.apiID,
            ReadProductParamServiceData.READ_PRODUCTPARAM_TS001_TC001.input.config,
            ReadProductParamServiceData.READ_PRODUCTPARAM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProductParamServiceData.READ_PRODUCTPARAM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProductParamServiceData.READ_PRODUCTPARAM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProductParamServiceData.READ_PRODUCTPARAM_TS001_TC001.output)[2])
	});



    test(ReadProductParamServiceData.READ_PRODUCTPARAM_TS001_TC002.description, async () => {

        const output = await ReadProductParamService.readProductParams(
            ReadProductParamServiceData.READ_PRODUCTPARAM_TS001_TC002.input.databaseConnector,
            ReadProductParamServiceData.READ_PRODUCTPARAM_TS001_TC002.input.apiID,
            ReadProductParamServiceData.READ_PRODUCTPARAM_TS001_TC002.input.config,
            ReadProductParamServiceData.READ_PRODUCTPARAM_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadProductParamServiceData.READ_PRODUCTPARAM_TS001_TC002.output.data)
        expect(output.status).toBe(ReadProductParamServiceData.READ_PRODUCTPARAM_TS001_TC002.output.status)
        expect(output.message).toBe(ReadProductParamServiceData.READ_PRODUCTPARAM_TS001_TC002.output.message)        
	});



    test(ReadProductParamServiceData.READ_PRODUCTPARAM_TS001_TC003.description, async () => {

        const output = await ReadProductParamService.readProductParams(
            ReadProductParamServiceData.READ_PRODUCTPARAM_TS001_TC003.input.databaseConnector,
            ReadProductParamServiceData.READ_PRODUCTPARAM_TS001_TC003.input.apiID,
            ReadProductParamServiceData.READ_PRODUCTPARAM_TS001_TC003.input.config,
            ReadProductParamServiceData.READ_PRODUCTPARAM_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadProductParamServiceData.READ_PRODUCTPARAM_TS001_TC003.output.status)
        expect(output.message).toBe(ReadProductParamServiceData.READ_PRODUCTPARAM_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.productparam.ts.002] | FunctionPath : [src/services/product/read.productparam.service.js/readOneProductParam()]", () => {


	test(ReadProductParamServiceData.READ_ONE_PRODUCTPARAM_TS002_TC001.description, async () => {

        const output = await ReadProductParamService.readOneProductParam(
            ReadProductParamServiceData.READ_ONE_PRODUCTPARAM_TS002_TC001.input.databaseConnector,
            ReadProductParamServiceData.READ_ONE_PRODUCTPARAM_TS002_TC001.input.apiID,
            ReadProductParamServiceData.READ_ONE_PRODUCTPARAM_TS002_TC001.input.config,
            ReadProductParamServiceData.READ_ONE_PRODUCTPARAM_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProductParamServiceData.READ_ONE_PRODUCTPARAM_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProductParamServiceData.READ_ONE_PRODUCTPARAM_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProductParamServiceData.READ_ONE_PRODUCTPARAM_TS002_TC001.output)[2])
	});



    test(ReadProductParamServiceData.READ_ONE_PRODUCTPARAM_TS002_TC002.description, async () => {

        const output = await ReadProductParamService.readOneProductParam(
            ReadProductParamServiceData.READ_ONE_PRODUCTPARAM_TS002_TC002.input.databaseConnector,
            ReadProductParamServiceData.READ_ONE_PRODUCTPARAM_TS002_TC002.input.apiID,
            ReadProductParamServiceData.READ_ONE_PRODUCTPARAM_TS002_TC002.input.config,
            ReadProductParamServiceData.READ_ONE_PRODUCTPARAM_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadProductParamServiceData.READ_ONE_PRODUCTPARAM_TS002_TC002.output.data)
        expect(output.status).toBe(ReadProductParamServiceData.READ_ONE_PRODUCTPARAM_TS002_TC002.output.status)
        expect(output.message).toBe(ReadProductParamServiceData.READ_ONE_PRODUCTPARAM_TS002_TC002.output.message)        
	});



    test(ReadProductParamServiceData.READ_ONE_PRODUCTPARAM_TS002_TC003.description, async () => {

        const output = await ReadProductParamService.readOneProductParam(
            ReadProductParamServiceData.READ_ONE_PRODUCTPARAM_TS002_TC003.input.databaseConnector,
            ReadProductParamServiceData.READ_ONE_PRODUCTPARAM_TS002_TC003.input.apiID,
            ReadProductParamServiceData.READ_ONE_PRODUCTPARAM_TS002_TC003.input.config,
            ReadProductParamServiceData.READ_ONE_PRODUCTPARAM_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadProductParamServiceData.READ_ONE_PRODUCTPARAM_TS002_TC003.output.status)
        expect(output.message).toBe(ReadProductParamServiceData.READ_ONE_PRODUCTPARAM_TS002_TC003.output.message)        
	});

});