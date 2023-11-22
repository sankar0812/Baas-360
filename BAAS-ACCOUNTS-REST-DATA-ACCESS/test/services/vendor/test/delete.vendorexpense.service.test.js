/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete vendorexpense service class
**/

/**
 * Importing all required modules here
 */

const deleteVendorExpenseServiceData = require("../data/delete.vendorexpense.service.data")
const deleteVendorExpenseService = require("../../../../src/services/vendor/delete.vendorexpense.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteVendorExpenseService = new deleteVendorExpenseService();
const DeleteVendorExpenseServiceData = new deleteVendorExpenseServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorexpense.ts.001] | FunctionPath : [src/services/vendor/delete.vendorexpense.service.js/deleteOneVendorExpense()]", () => {


	test(DeleteVendorExpenseServiceData.DELETE_ONE_VENDOREXPENSE_TS001_TC001.description, async () => {

        const output = await DeleteVendorExpenseService.deleteOneVendorExpense(
            DeleteVendorExpenseServiceData.DELETE_ONE_VENDOREXPENSE_TS001_TC001.input.databaseConnector,
            DeleteVendorExpenseServiceData.DELETE_ONE_VENDOREXPENSE_TS001_TC001.input.apiID,
            DeleteVendorExpenseServiceData.DELETE_ONE_VENDOREXPENSE_TS001_TC001.input.config,
            DeleteVendorExpenseServiceData.DELETE_ONE_VENDOREXPENSE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteVendorExpenseServiceData.DELETE_ONE_VENDOREXPENSE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteVendorExpenseServiceData.DELETE_ONE_VENDOREXPENSE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteVendorExpenseServiceData.DELETE_ONE_VENDOREXPENSE_TS001_TC001.output)[2])
	});



    test(DeleteVendorExpenseServiceData.DELETE_ONE_VENDOREXPENSE_TS001_TC002.description, async () => {

        const output = await DeleteVendorExpenseService.deleteOneVendorExpense(
            DeleteVendorExpenseServiceData.DELETE_ONE_VENDOREXPENSE_TS001_TC002.input.databaseConnector,
            DeleteVendorExpenseServiceData.DELETE_ONE_VENDOREXPENSE_TS001_TC002.input.apiID,
            DeleteVendorExpenseServiceData.DELETE_ONE_VENDOREXPENSE_TS001_TC002.input.config,
            DeleteVendorExpenseServiceData.DELETE_ONE_VENDOREXPENSE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteVendorExpenseServiceData.DELETE_ONE_VENDOREXPENSE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteVendorExpenseServiceData.DELETE_ONE_VENDOREXPENSE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteVendorExpenseServiceData.DELETE_ONE_VENDOREXPENSE_TS001_TC002.output.message)        
	});



    test(DeleteVendorExpenseServiceData.DELETE_ONE_VENDOREXPENSE_TS001_TC003.description, async () => {

        const output = await DeleteVendorExpenseService.deleteOneVendorExpense(
            DeleteVendorExpenseServiceData.DELETE_ONE_VENDOREXPENSE_TS001_TC003.input.databaseConnector,
            DeleteVendorExpenseServiceData.DELETE_ONE_VENDOREXPENSE_TS001_TC003.input.apiID,
            DeleteVendorExpenseServiceData.DELETE_ONE_VENDOREXPENSE_TS001_TC003.input.config,
            DeleteVendorExpenseServiceData.DELETE_ONE_VENDOREXPENSE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteVendorExpenseServiceData.DELETE_ONE_VENDOREXPENSE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteVendorExpenseServiceData.DELETE_ONE_VENDOREXPENSE_TS001_TC003.output.message)        
	});

});
