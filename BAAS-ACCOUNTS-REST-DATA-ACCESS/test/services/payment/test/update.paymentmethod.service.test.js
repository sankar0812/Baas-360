

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update paymentmethod service class
**/

/**
 * Importing all required modules here
 */

const updatePaymentMethodServiceData = require("../data/update.paymentmethod.service.data")
const updatePaymentMethodService = require("../../../../src/services/payment/update.paymentmethod.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdatePaymentMethodService = new updatePaymentMethodService();
const UpdatePaymentMethodServiceData = new updatePaymentMethodServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.paymentmethod.ts.001] | FunctionPath : [src/services/payment/update.paymentmethod.service.js/updatePaymentMethod()]", () => {

	test(UpdatePaymentMethodServiceData.UPDATE_PAYMENTMETHOD_TS001_TC001.description, async () => {

        const output = await UpdatePaymentMethodService.updatePaymentMethod(
            UpdatePaymentMethodServiceData.UPDATE_PAYMENTMETHOD_TS001_TC001.input.databaseConnector,
            UpdatePaymentMethodServiceData.UPDATE_PAYMENTMETHOD_TS001_TC001.input.apiID,
            UpdatePaymentMethodServiceData.UPDATE_PAYMENTMETHOD_TS001_TC001.input.config,
            UpdatePaymentMethodServiceData.UPDATE_PAYMENTMETHOD_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdatePaymentMethodServiceData.UPDATE_PAYMENTMETHOD_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdatePaymentMethodServiceData.UPDATE_PAYMENTMETHOD_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdatePaymentMethodServiceData.UPDATE_PAYMENTMETHOD_TS001_TC001.output)[2])
	});

    test(UpdatePaymentMethodServiceData.UPDATE_PAYMENTMETHOD_TS001_TC002.description, async () => {

        const output = await UpdatePaymentMethodService.updatePaymentMethod(
            UpdatePaymentMethodServiceData.UPDATE_PAYMENTMETHOD_TS001_TC002.input.databaseConnector,
            UpdatePaymentMethodServiceData.UPDATE_PAYMENTMETHOD_TS001_TC002.input.apiID,
            UpdatePaymentMethodServiceData.UPDATE_PAYMENTMETHOD_TS001_TC002.input.config,
            UpdatePaymentMethodServiceData.UPDATE_PAYMENTMETHOD_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdatePaymentMethodServiceData.UPDATE_PAYMENTMETHOD_TS001_TC002.output.data)
        expect(output.status).toBe(UpdatePaymentMethodServiceData.UPDATE_PAYMENTMETHOD_TS001_TC002.output.status)
        expect(output.message).toBe(UpdatePaymentMethodServiceData.UPDATE_PAYMENTMETHOD_TS001_TC002.output.message)        
	});

    test(UpdatePaymentMethodServiceData.UPDATE_PAYMENTMETHOD_TS001_TC003.description, async () => {

        const output = await UpdatePaymentMethodService.updatePaymentMethod(
            UpdatePaymentMethodServiceData.UPDATE_PAYMENTMETHOD_TS001_TC003.input.databaseConnector,
            UpdatePaymentMethodServiceData.UPDATE_PAYMENTMETHOD_TS001_TC003.input.apiID,
            UpdatePaymentMethodServiceData.UPDATE_PAYMENTMETHOD_TS001_TC003.input.config,
            UpdatePaymentMethodServiceData.UPDATE_PAYMENTMETHOD_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdatePaymentMethodServiceData.UPDATE_PAYMENTMETHOD_TS001_TC003.output.status)
        expect(output.message).toBe(UpdatePaymentMethodServiceData.UPDATE_PAYMENTMETHOD_TS001_TC003.output.message)        
	});

});
