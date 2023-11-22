/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read CustomerPaymentItem service class
**/

/**
 * Importing all required modules here
 */

const readCustomerPaymentItemServiceData = require("../data/read.customerpaymentitem.service.data")
const readCustomerPaymentItemService = require("../../../../src/services/customer/read.customerpaymentitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadCustomerPaymentItemService = new readCustomerPaymentItemService();
const ReadCustomerPaymentItemServiceData = new readCustomerPaymentItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customerpaymentitem.ts.001] | FunctionPath : [src/services/customer/read.contianer.service.js/readCustomerPaymentItems()]", () => {


	test(ReadCustomerPaymentItemServiceData.READ_CUSTOMERPAYMENTITEM_TS001_TC001.description, async () => {

        const output = await ReadCustomerPaymentItemService.readCustomerPaymentItems(
            ReadCustomerPaymentItemServiceData.READ_CUSTOMERPAYMENTITEM_TS001_TC001.input.databaseConnector,
            ReadCustomerPaymentItemServiceData.READ_CUSTOMERPAYMENTITEM_TS001_TC001.input.apiID,
            ReadCustomerPaymentItemServiceData.READ_CUSTOMERPAYMENTITEM_TS001_TC001.input.config,
            ReadCustomerPaymentItemServiceData.READ_CUSTOMERPAYMENTITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerPaymentItemServiceData.READ_CUSTOMERPAYMENTITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerPaymentItemServiceData.READ_CUSTOMERPAYMENTITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerPaymentItemServiceData.READ_CUSTOMERPAYMENTITEM_TS001_TC001.output)[2])
	});



    test(ReadCustomerPaymentItemServiceData.READ_CUSTOMERPAYMENTITEM_TS001_TC002.description, async () => {

        const output = await ReadCustomerPaymentItemService.readCustomerPaymentItems(
            ReadCustomerPaymentItemServiceData.READ_CUSTOMERPAYMENTITEM_TS001_TC002.input.databaseConnector,
            ReadCustomerPaymentItemServiceData.READ_CUSTOMERPAYMENTITEM_TS001_TC002.input.apiID,
            ReadCustomerPaymentItemServiceData.READ_CUSTOMERPAYMENTITEM_TS001_TC002.input.config,
            ReadCustomerPaymentItemServiceData.READ_CUSTOMERPAYMENTITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerPaymentItemServiceData.READ_CUSTOMERPAYMENTITEM_TS001_TC002.output.data)
        expect(output.status).toBe(ReadCustomerPaymentItemServiceData.READ_CUSTOMERPAYMENTITEM_TS001_TC002.output.status)
        expect(output.message).toBe(ReadCustomerPaymentItemServiceData.READ_CUSTOMERPAYMENTITEM_TS001_TC002.output.message)        
	});



    test(ReadCustomerPaymentItemServiceData.READ_CUSTOMERPAYMENTITEM_TS001_TC003.description, async () => {

        const output = await ReadCustomerPaymentItemService.readCustomerPaymentItems(
            ReadCustomerPaymentItemServiceData.READ_CUSTOMERPAYMENTITEM_TS001_TC003.input.databaseConnector,
            ReadCustomerPaymentItemServiceData.READ_CUSTOMERPAYMENTITEM_TS001_TC003.input.apiID,
            ReadCustomerPaymentItemServiceData.READ_CUSTOMERPAYMENTITEM_TS001_TC003.input.config,
            ReadCustomerPaymentItemServiceData.READ_CUSTOMERPAYMENTITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerPaymentItemServiceData.READ_CUSTOMERPAYMENTITEM_TS001_TC003.output.status)
        expect(output.message).toBe(ReadCustomerPaymentItemServiceData.READ_CUSTOMERPAYMENTITEM_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.customerpaymentitem.ts.002] | FunctionPath : [src/services/customer/read.customerpaymentitem.service.js/readOneCustomerPaymentItem()]", () => {


	test(ReadCustomerPaymentItemServiceData.READ_ONE_CUSTOMERPAYMENTITEM_TS002_TC001.description, async () => {

        const output = await ReadCustomerPaymentItemService.readOneCustomerPaymentItem(
            ReadCustomerPaymentItemServiceData.READ_ONE_CUSTOMERPAYMENTITEM_TS002_TC001.input.databaseConnector,
            ReadCustomerPaymentItemServiceData.READ_ONE_CUSTOMERPAYMENTITEM_TS002_TC001.input.apiID,
            ReadCustomerPaymentItemServiceData.READ_ONE_CUSTOMERPAYMENTITEM_TS002_TC001.input.config,
            ReadCustomerPaymentItemServiceData.READ_ONE_CUSTOMERPAYMENTITEM_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadCustomerPaymentItemServiceData.READ_ONE_CUSTOMERPAYMENTITEM_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadCustomerPaymentItemServiceData.READ_ONE_CUSTOMERPAYMENTITEM_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadCustomerPaymentItemServiceData.READ_ONE_CUSTOMERPAYMENTITEM_TS002_TC001.output)[2])
	});



    test(ReadCustomerPaymentItemServiceData.READ_ONE_CUSTOMERPAYMENTITEM_TS002_TC002.description, async () => {

        const output = await ReadCustomerPaymentItemService.readOneCustomerPaymentItem(
            ReadCustomerPaymentItemServiceData.READ_ONE_CUSTOMERPAYMENTITEM_TS002_TC002.input.databaseConnector,
            ReadCustomerPaymentItemServiceData.READ_ONE_CUSTOMERPAYMENTITEM_TS002_TC002.input.apiID,
            ReadCustomerPaymentItemServiceData.READ_ONE_CUSTOMERPAYMENTITEM_TS002_TC002.input.config,
            ReadCustomerPaymentItemServiceData.READ_ONE_CUSTOMERPAYMENTITEM_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadCustomerPaymentItemServiceData.READ_ONE_CUSTOMERPAYMENTITEM_TS002_TC002.output.data)
        expect(output.status).toBe(ReadCustomerPaymentItemServiceData.READ_ONE_CUSTOMERPAYMENTITEM_TS002_TC002.output.status)
        expect(output.message).toBe(ReadCustomerPaymentItemServiceData.READ_ONE_CUSTOMERPAYMENTITEM_TS002_TC002.output.message)        
	});



    test(ReadCustomerPaymentItemServiceData.READ_ONE_CUSTOMERPAYMENTITEM_TS002_TC003.description, async () => {

        const output = await ReadCustomerPaymentItemService.readOneCustomerPaymentItem(
            ReadCustomerPaymentItemServiceData.READ_ONE_CUSTOMERPAYMENTITEM_TS002_TC003.input.databaseConnector,
            ReadCustomerPaymentItemServiceData.READ_ONE_CUSTOMERPAYMENTITEM_TS002_TC003.input.apiID,
            ReadCustomerPaymentItemServiceData.READ_ONE_CUSTOMERPAYMENTITEM_TS002_TC003.input.config,
            ReadCustomerPaymentItemServiceData.READ_ONE_CUSTOMERPAYMENTITEM_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadCustomerPaymentItemServiceData.READ_ONE_CUSTOMERPAYMENTITEM_TS002_TC003.output.status)
        expect(output.message).toBe(ReadCustomerPaymentItemServiceData.READ_ONE_CUSTOMERPAYMENTITEM_TS002_TC003.output.message)        
	});

});