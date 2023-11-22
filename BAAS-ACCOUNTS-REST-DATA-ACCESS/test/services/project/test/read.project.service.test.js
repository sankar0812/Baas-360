/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Project service class
**/

/**
 * Importing all required modules here
 */

const readProjectServiceData = require("../data/read.project.service.data")
const readProjectService = require("../../../../src/services/project/read.project.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadProjectService = new readProjectService();
const ReadProjectServiceData = new readProjectServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.project.ts.001] | FunctionPath : [src/services/project/read.contianer.service.js/readProjects()]", () => {


	test(ReadProjectServiceData.READ_PROJECT_TS001_TC001.description, async () => {

        const output = await ReadProjectService.readProjects(
            ReadProjectServiceData.READ_PROJECT_TS001_TC001.input.databaseConnector,
            ReadProjectServiceData.READ_PROJECT_TS001_TC001.input.apiID,
            ReadProjectServiceData.READ_PROJECT_TS001_TC001.input.config,
            ReadProjectServiceData.READ_PROJECT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProjectServiceData.READ_PROJECT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProjectServiceData.READ_PROJECT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProjectServiceData.READ_PROJECT_TS001_TC001.output)[2])
	});



    test(ReadProjectServiceData.READ_PROJECT_TS001_TC002.description, async () => {

        const output = await ReadProjectService.readProjects(
            ReadProjectServiceData.READ_PROJECT_TS001_TC002.input.databaseConnector,
            ReadProjectServiceData.READ_PROJECT_TS001_TC002.input.apiID,
            ReadProjectServiceData.READ_PROJECT_TS001_TC002.input.config,
            ReadProjectServiceData.READ_PROJECT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadProjectServiceData.READ_PROJECT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadProjectServiceData.READ_PROJECT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadProjectServiceData.READ_PROJECT_TS001_TC002.output.message)        
	});



    test(ReadProjectServiceData.READ_PROJECT_TS001_TC003.description, async () => {

        const output = await ReadProjectService.readProjects(
            ReadProjectServiceData.READ_PROJECT_TS001_TC003.input.databaseConnector,
            ReadProjectServiceData.READ_PROJECT_TS001_TC003.input.apiID,
            ReadProjectServiceData.READ_PROJECT_TS001_TC003.input.config,
            ReadProjectServiceData.READ_PROJECT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadProjectServiceData.READ_PROJECT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadProjectServiceData.READ_PROJECT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.project.ts.002] | FunctionPath : [src/services/project/read.project.service.js/readOneProject()]", () => {


	test(ReadProjectServiceData.READ_ONE_PROJECT_TS002_TC001.description, async () => {

        const output = await ReadProjectService.readOneProject(
            ReadProjectServiceData.READ_ONE_PROJECT_TS002_TC001.input.databaseConnector,
            ReadProjectServiceData.READ_ONE_PROJECT_TS002_TC001.input.apiID,
            ReadProjectServiceData.READ_ONE_PROJECT_TS002_TC001.input.config,
            ReadProjectServiceData.READ_ONE_PROJECT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProjectServiceData.READ_ONE_PROJECT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProjectServiceData.READ_ONE_PROJECT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProjectServiceData.READ_ONE_PROJECT_TS002_TC001.output)[2])
	});



    test(ReadProjectServiceData.READ_ONE_PROJECT_TS002_TC002.description, async () => {

        const output = await ReadProjectService.readOneProject(
            ReadProjectServiceData.READ_ONE_PROJECT_TS002_TC002.input.databaseConnector,
            ReadProjectServiceData.READ_ONE_PROJECT_TS002_TC002.input.apiID,
            ReadProjectServiceData.READ_ONE_PROJECT_TS002_TC002.input.config,
            ReadProjectServiceData.READ_ONE_PROJECT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadProjectServiceData.READ_ONE_PROJECT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadProjectServiceData.READ_ONE_PROJECT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadProjectServiceData.READ_ONE_PROJECT_TS002_TC002.output.message)        
	});



    test(ReadProjectServiceData.READ_ONE_PROJECT_TS002_TC003.description, async () => {

        const output = await ReadProjectService.readOneProject(
            ReadProjectServiceData.READ_ONE_PROJECT_TS002_TC003.input.databaseConnector,
            ReadProjectServiceData.READ_ONE_PROJECT_TS002_TC003.input.apiID,
            ReadProjectServiceData.READ_ONE_PROJECT_TS002_TC003.input.config,
            ReadProjectServiceData.READ_ONE_PROJECT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadProjectServiceData.READ_ONE_PROJECT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadProjectServiceData.READ_ONE_PROJECT_TS002_TC003.output.message)        
	});

});