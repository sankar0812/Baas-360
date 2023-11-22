/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete role service class
**/

/**
 * Importing all required modules here
 */

const deleteRoleServiceData = require("../data/delete.role.service.data")
const deleteRoleService = require("../../../../src/services/role/delete.role.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteRoleService = new deleteRoleService();
const DeleteRoleServiceData = new deleteRoleServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.role.ts.001] | FunctionPath : [src/services/role/delete.role.service.js/deleteOneRole()]", () => {


	test(DeleteRoleServiceData.DELETE_ONE_ROLE_TS001_TC001.description, async () => {

        const output = await DeleteRoleService.deleteOneRole(
            DeleteRoleServiceData.DELETE_ONE_ROLE_TS001_TC001.input.databaseConnector,
            DeleteRoleServiceData.DELETE_ONE_ROLE_TS001_TC001.input.apiID,
            DeleteRoleServiceData.DELETE_ONE_ROLE_TS001_TC001.input.config,
            DeleteRoleServiceData.DELETE_ONE_ROLE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteRoleServiceData.DELETE_ONE_ROLE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteRoleServiceData.DELETE_ONE_ROLE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteRoleServiceData.DELETE_ONE_ROLE_TS001_TC001.output)[2])
	});



    test(DeleteRoleServiceData.DELETE_ONE_ROLE_TS001_TC002.description, async () => {

        const output = await DeleteRoleService.deleteOneRole(
            DeleteRoleServiceData.DELETE_ONE_ROLE_TS001_TC002.input.databaseConnector,
            DeleteRoleServiceData.DELETE_ONE_ROLE_TS001_TC002.input.apiID,
            DeleteRoleServiceData.DELETE_ONE_ROLE_TS001_TC002.input.config,
            DeleteRoleServiceData.DELETE_ONE_ROLE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteRoleServiceData.DELETE_ONE_ROLE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteRoleServiceData.DELETE_ONE_ROLE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteRoleServiceData.DELETE_ONE_ROLE_TS001_TC002.output.message)        
	});



    test(DeleteRoleServiceData.DELETE_ONE_ROLE_TS001_TC003.description, async () => {

        const output = await DeleteRoleService.deleteOneRole(
            DeleteRoleServiceData.DELETE_ONE_ROLE_TS001_TC003.input.databaseConnector,
            DeleteRoleServiceData.DELETE_ONE_ROLE_TS001_TC003.input.apiID,
            DeleteRoleServiceData.DELETE_ONE_ROLE_TS001_TC003.input.config,
            DeleteRoleServiceData.DELETE_ONE_ROLE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteRoleServiceData.DELETE_ONE_ROLE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteRoleServiceData.DELETE_ONE_ROLE_TS001_TC003.output.message)        
	});

});
