/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read ContactPerson service class
**/

/**
 * Importing all required modules here
 */

const readContactPersonServiceData = require("../data/read.contactperson.service.data")
const readContactPersonService = require("../../../../src/services/contact/read.contactperson.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadContactPersonService = new readContactPersonService();
const ReadContactPersonServiceData = new readContactPersonServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.contactperson.ts.001] | FunctionPath : [src/services/contact/read.contianer.service.js/readContactPersons()]", () => {


	test(ReadContactPersonServiceData.READ_CONTACTPERSON_TS001_TC001.description, async () => {

        const output = await ReadContactPersonService.readContactPersons(
            ReadContactPersonServiceData.READ_CONTACTPERSON_TS001_TC001.input.databaseConnector,
            ReadContactPersonServiceData.READ_CONTACTPERSON_TS001_TC001.input.apiID,
            ReadContactPersonServiceData.READ_CONTACTPERSON_TS001_TC001.input.config,
            ReadContactPersonServiceData.READ_CONTACTPERSON_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadContactPersonServiceData.READ_CONTACTPERSON_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadContactPersonServiceData.READ_CONTACTPERSON_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadContactPersonServiceData.READ_CONTACTPERSON_TS001_TC001.output)[2])
	});



    test(ReadContactPersonServiceData.READ_CONTACTPERSON_TS001_TC002.description, async () => {

        const output = await ReadContactPersonService.readContactPersons(
            ReadContactPersonServiceData.READ_CONTACTPERSON_TS001_TC002.input.databaseConnector,
            ReadContactPersonServiceData.READ_CONTACTPERSON_TS001_TC002.input.apiID,
            ReadContactPersonServiceData.READ_CONTACTPERSON_TS001_TC002.input.config,
            ReadContactPersonServiceData.READ_CONTACTPERSON_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadContactPersonServiceData.READ_CONTACTPERSON_TS001_TC002.output.data)
        expect(output.status).toBe(ReadContactPersonServiceData.READ_CONTACTPERSON_TS001_TC002.output.status)
        expect(output.message).toBe(ReadContactPersonServiceData.READ_CONTACTPERSON_TS001_TC002.output.message)        
	});



    test(ReadContactPersonServiceData.READ_CONTACTPERSON_TS001_TC003.description, async () => {

        const output = await ReadContactPersonService.readContactPersons(
            ReadContactPersonServiceData.READ_CONTACTPERSON_TS001_TC003.input.databaseConnector,
            ReadContactPersonServiceData.READ_CONTACTPERSON_TS001_TC003.input.apiID,
            ReadContactPersonServiceData.READ_CONTACTPERSON_TS001_TC003.input.config,
            ReadContactPersonServiceData.READ_CONTACTPERSON_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadContactPersonServiceData.READ_CONTACTPERSON_TS001_TC003.output.status)
        expect(output.message).toBe(ReadContactPersonServiceData.READ_CONTACTPERSON_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.contactperson.ts.002] | FunctionPath : [src/services/contact/read.contactperson.service.js/readOneContactPerson()]", () => {


	test(ReadContactPersonServiceData.READ_ONE_CONTACTPERSON_TS002_TC001.description, async () => {

        const output = await ReadContactPersonService.readOneContactPerson(
            ReadContactPersonServiceData.READ_ONE_CONTACTPERSON_TS002_TC001.input.databaseConnector,
            ReadContactPersonServiceData.READ_ONE_CONTACTPERSON_TS002_TC001.input.apiID,
            ReadContactPersonServiceData.READ_ONE_CONTACTPERSON_TS002_TC001.input.config,
            ReadContactPersonServiceData.READ_ONE_CONTACTPERSON_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadContactPersonServiceData.READ_ONE_CONTACTPERSON_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadContactPersonServiceData.READ_ONE_CONTACTPERSON_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadContactPersonServiceData.READ_ONE_CONTACTPERSON_TS002_TC001.output)[2])
	});



    test(ReadContactPersonServiceData.READ_ONE_CONTACTPERSON_TS002_TC002.description, async () => {

        const output = await ReadContactPersonService.readOneContactPerson(
            ReadContactPersonServiceData.READ_ONE_CONTACTPERSON_TS002_TC002.input.databaseConnector,
            ReadContactPersonServiceData.READ_ONE_CONTACTPERSON_TS002_TC002.input.apiID,
            ReadContactPersonServiceData.READ_ONE_CONTACTPERSON_TS002_TC002.input.config,
            ReadContactPersonServiceData.READ_ONE_CONTACTPERSON_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadContactPersonServiceData.READ_ONE_CONTACTPERSON_TS002_TC002.output.data)
        expect(output.status).toBe(ReadContactPersonServiceData.READ_ONE_CONTACTPERSON_TS002_TC002.output.status)
        expect(output.message).toBe(ReadContactPersonServiceData.READ_ONE_CONTACTPERSON_TS002_TC002.output.message)        
	});



    test(ReadContactPersonServiceData.READ_ONE_CONTACTPERSON_TS002_TC003.description, async () => {

        const output = await ReadContactPersonService.readOneContactPerson(
            ReadContactPersonServiceData.READ_ONE_CONTACTPERSON_TS002_TC003.input.databaseConnector,
            ReadContactPersonServiceData.READ_ONE_CONTACTPERSON_TS002_TC003.input.apiID,
            ReadContactPersonServiceData.READ_ONE_CONTACTPERSON_TS002_TC003.input.config,
            ReadContactPersonServiceData.READ_ONE_CONTACTPERSON_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadContactPersonServiceData.READ_ONE_CONTACTPERSON_TS002_TC003.output.status)
        expect(output.message).toBe(ReadContactPersonServiceData.READ_ONE_CONTACTPERSON_TS002_TC003.output.message)        
	});

});