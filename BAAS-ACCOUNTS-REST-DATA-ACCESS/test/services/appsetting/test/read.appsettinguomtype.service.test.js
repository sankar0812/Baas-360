/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read AppSettingUomType service class
**/

/**
 * Importing all required modules here
 */

const readAppSettingUomTypeServiceData = require("../data/read.appsettinguomtype.service.data")
const readAppSettingUomTypeService = require("../../../../src/services/appsetting/read.appsettinguomtype.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadAppSettingUomTypeService = new readAppSettingUomTypeService();
const ReadAppSettingUomTypeServiceData = new readAppSettingUomTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.appsettinguomtype.ts.001] | FunctionPath : [src/services/appsetting/read.contianer.service.js/readAppSettingUomTypes()]", () => {


	test(ReadAppSettingUomTypeServiceData.READ_APPSETTINGUOMTYPE_TS001_TC001.description, async () => {

        const output = await ReadAppSettingUomTypeService.readAppSettingUomTypes(
            ReadAppSettingUomTypeServiceData.READ_APPSETTINGUOMTYPE_TS001_TC001.input.databaseConnector,
            ReadAppSettingUomTypeServiceData.READ_APPSETTINGUOMTYPE_TS001_TC001.input.apiID,
            ReadAppSettingUomTypeServiceData.READ_APPSETTINGUOMTYPE_TS001_TC001.input.config,
            ReadAppSettingUomTypeServiceData.READ_APPSETTINGUOMTYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAppSettingUomTypeServiceData.READ_APPSETTINGUOMTYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAppSettingUomTypeServiceData.READ_APPSETTINGUOMTYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAppSettingUomTypeServiceData.READ_APPSETTINGUOMTYPE_TS001_TC001.output)[2])
	});



    test(ReadAppSettingUomTypeServiceData.READ_APPSETTINGUOMTYPE_TS001_TC002.description, async () => {

        const output = await ReadAppSettingUomTypeService.readAppSettingUomTypes(
            ReadAppSettingUomTypeServiceData.READ_APPSETTINGUOMTYPE_TS001_TC002.input.databaseConnector,
            ReadAppSettingUomTypeServiceData.READ_APPSETTINGUOMTYPE_TS001_TC002.input.apiID,
            ReadAppSettingUomTypeServiceData.READ_APPSETTINGUOMTYPE_TS001_TC002.input.config,
            ReadAppSettingUomTypeServiceData.READ_APPSETTINGUOMTYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadAppSettingUomTypeServiceData.READ_APPSETTINGUOMTYPE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadAppSettingUomTypeServiceData.READ_APPSETTINGUOMTYPE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadAppSettingUomTypeServiceData.READ_APPSETTINGUOMTYPE_TS001_TC002.output.message)        
	});



    test(ReadAppSettingUomTypeServiceData.READ_APPSETTINGUOMTYPE_TS001_TC003.description, async () => {

        const output = await ReadAppSettingUomTypeService.readAppSettingUomTypes(
            ReadAppSettingUomTypeServiceData.READ_APPSETTINGUOMTYPE_TS001_TC003.input.databaseConnector,
            ReadAppSettingUomTypeServiceData.READ_APPSETTINGUOMTYPE_TS001_TC003.input.apiID,
            ReadAppSettingUomTypeServiceData.READ_APPSETTINGUOMTYPE_TS001_TC003.input.config,
            ReadAppSettingUomTypeServiceData.READ_APPSETTINGUOMTYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadAppSettingUomTypeServiceData.READ_APPSETTINGUOMTYPE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadAppSettingUomTypeServiceData.READ_APPSETTINGUOMTYPE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.appsettinguomtype.ts.002] | FunctionPath : [src/services/appsetting/read.appsettinguomtype.service.js/readOneAppSettingUomType()]", () => {


	test(ReadAppSettingUomTypeServiceData.READ_ONE_APPSETTINGUOMTYPE_TS002_TC001.description, async () => {

        const output = await ReadAppSettingUomTypeService.readOneAppSettingUomType(
            ReadAppSettingUomTypeServiceData.READ_ONE_APPSETTINGUOMTYPE_TS002_TC001.input.databaseConnector,
            ReadAppSettingUomTypeServiceData.READ_ONE_APPSETTINGUOMTYPE_TS002_TC001.input.apiID,
            ReadAppSettingUomTypeServiceData.READ_ONE_APPSETTINGUOMTYPE_TS002_TC001.input.config,
            ReadAppSettingUomTypeServiceData.READ_ONE_APPSETTINGUOMTYPE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAppSettingUomTypeServiceData.READ_ONE_APPSETTINGUOMTYPE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAppSettingUomTypeServiceData.READ_ONE_APPSETTINGUOMTYPE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAppSettingUomTypeServiceData.READ_ONE_APPSETTINGUOMTYPE_TS002_TC001.output)[2])
	});



    test(ReadAppSettingUomTypeServiceData.READ_ONE_APPSETTINGUOMTYPE_TS002_TC002.description, async () => {

        const output = await ReadAppSettingUomTypeService.readOneAppSettingUomType(
            ReadAppSettingUomTypeServiceData.READ_ONE_APPSETTINGUOMTYPE_TS002_TC002.input.databaseConnector,
            ReadAppSettingUomTypeServiceData.READ_ONE_APPSETTINGUOMTYPE_TS002_TC002.input.apiID,
            ReadAppSettingUomTypeServiceData.READ_ONE_APPSETTINGUOMTYPE_TS002_TC002.input.config,
            ReadAppSettingUomTypeServiceData.READ_ONE_APPSETTINGUOMTYPE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadAppSettingUomTypeServiceData.READ_ONE_APPSETTINGUOMTYPE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadAppSettingUomTypeServiceData.READ_ONE_APPSETTINGUOMTYPE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadAppSettingUomTypeServiceData.READ_ONE_APPSETTINGUOMTYPE_TS002_TC002.output.message)        
	});



    test(ReadAppSettingUomTypeServiceData.READ_ONE_APPSETTINGUOMTYPE_TS002_TC003.description, async () => {

        const output = await ReadAppSettingUomTypeService.readOneAppSettingUomType(
            ReadAppSettingUomTypeServiceData.READ_ONE_APPSETTINGUOMTYPE_TS002_TC003.input.databaseConnector,
            ReadAppSettingUomTypeServiceData.READ_ONE_APPSETTINGUOMTYPE_TS002_TC003.input.apiID,
            ReadAppSettingUomTypeServiceData.READ_ONE_APPSETTINGUOMTYPE_TS002_TC003.input.config,
            ReadAppSettingUomTypeServiceData.READ_ONE_APPSETTINGUOMTYPE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadAppSettingUomTypeServiceData.READ_ONE_APPSETTINGUOMTYPE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadAppSettingUomTypeServiceData.READ_ONE_APPSETTINGUOMTYPE_TS002_TC003.output.message)        
	});

});