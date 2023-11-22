

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update role service class
**/

/**
 * Importing all required modules here
 */

const updateRoleServiceData = require("../data/update.role.service.data")
const updateRoleService = require("../../../../src/services/role/update.role.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateRoleService = new updateRoleService();
const UpdateRoleServiceData = new updateRoleServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.role.ts.001] | FunctionPath : [src/services/role/update.role.service.js/updateRole()]", () => {

	test(UpdateRoleServiceData.UPDATE_ROLE_TS001_TC001.description, async () => {

        const output = await UpdateRoleService.updateRole(
            UpdateRoleServiceData.UPDATE_ROLE_TS001_TC001.input.databaseConnector,
            UpdateRoleServiceData.UPDATE_ROLE_TS001_TC001.input.apiID,
            UpdateRoleServiceData.UPDATE_ROLE_TS001_TC001.input.config,
            UpdateRoleServiceData.UPDATE_ROLE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateRoleServiceData.UPDATE_ROLE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateRoleServiceData.UPDATE_ROLE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateRoleServiceData.UPDATE_ROLE_TS001_TC001.output)[2])
	});

    test(UpdateRoleServiceData.UPDATE_ROLE_TS001_TC002.description, async () => {

        const output = await UpdateRoleService.updateRole(
            UpdateRoleServiceData.UPDATE_ROLE_TS001_TC002.input.databaseConnector,
            UpdateRoleServiceData.UPDATE_ROLE_TS001_TC002.input.apiID,
            UpdateRoleServiceData.UPDATE_ROLE_TS001_TC002.input.config,
            UpdateRoleServiceData.UPDATE_ROLE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateRoleServiceData.UPDATE_ROLE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateRoleServiceData.UPDATE_ROLE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateRoleServiceData.UPDATE_ROLE_TS001_TC002.output.message)        
	});

    test(UpdateRoleServiceData.UPDATE_ROLE_TS001_TC003.description, async () => {

        const output = await UpdateRoleService.updateRole(
            UpdateRoleServiceData.UPDATE_ROLE_TS001_TC003.input.databaseConnector,
            UpdateRoleServiceData.UPDATE_ROLE_TS001_TC003.input.apiID,
            UpdateRoleServiceData.UPDATE_ROLE_TS001_TC003.input.config,
            UpdateRoleServiceData.UPDATE_ROLE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateRoleServiceData.UPDATE_ROLE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateRoleServiceData.UPDATE_ROLE_TS001_TC003.output.message)        
	});

});
