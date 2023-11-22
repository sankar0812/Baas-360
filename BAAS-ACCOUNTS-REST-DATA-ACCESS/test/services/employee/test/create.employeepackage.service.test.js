/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create employeepackage service class
**/

/**
 * Importing all required modules here
 */

const createEmployeePackageServiceData = require("../data/create.employeepackage.service.data")
const createEmployeePackageService = require("../../../../src/services/employee/create.employeepackage.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateEmployeePackageService = new createEmployeePackageService();
const CreateEmployeePackageServiceData = new createEmployeePackageServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.employeepackage.ts.001] | FunctionPath : [src/services/employee/create.employeepackage.service.js/createOneEmployeePackage()]", () => {


	test(CreateEmployeePackageServiceData.CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC001.description, async () => {

        const output = await CreateEmployeePackageService.createOneEmployeePackage(
            CreateEmployeePackageServiceData.CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC001.input.databaseConnector,
            CreateEmployeePackageServiceData.CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC001.input.apiID,
            CreateEmployeePackageServiceData.CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC001.input.config,
            CreateEmployeePackageServiceData.CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateEmployeePackageServiceData.CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateEmployeePackageServiceData.CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateEmployeePackageServiceData.CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC001.output)[2])
	});



    test(CreateEmployeePackageServiceData.CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC002.description, async () => {

        const output = await CreateEmployeePackageService.createOneEmployeePackage(
            CreateEmployeePackageServiceData.CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC002.input.databaseConnector,
            CreateEmployeePackageServiceData.CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC002.input.apiID,
            CreateEmployeePackageServiceData.CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC002.input.config,
            CreateEmployeePackageServiceData.CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateEmployeePackageServiceData.CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateEmployeePackageServiceData.CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateEmployeePackageServiceData.CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC002.output.message)        
	});



    test(CreateEmployeePackageServiceData.CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC003.description, async () => {

        const output = await CreateEmployeePackageService.createOneEmployeePackage(
            CreateEmployeePackageServiceData.CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC003.input.databaseConnector,
            CreateEmployeePackageServiceData.CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC003.input.apiID,
            CreateEmployeePackageServiceData.CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC003.input.config,
            CreateEmployeePackageServiceData.CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateEmployeePackageServiceData.CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateEmployeePackageServiceData.CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC003.output.message)        
	});

});