/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read AppSettingUom service class
**/

/**
 * Importing all required modules here
 */

const readAppSettingUomServiceData = require("../data/read.appsettinguom.service.data")
const readAppSettingUomService = require("../../../../src/services/appsetting/read.appsettinguom.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadAppSettingUomService = new readAppSettingUomService();
const ReadAppSettingUomServiceData = new readAppSettingUomServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.appsettinguom.ts.001] | FunctionPath : [src/services/appsetting/read.contianer.service.js/readAppSettingUoms()]", () => {


	test(ReadAppSettingUomServiceData.READ_APPSETTINGUOM_TS001_TC001.description, async () => {

        const output = await ReadAppSettingUomService.readAppSettingUoms(
            ReadAppSettingUomServiceData.READ_APPSETTINGUOM_TS001_TC001.input.databaseConnector,
            ReadAppSettingUomServiceData.READ_APPSETTINGUOM_TS001_TC001.input.apiID,
            ReadAppSettingUomServiceData.READ_APPSETTINGUOM_TS001_TC001.input.config,
            ReadAppSettingUomServiceData.READ_APPSETTINGUOM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAppSettingUomServiceData.READ_APPSETTINGUOM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAppSettingUomServiceData.READ_APPSETTINGUOM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAppSettingUomServiceData.READ_APPSETTINGUOM_TS001_TC001.output)[2])
	});



    test(ReadAppSettingUomServiceData.READ_APPSETTINGUOM_TS001_TC002.description, async () => {

        const output = await ReadAppSettingUomService.readAppSettingUoms(
            ReadAppSettingUomServiceData.READ_APPSETTINGUOM_TS001_TC002.input.databaseConnector,
            ReadAppSettingUomServiceData.READ_APPSETTINGUOM_TS001_TC002.input.apiID,
            ReadAppSettingUomServiceData.READ_APPSETTINGUOM_TS001_TC002.input.config,
            ReadAppSettingUomServiceData.READ_APPSETTINGUOM_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadAppSettingUomServiceData.READ_APPSETTINGUOM_TS001_TC002.output.data)
        expect(output.status).toBe(ReadAppSettingUomServiceData.READ_APPSETTINGUOM_TS001_TC002.output.status)
        expect(output.message).toBe(ReadAppSettingUomServiceData.READ_APPSETTINGUOM_TS001_TC002.output.message)        
	});



    test(ReadAppSettingUomServiceData.READ_APPSETTINGUOM_TS001_TC003.description, async () => {

        const output = await ReadAppSettingUomService.readAppSettingUoms(
            ReadAppSettingUomServiceData.READ_APPSETTINGUOM_TS001_TC003.input.databaseConnector,
            ReadAppSettingUomServiceData.READ_APPSETTINGUOM_TS001_TC003.input.apiID,
            ReadAppSettingUomServiceData.READ_APPSETTINGUOM_TS001_TC003.input.config,
            ReadAppSettingUomServiceData.READ_APPSETTINGUOM_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadAppSettingUomServiceData.READ_APPSETTINGUOM_TS001_TC003.output.status)
        expect(output.message).toBe(ReadAppSettingUomServiceData.READ_APPSETTINGUOM_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.appsettinguom.ts.002] | FunctionPath : [src/services/appsetting/read.appsettinguom.service.js/readOneAppSettingUom()]", () => {


	test(ReadAppSettingUomServiceData.READ_ONE_APPSETTINGUOM_TS002_TC001.description, async () => {

        const output = await ReadAppSettingUomService.readOneAppSettingUom(
            ReadAppSettingUomServiceData.READ_ONE_APPSETTINGUOM_TS002_TC001.input.databaseConnector,
            ReadAppSettingUomServiceData.READ_ONE_APPSETTINGUOM_TS002_TC001.input.apiID,
            ReadAppSettingUomServiceData.READ_ONE_APPSETTINGUOM_TS002_TC001.input.config,
            ReadAppSettingUomServiceData.READ_ONE_APPSETTINGUOM_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAppSettingUomServiceData.READ_ONE_APPSETTINGUOM_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAppSettingUomServiceData.READ_ONE_APPSETTINGUOM_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAppSettingUomServiceData.READ_ONE_APPSETTINGUOM_TS002_TC001.output)[2])
	});



    test(ReadAppSettingUomServiceData.READ_ONE_APPSETTINGUOM_TS002_TC002.description, async () => {

        const output = await ReadAppSettingUomService.readOneAppSettingUom(
            ReadAppSettingUomServiceData.READ_ONE_APPSETTINGUOM_TS002_TC002.input.databaseConnector,
            ReadAppSettingUomServiceData.READ_ONE_APPSETTINGUOM_TS002_TC002.input.apiID,
            ReadAppSettingUomServiceData.READ_ONE_APPSETTINGUOM_TS002_TC002.input.config,
            ReadAppSettingUomServiceData.READ_ONE_APPSETTINGUOM_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadAppSettingUomServiceData.READ_ONE_APPSETTINGUOM_TS002_TC002.output.data)
        expect(output.status).toBe(ReadAppSettingUomServiceData.READ_ONE_APPSETTINGUOM_TS002_TC002.output.status)
        expect(output.message).toBe(ReadAppSettingUomServiceData.READ_ONE_APPSETTINGUOM_TS002_TC002.output.message)        
	});



    test(ReadAppSettingUomServiceData.READ_ONE_APPSETTINGUOM_TS002_TC003.description, async () => {

        const output = await ReadAppSettingUomService.readOneAppSettingUom(
            ReadAppSettingUomServiceData.READ_ONE_APPSETTINGUOM_TS002_TC003.input.databaseConnector,
            ReadAppSettingUomServiceData.READ_ONE_APPSETTINGUOM_TS002_TC003.input.apiID,
            ReadAppSettingUomServiceData.READ_ONE_APPSETTINGUOM_TS002_TC003.input.config,
            ReadAppSettingUomServiceData.READ_ONE_APPSETTINGUOM_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadAppSettingUomServiceData.READ_ONE_APPSETTINGUOM_TS002_TC003.output.status)
        expect(output.message).toBe(ReadAppSettingUomServiceData.READ_ONE_APPSETTINGUOM_TS002_TC003.output.message)        
	});

});