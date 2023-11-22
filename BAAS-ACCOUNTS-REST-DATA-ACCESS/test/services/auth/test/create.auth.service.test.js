/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create auth service class
**/

/**
 * Importing all required modules here
 */

const createAuthServiceData = require("../data/create.auth.service.data")
const createAuthService = require("../../../../src/services/auth/create.auth.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateAuthService = new createAuthService();
const CreateAuthServiceData = new createAuthServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.auth.ts.001] | FunctionPath : [src/services/auth/create.auth.service.js/createOneAuth()]", () => {


	test(CreateAuthServiceData.CREATE_ONE_AUTH_TS001_TC001.description, async () => {

        const output = await CreateAuthService.createOneAuth(
            CreateAuthServiceData.CREATE_ONE_AUTH_TS001_TC001.input.databaseConnector,
            CreateAuthServiceData.CREATE_ONE_AUTH_TS001_TC001.input.apiID,
            CreateAuthServiceData.CREATE_ONE_AUTH_TS001_TC001.input.config,
            CreateAuthServiceData.CREATE_ONE_AUTH_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateAuthServiceData.CREATE_ONE_AUTH_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateAuthServiceData.CREATE_ONE_AUTH_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateAuthServiceData.CREATE_ONE_AUTH_TS001_TC001.output)[2])
	});



    test(CreateAuthServiceData.CREATE_ONE_AUTH_TS001_TC002.description, async () => {

        const output = await CreateAuthService.createOneAuth(
            CreateAuthServiceData.CREATE_ONE_AUTH_TS001_TC002.input.databaseConnector,
            CreateAuthServiceData.CREATE_ONE_AUTH_TS001_TC002.input.apiID,
            CreateAuthServiceData.CREATE_ONE_AUTH_TS001_TC002.input.config,
            CreateAuthServiceData.CREATE_ONE_AUTH_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateAuthServiceData.CREATE_ONE_AUTH_TS001_TC002.output.data)
        expect(output.status).toBe(CreateAuthServiceData.CREATE_ONE_AUTH_TS001_TC002.output.status)
        expect(output.message).toBe(CreateAuthServiceData.CREATE_ONE_AUTH_TS001_TC002.output.message)        
	});



    test(CreateAuthServiceData.CREATE_ONE_AUTH_TS001_TC003.description, async () => {

        const output = await CreateAuthService.createOneAuth(
            CreateAuthServiceData.CREATE_ONE_AUTH_TS001_TC003.input.databaseConnector,
            CreateAuthServiceData.CREATE_ONE_AUTH_TS001_TC003.input.apiID,
            CreateAuthServiceData.CREATE_ONE_AUTH_TS001_TC003.input.config,
            CreateAuthServiceData.CREATE_ONE_AUTH_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateAuthServiceData.CREATE_ONE_AUTH_TS001_TC003.output.status)
        expect(output.message).toBe(CreateAuthServiceData.CREATE_ONE_AUTH_TS001_TC003.output.message)        
	});

});