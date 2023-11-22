/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read VendorContact service class
**/

/**
 * Importing all required modules here
 */

const readVendorContactServiceData = require("../data/read.vendorcontact.service.data")
const readVendorContactService = require("../../../../src/services/contact/read.vendorcontact.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadVendorContactService = new readVendorContactService();
const ReadVendorContactServiceData = new readVendorContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorcontact.ts.001] | FunctionPath : [src/services/contact/read.contianer.service.js/readVendorContacts()]", () => {


	test(ReadVendorContactServiceData.READ_VENDORCONTACT_TS001_TC001.description, async () => {

        const output = await ReadVendorContactService.readVendorContacts(
            ReadVendorContactServiceData.READ_VENDORCONTACT_TS001_TC001.input.databaseConnector,
            ReadVendorContactServiceData.READ_VENDORCONTACT_TS001_TC001.input.apiID,
            ReadVendorContactServiceData.READ_VENDORCONTACT_TS001_TC001.input.config,
            ReadVendorContactServiceData.READ_VENDORCONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorContactServiceData.READ_VENDORCONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorContactServiceData.READ_VENDORCONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorContactServiceData.READ_VENDORCONTACT_TS001_TC001.output)[2])
	});



    test(ReadVendorContactServiceData.READ_VENDORCONTACT_TS001_TC002.description, async () => {

        const output = await ReadVendorContactService.readVendorContacts(
            ReadVendorContactServiceData.READ_VENDORCONTACT_TS001_TC002.input.databaseConnector,
            ReadVendorContactServiceData.READ_VENDORCONTACT_TS001_TC002.input.apiID,
            ReadVendorContactServiceData.READ_VENDORCONTACT_TS001_TC002.input.config,
            ReadVendorContactServiceData.READ_VENDORCONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorContactServiceData.READ_VENDORCONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadVendorContactServiceData.READ_VENDORCONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadVendorContactServiceData.READ_VENDORCONTACT_TS001_TC002.output.message)        
	});



    test(ReadVendorContactServiceData.READ_VENDORCONTACT_TS001_TC003.description, async () => {

        const output = await ReadVendorContactService.readVendorContacts(
            ReadVendorContactServiceData.READ_VENDORCONTACT_TS001_TC003.input.databaseConnector,
            ReadVendorContactServiceData.READ_VENDORCONTACT_TS001_TC003.input.apiID,
            ReadVendorContactServiceData.READ_VENDORCONTACT_TS001_TC003.input.config,
            ReadVendorContactServiceData.READ_VENDORCONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorContactServiceData.READ_VENDORCONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadVendorContactServiceData.READ_VENDORCONTACT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.vendorcontact.ts.002] | FunctionPath : [src/services/contact/read.vendorcontact.service.js/readOneVendorContact()]", () => {


	test(ReadVendorContactServiceData.READ_ONE_VENDORCONTACT_TS002_TC001.description, async () => {

        const output = await ReadVendorContactService.readOneVendorContact(
            ReadVendorContactServiceData.READ_ONE_VENDORCONTACT_TS002_TC001.input.databaseConnector,
            ReadVendorContactServiceData.READ_ONE_VENDORCONTACT_TS002_TC001.input.apiID,
            ReadVendorContactServiceData.READ_ONE_VENDORCONTACT_TS002_TC001.input.config,
            ReadVendorContactServiceData.READ_ONE_VENDORCONTACT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorContactServiceData.READ_ONE_VENDORCONTACT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorContactServiceData.READ_ONE_VENDORCONTACT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorContactServiceData.READ_ONE_VENDORCONTACT_TS002_TC001.output)[2])
	});



    test(ReadVendorContactServiceData.READ_ONE_VENDORCONTACT_TS002_TC002.description, async () => {

        const output = await ReadVendorContactService.readOneVendorContact(
            ReadVendorContactServiceData.READ_ONE_VENDORCONTACT_TS002_TC002.input.databaseConnector,
            ReadVendorContactServiceData.READ_ONE_VENDORCONTACT_TS002_TC002.input.apiID,
            ReadVendorContactServiceData.READ_ONE_VENDORCONTACT_TS002_TC002.input.config,
            ReadVendorContactServiceData.READ_ONE_VENDORCONTACT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorContactServiceData.READ_ONE_VENDORCONTACT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadVendorContactServiceData.READ_ONE_VENDORCONTACT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadVendorContactServiceData.READ_ONE_VENDORCONTACT_TS002_TC002.output.message)        
	});



    test(ReadVendorContactServiceData.READ_ONE_VENDORCONTACT_TS002_TC003.description, async () => {

        const output = await ReadVendorContactService.readOneVendorContact(
            ReadVendorContactServiceData.READ_ONE_VENDORCONTACT_TS002_TC003.input.databaseConnector,
            ReadVendorContactServiceData.READ_ONE_VENDORCONTACT_TS002_TC003.input.apiID,
            ReadVendorContactServiceData.READ_ONE_VENDORCONTACT_TS002_TC003.input.config,
            ReadVendorContactServiceData.READ_ONE_VENDORCONTACT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorContactServiceData.READ_ONE_VENDORCONTACT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadVendorContactServiceData.READ_ONE_VENDORCONTACT_TS002_TC003.output.message)        
	});

});