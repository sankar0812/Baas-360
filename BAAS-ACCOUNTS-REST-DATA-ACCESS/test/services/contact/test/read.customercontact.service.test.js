/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read CustomerContact service class
**/

/**
 * Importing all required modules here
 */

const readCustomerContactServiceData = require("../data/read.customercontact.service.data")
const readCustomerContactService = require("../../../../src/services/contact/read.customercontact.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadCustomerContactService = new readCustomerContactService();
const ReadCustomerContactServiceData = new readCustomerContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customercontact.ts.001] | FunctionPath : [src/services/contact/read.contianer.service.js/readCustomerContacts()]", () => {


	test(ReadCustomerContactServiceData.READ_CUSTOMERCONTACT_TS001_TC001.description, async () => {

        const output = await ReadCustomerContactService.readCustomerContacts(
            ReadCustomerContactServiceData.READ_CUSTOMERCONTACT_TS001_TC001.input.databaseConnector,
            ReadCustomerContactServiceData.READ_CUSTOMERCONTACT_TS001_TC001.input.apiID,
            ReadCustomerContactServiceData.READ_CUSTOMERCONTACT_TS001_TC001.input.config,
            ReadCustomerContactServiceData.READ_CUSTOMERCONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerContactServiceData.READ_CUSTOMERCONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerContactServiceData.READ_CUSTOMERCONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerContactServiceData.READ_CUSTOMERCONTACT_TS001_TC001.output)[2])
	});



    test(ReadCustomerContactServiceData.READ_CUSTOMERCONTACT_TS001_TC002.description, async () => {

        const output = await ReadCustomerContactService.readCustomerContacts(
            ReadCustomerContactServiceData.READ_CUSTOMERCONTACT_TS001_TC002.input.databaseConnector,
            ReadCustomerContactServiceData.READ_CUSTOMERCONTACT_TS001_TC002.input.apiID,
            ReadCustomerContactServiceData.READ_CUSTOMERCONTACT_TS001_TC002.input.config,
            ReadCustomerContactServiceData.READ_CUSTOMERCONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerContactServiceData.READ_CUSTOMERCONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadCustomerContactServiceData.READ_CUSTOMERCONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadCustomerContactServiceData.READ_CUSTOMERCONTACT_TS001_TC002.output.message)        
	});



    test(ReadCustomerContactServiceData.READ_CUSTOMERCONTACT_TS001_TC003.description, async () => {

        const output = await ReadCustomerContactService.readCustomerContacts(
            ReadCustomerContactServiceData.READ_CUSTOMERCONTACT_TS001_TC003.input.databaseConnector,
            ReadCustomerContactServiceData.READ_CUSTOMERCONTACT_TS001_TC003.input.apiID,
            ReadCustomerContactServiceData.READ_CUSTOMERCONTACT_TS001_TC003.input.config,
            ReadCustomerContactServiceData.READ_CUSTOMERCONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerContactServiceData.READ_CUSTOMERCONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadCustomerContactServiceData.READ_CUSTOMERCONTACT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.customercontact.ts.002] | FunctionPath : [src/services/contact/read.customercontact.service.js/readOneCustomerContact()]", () => {


	test(ReadCustomerContactServiceData.READ_ONE_CUSTOMERCONTACT_TS002_TC001.description, async () => {

        const output = await ReadCustomerContactService.readOneCustomerContact(
            ReadCustomerContactServiceData.READ_ONE_CUSTOMERCONTACT_TS002_TC001.input.databaseConnector,
            ReadCustomerContactServiceData.READ_ONE_CUSTOMERCONTACT_TS002_TC001.input.apiID,
            ReadCustomerContactServiceData.READ_ONE_CUSTOMERCONTACT_TS002_TC001.input.config,
            ReadCustomerContactServiceData.READ_ONE_CUSTOMERCONTACT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerContactServiceData.READ_ONE_CUSTOMERCONTACT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerContactServiceData.READ_ONE_CUSTOMERCONTACT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerContactServiceData.READ_ONE_CUSTOMERCONTACT_TS002_TC001.output)[2])
	});



    test(ReadCustomerContactServiceData.READ_ONE_CUSTOMERCONTACT_TS002_TC002.description, async () => {

        const output = await ReadCustomerContactService.readOneCustomerContact(
            ReadCustomerContactServiceData.READ_ONE_CUSTOMERCONTACT_TS002_TC002.input.databaseConnector,
            ReadCustomerContactServiceData.READ_ONE_CUSTOMERCONTACT_TS002_TC002.input.apiID,
            ReadCustomerContactServiceData.READ_ONE_CUSTOMERCONTACT_TS002_TC002.input.config,
            ReadCustomerContactServiceData.READ_ONE_CUSTOMERCONTACT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerContactServiceData.READ_ONE_CUSTOMERCONTACT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadCustomerContactServiceData.READ_ONE_CUSTOMERCONTACT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadCustomerContactServiceData.READ_ONE_CUSTOMERCONTACT_TS002_TC002.output.message)        
	});



    test(ReadCustomerContactServiceData.READ_ONE_CUSTOMERCONTACT_TS002_TC003.description, async () => {

        const output = await ReadCustomerContactService.readOneCustomerContact(
            ReadCustomerContactServiceData.READ_ONE_CUSTOMERCONTACT_TS002_TC003.input.databaseConnector,
            ReadCustomerContactServiceData.READ_ONE_CUSTOMERCONTACT_TS002_TC003.input.apiID,
            ReadCustomerContactServiceData.READ_ONE_CUSTOMERCONTACT_TS002_TC003.input.config,
            ReadCustomerContactServiceData.READ_ONE_CUSTOMERCONTACT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerContactServiceData.READ_ONE_CUSTOMERCONTACT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadCustomerContactServiceData.READ_ONE_CUSTOMERCONTACT_TS002_TC003.output.message)        
	});

});