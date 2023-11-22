/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete payrollbatch service class
**/

/**
 * Importing all required modules here
 */

const deletePayrollBatchServiceData = require("../data/delete.payrollbatch.service.data")
const deletePayrollBatchService = require("../../../../src/services/payroll/delete.payrollbatch.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeletePayrollBatchService = new deletePayrollBatchService();
const DeletePayrollBatchServiceData = new deletePayrollBatchServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.payrollbatch.ts.001] | FunctionPath : [src/services/payroll/delete.payrollbatch.service.js/deleteOnePayrollBatch()]", () => {


	test(DeletePayrollBatchServiceData.DELETE_ONE_PAYROLLBATCH_TS001_TC001.description, async () => {

        const output = await DeletePayrollBatchService.deleteOnePayrollBatch(
            DeletePayrollBatchServiceData.DELETE_ONE_PAYROLLBATCH_TS001_TC001.input.databaseConnector,
            DeletePayrollBatchServiceData.DELETE_ONE_PAYROLLBATCH_TS001_TC001.input.apiID,
            DeletePayrollBatchServiceData.DELETE_ONE_PAYROLLBATCH_TS001_TC001.input.config,
            DeletePayrollBatchServiceData.DELETE_ONE_PAYROLLBATCH_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeletePayrollBatchServiceData.DELETE_ONE_PAYROLLBATCH_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeletePayrollBatchServiceData.DELETE_ONE_PAYROLLBATCH_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeletePayrollBatchServiceData.DELETE_ONE_PAYROLLBATCH_TS001_TC001.output)[2])
	});



    test(DeletePayrollBatchServiceData.DELETE_ONE_PAYROLLBATCH_TS001_TC002.description, async () => {

        const output = await DeletePayrollBatchService.deleteOnePayrollBatch(
            DeletePayrollBatchServiceData.DELETE_ONE_PAYROLLBATCH_TS001_TC002.input.databaseConnector,
            DeletePayrollBatchServiceData.DELETE_ONE_PAYROLLBATCH_TS001_TC002.input.apiID,
            DeletePayrollBatchServiceData.DELETE_ONE_PAYROLLBATCH_TS001_TC002.input.config,
            DeletePayrollBatchServiceData.DELETE_ONE_PAYROLLBATCH_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeletePayrollBatchServiceData.DELETE_ONE_PAYROLLBATCH_TS001_TC002.output.data)
        expect(output.status).toBe(DeletePayrollBatchServiceData.DELETE_ONE_PAYROLLBATCH_TS001_TC002.output.status)
        expect(output.message).toBe(DeletePayrollBatchServiceData.DELETE_ONE_PAYROLLBATCH_TS001_TC002.output.message)        
	});



    test(DeletePayrollBatchServiceData.DELETE_ONE_PAYROLLBATCH_TS001_TC003.description, async () => {

        const output = await DeletePayrollBatchService.deleteOnePayrollBatch(
            DeletePayrollBatchServiceData.DELETE_ONE_PAYROLLBATCH_TS001_TC003.input.databaseConnector,
            DeletePayrollBatchServiceData.DELETE_ONE_PAYROLLBATCH_TS001_TC003.input.apiID,
            DeletePayrollBatchServiceData.DELETE_ONE_PAYROLLBATCH_TS001_TC003.input.config,
            DeletePayrollBatchServiceData.DELETE_ONE_PAYROLLBATCH_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeletePayrollBatchServiceData.DELETE_ONE_PAYROLLBATCH_TS001_TC003.output.status)
        expect(output.message).toBe(DeletePayrollBatchServiceData.DELETE_ONE_PAYROLLBATCH_TS001_TC003.output.message)        
	});

});
