/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read VendorPayment service class
**/

/**
 * Importing all required modules here
 */

const readVendorPaymentServiceData = require("../data/read.vendorpayment.service.data")
const readVendorPaymentService = require("../../../../src/services/vendor/read.vendorpayment.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadVendorPaymentService = new readVendorPaymentService();
const ReadVendorPaymentServiceData = new readVendorPaymentServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorpayment.ts.001] | FunctionPath : [src/services/vendor/read.contianer.service.js/readVendorPayments()]", () => {


	test(ReadVendorPaymentServiceData.READ_VENDORPAYMENT_TS001_TC001.description, async () => {

        const output = await ReadVendorPaymentService.readVendorPayments(
            ReadVendorPaymentServiceData.READ_VENDORPAYMENT_TS001_TC001.input.databaseConnector,
            ReadVendorPaymentServiceData.READ_VENDORPAYMENT_TS001_TC001.input.apiID,
            ReadVendorPaymentServiceData.READ_VENDORPAYMENT_TS001_TC001.input.config,
            ReadVendorPaymentServiceData.READ_VENDORPAYMENT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorPaymentServiceData.READ_VENDORPAYMENT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorPaymentServiceData.READ_VENDORPAYMENT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorPaymentServiceData.READ_VENDORPAYMENT_TS001_TC001.output)[2])
	});



    test(ReadVendorPaymentServiceData.READ_VENDORPAYMENT_TS001_TC002.description, async () => {

        const output = await ReadVendorPaymentService.readVendorPayments(
            ReadVendorPaymentServiceData.READ_VENDORPAYMENT_TS001_TC002.input.databaseConnector,
            ReadVendorPaymentServiceData.READ_VENDORPAYMENT_TS001_TC002.input.apiID,
            ReadVendorPaymentServiceData.READ_VENDORPAYMENT_TS001_TC002.input.config,
            ReadVendorPaymentServiceData.READ_VENDORPAYMENT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorPaymentServiceData.READ_VENDORPAYMENT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadVendorPaymentServiceData.READ_VENDORPAYMENT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadVendorPaymentServiceData.READ_VENDORPAYMENT_TS001_TC002.output.message)        
	});



    test(ReadVendorPaymentServiceData.READ_VENDORPAYMENT_TS001_TC003.description, async () => {

        const output = await ReadVendorPaymentService.readVendorPayments(
            ReadVendorPaymentServiceData.READ_VENDORPAYMENT_TS001_TC003.input.databaseConnector,
            ReadVendorPaymentServiceData.READ_VENDORPAYMENT_TS001_TC003.input.apiID,
            ReadVendorPaymentServiceData.READ_VENDORPAYMENT_TS001_TC003.input.config,
            ReadVendorPaymentServiceData.READ_VENDORPAYMENT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorPaymentServiceData.READ_VENDORPAYMENT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadVendorPaymentServiceData.READ_VENDORPAYMENT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.vendorpayment.ts.002] | FunctionPath : [src/services/vendor/read.vendorpayment.service.js/readOneVendorPayment()]", () => {


	test(ReadVendorPaymentServiceData.READ_ONE_VENDORPAYMENT_TS002_TC001.description, async () => {

        const output = await ReadVendorPaymentService.readOneVendorPayment(
            ReadVendorPaymentServiceData.READ_ONE_VENDORPAYMENT_TS002_TC001.input.databaseConnector,
            ReadVendorPaymentServiceData.READ_ONE_VENDORPAYMENT_TS002_TC001.input.apiID,
            ReadVendorPaymentServiceData.READ_ONE_VENDORPAYMENT_TS002_TC001.input.config,
            ReadVendorPaymentServiceData.READ_ONE_VENDORPAYMENT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorPaymentServiceData.READ_ONE_VENDORPAYMENT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorPaymentServiceData.READ_ONE_VENDORPAYMENT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorPaymentServiceData.READ_ONE_VENDORPAYMENT_TS002_TC001.output)[2])
	});



    test(ReadVendorPaymentServiceData.READ_ONE_VENDORPAYMENT_TS002_TC002.description, async () => {

        const output = await ReadVendorPaymentService.readOneVendorPayment(
            ReadVendorPaymentServiceData.READ_ONE_VENDORPAYMENT_TS002_TC002.input.databaseConnector,
            ReadVendorPaymentServiceData.READ_ONE_VENDORPAYMENT_TS002_TC002.input.apiID,
            ReadVendorPaymentServiceData.READ_ONE_VENDORPAYMENT_TS002_TC002.input.config,
            ReadVendorPaymentServiceData.READ_ONE_VENDORPAYMENT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorPaymentServiceData.READ_ONE_VENDORPAYMENT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadVendorPaymentServiceData.READ_ONE_VENDORPAYMENT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadVendorPaymentServiceData.READ_ONE_VENDORPAYMENT_TS002_TC002.output.message)        
	});



    test(ReadVendorPaymentServiceData.READ_ONE_VENDORPAYMENT_TS002_TC003.description, async () => {

        const output = await ReadVendorPaymentService.readOneVendorPayment(
            ReadVendorPaymentServiceData.READ_ONE_VENDORPAYMENT_TS002_TC003.input.databaseConnector,
            ReadVendorPaymentServiceData.READ_ONE_VENDORPAYMENT_TS002_TC003.input.apiID,
            ReadVendorPaymentServiceData.READ_ONE_VENDORPAYMENT_TS002_TC003.input.config,
            ReadVendorPaymentServiceData.READ_ONE_VENDORPAYMENT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorPaymentServiceData.READ_ONE_VENDORPAYMENT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadVendorPaymentServiceData.READ_ONE_VENDORPAYMENT_TS002_TC003.output.message)        
	});

});