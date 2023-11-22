/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete contact service class
**/

/**
 * Importing all required modules here
 */

const deleteContactServiceData = require("../data/delete.contact.service.data")
const deleteContactService = require("../../../../src/services/contact/delete.contact.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteContactService = new deleteContactService();
const DeleteContactServiceData = new deleteContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.contact.ts.001] | FunctionPath : [src/services/contact/delete.contact.service.js/deleteOneContact()]", () => {


	test(DeleteContactServiceData.DELETE_ONE_CONTACT_TS001_TC001.description, async () => {

        const output = await DeleteContactService.deleteOneContact(
            DeleteContactServiceData.DELETE_ONE_CONTACT_TS001_TC001.input.databaseConnector,
            DeleteContactServiceData.DELETE_ONE_CONTACT_TS001_TC001.input.apiID,
            DeleteContactServiceData.DELETE_ONE_CONTACT_TS001_TC001.input.config,
            DeleteContactServiceData.DELETE_ONE_CONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteContactServiceData.DELETE_ONE_CONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteContactServiceData.DELETE_ONE_CONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteContactServiceData.DELETE_ONE_CONTACT_TS001_TC001.output)[2])
	});



    test(DeleteContactServiceData.DELETE_ONE_CONTACT_TS001_TC002.description, async () => {

        const output = await DeleteContactService.deleteOneContact(
            DeleteContactServiceData.DELETE_ONE_CONTACT_TS001_TC002.input.databaseConnector,
            DeleteContactServiceData.DELETE_ONE_CONTACT_TS001_TC002.input.apiID,
            DeleteContactServiceData.DELETE_ONE_CONTACT_TS001_TC002.input.config,
            DeleteContactServiceData.DELETE_ONE_CONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteContactServiceData.DELETE_ONE_CONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteContactServiceData.DELETE_ONE_CONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteContactServiceData.DELETE_ONE_CONTACT_TS001_TC002.output.message)        
	});



    test(DeleteContactServiceData.DELETE_ONE_CONTACT_TS001_TC003.description, async () => {

        const output = await DeleteContactService.deleteOneContact(
            DeleteContactServiceData.DELETE_ONE_CONTACT_TS001_TC003.input.databaseConnector,
            DeleteContactServiceData.DELETE_ONE_CONTACT_TS001_TC003.input.apiID,
            DeleteContactServiceData.DELETE_ONE_CONTACT_TS001_TC003.input.config,
            DeleteContactServiceData.DELETE_ONE_CONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteContactServiceData.DELETE_ONE_CONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteContactServiceData.DELETE_ONE_CONTACT_TS001_TC003.output.message)        
	});

});
