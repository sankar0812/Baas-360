/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create vendorpaymentlog service class
**/

/**
 * Importing all required modules here
 */

const createVendorPaymentLogServiceData = require("../data/create.vendorpaymentlog.service.data")
const createVendorPaymentLogService = require("../../../../src/services/vendor/create.vendorpaymentlog.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateVendorPaymentLogService = new createVendorPaymentLogService();
const CreateVendorPaymentLogServiceData = new createVendorPaymentLogServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendorpaymentlog.ts.001] | FunctionPath : [src/services/vendor/create.vendorpaymentlog.service.js/createOneVendorPaymentLog()]", () => {


	test(CreateVendorPaymentLogServiceData.CREATE_ONE_VENDORPAYMENTLOG_TS001_TC001.description, async () => {

        const output = await CreateVendorPaymentLogService.createOneVendorPaymentLog(
            CreateVendorPaymentLogServiceData.CREATE_ONE_VENDORPAYMENTLOG_TS001_TC001.input.databaseConnector,
            CreateVendorPaymentLogServiceData.CREATE_ONE_VENDORPAYMENTLOG_TS001_TC001.input.apiID,
            CreateVendorPaymentLogServiceData.CREATE_ONE_VENDORPAYMENTLOG_TS001_TC001.input.config,
            CreateVendorPaymentLogServiceData.CREATE_ONE_VENDORPAYMENTLOG_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateVendorPaymentLogServiceData.CREATE_ONE_VENDORPAYMENTLOG_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateVendorPaymentLogServiceData.CREATE_ONE_VENDORPAYMENTLOG_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateVendorPaymentLogServiceData.CREATE_ONE_VENDORPAYMENTLOG_TS001_TC001.output)[2])
	});



    test(CreateVendorPaymentLogServiceData.CREATE_ONE_VENDORPAYMENTLOG_TS001_TC002.description, async () => {

        const output = await CreateVendorPaymentLogService.createOneVendorPaymentLog(
            CreateVendorPaymentLogServiceData.CREATE_ONE_VENDORPAYMENTLOG_TS001_TC002.input.databaseConnector,
            CreateVendorPaymentLogServiceData.CREATE_ONE_VENDORPAYMENTLOG_TS001_TC002.input.apiID,
            CreateVendorPaymentLogServiceData.CREATE_ONE_VENDORPAYMENTLOG_TS001_TC002.input.config,
            CreateVendorPaymentLogServiceData.CREATE_ONE_VENDORPAYMENTLOG_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateVendorPaymentLogServiceData.CREATE_ONE_VENDORPAYMENTLOG_TS001_TC002.output.data)
        expect(output.status).toBe(CreateVendorPaymentLogServiceData.CREATE_ONE_VENDORPAYMENTLOG_TS001_TC002.output.status)
        expect(output.message).toBe(CreateVendorPaymentLogServiceData.CREATE_ONE_VENDORPAYMENTLOG_TS001_TC002.output.message)        
	});



    test(CreateVendorPaymentLogServiceData.CREATE_ONE_VENDORPAYMENTLOG_TS001_TC003.description, async () => {

        const output = await CreateVendorPaymentLogService.createOneVendorPaymentLog(
            CreateVendorPaymentLogServiceData.CREATE_ONE_VENDORPAYMENTLOG_TS001_TC003.input.databaseConnector,
            CreateVendorPaymentLogServiceData.CREATE_ONE_VENDORPAYMENTLOG_TS001_TC003.input.apiID,
            CreateVendorPaymentLogServiceData.CREATE_ONE_VENDORPAYMENTLOG_TS001_TC003.input.config,
            CreateVendorPaymentLogServiceData.CREATE_ONE_VENDORPAYMENTLOG_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateVendorPaymentLogServiceData.CREATE_ONE_VENDORPAYMENTLOG_TS001_TC003.output.status)
        expect(output.message).toBe(CreateVendorPaymentLogServiceData.CREATE_ONE_VENDORPAYMENTLOG_TS001_TC003.output.message)        
	});

});