/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read AppSettingNetTerm service class
**/

/**
 * Importing all required modules here
 */

const readAppSettingNetTermServiceData = require("../data/read.appsettingnetterm.service.data")
const readAppSettingNetTermService = require("../../../../src/services/appsetting/read.appsettingnetterm.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadAppSettingNetTermService = new readAppSettingNetTermService();
const ReadAppSettingNetTermServiceData = new readAppSettingNetTermServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.appsettingnetterm.ts.001] | FunctionPath : [src/services/appsetting/read.contianer.service.js/readAppSettingNetTerms()]", () => {


	test(ReadAppSettingNetTermServiceData.READ_APPSETTINGNETTERM_TS001_TC001.description, async () => {

        const output = await ReadAppSettingNetTermService.readAppSettingNetTerms(
            ReadAppSettingNetTermServiceData.READ_APPSETTINGNETTERM_TS001_TC001.input.databaseConnector,
            ReadAppSettingNetTermServiceData.READ_APPSETTINGNETTERM_TS001_TC001.input.apiID,
            ReadAppSettingNetTermServiceData.READ_APPSETTINGNETTERM_TS001_TC001.input.config,
            ReadAppSettingNetTermServiceData.READ_APPSETTINGNETTERM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAppSettingNetTermServiceData.READ_APPSETTINGNETTERM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAppSettingNetTermServiceData.READ_APPSETTINGNETTERM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAppSettingNetTermServiceData.READ_APPSETTINGNETTERM_TS001_TC001.output)[2])
	});



    test(ReadAppSettingNetTermServiceData.READ_APPSETTINGNETTERM_TS001_TC002.description, async () => {

        const output = await ReadAppSettingNetTermService.readAppSettingNetTerms(
            ReadAppSettingNetTermServiceData.READ_APPSETTINGNETTERM_TS001_TC002.input.databaseConnector,
            ReadAppSettingNetTermServiceData.READ_APPSETTINGNETTERM_TS001_TC002.input.apiID,
            ReadAppSettingNetTermServiceData.READ_APPSETTINGNETTERM_TS001_TC002.input.config,
            ReadAppSettingNetTermServiceData.READ_APPSETTINGNETTERM_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadAppSettingNetTermServiceData.READ_APPSETTINGNETTERM_TS001_TC002.output.data)
        expect(output.status).toBe(ReadAppSettingNetTermServiceData.READ_APPSETTINGNETTERM_TS001_TC002.output.status)
        expect(output.message).toBe(ReadAppSettingNetTermServiceData.READ_APPSETTINGNETTERM_TS001_TC002.output.message)        
	});



    test(ReadAppSettingNetTermServiceData.READ_APPSETTINGNETTERM_TS001_TC003.description, async () => {

        const output = await ReadAppSettingNetTermService.readAppSettingNetTerms(
            ReadAppSettingNetTermServiceData.READ_APPSETTINGNETTERM_TS001_TC003.input.databaseConnector,
            ReadAppSettingNetTermServiceData.READ_APPSETTINGNETTERM_TS001_TC003.input.apiID,
            ReadAppSettingNetTermServiceData.READ_APPSETTINGNETTERM_TS001_TC003.input.config,
            ReadAppSettingNetTermServiceData.READ_APPSETTINGNETTERM_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadAppSettingNetTermServiceData.READ_APPSETTINGNETTERM_TS001_TC003.output.status)
        expect(output.message).toBe(ReadAppSettingNetTermServiceData.READ_APPSETTINGNETTERM_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.appsettingnetterm.ts.002] | FunctionPath : [src/services/appsetting/read.appsettingnetterm.service.js/readOneAppSettingNetTerm()]", () => {


	test(ReadAppSettingNetTermServiceData.READ_ONE_APPSETTINGNETTERM_TS002_TC001.description, async () => {

        const output = await ReadAppSettingNetTermService.readOneAppSettingNetTerm(
            ReadAppSettingNetTermServiceData.READ_ONE_APPSETTINGNETTERM_TS002_TC001.input.databaseConnector,
            ReadAppSettingNetTermServiceData.READ_ONE_APPSETTINGNETTERM_TS002_TC001.input.apiID,
            ReadAppSettingNetTermServiceData.READ_ONE_APPSETTINGNETTERM_TS002_TC001.input.config,
            ReadAppSettingNetTermServiceData.READ_ONE_APPSETTINGNETTERM_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAppSettingNetTermServiceData.READ_ONE_APPSETTINGNETTERM_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAppSettingNetTermServiceData.READ_ONE_APPSETTINGNETTERM_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAppSettingNetTermServiceData.READ_ONE_APPSETTINGNETTERM_TS002_TC001.output)[2])
	});



    test(ReadAppSettingNetTermServiceData.READ_ONE_APPSETTINGNETTERM_TS002_TC002.description, async () => {

        const output = await ReadAppSettingNetTermService.readOneAppSettingNetTerm(
            ReadAppSettingNetTermServiceData.READ_ONE_APPSETTINGNETTERM_TS002_TC002.input.databaseConnector,
            ReadAppSettingNetTermServiceData.READ_ONE_APPSETTINGNETTERM_TS002_TC002.input.apiID,
            ReadAppSettingNetTermServiceData.READ_ONE_APPSETTINGNETTERM_TS002_TC002.input.config,
            ReadAppSettingNetTermServiceData.READ_ONE_APPSETTINGNETTERM_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadAppSettingNetTermServiceData.READ_ONE_APPSETTINGNETTERM_TS002_TC002.output.data)
        expect(output.status).toBe(ReadAppSettingNetTermServiceData.READ_ONE_APPSETTINGNETTERM_TS002_TC002.output.status)
        expect(output.message).toBe(ReadAppSettingNetTermServiceData.READ_ONE_APPSETTINGNETTERM_TS002_TC002.output.message)        
	});



    test(ReadAppSettingNetTermServiceData.READ_ONE_APPSETTINGNETTERM_TS002_TC003.description, async () => {

        const output = await ReadAppSettingNetTermService.readOneAppSettingNetTerm(
            ReadAppSettingNetTermServiceData.READ_ONE_APPSETTINGNETTERM_TS002_TC003.input.databaseConnector,
            ReadAppSettingNetTermServiceData.READ_ONE_APPSETTINGNETTERM_TS002_TC003.input.apiID,
            ReadAppSettingNetTermServiceData.READ_ONE_APPSETTINGNETTERM_TS002_TC003.input.config,
            ReadAppSettingNetTermServiceData.READ_ONE_APPSETTINGNETTERM_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadAppSettingNetTermServiceData.READ_ONE_APPSETTINGNETTERM_TS002_TC003.output.status)
        expect(output.message).toBe(ReadAppSettingNetTermServiceData.READ_ONE_APPSETTINGNETTERM_TS002_TC003.output.message)        
	});

});