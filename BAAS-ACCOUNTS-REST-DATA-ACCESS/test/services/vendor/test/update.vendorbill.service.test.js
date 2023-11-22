

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update vendorbill service class
**/

/**
 * Importing all required modules here
 */

const updateVendorBillServiceData = require("../data/update.vendorbill.service.data")
const updateVendorBillService = require("../../../../src/services/vendor/update.vendorbill.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateVendorBillService = new updateVendorBillService();
const UpdateVendorBillServiceData = new updateVendorBillServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorbill.ts.001] | FunctionPath : [src/services/vendor/update.vendorbill.service.js/updateVendorBill()]", () => {

	test(UpdateVendorBillServiceData.UPDATE_VENDORBILL_TS001_TC001.description, async () => {

        const output = await UpdateVendorBillService.updateVendorBill(
            UpdateVendorBillServiceData.UPDATE_VENDORBILL_TS001_TC001.input.databaseConnector,
            UpdateVendorBillServiceData.UPDATE_VENDORBILL_TS001_TC001.input.apiID,
            UpdateVendorBillServiceData.UPDATE_VENDORBILL_TS001_TC001.input.config,
            UpdateVendorBillServiceData.UPDATE_VENDORBILL_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateVendorBillServiceData.UPDATE_VENDORBILL_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateVendorBillServiceData.UPDATE_VENDORBILL_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateVendorBillServiceData.UPDATE_VENDORBILL_TS001_TC001.output)[2])
	});

    test(UpdateVendorBillServiceData.UPDATE_VENDORBILL_TS001_TC002.description, async () => {

        const output = await UpdateVendorBillService.updateVendorBill(
            UpdateVendorBillServiceData.UPDATE_VENDORBILL_TS001_TC002.input.databaseConnector,
            UpdateVendorBillServiceData.UPDATE_VENDORBILL_TS001_TC002.input.apiID,
            UpdateVendorBillServiceData.UPDATE_VENDORBILL_TS001_TC002.input.config,
            UpdateVendorBillServiceData.UPDATE_VENDORBILL_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateVendorBillServiceData.UPDATE_VENDORBILL_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateVendorBillServiceData.UPDATE_VENDORBILL_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateVendorBillServiceData.UPDATE_VENDORBILL_TS001_TC002.output.message)        
	});

    test(UpdateVendorBillServiceData.UPDATE_VENDORBILL_TS001_TC003.description, async () => {

        const output = await UpdateVendorBillService.updateVendorBill(
            UpdateVendorBillServiceData.UPDATE_VENDORBILL_TS001_TC003.input.databaseConnector,
            UpdateVendorBillServiceData.UPDATE_VENDORBILL_TS001_TC003.input.apiID,
            UpdateVendorBillServiceData.UPDATE_VENDORBILL_TS001_TC003.input.config,
            UpdateVendorBillServiceData.UPDATE_VENDORBILL_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateVendorBillServiceData.UPDATE_VENDORBILL_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateVendorBillServiceData.UPDATE_VENDORBILL_TS001_TC003.output.message)        
	});

});
