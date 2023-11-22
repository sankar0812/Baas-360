/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create vendorcontact service class
**/

/**
 * Importing all required modules here
 */

const createVendorContactServiceData = require("../data/create.vendorcontact.service.data")
const createVendorContactService = require("../../../../src/services/contact/create.vendorcontact.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateVendorContactService = new createVendorContactService();
const CreateVendorContactServiceData = new createVendorContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorcontact.ts.001] | FunctionPath : [src/services/contact/create.vendorcontact.service.js/createOneVendorContact()]", () => {


	test(CreateVendorContactServiceData.CREATE_ONE_VENDORCONTACT_TS001_TC001.description, async () => {

        const output = await CreateVendorContactService.createOneVendorContact(
            CreateVendorContactServiceData.CREATE_ONE_VENDORCONTACT_TS001_TC001.input.databaseConnector,
            CreateVendorContactServiceData.CREATE_ONE_VENDORCONTACT_TS001_TC001.input.apiID,
            CreateVendorContactServiceData.CREATE_ONE_VENDORCONTACT_TS001_TC001.input.config,
            CreateVendorContactServiceData.CREATE_ONE_VENDORCONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateVendorContactServiceData.CREATE_ONE_VENDORCONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateVendorContactServiceData.CREATE_ONE_VENDORCONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateVendorContactServiceData.CREATE_ONE_VENDORCONTACT_TS001_TC001.output)[2])
	});



    test(CreateVendorContactServiceData.CREATE_ONE_VENDORCONTACT_TS001_TC002.description, async () => {

        const output = await CreateVendorContactService.createOneVendorContact(
            CreateVendorContactServiceData.CREATE_ONE_VENDORCONTACT_TS001_TC002.input.databaseConnector,
            CreateVendorContactServiceData.CREATE_ONE_VENDORCONTACT_TS001_TC002.input.apiID,
            CreateVendorContactServiceData.CREATE_ONE_VENDORCONTACT_TS001_TC002.input.config,
            CreateVendorContactServiceData.CREATE_ONE_VENDORCONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateVendorContactServiceData.CREATE_ONE_VENDORCONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(CreateVendorContactServiceData.CREATE_ONE_VENDORCONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(CreateVendorContactServiceData.CREATE_ONE_VENDORCONTACT_TS001_TC002.output.message)        
	});



    test(CreateVendorContactServiceData.CREATE_ONE_VENDORCONTACT_TS001_TC003.description, async () => {

        const output = await CreateVendorContactService.createOneVendorContact(
            CreateVendorContactServiceData.CREATE_ONE_VENDORCONTACT_TS001_TC003.input.databaseConnector,
            CreateVendorContactServiceData.CREATE_ONE_VENDORCONTACT_TS001_TC003.input.apiID,
            CreateVendorContactServiceData.CREATE_ONE_VENDORCONTACT_TS001_TC003.input.config,
            CreateVendorContactServiceData.CREATE_ONE_VENDORCONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateVendorContactServiceData.CREATE_ONE_VENDORCONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(CreateVendorContactServiceData.CREATE_ONE_VENDORCONTACT_TS001_TC003.output.message)        
	});

});