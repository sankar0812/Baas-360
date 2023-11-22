

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update customeraccountcard service class
**/

/**
 * Importing all required modules here
 */

const updateCustomerAccountCardServiceData = require("../data/update.customeraccountcard.service.data")
const updateCustomerAccountCardService = require("../../../../src/services/customer/update.customeraccountcard.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateCustomerAccountCardService = new updateCustomerAccountCardService();
const UpdateCustomerAccountCardServiceData = new updateCustomerAccountCardServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customeraccountcard.ts.001] | FunctionPath : [src/services/customer/update.customeraccountcard.service.js/updateCustomerAccountCard()]", () => {

	test(UpdateCustomerAccountCardServiceData.UPDATE_CUSTOMERACCOUNTCARD_TS001_TC001.description, async () => {

        const output = await UpdateCustomerAccountCardService.updateCustomerAccountCard(
            UpdateCustomerAccountCardServiceData.UPDATE_CUSTOMERACCOUNTCARD_TS001_TC001.input.databaseConnector,
            UpdateCustomerAccountCardServiceData.UPDATE_CUSTOMERACCOUNTCARD_TS001_TC001.input.apiID,
            UpdateCustomerAccountCardServiceData.UPDATE_CUSTOMERACCOUNTCARD_TS001_TC001.input.config,
            UpdateCustomerAccountCardServiceData.UPDATE_CUSTOMERACCOUNTCARD_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateCustomerAccountCardServiceData.UPDATE_CUSTOMERACCOUNTCARD_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerAccountCardServiceData.UPDATE_CUSTOMERACCOUNTCARD_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerAccountCardServiceData.UPDATE_CUSTOMERACCOUNTCARD_TS001_TC001.output)[2])
	});

    test(UpdateCustomerAccountCardServiceData.UPDATE_CUSTOMERACCOUNTCARD_TS001_TC002.description, async () => {

        const output = await UpdateCustomerAccountCardService.updateCustomerAccountCard(
            UpdateCustomerAccountCardServiceData.UPDATE_CUSTOMERACCOUNTCARD_TS001_TC002.input.databaseConnector,
            UpdateCustomerAccountCardServiceData.UPDATE_CUSTOMERACCOUNTCARD_TS001_TC002.input.apiID,
            UpdateCustomerAccountCardServiceData.UPDATE_CUSTOMERACCOUNTCARD_TS001_TC002.input.config,
            UpdateCustomerAccountCardServiceData.UPDATE_CUSTOMERACCOUNTCARD_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateCustomerAccountCardServiceData.UPDATE_CUSTOMERACCOUNTCARD_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateCustomerAccountCardServiceData.UPDATE_CUSTOMERACCOUNTCARD_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateCustomerAccountCardServiceData.UPDATE_CUSTOMERACCOUNTCARD_TS001_TC002.output.message)        
	});

    test(UpdateCustomerAccountCardServiceData.UPDATE_CUSTOMERACCOUNTCARD_TS001_TC003.description, async () => {

        const output = await UpdateCustomerAccountCardService.updateCustomerAccountCard(
            UpdateCustomerAccountCardServiceData.UPDATE_CUSTOMERACCOUNTCARD_TS001_TC003.input.databaseConnector,
            UpdateCustomerAccountCardServiceData.UPDATE_CUSTOMERACCOUNTCARD_TS001_TC003.input.apiID,
            UpdateCustomerAccountCardServiceData.UPDATE_CUSTOMERACCOUNTCARD_TS001_TC003.input.config,
            UpdateCustomerAccountCardServiceData.UPDATE_CUSTOMERACCOUNTCARD_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateCustomerAccountCardServiceData.UPDATE_CUSTOMERACCOUNTCARD_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateCustomerAccountCardServiceData.UPDATE_CUSTOMERACCOUNTCARD_TS001_TC003.output.message)        
	});

});
