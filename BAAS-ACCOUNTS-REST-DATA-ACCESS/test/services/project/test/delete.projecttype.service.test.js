/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete projecttype service class
**/

/**
 * Importing all required modules here
 */

const deleteProjectTypeServiceData = require("../data/delete.projecttype.service.data")
const deleteProjectTypeService = require("../../../../src/services/project/delete.projecttype.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteProjectTypeService = new deleteProjectTypeService();
const DeleteProjectTypeServiceData = new deleteProjectTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.projecttype.ts.001] | FunctionPath : [src/services/project/delete.projecttype.service.js/deleteOneProjectType()]", () => {


	test(DeleteProjectTypeServiceData.DELETE_ONE_PROJECTTYPE_TS001_TC001.description, async () => {

        const output = await DeleteProjectTypeService.deleteOneProjectType(
            DeleteProjectTypeServiceData.DELETE_ONE_PROJECTTYPE_TS001_TC001.input.databaseConnector,
            DeleteProjectTypeServiceData.DELETE_ONE_PROJECTTYPE_TS001_TC001.input.apiID,
            DeleteProjectTypeServiceData.DELETE_ONE_PROJECTTYPE_TS001_TC001.input.config,
            DeleteProjectTypeServiceData.DELETE_ONE_PROJECTTYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteProjectTypeServiceData.DELETE_ONE_PROJECTTYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteProjectTypeServiceData.DELETE_ONE_PROJECTTYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteProjectTypeServiceData.DELETE_ONE_PROJECTTYPE_TS001_TC001.output)[2])
	});



    test(DeleteProjectTypeServiceData.DELETE_ONE_PROJECTTYPE_TS001_TC002.description, async () => {

        const output = await DeleteProjectTypeService.deleteOneProjectType(
            DeleteProjectTypeServiceData.DELETE_ONE_PROJECTTYPE_TS001_TC002.input.databaseConnector,
            DeleteProjectTypeServiceData.DELETE_ONE_PROJECTTYPE_TS001_TC002.input.apiID,
            DeleteProjectTypeServiceData.DELETE_ONE_PROJECTTYPE_TS001_TC002.input.config,
            DeleteProjectTypeServiceData.DELETE_ONE_PROJECTTYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteProjectTypeServiceData.DELETE_ONE_PROJECTTYPE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteProjectTypeServiceData.DELETE_ONE_PROJECTTYPE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteProjectTypeServiceData.DELETE_ONE_PROJECTTYPE_TS001_TC002.output.message)        
	});



    test(DeleteProjectTypeServiceData.DELETE_ONE_PROJECTTYPE_TS001_TC003.description, async () => {

        const output = await DeleteProjectTypeService.deleteOneProjectType(
            DeleteProjectTypeServiceData.DELETE_ONE_PROJECTTYPE_TS001_TC003.input.databaseConnector,
            DeleteProjectTypeServiceData.DELETE_ONE_PROJECTTYPE_TS001_TC003.input.apiID,
            DeleteProjectTypeServiceData.DELETE_ONE_PROJECTTYPE_TS001_TC003.input.config,
            DeleteProjectTypeServiceData.DELETE_ONE_PROJECTTYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteProjectTypeServiceData.DELETE_ONE_PROJECTTYPE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteProjectTypeServiceData.DELETE_ONE_PROJECTTYPE_TS001_TC003.output.message)        
	});

});
