/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create employeepackagelog service class
**/

/**
 * Importing all required modules here
 */

const createEmployeePackageLogServiceData = require("../data/create.employeepackagelog.service.data")
const createEmployeePackageLogService = require("../../../../src/services/employee/create.employeepackagelog.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateEmployeePackageLogService = new createEmployeePackageLogService();
const CreateEmployeePackageLogServiceData = new createEmployeePackageLogServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.employeepackagelog.ts.001] | FunctionPath : [src/services/employee/create.employeepackagelog.service.js/createOneEmployeePackageLog()]", () => {


	test(CreateEmployeePackageLogServiceData.CREATE_ONE_EMPLOYEEPACKAGELOG_TS001_TC001.description, async () => {

        const output = await CreateEmployeePackageLogService.createOneEmployeePackageLog(
            CreateEmployeePackageLogServiceData.CREATE_ONE_EMPLOYEEPACKAGELOG_TS001_TC001.input.databaseConnector,
            CreateEmployeePackageLogServiceData.CREATE_ONE_EMPLOYEEPACKAGELOG_TS001_TC001.input.apiID,
            CreateEmployeePackageLogServiceData.CREATE_ONE_EMPLOYEEPACKAGELOG_TS001_TC001.input.config,
            CreateEmployeePackageLogServiceData.CREATE_ONE_EMPLOYEEPACKAGELOG_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateEmployeePackageLogServiceData.CREATE_ONE_EMPLOYEEPACKAGELOG_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateEmployeePackageLogServiceData.CREATE_ONE_EMPLOYEEPACKAGELOG_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateEmployeePackageLogServiceData.CREATE_ONE_EMPLOYEEPACKAGELOG_TS001_TC001.output)[2])
	});



    test(CreateEmployeePackageLogServiceData.CREATE_ONE_EMPLOYEEPACKAGELOG_TS001_TC002.description, async () => {

        const output = await CreateEmployeePackageLogService.createOneEmployeePackageLog(
            CreateEmployeePackageLogServiceData.CREATE_ONE_EMPLOYEEPACKAGELOG_TS001_TC002.input.databaseConnector,
            CreateEmployeePackageLogServiceData.CREATE_ONE_EMPLOYEEPACKAGELOG_TS001_TC002.input.apiID,
            CreateEmployeePackageLogServiceData.CREATE_ONE_EMPLOYEEPACKAGELOG_TS001_TC002.input.config,
            CreateEmployeePackageLogServiceData.CREATE_ONE_EMPLOYEEPACKAGELOG_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateEmployeePackageLogServiceData.CREATE_ONE_EMPLOYEEPACKAGELOG_TS001_TC002.output.data)
        expect(output.status).toBe(CreateEmployeePackageLogServiceData.CREATE_ONE_EMPLOYEEPACKAGELOG_TS001_TC002.output.status)
        expect(output.message).toBe(CreateEmployeePackageLogServiceData.CREATE_ONE_EMPLOYEEPACKAGELOG_TS001_TC002.output.message)        
	});



    test(CreateEmployeePackageLogServiceData.CREATE_ONE_EMPLOYEEPACKAGELOG_TS001_TC003.description, async () => {

        const output = await CreateEmployeePackageLogService.createOneEmployeePackageLog(
            CreateEmployeePackageLogServiceData.CREATE_ONE_EMPLOYEEPACKAGELOG_TS001_TC003.input.databaseConnector,
            CreateEmployeePackageLogServiceData.CREATE_ONE_EMPLOYEEPACKAGELOG_TS001_TC003.input.apiID,
            CreateEmployeePackageLogServiceData.CREATE_ONE_EMPLOYEEPACKAGELOG_TS001_TC003.input.config,
            CreateEmployeePackageLogServiceData.CREATE_ONE_EMPLOYEEPACKAGELOG_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateEmployeePackageLogServiceData.CREATE_ONE_EMPLOYEEPACKAGELOG_TS001_TC003.output.status)
        expect(output.message).toBe(CreateEmployeePackageLogServiceData.CREATE_ONE_EMPLOYEEPACKAGELOG_TS001_TC003.output.message)        
	});

});