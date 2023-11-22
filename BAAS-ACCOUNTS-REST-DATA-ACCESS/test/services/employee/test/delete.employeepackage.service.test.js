/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete employeepackage service class
**/

/**
 * Importing all required modules here
 */

const deleteEmployeePackageServiceData = require("../data/delete.employeepackage.service.data")
const deleteEmployeePackageService = require("../../../../src/services/employee/delete.employeepackage.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteEmployeePackageService = new deleteEmployeePackageService();
const DeleteEmployeePackageServiceData = new deleteEmployeePackageServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.employeepackage.ts.001] | FunctionPath : [src/services/employee/delete.employeepackage.service.js/deleteOneEmployeePackage()]", () => {


	test(DeleteEmployeePackageServiceData.DELETE_ONE_EMPLOYEEPACKAGE_TS001_TC001.description, async () => {

        const output = await DeleteEmployeePackageService.deleteOneEmployeePackage(
            DeleteEmployeePackageServiceData.DELETE_ONE_EMPLOYEEPACKAGE_TS001_TC001.input.databaseConnector,
            DeleteEmployeePackageServiceData.DELETE_ONE_EMPLOYEEPACKAGE_TS001_TC001.input.apiID,
            DeleteEmployeePackageServiceData.DELETE_ONE_EMPLOYEEPACKAGE_TS001_TC001.input.config,
            DeleteEmployeePackageServiceData.DELETE_ONE_EMPLOYEEPACKAGE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteEmployeePackageServiceData.DELETE_ONE_EMPLOYEEPACKAGE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteEmployeePackageServiceData.DELETE_ONE_EMPLOYEEPACKAGE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteEmployeePackageServiceData.DELETE_ONE_EMPLOYEEPACKAGE_TS001_TC001.output)[2])
	});



    test(DeleteEmployeePackageServiceData.DELETE_ONE_EMPLOYEEPACKAGE_TS001_TC002.description, async () => {

        const output = await DeleteEmployeePackageService.deleteOneEmployeePackage(
            DeleteEmployeePackageServiceData.DELETE_ONE_EMPLOYEEPACKAGE_TS001_TC002.input.databaseConnector,
            DeleteEmployeePackageServiceData.DELETE_ONE_EMPLOYEEPACKAGE_TS001_TC002.input.apiID,
            DeleteEmployeePackageServiceData.DELETE_ONE_EMPLOYEEPACKAGE_TS001_TC002.input.config,
            DeleteEmployeePackageServiceData.DELETE_ONE_EMPLOYEEPACKAGE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteEmployeePackageServiceData.DELETE_ONE_EMPLOYEEPACKAGE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteEmployeePackageServiceData.DELETE_ONE_EMPLOYEEPACKAGE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteEmployeePackageServiceData.DELETE_ONE_EMPLOYEEPACKAGE_TS001_TC002.output.message)        
	});



    test(DeleteEmployeePackageServiceData.DELETE_ONE_EMPLOYEEPACKAGE_TS001_TC003.description, async () => {

        const output = await DeleteEmployeePackageService.deleteOneEmployeePackage(
            DeleteEmployeePackageServiceData.DELETE_ONE_EMPLOYEEPACKAGE_TS001_TC003.input.databaseConnector,
            DeleteEmployeePackageServiceData.DELETE_ONE_EMPLOYEEPACKAGE_TS001_TC003.input.apiID,
            DeleteEmployeePackageServiceData.DELETE_ONE_EMPLOYEEPACKAGE_TS001_TC003.input.config,
            DeleteEmployeePackageServiceData.DELETE_ONE_EMPLOYEEPACKAGE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteEmployeePackageServiceData.DELETE_ONE_EMPLOYEEPACKAGE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteEmployeePackageServiceData.DELETE_ONE_EMPLOYEEPACKAGE_TS001_TC003.output.message)        
	});

});
