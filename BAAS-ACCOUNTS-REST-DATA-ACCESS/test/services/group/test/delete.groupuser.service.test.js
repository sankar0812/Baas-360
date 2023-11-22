/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete groupuser service class
**/

/**
 * Importing all required modules here
 */

const deleteGroupUserServiceData = require("../data/delete.groupuser.service.data")
const deleteGroupUserService = require("../../../../src/services/group/delete.groupuser.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteGroupUserService = new deleteGroupUserService();
const DeleteGroupUserServiceData = new deleteGroupUserServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.groupuser.ts.001] | FunctionPath : [src/services/group/delete.groupuser.service.js/deleteOneGroupUser()]", () => {


	test(DeleteGroupUserServiceData.DELETE_ONE_GROUPUSER_TS001_TC001.description, async () => {

        const output = await DeleteGroupUserService.deleteOneGroupUser(
            DeleteGroupUserServiceData.DELETE_ONE_GROUPUSER_TS001_TC001.input.databaseConnector,
            DeleteGroupUserServiceData.DELETE_ONE_GROUPUSER_TS001_TC001.input.apiID,
            DeleteGroupUserServiceData.DELETE_ONE_GROUPUSER_TS001_TC001.input.config,
            DeleteGroupUserServiceData.DELETE_ONE_GROUPUSER_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteGroupUserServiceData.DELETE_ONE_GROUPUSER_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteGroupUserServiceData.DELETE_ONE_GROUPUSER_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteGroupUserServiceData.DELETE_ONE_GROUPUSER_TS001_TC001.output)[2])
	});



    test(DeleteGroupUserServiceData.DELETE_ONE_GROUPUSER_TS001_TC002.description, async () => {

        const output = await DeleteGroupUserService.deleteOneGroupUser(
            DeleteGroupUserServiceData.DELETE_ONE_GROUPUSER_TS001_TC002.input.databaseConnector,
            DeleteGroupUserServiceData.DELETE_ONE_GROUPUSER_TS001_TC002.input.apiID,
            DeleteGroupUserServiceData.DELETE_ONE_GROUPUSER_TS001_TC002.input.config,
            DeleteGroupUserServiceData.DELETE_ONE_GROUPUSER_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteGroupUserServiceData.DELETE_ONE_GROUPUSER_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteGroupUserServiceData.DELETE_ONE_GROUPUSER_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteGroupUserServiceData.DELETE_ONE_GROUPUSER_TS001_TC002.output.message)        
	});



    test(DeleteGroupUserServiceData.DELETE_ONE_GROUPUSER_TS001_TC003.description, async () => {

        const output = await DeleteGroupUserService.deleteOneGroupUser(
            DeleteGroupUserServiceData.DELETE_ONE_GROUPUSER_TS001_TC003.input.databaseConnector,
            DeleteGroupUserServiceData.DELETE_ONE_GROUPUSER_TS001_TC003.input.apiID,
            DeleteGroupUserServiceData.DELETE_ONE_GROUPUSER_TS001_TC003.input.config,
            DeleteGroupUserServiceData.DELETE_ONE_GROUPUSER_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteGroupUserServiceData.DELETE_ONE_GROUPUSER_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteGroupUserServiceData.DELETE_ONE_GROUPUSER_TS001_TC003.output.message)        
	});

});
