

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update employeepackagelog service class
**/

/**
 * Importing all required modules here
 */

const updateEmployeePackageLogServiceData = require("../data/update.employeepackagelog.service.data")
const updateEmployeePackageLogService = require("../../../../src/services/employee/update.employeepackagelog.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateEmployeePackageLogService = new updateEmployeePackageLogService();
const UpdateEmployeePackageLogServiceData = new updateEmployeePackageLogServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.employeepackagelog.ts.001] | FunctionPath : [src/services/employee/update.employeepackagelog.service.js/updateEmployeePackageLog()]", () => {

	test(UpdateEmployeePackageLogServiceData.UPDATE_EMPLOYEEPACKAGELOG_TS001_TC001.description, async () => {

        const output = await UpdateEmployeePackageLogService.updateEmployeePackageLog(
            UpdateEmployeePackageLogServiceData.UPDATE_EMPLOYEEPACKAGELOG_TS001_TC001.input.databaseConnector,
            UpdateEmployeePackageLogServiceData.UPDATE_EMPLOYEEPACKAGELOG_TS001_TC001.input.apiID,
            UpdateEmployeePackageLogServiceData.UPDATE_EMPLOYEEPACKAGELOG_TS001_TC001.input.config,
            UpdateEmployeePackageLogServiceData.UPDATE_EMPLOYEEPACKAGELOG_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateEmployeePackageLogServiceData.UPDATE_EMPLOYEEPACKAGELOG_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateEmployeePackageLogServiceData.UPDATE_EMPLOYEEPACKAGELOG_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateEmployeePackageLogServiceData.UPDATE_EMPLOYEEPACKAGELOG_TS001_TC001.output)[2])
	});

    test(UpdateEmployeePackageLogServiceData.UPDATE_EMPLOYEEPACKAGELOG_TS001_TC002.description, async () => {

        const output = await UpdateEmployeePackageLogService.updateEmployeePackageLog(
            UpdateEmployeePackageLogServiceData.UPDATE_EMPLOYEEPACKAGELOG_TS001_TC002.input.databaseConnector,
            UpdateEmployeePackageLogServiceData.UPDATE_EMPLOYEEPACKAGELOG_TS001_TC002.input.apiID,
            UpdateEmployeePackageLogServiceData.UPDATE_EMPLOYEEPACKAGELOG_TS001_TC002.input.config,
            UpdateEmployeePackageLogServiceData.UPDATE_EMPLOYEEPACKAGELOG_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateEmployeePackageLogServiceData.UPDATE_EMPLOYEEPACKAGELOG_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateEmployeePackageLogServiceData.UPDATE_EMPLOYEEPACKAGELOG_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateEmployeePackageLogServiceData.UPDATE_EMPLOYEEPACKAGELOG_TS001_TC002.output.message)        
	});

    test(UpdateEmployeePackageLogServiceData.UPDATE_EMPLOYEEPACKAGELOG_TS001_TC003.description, async () => {

        const output = await UpdateEmployeePackageLogService.updateEmployeePackageLog(
            UpdateEmployeePackageLogServiceData.UPDATE_EMPLOYEEPACKAGELOG_TS001_TC003.input.databaseConnector,
            UpdateEmployeePackageLogServiceData.UPDATE_EMPLOYEEPACKAGELOG_TS001_TC003.input.apiID,
            UpdateEmployeePackageLogServiceData.UPDATE_EMPLOYEEPACKAGELOG_TS001_TC003.input.config,
            UpdateEmployeePackageLogServiceData.UPDATE_EMPLOYEEPACKAGELOG_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateEmployeePackageLogServiceData.UPDATE_EMPLOYEEPACKAGELOG_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateEmployeePackageLogServiceData.UPDATE_EMPLOYEEPACKAGELOG_TS001_TC003.output.message)        
	});

});
