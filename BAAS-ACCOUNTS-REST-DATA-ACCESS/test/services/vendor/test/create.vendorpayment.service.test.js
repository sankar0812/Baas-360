/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create vendorpayment service class
**/

/**
 * Importing all required modules here
 */

const createVendorPaymentServiceData = require("../data/create.vendorpayment.service.data")
const createVendorPaymentService = require("../../../../src/services/vendor/create.vendorpayment.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateVendorPaymentService = new createVendorPaymentService();
const CreateVendorPaymentServiceData = new createVendorPaymentServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorpayment.ts.001] | FunctionPath : [src/services/vendor/create.vendorpayment.service.js/createOneVendorPayment()]", () => {


	test(CreateVendorPaymentServiceData.CREATE_ONE_VENDORPAYMENT_TS001_TC001.description, async () => {

        const output = await CreateVendorPaymentService.createOneVendorPayment(
            CreateVendorPaymentServiceData.CREATE_ONE_VENDORPAYMENT_TS001_TC001.input.databaseConnector,
            CreateVendorPaymentServiceData.CREATE_ONE_VENDORPAYMENT_TS001_TC001.input.apiID,
            CreateVendorPaymentServiceData.CREATE_ONE_VENDORPAYMENT_TS001_TC001.input.config,
            CreateVendorPaymentServiceData.CREATE_ONE_VENDORPAYMENT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateVendorPaymentServiceData.CREATE_ONE_VENDORPAYMENT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateVendorPaymentServiceData.CREATE_ONE_VENDORPAYMENT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateVendorPaymentServiceData.CREATE_ONE_VENDORPAYMENT_TS001_TC001.output)[2])
	});



    test(CreateVendorPaymentServiceData.CREATE_ONE_VENDORPAYMENT_TS001_TC002.description, async () => {

        const output = await CreateVendorPaymentService.createOneVendorPayment(
            CreateVendorPaymentServiceData.CREATE_ONE_VENDORPAYMENT_TS001_TC002.input.databaseConnector,
            CreateVendorPaymentServiceData.CREATE_ONE_VENDORPAYMENT_TS001_TC002.input.apiID,
            CreateVendorPaymentServiceData.CREATE_ONE_VENDORPAYMENT_TS001_TC002.input.config,
            CreateVendorPaymentServiceData.CREATE_ONE_VENDORPAYMENT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateVendorPaymentServiceData.CREATE_ONE_VENDORPAYMENT_TS001_TC002.output.data)
        expect(output.status).toBe(CreateVendorPaymentServiceData.CREATE_ONE_VENDORPAYMENT_TS001_TC002.output.status)
        expect(output.message).toBe(CreateVendorPaymentServiceData.CREATE_ONE_VENDORPAYMENT_TS001_TC002.output.message)        
	});



    test(CreateVendorPaymentServiceData.CREATE_ONE_VENDORPAYMENT_TS001_TC003.description, async () => {

        const output = await CreateVendorPaymentService.createOneVendorPayment(
            CreateVendorPaymentServiceData.CREATE_ONE_VENDORPAYMENT_TS001_TC003.input.databaseConnector,
            CreateVendorPaymentServiceData.CREATE_ONE_VENDORPAYMENT_TS001_TC003.input.apiID,
            CreateVendorPaymentServiceData.CREATE_ONE_VENDORPAYMENT_TS001_TC003.input.config,
            CreateVendorPaymentServiceData.CREATE_ONE_VENDORPAYMENT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateVendorPaymentServiceData.CREATE_ONE_VENDORPAYMENT_TS001_TC003.output.status)
        expect(output.message).toBe(CreateVendorPaymentServiceData.CREATE_ONE_VENDORPAYMENT_TS001_TC003.output.message)        
	});

});