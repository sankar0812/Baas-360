/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create paymentmethod service class
**/

/**
 * Importing all required modules here
 */

const createPaymentMethodServiceData = require("../data/create.paymentmethod.service.data")
const createPaymentMethodService = require("../../../../src/services/payment/create.paymentmethod.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreatePaymentMethodService = new createPaymentMethodService();
const CreatePaymentMethodServiceData = new createPaymentMethodServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.paymentmethod.ts.001] | FunctionPath : [src/services/payment/create.paymentmethod.service.js/createOnePaymentMethod()]", () => {


	test(CreatePaymentMethodServiceData.CREATE_ONE_PAYMENTMETHOD_TS001_TC001.description, async () => {

        const output = await CreatePaymentMethodService.createOnePaymentMethod(
            CreatePaymentMethodServiceData.CREATE_ONE_PAYMENTMETHOD_TS001_TC001.input.databaseConnector,
            CreatePaymentMethodServiceData.CREATE_ONE_PAYMENTMETHOD_TS001_TC001.input.apiID,
            CreatePaymentMethodServiceData.CREATE_ONE_PAYMENTMETHOD_TS001_TC001.input.config,
            CreatePaymentMethodServiceData.CREATE_ONE_PAYMENTMETHOD_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreatePaymentMethodServiceData.CREATE_ONE_PAYMENTMETHOD_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreatePaymentMethodServiceData.CREATE_ONE_PAYMENTMETHOD_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreatePaymentMethodServiceData.CREATE_ONE_PAYMENTMETHOD_TS001_TC001.output)[2])
	});



    test(CreatePaymentMethodServiceData.CREATE_ONE_PAYMENTMETHOD_TS001_TC002.description, async () => {

        const output = await CreatePaymentMethodService.createOnePaymentMethod(
            CreatePaymentMethodServiceData.CREATE_ONE_PAYMENTMETHOD_TS001_TC002.input.databaseConnector,
            CreatePaymentMethodServiceData.CREATE_ONE_PAYMENTMETHOD_TS001_TC002.input.apiID,
            CreatePaymentMethodServiceData.CREATE_ONE_PAYMENTMETHOD_TS001_TC002.input.config,
            CreatePaymentMethodServiceData.CREATE_ONE_PAYMENTMETHOD_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreatePaymentMethodServiceData.CREATE_ONE_PAYMENTMETHOD_TS001_TC002.output.data)
        expect(output.status).toBe(CreatePaymentMethodServiceData.CREATE_ONE_PAYMENTMETHOD_TS001_TC002.output.status)
        expect(output.message).toBe(CreatePaymentMethodServiceData.CREATE_ONE_PAYMENTMETHOD_TS001_TC002.output.message)        
	});



    test(CreatePaymentMethodServiceData.CREATE_ONE_PAYMENTMETHOD_TS001_TC003.description, async () => {

        const output = await CreatePaymentMethodService.createOnePaymentMethod(
            CreatePaymentMethodServiceData.CREATE_ONE_PAYMENTMETHOD_TS001_TC003.input.databaseConnector,
            CreatePaymentMethodServiceData.CREATE_ONE_PAYMENTMETHOD_TS001_TC003.input.apiID,
            CreatePaymentMethodServiceData.CREATE_ONE_PAYMENTMETHOD_TS001_TC003.input.config,
            CreatePaymentMethodServiceData.CREATE_ONE_PAYMENTMETHOD_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreatePaymentMethodServiceData.CREATE_ONE_PAYMENTMETHOD_TS001_TC003.output.status)
        expect(output.message).toBe(CreatePaymentMethodServiceData.CREATE_ONE_PAYMENTMETHOD_TS001_TC003.output.message)        
	});

});