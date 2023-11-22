/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read PaymentStatus service class
**/

/**
 * Importing all required modules here
 */

const readPaymentStatusServiceData = require("../data/read.paymentstatus.service.data")
const readPaymentStatusService = require("../../../../src/services/payment/read.paymentstatus.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadPaymentStatusService = new readPaymentStatusService();
const ReadPaymentStatusServiceData = new readPaymentStatusServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.paymentstatus.ts.001] | FunctionPath : [src/services/payment/read.contianer.service.js/readPaymentStatuss()]", () => {


	test(ReadPaymentStatusServiceData.READ_PAYMENTSTATUS_TS001_TC001.description, async () => {

        const output = await ReadPaymentStatusService.readPaymentStatuses(
            ReadPaymentStatusServiceData.READ_PAYMENTSTATUS_TS001_TC001.input.databaseConnector,
            ReadPaymentStatusServiceData.READ_PAYMENTSTATUS_TS001_TC001.input.apiID,
            ReadPaymentStatusServiceData.READ_PAYMENTSTATUS_TS001_TC001.input.config,
            ReadPaymentStatusServiceData.READ_PAYMENTSTATUS_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadPaymentStatusServiceData.READ_PAYMENTSTATUS_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadPaymentStatusServiceData.READ_PAYMENTSTATUS_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadPaymentStatusServiceData.READ_PAYMENTSTATUS_TS001_TC001.output)[2])
	});



    test(ReadPaymentStatusServiceData.READ_PAYMENTSTATUS_TS001_TC002.description, async () => {

        const output = await ReadPaymentStatusService.readPaymentStatuses(
            ReadPaymentStatusServiceData.READ_PAYMENTSTATUS_TS001_TC002.input.databaseConnector,
            ReadPaymentStatusServiceData.READ_PAYMENTSTATUS_TS001_TC002.input.apiID,
            ReadPaymentStatusServiceData.READ_PAYMENTSTATUS_TS001_TC002.input.config,
            ReadPaymentStatusServiceData.READ_PAYMENTSTATUS_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadPaymentStatusServiceData.READ_PAYMENTSTATUS_TS001_TC002.output.data)
        expect(output.status).toBe(ReadPaymentStatusServiceData.READ_PAYMENTSTATUS_TS001_TC002.output.status)
        expect(output.message).toBe(ReadPaymentStatusServiceData.READ_PAYMENTSTATUS_TS001_TC002.output.message)        
	});



    test(ReadPaymentStatusServiceData.READ_PAYMENTSTATUS_TS001_TC003.description, async () => {

        const output = await ReadPaymentStatusService.readPaymentStatuses(
            ReadPaymentStatusServiceData.READ_PAYMENTSTATUS_TS001_TC003.input.databaseConnector,
            ReadPaymentStatusServiceData.READ_PAYMENTSTATUS_TS001_TC003.input.apiID,
            ReadPaymentStatusServiceData.READ_PAYMENTSTATUS_TS001_TC003.input.config,
            ReadPaymentStatusServiceData.READ_PAYMENTSTATUS_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadPaymentStatusServiceData.READ_PAYMENTSTATUS_TS001_TC003.output.status)
        expect(output.message).toBe(ReadPaymentStatusServiceData.READ_PAYMENTSTATUS_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.paymentstatus.ts.002] | FunctionPath : [src/services/payment/read.paymentstatus.service.js/readOnePaymentStatus()]", () => {


	test(ReadPaymentStatusServiceData.READ_ONE_PAYMENTSTATUS_TS002_TC001.description, async () => {

        const output = await ReadPaymentStatusService.readOnePaymentStatus(
            ReadPaymentStatusServiceData.READ_ONE_PAYMENTSTATUS_TS002_TC001.input.databaseConnector,
            ReadPaymentStatusServiceData.READ_ONE_PAYMENTSTATUS_TS002_TC001.input.apiID,
            ReadPaymentStatusServiceData.READ_ONE_PAYMENTSTATUS_TS002_TC001.input.config,
            ReadPaymentStatusServiceData.READ_ONE_PAYMENTSTATUS_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadPaymentStatusServiceData.READ_ONE_PAYMENTSTATUS_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadPaymentStatusServiceData.READ_ONE_PAYMENTSTATUS_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadPaymentStatusServiceData.READ_ONE_PAYMENTSTATUS_TS002_TC001.output)[2])
	});



    test(ReadPaymentStatusServiceData.READ_ONE_PAYMENTSTATUS_TS002_TC002.description, async () => {

        const output = await ReadPaymentStatusService.readOnePaymentStatus(
            ReadPaymentStatusServiceData.READ_ONE_PAYMENTSTATUS_TS002_TC002.input.databaseConnector,
            ReadPaymentStatusServiceData.READ_ONE_PAYMENTSTATUS_TS002_TC002.input.apiID,
            ReadPaymentStatusServiceData.READ_ONE_PAYMENTSTATUS_TS002_TC002.input.config,
            ReadPaymentStatusServiceData.READ_ONE_PAYMENTSTATUS_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadPaymentStatusServiceData.READ_ONE_PAYMENTSTATUS_TS002_TC002.output.data)
        expect(output.status).toBe(ReadPaymentStatusServiceData.READ_ONE_PAYMENTSTATUS_TS002_TC002.output.status)
        expect(output.message).toBe(ReadPaymentStatusServiceData.READ_ONE_PAYMENTSTATUS_TS002_TC002.output.message)        
	});



    test(ReadPaymentStatusServiceData.READ_ONE_PAYMENTSTATUS_TS002_TC003.description, async () => {

        const output = await ReadPaymentStatusService.readOnePaymentStatus(
            ReadPaymentStatusServiceData.READ_ONE_PAYMENTSTATUS_TS002_TC003.input.databaseConnector,
            ReadPaymentStatusServiceData.READ_ONE_PAYMENTSTATUS_TS002_TC003.input.apiID,
            ReadPaymentStatusServiceData.READ_ONE_PAYMENTSTATUS_TS002_TC003.input.config,
            ReadPaymentStatusServiceData.READ_ONE_PAYMENTSTATUS_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadPaymentStatusServiceData.READ_ONE_PAYMENTSTATUS_TS002_TC003.output.status)
        expect(output.message).toBe(ReadPaymentStatusServiceData.READ_ONE_PAYMENTSTATUS_TS002_TC003.output.message)        
	});

});