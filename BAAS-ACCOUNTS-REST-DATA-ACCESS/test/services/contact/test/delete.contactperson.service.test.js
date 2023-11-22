/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete contactperson service class
**/

/**
 * Importing all required modules here
 */

const deleteContactPersonServiceData = require("../data/delete.contactperson.service.data")
const deleteContactPersonService = require("../../../../src/services/contact/delete.contactperson.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteContactPersonService = new deleteContactPersonService();
const DeleteContactPersonServiceData = new deleteContactPersonServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.contactperson.ts.001] | FunctionPath : [src/services/contact/delete.contactperson.service.js/deleteOneContactPerson()]", () => {


	test(DeleteContactPersonServiceData.DELETE_ONE_CONTACTPERSON_TS001_TC001.description, async () => {

        const output = await DeleteContactPersonService.deleteOneContactPerson(
            DeleteContactPersonServiceData.DELETE_ONE_CONTACTPERSON_TS001_TC001.input.databaseConnector,
            DeleteContactPersonServiceData.DELETE_ONE_CONTACTPERSON_TS001_TC001.input.apiID,
            DeleteContactPersonServiceData.DELETE_ONE_CONTACTPERSON_TS001_TC001.input.config,
            DeleteContactPersonServiceData.DELETE_ONE_CONTACTPERSON_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteContactPersonServiceData.DELETE_ONE_CONTACTPERSON_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteContactPersonServiceData.DELETE_ONE_CONTACTPERSON_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteContactPersonServiceData.DELETE_ONE_CONTACTPERSON_TS001_TC001.output)[2])
	});



    test(DeleteContactPersonServiceData.DELETE_ONE_CONTACTPERSON_TS001_TC002.description, async () => {

        const output = await DeleteContactPersonService.deleteOneContactPerson(
            DeleteContactPersonServiceData.DELETE_ONE_CONTACTPERSON_TS001_TC002.input.databaseConnector,
            DeleteContactPersonServiceData.DELETE_ONE_CONTACTPERSON_TS001_TC002.input.apiID,
            DeleteContactPersonServiceData.DELETE_ONE_CONTACTPERSON_TS001_TC002.input.config,
            DeleteContactPersonServiceData.DELETE_ONE_CONTACTPERSON_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteContactPersonServiceData.DELETE_ONE_CONTACTPERSON_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteContactPersonServiceData.DELETE_ONE_CONTACTPERSON_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteContactPersonServiceData.DELETE_ONE_CONTACTPERSON_TS001_TC002.output.message)        
	});



    test(DeleteContactPersonServiceData.DELETE_ONE_CONTACTPERSON_TS001_TC003.description, async () => {

        const output = await DeleteContactPersonService.deleteOneContactPerson(
            DeleteContactPersonServiceData.DELETE_ONE_CONTACTPERSON_TS001_TC003.input.databaseConnector,
            DeleteContactPersonServiceData.DELETE_ONE_CONTACTPERSON_TS001_TC003.input.apiID,
            DeleteContactPersonServiceData.DELETE_ONE_CONTACTPERSON_TS001_TC003.input.config,
            DeleteContactPersonServiceData.DELETE_ONE_CONTACTPERSON_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteContactPersonServiceData.DELETE_ONE_CONTACTPERSON_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteContactPersonServiceData.DELETE_ONE_CONTACTPERSON_TS001_TC003.output.message)        
	});

});
