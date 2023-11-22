

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update contactperson service class
**/

/**
 * Importing all required modules here
 */

const updateContactPersonServiceData = require("../data/update.contactperson.service.data")
const updateContactPersonService = require("../../../../src/services/contact/update.contactperson.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateContactPersonService = new updateContactPersonService();
const UpdateContactPersonServiceData = new updateContactPersonServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.contactperson.ts.001] | FunctionPath : [src/services/contact/update.contactperson.service.js/updateContactPerson()]", () => {

	test(UpdateContactPersonServiceData.UPDATE_CONTACTPERSON_TS001_TC001.description, async () => {

        const output = await UpdateContactPersonService.updateContactPerson(
            UpdateContactPersonServiceData.UPDATE_CONTACTPERSON_TS001_TC001.input.databaseConnector,
            UpdateContactPersonServiceData.UPDATE_CONTACTPERSON_TS001_TC001.input.apiID,
            UpdateContactPersonServiceData.UPDATE_CONTACTPERSON_TS001_TC001.input.config,
            UpdateContactPersonServiceData.UPDATE_CONTACTPERSON_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateContactPersonServiceData.UPDATE_CONTACTPERSON_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateContactPersonServiceData.UPDATE_CONTACTPERSON_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateContactPersonServiceData.UPDATE_CONTACTPERSON_TS001_TC001.output)[2])
	});

    test(UpdateContactPersonServiceData.UPDATE_CONTACTPERSON_TS001_TC002.description, async () => {

        const output = await UpdateContactPersonService.updateContactPerson(
            UpdateContactPersonServiceData.UPDATE_CONTACTPERSON_TS001_TC002.input.databaseConnector,
            UpdateContactPersonServiceData.UPDATE_CONTACTPERSON_TS001_TC002.input.apiID,
            UpdateContactPersonServiceData.UPDATE_CONTACTPERSON_TS001_TC002.input.config,
            UpdateContactPersonServiceData.UPDATE_CONTACTPERSON_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateContactPersonServiceData.UPDATE_CONTACTPERSON_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateContactPersonServiceData.UPDATE_CONTACTPERSON_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateContactPersonServiceData.UPDATE_CONTACTPERSON_TS001_TC002.output.message)        
	});

    test(UpdateContactPersonServiceData.UPDATE_CONTACTPERSON_TS001_TC003.description, async () => {

        const output = await UpdateContactPersonService.updateContactPerson(
            UpdateContactPersonServiceData.UPDATE_CONTACTPERSON_TS001_TC003.input.databaseConnector,
            UpdateContactPersonServiceData.UPDATE_CONTACTPERSON_TS001_TC003.input.apiID,
            UpdateContactPersonServiceData.UPDATE_CONTACTPERSON_TS001_TC003.input.config,
            UpdateContactPersonServiceData.UPDATE_CONTACTPERSON_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateContactPersonServiceData.UPDATE_CONTACTPERSON_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateContactPersonServiceData.UPDATE_CONTACTPERSON_TS001_TC003.output.message)        
	});

});
