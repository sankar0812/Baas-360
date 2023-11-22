/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read VendorPaymentItem service class
**/

/**
 * Importing all required modules here
 */

const readVendorPaymentItemServiceData = require("../data/read.vendorpaymentitem.service.data")
const readVendorPaymentItemService = require("../../../../src/services/vendor/read.vendorpaymentitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadVendorPaymentItemService = new readVendorPaymentItemService();
const ReadVendorPaymentItemServiceData = new readVendorPaymentItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorpaymentitem.ts.001] | FunctionPath : [src/services/vendor/read.contianer.service.js/readVendorPaymentItems()]", () => {


	test(ReadVendorPaymentItemServiceData.READ_VENDORPAYMENTITEM_TS001_TC001.description, async () => {

        const output = await ReadVendorPaymentItemService.readVendorPaymentItems(
            ReadVendorPaymentItemServiceData.READ_VENDORPAYMENTITEM_TS001_TC001.input.databaseConnector,
            ReadVendorPaymentItemServiceData.READ_VENDORPAYMENTITEM_TS001_TC001.input.apiID,
            ReadVendorPaymentItemServiceData.READ_VENDORPAYMENTITEM_TS001_TC001.input.config,
            ReadVendorPaymentItemServiceData.READ_VENDORPAYMENTITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorPaymentItemServiceData.READ_VENDORPAYMENTITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorPaymentItemServiceData.READ_VENDORPAYMENTITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorPaymentItemServiceData.READ_VENDORPAYMENTITEM_TS001_TC001.output)[2])
	});



    test(ReadVendorPaymentItemServiceData.READ_VENDORPAYMENTITEM_TS001_TC002.description, async () => {

        const output = await ReadVendorPaymentItemService.readVendorPaymentItems(
            ReadVendorPaymentItemServiceData.READ_VENDORPAYMENTITEM_TS001_TC002.input.databaseConnector,
            ReadVendorPaymentItemServiceData.READ_VENDORPAYMENTITEM_TS001_TC002.input.apiID,
            ReadVendorPaymentItemServiceData.READ_VENDORPAYMENTITEM_TS001_TC002.input.config,
            ReadVendorPaymentItemServiceData.READ_VENDORPAYMENTITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorPaymentItemServiceData.READ_VENDORPAYMENTITEM_TS001_TC002.output.data)
        expect(output.status).toBe(ReadVendorPaymentItemServiceData.READ_VENDORPAYMENTITEM_TS001_TC002.output.status)
        expect(output.message).toBe(ReadVendorPaymentItemServiceData.READ_VENDORPAYMENTITEM_TS001_TC002.output.message)        
	});



    test(ReadVendorPaymentItemServiceData.READ_VENDORPAYMENTITEM_TS001_TC003.description, async () => {

        const output = await ReadVendorPaymentItemService.readVendorPaymentItems(
            ReadVendorPaymentItemServiceData.READ_VENDORPAYMENTITEM_TS001_TC003.input.databaseConnector,
            ReadVendorPaymentItemServiceData.READ_VENDORPAYMENTITEM_TS001_TC003.input.apiID,
            ReadVendorPaymentItemServiceData.READ_VENDORPAYMENTITEM_TS001_TC003.input.config,
            ReadVendorPaymentItemServiceData.READ_VENDORPAYMENTITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorPaymentItemServiceData.READ_VENDORPAYMENTITEM_TS001_TC003.output.status)
        expect(output.message).toBe(ReadVendorPaymentItemServiceData.READ_VENDORPAYMENTITEM_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.vendorpaymentitem.ts.002] | FunctionPath : [src/services/vendor/read.vendorpaymentitem.service.js/readOneVendorPaymentItem()]", () => {


	test(ReadVendorPaymentItemServiceData.READ_ONE_VENDORPAYMENTITEM_TS002_TC001.description, async () => {

        const output = await ReadVendorPaymentItemService.readOneVendorPaymentItem(
            ReadVendorPaymentItemServiceData.READ_ONE_VENDORPAYMENTITEM_TS002_TC001.input.databaseConnector,
            ReadVendorPaymentItemServiceData.READ_ONE_VENDORPAYMENTITEM_TS002_TC001.input.apiID,
            ReadVendorPaymentItemServiceData.READ_ONE_VENDORPAYMENTITEM_TS002_TC001.input.config,
            ReadVendorPaymentItemServiceData.READ_ONE_VENDORPAYMENTITEM_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorPaymentItemServiceData.READ_ONE_VENDORPAYMENTITEM_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorPaymentItemServiceData.READ_ONE_VENDORPAYMENTITEM_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorPaymentItemServiceData.READ_ONE_VENDORPAYMENTITEM_TS002_TC001.output)[2])
	});



    test(ReadVendorPaymentItemServiceData.READ_ONE_VENDORPAYMENTITEM_TS002_TC002.description, async () => {

        const output = await ReadVendorPaymentItemService.readOneVendorPaymentItem(
            ReadVendorPaymentItemServiceData.READ_ONE_VENDORPAYMENTITEM_TS002_TC002.input.databaseConnector,
            ReadVendorPaymentItemServiceData.READ_ONE_VENDORPAYMENTITEM_TS002_TC002.input.apiID,
            ReadVendorPaymentItemServiceData.READ_ONE_VENDORPAYMENTITEM_TS002_TC002.input.config,
            ReadVendorPaymentItemServiceData.READ_ONE_VENDORPAYMENTITEM_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorPaymentItemServiceData.READ_ONE_VENDORPAYMENTITEM_TS002_TC002.output.data)
        expect(output.status).toBe(ReadVendorPaymentItemServiceData.READ_ONE_VENDORPAYMENTITEM_TS002_TC002.output.status)
        expect(output.message).toBe(ReadVendorPaymentItemServiceData.READ_ONE_VENDORPAYMENTITEM_TS002_TC002.output.message)        
	});



    test(ReadVendorPaymentItemServiceData.READ_ONE_VENDORPAYMENTITEM_TS002_TC003.description, async () => {

        const output = await ReadVendorPaymentItemService.readOneVendorPaymentItem(
            ReadVendorPaymentItemServiceData.READ_ONE_VENDORPAYMENTITEM_TS002_TC003.input.databaseConnector,
            ReadVendorPaymentItemServiceData.READ_ONE_VENDORPAYMENTITEM_TS002_TC003.input.apiID,
            ReadVendorPaymentItemServiceData.READ_ONE_VENDORPAYMENTITEM_TS002_TC003.input.config,
            ReadVendorPaymentItemServiceData.READ_ONE_VENDORPAYMENTITEM_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorPaymentItemServiceData.READ_ONE_VENDORPAYMENTITEM_TS002_TC003.output.status)
        expect(output.message).toBe(ReadVendorPaymentItemServiceData.READ_ONE_VENDORPAYMENTITEM_TS002_TC003.output.message)        
	});

});