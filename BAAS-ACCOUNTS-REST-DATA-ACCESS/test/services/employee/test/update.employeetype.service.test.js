

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update employeetype service class
**/

/**
 * Importing all required modules here
 */

const updateEmployeeTypeServiceData = require("../data/update.employeetype.service.data")
const updateEmployeeTypeService = require("../../../../src/services/employee/update.employeetype.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateEmployeeTypeService = new updateEmployeeTypeService();
const UpdateEmployeeTypeServiceData = new updateEmployeeTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.employeetype.ts.001] | FunctionPath : [src/services/employee/update.employeetype.service.js/updateEmployeeType()]", () => {

	test(UpdateEmployeeTypeServiceData.UPDATE_EMPLOYEETYPE_TS001_TC001.description, async () => {

        const output = await UpdateEmployeeTypeService.updateEmployeeType(
            UpdateEmployeeTypeServiceData.UPDATE_EMPLOYEETYPE_TS001_TC001.input.databaseConnector,
            UpdateEmployeeTypeServiceData.UPDATE_EMPLOYEETYPE_TS001_TC001.input.apiID,
            UpdateEmployeeTypeServiceData.UPDATE_EMPLOYEETYPE_TS001_TC001.input.config,
            UpdateEmployeeTypeServiceData.UPDATE_EMPLOYEETYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateEmployeeTypeServiceData.UPDATE_EMPLOYEETYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateEmployeeTypeServiceData.UPDATE_EMPLOYEETYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateEmployeeTypeServiceData.UPDATE_EMPLOYEETYPE_TS001_TC001.output)[2])
	});

    test(UpdateEmployeeTypeServiceData.UPDATE_EMPLOYEETYPE_TS001_TC002.description, async () => {

        const output = await UpdateEmployeeTypeService.updateEmployeeType(
            UpdateEmployeeTypeServiceData.UPDATE_EMPLOYEETYPE_TS001_TC002.input.databaseConnector,
            UpdateEmployeeTypeServiceData.UPDATE_EMPLOYEETYPE_TS001_TC002.input.apiID,
            UpdateEmployeeTypeServiceData.UPDATE_EMPLOYEETYPE_TS001_TC002.input.config,
            UpdateEmployeeTypeServiceData.UPDATE_EMPLOYEETYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateEmployeeTypeServiceData.UPDATE_EMPLOYEETYPE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateEmployeeTypeServiceData.UPDATE_EMPLOYEETYPE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateEmployeeTypeServiceData.UPDATE_EMPLOYEETYPE_TS001_TC002.output.message)        
	});

    test(UpdateEmployeeTypeServiceData.UPDATE_EMPLOYEETYPE_TS001_TC003.description, async () => {

        const output = await UpdateEmployeeTypeService.updateEmployeeType(
            UpdateEmployeeTypeServiceData.UPDATE_EMPLOYEETYPE_TS001_TC003.input.databaseConnector,
            UpdateEmployeeTypeServiceData.UPDATE_EMPLOYEETYPE_TS001_TC003.input.apiID,
            UpdateEmployeeTypeServiceData.UPDATE_EMPLOYEETYPE_TS001_TC003.input.config,
            UpdateEmployeeTypeServiceData.UPDATE_EMPLOYEETYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateEmployeeTypeServiceData.UPDATE_EMPLOYEETYPE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateEmployeeTypeServiceData.UPDATE_EMPLOYEETYPE_TS001_TC003.output.message)        
	});

});
