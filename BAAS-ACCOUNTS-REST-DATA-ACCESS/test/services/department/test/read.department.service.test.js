/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Department service class
**/

/**
 * Importing all required modules here
 */

const readDepartmentServiceData = require("../data/read.department.service.data")
const readDepartmentService = require("../../../../src/services/department/read.department.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadDepartmentService = new readDepartmentService();
const ReadDepartmentServiceData = new readDepartmentServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.department.ts.001] | FunctionPath : [src/services/department/read.contianer.service.js/readDepartments()]", () => {


	test(ReadDepartmentServiceData.READ_DEPARTMENT_TS001_TC001.description, async () => {

        const output = await ReadDepartmentService.readDepartments(
            ReadDepartmentServiceData.READ_DEPARTMENT_TS001_TC001.input.databaseConnector,
            ReadDepartmentServiceData.READ_DEPARTMENT_TS001_TC001.input.apiID,
            ReadDepartmentServiceData.READ_DEPARTMENT_TS001_TC001.input.config,
            ReadDepartmentServiceData.READ_DEPARTMENT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadDepartmentServiceData.READ_DEPARTMENT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadDepartmentServiceData.READ_DEPARTMENT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadDepartmentServiceData.READ_DEPARTMENT_TS001_TC001.output)[2])
	});



    test(ReadDepartmentServiceData.READ_DEPARTMENT_TS001_TC002.description, async () => {

        const output = await ReadDepartmentService.readDepartments(
            ReadDepartmentServiceData.READ_DEPARTMENT_TS001_TC002.input.databaseConnector,
            ReadDepartmentServiceData.READ_DEPARTMENT_TS001_TC002.input.apiID,
            ReadDepartmentServiceData.READ_DEPARTMENT_TS001_TC002.input.config,
            ReadDepartmentServiceData.READ_DEPARTMENT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadDepartmentServiceData.READ_DEPARTMENT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadDepartmentServiceData.READ_DEPARTMENT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadDepartmentServiceData.READ_DEPARTMENT_TS001_TC002.output.message)        
	});



    test(ReadDepartmentServiceData.READ_DEPARTMENT_TS001_TC003.description, async () => {

        const output = await ReadDepartmentService.readDepartments(
            ReadDepartmentServiceData.READ_DEPARTMENT_TS001_TC003.input.databaseConnector,
            ReadDepartmentServiceData.READ_DEPARTMENT_TS001_TC003.input.apiID,
            ReadDepartmentServiceData.READ_DEPARTMENT_TS001_TC003.input.config,
            ReadDepartmentServiceData.READ_DEPARTMENT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadDepartmentServiceData.READ_DEPARTMENT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadDepartmentServiceData.READ_DEPARTMENT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.department.ts.002] | FunctionPath : [src/services/department/read.department.service.js/readOneDepartment()]", () => {


	test(ReadDepartmentServiceData.READ_ONE_DEPARTMENT_TS002_TC001.description, async () => {

        const output = await ReadDepartmentService.readOneDepartment(
            ReadDepartmentServiceData.READ_ONE_DEPARTMENT_TS002_TC001.input.databaseConnector,
            ReadDepartmentServiceData.READ_ONE_DEPARTMENT_TS002_TC001.input.apiID,
            ReadDepartmentServiceData.READ_ONE_DEPARTMENT_TS002_TC001.input.config,
            ReadDepartmentServiceData.READ_ONE_DEPARTMENT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadDepartmentServiceData.READ_ONE_DEPARTMENT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadDepartmentServiceData.READ_ONE_DEPARTMENT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadDepartmentServiceData.READ_ONE_DEPARTMENT_TS002_TC001.output)[2])
	});



    test(ReadDepartmentServiceData.READ_ONE_DEPARTMENT_TS002_TC002.description, async () => {

        const output = await ReadDepartmentService.readOneDepartment(
            ReadDepartmentServiceData.READ_ONE_DEPARTMENT_TS002_TC002.input.databaseConnector,
            ReadDepartmentServiceData.READ_ONE_DEPARTMENT_TS002_TC002.input.apiID,
            ReadDepartmentServiceData.READ_ONE_DEPARTMENT_TS002_TC002.input.config,
            ReadDepartmentServiceData.READ_ONE_DEPARTMENT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadDepartmentServiceData.READ_ONE_DEPARTMENT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadDepartmentServiceData.READ_ONE_DEPARTMENT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadDepartmentServiceData.READ_ONE_DEPARTMENT_TS002_TC002.output.message)        
	});



    test(ReadDepartmentServiceData.READ_ONE_DEPARTMENT_TS002_TC003.description, async () => {

        const output = await ReadDepartmentService.readOneDepartment(
            ReadDepartmentServiceData.READ_ONE_DEPARTMENT_TS002_TC003.input.databaseConnector,
            ReadDepartmentServiceData.READ_ONE_DEPARTMENT_TS002_TC003.input.apiID,
            ReadDepartmentServiceData.READ_ONE_DEPARTMENT_TS002_TC003.input.config,
            ReadDepartmentServiceData.READ_ONE_DEPARTMENT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadDepartmentServiceData.READ_ONE_DEPARTMENT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadDepartmentServiceData.READ_ONE_DEPARTMENT_TS002_TC003.output.message)        
	});

});