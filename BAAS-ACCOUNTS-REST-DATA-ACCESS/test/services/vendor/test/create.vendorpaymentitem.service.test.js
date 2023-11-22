/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create vendorpaymentitem service class
**/

/**
 * Importing all required modules here
 */

const createVendorPaymentItemServiceData = require("../data/create.vendorpaymentitem.service.data")
const createVendorPaymentItemService = require("../../../../src/services/vendor/create.vendorpaymentitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateVendorPaymentItemService = new createVendorPaymentItemService();
const CreateVendorPaymentItemServiceData = new createVendorPaymentItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorpaymentitem.ts.001] | FunctionPath : [src/services/vendor/create.vendorpaymentitem.service.js/createOneVendorPaymentItem()]", () => {


	test(CreateVendorPaymentItemServiceData.CREATE_ONE_VENDORPAYMENTITEM_TS001_TC001.description, async () => {

        const output = await CreateVendorPaymentItemService.createOneVendorPaymentItem(
            CreateVendorPaymentItemServiceData.CREATE_ONE_VENDORPAYMENTITEM_TS001_TC001.input.databaseConnector,
            CreateVendorPaymentItemServiceData.CREATE_ONE_VENDORPAYMENTITEM_TS001_TC001.input.apiID,
            CreateVendorPaymentItemServiceData.CREATE_ONE_VENDORPAYMENTITEM_TS001_TC001.input.config,
            CreateVendorPaymentItemServiceData.CREATE_ONE_VENDORPAYMENTITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateVendorPaymentItemServiceData.CREATE_ONE_VENDORPAYMENTITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateVendorPaymentItemServiceData.CREATE_ONE_VENDORPAYMENTITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateVendorPaymentItemServiceData.CREATE_ONE_VENDORPAYMENTITEM_TS001_TC001.output)[2])
	});



    test(CreateVendorPaymentItemServiceData.CREATE_ONE_VENDORPAYMENTITEM_TS001_TC002.description, async () => {

        const output = await CreateVendorPaymentItemService.createOneVendorPaymentItem(
            CreateVendorPaymentItemServiceData.CREATE_ONE_VENDORPAYMENTITEM_TS001_TC002.input.databaseConnector,
            CreateVendorPaymentItemServiceData.CREATE_ONE_VENDORPAYMENTITEM_TS001_TC002.input.apiID,
            CreateVendorPaymentItemServiceData.CREATE_ONE_VENDORPAYMENTITEM_TS001_TC002.input.config,
            CreateVendorPaymentItemServiceData.CREATE_ONE_VENDORPAYMENTITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateVendorPaymentItemServiceData.CREATE_ONE_VENDORPAYMENTITEM_TS001_TC002.output.data)
        expect(output.status).toBe(CreateVendorPaymentItemServiceData.CREATE_ONE_VENDORPAYMENTITEM_TS001_TC002.output.status)
        expect(output.message).toBe(CreateVendorPaymentItemServiceData.CREATE_ONE_VENDORPAYMENTITEM_TS001_TC002.output.message)        
	});



    test(CreateVendorPaymentItemServiceData.CREATE_ONE_VENDORPAYMENTITEM_TS001_TC003.description, async () => {

        const output = await CreateVendorPaymentItemService.createOneVendorPaymentItem(
            CreateVendorPaymentItemServiceData.CREATE_ONE_VENDORPAYMENTITEM_TS001_TC003.input.databaseConnector,
            CreateVendorPaymentItemServiceData.CREATE_ONE_VENDORPAYMENTITEM_TS001_TC003.input.apiID,
            CreateVendorPaymentItemServiceData.CREATE_ONE_VENDORPAYMENTITEM_TS001_TC003.input.config,
            CreateVendorPaymentItemServiceData.CREATE_ONE_VENDORPAYMENTITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateVendorPaymentItemServiceData.CREATE_ONE_VENDORPAYMENTITEM_TS001_TC003.output.status)
        expect(output.message).toBe(CreateVendorPaymentItemServiceData.CREATE_ONE_VENDORPAYMENTITEM_TS001_TC003.output.message)        
	});

});