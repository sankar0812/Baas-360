/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read EmployeePackage service class
**/

/**
 * Importing all required modules here
 */

const readEmployeePackageServiceData = require("../data/read.employeepackage.service.data")
const readEmployeePackageService = require("../../../../src/services/employee/read.employeepackage.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadEmployeePackageService = new readEmployeePackageService();
const ReadEmployeePackageServiceData = new readEmployeePackageServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.employeepackage.ts.001] | FunctionPath : [src/services/employee/read.contianer.service.js/readEmployeePackages()]", () => {


	test(ReadEmployeePackageServiceData.READ_EMPLOYEEPACKAGE_TS001_TC001.description, async () => {

        const output = await ReadEmployeePackageService.readEmployeePackages(
            ReadEmployeePackageServiceData.READ_EMPLOYEEPACKAGE_TS001_TC001.input.databaseConnector,
            ReadEmployeePackageServiceData.READ_EMPLOYEEPACKAGE_TS001_TC001.input.apiID,
            ReadEmployeePackageServiceData.READ_EMPLOYEEPACKAGE_TS001_TC001.input.config,
            ReadEmployeePackageServiceData.READ_EMPLOYEEPACKAGE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadEmployeePackageServiceData.READ_EMPLOYEEPACKAGE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadEmployeePackageServiceData.READ_EMPLOYEEPACKAGE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadEmployeePackageServiceData.READ_EMPLOYEEPACKAGE_TS001_TC001.output)[2])
	});



    test(ReadEmployeePackageServiceData.READ_EMPLOYEEPACKAGE_TS001_TC002.description, async () => {

        const output = await ReadEmployeePackageService.readEmployeePackages(
            ReadEmployeePackageServiceData.READ_EMPLOYEEPACKAGE_TS001_TC002.input.databaseConnector,
            ReadEmployeePackageServiceData.READ_EMPLOYEEPACKAGE_TS001_TC002.input.apiID,
            ReadEmployeePackageServiceData.READ_EMPLOYEEPACKAGE_TS001_TC002.input.config,
            ReadEmployeePackageServiceData.READ_EMPLOYEEPACKAGE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadEmployeePackageServiceData.READ_EMPLOYEEPACKAGE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadEmployeePackageServiceData.READ_EMPLOYEEPACKAGE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadEmployeePackageServiceData.READ_EMPLOYEEPACKAGE_TS001_TC002.output.message)        
	});



    test(ReadEmployeePackageServiceData.READ_EMPLOYEEPACKAGE_TS001_TC003.description, async () => {

        const output = await ReadEmployeePackageService.readEmployeePackages(
            ReadEmployeePackageServiceData.READ_EMPLOYEEPACKAGE_TS001_TC003.input.databaseConnector,
            ReadEmployeePackageServiceData.READ_EMPLOYEEPACKAGE_TS001_TC003.input.apiID,
            ReadEmployeePackageServiceData.READ_EMPLOYEEPACKAGE_TS001_TC003.input.config,
            ReadEmployeePackageServiceData.READ_EMPLOYEEPACKAGE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadEmployeePackageServiceData.READ_EMPLOYEEPACKAGE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadEmployeePackageServiceData.READ_EMPLOYEEPACKAGE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.employeepackage.ts.002] | FunctionPath : [src/services/employee/read.employeepackage.service.js/readOneEmployeePackage()]", () => {


	test(ReadEmployeePackageServiceData.READ_ONE_EMPLOYEEPACKAGE_TS002_TC001.description, async () => {

        const output = await ReadEmployeePackageService.readOneEmployeePackage(
            ReadEmployeePackageServiceData.READ_ONE_EMPLOYEEPACKAGE_TS002_TC001.input.databaseConnector,
            ReadEmployeePackageServiceData.READ_ONE_EMPLOYEEPACKAGE_TS002_TC001.input.apiID,
            ReadEmployeePackageServiceData.READ_ONE_EMPLOYEEPACKAGE_TS002_TC001.input.config,
            ReadEmployeePackageServiceData.READ_ONE_EMPLOYEEPACKAGE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadEmployeePackageServiceData.READ_ONE_EMPLOYEEPACKAGE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadEmployeePackageServiceData.READ_ONE_EMPLOYEEPACKAGE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadEmployeePackageServiceData.READ_ONE_EMPLOYEEPACKAGE_TS002_TC001.output)[2])
	});



    test(ReadEmployeePackageServiceData.READ_ONE_EMPLOYEEPACKAGE_TS002_TC002.description, async () => {

        const output = await ReadEmployeePackageService.readOneEmployeePackage(
            ReadEmployeePackageServiceData.READ_ONE_EMPLOYEEPACKAGE_TS002_TC002.input.databaseConnector,
            ReadEmployeePackageServiceData.READ_ONE_EMPLOYEEPACKAGE_TS002_TC002.input.apiID,
            ReadEmployeePackageServiceData.READ_ONE_EMPLOYEEPACKAGE_TS002_TC002.input.config,
            ReadEmployeePackageServiceData.READ_ONE_EMPLOYEEPACKAGE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadEmployeePackageServiceData.READ_ONE_EMPLOYEEPACKAGE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadEmployeePackageServiceData.READ_ONE_EMPLOYEEPACKAGE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadEmployeePackageServiceData.READ_ONE_EMPLOYEEPACKAGE_TS002_TC002.output.message)        
	});



    test(ReadEmployeePackageServiceData.READ_ONE_EMPLOYEEPACKAGE_TS002_TC003.description, async () => {

        const output = await ReadEmployeePackageService.readOneEmployeePackage(
            ReadEmployeePackageServiceData.READ_ONE_EMPLOYEEPACKAGE_TS002_TC003.input.databaseConnector,
            ReadEmployeePackageServiceData.READ_ONE_EMPLOYEEPACKAGE_TS002_TC003.input.apiID,
            ReadEmployeePackageServiceData.READ_ONE_EMPLOYEEPACKAGE_TS002_TC003.input.config,
            ReadEmployeePackageServiceData.READ_ONE_EMPLOYEEPACKAGE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadEmployeePackageServiceData.READ_ONE_EMPLOYEEPACKAGE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadEmployeePackageServiceData.READ_ONE_EMPLOYEEPACKAGE_TS002_TC003.output.message)        
	});

});