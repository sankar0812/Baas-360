

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update paymentstatus service class
**/

/**
 * Importing all required modules here
 */

const updatePaymentStatusServiceData = require("../data/update.paymentstatus.service.data")
const updatePaymentStatusService = require("../../../../src/services/payment/update.paymentstatus.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdatePaymentStatusService = new updatePaymentStatusService();
const UpdatePaymentStatusServiceData = new updatePaymentStatusServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.paymentstatus.ts.001] | FunctionPath : [src/services/payment/update.paymentstatus.service.js/updatePaymentStatus()]", () => {

	test(UpdatePaymentStatusServiceData.UPDATE_PAYMENTSTATUS_TS001_TC001.description, async () => {

        const output = await UpdatePaymentStatusService.updatePaymentStatus(
            UpdatePaymentStatusServiceData.UPDATE_PAYMENTSTATUS_TS001_TC001.input.databaseConnector,
            UpdatePaymentStatusServiceData.UPDATE_PAYMENTSTATUS_TS001_TC001.input.apiID,
            UpdatePaymentStatusServiceData.UPDATE_PAYMENTSTATUS_TS001_TC001.input.config,
            UpdatePaymentStatusServiceData.UPDATE_PAYMENTSTATUS_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdatePaymentStatusServiceData.UPDATE_PAYMENTSTATUS_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdatePaymentStatusServiceData.UPDATE_PAYMENTSTATUS_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdatePaymentStatusServiceData.UPDATE_PAYMENTSTATUS_TS001_TC001.output)[2])
	});

    test(UpdatePaymentStatusServiceData.UPDATE_PAYMENTSTATUS_TS001_TC002.description, async () => {

        const output = await UpdatePaymentStatusService.updatePaymentStatus(
            UpdatePaymentStatusServiceData.UPDATE_PAYMENTSTATUS_TS001_TC002.input.databaseConnector,
            UpdatePaymentStatusServiceData.UPDATE_PAYMENTSTATUS_TS001_TC002.input.apiID,
            UpdatePaymentStatusServiceData.UPDATE_PAYMENTSTATUS_TS001_TC002.input.config,
            UpdatePaymentStatusServiceData.UPDATE_PAYMENTSTATUS_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdatePaymentStatusServiceData.UPDATE_PAYMENTSTATUS_TS001_TC002.output.data)
        expect(output.status).toBe(UpdatePaymentStatusServiceData.UPDATE_PAYMENTSTATUS_TS001_TC002.output.status)
        expect(output.message).toBe(UpdatePaymentStatusServiceData.UPDATE_PAYMENTSTATUS_TS001_TC002.output.message)        
	});

    test(UpdatePaymentStatusServiceData.UPDATE_PAYMENTSTATUS_TS001_TC003.description, async () => {

        const output = await UpdatePaymentStatusService.updatePaymentStatus(
            UpdatePaymentStatusServiceData.UPDATE_PAYMENTSTATUS_TS001_TC003.input.databaseConnector,
            UpdatePaymentStatusServiceData.UPDATE_PAYMENTSTATUS_TS001_TC003.input.apiID,
            UpdatePaymentStatusServiceData.UPDATE_PAYMENTSTATUS_TS001_TC003.input.config,
            UpdatePaymentStatusServiceData.UPDATE_PAYMENTSTATUS_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdatePaymentStatusServiceData.UPDATE_PAYMENTSTATUS_TS001_TC003.output.status)
        expect(output.message).toBe(UpdatePaymentStatusServiceData.UPDATE_PAYMENTSTATUS_TS001_TC003.output.message)        
	});

});
