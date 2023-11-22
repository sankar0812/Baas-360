/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create department service class
**/

/**
 * Importing all required modules here
 */

const createDepartmentServiceData = require("../data/create.department.service.data")
const createDepartmentService = require("../../../../src/services/department/create.department.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateDepartmentService = new createDepartmentService();
const CreateDepartmentServiceData = new createDepartmentServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.department.ts.001] | FunctionPath : [src/services/department/create.department.service.js/createOneDepartment()]", () => {


	test(CreateDepartmentServiceData.CREATE_ONE_DEPARTMENT_TS001_TC001.description, async () => {

        const output = await CreateDepartmentService.createOneDepartment(
            CreateDepartmentServiceData.CREATE_ONE_DEPARTMENT_TS001_TC001.input.databaseConnector,
            CreateDepartmentServiceData.CREATE_ONE_DEPARTMENT_TS001_TC001.input.apiID,
            CreateDepartmentServiceData.CREATE_ONE_DEPARTMENT_TS001_TC001.input.config,
            CreateDepartmentServiceData.CREATE_ONE_DEPARTMENT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateDepartmentServiceData.CREATE_ONE_DEPARTMENT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateDepartmentServiceData.CREATE_ONE_DEPARTMENT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateDepartmentServiceData.CREATE_ONE_DEPARTMENT_TS001_TC001.output)[2])
	});



    test(CreateDepartmentServiceData.CREATE_ONE_DEPARTMENT_TS001_TC002.description, async () => {

        const output = await CreateDepartmentService.createOneDepartment(
            CreateDepartmentServiceData.CREATE_ONE_DEPARTMENT_TS001_TC002.input.databaseConnector,
            CreateDepartmentServiceData.CREATE_ONE_DEPARTMENT_TS001_TC002.input.apiID,
            CreateDepartmentServiceData.CREATE_ONE_DEPARTMENT_TS001_TC002.input.config,
            CreateDepartmentServiceData.CREATE_ONE_DEPARTMENT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateDepartmentServiceData.CREATE_ONE_DEPARTMENT_TS001_TC002.output.data)
        expect(output.status).toBe(CreateDepartmentServiceData.CREATE_ONE_DEPARTMENT_TS001_TC002.output.status)
        expect(output.message).toBe(CreateDepartmentServiceData.CREATE_ONE_DEPARTMENT_TS001_TC002.output.message)        
	});



    test(CreateDepartmentServiceData.CREATE_ONE_DEPARTMENT_TS001_TC003.description, async () => {

        const output = await CreateDepartmentService.createOneDepartment(
            CreateDepartmentServiceData.CREATE_ONE_DEPARTMENT_TS001_TC003.input.databaseConnector,
            CreateDepartmentServiceData.CREATE_ONE_DEPARTMENT_TS001_TC003.input.apiID,
            CreateDepartmentServiceData.CREATE_ONE_DEPARTMENT_TS001_TC003.input.config,
            CreateDepartmentServiceData.CREATE_ONE_DEPARTMENT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateDepartmentServiceData.CREATE_ONE_DEPARTMENT_TS001_TC003.output.status)
        expect(output.message).toBe(CreateDepartmentServiceData.CREATE_ONE_DEPARTMENT_TS001_TC003.output.message)        
	});

});