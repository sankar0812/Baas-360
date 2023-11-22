

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update employeepackage service class
**/

/**
 * Importing all required modules here
 */

const updateEmployeePackageServiceData = require("../data/update.employeepackage.service.data")
const updateEmployeePackageService = require("../../../../src/services/employee/update.employeepackage.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateEmployeePackageService = new updateEmployeePackageService();
const UpdateEmployeePackageServiceData = new updateEmployeePackageServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.employeepackage.ts.001] | FunctionPath : [src/services/employee/update.employeepackage.service.js/updateEmployeePackage()]", () => {

	test(UpdateEmployeePackageServiceData.UPDATE_EMPLOYEEPACKAGE_TS001_TC001.description, async () => {

        const output = await UpdateEmployeePackageService.updateEmployeePackage(
            UpdateEmployeePackageServiceData.UPDATE_EMPLOYEEPACKAGE_TS001_TC001.input.databaseConnector,
            UpdateEmployeePackageServiceData.UPDATE_EMPLOYEEPACKAGE_TS001_TC001.input.apiID,
            UpdateEmployeePackageServiceData.UPDATE_EMPLOYEEPACKAGE_TS001_TC001.input.config,
            UpdateEmployeePackageServiceData.UPDATE_EMPLOYEEPACKAGE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateEmployeePackageServiceData.UPDATE_EMPLOYEEPACKAGE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateEmployeePackageServiceData.UPDATE_EMPLOYEEPACKAGE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateEmployeePackageServiceData.UPDATE_EMPLOYEEPACKAGE_TS001_TC001.output)[2])
	});

    test(UpdateEmployeePackageServiceData.UPDATE_EMPLOYEEPACKAGE_TS001_TC002.description, async () => {

        const output = await UpdateEmployeePackageService.updateEmployeePackage(
            UpdateEmployeePackageServiceData.UPDATE_EMPLOYEEPACKAGE_TS001_TC002.input.databaseConnector,
            UpdateEmployeePackageServiceData.UPDATE_EMPLOYEEPACKAGE_TS001_TC002.input.apiID,
            UpdateEmployeePackageServiceData.UPDATE_EMPLOYEEPACKAGE_TS001_TC002.input.config,
            UpdateEmployeePackageServiceData.UPDATE_EMPLOYEEPACKAGE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateEmployeePackageServiceData.UPDATE_EMPLOYEEPACKAGE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateEmployeePackageServiceData.UPDATE_EMPLOYEEPACKAGE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateEmployeePackageServiceData.UPDATE_EMPLOYEEPACKAGE_TS001_TC002.output.message)        
	});

    test(UpdateEmployeePackageServiceData.UPDATE_EMPLOYEEPACKAGE_TS001_TC003.description, async () => {

        const output = await UpdateEmployeePackageService.updateEmployeePackage(
            UpdateEmployeePackageServiceData.UPDATE_EMPLOYEEPACKAGE_TS001_TC003.input.databaseConnector,
            UpdateEmployeePackageServiceData.UPDATE_EMPLOYEEPACKAGE_TS001_TC003.input.apiID,
            UpdateEmployeePackageServiceData.UPDATE_EMPLOYEEPACKAGE_TS001_TC003.input.config,
            UpdateEmployeePackageServiceData.UPDATE_EMPLOYEEPACKAGE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateEmployeePackageServiceData.UPDATE_EMPLOYEEPACKAGE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateEmployeePackageServiceData.UPDATE_EMPLOYEEPACKAGE_TS001_TC003.output.message)        
	});

});
