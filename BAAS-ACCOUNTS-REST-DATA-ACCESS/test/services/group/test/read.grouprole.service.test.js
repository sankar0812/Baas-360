/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read GroupRole service class
**/

/**
 * Importing all required modules here
 */

const readGroupRoleServiceData = require("../data/read.grouprole.service.data")
const readGroupRoleService = require("../../../../src/services/group/read.grouprole.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadGroupRoleService = new readGroupRoleService();
const ReadGroupRoleServiceData = new readGroupRoleServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.grouprole.ts.001] | FunctionPath : [src/services/group/read.contianer.service.js/readGroupRoles()]", () => {


	test(ReadGroupRoleServiceData.READ_GROUPROLE_TS001_TC001.description, async () => {

        const output = await ReadGroupRoleService.readGroupRoles(
            ReadGroupRoleServiceData.READ_GROUPROLE_TS001_TC001.input.databaseConnector,
            ReadGroupRoleServiceData.READ_GROUPROLE_TS001_TC001.input.apiID,
            ReadGroupRoleServiceData.READ_GROUPROLE_TS001_TC001.input.config,
            ReadGroupRoleServiceData.READ_GROUPROLE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadGroupRoleServiceData.READ_GROUPROLE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadGroupRoleServiceData.READ_GROUPROLE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadGroupRoleServiceData.READ_GROUPROLE_TS001_TC001.output)[2])
	});



    test(ReadGroupRoleServiceData.READ_GROUPROLE_TS001_TC002.description, async () => {

        const output = await ReadGroupRoleService.readGroupRoles(
            ReadGroupRoleServiceData.READ_GROUPROLE_TS001_TC002.input.databaseConnector,
            ReadGroupRoleServiceData.READ_GROUPROLE_TS001_TC002.input.apiID,
            ReadGroupRoleServiceData.READ_GROUPROLE_TS001_TC002.input.config,
            ReadGroupRoleServiceData.READ_GROUPROLE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadGroupRoleServiceData.READ_GROUPROLE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadGroupRoleServiceData.READ_GROUPROLE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadGroupRoleServiceData.READ_GROUPROLE_TS001_TC002.output.message)        
	});



    test(ReadGroupRoleServiceData.READ_GROUPROLE_TS001_TC003.description, async () => {

        const output = await ReadGroupRoleService.readGroupRoles(
            ReadGroupRoleServiceData.READ_GROUPROLE_TS001_TC003.input.databaseConnector,
            ReadGroupRoleServiceData.READ_GROUPROLE_TS001_TC003.input.apiID,
            ReadGroupRoleServiceData.READ_GROUPROLE_TS001_TC003.input.config,
            ReadGroupRoleServiceData.READ_GROUPROLE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadGroupRoleServiceData.READ_GROUPROLE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadGroupRoleServiceData.READ_GROUPROLE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.grouprole.ts.002] | FunctionPath : [src/services/group/read.grouprole.service.js/readOneGroupRole()]", () => {


	test(ReadGroupRoleServiceData.READ_ONE_GROUPROLE_TS002_TC001.description, async () => {

        const output = await ReadGroupRoleService.readOneGroupRole(
            ReadGroupRoleServiceData.READ_ONE_GROUPROLE_TS002_TC001.input.databaseConnector,
            ReadGroupRoleServiceData.READ_ONE_GROUPROLE_TS002_TC001.input.apiID,
            ReadGroupRoleServiceData.READ_ONE_GROUPROLE_TS002_TC001.input.config,
            ReadGroupRoleServiceData.READ_ONE_GROUPROLE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadGroupRoleServiceData.READ_ONE_GROUPROLE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadGroupRoleServiceData.READ_ONE_GROUPROLE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadGroupRoleServiceData.READ_ONE_GROUPROLE_TS002_TC001.output)[2])
	});



    test(ReadGroupRoleServiceData.READ_ONE_GROUPROLE_TS002_TC002.description, async () => {

        const output = await ReadGroupRoleService.readOneGroupRole(
            ReadGroupRoleServiceData.READ_ONE_GROUPROLE_TS002_TC002.input.databaseConnector,
            ReadGroupRoleServiceData.READ_ONE_GROUPROLE_TS002_TC002.input.apiID,
            ReadGroupRoleServiceData.READ_ONE_GROUPROLE_TS002_TC002.input.config,
            ReadGroupRoleServiceData.READ_ONE_GROUPROLE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadGroupRoleServiceData.READ_ONE_GROUPROLE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadGroupRoleServiceData.READ_ONE_GROUPROLE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadGroupRoleServiceData.READ_ONE_GROUPROLE_TS002_TC002.output.message)        
	});



    test(ReadGroupRoleServiceData.READ_ONE_GROUPROLE_TS002_TC003.description, async () => {

        const output = await ReadGroupRoleService.readOneGroupRole(
            ReadGroupRoleServiceData.READ_ONE_GROUPROLE_TS002_TC003.input.databaseConnector,
            ReadGroupRoleServiceData.READ_ONE_GROUPROLE_TS002_TC003.input.apiID,
            ReadGroupRoleServiceData.READ_ONE_GROUPROLE_TS002_TC003.input.config,
            ReadGroupRoleServiceData.READ_ONE_GROUPROLE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadGroupRoleServiceData.READ_ONE_GROUPROLE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadGroupRoleServiceData.READ_ONE_GROUPROLE_TS002_TC003.output.message)        
	});

});