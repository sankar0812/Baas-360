/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create paymentstatus service class
**/

/**
 * Importing all required modules here
 */

const createPaymentStatusServiceData = require("../data/create.paymentstatus.service.data")
const createPaymentStatusService = require("../../../../src/services/payment/create.paymentstatus.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreatePaymentStatusService = new createPaymentStatusService();
const CreatePaymentStatusServiceData = new createPaymentStatusServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.paymentstatus.ts.001] | FunctionPath : [src/services/payment/create.paymentstatus.service.js/createOnePaymentStatus()]", () => {


	test(CreatePaymentStatusServiceData.CREATE_ONE_PAYMENTSTATUS_TS001_TC001.description, async () => {

        const output = await CreatePaymentStatusService.createOnePaymentStatus(
            CreatePaymentStatusServiceData.CREATE_ONE_PAYMENTSTATUS_TS001_TC001.input.databaseConnector,
            CreatePaymentStatusServiceData.CREATE_ONE_PAYMENTSTATUS_TS001_TC001.input.apiID,
            CreatePaymentStatusServiceData.CREATE_ONE_PAYMENTSTATUS_TS001_TC001.input.config,
            CreatePaymentStatusServiceData.CREATE_ONE_PAYMENTSTATUS_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreatePaymentStatusServiceData.CREATE_ONE_PAYMENTSTATUS_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreatePaymentStatusServiceData.CREATE_ONE_PAYMENTSTATUS_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreatePaymentStatusServiceData.CREATE_ONE_PAYMENTSTATUS_TS001_TC001.output)[2])
	});



    test(CreatePaymentStatusServiceData.CREATE_ONE_PAYMENTSTATUS_TS001_TC002.description, async () => {

        const output = await CreatePaymentStatusService.createOnePaymentStatus(
            CreatePaymentStatusServiceData.CREATE_ONE_PAYMENTSTATUS_TS001_TC002.input.databaseConnector,
            CreatePaymentStatusServiceData.CREATE_ONE_PAYMENTSTATUS_TS001_TC002.input.apiID,
            CreatePaymentStatusServiceData.CREATE_ONE_PAYMENTSTATUS_TS001_TC002.input.config,
            CreatePaymentStatusServiceData.CREATE_ONE_PAYMENTSTATUS_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreatePaymentStatusServiceData.CREATE_ONE_PAYMENTSTATUS_TS001_TC002.output.data)
        expect(output.status).toBe(CreatePaymentStatusServiceData.CREATE_ONE_PAYMENTSTATUS_TS001_TC002.output.status)
        expect(output.message).toBe(CreatePaymentStatusServiceData.CREATE_ONE_PAYMENTSTATUS_TS001_TC002.output.message)        
	});



    test(CreatePaymentStatusServiceData.CREATE_ONE_PAYMENTSTATUS_TS001_TC003.description, async () => {

        const output = await CreatePaymentStatusService.createOnePaymentStatus(
            CreatePaymentStatusServiceData.CREATE_ONE_PAYMENTSTATUS_TS001_TC003.input.databaseConnector,
            CreatePaymentStatusServiceData.CREATE_ONE_PAYMENTSTATUS_TS001_TC003.input.apiID,
            CreatePaymentStatusServiceData.CREATE_ONE_PAYMENTSTATUS_TS001_TC003.input.config,
            CreatePaymentStatusServiceData.CREATE_ONE_PAYMENTSTATUS_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreatePaymentStatusServiceData.CREATE_ONE_PAYMENTSTATUS_TS001_TC003.output.status)
        expect(output.message).toBe(CreatePaymentStatusServiceData.CREATE_ONE_PAYMENTSTATUS_TS001_TC003.output.message)        
	});

});