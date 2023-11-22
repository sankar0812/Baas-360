/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete employee service class
**/

/**
 * Importing all required modules here
 */

const deleteEmployeeServiceData = require("../data/delete.employee.service.data")
const deleteEmployeeService = require("../../../../src/services/employee/delete.employee.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteEmployeeService = new deleteEmployeeService();
const DeleteEmployeeServiceData = new deleteEmployeeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.employee.ts.001] | FunctionPath : [src/services/employee/delete.employee.service.js/deleteOneEmployee()]", () => {


	test(DeleteEmployeeServiceData.DELETE_ONE_EMPLOYEE_TS001_TC001.description, async () => {

        const output = await DeleteEmployeeService.deleteOneEmployee(
            DeleteEmployeeServiceData.DELETE_ONE_EMPLOYEE_TS001_TC001.input.databaseConnector,
            DeleteEmployeeServiceData.DELETE_ONE_EMPLOYEE_TS001_TC001.input.apiID,
            DeleteEmployeeServiceData.DELETE_ONE_EMPLOYEE_TS001_TC001.input.config,
            DeleteEmployeeServiceData.DELETE_ONE_EMPLOYEE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteEmployeeServiceData.DELETE_ONE_EMPLOYEE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteEmployeeServiceData.DELETE_ONE_EMPLOYEE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteEmployeeServiceData.DELETE_ONE_EMPLOYEE_TS001_TC001.output)[2])
	});



    test(DeleteEmployeeServiceData.DELETE_ONE_EMPLOYEE_TS001_TC002.description, async () => {

        const output = await DeleteEmployeeService.deleteOneEmployee(
            DeleteEmployeeServiceData.DELETE_ONE_EMPLOYEE_TS001_TC002.input.databaseConnector,
            DeleteEmployeeServiceData.DELETE_ONE_EMPLOYEE_TS001_TC002.input.apiID,
            DeleteEmployeeServiceData.DELETE_ONE_EMPLOYEE_TS001_TC002.input.config,
            DeleteEmployeeServiceData.DELETE_ONE_EMPLOYEE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteEmployeeServiceData.DELETE_ONE_EMPLOYEE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteEmployeeServiceData.DELETE_ONE_EMPLOYEE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteEmployeeServiceData.DELETE_ONE_EMPLOYEE_TS001_TC002.output.message)        
	});



    test(DeleteEmployeeServiceData.DELETE_ONE_EMPLOYEE_TS001_TC003.description, async () => {

        const output = await DeleteEmployeeService.deleteOneEmployee(
            DeleteEmployeeServiceData.DELETE_ONE_EMPLOYEE_TS001_TC003.input.databaseConnector,
            DeleteEmployeeServiceData.DELETE_ONE_EMPLOYEE_TS001_TC003.input.apiID,
            DeleteEmployeeServiceData.DELETE_ONE_EMPLOYEE_TS001_TC003.input.config,
            DeleteEmployeeServiceData.DELETE_ONE_EMPLOYEE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteEmployeeServiceData.DELETE_ONE_EMPLOYEE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteEmployeeServiceData.DELETE_ONE_EMPLOYEE_TS001_TC003.output.message)        
	});

});
