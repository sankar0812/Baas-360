/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete paymentmethod service class
**/

/**
 * Importing all required modules here
 */

const deletePaymentMethodServiceData = require("../data/delete.paymentmethod.service.data")
const deletePaymentMethodService = require("../../../../src/services/payment/delete.paymentmethod.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeletePaymentMethodService = new deletePaymentMethodService();
const DeletePaymentMethodServiceData = new deletePaymentMethodServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.paymentmethod.ts.001] | FunctionPath : [src/services/payment/delete.paymentmethod.service.js/deleteOnePaymentMethod()]", () => {


	test(DeletePaymentMethodServiceData.DELETE_ONE_PAYMENTMETHOD_TS001_TC001.description, async () => {

        const output = await DeletePaymentMethodService.deleteOnePaymentMethod(
            DeletePaymentMethodServiceData.DELETE_ONE_PAYMENTMETHOD_TS001_TC001.input.databaseConnector,
            DeletePaymentMethodServiceData.DELETE_ONE_PAYMENTMETHOD_TS001_TC001.input.apiID,
            DeletePaymentMethodServiceData.DELETE_ONE_PAYMENTMETHOD_TS001_TC001.input.config,
            DeletePaymentMethodServiceData.DELETE_ONE_PAYMENTMETHOD_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeletePaymentMethodServiceData.DELETE_ONE_PAYMENTMETHOD_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeletePaymentMethodServiceData.DELETE_ONE_PAYMENTMETHOD_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeletePaymentMethodServiceData.DELETE_ONE_PAYMENTMETHOD_TS001_TC001.output)[2])
	});



    test(DeletePaymentMethodServiceData.DELETE_ONE_PAYMENTMETHOD_TS001_TC002.description, async () => {

        const output = await DeletePaymentMethodService.deleteOnePaymentMethod(
            DeletePaymentMethodServiceData.DELETE_ONE_PAYMENTMETHOD_TS001_TC002.input.databaseConnector,
            DeletePaymentMethodServiceData.DELETE_ONE_PAYMENTMETHOD_TS001_TC002.input.apiID,
            DeletePaymentMethodServiceData.DELETE_ONE_PAYMENTMETHOD_TS001_TC002.input.config,
            DeletePaymentMethodServiceData.DELETE_ONE_PAYMENTMETHOD_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeletePaymentMethodServiceData.DELETE_ONE_PAYMENTMETHOD_TS001_TC002.output.data)
        expect(output.status).toBe(DeletePaymentMethodServiceData.DELETE_ONE_PAYMENTMETHOD_TS001_TC002.output.status)
        expect(output.message).toBe(DeletePaymentMethodServiceData.DELETE_ONE_PAYMENTMETHOD_TS001_TC002.output.message)        
	});



    test(DeletePaymentMethodServiceData.DELETE_ONE_PAYMENTMETHOD_TS001_TC003.description, async () => {

        const output = await DeletePaymentMethodService.deleteOnePaymentMethod(
            DeletePaymentMethodServiceData.DELETE_ONE_PAYMENTMETHOD_TS001_TC003.input.databaseConnector,
            DeletePaymentMethodServiceData.DELETE_ONE_PAYMENTMETHOD_TS001_TC003.input.apiID,
            DeletePaymentMethodServiceData.DELETE_ONE_PAYMENTMETHOD_TS001_TC003.input.config,
            DeletePaymentMethodServiceData.DELETE_ONE_PAYMENTMETHOD_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeletePaymentMethodServiceData.DELETE_ONE_PAYMENTMETHOD_TS001_TC003.output.status)
        expect(output.message).toBe(DeletePaymentMethodServiceData.DELETE_ONE_PAYMENTMETHOD_TS001_TC003.output.message)        
	});

});
