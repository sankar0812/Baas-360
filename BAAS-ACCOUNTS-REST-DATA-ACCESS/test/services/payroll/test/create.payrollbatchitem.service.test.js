/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create payrollbatchitem service class
**/

/**
 * Importing all required modules here
 */

const createPayrollBatchItemServiceData = require("../data/create.payrollbatchitem.service.data")
const createPayrollBatchItemService = require("../../../../src/services/payroll/create.payrollbatchitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreatePayrollBatchItemService = new createPayrollBatchItemService();
const CreatePayrollBatchItemServiceData = new createPayrollBatchItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.payrollbatchitem.ts.001] | FunctionPath : [src/services/payroll/create.payrollbatchitem.service.js/createOnePayrollBatchItem()]", () => {


	test(CreatePayrollBatchItemServiceData.CREATE_ONE_PAYROLLBATCHITEM_TS001_TC001.description, async () => {

        const output = await CreatePayrollBatchItemService.createOnePayrollBatchItem(
            CreatePayrollBatchItemServiceData.CREATE_ONE_PAYROLLBATCHITEM_TS001_TC001.input.databaseConnector,
            CreatePayrollBatchItemServiceData.CREATE_ONE_PAYROLLBATCHITEM_TS001_TC001.input.apiID,
            CreatePayrollBatchItemServiceData.CREATE_ONE_PAYROLLBATCHITEM_TS001_TC001.input.config,
            CreatePayrollBatchItemServiceData.CREATE_ONE_PAYROLLBATCHITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreatePayrollBatchItemServiceData.CREATE_ONE_PAYROLLBATCHITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreatePayrollBatchItemServiceData.CREATE_ONE_PAYROLLBATCHITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreatePayrollBatchItemServiceData.CREATE_ONE_PAYROLLBATCHITEM_TS001_TC001.output)[2])
	});



    test(CreatePayrollBatchItemServiceData.CREATE_ONE_PAYROLLBATCHITEM_TS001_TC002.description, async () => {

        const output = await CreatePayrollBatchItemService.createOnePayrollBatchItem(
            CreatePayrollBatchItemServiceData.CREATE_ONE_PAYROLLBATCHITEM_TS001_TC002.input.databaseConnector,
            CreatePayrollBatchItemServiceData.CREATE_ONE_PAYROLLBATCHITEM_TS001_TC002.input.apiID,
            CreatePayrollBatchItemServiceData.CREATE_ONE_PAYROLLBATCHITEM_TS001_TC002.input.config,
            CreatePayrollBatchItemServiceData.CREATE_ONE_PAYROLLBATCHITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreatePayrollBatchItemServiceData.CREATE_ONE_PAYROLLBATCHITEM_TS001_TC002.output.data)
        expect(output.status).toBe(CreatePayrollBatchItemServiceData.CREATE_ONE_PAYROLLBATCHITEM_TS001_TC002.output.status)
        expect(output.message).toBe(CreatePayrollBatchItemServiceData.CREATE_ONE_PAYROLLBATCHITEM_TS001_TC002.output.message)        
	});



    test(CreatePayrollBatchItemServiceData.CREATE_ONE_PAYROLLBATCHITEM_TS001_TC003.description, async () => {

        const output = await CreatePayrollBatchItemService.createOnePayrollBatchItem(
            CreatePayrollBatchItemServiceData.CREATE_ONE_PAYROLLBATCHITEM_TS001_TC003.input.databaseConnector,
            CreatePayrollBatchItemServiceData.CREATE_ONE_PAYROLLBATCHITEM_TS001_TC003.input.apiID,
            CreatePayrollBatchItemServiceData.CREATE_ONE_PAYROLLBATCHITEM_TS001_TC003.input.config,
            CreatePayrollBatchItemServiceData.CREATE_ONE_PAYROLLBATCHITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreatePayrollBatchItemServiceData.CREATE_ONE_PAYROLLBATCHITEM_TS001_TC003.output.status)
        expect(output.message).toBe(CreatePayrollBatchItemServiceData.CREATE_ONE_PAYROLLBATCHITEM_TS001_TC003.output.message)        
	});

});