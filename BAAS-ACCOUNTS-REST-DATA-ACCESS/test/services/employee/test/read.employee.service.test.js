/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Employee service class
**/

/**
 * Importing all required modules here
 */

const readEmployeeServiceData = require("../data/read.employee.service.data")
const readEmployeeService = require("../../../../src/services/employee/read.employee.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadEmployeeService = new readEmployeeService();
const ReadEmployeeServiceData = new readEmployeeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.employee.ts.001] | FunctionPath : [src/services/employee/read.contianer.service.js/readEmployees()]", () => {


	test(ReadEmployeeServiceData.READ_EMPLOYEE_TS001_TC001.description, async () => {

        const output = await ReadEmployeeService.readEmployees(
            ReadEmployeeServiceData.READ_EMPLOYEE_TS001_TC001.input.databaseConnector,
            ReadEmployeeServiceData.READ_EMPLOYEE_TS001_TC001.input.apiID,
            ReadEmployeeServiceData.READ_EMPLOYEE_TS001_TC001.input.config,
            ReadEmployeeServiceData.READ_EMPLOYEE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadEmployeeServiceData.READ_EMPLOYEE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadEmployeeServiceData.READ_EMPLOYEE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadEmployeeServiceData.READ_EMPLOYEE_TS001_TC001.output)[2])
	});



    test(ReadEmployeeServiceData.READ_EMPLOYEE_TS001_TC002.description, async () => {

        const output = await ReadEmployeeService.readEmployees(
            ReadEmployeeServiceData.READ_EMPLOYEE_TS001_TC002.input.databaseConnector,
            ReadEmployeeServiceData.READ_EMPLOYEE_TS001_TC002.input.apiID,
            ReadEmployeeServiceData.READ_EMPLOYEE_TS001_TC002.input.config,
            ReadEmployeeServiceData.READ_EMPLOYEE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadEmployeeServiceData.READ_EMPLOYEE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadEmployeeServiceData.READ_EMPLOYEE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadEmployeeServiceData.READ_EMPLOYEE_TS001_TC002.output.message)        
	});



    test(ReadEmployeeServiceData.READ_EMPLOYEE_TS001_TC003.description, async () => {

        const output = await ReadEmployeeService.readEmployees(
            ReadEmployeeServiceData.READ_EMPLOYEE_TS001_TC003.input.databaseConnector,
            ReadEmployeeServiceData.READ_EMPLOYEE_TS001_TC003.input.apiID,
            ReadEmployeeServiceData.READ_EMPLOYEE_TS001_TC003.input.config,
            ReadEmployeeServiceData.READ_EMPLOYEE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadEmployeeServiceData.READ_EMPLOYEE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadEmployeeServiceData.READ_EMPLOYEE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.employee.ts.002] | FunctionPath : [src/services/employee/read.employee.service.js/readOneEmployee()]", () => {


	test(ReadEmployeeServiceData.READ_ONE_EMPLOYEE_TS002_TC001.description, async () => {

        const output = await ReadEmployeeService.readOneEmployee(
            ReadEmployeeServiceData.READ_ONE_EMPLOYEE_TS002_TC001.input.databaseConnector,
            ReadEmployeeServiceData.READ_ONE_EMPLOYEE_TS002_TC001.input.apiID,
            ReadEmployeeServiceData.READ_ONE_EMPLOYEE_TS002_TC001.input.config,
            ReadEmployeeServiceData.READ_ONE_EMPLOYEE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadEmployeeServiceData.READ_ONE_EMPLOYEE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadEmployeeServiceData.READ_ONE_EMPLOYEE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadEmployeeServiceData.READ_ONE_EMPLOYEE_TS002_TC001.output)[2])
	});



    test(ReadEmployeeServiceData.READ_ONE_EMPLOYEE_TS002_TC002.description, async () => {

        const output = await ReadEmployeeService.readOneEmployee(
            ReadEmployeeServiceData.READ_ONE_EMPLOYEE_TS002_TC002.input.databaseConnector,
            ReadEmployeeServiceData.READ_ONE_EMPLOYEE_TS002_TC002.input.apiID,
            ReadEmployeeServiceData.READ_ONE_EMPLOYEE_TS002_TC002.input.config,
            ReadEmployeeServiceData.READ_ONE_EMPLOYEE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadEmployeeServiceData.READ_ONE_EMPLOYEE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadEmployeeServiceData.READ_ONE_EMPLOYEE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadEmployeeServiceData.READ_ONE_EMPLOYEE_TS002_TC002.output.message)        
	});



    test(ReadEmployeeServiceData.READ_ONE_EMPLOYEE_TS002_TC003.description, async () => {

        const output = await ReadEmployeeService.readOneEmployee(
            ReadEmployeeServiceData.READ_ONE_EMPLOYEE_TS002_TC003.input.databaseConnector,
            ReadEmployeeServiceData.READ_ONE_EMPLOYEE_TS002_TC003.input.apiID,
            ReadEmployeeServiceData.READ_ONE_EMPLOYEE_TS002_TC003.input.config,
            ReadEmployeeServiceData.READ_ONE_EMPLOYEE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadEmployeeServiceData.READ_ONE_EMPLOYEE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadEmployeeServiceData.READ_ONE_EMPLOYEE_TS002_TC003.output.message)        
	});

});