/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read AppSettingDataType service class
**/

/**
 * Importing all required modules here
 */

const readAppSettingDataTypeServiceData = require("../data/read.appsettingdatatype.service.data")
const readAppSettingDataTypeService = require("../../../../src/services/appsetting/read.appsettingdatatype.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadAppSettingDataTypeService = new readAppSettingDataTypeService();
const ReadAppSettingDataTypeServiceData = new readAppSettingDataTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.appsettingdatatype.ts.001] | FunctionPath : [src/services/appsetting/read.contianer.service.js/readAppSettingDataTypes()]", () => {


	test(ReadAppSettingDataTypeServiceData.READ_APPSETTINGDATATYPE_TS001_TC001.description, async () => {

        const output = await ReadAppSettingDataTypeService.readAppSettingDataTypes(
            ReadAppSettingDataTypeServiceData.READ_APPSETTINGDATATYPE_TS001_TC001.input.databaseConnector,
            ReadAppSettingDataTypeServiceData.READ_APPSETTINGDATATYPE_TS001_TC001.input.apiID,
            ReadAppSettingDataTypeServiceData.READ_APPSETTINGDATATYPE_TS001_TC001.input.config,
            ReadAppSettingDataTypeServiceData.READ_APPSETTINGDATATYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAppSettingDataTypeServiceData.READ_APPSETTINGDATATYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAppSettingDataTypeServiceData.READ_APPSETTINGDATATYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAppSettingDataTypeServiceData.READ_APPSETTINGDATATYPE_TS001_TC001.output)[2])
	});



    test(ReadAppSettingDataTypeServiceData.READ_APPSETTINGDATATYPE_TS001_TC002.description, async () => {

        const output = await ReadAppSettingDataTypeService.readAppSettingDataTypes(
            ReadAppSettingDataTypeServiceData.READ_APPSETTINGDATATYPE_TS001_TC002.input.databaseConnector,
            ReadAppSettingDataTypeServiceData.READ_APPSETTINGDATATYPE_TS001_TC002.input.apiID,
            ReadAppSettingDataTypeServiceData.READ_APPSETTINGDATATYPE_TS001_TC002.input.config,
            ReadAppSettingDataTypeServiceData.READ_APPSETTINGDATATYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadAppSettingDataTypeServiceData.READ_APPSETTINGDATATYPE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadAppSettingDataTypeServiceData.READ_APPSETTINGDATATYPE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadAppSettingDataTypeServiceData.READ_APPSETTINGDATATYPE_TS001_TC002.output.message)        
	});



    test(ReadAppSettingDataTypeServiceData.READ_APPSETTINGDATATYPE_TS001_TC003.description, async () => {

        const output = await ReadAppSettingDataTypeService.readAppSettingDataTypes(
            ReadAppSettingDataTypeServiceData.READ_APPSETTINGDATATYPE_TS001_TC003.input.databaseConnector,
            ReadAppSettingDataTypeServiceData.READ_APPSETTINGDATATYPE_TS001_TC003.input.apiID,
            ReadAppSettingDataTypeServiceData.READ_APPSETTINGDATATYPE_TS001_TC003.input.config,
            ReadAppSettingDataTypeServiceData.READ_APPSETTINGDATATYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadAppSettingDataTypeServiceData.READ_APPSETTINGDATATYPE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadAppSettingDataTypeServiceData.READ_APPSETTINGDATATYPE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.appsettingdatatype.ts.002] | FunctionPath : [src/services/appsetting/read.appsettingdatatype.service.js/readOneAppSettingDataType()]", () => {


	test(ReadAppSettingDataTypeServiceData.READ_ONE_APPSETTINGDATATYPE_TS002_TC001.description, async () => {

        const output = await ReadAppSettingDataTypeService.readOneAppSettingDataType(
            ReadAppSettingDataTypeServiceData.READ_ONE_APPSETTINGDATATYPE_TS002_TC001.input.databaseConnector,
            ReadAppSettingDataTypeServiceData.READ_ONE_APPSETTINGDATATYPE_TS002_TC001.input.apiID,
            ReadAppSettingDataTypeServiceData.READ_ONE_APPSETTINGDATATYPE_TS002_TC001.input.config,
            ReadAppSettingDataTypeServiceData.READ_ONE_APPSETTINGDATATYPE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAppSettingDataTypeServiceData.READ_ONE_APPSETTINGDATATYPE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAppSettingDataTypeServiceData.READ_ONE_APPSETTINGDATATYPE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAppSettingDataTypeServiceData.READ_ONE_APPSETTINGDATATYPE_TS002_TC001.output)[2])
	});



    test(ReadAppSettingDataTypeServiceData.READ_ONE_APPSETTINGDATATYPE_TS002_TC002.description, async () => {

        const output = await ReadAppSettingDataTypeService.readOneAppSettingDataType(
            ReadAppSettingDataTypeServiceData.READ_ONE_APPSETTINGDATATYPE_TS002_TC002.input.databaseConnector,
            ReadAppSettingDataTypeServiceData.READ_ONE_APPSETTINGDATATYPE_TS002_TC002.input.apiID,
            ReadAppSettingDataTypeServiceData.READ_ONE_APPSETTINGDATATYPE_TS002_TC002.input.config,
            ReadAppSettingDataTypeServiceData.READ_ONE_APPSETTINGDATATYPE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadAppSettingDataTypeServiceData.READ_ONE_APPSETTINGDATATYPE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadAppSettingDataTypeServiceData.READ_ONE_APPSETTINGDATATYPE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadAppSettingDataTypeServiceData.READ_ONE_APPSETTINGDATATYPE_TS002_TC002.output.message)        
	});



    test(ReadAppSettingDataTypeServiceData.READ_ONE_APPSETTINGDATATYPE_TS002_TC003.description, async () => {

        const output = await ReadAppSettingDataTypeService.readOneAppSettingDataType(
            ReadAppSettingDataTypeServiceData.READ_ONE_APPSETTINGDATATYPE_TS002_TC003.input.databaseConnector,
            ReadAppSettingDataTypeServiceData.READ_ONE_APPSETTINGDATATYPE_TS002_TC003.input.apiID,
            ReadAppSettingDataTypeServiceData.READ_ONE_APPSETTINGDATATYPE_TS002_TC003.input.config,
            ReadAppSettingDataTypeServiceData.READ_ONE_APPSETTINGDATATYPE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadAppSettingDataTypeServiceData.READ_ONE_APPSETTINGDATATYPE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadAppSettingDataTypeServiceData.READ_ONE_APPSETTINGDATATYPE_TS002_TC003.output.message)        
	});

});