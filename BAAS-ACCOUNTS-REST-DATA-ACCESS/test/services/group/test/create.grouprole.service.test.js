/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create grouprole service class
**/

/**
 * Importing all required modules here
 */

const createGroupRoleServiceData = require("../data/create.grouprole.service.data")
const createGroupRoleService = require("../../../../src/services/group/create.grouprole.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateGroupRoleService = new createGroupRoleService();
const CreateGroupRoleServiceData = new createGroupRoleServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.grouprole.ts.001] | FunctionPath : [src/services/group/create.grouprole.service.js/createOneGroupRole()]", () => {


	test(CreateGroupRoleServiceData.CREATE_ONE_GROUPROLE_TS001_TC001.description, async () => {

        const output = await CreateGroupRoleService.createOneGroupRole(
            CreateGroupRoleServiceData.CREATE_ONE_GROUPROLE_TS001_TC001.input.databaseConnector,
            CreateGroupRoleServiceData.CREATE_ONE_GROUPROLE_TS001_TC001.input.apiID,
            CreateGroupRoleServiceData.CREATE_ONE_GROUPROLE_TS001_TC001.input.config,
            CreateGroupRoleServiceData.CREATE_ONE_GROUPROLE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateGroupRoleServiceData.CREATE_ONE_GROUPROLE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateGroupRoleServiceData.CREATE_ONE_GROUPROLE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateGroupRoleServiceData.CREATE_ONE_GROUPROLE_TS001_TC001.output)[2])
	});



    test(CreateGroupRoleServiceData.CREATE_ONE_GROUPROLE_TS001_TC002.description, async () => {

        const output = await CreateGroupRoleService.createOneGroupRole(
            CreateGroupRoleServiceData.CREATE_ONE_GROUPROLE_TS001_TC002.input.databaseConnector,
            CreateGroupRoleServiceData.CREATE_ONE_GROUPROLE_TS001_TC002.input.apiID,
            CreateGroupRoleServiceData.CREATE_ONE_GROUPROLE_TS001_TC002.input.config,
            CreateGroupRoleServiceData.CREATE_ONE_GROUPROLE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateGroupRoleServiceData.CREATE_ONE_GROUPROLE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateGroupRoleServiceData.CREATE_ONE_GROUPROLE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateGroupRoleServiceData.CREATE_ONE_GROUPROLE_TS001_TC002.output.message)        
	});



    test(CreateGroupRoleServiceData.CREATE_ONE_GROUPROLE_TS001_TC003.description, async () => {

        const output = await CreateGroupRoleService.createOneGroupRole(
            CreateGroupRoleServiceData.CREATE_ONE_GROUPROLE_TS001_TC003.input.databaseConnector,
            CreateGroupRoleServiceData.CREATE_ONE_GROUPROLE_TS001_TC003.input.apiID,
            CreateGroupRoleServiceData.CREATE_ONE_GROUPROLE_TS001_TC003.input.config,
            CreateGroupRoleServiceData.CREATE_ONE_GROUPROLE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateGroupRoleServiceData.CREATE_ONE_GROUPROLE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateGroupRoleServiceData.CREATE_ONE_GROUPROLE_TS001_TC003.output.message)        
	});

});