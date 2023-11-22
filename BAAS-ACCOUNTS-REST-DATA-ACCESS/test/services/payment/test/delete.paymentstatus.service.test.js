/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete paymentstatus service class
**/

/**
 * Importing all required modules here
 */

const deletePaymentStatusServiceData = require("../data/delete.paymentstatus.service.data")
const deletePaymentStatusService = require("../../../../src/services/payment/delete.paymentstatus.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeletePaymentStatusService = new deletePaymentStatusService();
const DeletePaymentStatusServiceData = new deletePaymentStatusServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.paymentstatus.ts.001] | FunctionPath : [src/services/payment/delete.paymentstatus.service.js/deleteOnePaymentStatus()]", () => {


	test(DeletePaymentStatusServiceData.DELETE_ONE_PAYMENTSTATUS_TS001_TC001.description, async () => {

        const output = await DeletePaymentStatusService.deleteOnePaymentStatus(
            DeletePaymentStatusServiceData.DELETE_ONE_PAYMENTSTATUS_TS001_TC001.input.databaseConnector,
            DeletePaymentStatusServiceData.DELETE_ONE_PAYMENTSTATUS_TS001_TC001.input.apiID,
            DeletePaymentStatusServiceData.DELETE_ONE_PAYMENTSTATUS_TS001_TC001.input.config,
            DeletePaymentStatusServiceData.DELETE_ONE_PAYMENTSTATUS_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeletePaymentStatusServiceData.DELETE_ONE_PAYMENTSTATUS_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeletePaymentStatusServiceData.DELETE_ONE_PAYMENTSTATUS_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeletePaymentStatusServiceData.DELETE_ONE_PAYMENTSTATUS_TS001_TC001.output)[2])
	});



    test(DeletePaymentStatusServiceData.DELETE_ONE_PAYMENTSTATUS_TS001_TC002.description, async () => {

        const output = await DeletePaymentStatusService.deleteOnePaymentStatus(
            DeletePaymentStatusServiceData.DELETE_ONE_PAYMENTSTATUS_TS001_TC002.input.databaseConnector,
            DeletePaymentStatusServiceData.DELETE_ONE_PAYMENTSTATUS_TS001_TC002.input.apiID,
            DeletePaymentStatusServiceData.DELETE_ONE_PAYMENTSTATUS_TS001_TC002.input.config,
            DeletePaymentStatusServiceData.DELETE_ONE_PAYMENTSTATUS_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeletePaymentStatusServiceData.DELETE_ONE_PAYMENTSTATUS_TS001_TC002.output.data)
        expect(output.status).toBe(DeletePaymentStatusServiceData.DELETE_ONE_PAYMENTSTATUS_TS001_TC002.output.status)
        expect(output.message).toBe(DeletePaymentStatusServiceData.DELETE_ONE_PAYMENTSTATUS_TS001_TC002.output.message)        
	});



    test(DeletePaymentStatusServiceData.DELETE_ONE_PAYMENTSTATUS_TS001_TC003.description, async () => {

        const output = await DeletePaymentStatusService.deleteOnePaymentStatus(
            DeletePaymentStatusServiceData.DELETE_ONE_PAYMENTSTATUS_TS001_TC003.input.databaseConnector,
            DeletePaymentStatusServiceData.DELETE_ONE_PAYMENTSTATUS_TS001_TC003.input.apiID,
            DeletePaymentStatusServiceData.DELETE_ONE_PAYMENTSTATUS_TS001_TC003.input.config,
            DeletePaymentStatusServiceData.DELETE_ONE_PAYMENTSTATUS_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeletePaymentStatusServiceData.DELETE_ONE_PAYMENTSTATUS_TS001_TC003.output.status)
        expect(output.message).toBe(DeletePaymentStatusServiceData.DELETE_ONE_PAYMENTSTATUS_TS001_TC003.output.message)        
	});

});
