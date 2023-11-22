

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update grouprole service class
**/

/**
 * Importing all required modules here
 */

const updateGroupRoleServiceData = require("../data/update.grouprole.service.data")
const updateGroupRoleService = require("../../../../src/services/group/update.grouprole.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateGroupRoleService = new updateGroupRoleService();
const UpdateGroupRoleServiceData = new updateGroupRoleServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.grouprole.ts.001] | FunctionPath : [src/services/group/update.grouprole.service.js/updateGroupRole()]", () => {

	test(UpdateGroupRoleServiceData.UPDATE_GROUPROLE_TS001_TC001.description, async () => {

        const output = await UpdateGroupRoleService.updateGroupRole(
            UpdateGroupRoleServiceData.UPDATE_GROUPROLE_TS001_TC001.input.databaseConnector,
            UpdateGroupRoleServiceData.UPDATE_GROUPROLE_TS001_TC001.input.apiID,
            UpdateGroupRoleServiceData.UPDATE_GROUPROLE_TS001_TC001.input.config,
            UpdateGroupRoleServiceData.UPDATE_GROUPROLE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateGroupRoleServiceData.UPDATE_GROUPROLE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateGroupRoleServiceData.UPDATE_GROUPROLE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateGroupRoleServiceData.UPDATE_GROUPROLE_TS001_TC001.output)[2])
	});

    test(UpdateGroupRoleServiceData.UPDATE_GROUPROLE_TS001_TC002.description, async () => {

        const output = await UpdateGroupRoleService.updateGroupRole(
            UpdateGroupRoleServiceData.UPDATE_GROUPROLE_TS001_TC002.input.databaseConnector,
            UpdateGroupRoleServiceData.UPDATE_GROUPROLE_TS001_TC002.input.apiID,
            UpdateGroupRoleServiceData.UPDATE_GROUPROLE_TS001_TC002.input.config,
            UpdateGroupRoleServiceData.UPDATE_GROUPROLE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateGroupRoleServiceData.UPDATE_GROUPROLE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateGroupRoleServiceData.UPDATE_GROUPROLE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateGroupRoleServiceData.UPDATE_GROUPROLE_TS001_TC002.output.message)        
	});

    test(UpdateGroupRoleServiceData.UPDATE_GROUPROLE_TS001_TC003.description, async () => {

        const output = await UpdateGroupRoleService.updateGroupRole(
            UpdateGroupRoleServiceData.UPDATE_GROUPROLE_TS001_TC003.input.databaseConnector,
            UpdateGroupRoleServiceData.UPDATE_GROUPROLE_TS001_TC003.input.apiID,
            UpdateGroupRoleServiceData.UPDATE_GROUPROLE_TS001_TC003.input.config,
            UpdateGroupRoleServiceData.UPDATE_GROUPROLE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateGroupRoleServiceData.UPDATE_GROUPROLE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateGroupRoleServiceData.UPDATE_GROUPROLE_TS001_TC003.output.message)        
	});

});
