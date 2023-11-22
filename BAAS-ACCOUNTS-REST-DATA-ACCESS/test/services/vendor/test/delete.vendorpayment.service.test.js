/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete vendorpayment service class
**/

/**
 * Importing all required modules here
 */

const deleteVendorPaymentServiceData = require("../data/delete.vendorpayment.service.data")
const deleteVendorPaymentService = require("../../../../src/services/vendor/delete.vendorpayment.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteVendorPaymentService = new deleteVendorPaymentService();
const DeleteVendorPaymentServiceData = new deleteVendorPaymentServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorpayment.ts.001] | FunctionPath : [src/services/vendor/delete.vendorpayment.service.js/deleteOneVendorPayment()]", () => {


	test(DeleteVendorPaymentServiceData.DELETE_ONE_VENDORPAYMENT_TS001_TC001.description, async () => {

        const output = await DeleteVendorPaymentService.deleteOneVendorPayment(
            DeleteVendorPaymentServiceData.DELETE_ONE_VENDORPAYMENT_TS001_TC001.input.databaseConnector,
            DeleteVendorPaymentServiceData.DELETE_ONE_VENDORPAYMENT_TS001_TC001.input.apiID,
            DeleteVendorPaymentServiceData.DELETE_ONE_VENDORPAYMENT_TS001_TC001.input.config,
            DeleteVendorPaymentServiceData.DELETE_ONE_VENDORPAYMENT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteVendorPaymentServiceData.DELETE_ONE_VENDORPAYMENT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteVendorPaymentServiceData.DELETE_ONE_VENDORPAYMENT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteVendorPaymentServiceData.DELETE_ONE_VENDORPAYMENT_TS001_TC001.output)[2])
	});



    test(DeleteVendorPaymentServiceData.DELETE_ONE_VENDORPAYMENT_TS001_TC002.description, async () => {

        const output = await DeleteVendorPaymentService.deleteOneVendorPayment(
            DeleteVendorPaymentServiceData.DELETE_ONE_VENDORPAYMENT_TS001_TC002.input.databaseConnector,
            DeleteVendorPaymentServiceData.DELETE_ONE_VENDORPAYMENT_TS001_TC002.input.apiID,
            DeleteVendorPaymentServiceData.DELETE_ONE_VENDORPAYMENT_TS001_TC002.input.config,
            DeleteVendorPaymentServiceData.DELETE_ONE_VENDORPAYMENT_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteVendorPaymentServiceData.DELETE_ONE_VENDORPAYMENT_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteVendorPaymentServiceData.DELETE_ONE_VENDORPAYMENT_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteVendorPaymentServiceData.DELETE_ONE_VENDORPAYMENT_TS001_TC002.output.message)        
	});



    test(DeleteVendorPaymentServiceData.DELETE_ONE_VENDORPAYMENT_TS001_TC003.description, async () => {

        const output = await DeleteVendorPaymentService.deleteOneVendorPayment(
            DeleteVendorPaymentServiceData.DELETE_ONE_VENDORPAYMENT_TS001_TC003.input.databaseConnector,
            DeleteVendorPaymentServiceData.DELETE_ONE_VENDORPAYMENT_TS001_TC003.input.apiID,
            DeleteVendorPaymentServiceData.DELETE_ONE_VENDORPAYMENT_TS001_TC003.input.config,
            DeleteVendorPaymentServiceData.DELETE_ONE_VENDORPAYMENT_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteVendorPaymentServiceData.DELETE_ONE_VENDORPAYMENT_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteVendorPaymentServiceData.DELETE_ONE_VENDORPAYMENT_TS001_TC003.output.message)        
	});

});
