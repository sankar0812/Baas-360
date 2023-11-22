/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete project service class
**/

/**
 * Importing all required modules here
 */

const deleteProjectServiceData = require("../data/delete.project.service.data")
const deleteProjectService = require("../../../../src/services/project/delete.project.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteProjectService = new deleteProjectService();
const DeleteProjectServiceData = new deleteProjectServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.project.ts.001] | FunctionPath : [src/services/project/delete.project.service.js/deleteOneProject()]", () => {


	test(DeleteProjectServiceData.DELETE_ONE_PROJECT_TS001_TC001.description, async () => {

        const output = await DeleteProjectService.deleteOneProject(
            DeleteProjectServiceData.DELETE_ONE_PROJECT_TS001_TC001.input.databaseConnector,
            DeleteProjectServiceData.DELETE_ONE_PROJECT_TS001_TC001.input.apiID,
            DeleteProjectServiceData.DELETE_ONE_PROJECT_TS001_TC001.input.config,
            DeleteProjectServiceData.DELETE_ONE_PROJECT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteProjectServiceData.DELETE_ONE_PROJECT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteProjectServiceData.DELETE_ONE_PROJECT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteProjectServiceData.DELETE_ONE_PROJECT_TS001_TC001.output)[2])
	});



    test(DeleteProjectServiceData.DELETE_ONE_PROJECT_TS001_TC002.description, async () => {

        const output = await DeleteProjectService.deleteOneProject(
            DeleteProjectServiceData.DELETE_ONE_PROJECT_TS001_TC002.input.databaseConnector,
            DeleteProjectServiceData.DELETE_ONE_PROJECT_TS001_TC002.input.apiID,
            DeleteProjectServiceData.DELETE_ONE_PROJECT_TS001_TC002.input.config,
            DeleteProjectServiceData.DELETE_ONE_PROJECT_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteProjectServiceData.DELETE_ONE_PROJECT_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteProjectServiceData.DELETE_ONE_PROJECT_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteProjectServiceData.DELETE_ONE_PROJECT_TS001_TC002.output.message)        
	});



    test(DeleteProjectServiceData.DELETE_ONE_PROJECT_TS001_TC003.description, async () => {

        const output = await DeleteProjectService.deleteOneProject(
            DeleteProjectServiceData.DELETE_ONE_PROJECT_TS001_TC003.input.databaseConnector,
            DeleteProjectServiceData.DELETE_ONE_PROJECT_TS001_TC003.input.apiID,
            DeleteProjectServiceData.DELETE_ONE_PROJECT_TS001_TC003.input.config,
            DeleteProjectServiceData.DELETE_ONE_PROJECT_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteProjectServiceData.DELETE_ONE_PROJECT_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteProjectServiceData.DELETE_ONE_PROJECT_TS001_TC003.output.message)        
	});

});
