/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read CustomerPayment service class
**/

/**
 * Importing all required modules here
 */

const readCustomerPaymentServiceData = require("../data/read.customerpayment.service.data")
const readCustomerPaymentService = require("../../../../src/services/customer/read.customerpayment.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadCustomerPaymentService = new readCustomerPaymentService();
const ReadCustomerPaymentServiceData = new readCustomerPaymentServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customerpayment.ts.001] | FunctionPath : [src/services/customer/read.contianer.service.js/readCustomerPayments()]", () => {


	test(ReadCustomerPaymentServiceData.READ_CUSTOMERPAYMENT_TS001_TC001.description, async () => {

        const output = await ReadCustomerPaymentService.readCustomerPayments(
            ReadCustomerPaymentServiceData.READ_CUSTOMERPAYMENT_TS001_TC001.input.databaseConnector,
            ReadCustomerPaymentServiceData.READ_CUSTOMERPAYMENT_TS001_TC001.input.apiID,
            ReadCustomerPaymentServiceData.READ_CUSTOMERPAYMENT_TS001_TC001.input.config,
            ReadCustomerPaymentServiceData.READ_CUSTOMERPAYMENT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerPaymentServiceData.READ_CUSTOMERPAYMENT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerPaymentServiceData.READ_CUSTOMERPAYMENT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerPaymentServiceData.READ_CUSTOMERPAYMENT_TS001_TC001.output)[2])
	});



    test(ReadCustomerPaymentServiceData.READ_CUSTOMERPAYMENT_TS001_TC002.description, async () => {

        const output = await ReadCustomerPaymentService.readCustomerPayments(
            ReadCustomerPaymentServiceData.READ_CUSTOMERPAYMENT_TS001_TC002.input.databaseConnector,
            ReadCustomerPaymentServiceData.READ_CUSTOMERPAYMENT_TS001_TC002.input.apiID,
            ReadCustomerPaymentServiceData.READ_CUSTOMERPAYMENT_TS001_TC002.input.config,
            ReadCustomerPaymentServiceData.READ_CUSTOMERPAYMENT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerPaymentServiceData.READ_CUSTOMERPAYMENT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadCustomerPaymentServiceData.READ_CUSTOMERPAYMENT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadCustomerPaymentServiceData.READ_CUSTOMERPAYMENT_TS001_TC002.output.message)        
	});



    test(ReadCustomerPaymentServiceData.READ_CUSTOMERPAYMENT_TS001_TC003.description, async () => {

        const output = await ReadCustomerPaymentService.readCustomerPayments(
            ReadCustomerPaymentServiceData.READ_CUSTOMERPAYMENT_TS001_TC003.input.databaseConnector,
            ReadCustomerPaymentServiceData.READ_CUSTOMERPAYMENT_TS001_TC003.input.apiID,
            ReadCustomerPaymentServiceData.READ_CUSTOMERPAYMENT_TS001_TC003.input.config,
            ReadCustomerPaymentServiceData.READ_CUSTOMERPAYMENT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerPaymentServiceData.READ_CUSTOMERPAYMENT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadCustomerPaymentServiceData.READ_CUSTOMERPAYMENT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.customerpayment.ts.002] | FunctionPath : [src/services/customer/read.customerpayment.service.js/readOneCustomerPayment()]", () => {


	test(ReadCustomerPaymentServiceData.READ_ONE_CUSTOMERPAYMENT_TS002_TC001.description, async () => {

        const output = await ReadCustomerPaymentService.readOneCustomerPayment(
            ReadCustomerPaymentServiceData.READ_ONE_CUSTOMERPAYMENT_TS002_TC001.input.databaseConnector,
            ReadCustomerPaymentServiceData.READ_ONE_CUSTOMERPAYMENT_TS002_TC001.input.apiID,
            ReadCustomerPaymentServiceData.READ_ONE_CUSTOMERPAYMENT_TS002_TC001.input.config,
            ReadCustomerPaymentServiceData.READ_ONE_CUSTOMERPAYMENT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerPaymentServiceData.READ_ONE_CUSTOMERPAYMENT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerPaymentServiceData.READ_ONE_CUSTOMERPAYMENT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerPaymentServiceData.READ_ONE_CUSTOMERPAYMENT_TS002_TC001.output)[2])
	});



    test(ReadCustomerPaymentServiceData.READ_ONE_CUSTOMERPAYMENT_TS002_TC002.description, async () => {

        const output = await ReadCustomerPaymentService.readOneCustomerPayment(
            ReadCustomerPaymentServiceData.READ_ONE_CUSTOMERPAYMENT_TS002_TC002.input.databaseConnector,
            ReadCustomerPaymentServiceData.READ_ONE_CUSTOMERPAYMENT_TS002_TC002.input.apiID,
            ReadCustomerPaymentServiceData.READ_ONE_CUSTOMERPAYMENT_TS002_TC002.input.config,
            ReadCustomerPaymentServiceData.READ_ONE_CUSTOMERPAYMENT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerPaymentServiceData.READ_ONE_CUSTOMERPAYMENT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadCustomerPaymentServiceData.READ_ONE_CUSTOMERPAYMENT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadCustomerPaymentServiceData.READ_ONE_CUSTOMERPAYMENT_TS002_TC002.output.message)        
	});



    test(ReadCustomerPaymentServiceData.READ_ONE_CUSTOMERPAYMENT_TS002_TC003.description, async () => {

        const output = await ReadCustomerPaymentService.readOneCustomerPayment(
            ReadCustomerPaymentServiceData.READ_ONE_CUSTOMERPAYMENT_TS002_TC003.input.databaseConnector,
            ReadCustomerPaymentServiceData.READ_ONE_CUSTOMERPAYMENT_TS002_TC003.input.apiID,
            ReadCustomerPaymentServiceData.READ_ONE_CUSTOMERPAYMENT_TS002_TC003.input.config,
            ReadCustomerPaymentServiceData.READ_ONE_CUSTOMERPAYMENT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerPaymentServiceData.READ_ONE_CUSTOMERPAYMENT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadCustomerPaymentServiceData.READ_ONE_CUSTOMERPAYMENT_TS002_TC003.output.message)        
	});

});