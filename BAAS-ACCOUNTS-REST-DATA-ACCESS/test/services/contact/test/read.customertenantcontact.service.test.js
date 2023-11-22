/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read CustomerTenantContact service class
**/

/**
 * Importing all required modules here
 */

const readCustomerTenantContactServiceData = require("../data/read.customertenantcontact.service.data")
const readCustomerTenantContactService = require("../../../../src/services/contact/read.customertenantcontact.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadCustomerTenantContactService = new readCustomerTenantContactService();
const ReadCustomerTenantContactServiceData = new readCustomerTenantContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customertenantcontact.ts.001] | FunctionPath : [src/services/contact/read.contianer.service.js/readCustomerTenantContacts()]", () => {


	test(ReadCustomerTenantContactServiceData.READ_CUSTOMERTENANTCONTACT_TS001_TC001.description, async () => {

        const output = await ReadCustomerTenantContactService.readCustomerTenantContacts(
            ReadCustomerTenantContactServiceData.READ_CUSTOMERTENANTCONTACT_TS001_TC001.input.databaseConnector,
            ReadCustomerTenantContactServiceData.READ_CUSTOMERTENANTCONTACT_TS001_TC001.input.apiID,
            ReadCustomerTenantContactServiceData.READ_CUSTOMERTENANTCONTACT_TS001_TC001.input.config,
            ReadCustomerTenantContactServiceData.READ_CUSTOMERTENANTCONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerTenantContactServiceData.READ_CUSTOMERTENANTCONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerTenantContactServiceData.READ_CUSTOMERTENANTCONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerTenantContactServiceData.READ_CUSTOMERTENANTCONTACT_TS001_TC001.output)[2])
	});



    test(ReadCustomerTenantContactServiceData.READ_CUSTOMERTENANTCONTACT_TS001_TC002.description, async () => {

        const output = await ReadCustomerTenantContactService.readCustomerTenantContacts(
            ReadCustomerTenantContactServiceData.READ_CUSTOMERTENANTCONTACT_TS001_TC002.input.databaseConnector,
            ReadCustomerTenantContactServiceData.READ_CUSTOMERTENANTCONTACT_TS001_TC002.input.apiID,
            ReadCustomerTenantContactServiceData.READ_CUSTOMERTENANTCONTACT_TS001_TC002.input.config,
            ReadCustomerTenantContactServiceData.READ_CUSTOMERTENANTCONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerTenantContactServiceData.READ_CUSTOMERTENANTCONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadCustomerTenantContactServiceData.READ_CUSTOMERTENANTCONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadCustomerTenantContactServiceData.READ_CUSTOMERTENANTCONTACT_TS001_TC002.output.message)        
	});



    test(ReadCustomerTenantContactServiceData.READ_CUSTOMERTENANTCONTACT_TS001_TC003.description, async () => {

        const output = await ReadCustomerTenantContactService.readCustomerTenantContacts(
            ReadCustomerTenantContactServiceData.READ_CUSTOMERTENANTCONTACT_TS001_TC003.input.databaseConnector,
            ReadCustomerTenantContactServiceData.READ_CUSTOMERTENANTCONTACT_TS001_TC003.input.apiID,
            ReadCustomerTenantContactServiceData.READ_CUSTOMERTENANTCONTACT_TS001_TC003.input.config,
            ReadCustomerTenantContactServiceData.READ_CUSTOMERTENANTCONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerTenantContactServiceData.READ_CUSTOMERTENANTCONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadCustomerTenantContactServiceData.READ_CUSTOMERTENANTCONTACT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.customertenantcontact.ts.002] | FunctionPath : [src/services/contact/read.customertenantcontact.service.js/readOneCustomerTenantContact()]", () => {


	test(ReadCustomerTenantContactServiceData.READ_ONE_CUSTOMERTENANTCONTACT_TS002_TC001.description, async () => {

        const output = await ReadCustomerTenantContactService.readOneCustomerTenantContact(
            ReadCustomerTenantContactServiceData.READ_ONE_CUSTOMERTENANTCONTACT_TS002_TC001.input.databaseConnector,
            ReadCustomerTenantContactServiceData.READ_ONE_CUSTOMERTENANTCONTACT_TS002_TC001.input.apiID,
            ReadCustomerTenantContactServiceData.READ_ONE_CUSTOMERTENANTCONTACT_TS002_TC001.input.config,
            ReadCustomerTenantContactServiceData.READ_ONE_CUSTOMERTENANTCONTACT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerTenantContactServiceData.READ_ONE_CUSTOMERTENANTCONTACT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerTenantContactServiceData.READ_ONE_CUSTOMERTENANTCONTACT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerTenantContactServiceData.READ_ONE_CUSTOMERTENANTCONTACT_TS002_TC001.output)[2])
	});



    test(ReadCustomerTenantContactServiceData.READ_ONE_CUSTOMERTENANTCONTACT_TS002_TC002.description, async () => {

        const output = await ReadCustomerTenantContactService.readOneCustomerTenantContact(
            ReadCustomerTenantContactServiceData.READ_ONE_CUSTOMERTENANTCONTACT_TS002_TC002.input.databaseConnector,
            ReadCustomerTenantContactServiceData.READ_ONE_CUSTOMERTENANTCONTACT_TS002_TC002.input.apiID,
            ReadCustomerTenantContactServiceData.READ_ONE_CUSTOMERTENANTCONTACT_TS002_TC002.input.config,
            ReadCustomerTenantContactServiceData.READ_ONE_CUSTOMERTENANTCONTACT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerTenantContactServiceData.READ_ONE_CUSTOMERTENANTCONTACT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadCustomerTenantContactServiceData.READ_ONE_CUSTOMERTENANTCONTACT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadCustomerTenantContactServiceData.READ_ONE_CUSTOMERTENANTCONTACT_TS002_TC002.output.message)        
	});



    test(ReadCustomerTenantContactServiceData.READ_ONE_CUSTOMERTENANTCONTACT_TS002_TC003.description, async () => {

        const output = await ReadCustomerTenantContactService.readOneCustomerTenantContact(
            ReadCustomerTenantContactServiceData.READ_ONE_CUSTOMERTENANTCONTACT_TS002_TC003.input.databaseConnector,
            ReadCustomerTenantContactServiceData.READ_ONE_CUSTOMERTENANTCONTACT_TS002_TC003.input.apiID,
            ReadCustomerTenantContactServiceData.READ_ONE_CUSTOMERTENANTCONTACT_TS002_TC003.input.config,
            ReadCustomerTenantContactServiceData.READ_ONE_CUSTOMERTENANTCONTACT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerTenantContactServiceData.READ_ONE_CUSTOMERTENANTCONTACT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadCustomerTenantContactServiceData.READ_ONE_CUSTOMERTENANTCONTACT_TS002_TC003.output.message)        
	});

});