

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update customertenantcontact service class
**/

/**
 * Importing all required modules here
 */

const updateCustomerTenantContactServiceData = require("../data/update.customertenantcontact.service.data")
const updateCustomerTenantContactService = require("../../../../src/services/contact/update.customertenantcontact.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateCustomerTenantContactService = new updateCustomerTenantContactService();
const UpdateCustomerTenantContactServiceData = new updateCustomerTenantContactServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customertenantcontact.ts.001] | FunctionPath : [src/services/contact/update.customertenantcontact.service.js/updateCustomerTenantContact()]", () => {

	test(UpdateCustomerTenantContactServiceData.UPDATE_CUSTOMERTENANTCONTACT_TS001_TC001.description, async () => {

        const output = await UpdateCustomerTenantContactService.updateCustomerTenantContact(
            UpdateCustomerTenantContactServiceData.UPDATE_CUSTOMERTENANTCONTACT_TS001_TC001.input.databaseConnector,
            UpdateCustomerTenantContactServiceData.UPDATE_CUSTOMERTENANTCONTACT_TS001_TC001.input.apiID,
            UpdateCustomerTenantContactServiceData.UPDATE_CUSTOMERTENANTCONTACT_TS001_TC001.input.config,
            UpdateCustomerTenantContactServiceData.UPDATE_CUSTOMERTENANTCONTACT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateCustomerTenantContactServiceData.UPDATE_CUSTOMERTENANTCONTACT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerTenantContactServiceData.UPDATE_CUSTOMERTENANTCONTACT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerTenantContactServiceData.UPDATE_CUSTOMERTENANTCONTACT_TS001_TC001.output)[2])
	});

    test(UpdateCustomerTenantContactServiceData.UPDATE_CUSTOMERTENANTCONTACT_TS001_TC002.description, async () => {

        const output = await UpdateCustomerTenantContactService.updateCustomerTenantContact(
            UpdateCustomerTenantContactServiceData.UPDATE_CUSTOMERTENANTCONTACT_TS001_TC002.input.databaseConnector,
            UpdateCustomerTenantContactServiceData.UPDATE_CUSTOMERTENANTCONTACT_TS001_TC002.input.apiID,
            UpdateCustomerTenantContactServiceData.UPDATE_CUSTOMERTENANTCONTACT_TS001_TC002.input.config,
            UpdateCustomerTenantContactServiceData.UPDATE_CUSTOMERTENANTCONTACT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateCustomerTenantContactServiceData.UPDATE_CUSTOMERTENANTCONTACT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateCustomerTenantContactServiceData.UPDATE_CUSTOMERTENANTCONTACT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateCustomerTenantContactServiceData.UPDATE_CUSTOMERTENANTCONTACT_TS001_TC002.output.message)        
	});

    test(UpdateCustomerTenantContactServiceData.UPDATE_CUSTOMERTENANTCONTACT_TS001_TC003.description, async () => {

        const output = await UpdateCustomerTenantContactService.updateCustomerTenantContact(
            UpdateCustomerTenantContactServiceData.UPDATE_CUSTOMERTENANTCONTACT_TS001_TC003.input.databaseConnector,
            UpdateCustomerTenantContactServiceData.UPDATE_CUSTOMERTENANTCONTACT_TS001_TC003.input.apiID,
            UpdateCustomerTenantContactServiceData.UPDATE_CUSTOMERTENANTCONTACT_TS001_TC003.input.config,
            UpdateCustomerTenantContactServiceData.UPDATE_CUSTOMERTENANTCONTACT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateCustomerTenantContactServiceData.UPDATE_CUSTOMERTENANTCONTACT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateCustomerTenantContactServiceData.UPDATE_CUSTOMERTENANTCONTACT_TS001_TC003.output.message)        
	});

});
