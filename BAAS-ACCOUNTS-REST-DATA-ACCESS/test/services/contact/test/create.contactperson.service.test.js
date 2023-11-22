/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create contactperson service class
**/

/**
 * Importing all required modules here
 */

const createContactPersonServiceData = require("../data/create.contactperson.service.data")
const createContactPersonService = require("../../../../src/services/contact/create.contactperson.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateContactPersonService = new createContactPersonService();
const CreateContactPersonServiceData = new createContactPersonServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.contactperson.ts.001] | FunctionPath : [src/services/contact/create.contactperson.service.js/createOneContactPerson()]", () => {


	test(CreateContactPersonServiceData.CREATE_ONE_CONTACTPERSON_TS001_TC001.description, async () => {

        const output = await CreateContactPersonService.createOneContactPerson(
            CreateContactPersonServiceData.CREATE_ONE_CONTACTPERSON_TS001_TC001.input.databaseConnector,
            CreateContactPersonServiceData.CREATE_ONE_CONTACTPERSON_TS001_TC001.input.apiID,
            CreateContactPersonServiceData.CREATE_ONE_CONTACTPERSON_TS001_TC001.input.config,
            CreateContactPersonServiceData.CREATE_ONE_CONTACTPERSON_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateContactPersonServiceData.CREATE_ONE_CONTACTPERSON_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateContactPersonServiceData.CREATE_ONE_CONTACTPERSON_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateContactPersonServiceData.CREATE_ONE_CONTACTPERSON_TS001_TC001.output)[2])
	});



    test(CreateContactPersonServiceData.CREATE_ONE_CONTACTPERSON_TS001_TC002.description, async () => {

        const output = await CreateContactPersonService.createOneContactPerson(
            CreateContactPersonServiceData.CREATE_ONE_CONTACTPERSON_TS001_TC002.input.databaseConnector,
            CreateContactPersonServiceData.CREATE_ONE_CONTACTPERSON_TS001_TC002.input.apiID,
            CreateContactPersonServiceData.CREATE_ONE_CONTACTPERSON_TS001_TC002.input.config,
            CreateContactPersonServiceData.CREATE_ONE_CONTACTPERSON_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateContactPersonServiceData.CREATE_ONE_CONTACTPERSON_TS001_TC002.output.data)
        expect(output.status).toBe(CreateContactPersonServiceData.CREATE_ONE_CONTACTPERSON_TS001_TC002.output.status)
        expect(output.message).toBe(CreateContactPersonServiceData.CREATE_ONE_CONTACTPERSON_TS001_TC002.output.message)        
	});



    test(CreateContactPersonServiceData.CREATE_ONE_CONTACTPERSON_TS001_TC003.description, async () => {

        const output = await CreateContactPersonService.createOneContactPerson(
            CreateContactPersonServiceData.CREATE_ONE_CONTACTPERSON_TS001_TC003.input.databaseConnector,
            CreateContactPersonServiceData.CREATE_ONE_CONTACTPERSON_TS001_TC003.input.apiID,
            CreateContactPersonServiceData.CREATE_ONE_CONTACTPERSON_TS001_TC003.input.config,
            CreateContactPersonServiceData.CREATE_ONE_CONTACTPERSON_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateContactPersonServiceData.CREATE_ONE_CONTACTPERSON_TS001_TC003.output.status)
        expect(output.message).toBe(CreateContactPersonServiceData.CREATE_ONE_CONTACTPERSON_TS001_TC003.output.message)        
	});

});