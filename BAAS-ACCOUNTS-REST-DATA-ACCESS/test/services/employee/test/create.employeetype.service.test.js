/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create employeetype service class
**/

/**
 * Importing all required modules here
 */

const createEmployeeTypeServiceData = require("../data/create.employeetype.service.data")
const createEmployeeTypeService = require("../../../../src/services/employee/create.employeetype.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateEmployeeTypeService = new createEmployeeTypeService();
const CreateEmployeeTypeServiceData = new createEmployeeTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.employeetype.ts.001] | FunctionPath : [src/services/employee/create.employeetype.service.js/createOneEmployeeType()]", () => {


	test(CreateEmployeeTypeServiceData.CREATE_ONE_EMPLOYEETYPE_TS001_TC001.description, async () => {

        const output = await CreateEmployeeTypeService.createOneEmployeeType(
            CreateEmployeeTypeServiceData.CREATE_ONE_EMPLOYEETYPE_TS001_TC001.input.databaseConnector,
            CreateEmployeeTypeServiceData.CREATE_ONE_EMPLOYEETYPE_TS001_TC001.input.apiID,
            CreateEmployeeTypeServiceData.CREATE_ONE_EMPLOYEETYPE_TS001_TC001.input.config,
            CreateEmployeeTypeServiceData.CREATE_ONE_EMPLOYEETYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateEmployeeTypeServiceData.CREATE_ONE_EMPLOYEETYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateEmployeeTypeServiceData.CREATE_ONE_EMPLOYEETYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateEmployeeTypeServiceData.CREATE_ONE_EMPLOYEETYPE_TS001_TC001.output)[2])
	});



    test(CreateEmployeeTypeServiceData.CREATE_ONE_EMPLOYEETYPE_TS001_TC002.description, async () => {

        const output = await CreateEmployeeTypeService.createOneEmployeeType(
            CreateEmployeeTypeServiceData.CREATE_ONE_EMPLOYEETYPE_TS001_TC002.input.databaseConnector,
            CreateEmployeeTypeServiceData.CREATE_ONE_EMPLOYEETYPE_TS001_TC002.input.apiID,
            CreateEmployeeTypeServiceData.CREATE_ONE_EMPLOYEETYPE_TS001_TC002.input.config,
            CreateEmployeeTypeServiceData.CREATE_ONE_EMPLOYEETYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateEmployeeTypeServiceData.CREATE_ONE_EMPLOYEETYPE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateEmployeeTypeServiceData.CREATE_ONE_EMPLOYEETYPE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateEmployeeTypeServiceData.CREATE_ONE_EMPLOYEETYPE_TS001_TC002.output.message)        
	});



    test(CreateEmployeeTypeServiceData.CREATE_ONE_EMPLOYEETYPE_TS001_TC003.description, async () => {

        const output = await CreateEmployeeTypeService.createOneEmployeeType(
            CreateEmployeeTypeServiceData.CREATE_ONE_EMPLOYEETYPE_TS001_TC003.input.databaseConnector,
            CreateEmployeeTypeServiceData.CREATE_ONE_EMPLOYEETYPE_TS001_TC003.input.apiID,
            CreateEmployeeTypeServiceData.CREATE_ONE_EMPLOYEETYPE_TS001_TC003.input.config,
            CreateEmployeeTypeServiceData.CREATE_ONE_EMPLOYEETYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateEmployeeTypeServiceData.CREATE_ONE_EMPLOYEETYPE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateEmployeeTypeServiceData.CREATE_ONE_EMPLOYEETYPE_TS001_TC003.output.message)        
	});

});