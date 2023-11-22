

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update customercontact service class
**/

/**
 * Importing all required modules here
 */

const updateCustomerContactServiceData = require("../data/update.customercontact.service.data")
const updateCustomerContactService = require("../../../../src/services/contact/update.customercontact.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateCustomerContactService = new updateCustomerContactService();
const UpdateCustomerContactServiceData = new updateCustomerContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customercontact.ts.001] | FunctionPath : [src/services/contact/update.customercontact.service.js/updateCustomerContact()]", () => {

	test(UpdateCustomerContactServiceData.UPDATE_CUSTOMERCONTACT_TS001_TC001.description, async () => {

        const output = await UpdateCustomerContactService.updateCustomerContact(
            UpdateCustomerContactServiceData.UPDATE_CUSTOMERCONTACT_TS001_TC001.input.databaseConnector,
            UpdateCustomerContactServiceData.UPDATE_CUSTOMERCONTACT_TS001_TC001.input.apiID,
            UpdateCustomerContactServiceData.UPDATE_CUSTOMERCONTACT_TS001_TC001.input.config,
            UpdateCustomerContactServiceData.UPDATE_CUSTOMERCONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateCustomerContactServiceData.UPDATE_CUSTOMERCONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerContactServiceData.UPDATE_CUSTOMERCONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerContactServiceData.UPDATE_CUSTOMERCONTACT_TS001_TC001.output)[2])
	});

    test(UpdateCustomerContactServiceData.UPDATE_CUSTOMERCONTACT_TS001_TC002.description, async () => {

        const output = await UpdateCustomerContactService.updateCustomerContact(
            UpdateCustomerContactServiceData.UPDATE_CUSTOMERCONTACT_TS001_TC002.input.databaseConnector,
            UpdateCustomerContactServiceData.UPDATE_CUSTOMERCONTACT_TS001_TC002.input.apiID,
            UpdateCustomerContactServiceData.UPDATE_CUSTOMERCONTACT_TS001_TC002.input.config,
            UpdateCustomerContactServiceData.UPDATE_CUSTOMERCONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateCustomerContactServiceData.UPDATE_CUSTOMERCONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateCustomerContactServiceData.UPDATE_CUSTOMERCONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateCustomerContactServiceData.UPDATE_CUSTOMERCONTACT_TS001_TC002.output.message)        
	});

    test(UpdateCustomerContactServiceData.UPDATE_CUSTOMERCONTACT_TS001_TC003.description, async () => {

        const output = await UpdateCustomerContactService.updateCustomerContact(
            UpdateCustomerContactServiceData.UPDATE_CUSTOMERCONTACT_TS001_TC003.input.databaseConnector,
            UpdateCustomerContactServiceData.UPDATE_CUSTOMERCONTACT_TS001_TC003.input.apiID,
            UpdateCustomerContactServiceData.UPDATE_CUSTOMERCONTACT_TS001_TC003.input.config,
            UpdateCustomerContactServiceData.UPDATE_CUSTOMERCONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateCustomerContactServiceData.UPDATE_CUSTOMERCONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateCustomerContactServiceData.UPDATE_CUSTOMERCONTACT_TS001_TC003.output.message)        
	});

});
