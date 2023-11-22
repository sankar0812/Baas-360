/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete customercontact service class
**/

/**
 * Importing all required modules here
 */

const deleteCustomerContactServiceData = require("../data/delete.customercontact.service.data")
const deleteCustomerContactService = require("../../../../src/services/contact/delete.customercontact.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteCustomerContactService = new deleteCustomerContactService();
const DeleteCustomerContactServiceData = new deleteCustomerContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customercontact.ts.001] | FunctionPath : [src/services/contact/delete.customercontact.service.js/deleteOneCustomerContact()]", () => {


	test(DeleteCustomerContactServiceData.DELETE_ONE_CUSTOMERCONTACT_TS001_TC001.description, async () => {

        const output = await DeleteCustomerContactService.deleteOneCustomerContact(
            DeleteCustomerContactServiceData.DELETE_ONE_CUSTOMERCONTACT_TS001_TC001.input.databaseConnector,
            DeleteCustomerContactServiceData.DELETE_ONE_CUSTOMERCONTACT_TS001_TC001.input.apiID,
            DeleteCustomerContactServiceData.DELETE_ONE_CUSTOMERCONTACT_TS001_TC001.input.config,
            DeleteCustomerContactServiceData.DELETE_ONE_CUSTOMERCONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteCustomerContactServiceData.DELETE_ONE_CUSTOMERCONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteCustomerContactServiceData.DELETE_ONE_CUSTOMERCONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteCustomerContactServiceData.DELETE_ONE_CUSTOMERCONTACT_TS001_TC001.output)[2])
	});



    test(DeleteCustomerContactServiceData.DELETE_ONE_CUSTOMERCONTACT_TS001_TC002.description, async () => {

        const output = await DeleteCustomerContactService.deleteOneCustomerContact(
            DeleteCustomerContactServiceData.DELETE_ONE_CUSTOMERCONTACT_TS001_TC002.input.databaseConnector,
            DeleteCustomerContactServiceData.DELETE_ONE_CUSTOMERCONTACT_TS001_TC002.input.apiID,
            DeleteCustomerContactServiceData.DELETE_ONE_CUSTOMERCONTACT_TS001_TC002.input.config,
            DeleteCustomerContactServiceData.DELETE_ONE_CUSTOMERCONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteCustomerContactServiceData.DELETE_ONE_CUSTOMERCONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteCustomerContactServiceData.DELETE_ONE_CUSTOMERCONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteCustomerContactServiceData.DELETE_ONE_CUSTOMERCONTACT_TS001_TC002.output.message)        
	});



    test(DeleteCustomerContactServiceData.DELETE_ONE_CUSTOMERCONTACT_TS001_TC003.description, async () => {

        const output = await DeleteCustomerContactService.deleteOneCustomerContact(
            DeleteCustomerContactServiceData.DELETE_ONE_CUSTOMERCONTACT_TS001_TC003.input.databaseConnector,
            DeleteCustomerContactServiceData.DELETE_ONE_CUSTOMERCONTACT_TS001_TC003.input.apiID,
            DeleteCustomerContactServiceData.DELETE_ONE_CUSTOMERCONTACT_TS001_TC003.input.config,
            DeleteCustomerContactServiceData.DELETE_ONE_CUSTOMERCONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteCustomerContactServiceData.DELETE_ONE_CUSTOMERCONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteCustomerContactServiceData.DELETE_ONE_CUSTOMERCONTACT_TS001_TC003.output.message)        
	});

});
