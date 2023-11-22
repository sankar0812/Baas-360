/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read GroupUser service class
**/

/**
 * Importing all required modules here
 */

const readGroupUserServiceData = require("../data/read.groupuser.service.data")
const readGroupUserService = require("../../../../src/services/group/read.groupuser.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadGroupUserService = new readGroupUserService();
const ReadGroupUserServiceData = new readGroupUserServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.groupuser.ts.001] | FunctionPath : [src/services/group/read.contianer.service.js/readGroupUsers()]", () => {


	test(ReadGroupUserServiceData.READ_GROUPUSER_TS001_TC001.description, async () => {

        const output = await ReadGroupUserService.readGroupUsers(
            ReadGroupUserServiceData.READ_GROUPUSER_TS001_TC001.input.databaseConnector,
            ReadGroupUserServiceData.READ_GROUPUSER_TS001_TC001.input.apiID,
            ReadGroupUserServiceData.READ_GROUPUSER_TS001_TC001.input.config,
            ReadGroupUserServiceData.READ_GROUPUSER_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadGroupUserServiceData.READ_GROUPUSER_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadGroupUserServiceData.READ_GROUPUSER_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadGroupUserServiceData.READ_GROUPUSER_TS001_TC001.output)[2])
	});



    test(ReadGroupUserServiceData.READ_GROUPUSER_TS001_TC002.description, async () => {

        const output = await ReadGroupUserService.readGroupUsers(
            ReadGroupUserServiceData.READ_GROUPUSER_TS001_TC002.input.databaseConnector,
            ReadGroupUserServiceData.READ_GROUPUSER_TS001_TC002.input.apiID,
            ReadGroupUserServiceData.READ_GROUPUSER_TS001_TC002.input.config,
            ReadGroupUserServiceData.READ_GROUPUSER_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadGroupUserServiceData.READ_GROUPUSER_TS001_TC002.output.data)
        expect(output.status).toBe(ReadGroupUserServiceData.READ_GROUPUSER_TS001_TC002.output.status)
        expect(output.message).toBe(ReadGroupUserServiceData.READ_GROUPUSER_TS001_TC002.output.message)        
	});



    test(ReadGroupUserServiceData.READ_GROUPUSER_TS001_TC003.description, async () => {

        const output = await ReadGroupUserService.readGroupUsers(
            ReadGroupUserServiceData.READ_GROUPUSER_TS001_TC003.input.databaseConnector,
            ReadGroupUserServiceData.READ_GROUPUSER_TS001_TC003.input.apiID,
            ReadGroupUserServiceData.READ_GROUPUSER_TS001_TC003.input.config,
            ReadGroupUserServiceData.READ_GROUPUSER_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadGroupUserServiceData.READ_GROUPUSER_TS001_TC003.output.status)
        expect(output.message).toBe(ReadGroupUserServiceData.READ_GROUPUSER_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.groupuser.ts.002] | FunctionPath : [src/services/group/read.groupuser.service.js/readOneGroupUser()]", () => {


	test(ReadGroupUserServiceData.READ_ONE_GROUPUSER_TS002_TC001.description, async () => {

        const output = await ReadGroupUserService.readOneGroupUser(
            ReadGroupUserServiceData.READ_ONE_GROUPUSER_TS002_TC001.input.databaseConnector,
            ReadGroupUserServiceData.READ_ONE_GROUPUSER_TS002_TC001.input.apiID,
            ReadGroupUserServiceData.READ_ONE_GROUPUSER_TS002_TC001.input.config,
            ReadGroupUserServiceData.READ_ONE_GROUPUSER_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadGroupUserServiceData.READ_ONE_GROUPUSER_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadGroupUserServiceData.READ_ONE_GROUPUSER_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadGroupUserServiceData.READ_ONE_GROUPUSER_TS002_TC001.output)[2])
	});



    test(ReadGroupUserServiceData.READ_ONE_GROUPUSER_TS002_TC002.description, async () => {

        const output = await ReadGroupUserService.readOneGroupUser(
            ReadGroupUserServiceData.READ_ONE_GROUPUSER_TS002_TC002.input.databaseConnector,
            ReadGroupUserServiceData.READ_ONE_GROUPUSER_TS002_TC002.input.apiID,
            ReadGroupUserServiceData.READ_ONE_GROUPUSER_TS002_TC002.input.config,
            ReadGroupUserServiceData.READ_ONE_GROUPUSER_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadGroupUserServiceData.READ_ONE_GROUPUSER_TS002_TC002.output.data)
        expect(output.status).toBe(ReadGroupUserServiceData.READ_ONE_GROUPUSER_TS002_TC002.output.status)
        expect(output.message).toBe(ReadGroupUserServiceData.READ_ONE_GROUPUSER_TS002_TC002.output.message)        
	});



    test(ReadGroupUserServiceData.READ_ONE_GROUPUSER_TS002_TC003.description, async () => {

        const output = await ReadGroupUserService.readOneGroupUser(
            ReadGroupUserServiceData.READ_ONE_GROUPUSER_TS002_TC003.input.databaseConnector,
            ReadGroupUserServiceData.READ_ONE_GROUPUSER_TS002_TC003.input.apiID,
            ReadGroupUserServiceData.READ_ONE_GROUPUSER_TS002_TC003.input.config,
            ReadGroupUserServiceData.READ_ONE_GROUPUSER_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadGroupUserServiceData.READ_ONE_GROUPUSER_TS002_TC003.output.status)
        expect(output.message).toBe(ReadGroupUserServiceData.READ_ONE_GROUPUSER_TS002_TC003.output.message)        
	});

});