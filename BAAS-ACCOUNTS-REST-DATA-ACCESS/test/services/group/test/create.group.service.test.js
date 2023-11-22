/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create group service class
**/

/**
 * Importing all required modules here
 */

const createGroupServiceData = require("../data/create.group.service.data")
const createGroupService = require("../../../../src/services/group/create.group.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateGroupService = new createGroupService();
const CreateGroupServiceData = new createGroupServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.group.ts.001] | FunctionPath : [src/services/group/create.group.service.js/createOneGroup()]", () => {


	test(CreateGroupServiceData.CREATE_ONE_GROUP_TS001_TC001.description, async () => {

        const output = await CreateGroupService.createOneGroup(
            CreateGroupServiceData.CREATE_ONE_GROUP_TS001_TC001.input.databaseConnector,
            CreateGroupServiceData.CREATE_ONE_GROUP_TS001_TC001.input.apiID,
            CreateGroupServiceData.CREATE_ONE_GROUP_TS001_TC001.input.config,
            CreateGroupServiceData.CREATE_ONE_GROUP_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateGroupServiceData.CREATE_ONE_GROUP_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateGroupServiceData.CREATE_ONE_GROUP_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateGroupServiceData.CREATE_ONE_GROUP_TS001_TC001.output)[2])
	});



    test(CreateGroupServiceData.CREATE_ONE_GROUP_TS001_TC002.description, async () => {

        const output = await CreateGroupService.createOneGroup(
            CreateGroupServiceData.CREATE_ONE_GROUP_TS001_TC002.input.databaseConnector,
            CreateGroupServiceData.CREATE_ONE_GROUP_TS001_TC002.input.apiID,
            CreateGroupServiceData.CREATE_ONE_GROUP_TS001_TC002.input.config,
            CreateGroupServiceData.CREATE_ONE_GROUP_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateGroupServiceData.CREATE_ONE_GROUP_TS001_TC002.output.data)
        expect(output.status).toBe(CreateGroupServiceData.CREATE_ONE_GROUP_TS001_TC002.output.status)
        expect(output.message).toBe(CreateGroupServiceData.CREATE_ONE_GROUP_TS001_TC002.output.message)        
	});



    test(CreateGroupServiceData.CREATE_ONE_GROUP_TS001_TC003.description, async () => {

        const output = await CreateGroupService.createOneGroup(
            CreateGroupServiceData.CREATE_ONE_GROUP_TS001_TC003.input.databaseConnector,
            CreateGroupServiceData.CREATE_ONE_GROUP_TS001_TC003.input.apiID,
            CreateGroupServiceData.CREATE_ONE_GROUP_TS001_TC003.input.config,
            CreateGroupServiceData.CREATE_ONE_GROUP_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateGroupServiceData.CREATE_ONE_GROUP_TS001_TC003.output.status)
        expect(output.message).toBe(CreateGroupServiceData.CREATE_ONE_GROUP_TS001_TC003.output.message)        
	});

});