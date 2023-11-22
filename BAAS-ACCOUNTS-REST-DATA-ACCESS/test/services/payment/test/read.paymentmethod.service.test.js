/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read PaymentMethod service class
**/

/**
 * Importing all required modules here
 */

const readPaymentMethodServiceData = require("../data/read.paymentmethod.service.data")
const readPaymentMethodService = require("../../../../src/services/payment/read.paymentmethod.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadPaymentMethodService = new readPaymentMethodService();
const ReadPaymentMethodServiceData = new readPaymentMethodServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.paymentmethod.ts.001] | FunctionPath : [src/services/payment/read.contianer.service.js/readPaymentMethods()]", () => {


	test(ReadPaymentMethodServiceData.READ_PAYMENTMETHOD_TS001_TC001.description, async () => {

        const output = await ReadPaymentMethodService.readPaymentMethods(
            ReadPaymentMethodServiceData.READ_PAYMENTMETHOD_TS001_TC001.input.databaseConnector,
            ReadPaymentMethodServiceData.READ_PAYMENTMETHOD_TS001_TC001.input.apiID,
            ReadPaymentMethodServiceData.READ_PAYMENTMETHOD_TS001_TC001.input.config,
            ReadPaymentMethodServiceData.READ_PAYMENTMETHOD_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadPaymentMethodServiceData.READ_PAYMENTMETHOD_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadPaymentMethodServiceData.READ_PAYMENTMETHOD_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadPaymentMethodServiceData.READ_PAYMENTMETHOD_TS001_TC001.output)[2])
	});



    test(ReadPaymentMethodServiceData.READ_PAYMENTMETHOD_TS001_TC002.description, async () => {

        const output = await ReadPaymentMethodService.readPaymentMethods(
            ReadPaymentMethodServiceData.READ_PAYMENTMETHOD_TS001_TC002.input.databaseConnector,
            ReadPaymentMethodServiceData.READ_PAYMENTMETHOD_TS001_TC002.input.apiID,
            ReadPaymentMethodServiceData.READ_PAYMENTMETHOD_TS001_TC002.input.config,
            ReadPaymentMethodServiceData.READ_PAYMENTMETHOD_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadPaymentMethodServiceData.READ_PAYMENTMETHOD_TS001_TC002.output.data)
        expect(output.status).toBe(ReadPaymentMethodServiceData.READ_PAYMENTMETHOD_TS001_TC002.output.status)
        expect(output.message).toBe(ReadPaymentMethodServiceData.READ_PAYMENTMETHOD_TS001_TC002.output.message)        
	});



    test(ReadPaymentMethodServiceData.READ_PAYMENTMETHOD_TS001_TC003.description, async () => {

        const output = await ReadPaymentMethodService.readPaymentMethods(
            ReadPaymentMethodServiceData.READ_PAYMENTMETHOD_TS001_TC003.input.databaseConnector,
            ReadPaymentMethodServiceData.READ_PAYMENTMETHOD_TS001_TC003.input.apiID,
            ReadPaymentMethodServiceData.READ_PAYMENTMETHOD_TS001_TC003.input.config,
            ReadPaymentMethodServiceData.READ_PAYMENTMETHOD_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadPaymentMethodServiceData.READ_PAYMENTMETHOD_TS001_TC003.output.status)
        expect(output.message).toBe(ReadPaymentMethodServiceData.READ_PAYMENTMETHOD_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.paymentmethod.ts.002] | FunctionPath : [src/services/payment/read.paymentmethod.service.js/readOnePaymentMethod()]", () => {


	test(ReadPaymentMethodServiceData.READ_ONE_PAYMENTMETHOD_TS002_TC001.description, async () => {

        const output = await ReadPaymentMethodService.readOnePaymentMethod(
            ReadPaymentMethodServiceData.READ_ONE_PAYMENTMETHOD_TS002_TC001.input.databaseConnector,
            ReadPaymentMethodServiceData.READ_ONE_PAYMENTMETHOD_TS002_TC001.input.apiID,
            ReadPaymentMethodServiceData.READ_ONE_PAYMENTMETHOD_TS002_TC001.input.config,
            ReadPaymentMethodServiceData.READ_ONE_PAYMENTMETHOD_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadPaymentMethodServiceData.READ_ONE_PAYMENTMETHOD_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadPaymentMethodServiceData.READ_ONE_PAYMENTMETHOD_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadPaymentMethodServiceData.READ_ONE_PAYMENTMETHOD_TS002_TC001.output)[2])
	});



    test(ReadPaymentMethodServiceData.READ_ONE_PAYMENTMETHOD_TS002_TC002.description, async () => {

        const output = await ReadPaymentMethodService.readOnePaymentMethod(
            ReadPaymentMethodServiceData.READ_ONE_PAYMENTMETHOD_TS002_TC002.input.databaseConnector,
            ReadPaymentMethodServiceData.READ_ONE_PAYMENTMETHOD_TS002_TC002.input.apiID,
            ReadPaymentMethodServiceData.READ_ONE_PAYMENTMETHOD_TS002_TC002.input.config,
            ReadPaymentMethodServiceData.READ_ONE_PAYMENTMETHOD_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadPaymentMethodServiceData.READ_ONE_PAYMENTMETHOD_TS002_TC002.output.data)
        expect(output.status).toBe(ReadPaymentMethodServiceData.READ_ONE_PAYMENTMETHOD_TS002_TC002.output.status)
        expect(output.message).toBe(ReadPaymentMethodServiceData.READ_ONE_PAYMENTMETHOD_TS002_TC002.output.message)        
	});



    test(ReadPaymentMethodServiceData.READ_ONE_PAYMENTMETHOD_TS002_TC003.description, async () => {

        const output = await ReadPaymentMethodService.readOnePaymentMethod(
            ReadPaymentMethodServiceData.READ_ONE_PAYMENTMETHOD_TS002_TC003.input.databaseConnector,
            ReadPaymentMethodServiceData.READ_ONE_PAYMENTMETHOD_TS002_TC003.input.apiID,
            ReadPaymentMethodServiceData.READ_ONE_PAYMENTMETHOD_TS002_TC003.input.config,
            ReadPaymentMethodServiceData.READ_ONE_PAYMENTMETHOD_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadPaymentMethodServiceData.READ_ONE_PAYMENTMETHOD_TS002_TC003.output.status)
        expect(output.message).toBe(ReadPaymentMethodServiceData.READ_ONE_PAYMENTMETHOD_TS002_TC003.output.message)        
	});

});