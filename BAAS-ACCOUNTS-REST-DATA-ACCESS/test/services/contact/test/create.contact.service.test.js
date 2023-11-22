/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create contact service class
**/

/**
 * Importing all required modules here
 */

const createContactServiceData = require("../data/create.contact.service.data")
const createContactService = require("../../../../src/services/contact/create.contact.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateContactService = new createContactService();
const CreateContactServiceData = new createContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.contact.ts.001] | FunctionPath : [src/services/contact/create.contact.service.js/createOneContact()]", () => {


	test(CreateContactServiceData.CREATE_ONE_CONTACT_TS001_TC001.description, async () => {

        const output = await CreateContactService.createOneContact(
            CreateContactServiceData.CREATE_ONE_CONTACT_TS001_TC001.input.databaseConnector,
            CreateContactServiceData.CREATE_ONE_CONTACT_TS001_TC001.input.apiID,
            CreateContactServiceData.CREATE_ONE_CONTACT_TS001_TC001.input.config,
            CreateContactServiceData.CREATE_ONE_CONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateContactServiceData.CREATE_ONE_CONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateContactServiceData.CREATE_ONE_CONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateContactServiceData.CREATE_ONE_CONTACT_TS001_TC001.output)[2])
	});



    test(CreateContactServiceData.CREATE_ONE_CONTACT_TS001_TC002.description, async () => {

        const output = await CreateContactService.createOneContact(
            CreateContactServiceData.CREATE_ONE_CONTACT_TS001_TC002.input.databaseConnector,
            CreateContactServiceData.CREATE_ONE_CONTACT_TS001_TC002.input.apiID,
            CreateContactServiceData.CREATE_ONE_CONTACT_TS001_TC002.input.config,
            CreateContactServiceData.CREATE_ONE_CONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateContactServiceData.CREATE_ONE_CONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(CreateContactServiceData.CREATE_ONE_CONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(CreateContactServiceData.CREATE_ONE_CONTACT_TS001_TC002.output.message)        
	});



    test(CreateContactServiceData.CREATE_ONE_CONTACT_TS001_TC003.description, async () => {

        const output = await CreateContactService.createOneContact(
            CreateContactServiceData.CREATE_ONE_CONTACT_TS001_TC003.input.databaseConnector,
            CreateContactServiceData.CREATE_ONE_CONTACT_TS001_TC003.input.apiID,
            CreateContactServiceData.CREATE_ONE_CONTACT_TS001_TC003.input.config,
            CreateContactServiceData.CREATE_ONE_CONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateContactServiceData.CREATE_ONE_CONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(CreateContactServiceData.CREATE_ONE_CONTACT_TS001_TC003.output.message)        
	});

});