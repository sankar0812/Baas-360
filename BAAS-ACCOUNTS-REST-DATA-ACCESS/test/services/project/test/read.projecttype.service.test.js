/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read ProjectType service class
**/

/**
 * Importing all required modules here
 */

const readProjectTypeServiceData = require("../data/read.projecttype.service.data")
const readProjectTypeService = require("../../../../src/services/project/read.projecttype.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadProjectTypeService = new readProjectTypeService();
const ReadProjectTypeServiceData = new readProjectTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.projecttype.ts.001] | FunctionPath : [src/services/project/read.contianer.service.js/readProjectTypes()]", () => {


	test(ReadProjectTypeServiceData.READ_PROJECTTYPE_TS001_TC001.description, async () => {

        const output = await ReadProjectTypeService.readProjectTypes(
            ReadProjectTypeServiceData.READ_PROJECTTYPE_TS001_TC001.input.databaseConnector,
            ReadProjectTypeServiceData.READ_PROJECTTYPE_TS001_TC001.input.apiID,
            ReadProjectTypeServiceData.READ_PROJECTTYPE_TS001_TC001.input.config,
            ReadProjectTypeServiceData.READ_PROJECTTYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProjectTypeServiceData.READ_PROJECTTYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProjectTypeServiceData.READ_PROJECTTYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProjectTypeServiceData.READ_PROJECTTYPE_TS001_TC001.output)[2])
	});



    test(ReadProjectTypeServiceData.READ_PROJECTTYPE_TS001_TC002.description, async () => {

        const output = await ReadProjectTypeService.readProjectTypes(
            ReadProjectTypeServiceData.READ_PROJECTTYPE_TS001_TC002.input.databaseConnector,
            ReadProjectTypeServiceData.READ_PROJECTTYPE_TS001_TC002.input.apiID,
            ReadProjectTypeServiceData.READ_PROJECTTYPE_TS001_TC002.input.config,
            ReadProjectTypeServiceData.READ_PROJECTTYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadProjectTypeServiceData.READ_PROJECTTYPE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadProjectTypeServiceData.READ_PROJECTTYPE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadProjectTypeServiceData.READ_PROJECTTYPE_TS001_TC002.output.message)        
	});



    test(ReadProjectTypeServiceData.READ_PROJECTTYPE_TS001_TC003.description, async () => {

        const output = await ReadProjectTypeService.readProjectTypes(
            ReadProjectTypeServiceData.READ_PROJECTTYPE_TS001_TC003.input.databaseConnector,
            ReadProjectTypeServiceData.READ_PROJECTTYPE_TS001_TC003.input.apiID,
            ReadProjectTypeServiceData.READ_PROJECTTYPE_TS001_TC003.input.config,
            ReadProjectTypeServiceData.READ_PROJECTTYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadProjectTypeServiceData.READ_PROJECTTYPE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadProjectTypeServiceData.READ_PROJECTTYPE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.projecttype.ts.002] | FunctionPath : [src/services/project/read.projecttype.service.js/readOneProjectType()]", () => {


	test(ReadProjectTypeServiceData.READ_ONE_PROJECTTYPE_TS002_TC001.description, async () => {

        const output = await ReadProjectTypeService.readOneProjectType(
            ReadProjectTypeServiceData.READ_ONE_PROJECTTYPE_TS002_TC001.input.databaseConnector,
            ReadProjectTypeServiceData.READ_ONE_PROJECTTYPE_TS002_TC001.input.apiID,
            ReadProjectTypeServiceData.READ_ONE_PROJECTTYPE_TS002_TC001.input.config,
            ReadProjectTypeServiceData.READ_ONE_PROJECTTYPE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadProjectTypeServiceData.READ_ONE_PROJECTTYPE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadProjectTypeServiceData.READ_ONE_PROJECTTYPE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadProjectTypeServiceData.READ_ONE_PROJECTTYPE_TS002_TC001.output)[2])
	});



    test(ReadProjectTypeServiceData.READ_ONE_PROJECTTYPE_TS002_TC002.description, async () => {

        const output = await ReadProjectTypeService.readOneProjectType(
            ReadProjectTypeServiceData.READ_ONE_PROJECTTYPE_TS002_TC002.input.databaseConnector,
            ReadProjectTypeServiceData.READ_ONE_PROJECTTYPE_TS002_TC002.input.apiID,
            ReadProjectTypeServiceData.READ_ONE_PROJECTTYPE_TS002_TC002.input.config,
            ReadProjectTypeServiceData.READ_ONE_PROJECTTYPE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadProjectTypeServiceData.READ_ONE_PROJECTTYPE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadProjectTypeServiceData.READ_ONE_PROJECTTYPE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadProjectTypeServiceData.READ_ONE_PROJECTTYPE_TS002_TC002.output.message)        
	});



    test(ReadProjectTypeServiceData.READ_ONE_PROJECTTYPE_TS002_TC003.description, async () => {

        const output = await ReadProjectTypeService.readOneProjectType(
            ReadProjectTypeServiceData.READ_ONE_PROJECTTYPE_TS002_TC003.input.databaseConnector,
            ReadProjectTypeServiceData.READ_ONE_PROJECTTYPE_TS002_TC003.input.apiID,
            ReadProjectTypeServiceData.READ_ONE_PROJECTTYPE_TS002_TC003.input.config,
            ReadProjectTypeServiceData.READ_ONE_PROJECTTYPE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadProjectTypeServiceData.READ_ONE_PROJECTTYPE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadProjectTypeServiceData.READ_ONE_PROJECTTYPE_TS002_TC003.output.message)        
	});

});