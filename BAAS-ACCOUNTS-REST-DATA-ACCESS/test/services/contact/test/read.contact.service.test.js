/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Contact service class
**/

/**
 * Importing all required modules here
 */

const readContactServiceData = require("../data/read.contact.service.data")
const readContactService = require("../../../../src/services/contact/read.contact.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadContactService = new readContactService();
const ReadContactServiceData = new readContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.contact.ts.001] | FunctionPath : [src/services/contact/read.contianer.service.js/readContacts()]", () => {


	test(ReadContactServiceData.READ_CONTACT_TS001_TC001.description, async () => {

        const output = await ReadContactService.readContacts(
            ReadContactServiceData.READ_CONTACT_TS001_TC001.input.databaseConnector,
            ReadContactServiceData.READ_CONTACT_TS001_TC001.input.apiID,
            ReadContactServiceData.READ_CONTACT_TS001_TC001.input.config,
            ReadContactServiceData.READ_CONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadContactServiceData.READ_CONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadContactServiceData.READ_CONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadContactServiceData.READ_CONTACT_TS001_TC001.output)[2])
	});



    test(ReadContactServiceData.READ_CONTACT_TS001_TC002.description, async () => {

        const output = await ReadContactService.readContacts(
            ReadContactServiceData.READ_CONTACT_TS001_TC002.input.databaseConnector,
            ReadContactServiceData.READ_CONTACT_TS001_TC002.input.apiID,
            ReadContactServiceData.READ_CONTACT_TS001_TC002.input.config,
            ReadContactServiceData.READ_CONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadContactServiceData.READ_CONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadContactServiceData.READ_CONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadContactServiceData.READ_CONTACT_TS001_TC002.output.message)        
	});



    test(ReadContactServiceData.READ_CONTACT_TS001_TC003.description, async () => {

        const output = await ReadContactService.readContacts(
            ReadContactServiceData.READ_CONTACT_TS001_TC003.input.databaseConnector,
            ReadContactServiceData.READ_CONTACT_TS001_TC003.input.apiID,
            ReadContactServiceData.READ_CONTACT_TS001_TC003.input.config,
            ReadContactServiceData.READ_CONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadContactServiceData.READ_CONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadContactServiceData.READ_CONTACT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.contact.ts.002] | FunctionPath : [src/services/contact/read.contact.service.js/readOneContact()]", () => {


	test(ReadContactServiceData.READ_ONE_CONTACT_TS002_TC001.description, async () => {

        const output = await ReadContactService.readOneContact(
            ReadContactServiceData.READ_ONE_CONTACT_TS002_TC001.input.databaseConnector,
            ReadContactServiceData.READ_ONE_CONTACT_TS002_TC001.input.apiID,
            ReadContactServiceData.READ_ONE_CONTACT_TS002_TC001.input.config,
            ReadContactServiceData.READ_ONE_CONTACT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadContactServiceData.READ_ONE_CONTACT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadContactServiceData.READ_ONE_CONTACT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadContactServiceData.READ_ONE_CONTACT_TS002_TC001.output)[2])
	});



    test(ReadContactServiceData.READ_ONE_CONTACT_TS002_TC002.description, async () => {

        const output = await ReadContactService.readOneContact(
            ReadContactServiceData.READ_ONE_CONTACT_TS002_TC002.input.databaseConnector,
            ReadContactServiceData.READ_ONE_CONTACT_TS002_TC002.input.apiID,
            ReadContactServiceData.READ_ONE_CONTACT_TS002_TC002.input.config,
            ReadContactServiceData.READ_ONE_CONTACT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadContactServiceData.READ_ONE_CONTACT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadContactServiceData.READ_ONE_CONTACT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadContactServiceData.READ_ONE_CONTACT_TS002_TC002.output.message)        
	});



    test(ReadContactServiceData.READ_ONE_CONTACT_TS002_TC003.description, async () => {

        const output = await ReadContactService.readOneContact(
            ReadContactServiceData.READ_ONE_CONTACT_TS002_TC003.input.databaseConnector,
            ReadContactServiceData.READ_ONE_CONTACT_TS002_TC003.input.apiID,
            ReadContactServiceData.READ_ONE_CONTACT_TS002_TC003.input.config,
            ReadContactServiceData.READ_ONE_CONTACT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadContactServiceData.READ_ONE_CONTACT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadContactServiceData.READ_ONE_CONTACT_TS002_TC003.output.message)        
	});

});