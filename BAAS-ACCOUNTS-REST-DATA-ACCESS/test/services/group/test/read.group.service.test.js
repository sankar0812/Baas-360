/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Group service class
**/

/**
 * Importing all required modules here
 */

const readGroupServiceData = require("../data/read.group.service.data")
const readGroupService = require("../../../../src/services/group/read.group.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadGroupService = new readGroupService();
const ReadGroupServiceData = new readGroupServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.group.ts.001] | FunctionPath : [src/services/group/read.contianer.service.js/readGroups()]", () => {


	test(ReadGroupServiceData.READ_GROUP_TS001_TC001.description, async () => {

        const output = await ReadGroupService.readGroups(
            ReadGroupServiceData.READ_GROUP_TS001_TC001.input.databaseConnector,
            ReadGroupServiceData.READ_GROUP_TS001_TC001.input.apiID,
            ReadGroupServiceData.READ_GROUP_TS001_TC001.input.config,
            ReadGroupServiceData.READ_GROUP_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadGroupServiceData.READ_GROUP_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadGroupServiceData.READ_GROUP_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadGroupServiceData.READ_GROUP_TS001_TC001.output)[2])
	});



    test(ReadGroupServiceData.READ_GROUP_TS001_TC002.description, async () => {

        const output = await ReadGroupService.readGroups(
            ReadGroupServiceData.READ_GROUP_TS001_TC002.input.databaseConnector,
            ReadGroupServiceData.READ_GROUP_TS001_TC002.input.apiID,
            ReadGroupServiceData.READ_GROUP_TS001_TC002.input.config,
            ReadGroupServiceData.READ_GROUP_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadGroupServiceData.READ_GROUP_TS001_TC002.output.data)
        expect(output.status).toBe(ReadGroupServiceData.READ_GROUP_TS001_TC002.output.status)
        expect(output.message).toBe(ReadGroupServiceData.READ_GROUP_TS001_TC002.output.message)        
	});



    test(ReadGroupServiceData.READ_GROUP_TS001_TC003.description, async () => {

        const output = await ReadGroupService.readGroups(
            ReadGroupServiceData.READ_GROUP_TS001_TC003.input.databaseConnector,
            ReadGroupServiceData.READ_GROUP_TS001_TC003.input.apiID,
            ReadGroupServiceData.READ_GROUP_TS001_TC003.input.config,
            ReadGroupServiceData.READ_GROUP_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadGroupServiceData.READ_GROUP_TS001_TC003.output.status)
        expect(output.message).toBe(ReadGroupServiceData.READ_GROUP_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.group.ts.002] | FunctionPath : [src/services/group/read.group.service.js/readOneGroup()]", () => {


	test(ReadGroupServiceData.READ_ONE_GROUP_TS002_TC001.description, async () => {

        const output = await ReadGroupService.readOneGroup(
            ReadGroupServiceData.READ_ONE_GROUP_TS002_TC001.input.databaseConnector,
            ReadGroupServiceData.READ_ONE_GROUP_TS002_TC001.input.apiID,
            ReadGroupServiceData.READ_ONE_GROUP_TS002_TC001.input.config,
            ReadGroupServiceData.READ_ONE_GROUP_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadGroupServiceData.READ_ONE_GROUP_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadGroupServiceData.READ_ONE_GROUP_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadGroupServiceData.READ_ONE_GROUP_TS002_TC001.output)[2])
	});



    test(ReadGroupServiceData.READ_ONE_GROUP_TS002_TC002.description, async () => {

        const output = await ReadGroupService.readOneGroup(
            ReadGroupServiceData.READ_ONE_GROUP_TS002_TC002.input.databaseConnector,
            ReadGroupServiceData.READ_ONE_GROUP_TS002_TC002.input.apiID,
            ReadGroupServiceData.READ_ONE_GROUP_TS002_TC002.input.config,
            ReadGroupServiceData.READ_ONE_GROUP_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadGroupServiceData.READ_ONE_GROUP_TS002_TC002.output.data)
        expect(output.status).toBe(ReadGroupServiceData.READ_ONE_GROUP_TS002_TC002.output.status)
        expect(output.message).toBe(ReadGroupServiceData.READ_ONE_GROUP_TS002_TC002.output.message)        
	});



    test(ReadGroupServiceData.READ_ONE_GROUP_TS002_TC003.description, async () => {

        const output = await ReadGroupService.readOneGroup(
            ReadGroupServiceData.READ_ONE_GROUP_TS002_TC003.input.databaseConnector,
            ReadGroupServiceData.READ_ONE_GROUP_TS002_TC003.input.apiID,
            ReadGroupServiceData.READ_ONE_GROUP_TS002_TC003.input.config,
            ReadGroupServiceData.READ_ONE_GROUP_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadGroupServiceData.READ_ONE_GROUP_TS002_TC003.output.status)
        expect(output.message).toBe(ReadGroupServiceData.READ_ONE_GROUP_TS002_TC003.output.message)        
	});

});