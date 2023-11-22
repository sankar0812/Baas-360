

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update groupuser service class
**/

/**
 * Importing all required modules here
 */

const updateGroupUserServiceData = require("../data/update.groupuser.service.data")
const updateGroupUserService = require("../../../../src/services/group/update.groupuser.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateGroupUserService = new updateGroupUserService();
const UpdateGroupUserServiceData = new updateGroupUserServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.groupuser.ts.001] | FunctionPath : [src/services/group/update.groupuser.service.js/updateGroupUser()]", () => {

	test(UpdateGroupUserServiceData.UPDATE_GROUPUSER_TS001_TC001.description, async () => {

        const output = await UpdateGroupUserService.updateGroupUser(
            UpdateGroupUserServiceData.UPDATE_GROUPUSER_TS001_TC001.input.databaseConnector,
            UpdateGroupUserServiceData.UPDATE_GROUPUSER_TS001_TC001.input.apiID,
            UpdateGroupUserServiceData.UPDATE_GROUPUSER_TS001_TC001.input.config,
            UpdateGroupUserServiceData.UPDATE_GROUPUSER_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateGroupUserServiceData.UPDATE_GROUPUSER_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateGroupUserServiceData.UPDATE_GROUPUSER_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateGroupUserServiceData.UPDATE_GROUPUSER_TS001_TC001.output)[2])
	});

    test(UpdateGroupUserServiceData.UPDATE_GROUPUSER_TS001_TC002.description, async () => {

        const output = await UpdateGroupUserService.updateGroupUser(
            UpdateGroupUserServiceData.UPDATE_GROUPUSER_TS001_TC002.input.databaseConnector,
            UpdateGroupUserServiceData.UPDATE_GROUPUSER_TS001_TC002.input.apiID,
            UpdateGroupUserServiceData.UPDATE_GROUPUSER_TS001_TC002.input.config,
            UpdateGroupUserServiceData.UPDATE_GROUPUSER_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateGroupUserServiceData.UPDATE_GROUPUSER_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateGroupUserServiceData.UPDATE_GROUPUSER_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateGroupUserServiceData.UPDATE_GROUPUSER_TS001_TC002.output.message)        
	});

    test(UpdateGroupUserServiceData.UPDATE_GROUPUSER_TS001_TC003.description, async () => {

        const output = await UpdateGroupUserService.updateGroupUser(
            UpdateGroupUserServiceData.UPDATE_GROUPUSER_TS001_TC003.input.databaseConnector,
            UpdateGroupUserServiceData.UPDATE_GROUPUSER_TS001_TC003.input.apiID,
            UpdateGroupUserServiceData.UPDATE_GROUPUSER_TS001_TC003.input.config,
            UpdateGroupUserServiceData.UPDATE_GROUPUSER_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateGroupUserServiceData.UPDATE_GROUPUSER_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateGroupUserServiceData.UPDATE_GROUPUSER_TS001_TC003.output.message)        
	});

});
