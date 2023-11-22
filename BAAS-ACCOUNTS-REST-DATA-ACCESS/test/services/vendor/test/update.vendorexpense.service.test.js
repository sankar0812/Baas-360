

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update vendorexpense service class
**/

/**
 * Importing all required modules here
 */

const updateVendorExpenseServiceData = require("../data/update.vendorexpense.service.data")
const updateVendorExpenseService = require("../../../../src/services/vendor/update.vendorexpense.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateVendorExpenseService = new updateVendorExpenseService();
const UpdateVendorExpenseServiceData = new updateVendorExpenseServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorexpense.ts.001] | FunctionPath : [src/services/vendor/update.vendorexpense.service.js/updateVendorExpense()]", () => {

	test(UpdateVendorExpenseServiceData.UPDATE_VENDOREXPENSE_TS001_TC001.description, async () => {

        const output = await UpdateVendorExpenseService.updateVendorExpense(
            UpdateVendorExpenseServiceData.UPDATE_VENDOREXPENSE_TS001_TC001.input.databaseConnector,
            UpdateVendorExpenseServiceData.UPDATE_VENDOREXPENSE_TS001_TC001.input.apiID,
            UpdateVendorExpenseServiceData.UPDATE_VENDOREXPENSE_TS001_TC001.input.config,
            UpdateVendorExpenseServiceData.UPDATE_VENDOREXPENSE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateVendorExpenseServiceData.UPDATE_VENDOREXPENSE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateVendorExpenseServiceData.UPDATE_VENDOREXPENSE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateVendorExpenseServiceData.UPDATE_VENDOREXPENSE_TS001_TC001.output)[2])
	});

    test(UpdateVendorExpenseServiceData.UPDATE_VENDOREXPENSE_TS001_TC002.description, async () => {

        const output = await UpdateVendorExpenseService.updateVendorExpense(
            UpdateVendorExpenseServiceData.UPDATE_VENDOREXPENSE_TS001_TC002.input.databaseConnector,
            UpdateVendorExpenseServiceData.UPDATE_VENDOREXPENSE_TS001_TC002.input.apiID,
            UpdateVendorExpenseServiceData.UPDATE_VENDOREXPENSE_TS001_TC002.input.config,
            UpdateVendorExpenseServiceData.UPDATE_VENDOREXPENSE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateVendorExpenseServiceData.UPDATE_VENDOREXPENSE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateVendorExpenseServiceData.UPDATE_VENDOREXPENSE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateVendorExpenseServiceData.UPDATE_VENDOREXPENSE_TS001_TC002.output.message)        
	});

    test(UpdateVendorExpenseServiceData.UPDATE_VENDOREXPENSE_TS001_TC003.description, async () => {

        const output = await UpdateVendorExpenseService.updateVendorExpense(
            UpdateVendorExpenseServiceData.UPDATE_VENDOREXPENSE_TS001_TC003.input.databaseConnector,
            UpdateVendorExpenseServiceData.UPDATE_VENDOREXPENSE_TS001_TC003.input.apiID,
            UpdateVendorExpenseServiceData.UPDATE_VENDOREXPENSE_TS001_TC003.input.config,
            UpdateVendorExpenseServiceData.UPDATE_VENDOREXPENSE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateVendorExpenseServiceData.UPDATE_VENDOREXPENSE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateVendorExpenseServiceData.UPDATE_VENDOREXPENSE_TS001_TC003.output.message)        
	});

});
