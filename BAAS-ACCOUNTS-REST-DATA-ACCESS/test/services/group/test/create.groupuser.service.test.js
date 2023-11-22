/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create groupuser service class
**/

/**
 * Importing all required modules here
 */

const createGroupUserServiceData = require("../data/create.groupuser.service.data")
const createGroupUserService = require("../../../../src/services/group/create.groupuser.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateGroupUserService = new createGroupUserService();
const CreateGroupUserServiceData = new createGroupUserServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.groupuser.ts.001] | FunctionPath : [src/services/group/create.groupuser.service.js/createOneGroupUser()]", () => {


	test(CreateGroupUserServiceData.CREATE_ONE_GROUPUSER_TS001_TC001.description, async () => {

        const output = await CreateGroupUserService.createOneGroupUser(
            CreateGroupUserServiceData.CREATE_ONE_GROUPUSER_TS001_TC001.input.databaseConnector,
            CreateGroupUserServiceData.CREATE_ONE_GROUPUSER_TS001_TC001.input.apiID,
            CreateGroupUserServiceData.CREATE_ONE_GROUPUSER_TS001_TC001.input.config,
            CreateGroupUserServiceData.CREATE_ONE_GROUPUSER_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateGroupUserServiceData.CREATE_ONE_GROUPUSER_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateGroupUserServiceData.CREATE_ONE_GROUPUSER_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateGroupUserServiceData.CREATE_ONE_GROUPUSER_TS001_TC001.output)[2])
	});



    test(CreateGroupUserServiceData.CREATE_ONE_GROUPUSER_TS001_TC002.description, async () => {

        const output = await CreateGroupUserService.createOneGroupUser(
            CreateGroupUserServiceData.CREATE_ONE_GROUPUSER_TS001_TC002.input.databaseConnector,
            CreateGroupUserServiceData.CREATE_ONE_GROUPUSER_TS001_TC002.input.apiID,
            CreateGroupUserServiceData.CREATE_ONE_GROUPUSER_TS001_TC002.input.config,
            CreateGroupUserServiceData.CREATE_ONE_GROUPUSER_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateGroupUserServiceData.CREATE_ONE_GROUPUSER_TS001_TC002.output.data)
        expect(output.status).toBe(CreateGroupUserServiceData.CREATE_ONE_GROUPUSER_TS001_TC002.output.status)
        expect(output.message).toBe(CreateGroupUserServiceData.CREATE_ONE_GROUPUSER_TS001_TC002.output.message)        
	});



    test(CreateGroupUserServiceData.CREATE_ONE_GROUPUSER_TS001_TC003.description, async () => {

        const output = await CreateGroupUserService.createOneGroupUser(
            CreateGroupUserServiceData.CREATE_ONE_GROUPUSER_TS001_TC003.input.databaseConnector,
            CreateGroupUserServiceData.CREATE_ONE_GROUPUSER_TS001_TC003.input.apiID,
            CreateGroupUserServiceData.CREATE_ONE_GROUPUSER_TS001_TC003.input.config,
            CreateGroupUserServiceData.CREATE_ONE_GROUPUSER_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateGroupUserServiceData.CREATE_ONE_GROUPUSER_TS001_TC003.output.status)
        expect(output.message).toBe(CreateGroupUserServiceData.CREATE_ONE_GROUPUSER_TS001_TC003.output.message)        
	});

});