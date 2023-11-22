

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update vendorpayment service class
**/

/**
 * Importing all required modules here
 */

const updateVendorPaymentServiceData = require("../data/update.vendorpayment.service.data")
const updateVendorPaymentService = require("../../../../src/services/vendor/update.vendorpayment.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateVendorPaymentService = new updateVendorPaymentService();
const UpdateVendorPaymentServiceData = new updateVendorPaymentServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorpayment.ts.001] | FunctionPath : [src/services/vendor/update.vendorpayment.service.js/updateVendorPayment()]", () => {

	test(UpdateVendorPaymentServiceData.UPDATE_VENDORPAYMENT_TS001_TC001.description, async () => {

        const output = await UpdateVendorPaymentService.updateVendorPayment(
            UpdateVendorPaymentServiceData.UPDATE_VENDORPAYMENT_TS001_TC001.input.databaseConnector,
            UpdateVendorPaymentServiceData.UPDATE_VENDORPAYMENT_TS001_TC001.input.apiID,
            UpdateVendorPaymentServiceData.UPDATE_VENDORPAYMENT_TS001_TC001.input.config,
            UpdateVendorPaymentServiceData.UPDATE_VENDORPAYMENT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateVendorPaymentServiceData.UPDATE_VENDORPAYMENT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateVendorPaymentServiceData.UPDATE_VENDORPAYMENT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateVendorPaymentServiceData.UPDATE_VENDORPAYMENT_TS001_TC001.output)[2])
	});

    test(UpdateVendorPaymentServiceData.UPDATE_VENDORPAYMENT_TS001_TC002.description, async () => {

        const output = await UpdateVendorPaymentService.updateVendorPayment(
            UpdateVendorPaymentServiceData.UPDATE_VENDORPAYMENT_TS001_TC002.input.databaseConnector,
            UpdateVendorPaymentServiceData.UPDATE_VENDORPAYMENT_TS001_TC002.input.apiID,
            UpdateVendorPaymentServiceData.UPDATE_VENDORPAYMENT_TS001_TC002.input.config,
            UpdateVendorPaymentServiceData.UPDATE_VENDORPAYMENT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateVendorPaymentServiceData.UPDATE_VENDORPAYMENT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateVendorPaymentServiceData.UPDATE_VENDORPAYMENT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateVendorPaymentServiceData.UPDATE_VENDORPAYMENT_TS001_TC002.output.message)        
	});

    test(UpdateVendorPaymentServiceData.UPDATE_VENDORPAYMENT_TS001_TC003.description, async () => {

        const output = await UpdateVendorPaymentService.updateVendorPayment(
            UpdateVendorPaymentServiceData.UPDATE_VENDORPAYMENT_TS001_TC003.input.databaseConnector,
            UpdateVendorPaymentServiceData.UPDATE_VENDORPAYMENT_TS001_TC003.input.apiID,
            UpdateVendorPaymentServiceData.UPDATE_VENDORPAYMENT_TS001_TC003.input.config,
            UpdateVendorPaymentServiceData.UPDATE_VENDORPAYMENT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateVendorPaymentServiceData.UPDATE_VENDORPAYMENT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateVendorPaymentServiceData.UPDATE_VENDORPAYMENT_TS001_TC003.output.message)        
	});

});
