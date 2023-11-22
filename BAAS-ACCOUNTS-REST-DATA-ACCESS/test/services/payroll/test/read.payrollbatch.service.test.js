/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read PayrollBatch service class
**/

/**
 * Importing all required modules here
 */

const readPayrollBatchServiceData = require("../data/read.payrollbatch.service.data")
const readPayrollBatchService = require("../../../../src/services/payroll/read.payrollbatch.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadPayrollBatchService = new readPayrollBatchService();
const ReadPayrollBatchServiceData = new readPayrollBatchServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.payrollbatch.ts.001] | FunctionPath : [src/services/payroll/read.contianer.service.js/readPayrollBatchs()]", () => {


	test(ReadPayrollBatchServiceData.READ_PAYROLLBATCH_TS001_TC001.description, async () => {

        const output = await ReadPayrollBatchService.readPayrollBatchs(
            ReadPayrollBatchServiceData.READ_PAYROLLBATCH_TS001_TC001.input.databaseConnector,
            ReadPayrollBatchServiceData.READ_PAYROLLBATCH_TS001_TC001.input.apiID,
            ReadPayrollBatchServiceData.READ_PAYROLLBATCH_TS001_TC001.input.config,
            ReadPayrollBatchServiceData.READ_PAYROLLBATCH_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadPayrollBatchServiceData.READ_PAYROLLBATCH_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadPayrollBatchServiceData.READ_PAYROLLBATCH_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadPayrollBatchServiceData.READ_PAYROLLBATCH_TS001_TC001.output)[2])
	});



    test(ReadPayrollBatchServiceData.READ_PAYROLLBATCH_TS001_TC002.description, async () => {

        const output = await ReadPayrollBatchService.readPayrollBatchs(
            ReadPayrollBatchServiceData.READ_PAYROLLBATCH_TS001_TC002.input.databaseConnector,
            ReadPayrollBatchServiceData.READ_PAYROLLBATCH_TS001_TC002.input.apiID,
            ReadPayrollBatchServiceData.READ_PAYROLLBATCH_TS001_TC002.input.config,
            ReadPayrollBatchServiceData.READ_PAYROLLBATCH_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadPayrollBatchServiceData.READ_PAYROLLBATCH_TS001_TC002.output.data)
        expect(output.status).toBe(ReadPayrollBatchServiceData.READ_PAYROLLBATCH_TS001_TC002.output.status)
        expect(output.message).toBe(ReadPayrollBatchServiceData.READ_PAYROLLBATCH_TS001_TC002.output.message)        
	});



    test(ReadPayrollBatchServiceData.READ_PAYROLLBATCH_TS001_TC003.description, async () => {

        const output = await ReadPayrollBatchService.readPayrollBatchs(
            ReadPayrollBatchServiceData.READ_PAYROLLBATCH_TS001_TC003.input.databaseConnector,
            ReadPayrollBatchServiceData.READ_PAYROLLBATCH_TS001_TC003.input.apiID,
            ReadPayrollBatchServiceData.READ_PAYROLLBATCH_TS001_TC003.input.config,
            ReadPayrollBatchServiceData.READ_PAYROLLBATCH_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadPayrollBatchServiceData.READ_PAYROLLBATCH_TS001_TC003.output.status)
        expect(output.message).toBe(ReadPayrollBatchServiceData.READ_PAYROLLBATCH_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.payrollbatch.ts.002] | FunctionPath : [src/services/payroll/read.payrollbatch.service.js/readOnePayrollBatch()]", () => {


	test(ReadPayrollBatchServiceData.READ_ONE_PAYROLLBATCH_TS002_TC001.description, async () => {

        const output = await ReadPayrollBatchService.readOnePayrollBatch(
            ReadPayrollBatchServiceData.READ_ONE_PAYROLLBATCH_TS002_TC001.input.databaseConnector,
            ReadPayrollBatchServiceData.READ_ONE_PAYROLLBATCH_TS002_TC001.input.apiID,
            ReadPayrollBatchServiceData.READ_ONE_PAYROLLBATCH_TS002_TC001.input.config,
            ReadPayrollBatchServiceData.READ_ONE_PAYROLLBATCH_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadPayrollBatchServiceData.READ_ONE_PAYROLLBATCH_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadPayrollBatchServiceData.READ_ONE_PAYROLLBATCH_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadPayrollBatchServiceData.READ_ONE_PAYROLLBATCH_TS002_TC001.output)[2])
	});



    test(ReadPayrollBatchServiceData.READ_ONE_PAYROLLBATCH_TS002_TC002.description, async () => {

        const output = await ReadPayrollBatchService.readOnePayrollBatch(
            ReadPayrollBatchServiceData.READ_ONE_PAYROLLBATCH_TS002_TC002.input.databaseConnector,
            ReadPayrollBatchServiceData.READ_ONE_PAYROLLBATCH_TS002_TC002.input.apiID,
            ReadPayrollBatchServiceData.READ_ONE_PAYROLLBATCH_TS002_TC002.input.config,
            ReadPayrollBatchServiceData.READ_ONE_PAYROLLBATCH_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadPayrollBatchServiceData.READ_ONE_PAYROLLBATCH_TS002_TC002.output.data)
        expect(output.status).toBe(ReadPayrollBatchServiceData.READ_ONE_PAYROLLBATCH_TS002_TC002.output.status)
        expect(output.message).toBe(ReadPayrollBatchServiceData.READ_ONE_PAYROLLBATCH_TS002_TC002.output.message)        
	});



    test(ReadPayrollBatchServiceData.READ_ONE_PAYROLLBATCH_TS002_TC003.description, async () => {

        const output = await ReadPayrollBatchService.readOnePayrollBatch(
            ReadPayrollBatchServiceData.READ_ONE_PAYROLLBATCH_TS002_TC003.input.databaseConnector,
            ReadPayrollBatchServiceData.READ_ONE_PAYROLLBATCH_TS002_TC003.input.apiID,
            ReadPayrollBatchServiceData.READ_ONE_PAYROLLBATCH_TS002_TC003.input.config,
            ReadPayrollBatchServiceData.READ_ONE_PAYROLLBATCH_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadPayrollBatchServiceData.READ_ONE_PAYROLLBATCH_TS002_TC003.output.status)
        expect(output.message).toBe(ReadPayrollBatchServiceData.READ_ONE_PAYROLLBATCH_TS002_TC003.output.message)        
	});

});