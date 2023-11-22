/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete grouprole service class
**/

/**
 * Importing all required modules here
 */

const deleteGroupRoleServiceData = require("../data/delete.grouprole.service.data")
const deleteGroupRoleService = require("../../../../src/services/group/delete.grouprole.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteGroupRoleService = new deleteGroupRoleService();
const DeleteGroupRoleServiceData = new deleteGroupRoleServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.grouprole.ts.001] | FunctionPath : [src/services/group/delete.grouprole.service.js/deleteOneGroupRole()]", () => {


	test(DeleteGroupRoleServiceData.DELETE_ONE_GROUPROLE_TS001_TC001.description, async () => {

        const output = await DeleteGroupRoleService.deleteOneGroupRole(
            DeleteGroupRoleServiceData.DELETE_ONE_GROUPROLE_TS001_TC001.input.databaseConnector,
            DeleteGroupRoleServiceData.DELETE_ONE_GROUPROLE_TS001_TC001.input.apiID,
            DeleteGroupRoleServiceData.DELETE_ONE_GROUPROLE_TS001_TC001.input.config,
            DeleteGroupRoleServiceData.DELETE_ONE_GROUPROLE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteGroupRoleServiceData.DELETE_ONE_GROUPROLE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteGroupRoleServiceData.DELETE_ONE_GROUPROLE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteGroupRoleServiceData.DELETE_ONE_GROUPROLE_TS001_TC001.output)[2])
	});



    test(DeleteGroupRoleServiceData.DELETE_ONE_GROUPROLE_TS001_TC002.description, async () => {

        const output = await DeleteGroupRoleService.deleteOneGroupRole(
            DeleteGroupRoleServiceData.DELETE_ONE_GROUPROLE_TS001_TC002.input.databaseConnector,
            DeleteGroupRoleServiceData.DELETE_ONE_GROUPROLE_TS001_TC002.input.apiID,
            DeleteGroupRoleServiceData.DELETE_ONE_GROUPROLE_TS001_TC002.input.config,
            DeleteGroupRoleServiceData.DELETE_ONE_GROUPROLE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteGroupRoleServiceData.DELETE_ONE_GROUPROLE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteGroupRoleServiceData.DELETE_ONE_GROUPROLE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteGroupRoleServiceData.DELETE_ONE_GROUPROLE_TS001_TC002.output.message)        
	});



    test(DeleteGroupRoleServiceData.DELETE_ONE_GROUPROLE_TS001_TC003.description, async () => {

        const output = await DeleteGroupRoleService.deleteOneGroupRole(
            DeleteGroupRoleServiceData.DELETE_ONE_GROUPROLE_TS001_TC003.input.databaseConnector,
            DeleteGroupRoleServiceData.DELETE_ONE_GROUPROLE_TS001_TC003.input.apiID,
            DeleteGroupRoleServiceData.DELETE_ONE_GROUPROLE_TS001_TC003.input.config,
            DeleteGroupRoleServiceData.DELETE_ONE_GROUPROLE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteGroupRoleServiceData.DELETE_ONE_GROUPROLE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteGroupRoleServiceData.DELETE_ONE_GROUPROLE_TS001_TC003.output.message)        
	});

});
