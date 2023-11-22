/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read PayrollBatchItem service class
**/

/**
 * Importing all required modules here
 */

const readPayrollBatchItemServiceData = require("../data/read.payrollbatchitem.service.data")
const readPayrollBatchItemService = require("../../../../src/services/payroll/read.payrollbatchitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadPayrollBatchItemService = new readPayrollBatchItemService();
const ReadPayrollBatchItemServiceData = new readPayrollBatchItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.payrollbatchitem.ts.001] | FunctionPath : [src/services/payroll/read.contianer.service.js/readPayrollBatchItems()]", () => {


	test(ReadPayrollBatchItemServiceData.READ_PAYROLLBATCHITEM_TS001_TC001.description, async () => {

        const output = await ReadPayrollBatchItemService.readPayrollBatchItems(
            ReadPayrollBatchItemServiceData.READ_PAYROLLBATCHITEM_TS001_TC001.input.databaseConnector,
            ReadPayrollBatchItemServiceData.READ_PAYROLLBATCHITEM_TS001_TC001.input.apiID,
            ReadPayrollBatchItemServiceData.READ_PAYROLLBATCHITEM_TS001_TC001.input.config,
            ReadPayrollBatchItemServiceData.READ_PAYROLLBATCHITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadPayrollBatchItemServiceData.READ_PAYROLLBATCHITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadPayrollBatchItemServiceData.READ_PAYROLLBATCHITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadPayrollBatchItemServiceData.READ_PAYROLLBATCHITEM_TS001_TC001.output)[2])
	});



    test(ReadPayrollBatchItemServiceData.READ_PAYROLLBATCHITEM_TS001_TC002.description, async () => {

        const output = await ReadPayrollBatchItemService.readPayrollBatchItems(
            ReadPayrollBatchItemServiceData.READ_PAYROLLBATCHITEM_TS001_TC002.input.databaseConnector,
            ReadPayrollBatchItemServiceData.READ_PAYROLLBATCHITEM_TS001_TC002.input.apiID,
            ReadPayrollBatchItemServiceData.READ_PAYROLLBATCHITEM_TS001_TC002.input.config,
            ReadPayrollBatchItemServiceData.READ_PAYROLLBATCHITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadPayrollBatchItemServiceData.READ_PAYROLLBATCHITEM_TS001_TC002.output.data)
        expect(output.status).toBe(ReadPayrollBatchItemServiceData.READ_PAYROLLBATCHITEM_TS001_TC002.output.status)
        expect(output.message).toBe(ReadPayrollBatchItemServiceData.READ_PAYROLLBATCHITEM_TS001_TC002.output.message)        
	});



    test(ReadPayrollBatchItemServiceData.READ_PAYROLLBATCHITEM_TS001_TC003.description, async () => {

        const output = await ReadPayrollBatchItemService.readPayrollBatchItems(
            ReadPayrollBatchItemServiceData.READ_PAYROLLBATCHITEM_TS001_TC003.input.databaseConnector,
            ReadPayrollBatchItemServiceData.READ_PAYROLLBATCHITEM_TS001_TC003.input.apiID,
            ReadPayrollBatchItemServiceData.READ_PAYROLLBATCHITEM_TS001_TC003.input.config,
            ReadPayrollBatchItemServiceData.READ_PAYROLLBATCHITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadPayrollBatchItemServiceData.READ_PAYROLLBATCHITEM_TS001_TC003.output.status)
        expect(output.message).toBe(ReadPayrollBatchItemServiceData.READ_PAYROLLBATCHITEM_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.payrollbatchitem.ts.002] | FunctionPath : [src/services/payroll/read.payrollbatchitem.service.js/readOnePayrollBatchItem()]", () => {


	test(ReadPayrollBatchItemServiceData.READ_ONE_PAYROLLBATCHITEM_TS002_TC001.description, async () => {

        const output = await ReadPayrollBatchItemService.readOnePayrollBatchItem(
            ReadPayrollBatchItemServiceData.READ_ONE_PAYROLLBATCHITEM_TS002_TC001.input.databaseConnector,
            ReadPayrollBatchItemServiceData.READ_ONE_PAYROLLBATCHITEM_TS002_TC001.input.apiID,
            ReadPayrollBatchItemServiceData.READ_ONE_PAYROLLBATCHITEM_TS002_TC001.input.config,
            ReadPayrollBatchItemServiceData.READ_ONE_PAYROLLBATCHITEM_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadPayrollBatchItemServiceData.READ_ONE_PAYROLLBATCHITEM_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadPayrollBatchItemServiceData.READ_ONE_PAYROLLBATCHITEM_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadPayrollBatchItemServiceData.READ_ONE_PAYROLLBATCHITEM_TS002_TC001.output)[2])
	});



    test(ReadPayrollBatchItemServiceData.READ_ONE_PAYROLLBATCHITEM_TS002_TC002.description, async () => {

        const output = await ReadPayrollBatchItemService.readOnePayrollBatchItem(
            ReadPayrollBatchItemServiceData.READ_ONE_PAYROLLBATCHITEM_TS002_TC002.input.databaseConnector,
            ReadPayrollBatchItemServiceData.READ_ONE_PAYROLLBATCHITEM_TS002_TC002.input.apiID,
            ReadPayrollBatchItemServiceData.READ_ONE_PAYROLLBATCHITEM_TS002_TC002.input.config,
            ReadPayrollBatchItemServiceData.READ_ONE_PAYROLLBATCHITEM_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadPayrollBatchItemServiceData.READ_ONE_PAYROLLBATCHITEM_TS002_TC002.output.data)
        expect(output.status).toBe(ReadPayrollBatchItemServiceData.READ_ONE_PAYROLLBATCHITEM_TS002_TC002.output.status)
        expect(output.message).toBe(ReadPayrollBatchItemServiceData.READ_ONE_PAYROLLBATCHITEM_TS002_TC002.output.message)        
	});



    test(ReadPayrollBatchItemServiceData.READ_ONE_PAYROLLBATCHITEM_TS002_TC003.description, async () => {

        const output = await ReadPayrollBatchItemService.readOnePayrollBatchItem(
            ReadPayrollBatchItemServiceData.READ_ONE_PAYROLLBATCHITEM_TS002_TC003.input.databaseConnector,
            ReadPayrollBatchItemServiceData.READ_ONE_PAYROLLBATCHITEM_TS002_TC003.input.apiID,
            ReadPayrollBatchItemServiceData.READ_ONE_PAYROLLBATCHITEM_TS002_TC003.input.config,
            ReadPayrollBatchItemServiceData.READ_ONE_PAYROLLBATCHITEM_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadPayrollBatchItemServiceData.READ_ONE_PAYROLLBATCHITEM_TS002_TC003.output.status)
        expect(output.message).toBe(ReadPayrollBatchItemServiceData.READ_ONE_PAYROLLBATCHITEM_TS002_TC003.output.message)        
	});

});