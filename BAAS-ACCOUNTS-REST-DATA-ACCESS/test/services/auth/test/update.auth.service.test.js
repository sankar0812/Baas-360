

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update auth service class
**/

/**
 * Importing all required modules here
 */

const updateAuthServiceData = require("../data/update.auth.service.data")
const updateAuthService = require("../../../../src/services/auth/update.auth.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateAuthService = new updateAuthService();
const UpdateAuthServiceData = new updateAuthServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.auth.ts.001] | FunctionPath : [src/services/auth/update.auth.service.js/updateAuth()]", () => {

	test(UpdateAuthServiceData.UPDATE_AUTH_TS001_TC001.description, async () => {

        const output = await UpdateAuthService.updateAuth(
            UpdateAuthServiceData.UPDATE_AUTH_TS001_TC001.input.databaseConnector,
            UpdateAuthServiceData.UPDATE_AUTH_TS001_TC001.input.apiID,
            UpdateAuthServiceData.UPDATE_AUTH_TS001_TC001.input.config,
            UpdateAuthServiceData.UPDATE_AUTH_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateAuthServiceData.UPDATE_AUTH_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateAuthServiceData.UPDATE_AUTH_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateAuthServiceData.UPDATE_AUTH_TS001_TC001.output)[2])
	});

    test(UpdateAuthServiceData.UPDATE_AUTH_TS001_TC002.description, async () => {

        const output = await UpdateAuthService.updateAuth(
            UpdateAuthServiceData.UPDATE_AUTH_TS001_TC002.input.databaseConnector,
            UpdateAuthServiceData.UPDATE_AUTH_TS001_TC002.input.apiID,
            UpdateAuthServiceData.UPDATE_AUTH_TS001_TC002.input.config,
            UpdateAuthServiceData.UPDATE_AUTH_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateAuthServiceData.UPDATE_AUTH_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateAuthServiceData.UPDATE_AUTH_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateAuthServiceData.UPDATE_AUTH_TS001_TC002.output.message)        
	});

    test(UpdateAuthServiceData.UPDATE_AUTH_TS001_TC003.description, async () => {

        const output = await UpdateAuthService.updateAuth(
            UpdateAuthServiceData.UPDATE_AUTH_TS001_TC003.input.databaseConnector,
            UpdateAuthServiceData.UPDATE_AUTH_TS001_TC003.input.apiID,
            UpdateAuthServiceData.UPDATE_AUTH_TS001_TC003.input.config,
            UpdateAuthServiceData.UPDATE_AUTH_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateAuthServiceData.UPDATE_AUTH_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateAuthServiceData.UPDATE_AUTH_TS001_TC003.output.message)        
	});

});
