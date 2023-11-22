

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update group service class
**/

/**
 * Importing all required modules here
 */

const updateGroupServiceData = require("../data/update.group.service.data")
const updateGroupService = require("../../../../src/services/group/update.group.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateGroupService = new updateGroupService();
const UpdateGroupServiceData = new updateGroupServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.group.ts.001] | FunctionPath : [src/services/group/update.group.service.js/updateGroup()]", () => {

	test(UpdateGroupServiceData.UPDATE_GROUP_TS001_TC001.description, async () => {

        const output = await UpdateGroupService.updateGroup(
            UpdateGroupServiceData.UPDATE_GROUP_TS001_TC001.input.databaseConnector,
            UpdateGroupServiceData.UPDATE_GROUP_TS001_TC001.input.apiID,
            UpdateGroupServiceData.UPDATE_GROUP_TS001_TC001.input.config,
            UpdateGroupServiceData.UPDATE_GROUP_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateGroupServiceData.UPDATE_GROUP_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateGroupServiceData.UPDATE_GROUP_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateGroupServiceData.UPDATE_GROUP_TS001_TC001.output)[2])
	});

    test(UpdateGroupServiceData.UPDATE_GROUP_TS001_TC002.description, async () => {

        const output = await UpdateGroupService.updateGroup(
            UpdateGroupServiceData.UPDATE_GROUP_TS001_TC002.input.databaseConnector,
            UpdateGroupServiceData.UPDATE_GROUP_TS001_TC002.input.apiID,
            UpdateGroupServiceData.UPDATE_GROUP_TS001_TC002.input.config,
            UpdateGroupServiceData.UPDATE_GROUP_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateGroupServiceData.UPDATE_GROUP_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateGroupServiceData.UPDATE_GROUP_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateGroupServiceData.UPDATE_GROUP_TS001_TC002.output.message)        
	});

    test(UpdateGroupServiceData.UPDATE_GROUP_TS001_TC003.description, async () => {

        const output = await UpdateGroupService.updateGroup(
            UpdateGroupServiceData.UPDATE_GROUP_TS001_TC003.input.databaseConnector,
            UpdateGroupServiceData.UPDATE_GROUP_TS001_TC003.input.apiID,
            UpdateGroupServiceData.UPDATE_GROUP_TS001_TC003.input.config,
            UpdateGroupServiceData.UPDATE_GROUP_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateGroupServiceData.UPDATE_GROUP_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateGroupServiceData.UPDATE_GROUP_TS001_TC003.output.message)        
	});

});
