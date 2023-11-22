/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete group service class
**/

/**
 * Importing all required modules here
 */

const deleteGroupServiceData = require("../data/delete.group.service.data")
const deleteGroupService = require("../../../../src/services/group/delete.group.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteGroupService = new deleteGroupService();
const DeleteGroupServiceData = new deleteGroupServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.group.ts.001] | FunctionPath : [src/services/group/delete.group.service.js/deleteOneGroup()]", () => {


	test(DeleteGroupServiceData.DELETE_ONE_GROUP_TS001_TC001.description, async () => {

        const output = await DeleteGroupService.deleteOneGroup(
            DeleteGroupServiceData.DELETE_ONE_GROUP_TS001_TC001.input.databaseConnector,
            DeleteGroupServiceData.DELETE_ONE_GROUP_TS001_TC001.input.apiID,
            DeleteGroupServiceData.DELETE_ONE_GROUP_TS001_TC001.input.config,
            DeleteGroupServiceData.DELETE_ONE_GROUP_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteGroupServiceData.DELETE_ONE_GROUP_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteGroupServiceData.DELETE_ONE_GROUP_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteGroupServiceData.DELETE_ONE_GROUP_TS001_TC001.output)[2])
	});



    test(DeleteGroupServiceData.DELETE_ONE_GROUP_TS001_TC002.description, async () => {

        const output = await DeleteGroupService.deleteOneGroup(
            DeleteGroupServiceData.DELETE_ONE_GROUP_TS001_TC002.input.databaseConnector,
            DeleteGroupServiceData.DELETE_ONE_GROUP_TS001_TC002.input.apiID,
            DeleteGroupServiceData.DELETE_ONE_GROUP_TS001_TC002.input.config,
            DeleteGroupServiceData.DELETE_ONE_GROUP_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteGroupServiceData.DELETE_ONE_GROUP_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteGroupServiceData.DELETE_ONE_GROUP_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteGroupServiceData.DELETE_ONE_GROUP_TS001_TC002.output.message)        
	});



    test(DeleteGroupServiceData.DELETE_ONE_GROUP_TS001_TC003.description, async () => {

        const output = await DeleteGroupService.deleteOneGroup(
            DeleteGroupServiceData.DELETE_ONE_GROUP_TS001_TC003.input.databaseConnector,
            DeleteGroupServiceData.DELETE_ONE_GROUP_TS001_TC003.input.apiID,
            DeleteGroupServiceData.DELETE_ONE_GROUP_TS001_TC003.input.config,
            DeleteGroupServiceData.DELETE_ONE_GROUP_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteGroupServiceData.DELETE_ONE_GROUP_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteGroupServiceData.DELETE_ONE_GROUP_TS001_TC003.output.message)        
	});

});
