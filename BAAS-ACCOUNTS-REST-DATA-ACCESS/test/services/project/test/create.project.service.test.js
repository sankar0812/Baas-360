/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create project service class
**/

/**
 * Importing all required modules here
 */

const createProjectServiceData = require("../data/create.project.service.data")
const createProjectService = require("../../../../src/services/project/create.project.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateProjectService = new createProjectService();
const CreateProjectServiceData = new createProjectServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.project.ts.001] | FunctionPath : [src/services/project/create.project.service.js/createOneProject()]", () => {


	test(CreateProjectServiceData.CREATE_ONE_PROJECT_TS001_TC001.description, async () => {

        const output = await CreateProjectService.createOneProject(
            CreateProjectServiceData.CREATE_ONE_PROJECT_TS001_TC001.input.databaseConnector,
            CreateProjectServiceData.CREATE_ONE_PROJECT_TS001_TC001.input.apiID,
            CreateProjectServiceData.CREATE_ONE_PROJECT_TS001_TC001.input.config,
            CreateProjectServiceData.CREATE_ONE_PROJECT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateProjectServiceData.CREATE_ONE_PROJECT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateProjectServiceData.CREATE_ONE_PROJECT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateProjectServiceData.CREATE_ONE_PROJECT_TS001_TC001.output)[2])
	});



    test(CreateProjectServiceData.CREATE_ONE_PROJECT_TS001_TC002.description, async () => {

        const output = await CreateProjectService.createOneProject(
            CreateProjectServiceData.CREATE_ONE_PROJECT_TS001_TC002.input.databaseConnector,
            CreateProjectServiceData.CREATE_ONE_PROJECT_TS001_TC002.input.apiID,
            CreateProjectServiceData.CREATE_ONE_PROJECT_TS001_TC002.input.config,
            CreateProjectServiceData.CREATE_ONE_PROJECT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateProjectServiceData.CREATE_ONE_PROJECT_TS001_TC002.output.data)
        expect(output.status).toBe(CreateProjectServiceData.CREATE_ONE_PROJECT_TS001_TC002.output.status)
        expect(output.message).toBe(CreateProjectServiceData.CREATE_ONE_PROJECT_TS001_TC002.output.message)        
	});



    test(CreateProjectServiceData.CREATE_ONE_PROJECT_TS001_TC003.description, async () => {

        const output = await CreateProjectService.createOneProject(
            CreateProjectServiceData.CREATE_ONE_PROJECT_TS001_TC003.input.databaseConnector,
            CreateProjectServiceData.CREATE_ONE_PROJECT_TS001_TC003.input.apiID,
            CreateProjectServiceData.CREATE_ONE_PROJECT_TS001_TC003.input.config,
            CreateProjectServiceData.CREATE_ONE_PROJECT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateProjectServiceData.CREATE_ONE_PROJECT_TS001_TC003.output.status)
        expect(output.message).toBe(CreateProjectServiceData.CREATE_ONE_PROJECT_TS001_TC003.output.message)        
	});

});