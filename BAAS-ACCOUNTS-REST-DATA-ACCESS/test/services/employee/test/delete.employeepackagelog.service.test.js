/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete employeepackagelog service class
**/

/**
 * Importing all required modules here
 */

const deleteEmployeePackageLogServiceData = require("../data/delete.employeepackagelog.service.data")
const deleteEmployeePackageLogService = require("../../../../src/services/employee/delete.employeepackagelog.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteEmployeePackageLogService = new deleteEmployeePackageLogService();
const DeleteEmployeePackageLogServiceData = new deleteEmployeePackageLogServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.employeepackagelog.ts.001] | FunctionPath : [src/services/employee/delete.employeepackagelog.service.js/deleteOneEmployeePackageLog()]", () => {


	test(DeleteEmployeePackageLogServiceData.DELETE_ONE_EMPLOYEEPACKAGELOG_TS001_TC001.description, async () => {

        const output = await DeleteEmployeePackageLogService.deleteOneEmployeePackageLog(
            DeleteEmployeePackageLogServiceData.DELETE_ONE_EMPLOYEEPACKAGELOG_TS001_TC001.input.databaseConnector,
            DeleteEmployeePackageLogServiceData.DELETE_ONE_EMPLOYEEPACKAGELOG_TS001_TC001.input.apiID,
            DeleteEmployeePackageLogServiceData.DELETE_ONE_EMPLOYEEPACKAGELOG_TS001_TC001.input.config,
            DeleteEmployeePackageLogServiceData.DELETE_ONE_EMPLOYEEPACKAGELOG_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteEmployeePackageLogServiceData.DELETE_ONE_EMPLOYEEPACKAGELOG_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteEmployeePackageLogServiceData.DELETE_ONE_EMPLOYEEPACKAGELOG_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteEmployeePackageLogServiceData.DELETE_ONE_EMPLOYEEPACKAGELOG_TS001_TC001.output)[2])
	});



    test(DeleteEmployeePackageLogServiceData.DELETE_ONE_EMPLOYEEPACKAGELOG_TS001_TC002.description, async () => {

        const output = await DeleteEmployeePackageLogService.deleteOneEmployeePackageLog(
            DeleteEmployeePackageLogServiceData.DELETE_ONE_EMPLOYEEPACKAGELOG_TS001_TC002.input.databaseConnector,
            DeleteEmployeePackageLogServiceData.DELETE_ONE_EMPLOYEEPACKAGELOG_TS001_TC002.input.apiID,
            DeleteEmployeePackageLogServiceData.DELETE_ONE_EMPLOYEEPACKAGELOG_TS001_TC002.input.config,
            DeleteEmployeePackageLogServiceData.DELETE_ONE_EMPLOYEEPACKAGELOG_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteEmployeePackageLogServiceData.DELETE_ONE_EMPLOYEEPACKAGELOG_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteEmployeePackageLogServiceData.DELETE_ONE_EMPLOYEEPACKAGELOG_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteEmployeePackageLogServiceData.DELETE_ONE_EMPLOYEEPACKAGELOG_TS001_TC002.output.message)        
	});



    test(DeleteEmployeePackageLogServiceData.DELETE_ONE_EMPLOYEEPACKAGELOG_TS001_TC003.description, async () => {

        const output = await DeleteEmployeePackageLogService.deleteOneEmployeePackageLog(
            DeleteEmployeePackageLogServiceData.DELETE_ONE_EMPLOYEEPACKAGELOG_TS001_TC003.input.databaseConnector,
            DeleteEmployeePackageLogServiceData.DELETE_ONE_EMPLOYEEPACKAGELOG_TS001_TC003.input.apiID,
            DeleteEmployeePackageLogServiceData.DELETE_ONE_EMPLOYEEPACKAGELOG_TS001_TC003.input.config,
            DeleteEmployeePackageLogServiceData.DELETE_ONE_EMPLOYEEPACKAGELOG_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteEmployeePackageLogServiceData.DELETE_ONE_EMPLOYEEPACKAGELOG_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteEmployeePackageLogServiceData.DELETE_ONE_EMPLOYEEPACKAGELOG_TS001_TC003.output.message)        
	});

});
