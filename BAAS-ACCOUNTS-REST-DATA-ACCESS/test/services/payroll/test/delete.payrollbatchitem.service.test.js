/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete payrollbatchitem service class
**/

/**
 * Importing all required modules here
 */

const deletePayrollBatchItemServiceData = require("../data/delete.payrollbatchitem.service.data")
const deletePayrollBatchItemService = require("../../../../src/services/payroll/delete.payrollbatchitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeletePayrollBatchItemService = new deletePayrollBatchItemService();
const DeletePayrollBatchItemServiceData = new deletePayrollBatchItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.payrollbatchitem.ts.001] | FunctionPath : [src/services/payroll/delete.payrollbatchitem.service.js/deleteOnePayrollBatchItem()]", () => {


	test(DeletePayrollBatchItemServiceData.DELETE_ONE_PAYROLLBATCHITEM_TS001_TC001.description, async () => {

        const output = await DeletePayrollBatchItemService.deleteOnePayrollBatchItem(
            DeletePayrollBatchItemServiceData.DELETE_ONE_PAYROLLBATCHITEM_TS001_TC001.input.databaseConnector,
            DeletePayrollBatchItemServiceData.DELETE_ONE_PAYROLLBATCHITEM_TS001_TC001.input.apiID,
            DeletePayrollBatchItemServiceData.DELETE_ONE_PAYROLLBATCHITEM_TS001_TC001.input.config,
            DeletePayrollBatchItemServiceData.DELETE_ONE_PAYROLLBATCHITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeletePayrollBatchItemServiceData.DELETE_ONE_PAYROLLBATCHITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeletePayrollBatchItemServiceData.DELETE_ONE_PAYROLLBATCHITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeletePayrollBatchItemServiceData.DELETE_ONE_PAYROLLBATCHITEM_TS001_TC001.output)[2])
	});



    test(DeletePayrollBatchItemServiceData.DELETE_ONE_PAYROLLBATCHITEM_TS001_TC002.description, async () => {

        const output = await DeletePayrollBatchItemService.deleteOnePayrollBatchItem(
            DeletePayrollBatchItemServiceData.DELETE_ONE_PAYROLLBATCHITEM_TS001_TC002.input.databaseConnector,
            DeletePayrollBatchItemServiceData.DELETE_ONE_PAYROLLBATCHITEM_TS001_TC002.input.apiID,
            DeletePayrollBatchItemServiceData.DELETE_ONE_PAYROLLBATCHITEM_TS001_TC002.input.config,
            DeletePayrollBatchItemServiceData.DELETE_ONE_PAYROLLBATCHITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeletePayrollBatchItemServiceData.DELETE_ONE_PAYROLLBATCHITEM_TS001_TC002.output.data)
        expect(output.status).toBe(DeletePayrollBatchItemServiceData.DELETE_ONE_PAYROLLBATCHITEM_TS001_TC002.output.status)
        expect(output.message).toBe(DeletePayrollBatchItemServiceData.DELETE_ONE_PAYROLLBATCHITEM_TS001_TC002.output.message)        
	});



    test(DeletePayrollBatchItemServiceData.DELETE_ONE_PAYROLLBATCHITEM_TS001_TC003.description, async () => {

        const output = await DeletePayrollBatchItemService.deleteOnePayrollBatchItem(
            DeletePayrollBatchItemServiceData.DELETE_ONE_PAYROLLBATCHITEM_TS001_TC003.input.databaseConnector,
            DeletePayrollBatchItemServiceData.DELETE_ONE_PAYROLLBATCHITEM_TS001_TC003.input.apiID,
            DeletePayrollBatchItemServiceData.DELETE_ONE_PAYROLLBATCHITEM_TS001_TC003.input.config,
            DeletePayrollBatchItemServiceData.DELETE_ONE_PAYROLLBATCHITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeletePayrollBatchItemServiceData.DELETE_ONE_PAYROLLBATCHITEM_TS001_TC003.output.status)
        expect(output.message).toBe(DeletePayrollBatchItemServiceData.DELETE_ONE_PAYROLLBATCHITEM_TS001_TC003.output.message)        
	});

});
