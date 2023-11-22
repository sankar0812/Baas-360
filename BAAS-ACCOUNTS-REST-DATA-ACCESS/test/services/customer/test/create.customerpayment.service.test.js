/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create customerpayment service class
**/

/**
 * Importing all required modules here
 */

const createCustomerPaymentServiceData = require("../data/create.customerpayment.service.data")
const createCustomerPaymentService = require("../../../../src/services/customer/create.customerpayment.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateCustomerPaymentService = new createCustomerPaymentService();
const CreateCustomerPaymentServiceData = new createCustomerPaymentServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customerpayment.ts.001] | FunctionPath : [src/services/customer/create.customerpayment.service.js/createOneCustomerPayment()]", () => {


	test(CreateCustomerPaymentServiceData.CREATE_ONE_CUSTOMERPAYMENT_TS001_TC001.description, async () => {

        const output = await CreateCustomerPaymentService.createOneCustomerPayment(
            CreateCustomerPaymentServiceData.CREATE_ONE_CUSTOMERPAYMENT_TS001_TC001.input.databaseConnector,
            CreateCustomerPaymentServiceData.CREATE_ONE_CUSTOMERPAYMENT_TS001_TC001.input.apiID,
            CreateCustomerPaymentServiceData.CREATE_ONE_CUSTOMERPAYMENT_TS001_TC001.input.config,
            CreateCustomerPaymentServiceData.CREATE_ONE_CUSTOMERPAYMENT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateCustomerPaymentServiceData.CREATE_ONE_CUSTOMERPAYMENT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateCustomerPaymentServiceData.CREATE_ONE_CUSTOMERPAYMENT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateCustomerPaymentServiceData.CREATE_ONE_CUSTOMERPAYMENT_TS001_TC001.output)[2])
	});



    test(CreateCustomerPaymentServiceData.CREATE_ONE_CUSTOMERPAYMENT_TS001_TC002.description, async () => {

        const output = await CreateCustomerPaymentService.createOneCustomerPayment(
            CreateCustomerPaymentServiceData.CREATE_ONE_CUSTOMERPAYMENT_TS001_TC002.input.databaseConnector,
            CreateCustomerPaymentServiceData.CREATE_ONE_CUSTOMERPAYMENT_TS001_TC002.input.apiID,
            CreateCustomerPaymentServiceData.CREATE_ONE_CUSTOMERPAYMENT_TS001_TC002.input.config,
            CreateCustomerPaymentServiceData.CREATE_ONE_CUSTOMERPAYMENT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateCustomerPaymentServiceData.CREATE_ONE_CUSTOMERPAYMENT_TS001_TC002.output.data)
        expect(output.status).toBe(CreateCustomerPaymentServiceData.CREATE_ONE_CUSTOMERPAYMENT_TS001_TC002.output.status)
        expect(output.message).toBe(CreateCustomerPaymentServiceData.CREATE_ONE_CUSTOMERPAYMENT_TS001_TC002.output.message)        
	});



    test(CreateCustomerPaymentServiceData.CREATE_ONE_CUSTOMERPAYMENT_TS001_TC003.description, async () => {

        const output = await CreateCustomerPaymentService.createOneCustomerPayment(
            CreateCustomerPaymentServiceData.CREATE_ONE_CUSTOMERPAYMENT_TS001_TC003.input.databaseConnector,
            CreateCustomerPaymentServiceData.CREATE_ONE_CUSTOMERPAYMENT_TS001_TC003.input.apiID,
            CreateCustomerPaymentServiceData.CREATE_ONE_CUSTOMERPAYMENT_TS001_TC003.input.config,
            CreateCustomerPaymentServiceData.CREATE_ONE_CUSTOMERPAYMENT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateCustomerPaymentServiceData.CREATE_ONE_CUSTOMERPAYMENT_TS001_TC003.output.status)
        expect(output.message).toBe(CreateCustomerPaymentServiceData.CREATE_ONE_CUSTOMERPAYMENT_TS001_TC003.output.message)        
	});

});