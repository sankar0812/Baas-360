

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update employee service class
**/

/**
 * Importing all required modules here
 */

const updateEmployeeServiceData = require("../data/update.employee.service.data")
const updateEmployeeService = require("../../../../src/services/employee/update.employee.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateEmployeeService = new updateEmployeeService();
const UpdateEmployeeServiceData = new updateEmployeeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.employee.ts.001] | FunctionPath : [src/services/employee/update.employee.service.js/updateEmployee()]", () => {

	test(UpdateEmployeeServiceData.UPDATE_EMPLOYEE_TS001_TC001.description, async () => {

        const output = await UpdateEmployeeService.updateEmployee(
            UpdateEmployeeServiceData.UPDATE_EMPLOYEE_TS001_TC001.input.databaseConnector,
            UpdateEmployeeServiceData.UPDATE_EMPLOYEE_TS001_TC001.input.apiID,
            UpdateEmployeeServiceData.UPDATE_EMPLOYEE_TS001_TC001.input.config,
            UpdateEmployeeServiceData.UPDATE_EMPLOYEE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateEmployeeServiceData.UPDATE_EMPLOYEE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateEmployeeServiceData.UPDATE_EMPLOYEE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateEmployeeServiceData.UPDATE_EMPLOYEE_TS001_TC001.output)[2])
	});

    test(UpdateEmployeeServiceData.UPDATE_EMPLOYEE_TS001_TC002.description, async () => {

        const output = await UpdateEmployeeService.updateEmployee(
            UpdateEmployeeServiceData.UPDATE_EMPLOYEE_TS001_TC002.input.databaseConnector,
            UpdateEmployeeServiceData.UPDATE_EMPLOYEE_TS001_TC002.input.apiID,
            UpdateEmployeeServiceData.UPDATE_EMPLOYEE_TS001_TC002.input.config,
            UpdateEmployeeServiceData.UPDATE_EMPLOYEE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateEmployeeServiceData.UPDATE_EMPLOYEE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateEmployeeServiceData.UPDATE_EMPLOYEE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateEmployeeServiceData.UPDATE_EMPLOYEE_TS001_TC002.output.message)        
	});

    test(UpdateEmployeeServiceData.UPDATE_EMPLOYEE_TS001_TC003.description, async () => {

        const output = await UpdateEmployeeService.updateEmployee(
            UpdateEmployeeServiceData.UPDATE_EMPLOYEE_TS001_TC003.input.databaseConnector,
            UpdateEmployeeServiceData.UPDATE_EMPLOYEE_TS001_TC003.input.apiID,
            UpdateEmployeeServiceData.UPDATE_EMPLOYEE_TS001_TC003.input.config,
            UpdateEmployeeServiceData.UPDATE_EMPLOYEE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateEmployeeServiceData.UPDATE_EMPLOYEE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateEmployeeServiceData.UPDATE_EMPLOYEE_TS001_TC003.output.message)        
	});

});
