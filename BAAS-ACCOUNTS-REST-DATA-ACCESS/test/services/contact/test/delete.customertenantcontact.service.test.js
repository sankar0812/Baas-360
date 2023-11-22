/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete customertenantcontact service class
**/

/**
 * Importing all required modules here
 */

const deleteCustomerTenantContactServiceData = require("../data/delete.customertenantcontact.service.data")
const deleteCustomerTenantContactService = require("../../../../src/services/contact/delete.customertenantcontact.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteCustomerTenantContactService = new deleteCustomerTenantContactService();
const DeleteCustomerTenantContactServiceData = new deleteCustomerTenantContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customertenantcontact.ts.001] | FunctionPath : [src/services/contact/delete.customertenantcontact.service.js/deleteOneCustomerTenantContact()]", () => {


	test(DeleteCustomerTenantContactServiceData.DELETE_ONE_CUSTOMERTENANTCONTACT_TS001_TC001.description, async () => {

        const output = await DeleteCustomerTenantContactService.deleteOneCustomerTenantContact(
            DeleteCustomerTenantContactServiceData.DELETE_ONE_CUSTOMERTENANTCONTACT_TS001_TC001.input.databaseConnector,
            DeleteCustomerTenantContactServiceData.DELETE_ONE_CUSTOMERTENANTCONTACT_TS001_TC001.input.apiID,
            DeleteCustomerTenantContactServiceData.DELETE_ONE_CUSTOMERTENANTCONTACT_TS001_TC001.input.config,
            DeleteCustomerTenantContactServiceData.DELETE_ONE_CUSTOMERTENANTCONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteCustomerTenantContactServiceData.DELETE_ONE_CUSTOMERTENANTCONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteCustomerTenantContactServiceData.DELETE_ONE_CUSTOMERTENANTCONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteCustomerTenantContactServiceData.DELETE_ONE_CUSTOMERTENANTCONTACT_TS001_TC001.output)[2])
	});



    test(DeleteCustomerTenantContactServiceData.DELETE_ONE_CUSTOMERTENANTCONTACT_TS001_TC002.description, async () => {

        const output = await DeleteCustomerTenantContactService.deleteOneCustomerTenantContact(
            DeleteCustomerTenantContactServiceData.DELETE_ONE_CUSTOMERTENANTCONTACT_TS001_TC002.input.databaseConnector,
            DeleteCustomerTenantContactServiceData.DELETE_ONE_CUSTOMERTENANTCONTACT_TS001_TC002.input.apiID,
            DeleteCustomerTenantContactServiceData.DELETE_ONE_CUSTOMERTENANTCONTACT_TS001_TC002.input.config,
            DeleteCustomerTenantContactServiceData.DELETE_ONE_CUSTOMERTENANTCONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteCustomerTenantContactServiceData.DELETE_ONE_CUSTOMERTENANTCONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteCustomerTenantContactServiceData.DELETE_ONE_CUSTOMERTENANTCONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteCustomerTenantContactServiceData.DELETE_ONE_CUSTOMERTENANTCONTACT_TS001_TC002.output.message)        
	});



    test(DeleteCustomerTenantContactServiceData.DELETE_ONE_CUSTOMERTENANTCONTACT_TS001_TC003.description, async () => {

        const output = await DeleteCustomerTenantContactService.deleteOneCustomerTenantContact(
            DeleteCustomerTenantContactServiceData.DELETE_ONE_CUSTOMERTENANTCONTACT_TS001_TC003.input.databaseConnector,
            DeleteCustomerTenantContactServiceData.DELETE_ONE_CUSTOMERTENANTCONTACT_TS001_TC003.input.apiID,
            DeleteCustomerTenantContactServiceData.DELETE_ONE_CUSTOMERTENANTCONTACT_TS001_TC003.input.config,
            DeleteCustomerTenantContactServiceData.DELETE_ONE_CUSTOMERTENANTCONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteCustomerTenantContactServiceData.DELETE_ONE_CUSTOMERTENANTCONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteCustomerTenantContactServiceData.DELETE_ONE_CUSTOMERTENANTCONTACT_TS001_TC003.output.message)        
	});

});
