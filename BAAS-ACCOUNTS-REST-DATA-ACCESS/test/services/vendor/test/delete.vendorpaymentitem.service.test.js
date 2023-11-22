/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete vendorpaymentitem service class
**/

/**
 * Importing all required modules here
 */

const deleteVendorPaymentItemServiceData = require("../data/delete.vendorpaymentitem.service.data")
const deleteVendorPaymentItemService = require("../../../../src/services/vendor/delete.vendorpaymentitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteVendorPaymentItemService = new deleteVendorPaymentItemService();
const DeleteVendorPaymentItemServiceData = new deleteVendorPaymentItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorpaymentitem.ts.001] | FunctionPath : [src/services/vendor/delete.vendorpaymentitem.service.js/deleteOneVendorPaymentItem()]", () => {


	test(DeleteVendorPaymentItemServiceData.DELETE_ONE_VENDORPAYMENTITEM_TS001_TC001.description, async () => {

        const output = await DeleteVendorPaymentItemService.deleteOneVendorPaymentItem(
            DeleteVendorPaymentItemServiceData.DELETE_ONE_VENDORPAYMENTITEM_TS001_TC001.input.databaseConnector,
            DeleteVendorPaymentItemServiceData.DELETE_ONE_VENDORPAYMENTITEM_TS001_TC001.input.apiID,
            DeleteVendorPaymentItemServiceData.DELETE_ONE_VENDORPAYMENTITEM_TS001_TC001.input.config,
            DeleteVendorPaymentItemServiceData.DELETE_ONE_VENDORPAYMENTITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteVendorPaymentItemServiceData.DELETE_ONE_VENDORPAYMENTITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteVendorPaymentItemServiceData.DELETE_ONE_VENDORPAYMENTITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteVendorPaymentItemServiceData.DELETE_ONE_VENDORPAYMENTITEM_TS001_TC001.output)[2])
	});



    test(DeleteVendorPaymentItemServiceData.DELETE_ONE_VENDORPAYMENTITEM_TS001_TC002.description, async () => {

        const output = await DeleteVendorPaymentItemService.deleteOneVendorPaymentItem(
            DeleteVendorPaymentItemServiceData.DELETE_ONE_VENDORPAYMENTITEM_TS001_TC002.input.databaseConnector,
            DeleteVendorPaymentItemServiceData.DELETE_ONE_VENDORPAYMENTITEM_TS001_TC002.input.apiID,
            DeleteVendorPaymentItemServiceData.DELETE_ONE_VENDORPAYMENTITEM_TS001_TC002.input.config,
            DeleteVendorPaymentItemServiceData.DELETE_ONE_VENDORPAYMENTITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteVendorPaymentItemServiceData.DELETE_ONE_VENDORPAYMENTITEM_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteVendorPaymentItemServiceData.DELETE_ONE_VENDORPAYMENTITEM_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteVendorPaymentItemServiceData.DELETE_ONE_VENDORPAYMENTITEM_TS001_TC002.output.message)        
	});



    test(DeleteVendorPaymentItemServiceData.DELETE_ONE_VENDORPAYMENTITEM_TS001_TC003.description, async () => {

        const output = await DeleteVendorPaymentItemService.deleteOneVendorPaymentItem(
            DeleteVendorPaymentItemServiceData.DELETE_ONE_VENDORPAYMENTITEM_TS001_TC003.input.databaseConnector,
            DeleteVendorPaymentItemServiceData.DELETE_ONE_VENDORPAYMENTITEM_TS001_TC003.input.apiID,
            DeleteVendorPaymentItemServiceData.DELETE_ONE_VENDORPAYMENTITEM_TS001_TC003.input.config,
            DeleteVendorPaymentItemServiceData.DELETE_ONE_VENDORPAYMENTITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteVendorPaymentItemServiceData.DELETE_ONE_VENDORPAYMENTITEM_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteVendorPaymentItemServiceData.DELETE_ONE_VENDORPAYMENTITEM_TS001_TC003.output.message)        
	});

});
