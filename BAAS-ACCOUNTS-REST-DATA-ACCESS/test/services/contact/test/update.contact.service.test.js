

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update contact service class
**/

/**
 * Importing all required modules here
 */

const updateContactServiceData = require("../data/update.contact.service.data")
const updateContactService = require("../../../../src/services/contact/update.contact.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateContactService = new updateContactService();
const UpdateContactServiceData = new updateContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.contact.ts.001] | FunctionPath : [src/services/contact/update.contact.service.js/updateContact()]", () => {

	test(UpdateContactServiceData.UPDATE_CONTACT_TS001_TC001.description, async () => {

        const output = await UpdateContactService.updateContact(
            UpdateContactServiceData.UPDATE_CONTACT_TS001_TC001.input.databaseConnector,
            UpdateContactServiceData.UPDATE_CONTACT_TS001_TC001.input.apiID,
            UpdateContactServiceData.UPDATE_CONTACT_TS001_TC001.input.config,
            UpdateContactServiceData.UPDATE_CONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateContactServiceData.UPDATE_CONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateContactServiceData.UPDATE_CONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateContactServiceData.UPDATE_CONTACT_TS001_TC001.output)[2])
	});

    test(UpdateContactServiceData.UPDATE_CONTACT_TS001_TC002.description, async () => {

        const output = await UpdateContactService.updateContact(
            UpdateContactServiceData.UPDATE_CONTACT_TS001_TC002.input.databaseConnector,
            UpdateContactServiceData.UPDATE_CONTACT_TS001_TC002.input.apiID,
            UpdateContactServiceData.UPDATE_CONTACT_TS001_TC002.input.config,
            UpdateContactServiceData.UPDATE_CONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateContactServiceData.UPDATE_CONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateContactServiceData.UPDATE_CONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateContactServiceData.UPDATE_CONTACT_TS001_TC002.output.message)        
	});

    test(UpdateContactServiceData.UPDATE_CONTACT_TS001_TC003.description, async () => {

        const output = await UpdateContactService.updateContact(
            UpdateContactServiceData.UPDATE_CONTACT_TS001_TC003.input.databaseConnector,
            UpdateContactServiceData.UPDATE_CONTACT_TS001_TC003.input.apiID,
            UpdateContactServiceData.UPDATE_CONTACT_TS001_TC003.input.config,
            UpdateContactServiceData.UPDATE_CONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateContactServiceData.UPDATE_CONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateContactServiceData.UPDATE_CONTACT_TS001_TC003.output.message)        
	});

});
