/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read EmployeePackageLog service class
**/

/**
 * Importing all required modules here
 */

const readEmployeePackageLogServiceData = require("../data/read.employeepackagelog.service.data")
const readEmployeePackageLogService = require("../../../../src/services/employee/read.employeepackagelog.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadEmployeePackageLogService = new readEmployeePackageLogService();
const ReadEmployeePackageLogServiceData = new readEmployeePackageLogServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.employeepackagelog.ts.001] | FunctionPath : [src/services/employee/read.contianer.service.js/readEmployeePackageLogs()]", () => {


	test(ReadEmployeePackageLogServiceData.READ_EMPLOYEEPACKAGELOG_TS001_TC001.description, async () => {

        const output = await ReadEmployeePackageLogService.readEmployeePackageLogs(
            ReadEmployeePackageLogServiceData.READ_EMPLOYEEPACKAGELOG_TS001_TC001.input.databaseConnector,
            ReadEmployeePackageLogServiceData.READ_EMPLOYEEPACKAGELOG_TS001_TC001.input.apiID,
            ReadEmployeePackageLogServiceData.READ_EMPLOYEEPACKAGELOG_TS001_TC001.input.config,
            ReadEmployeePackageLogServiceData.READ_EMPLOYEEPACKAGELOG_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadEmployeePackageLogServiceData.READ_EMPLOYEEPACKAGELOG_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadEmployeePackageLogServiceData.READ_EMPLOYEEPACKAGELOG_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadEmployeePackageLogServiceData.READ_EMPLOYEEPACKAGELOG_TS001_TC001.output)[2])
	});



    test(ReadEmployeePackageLogServiceData.READ_EMPLOYEEPACKAGELOG_TS001_TC002.description, async () => {

        const output = await ReadEmployeePackageLogService.readEmployeePackageLogs(
            ReadEmployeePackageLogServiceData.READ_EMPLOYEEPACKAGELOG_TS001_TC002.input.databaseConnector,
            ReadEmployeePackageLogServiceData.READ_EMPLOYEEPACKAGELOG_TS001_TC002.input.apiID,
            ReadEmployeePackageLogServiceData.READ_EMPLOYEEPACKAGELOG_TS001_TC002.input.config,
            ReadEmployeePackageLogServiceData.READ_EMPLOYEEPACKAGELOG_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadEmployeePackageLogServiceData.READ_EMPLOYEEPACKAGELOG_TS001_TC002.output.data)
        expect(output.status).toBe(ReadEmployeePackageLogServiceData.READ_EMPLOYEEPACKAGELOG_TS001_TC002.output.status)
        expect(output.message).toBe(ReadEmployeePackageLogServiceData.READ_EMPLOYEEPACKAGELOG_TS001_TC002.output.message)        
	});



    test(ReadEmployeePackageLogServiceData.READ_EMPLOYEEPACKAGELOG_TS001_TC003.description, async () => {

        const output = await ReadEmployeePackageLogService.readEmployeePackageLogs(
            ReadEmployeePackageLogServiceData.READ_EMPLOYEEPACKAGELOG_TS001_TC003.input.databaseConnector,
            ReadEmployeePackageLogServiceData.READ_EMPLOYEEPACKAGELOG_TS001_TC003.input.apiID,
            ReadEmployeePackageLogServiceData.READ_EMPLOYEEPACKAGELOG_TS001_TC003.input.config,
            ReadEmployeePackageLogServiceData.READ_EMPLOYEEPACKAGELOG_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadEmployeePackageLogServiceData.READ_EMPLOYEEPACKAGELOG_TS001_TC003.output.status)
        expect(output.message).toBe(ReadEmployeePackageLogServiceData.READ_EMPLOYEEPACKAGELOG_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.employeepackagelog.ts.002] | FunctionPath : [src/services/employee/read.employeepackagelog.service.js/readOneEmployeePackageLog()]", () => {


	test(ReadEmployeePackageLogServiceData.READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC001.description, async () => {

        const output = await ReadEmployeePackageLogService.readOneEmployeePackageLog(
            ReadEmployeePackageLogServiceData.READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC001.input.databaseConnector,
            ReadEmployeePackageLogServiceData.READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC001.input.apiID,
            ReadEmployeePackageLogServiceData.READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC001.input.config,
            ReadEmployeePackageLogServiceData.READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadEmployeePackageLogServiceData.READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadEmployeePackageLogServiceData.READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadEmployeePackageLogServiceData.READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC001.output)[2])
	});



    test(ReadEmployeePackageLogServiceData.READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC002.description, async () => {

        const output = await ReadEmployeePackageLogService.readOneEmployeePackageLog(
            ReadEmployeePackageLogServiceData.READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC002.input.databaseConnector,
            ReadEmployeePackageLogServiceData.READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC002.input.apiID,
            ReadEmployeePackageLogServiceData.READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC002.input.config,
            ReadEmployeePackageLogServiceData.READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadEmployeePackageLogServiceData.READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC002.output.data)
        expect(output.status).toBe(ReadEmployeePackageLogServiceData.READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC002.output.status)
        expect(output.message).toBe(ReadEmployeePackageLogServiceData.READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC002.output.message)        
	});



    test(ReadEmployeePackageLogServiceData.READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC003.description, async () => {

        const output = await ReadEmployeePackageLogService.readOneEmployeePackageLog(
            ReadEmployeePackageLogServiceData.READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC003.input.databaseConnector,
            ReadEmployeePackageLogServiceData.READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC003.input.apiID,
            ReadEmployeePackageLogServiceData.READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC003.input.config,
            ReadEmployeePackageLogServiceData.READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadEmployeePackageLogServiceData.READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC003.output.status)
        expect(output.message).toBe(ReadEmployeePackageLogServiceData.READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC003.output.message)        
	});

});