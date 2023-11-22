/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read TenantContact service class
**/

/**
 * Importing all required modules here
 */

const readTenantContactServiceData = require("../data/read.tenantcontact.service.data")
const readTenantContactService = require("../../../../src/services/contact/read.tenantcontact.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadTenantContactService = new readTenantContactService();
const ReadTenantContactServiceData = new readTenantContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.tenantcontact.ts.001] | FunctionPath : [src/services/contact/read.contianer.service.js/readTenantContacts()]", () => {


	test(ReadTenantContactServiceData.READ_TENANTCONTACT_TS001_TC001.description, async () => {

        const output = await ReadTenantContactService.readTenantContacts(
            ReadTenantContactServiceData.READ_TENANTCONTACT_TS001_TC001.input.databaseConnector,
            ReadTenantContactServiceData.READ_TENANTCONTACT_TS001_TC001.input.apiID,
            ReadTenantContactServiceData.READ_TENANTCONTACT_TS001_TC001.input.config,
            ReadTenantContactServiceData.READ_TENANTCONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadTenantContactServiceData.READ_TENANTCONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadTenantContactServiceData.READ_TENANTCONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadTenantContactServiceData.READ_TENANTCONTACT_TS001_TC001.output)[2])
	});



    test(ReadTenantContactServiceData.READ_TENANTCONTACT_TS001_TC002.description, async () => {

        const output = await ReadTenantContactService.readTenantContacts(
            ReadTenantContactServiceData.READ_TENANTCONTACT_TS001_TC002.input.databaseConnector,
            ReadTenantContactServiceData.READ_TENANTCONTACT_TS001_TC002.input.apiID,
            ReadTenantContactServiceData.READ_TENANTCONTACT_TS001_TC002.input.config,
            ReadTenantContactServiceData.READ_TENANTCONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadTenantContactServiceData.READ_TENANTCONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadTenantContactServiceData.READ_TENANTCONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadTenantContactServiceData.READ_TENANTCONTACT_TS001_TC002.output.message)        
	});



    test(ReadTenantContactServiceData.READ_TENANTCONTACT_TS001_TC003.description, async () => {

        const output = await ReadTenantContactService.readTenantContacts(
            ReadTenantContactServiceData.READ_TENANTCONTACT_TS001_TC003.input.databaseConnector,
            ReadTenantContactServiceData.READ_TENANTCONTACT_TS001_TC003.input.apiID,
            ReadTenantContactServiceData.READ_TENANTCONTACT_TS001_TC003.input.config,
            ReadTenantContactServiceData.READ_TENANTCONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadTenantContactServiceData.READ_TENANTCONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadTenantContactServiceData.READ_TENANTCONTACT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.tenantcontact.ts.002] | FunctionPath : [src/services/contact/read.tenantcontact.service.js/readOneTenantContact()]", () => {


	test(ReadTenantContactServiceData.READ_ONE_TENANTCONTACT_TS002_TC001.description, async () => {

        const output = await ReadTenantContactService.readOneTenantContact(
            ReadTenantContactServiceData.READ_ONE_TENANTCONTACT_TS002_TC001.input.databaseConnector,
            ReadTenantContactServiceData.READ_ONE_TENANTCONTACT_TS002_TC001.input.apiID,
            ReadTenantContactServiceData.READ_ONE_TENANTCONTACT_TS002_TC001.input.config,
            ReadTenantContactServiceData.READ_ONE_TENANTCONTACT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadTenantContactServiceData.READ_ONE_TENANTCONTACT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadTenantContactServiceData.READ_ONE_TENANTCONTACT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadTenantContactServiceData.READ_ONE_TENANTCONTACT_TS002_TC001.output)[2])
	});



    test(ReadTenantContactServiceData.READ_ONE_TENANTCONTACT_TS002_TC002.description, async () => {

        const output = await ReadTenantContactService.readOneTenantContact(
            ReadTenantContactServiceData.READ_ONE_TENANTCONTACT_TS002_TC002.input.databaseConnector,
            ReadTenantContactServiceData.READ_ONE_TENANTCONTACT_TS002_TC002.input.apiID,
            ReadTenantContactServiceData.READ_ONE_TENANTCONTACT_TS002_TC002.input.config,
            ReadTenantContactServiceData.READ_ONE_TENANTCONTACT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadTenantContactServiceData.READ_ONE_TENANTCONTACT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadTenantContactServiceData.READ_ONE_TENANTCONTACT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadTenantContactServiceData.READ_ONE_TENANTCONTACT_TS002_TC002.output.message)        
	});



    test(ReadTenantContactServiceData.READ_ONE_TENANTCONTACT_TS002_TC003.description, async () => {

        const output = await ReadTenantContactService.readOneTenantContact(
            ReadTenantContactServiceData.READ_ONE_TENANTCONTACT_TS002_TC003.input.databaseConnector,
            ReadTenantContactServiceData.READ_ONE_TENANTCONTACT_TS002_TC003.input.apiID,
            ReadTenantContactServiceData.READ_ONE_TENANTCONTACT_TS002_TC003.input.config,
            ReadTenantContactServiceData.READ_ONE_TENANTCONTACT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadTenantContactServiceData.READ_ONE_TENANTCONTACT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadTenantContactServiceData.READ_ONE_TENANTCONTACT_TS002_TC003.output.message)        
	});

});