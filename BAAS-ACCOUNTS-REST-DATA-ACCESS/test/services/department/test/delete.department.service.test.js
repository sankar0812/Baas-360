/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete department service class
**/

/**
 * Importing all required modules here
 */

const deleteDepartmentServiceData = require("../data/delete.department.service.data")
const deleteDepartmentService = require("../../../../src/services/department/delete.department.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteDepartmentService = new deleteDepartmentService();
const DeleteDepartmentServiceData = new deleteDepartmentServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.department.ts.001] | FunctionPath : [src/services/department/delete.department.service.js/deleteOneDepartment()]", () => {


	test(DeleteDepartmentServiceData.DELETE_ONE_DEPARTMENT_TS001_TC001.description, async () => {

        const output = await DeleteDepartmentService.deleteOneDepartment(
            DeleteDepartmentServiceData.DELETE_ONE_DEPARTMENT_TS001_TC001.input.databaseConnector,
            DeleteDepartmentServiceData.DELETE_ONE_DEPARTMENT_TS001_TC001.input.apiID,
            DeleteDepartmentServiceData.DELETE_ONE_DEPARTMENT_TS001_TC001.input.config,
            DeleteDepartmentServiceData.DELETE_ONE_DEPARTMENT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteDepartmentServiceData.DELETE_ONE_DEPARTMENT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteDepartmentServiceData.DELETE_ONE_DEPARTMENT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteDepartmentServiceData.DELETE_ONE_DEPARTMENT_TS001_TC001.output)[2])
	});



    test(DeleteDepartmentServiceData.DELETE_ONE_DEPARTMENT_TS001_TC002.description, async () => {

        const output = await DeleteDepartmentService.deleteOneDepartment(
            DeleteDepartmentServiceData.DELETE_ONE_DEPARTMENT_TS001_TC002.input.databaseConnector,
            DeleteDepartmentServiceData.DELETE_ONE_DEPARTMENT_TS001_TC002.input.apiID,
            DeleteDepartmentServiceData.DELETE_ONE_DEPARTMENT_TS001_TC002.input.config,
            DeleteDepartmentServiceData.DELETE_ONE_DEPARTMENT_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteDepartmentServiceData.DELETE_ONE_DEPARTMENT_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteDepartmentServiceData.DELETE_ONE_DEPARTMENT_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteDepartmentServiceData.DELETE_ONE_DEPARTMENT_TS001_TC002.output.message)        
	});



    test(DeleteDepartmentServiceData.DELETE_ONE_DEPARTMENT_TS001_TC003.description, async () => {

        const output = await DeleteDepartmentService.deleteOneDepartment(
            DeleteDepartmentServiceData.DELETE_ONE_DEPARTMENT_TS001_TC003.input.databaseConnector,
            DeleteDepartmentServiceData.DELETE_ONE_DEPARTMENT_TS001_TC003.input.apiID,
            DeleteDepartmentServiceData.DELETE_ONE_DEPARTMENT_TS001_TC003.input.config,
            DeleteDepartmentServiceData.DELETE_ONE_DEPARTMENT_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteDepartmentServiceData.DELETE_ONE_DEPARTMENT_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteDepartmentServiceData.DELETE_ONE_DEPARTMENT_TS001_TC003.output.message)        
	});

});
