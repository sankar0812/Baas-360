

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update department service class
**/

/**
 * Importing all required modules here
 */

const updateDepartmentServiceData = require("../data/update.department.service.data")
const updateDepartmentService = require("../../../../src/services/department/update.department.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateDepartmentService = new updateDepartmentService();
const UpdateDepartmentServiceData = new updateDepartmentServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.department.ts.001] | FunctionPath : [src/services/department/update.department.service.js/updateDepartment()]", () => {

	test(UpdateDepartmentServiceData.UPDATE_DEPARTMENT_TS001_TC001.description, async () => {

        const output = await UpdateDepartmentService.updateDepartment(
            UpdateDepartmentServiceData.UPDATE_DEPARTMENT_TS001_TC001.input.databaseConnector,
            UpdateDepartmentServiceData.UPDATE_DEPARTMENT_TS001_TC001.input.apiID,
            UpdateDepartmentServiceData.UPDATE_DEPARTMENT_TS001_TC001.input.config,
            UpdateDepartmentServiceData.UPDATE_DEPARTMENT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateDepartmentServiceData.UPDATE_DEPARTMENT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateDepartmentServiceData.UPDATE_DEPARTMENT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateDepartmentServiceData.UPDATE_DEPARTMENT_TS001_TC001.output)[2])
	});

    test(UpdateDepartmentServiceData.UPDATE_DEPARTMENT_TS001_TC002.description, async () => {

        const output = await UpdateDepartmentService.updateDepartment(
            UpdateDepartmentServiceData.UPDATE_DEPARTMENT_TS001_TC002.input.databaseConnector,
            UpdateDepartmentServiceData.UPDATE_DEPARTMENT_TS001_TC002.input.apiID,
            UpdateDepartmentServiceData.UPDATE_DEPARTMENT_TS001_TC002.input.config,
            UpdateDepartmentServiceData.UPDATE_DEPARTMENT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateDepartmentServiceData.UPDATE_DEPARTMENT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateDepartmentServiceData.UPDATE_DEPARTMENT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateDepartmentServiceData.UPDATE_DEPARTMENT_TS001_TC002.output.message)        
	});

    test(UpdateDepartmentServiceData.UPDATE_DEPARTMENT_TS001_TC003.description, async () => {

        const output = await UpdateDepartmentService.updateDepartment(
            UpdateDepartmentServiceData.UPDATE_DEPARTMENT_TS001_TC003.input.databaseConnector,
            UpdateDepartmentServiceData.UPDATE_DEPARTMENT_TS001_TC003.input.apiID,
            UpdateDepartmentServiceData.UPDATE_DEPARTMENT_TS001_TC003.input.config,
            UpdateDepartmentServiceData.UPDATE_DEPARTMENT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateDepartmentServiceData.UPDATE_DEPARTMENT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateDepartmentServiceData.UPDATE_DEPARTMENT_TS001_TC003.output.message)        
	});

});
