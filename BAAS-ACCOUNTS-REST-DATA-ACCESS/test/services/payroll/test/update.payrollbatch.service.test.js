

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update payrollbatch service class
**/

/**
 * Importing all required modules here
 */

const updatePayrollBatchServiceData = require("../data/update.payrollbatch.service.data")
const updatePayrollBatchService = require("../../../../src/services/payroll/update.payrollbatch.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdatePayrollBatchService = new updatePayrollBatchService();
const UpdatePayrollBatchServiceData = new updatePayrollBatchServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.payrollbatch.ts.001] | FunctionPath : [src/services/payroll/update.payrollbatch.service.js/updatePayrollBatch()]", () => {

	test(UpdatePayrollBatchServiceData.UPDATE_PAYROLLBATCH_TS001_TC001.description, async () => {

        const output = await UpdatePayrollBatchService.updatePayrollBatch(
            UpdatePayrollBatchServiceData.UPDATE_PAYROLLBATCH_TS001_TC001.input.databaseConnector,
            UpdatePayrollBatchServiceData.UPDATE_PAYROLLBATCH_TS001_TC001.input.apiID,
            UpdatePayrollBatchServiceData.UPDATE_PAYROLLBATCH_TS001_TC001.input.config,
            UpdatePayrollBatchServiceData.UPDATE_PAYROLLBATCH_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdatePayrollBatchServiceData.UPDATE_PAYROLLBATCH_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdatePayrollBatchServiceData.UPDATE_PAYROLLBATCH_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdatePayrollBatchServiceData.UPDATE_PAYROLLBATCH_TS001_TC001.output)[2])
	});

    test(UpdatePayrollBatchServiceData.UPDATE_PAYROLLBATCH_TS001_TC002.description, async () => {

        const output = await UpdatePayrollBatchService.updatePayrollBatch(
            UpdatePayrollBatchServiceData.UPDATE_PAYROLLBATCH_TS001_TC002.input.databaseConnector,
            UpdatePayrollBatchServiceData.UPDATE_PAYROLLBATCH_TS001_TC002.input.apiID,
            UpdatePayrollBatchServiceData.UPDATE_PAYROLLBATCH_TS001_TC002.input.config,
            UpdatePayrollBatchServiceData.UPDATE_PAYROLLBATCH_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdatePayrollBatchServiceData.UPDATE_PAYROLLBATCH_TS001_TC002.output.data)
        expect(output.status).toBe(UpdatePayrollBatchServiceData.UPDATE_PAYROLLBATCH_TS001_TC002.output.status)
        expect(output.message).toBe(UpdatePayrollBatchServiceData.UPDATE_PAYROLLBATCH_TS001_TC002.output.message)        
	});

    test(UpdatePayrollBatchServiceData.UPDATE_PAYROLLBATCH_TS001_TC003.description, async () => {

        const output = await UpdatePayrollBatchService.updatePayrollBatch(
            UpdatePayrollBatchServiceData.UPDATE_PAYROLLBATCH_TS001_TC003.input.databaseConnector,
            UpdatePayrollBatchServiceData.UPDATE_PAYROLLBATCH_TS001_TC003.input.apiID,
            UpdatePayrollBatchServiceData.UPDATE_PAYROLLBATCH_TS001_TC003.input.config,
            UpdatePayrollBatchServiceData.UPDATE_PAYROLLBATCH_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdatePayrollBatchServiceData.UPDATE_PAYROLLBATCH_TS001_TC003.output.status)
        expect(output.message).toBe(UpdatePayrollBatchServiceData.UPDATE_PAYROLLBATCH_TS001_TC003.output.message)        
	});

});
