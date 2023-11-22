

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update vendorpaymentlog service class
**/

/**
 * Importing all required modules here
 */

const updateVendorPaymentLogServiceData = require("../data/update.vendorpaymentlog.service.data")
const updateVendorPaymentLogService = require("../../../../src/services/vendor/update.vendorpaymentlog.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateVendorPaymentLogService = new updateVendorPaymentLogService();
const UpdateVendorPaymentLogServiceData = new updateVendorPaymentLogServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorpaymentlog.ts.001] | FunctionPath : [src/services/vendor/update.vendorpaymentlog.service.js/updateVendorPaymentLog()]", () => {

	test(UpdateVendorPaymentLogServiceData.UPDATE_VENDORPAYMENTLOG_TS001_TC001.description, async () => {

        const output = await UpdateVendorPaymentLogService.updateVendorPaymentLog(
            UpdateVendorPaymentLogServiceData.UPDATE_VENDORPAYMENTLOG_TS001_TC001.input.databaseConnector,
            UpdateVendorPaymentLogServiceData.UPDATE_VENDORPAYMENTLOG_TS001_TC001.input.apiID,
            UpdateVendorPaymentLogServiceData.UPDATE_VENDORPAYMENTLOG_TS001_TC001.input.config,
            UpdateVendorPaymentLogServiceData.UPDATE_VENDORPAYMENTLOG_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateVendorPaymentLogServiceData.UPDATE_VENDORPAYMENTLOG_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateVendorPaymentLogServiceData.UPDATE_VENDORPAYMENTLOG_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateVendorPaymentLogServiceData.UPDATE_VENDORPAYMENTLOG_TS001_TC001.output)[2])
	});

    test(UpdateVendorPaymentLogServiceData.UPDATE_VENDORPAYMENTLOG_TS001_TC002.description, async () => {

        const output = await UpdateVendorPaymentLogService.updateVendorPaymentLog(
            UpdateVendorPaymentLogServiceData.UPDATE_VENDORPAYMENTLOG_TS001_TC002.input.databaseConnector,
            UpdateVendorPaymentLogServiceData.UPDATE_VENDORPAYMENTLOG_TS001_TC002.input.apiID,
            UpdateVendorPaymentLogServiceData.UPDATE_VENDORPAYMENTLOG_TS001_TC002.input.config,
            UpdateVendorPaymentLogServiceData.UPDATE_VENDORPAYMENTLOG_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateVendorPaymentLogServiceData.UPDATE_VENDORPAYMENTLOG_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateVendorPaymentLogServiceData.UPDATE_VENDORPAYMENTLOG_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateVendorPaymentLogServiceData.UPDATE_VENDORPAYMENTLOG_TS001_TC002.output.message)        
	});

    test(UpdateVendorPaymentLogServiceData.UPDATE_VENDORPAYMENTLOG_TS001_TC003.description, async () => {

        const output = await UpdateVendorPaymentLogService.updateVendorPaymentLog(
            UpdateVendorPaymentLogServiceData.UPDATE_VENDORPAYMENTLOG_TS001_TC003.input.databaseConnector,
            UpdateVendorPaymentLogServiceData.UPDATE_VENDORPAYMENTLOG_TS001_TC003.input.apiID,
            UpdateVendorPaymentLogServiceData.UPDATE_VENDORPAYMENTLOG_TS001_TC003.input.config,
            UpdateVendorPaymentLogServiceData.UPDATE_VENDORPAYMENTLOG_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateVendorPaymentLogServiceData.UPDATE_VENDORPAYMENTLOG_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateVendorPaymentLogServiceData.UPDATE_VENDORPAYMENTLOG_TS001_TC003.output.message)        
	});

});
