

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update vendorpaymentitem service class
**/

/**
 * Importing all required modules here
 */

const updateVendorPaymentItemServiceData = require("../data/update.vendorpaymentitem.service.data")
const updateVendorPaymentItemService = require("../../../../src/services/vendor/update.vendorpaymentitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateVendorPaymentItemService = new updateVendorPaymentItemService();
const UpdateVendorPaymentItemServiceData = new updateVendorPaymentItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorpaymentitem.ts.001] | FunctionPath : [src/services/vendor/update.vendorpaymentitem.service.js/updateVendorPaymentItem()]", () => {

	test(UpdateVendorPaymentItemServiceData.UPDATE_VENDORPAYMENTITEM_TS001_TC001.description, async () => {

        const output = await UpdateVendorPaymentItemService.updateVendorPaymentItem(
            UpdateVendorPaymentItemServiceData.UPDATE_VENDORPAYMENTITEM_TS001_TC001.input.databaseConnector,
            UpdateVendorPaymentItemServiceData.UPDATE_VENDORPAYMENTITEM_TS001_TC001.input.apiID,
            UpdateVendorPaymentItemServiceData.UPDATE_VENDORPAYMENTITEM_TS001_TC001.input.config,
            UpdateVendorPaymentItemServiceData.UPDATE_VENDORPAYMENTITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateVendorPaymentItemServiceData.UPDATE_VENDORPAYMENTITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateVendorPaymentItemServiceData.UPDATE_VENDORPAYMENTITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateVendorPaymentItemServiceData.UPDATE_VENDORPAYMENTITEM_TS001_TC001.output)[2])
	});

    test(UpdateVendorPaymentItemServiceData.UPDATE_VENDORPAYMENTITEM_TS001_TC002.description, async () => {

        const output = await UpdateVendorPaymentItemService.updateVendorPaymentItem(
            UpdateVendorPaymentItemServiceData.UPDATE_VENDORPAYMENTITEM_TS001_TC002.input.databaseConnector,
            UpdateVendorPaymentItemServiceData.UPDATE_VENDORPAYMENTITEM_TS001_TC002.input.apiID,
            UpdateVendorPaymentItemServiceData.UPDATE_VENDORPAYMENTITEM_TS001_TC002.input.config,
            UpdateVendorPaymentItemServiceData.UPDATE_VENDORPAYMENTITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateVendorPaymentItemServiceData.UPDATE_VENDORPAYMENTITEM_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateVendorPaymentItemServiceData.UPDATE_VENDORPAYMENTITEM_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateVendorPaymentItemServiceData.UPDATE_VENDORPAYMENTITEM_TS001_TC002.output.message)        
	});

    test(UpdateVendorPaymentItemServiceData.UPDATE_VENDORPAYMENTITEM_TS001_TC003.description, async () => {

        const output = await UpdateVendorPaymentItemService.updateVendorPaymentItem(
            UpdateVendorPaymentItemServiceData.UPDATE_VENDORPAYMENTITEM_TS001_TC003.input.databaseConnector,
            UpdateVendorPaymentItemServiceData.UPDATE_VENDORPAYMENTITEM_TS001_TC003.input.apiID,
            UpdateVendorPaymentItemServiceData.UPDATE_VENDORPAYMENTITEM_TS001_TC003.input.config,
            UpdateVendorPaymentItemServiceData.UPDATE_VENDORPAYMENTITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateVendorPaymentItemServiceData.UPDATE_VENDORPAYMENTITEM_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateVendorPaymentItemServiceData.UPDATE_VENDORPAYMENTITEM_TS001_TC003.output.message)        
	});

});
