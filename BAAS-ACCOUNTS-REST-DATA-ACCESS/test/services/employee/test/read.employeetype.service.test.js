/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read EmployeeType service class
**/

/**
 * Importing all required modules here
 */

const readEmployeeTypeServiceData = require("../data/read.employeetype.service.data")
const readEmployeeTypeService = require("../../../../src/services/employee/read.employeetype.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadEmployeeTypeService = new readEmployeeTypeService();
const ReadEmployeeTypeServiceData = new readEmployeeTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.employeetype.ts.001] | FunctionPath : [src/services/employee/read.contianer.service.js/readEmployeeTypes()]", () => {


	test(ReadEmployeeTypeServiceData.READ_EMPLOYEETYPE_TS001_TC001.description, async () => {

        const output = await ReadEmployeeTypeService.readEmployeeTypes(
            ReadEmployeeTypeServiceData.READ_EMPLOYEETYPE_TS001_TC001.input.databaseConnector,
            ReadEmployeeTypeServiceData.READ_EMPLOYEETYPE_TS001_TC001.input.apiID,
            ReadEmployeeTypeServiceData.READ_EMPLOYEETYPE_TS001_TC001.input.config,
            ReadEmployeeTypeServiceData.READ_EMPLOYEETYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadEmployeeTypeServiceData.READ_EMPLOYEETYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadEmployeeTypeServiceData.READ_EMPLOYEETYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadEmployeeTypeServiceData.READ_EMPLOYEETYPE_TS001_TC001.output)[2])
	});



    test(ReadEmployeeTypeServiceData.READ_EMPLOYEETYPE_TS001_TC002.description, async () => {

        const output = await ReadEmployeeTypeService.readEmployeeTypes(
            ReadEmployeeTypeServiceData.READ_EMPLOYEETYPE_TS001_TC002.input.databaseConnector,
            ReadEmployeeTypeServiceData.READ_EMPLOYEETYPE_TS001_TC002.input.apiID,
            ReadEmployeeTypeServiceData.READ_EMPLOYEETYPE_TS001_TC002.input.config,
            ReadEmployeeTypeServiceData.READ_EMPLOYEETYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadEmployeeTypeServiceData.READ_EMPLOYEETYPE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadEmployeeTypeServiceData.READ_EMPLOYEETYPE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadEmployeeTypeServiceData.READ_EMPLOYEETYPE_TS001_TC002.output.message)        
	});



    test(ReadEmployeeTypeServiceData.READ_EMPLOYEETYPE_TS001_TC003.description, async () => {

        const output = await ReadEmployeeTypeService.readEmployeeTypes(
            ReadEmployeeTypeServiceData.READ_EMPLOYEETYPE_TS001_TC003.input.databaseConnector,
            ReadEmployeeTypeServiceData.READ_EMPLOYEETYPE_TS001_TC003.input.apiID,
            ReadEmployeeTypeServiceData.READ_EMPLOYEETYPE_TS001_TC003.input.config,
            ReadEmployeeTypeServiceData.READ_EMPLOYEETYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadEmployeeTypeServiceData.READ_EMPLOYEETYPE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadEmployeeTypeServiceData.READ_EMPLOYEETYPE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.employeetype.ts.002] | FunctionPath : [src/services/employee/read.employeetype.service.js/readOneEmployeeType()]", () => {


	test(ReadEmployeeTypeServiceData.READ_ONE_EMPLOYEETYPE_TS002_TC001.description, async () => {

        const output = await ReadEmployeeTypeService.readOneEmployeeType(
            ReadEmployeeTypeServiceData.READ_ONE_EMPLOYEETYPE_TS002_TC001.input.databaseConnector,
            ReadEmployeeTypeServiceData.READ_ONE_EMPLOYEETYPE_TS002_TC001.input.apiID,
            ReadEmployeeTypeServiceData.READ_ONE_EMPLOYEETYPE_TS002_TC001.input.config,
            ReadEmployeeTypeServiceData.READ_ONE_EMPLOYEETYPE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadEmployeeTypeServiceData.READ_ONE_EMPLOYEETYPE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadEmployeeTypeServiceData.READ_ONE_EMPLOYEETYPE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadEmployeeTypeServiceData.READ_ONE_EMPLOYEETYPE_TS002_TC001.output)[2])
	});



    test(ReadEmployeeTypeServiceData.READ_ONE_EMPLOYEETYPE_TS002_TC002.description, async () => {

        const output = await ReadEmployeeTypeService.readOneEmployeeType(
            ReadEmployeeTypeServiceData.READ_ONE_EMPLOYEETYPE_TS002_TC002.input.databaseConnector,
            ReadEmployeeTypeServiceData.READ_ONE_EMPLOYEETYPE_TS002_TC002.input.apiID,
            ReadEmployeeTypeServiceData.READ_ONE_EMPLOYEETYPE_TS002_TC002.input.config,
            ReadEmployeeTypeServiceData.READ_ONE_EMPLOYEETYPE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadEmployeeTypeServiceData.READ_ONE_EMPLOYEETYPE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadEmployeeTypeServiceData.READ_ONE_EMPLOYEETYPE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadEmployeeTypeServiceData.READ_ONE_EMPLOYEETYPE_TS002_TC002.output.message)        
	});



    test(ReadEmployeeTypeServiceData.READ_ONE_EMPLOYEETYPE_TS002_TC003.description, async () => {

        const output = await ReadEmployeeTypeService.readOneEmployeeType(
            ReadEmployeeTypeServiceData.READ_ONE_EMPLOYEETYPE_TS002_TC003.input.databaseConnector,
            ReadEmployeeTypeServiceData.READ_ONE_EMPLOYEETYPE_TS002_TC003.input.apiID,
            ReadEmployeeTypeServiceData.READ_ONE_EMPLOYEETYPE_TS002_TC003.input.config,
            ReadEmployeeTypeServiceData.READ_ONE_EMPLOYEETYPE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadEmployeeTypeServiceData.READ_ONE_EMPLOYEETYPE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadEmployeeTypeServiceData.READ_ONE_EMPLOYEETYPE_TS002_TC003.output.message)        
	});

});