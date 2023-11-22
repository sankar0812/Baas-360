

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update projecttype service class
**/

/**
 * Importing all required modules here
 */

const updateProjectTypeServiceData = require("../data/update.projecttype.service.data")
const updateProjectTypeService = require("../../../../src/services/project/update.projecttype.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateProjectTypeService = new updateProjectTypeService();
const UpdateProjectTypeServiceData = new updateProjectTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.projecttype.ts.001] | FunctionPath : [src/services/project/update.projecttype.service.js/updateProjectType()]", () => {

	test(UpdateProjectTypeServiceData.UPDATE_PROJECTTYPE_TS001_TC001.description, async () => {

        const output = await UpdateProjectTypeService.updateProjectType(
            UpdateProjectTypeServiceData.UPDATE_PROJECTTYPE_TS001_TC001.input.databaseConnector,
            UpdateProjectTypeServiceData.UPDATE_PROJECTTYPE_TS001_TC001.input.apiID,
            UpdateProjectTypeServiceData.UPDATE_PROJECTTYPE_TS001_TC001.input.config,
            UpdateProjectTypeServiceData.UPDATE_PROJECTTYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateProjectTypeServiceData.UPDATE_PROJECTTYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateProjectTypeServiceData.UPDATE_PROJECTTYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateProjectTypeServiceData.UPDATE_PROJECTTYPE_TS001_TC001.output)[2])
	});

    test(UpdateProjectTypeServiceData.UPDATE_PROJECTTYPE_TS001_TC002.description, async () => {

        const output = await UpdateProjectTypeService.updateProjectType(
            UpdateProjectTypeServiceData.UPDATE_PROJECTTYPE_TS001_TC002.input.databaseConnector,
            UpdateProjectTypeServiceData.UPDATE_PROJECTTYPE_TS001_TC002.input.apiID,
            UpdateProjectTypeServiceData.UPDATE_PROJECTTYPE_TS001_TC002.input.config,
            UpdateProjectTypeServiceData.UPDATE_PROJECTTYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateProjectTypeServiceData.UPDATE_PROJECTTYPE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateProjectTypeServiceData.UPDATE_PROJECTTYPE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateProjectTypeServiceData.UPDATE_PROJECTTYPE_TS001_TC002.output.message)        
	});

    test(UpdateProjectTypeServiceData.UPDATE_PROJECTTYPE_TS001_TC003.description, async () => {

        const output = await UpdateProjectTypeService.updateProjectType(
            UpdateProjectTypeServiceData.UPDATE_PROJECTTYPE_TS001_TC003.input.databaseConnector,
            UpdateProjectTypeServiceData.UPDATE_PROJECTTYPE_TS001_TC003.input.apiID,
            UpdateProjectTypeServiceData.UPDATE_PROJECTTYPE_TS001_TC003.input.config,
            UpdateProjectTypeServiceData.UPDATE_PROJECTTYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateProjectTypeServiceData.UPDATE_PROJECTTYPE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateProjectTypeServiceData.UPDATE_PROJECTTYPE_TS001_TC003.output.message)        
	});

});
