

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update payrollbatchitem service class
**/

/**
 * Importing all required modules here
 */

const updatePayrollBatchItemServiceData = require("../data/update.payrollbatchitem.service.data")
const updatePayrollBatchItemService = require("../../../../src/services/payroll/update.payrollbatchitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdatePayrollBatchItemService = new updatePayrollBatchItemService();
const UpdatePayrollBatchItemServiceData = new updatePayrollBatchItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.payrollbatchitem.ts.001] | FunctionPath : [src/services/payroll/update.payrollbatchitem.service.js/updatePayrollBatchItem()]", () => {

	test(UpdatePayrollBatchItemServiceData.UPDATE_PAYROLLBATCHITEM_TS001_TC001.description, async () => {

        const output = await UpdatePayrollBatchItemService.updatePayrollBatchItem(
            UpdatePayrollBatchItemServiceData.UPDATE_PAYROLLBATCHITEM_TS001_TC001.input.databaseConnector,
            UpdatePayrollBatchItemServiceData.UPDATE_PAYROLLBATCHITEM_TS001_TC001.input.apiID,
            UpdatePayrollBatchItemServiceData.UPDATE_PAYROLLBATCHITEM_TS001_TC001.input.config,
            UpdatePayrollBatchItemServiceData.UPDATE_PAYROLLBATCHITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdatePayrollBatchItemServiceData.UPDATE_PAYROLLBATCHITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdatePayrollBatchItemServiceData.UPDATE_PAYROLLBATCHITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdatePayrollBatchItemServiceData.UPDATE_PAYROLLBATCHITEM_TS001_TC001.output)[2])
	});

    test(UpdatePayrollBatchItemServiceData.UPDATE_PAYROLLBATCHITEM_TS001_TC002.description, async () => {

        const output = await UpdatePayrollBatchItemService.updatePayrollBatchItem(
            UpdatePayrollBatchItemServiceData.UPDATE_PAYROLLBATCHITEM_TS001_TC002.input.databaseConnector,
            UpdatePayrollBatchItemServiceData.UPDATE_PAYROLLBATCHITEM_TS001_TC002.input.apiID,
            UpdatePayrollBatchItemServiceData.UPDATE_PAYROLLBATCHITEM_TS001_TC002.input.config,
            UpdatePayrollBatchItemServiceData.UPDATE_PAYROLLBATCHITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdatePayrollBatchItemServiceData.UPDATE_PAYROLLBATCHITEM_TS001_TC002.output.data)
        expect(output.status).toBe(UpdatePayrollBatchItemServiceData.UPDATE_PAYROLLBATCHITEM_TS001_TC002.output.status)
        expect(output.message).toBe(UpdatePayrollBatchItemServiceData.UPDATE_PAYROLLBATCHITEM_TS001_TC002.output.message)        
	});

    test(UpdatePayrollBatchItemServiceData.UPDATE_PAYROLLBATCHITEM_TS001_TC003.description, async () => {

        const output = await UpdatePayrollBatchItemService.updatePayrollBatchItem(
            UpdatePayrollBatchItemServiceData.UPDATE_PAYROLLBATCHITEM_TS001_TC003.input.databaseConnector,
            UpdatePayrollBatchItemServiceData.UPDATE_PAYROLLBATCHITEM_TS001_TC003.input.apiID,
            UpdatePayrollBatchItemServiceData.UPDATE_PAYROLLBATCHITEM_TS001_TC003.input.config,
            UpdatePayrollBatchItemServiceData.UPDATE_PAYROLLBATCHITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdatePayrollBatchItemServiceData.UPDATE_PAYROLLBATCHITEM_TS001_TC003.output.status)
        expect(output.message).toBe(UpdatePayrollBatchItemServiceData.UPDATE_PAYROLLBATCHITEM_TS001_TC003.output.message)        
	});

});
