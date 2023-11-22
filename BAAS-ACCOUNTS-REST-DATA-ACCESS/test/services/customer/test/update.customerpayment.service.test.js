

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update customerpayment service class
**/

/**
 * Importing all required modules here
 */

const updateCustomerPaymentServiceData = require("../data/update.customerpayment.service.data")
const updateCustomerPaymentService = require("../../../../src/services/customer/update.customerpayment.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateCustomerPaymentService = new updateCustomerPaymentService();
const UpdateCustomerPaymentServiceData = new updateCustomerPaymentServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customerpayment.ts.001] | FunctionPath : [src/services/customer/update.customerpayment.service.js/updateCustomerPayment()]", () => {

	test(UpdateCustomerPaymentServiceData.UPDATE_CUSTOMERPAYMENT_TS001_TC001.description, async () => {

        const output = await UpdateCustomerPaymentService.updateCustomerPayment(
            UpdateCustomerPaymentServiceData.UPDATE_CUSTOMERPAYMENT_TS001_TC001.input.databaseConnector,
            UpdateCustomerPaymentServiceData.UPDATE_CUSTOMERPAYMENT_TS001_TC001.input.apiID,
            UpdateCustomerPaymentServiceData.UPDATE_CUSTOMERPAYMENT_TS001_TC001.input.config,
            UpdateCustomerPaymentServiceData.UPDATE_CUSTOMERPAYMENT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateCustomerPaymentServiceData.UPDATE_CUSTOMERPAYMENT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerPaymentServiceData.UPDATE_CUSTOMERPAYMENT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerPaymentServiceData.UPDATE_CUSTOMERPAYMENT_TS001_TC001.output)[2])
	});

    test(UpdateCustomerPaymentServiceData.UPDATE_CUSTOMERPAYMENT_TS001_TC002.description, async () => {

        const output = await UpdateCustomerPaymentService.updateCustomerPayment(
            UpdateCustomerPaymentServiceData.UPDATE_CUSTOMERPAYMENT_TS001_TC002.input.databaseConnector,
            UpdateCustomerPaymentServiceData.UPDATE_CUSTOMERPAYMENT_TS001_TC002.input.apiID,
            UpdateCustomerPaymentServiceData.UPDATE_CUSTOMERPAYMENT_TS001_TC002.input.config,
            UpdateCustomerPaymentServiceData.UPDATE_CUSTOMERPAYMENT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateCustomerPaymentServiceData.UPDATE_CUSTOMERPAYMENT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateCustomerPaymentServiceData.UPDATE_CUSTOMERPAYMENT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateCustomerPaymentServiceData.UPDATE_CUSTOMERPAYMENT_TS001_TC002.output.message)        
	});

    test(UpdateCustomerPaymentServiceData.UPDATE_CUSTOMERPAYMENT_TS001_TC003.description, async () => {

        const output = await UpdateCustomerPaymentService.updateCustomerPayment(
            UpdateCustomerPaymentServiceData.UPDATE_CUSTOMERPAYMENT_TS001_TC003.input.databaseConnector,
            UpdateCustomerPaymentServiceData.UPDATE_CUSTOMERPAYMENT_TS001_TC003.input.apiID,
            UpdateCustomerPaymentServiceData.UPDATE_CUSTOMERPAYMENT_TS001_TC003.input.config,
            UpdateCustomerPaymentServiceData.UPDATE_CUSTOMERPAYMENT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateCustomerPaymentServiceData.UPDATE_CUSTOMERPAYMENT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateCustomerPaymentServiceData.UPDATE_CUSTOMERPAYMENT_TS001_TC003.output.message)        
	});

});
