/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Role service class
**/

/**
 * Importing all required modules here
 */

const readRoleServiceData = require("../data/read.role.service.data")
const readRoleService = require("../../../../src/services/role/read.role.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadRoleService = new readRoleService();
const ReadRoleServiceData = new readRoleServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.role.ts.001] | FunctionPath : [src/services/role/read.contianer.service.js/readRoles()]", () => {


	test(ReadRoleServiceData.READ_ROLE_TS001_TC001.description, async () => {

        const output = await ReadRoleService.readRoles(
            ReadRoleServiceData.READ_ROLE_TS001_TC001.input.databaseConnector,
            ReadRoleServiceData.READ_ROLE_TS001_TC001.input.apiID,
            ReadRoleServiceData.READ_ROLE_TS001_TC001.input.config,
            ReadRoleServiceData.READ_ROLE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadRoleServiceData.READ_ROLE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadRoleServiceData.READ_ROLE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadRoleServiceData.READ_ROLE_TS001_TC001.output)[2])
	});



    test(ReadRoleServiceData.READ_ROLE_TS001_TC002.description, async () => {

        const output = await ReadRoleService.readRoles(
            ReadRoleServiceData.READ_ROLE_TS001_TC002.input.databaseConnector,
            ReadRoleServiceData.READ_ROLE_TS001_TC002.input.apiID,
            ReadRoleServiceData.READ_ROLE_TS001_TC002.input.config,
            ReadRoleServiceData.READ_ROLE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadRoleServiceData.READ_ROLE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadRoleServiceData.READ_ROLE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadRoleServiceData.READ_ROLE_TS001_TC002.output.message)        
	});



    test(ReadRoleServiceData.READ_ROLE_TS001_TC003.description, async () => {

        const output = await ReadRoleService.readRoles(
            ReadRoleServiceData.READ_ROLE_TS001_TC003.input.databaseConnector,
            ReadRoleServiceData.READ_ROLE_TS001_TC003.input.apiID,
            ReadRoleServiceData.READ_ROLE_TS001_TC003.input.config,
            ReadRoleServiceData.READ_ROLE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadRoleServiceData.READ_ROLE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadRoleServiceData.READ_ROLE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.role.ts.002] | FunctionPath : [src/services/role/read.role.service.js/readOneRole()]", () => {


	test(ReadRoleServiceData.READ_ONE_ROLE_TS002_TC001.description, async () => {

        const output = await ReadRoleService.readOneRole(
            ReadRoleServiceData.READ_ONE_ROLE_TS002_TC001.input.databaseConnector,
            ReadRoleServiceData.READ_ONE_ROLE_TS002_TC001.input.apiID,
            ReadRoleServiceData.READ_ONE_ROLE_TS002_TC001.input.config,
            ReadRoleServiceData.READ_ONE_ROLE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadRoleServiceData.READ_ONE_ROLE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadRoleServiceData.READ_ONE_ROLE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadRoleServiceData.READ_ONE_ROLE_TS002_TC001.output)[2])
	});



    test(ReadRoleServiceData.READ_ONE_ROLE_TS002_TC002.description, async () => {

        const output = await ReadRoleService.readOneRole(
            ReadRoleServiceData.READ_ONE_ROLE_TS002_TC002.input.databaseConnector,
            ReadRoleServiceData.READ_ONE_ROLE_TS002_TC002.input.apiID,
            ReadRoleServiceData.READ_ONE_ROLE_TS002_TC002.input.config,
            ReadRoleServiceData.READ_ONE_ROLE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadRoleServiceData.READ_ONE_ROLE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadRoleServiceData.READ_ONE_ROLE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadRoleServiceData.READ_ONE_ROLE_TS002_TC002.output.message)        
	});



    test(ReadRoleServiceData.READ_ONE_ROLE_TS002_TC003.description, async () => {

        const output = await ReadRoleService.readOneRole(
            ReadRoleServiceData.READ_ONE_ROLE_TS002_TC003.input.databaseConnector,
            ReadRoleServiceData.READ_ONE_ROLE_TS002_TC003.input.apiID,
            ReadRoleServiceData.READ_ONE_ROLE_TS002_TC003.input.config,
            ReadRoleServiceData.READ_ONE_ROLE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadRoleServiceData.READ_ONE_ROLE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadRoleServiceData.READ_ONE_ROLE_TS002_TC003.output.message)        
	});

});