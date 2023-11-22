/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create projecttype service class
**/

/**
 * Importing all required modules here
 */

const createProjectTypeServiceData = require("../data/create.projecttype.service.data")
const createProjectTypeService = require("../../../../src/services/project/create.projecttype.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateProjectTypeService = new createProjectTypeService();
const CreateProjectTypeServiceData = new createProjectTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.projecttype.ts.001] | FunctionPath : [src/services/project/create.projecttype.service.js/createOneProjectType()]", () => {


	test(CreateProjectTypeServiceData.CREATE_ONE_PROJECTTYPE_TS001_TC001.description, async () => {

        const output = await CreateProjectTypeService.createOneProjectType(
            CreateProjectTypeServiceData.CREATE_ONE_PROJECTTYPE_TS001_TC001.input.databaseConnector,
            CreateProjectTypeServiceData.CREATE_ONE_PROJECTTYPE_TS001_TC001.input.apiID,
            CreateProjectTypeServiceData.CREATE_ONE_PROJECTTYPE_TS001_TC001.input.config,
            CreateProjectTypeServiceData.CREATE_ONE_PROJECTTYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateProjectTypeServiceData.CREATE_ONE_PROJECTTYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateProjectTypeServiceData.CREATE_ONE_PROJECTTYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateProjectTypeServiceData.CREATE_ONE_PROJECTTYPE_TS001_TC001.output)[2])
	});



    test(CreateProjectTypeServiceData.CREATE_ONE_PROJECTTYPE_TS001_TC002.description, async () => {

        const output = await CreateProjectTypeService.createOneProjectType(
            CreateProjectTypeServiceData.CREATE_ONE_PROJECTTYPE_TS001_TC002.input.databaseConnector,
            CreateProjectTypeServiceData.CREATE_ONE_PROJECTTYPE_TS001_TC002.input.apiID,
            CreateProjectTypeServiceData.CREATE_ONE_PROJECTTYPE_TS001_TC002.input.config,
            CreateProjectTypeServiceData.CREATE_ONE_PROJECTTYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateProjectTypeServiceData.CREATE_ONE_PROJECTTYPE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateProjectTypeServiceData.CREATE_ONE_PROJECTTYPE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateProjectTypeServiceData.CREATE_ONE_PROJECTTYPE_TS001_TC002.output.message)        
	});



    test(CreateProjectTypeServiceData.CREATE_ONE_PROJECTTYPE_TS001_TC003.description, async () => {

        const output = await CreateProjectTypeService.createOneProjectType(
            CreateProjectTypeServiceData.CREATE_ONE_PROJECTTYPE_TS001_TC003.input.databaseConnector,
            CreateProjectTypeServiceData.CREATE_ONE_PROJECTTYPE_TS001_TC003.input.apiID,
            CreateProjectTypeServiceData.CREATE_ONE_PROJECTTYPE_TS001_TC003.input.config,
            CreateProjectTypeServiceData.CREATE_ONE_PROJECTTYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateProjectTypeServiceData.CREATE_ONE_PROJECTTYPE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateProjectTypeServiceData.CREATE_ONE_PROJECTTYPE_TS001_TC003.output.message)        
	});

});