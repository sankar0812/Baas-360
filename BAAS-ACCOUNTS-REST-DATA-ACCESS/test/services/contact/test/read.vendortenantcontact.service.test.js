/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read VendorTenantContact service class
**/

/**
 * Importing all required modules here
 */

const readVendorTenantContactServiceData = require("../data/read.vendortenantcontact.service.data")
const readVendorTenantContactService = require("../../../../src/services/contact/read.vendortenantcontact.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadVendorTenantContactService = new readVendorTenantContactService();
const ReadVendorTenantContactServiceData = new readVendorTenantContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendortenantcontact.ts.001] | FunctionPath : [src/services/contact/read.contianer.service.js/readVendorTenantContacts()]", () => {


	test(ReadVendorTenantContactServiceData.READ_VENDORTENANTCONTACT_TS001_TC001.description, async () => {

        const output = await ReadVendorTenantContactService.readVendorTenantContacts(
            ReadVendorTenantContactServiceData.READ_VENDORTENANTCONTACT_TS001_TC001.input.databaseConnector,
            ReadVendorTenantContactServiceData.READ_VENDORTENANTCONTACT_TS001_TC001.input.apiID,
            ReadVendorTenantContactServiceData.READ_VENDORTENANTCONTACT_TS001_TC001.input.config,
            ReadVendorTenantContactServiceData.READ_VENDORTENANTCONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorTenantContactServiceData.READ_VENDORTENANTCONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorTenantContactServiceData.READ_VENDORTENANTCONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorTenantContactServiceData.READ_VENDORTENANTCONTACT_TS001_TC001.output)[2])
	});



    test(ReadVendorTenantContactServiceData.READ_VENDORTENANTCONTACT_TS001_TC002.description, async () => {

        const output = await ReadVendorTenantContactService.readVendorTenantContacts(
            ReadVendorTenantContactServiceData.READ_VENDORTENANTCONTACT_TS001_TC002.input.databaseConnector,
            ReadVendorTenantContactServiceData.READ_VENDORTENANTCONTACT_TS001_TC002.input.apiID,
            ReadVendorTenantContactServiceData.READ_VENDORTENANTCONTACT_TS001_TC002.input.config,
            ReadVendorTenantContactServiceData.READ_VENDORTENANTCONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorTenantContactServiceData.READ_VENDORTENANTCONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadVendorTenantContactServiceData.READ_VENDORTENANTCONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadVendorTenantContactServiceData.READ_VENDORTENANTCONTACT_TS001_TC002.output.message)        
	});



    test(ReadVendorTenantContactServiceData.READ_VENDORTENANTCONTACT_TS001_TC003.description, async () => {

        const output = await ReadVendorTenantContactService.readVendorTenantContacts(
            ReadVendorTenantContactServiceData.READ_VENDORTENANTCONTACT_TS001_TC003.input.databaseConnector,
            ReadVendorTenantContactServiceData.READ_VENDORTENANTCONTACT_TS001_TC003.input.apiID,
            ReadVendorTenantContactServiceData.READ_VENDORTENANTCONTACT_TS001_TC003.input.config,
            ReadVendorTenantContactServiceData.READ_VENDORTENANTCONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorTenantContactServiceData.READ_VENDORTENANTCONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadVendorTenantContactServiceData.READ_VENDORTENANTCONTACT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.vendortenantcontact.ts.002] | FunctionPath : [src/services/contact/read.vendortenantcontact.service.js/readOneVendorTenantContact()]", () => {


	test(ReadVendorTenantContactServiceData.READ_ONE_VENDORTENANTCONTACT_TS002_TC001.description, async () => {

        const output = await ReadVendorTenantContactService.readOneVendorTenantContact(
            ReadVendorTenantContactServiceData.READ_ONE_VENDORTENANTCONTACT_TS002_TC001.input.databaseConnector,
            ReadVendorTenantContactServiceData.READ_ONE_VENDORTENANTCONTACT_TS002_TC001.input.apiID,
            ReadVendorTenantContactServiceData.READ_ONE_VENDORTENANTCONTACT_TS002_TC001.input.config,
            ReadVendorTenantContactServiceData.READ_ONE_VENDORTENANTCONTACT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorTenantContactServiceData.READ_ONE_VENDORTENANTCONTACT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorTenantContactServiceData.READ_ONE_VENDORTENANTCONTACT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorTenantContactServiceData.READ_ONE_VENDORTENANTCONTACT_TS002_TC001.output)[2])
	});



    test(ReadVendorTenantContactServiceData.READ_ONE_VENDORTENANTCONTACT_TS002_TC002.description, async () => {

        const output = await ReadVendorTenantContactService.readOneVendorTenantContact(
            ReadVendorTenantContactServiceData.READ_ONE_VENDORTENANTCONTACT_TS002_TC002.input.databaseConnector,
            ReadVendorTenantContactServiceData.READ_ONE_VENDORTENANTCONTACT_TS002_TC002.input.apiID,
            ReadVendorTenantContactServiceData.READ_ONE_VENDORTENANTCONTACT_TS002_TC002.input.config,
            ReadVendorTenantContactServiceData.READ_ONE_VENDORTENANTCONTACT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorTenantContactServiceData.READ_ONE_VENDORTENANTCONTACT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadVendorTenantContactServiceData.READ_ONE_VENDORTENANTCONTACT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadVendorTenantContactServiceData.READ_ONE_VENDORTENANTCONTACT_TS002_TC002.output.message)        
	});



    test(ReadVendorTenantContactServiceData.READ_ONE_VENDORTENANTCONTACT_TS002_TC003.description, async () => {

        const output = await ReadVendorTenantContactService.readOneVendorTenantContact(
            ReadVendorTenantContactServiceData.READ_ONE_VENDORTENANTCONTACT_TS002_TC003.input.databaseConnector,
            ReadVendorTenantContactServiceData.READ_ONE_VENDORTENANTCONTACT_TS002_TC003.input.apiID,
            ReadVendorTenantContactServiceData.READ_ONE_VENDORTENANTCONTACT_TS002_TC003.input.config,
            ReadVendorTenantContactServiceData.READ_ONE_VENDORTENANTCONTACT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorTenantContactServiceData.READ_ONE_VENDORTENANTCONTACT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadVendorTenantContactServiceData.READ_ONE_VENDORTENANTCONTACT_TS002_TC003.output.message)        
	});

});