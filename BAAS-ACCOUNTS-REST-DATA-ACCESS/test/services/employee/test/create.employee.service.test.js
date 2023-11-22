/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create employee service class
**/

/**
 * Importing all required modules here
 */

const createEmployeeServiceData = require("../data/create.employee.service.data")
const createEmployeeService = require("../../../../src/services/employee/create.employee.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateEmployeeService = new createEmployeeService();
const CreateEmployeeServiceData = new createEmployeeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.employee.ts.001] | FunctionPath : [src/services/employee/create.employee.service.js/createOneEmployee()]", () => {


	test(CreateEmployeeServiceData.CREATE_ONE_EMPLOYEE_TS001_TC001.description, async () => {

        const output = await CreateEmployeeService.createOneEmployee(
            CreateEmployeeServiceData.CREATE_ONE_EMPLOYEE_TS001_TC001.input.databaseConnector,
            CreateEmployeeServiceData.CREATE_ONE_EMPLOYEE_TS001_TC001.input.apiID,
            CreateEmployeeServiceData.CREATE_ONE_EMPLOYEE_TS001_TC001.input.config,
            CreateEmployeeServiceData.CREATE_ONE_EMPLOYEE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateEmployeeServiceData.CREATE_ONE_EMPLOYEE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateEmployeeServiceData.CREATE_ONE_EMPLOYEE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateEmployeeServiceData.CREATE_ONE_EMPLOYEE_TS001_TC001.output)[2])
	});



    test(CreateEmployeeServiceData.CREATE_ONE_EMPLOYEE_TS001_TC002.description, async () => {

        const output = await CreateEmployeeService.createOneEmployee(
            CreateEmployeeServiceData.CREATE_ONE_EMPLOYEE_TS001_TC002.input.databaseConnector,
            CreateEmployeeServiceData.CREATE_ONE_EMPLOYEE_TS001_TC002.input.apiID,
            CreateEmployeeServiceData.CREATE_ONE_EMPLOYEE_TS001_TC002.input.config,
            CreateEmployeeServiceData.CREATE_ONE_EMPLOYEE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateEmployeeServiceData.CREATE_ONE_EMPLOYEE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateEmployeeServiceData.CREATE_ONE_EMPLOYEE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateEmployeeServiceData.CREATE_ONE_EMPLOYEE_TS001_TC002.output.message)        
	});



    test(CreateEmployeeServiceData.CREATE_ONE_EMPLOYEE_TS001_TC003.description, async () => {

        const output = await CreateEmployeeService.createOneEmployee(
            CreateEmployeeServiceData.CREATE_ONE_EMPLOYEE_TS001_TC003.input.databaseConnector,
            CreateEmployeeServiceData.CREATE_ONE_EMPLOYEE_TS001_TC003.input.apiID,
            CreateEmployeeServiceData.CREATE_ONE_EMPLOYEE_TS001_TC003.input.config,
            CreateEmployeeServiceData.CREATE_ONE_EMPLOYEE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateEmployeeServiceData.CREATE_ONE_EMPLOYEE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateEmployeeServiceData.CREATE_ONE_EMPLOYEE_TS001_TC003.output.message)        
	});

});