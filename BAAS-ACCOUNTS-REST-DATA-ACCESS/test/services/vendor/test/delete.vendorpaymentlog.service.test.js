/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete vendorpaymentlog service class
**/

/**
 * Importing all required modules here
 */

const deleteVendorPaymentLogServiceData = require("../data/delete.vendorpaymentlog.service.data")
const deleteVendorPaymentLogService = require("../../../../src/services/vendor/delete.vendorpaymentlog.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteVendorPaymentLogService = new deleteVendorPaymentLogService();
const DeleteVendorPaymentLogServiceData = new deleteVendorPaymentLogServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorpaymentlog.ts.001] | FunctionPath : [src/services/vendor/delete.vendorpaymentlog.service.js/deleteOneVendorPaymentLog()]", () => {


	test(DeleteVendorPaymentLogServiceData.DELETE_ONE_VENDORPAYMENTLOG_TS001_TC001.description, async () => {

        const output = await DeleteVendorPaymentLogService.deleteOneVendorPaymentLog(
            DeleteVendorPaymentLogServiceData.DELETE_ONE_VENDORPAYMENTLOG_TS001_TC001.input.databaseConnector,
            DeleteVendorPaymentLogServiceData.DELETE_ONE_VENDORPAYMENTLOG_TS001_TC001.input.apiID,
            DeleteVendorPaymentLogServiceData.DELETE_ONE_VENDORPAYMENTLOG_TS001_TC001.input.config,
            DeleteVendorPaymentLogServiceData.DELETE_ONE_VENDORPAYMENTLOG_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteVendorPaymentLogServiceData.DELETE_ONE_VENDORPAYMENTLOG_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteVendorPaymentLogServiceData.DELETE_ONE_VENDORPAYMENTLOG_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteVendorPaymentLogServiceData.DELETE_ONE_VENDORPAYMENTLOG_TS001_TC001.output)[2])
	});



    test(DeleteVendorPaymentLogServiceData.DELETE_ONE_VENDORPAYMENTLOG_TS001_TC002.description, async () => {

        const output = await DeleteVendorPaymentLogService.deleteOneVendorPaymentLog(
            DeleteVendorPaymentLogServiceData.DELETE_ONE_VENDORPAYMENTLOG_TS001_TC002.input.databaseConnector,
            DeleteVendorPaymentLogServiceData.DELETE_ONE_VENDORPAYMENTLOG_TS001_TC002.input.apiID,
            DeleteVendorPaymentLogServiceData.DELETE_ONE_VENDORPAYMENTLOG_TS001_TC002.input.config,
            DeleteVendorPaymentLogServiceData.DELETE_ONE_VENDORPAYMENTLOG_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteVendorPaymentLogServiceData.DELETE_ONE_VENDORPAYMENTLOG_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteVendorPaymentLogServiceData.DELETE_ONE_VENDORPAYMENTLOG_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteVendorPaymentLogServiceData.DELETE_ONE_VENDORPAYMENTLOG_TS001_TC002.output.message)        
	});



    test(DeleteVendorPaymentLogServiceData.DELETE_ONE_VENDORPAYMENTLOG_TS001_TC003.description, async () => {

        const output = await DeleteVendorPaymentLogService.deleteOneVendorPaymentLog(
            DeleteVendorPaymentLogServiceData.DELETE_ONE_VENDORPAYMENTLOG_TS001_TC003.input.databaseConnector,
            DeleteVendorPaymentLogServiceData.DELETE_ONE_VENDORPAYMENTLOG_TS001_TC003.input.apiID,
            DeleteVendorPaymentLogServiceData.DELETE_ONE_VENDORPAYMENTLOG_TS001_TC003.input.config,
            DeleteVendorPaymentLogServiceData.DELETE_ONE_VENDORPAYMENTLOG_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteVendorPaymentLogServiceData.DELETE_ONE_VENDORPAYMENTLOG_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteVendorPaymentLogServiceData.DELETE_ONE_VENDORPAYMENTLOG_TS001_TC003.output.message)        
	});

});
