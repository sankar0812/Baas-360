/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create payrollbatch service class
**/

/**
 * Importing all required modules here
 */

const createPayrollBatchServiceData = require("../data/create.payrollbatch.service.data")
const createPayrollBatchService = require("../../../../src/services/payroll/create.payrollbatch.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreatePayrollBatchService = new createPayrollBatchService();
const CreatePayrollBatchServiceData = new createPayrollBatchServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.payrollbatch.ts.001] | FunctionPath : [src/services/payroll/create.payrollbatch.service.js/createOnePayrollBatch()]", () => {


	test(CreatePayrollBatchServiceData.CREATE_ONE_PAYROLLBATCH_TS001_TC001.description, async () => {

        const output = await CreatePayrollBatchService.createOnePayrollBatch(
            CreatePayrollBatchServiceData.CREATE_ONE_PAYROLLBATCH_TS001_TC001.input.databaseConnector,
            CreatePayrollBatchServiceData.CREATE_ONE_PAYROLLBATCH_TS001_TC001.input.apiID,
            CreatePayrollBatchServiceData.CREATE_ONE_PAYROLLBATCH_TS001_TC001.input.config,
            CreatePayrollBatchServiceData.CREATE_ONE_PAYROLLBATCH_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreatePayrollBatchServiceData.CREATE_ONE_PAYROLLBATCH_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreatePayrollBatchServiceData.CREATE_ONE_PAYROLLBATCH_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreatePayrollBatchServiceData.CREATE_ONE_PAYROLLBATCH_TS001_TC001.output)[2])
	});



    test(CreatePayrollBatchServiceData.CREATE_ONE_PAYROLLBATCH_TS001_TC002.description, async () => {

        const output = await CreatePayrollBatchService.createOnePayrollBatch(
            CreatePayrollBatchServiceData.CREATE_ONE_PAYROLLBATCH_TS001_TC002.input.databaseConnector,
            CreatePayrollBatchServiceData.CREATE_ONE_PAYROLLBATCH_TS001_TC002.input.apiID,
            CreatePayrollBatchServiceData.CREATE_ONE_PAYROLLBATCH_TS001_TC002.input.config,
            CreatePayrollBatchServiceData.CREATE_ONE_PAYROLLBATCH_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreatePayrollBatchServiceData.CREATE_ONE_PAYROLLBATCH_TS001_TC002.output.data)
        expect(output.status).toBe(CreatePayrollBatchServiceData.CREATE_ONE_PAYROLLBATCH_TS001_TC002.output.status)
        expect(output.message).toBe(CreatePayrollBatchServiceData.CREATE_ONE_PAYROLLBATCH_TS001_TC002.output.message)        
	});



    test(CreatePayrollBatchServiceData.CREATE_ONE_PAYROLLBATCH_TS001_TC003.description, async () => {

        const output = await CreatePayrollBatchService.createOnePayrollBatch(
            CreatePayrollBatchServiceData.CREATE_ONE_PAYROLLBATCH_TS001_TC003.input.databaseConnector,
            CreatePayrollBatchServiceData.CREATE_ONE_PAYROLLBATCH_TS001_TC003.input.apiID,
            CreatePayrollBatchServiceData.CREATE_ONE_PAYROLLBATCH_TS001_TC003.input.config,
            CreatePayrollBatchServiceData.CREATE_ONE_PAYROLLBATCH_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreatePayrollBatchServiceData.CREATE_ONE_PAYROLLBATCH_TS001_TC003.output.status)
        expect(output.message).toBe(CreatePayrollBatchServiceData.CREATE_ONE_PAYROLLBATCH_TS001_TC003.output.message)        
	});

});