/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create vendortenantcontact service class
**/

/**
 * Importing all required modules here
 */

const createVendorTenantContactServiceData = require("../data/create.vendortenantcontact.service.data")
const createVendorTenantContactService = require("../../../../src/services/contact/create.vendortenantcontact.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateVendorTenantContactService = new createVendorTenantContactService();
const CreateVendorTenantContactServiceData = new createVendorTenantContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendortenantcontact.ts.001] | FunctionPath : [src/services/contact/create.vendortenantcontact.service.js/createOneVendorTenantContact()]", () => {


	test(CreateVendorTenantContactServiceData.CREATE_ONE_VENDORTENANTCONTACT_TS001_TC001.description, async () => {

        const output = await CreateVendorTenantContactService.createOneVendorTenantContact(
            CreateVendorTenantContactServiceData.CREATE_ONE_VENDORTENANTCONTACT_TS001_TC001.input.databaseConnector,
            CreateVendorTenantContactServiceData.CREATE_ONE_VENDORTENANTCONTACT_TS001_TC001.input.apiID,
            CreateVendorTenantContactServiceData.CREATE_ONE_VENDORTENANTCONTACT_TS001_TC001.input.config,
            CreateVendorTenantContactServiceData.CREATE_ONE_VENDORTENANTCONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateVendorTenantContactServiceData.CREATE_ONE_VENDORTENANTCONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateVendorTenantContactServiceData.CREATE_ONE_VENDORTENANTCONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateVendorTenantContactServiceData.CREATE_ONE_VENDORTENANTCONTACT_TS001_TC001.output)[2])
	});



    test(CreateVendorTenantContactServiceData.CREATE_ONE_VENDORTENANTCONTACT_TS001_TC002.description, async () => {

        const output = await CreateVendorTenantContactService.createOneVendorTenantContact(
            CreateVendorTenantContactServiceData.CREATE_ONE_VENDORTENANTCONTACT_TS001_TC002.input.databaseConnector,
            CreateVendorTenantContactServiceData.CREATE_ONE_VENDORTENANTCONTACT_TS001_TC002.input.apiID,
            CreateVendorTenantContactServiceData.CREATE_ONE_VENDORTENANTCONTACT_TS001_TC002.input.config,
            CreateVendorTenantContactServiceData.CREATE_ONE_VENDORTENANTCONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateVendorTenantContactServiceData.CREATE_ONE_VENDORTENANTCONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(CreateVendorTenantContactServiceData.CREATE_ONE_VENDORTENANTCONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(CreateVendorTenantContactServiceData.CREATE_ONE_VENDORTENANTCONTACT_TS001_TC002.output.message)        
	});



    test(CreateVendorTenantContactServiceData.CREATE_ONE_VENDORTENANTCONTACT_TS001_TC003.description, async () => {

        const output = await CreateVendorTenantContactService.createOneVendorTenantContact(
            CreateVendorTenantContactServiceData.CREATE_ONE_VENDORTENANTCONTACT_TS001_TC003.input.databaseConnector,
            CreateVendorTenantContactServiceData.CREATE_ONE_VENDORTENANTCONTACT_TS001_TC003.input.apiID,
            CreateVendorTenantContactServiceData.CREATE_ONE_VENDORTENANTCONTACT_TS001_TC003.input.config,
            CreateVendorTenantContactServiceData.CREATE_ONE_VENDORTENANTCONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateVendorTenantContactServiceData.CREATE_ONE_VENDORTENANTCONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(CreateVendorTenantContactServiceData.CREATE_ONE_VENDORTENANTCONTACT_TS001_TC003.output.message)        
	});

});