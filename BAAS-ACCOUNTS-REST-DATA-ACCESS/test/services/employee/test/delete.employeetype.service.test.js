/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete employeetype service class
**/

/**
 * Importing all required modules here
 */

const deleteEmployeeTypeServiceData = require("../data/delete.employeetype.service.data")
const deleteEmployeeTypeService = require("../../../../src/services/employee/delete.employeetype.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteEmployeeTypeService = new deleteEmployeeTypeService();
const DeleteEmployeeTypeServiceData = new deleteEmployeeTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.employeetype.ts.001] | FunctionPath : [src/services/employee/delete.employeetype.service.js/deleteOneEmployeeType()]", () => {


	test(DeleteEmployeeTypeServiceData.DELETE_ONE_EMPLOYEETYPE_TS001_TC001.description, async () => {

        const output = await DeleteEmployeeTypeService.deleteOneEmployeeType(
            DeleteEmployeeTypeServiceData.DELETE_ONE_EMPLOYEETYPE_TS001_TC001.input.databaseConnector,
            DeleteEmployeeTypeServiceData.DELETE_ONE_EMPLOYEETYPE_TS001_TC001.input.apiID,
            DeleteEmployeeTypeServiceData.DELETE_ONE_EMPLOYEETYPE_TS001_TC001.input.config,
            DeleteEmployeeTypeServiceData.DELETE_ONE_EMPLOYEETYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteEmployeeTypeServiceData.DELETE_ONE_EMPLOYEETYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteEmployeeTypeServiceData.DELETE_ONE_EMPLOYEETYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteEmployeeTypeServiceData.DELETE_ONE_EMPLOYEETYPE_TS001_TC001.output)[2])
	});



    test(DeleteEmployeeTypeServiceData.DELETE_ONE_EMPLOYEETYPE_TS001_TC002.description, async () => {

        const output = await DeleteEmployeeTypeService.deleteOneEmployeeType(
            DeleteEmployeeTypeServiceData.DELETE_ONE_EMPLOYEETYPE_TS001_TC002.input.databaseConnector,
            DeleteEmployeeTypeServiceData.DELETE_ONE_EMPLOYEETYPE_TS001_TC002.input.apiID,
            DeleteEmployeeTypeServiceData.DELETE_ONE_EMPLOYEETYPE_TS001_TC002.input.config,
            DeleteEmployeeTypeServiceData.DELETE_ONE_EMPLOYEETYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteEmployeeTypeServiceData.DELETE_ONE_EMPLOYEETYPE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteEmployeeTypeServiceData.DELETE_ONE_EMPLOYEETYPE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteEmployeeTypeServiceData.DELETE_ONE_EMPLOYEETYPE_TS001_TC002.output.message)        
	});



    test(DeleteEmployeeTypeServiceData.DELETE_ONE_EMPLOYEETYPE_TS001_TC003.description, async () => {

        const output = await DeleteEmployeeTypeService.deleteOneEmployeeType(
            DeleteEmployeeTypeServiceData.DELETE_ONE_EMPLOYEETYPE_TS001_TC003.input.databaseConnector,
            DeleteEmployeeTypeServiceData.DELETE_ONE_EMPLOYEETYPE_TS001_TC003.input.apiID,
            DeleteEmployeeTypeServiceData.DELETE_ONE_EMPLOYEETYPE_TS001_TC003.input.config,
            DeleteEmployeeTypeServiceData.DELETE_ONE_EMPLOYEETYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteEmployeeTypeServiceData.DELETE_ONE_EMPLOYEETYPE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteEmployeeTypeServiceData.DELETE_ONE_EMPLOYEETYPE_TS001_TC003.output.message)        
	});

});
