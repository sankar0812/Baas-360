/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read VendorPaymentLog service class
**/

/**
 * Importing all required modules here
 */

const readVendorPaymentLogServiceData = require("../data/read.vendorpaymentlog.service.data")
const readVendorPaymentLogService = require("../../../../src/services/vendor/read.vendorpaymentlog.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadVendorPaymentLogService = new readVendorPaymentLogService();
const ReadVendorPaymentLogServiceData = new readVendorPaymentLogServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorpaymentlog.ts.001] | FunctionPath : [src/services/vendor/read.contianer.service.js/readVendorPaymentLogs()]", () => {


	test(ReadVendorPaymentLogServiceData.READ_VENDORPAYMENTLOG_TS001_TC001.description, async () => {

        const output = await ReadVendorPaymentLogService.readVendorPaymentLogs(
            ReadVendorPaymentLogServiceData.READ_VENDORPAYMENTLOG_TS001_TC001.input.databaseConnector,
            ReadVendorPaymentLogServiceData.READ_VENDORPAYMENTLOG_TS001_TC001.input.apiID,
            ReadVendorPaymentLogServiceData.READ_VENDORPAYMENTLOG_TS001_TC001.input.config,
            ReadVendorPaymentLogServiceData.READ_VENDORPAYMENTLOG_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorPaymentLogServiceData.READ_VENDORPAYMENTLOG_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorPaymentLogServiceData.READ_VENDORPAYMENTLOG_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorPaymentLogServiceData.READ_VENDORPAYMENTLOG_TS001_TC001.output)[2])
	});



    test(ReadVendorPaymentLogServiceData.READ_VENDORPAYMENTLOG_TS001_TC002.description, async () => {

        const output = await ReadVendorPaymentLogService.readVendorPaymentLogs(
            ReadVendorPaymentLogServiceData.READ_VENDORPAYMENTLOG_TS001_TC002.input.databaseConnector,
            ReadVendorPaymentLogServiceData.READ_VENDORPAYMENTLOG_TS001_TC002.input.apiID,
            ReadVendorPaymentLogServiceData.READ_VENDORPAYMENTLOG_TS001_TC002.input.config,
            ReadVendorPaymentLogServiceData.READ_VENDORPAYMENTLOG_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorPaymentLogServiceData.READ_VENDORPAYMENTLOG_TS001_TC002.output.data)
        expect(output.status).toBe(ReadVendorPaymentLogServiceData.READ_VENDORPAYMENTLOG_TS001_TC002.output.status)
        expect(output.message).toBe(ReadVendorPaymentLogServiceData.READ_VENDORPAYMENTLOG_TS001_TC002.output.message)        
	});



    test(ReadVendorPaymentLogServiceData.READ_VENDORPAYMENTLOG_TS001_TC003.description, async () => {

        const output = await ReadVendorPaymentLogService.readVendorPaymentLogs(
            ReadVendorPaymentLogServiceData.READ_VENDORPAYMENTLOG_TS001_TC003.input.databaseConnector,
            ReadVendorPaymentLogServiceData.READ_VENDORPAYMENTLOG_TS001_TC003.input.apiID,
            ReadVendorPaymentLogServiceData.READ_VENDORPAYMENTLOG_TS001_TC003.input.config,
            ReadVendorPaymentLogServiceData.READ_VENDORPAYMENTLOG_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorPaymentLogServiceData.READ_VENDORPAYMENTLOG_TS001_TC003.output.status)
        expect(output.message).toBe(ReadVendorPaymentLogServiceData.READ_VENDORPAYMENTLOG_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.vendorpaymentlog.ts.002] | FunctionPath : [src/services/vendor/read.vendorpaymentlog.service.js/readOneVendorPaymentLog()]", () => {


	test(ReadVendorPaymentLogServiceData.READ_ONE_VENDORPAYMENTLOG_TS002_TC001.description, async () => {

        const output = await ReadVendorPaymentLogService.readOneVendorPaymentLog(
            ReadVendorPaymentLogServiceData.READ_ONE_VENDORPAYMENTLOG_TS002_TC001.input.databaseConnector,
            ReadVendorPaymentLogServiceData.READ_ONE_VENDORPAYMENTLOG_TS002_TC001.input.apiID,
            ReadVendorPaymentLogServiceData.READ_ONE_VENDORPAYMENTLOG_TS002_TC001.input.config,
            ReadVendorPaymentLogServiceData.READ_ONE_VENDORPAYMENTLOG_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadVendorPaymentLogServiceData.READ_ONE_VENDORPAYMENTLOG_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadVendorPaymentLogServiceData.READ_ONE_VENDORPAYMENTLOG_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadVendorPaymentLogServiceData.READ_ONE_VENDORPAYMENTLOG_TS002_TC001.output)[2])
	});



    test(ReadVendorPaymentLogServiceData.READ_ONE_VENDORPAYMENTLOG_TS002_TC002.description, async () => {

        const output = await ReadVendorPaymentLogService.readOneVendorPaymentLog(
            ReadVendorPaymentLogServiceData.READ_ONE_VENDORPAYMENTLOG_TS002_TC002.input.databaseConnector,
            ReadVendorPaymentLogServiceData.READ_ONE_VENDORPAYMENTLOG_TS002_TC002.input.apiID,
            ReadVendorPaymentLogServiceData.READ_ONE_VENDORPAYMENTLOG_TS002_TC002.input.config,
            ReadVendorPaymentLogServiceData.READ_ONE_VENDORPAYMENTLOG_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadVendorPaymentLogServiceData.READ_ONE_VENDORPAYMENTLOG_TS002_TC002.output.data)
        expect(output.status).toBe(ReadVendorPaymentLogServiceData.READ_ONE_VENDORPAYMENTLOG_TS002_TC002.output.status)
        expect(output.message).toBe(ReadVendorPaymentLogServiceData.READ_ONE_VENDORPAYMENTLOG_TS002_TC002.output.message)        
	});



    test(ReadVendorPaymentLogServiceData.READ_ONE_VENDORPAYMENTLOG_TS002_TC003.description, async () => {

        const output = await ReadVendorPaymentLogService.readOneVendorPaymentLog(
            ReadVendorPaymentLogServiceData.READ_ONE_VENDORPAYMENTLOG_TS002_TC003.input.databaseConnector,
            ReadVendorPaymentLogServiceData.READ_ONE_VENDORPAYMENTLOG_TS002_TC003.input.apiID,
            ReadVendorPaymentLogServiceData.READ_ONE_VENDORPAYMENTLOG_TS002_TC003.input.config,
            ReadVendorPaymentLogServiceData.READ_ONE_VENDORPAYMENTLOG_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadVendorPaymentLogServiceData.READ_ONE_VENDORPAYMENTLOG_TS002_TC003.output.status)
        expect(output.message).toBe(ReadVendorPaymentLogServiceData.READ_ONE_VENDORPAYMENTLOG_TS002_TC003.output.message)        
	});

});