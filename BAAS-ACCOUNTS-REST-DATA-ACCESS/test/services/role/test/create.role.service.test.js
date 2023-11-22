/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create role service class
**/

/**
 * Importing all required modules here
 */

const createRoleServiceData = require("../data/create.role.service.data")
const createRoleService = require("../../../../src/services/role/create.role.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateRoleService = new createRoleService();
const CreateRoleServiceData = new createRoleServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.role.ts.001] | FunctionPath : [src/services/role/create.role.service.js/createOneRole()]", () => {


	test(CreateRoleServiceData.CREATE_ONE_ROLE_TS001_TC001.description, async () => {

        const output = await CreateRoleService.createOneRole(
            CreateRoleServiceData.CREATE_ONE_ROLE_TS001_TC001.input.databaseConnector,
            CreateRoleServiceData.CREATE_ONE_ROLE_TS001_TC001.input.apiID,
            CreateRoleServiceData.CREATE_ONE_ROLE_TS001_TC001.input.config,
            CreateRoleServiceData.CREATE_ONE_ROLE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateRoleServiceData.CREATE_ONE_ROLE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateRoleServiceData.CREATE_ONE_ROLE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateRoleServiceData.CREATE_ONE_ROLE_TS001_TC001.output)[2])
	});



    test(CreateRoleServiceData.CREATE_ONE_ROLE_TS001_TC002.description, async () => {

        const output = await CreateRoleService.createOneRole(
            CreateRoleServiceData.CREATE_ONE_ROLE_TS001_TC002.input.databaseConnector,
            CreateRoleServiceData.CREATE_ONE_ROLE_TS001_TC002.input.apiID,
            CreateRoleServiceData.CREATE_ONE_ROLE_TS001_TC002.input.config,
            CreateRoleServiceData.CREATE_ONE_ROLE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateRoleServiceData.CREATE_ONE_ROLE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateRoleServiceData.CREATE_ONE_ROLE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateRoleServiceData.CREATE_ONE_ROLE_TS001_TC002.output.message)        
	});



    test(CreateRoleServiceData.CREATE_ONE_ROLE_TS001_TC003.description, async () => {

        const output = await CreateRoleService.createOneRole(
            CreateRoleServiceData.CREATE_ONE_ROLE_TS001_TC003.input.databaseConnector,
            CreateRoleServiceData.CREATE_ONE_ROLE_TS001_TC003.input.apiID,
            CreateRoleServiceData.CREATE_ONE_ROLE_TS001_TC003.input.config,
            CreateRoleServiceData.CREATE_ONE_ROLE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateRoleServiceData.CREATE_ONE_ROLE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateRoleServiceData.CREATE_ONE_ROLE_TS001_TC003.output.message)        
	});

});