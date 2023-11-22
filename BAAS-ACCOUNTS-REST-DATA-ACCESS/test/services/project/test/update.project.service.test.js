

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update project service class
**/

/**
 * Importing all required modules here
 */

const updateProjectServiceData = require("../data/update.project.service.data")
const updateProjectService = require("../../../../src/services/project/update.project.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateProjectService = new updateProjectService();
const UpdateProjectServiceData = new updateProjectServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.project.ts.001] | FunctionPath : [src/services/project/update.project.service.js/updateProject()]", () => {

	test(UpdateProjectServiceData.UPDATE_PROJECT_TS001_TC001.description, async () => {

        const output = await UpdateProjectService.updateProject(
            UpdateProjectServiceData.UPDATE_PROJECT_TS001_TC001.input.databaseConnector,
            UpdateProjectServiceData.UPDATE_PROJECT_TS001_TC001.input.apiID,
            UpdateProjectServiceData.UPDATE_PROJECT_TS001_TC001.input.config,
            UpdateProjectServiceData.UPDATE_PROJECT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateProjectServiceData.UPDATE_PROJECT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateProjectServiceData.UPDATE_PROJECT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateProjectServiceData.UPDATE_PROJECT_TS001_TC001.output)[2])
	});

    test(UpdateProjectServiceData.UPDATE_PROJECT_TS001_TC002.description, async () => {

        const output = await UpdateProjectService.updateProject(
            UpdateProjectServiceData.UPDATE_PROJECT_TS001_TC002.input.databaseConnector,
            UpdateProjectServiceData.UPDATE_PROJECT_TS001_TC002.input.apiID,
            UpdateProjectServiceData.UPDATE_PROJECT_TS001_TC002.input.config,
            UpdateProjectServiceData.UPDATE_PROJECT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateProjectServiceData.UPDATE_PROJECT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateProjectServiceData.UPDATE_PROJECT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateProjectServiceData.UPDATE_PROJECT_TS001_TC002.output.message)        
	});

    test(UpdateProjectServiceData.UPDATE_PROJECT_TS001_TC003.description, async () => {

        const output = await UpdateProjectService.updateProject(
            UpdateProjectServiceData.UPDATE_PROJECT_TS001_TC003.input.databaseConnector,
            UpdateProjectServiceData.UPDATE_PROJECT_TS001_TC003.input.apiID,
            UpdateProjectServiceData.UPDATE_PROJECT_TS001_TC003.input.config,
            UpdateProjectServiceData.UPDATE_PROJECT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateProjectServiceData.UPDATE_PROJECT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateProjectServiceData.UPDATE_PROJECT_TS001_TC003.output.message)        
	});

});
