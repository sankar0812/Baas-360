/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Auth service class
**/

/**
 * Importing all required modules here
 */

const readAuthServiceData = require("../data/read.auth.service.data")
const readAuthService = require("../../../../src/services/auth/read.auth.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadAuthService = new readAuthService();
const ReadAuthServiceData = new readAuthServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.auth.ts.001] | FunctionPath : [src/services/auth/read.contianer.service.js/readAuths()]", () => {


	test(ReadAuthServiceData.READ_AUTH_TS001_TC001.description, async () => {

        const output = await ReadAuthService.readAuths(
            ReadAuthServiceData.READ_AUTH_TS001_TC001.input.databaseConnector,
            ReadAuthServiceData.READ_AUTH_TS001_TC001.input.apiID,
            ReadAuthServiceData.READ_AUTH_TS001_TC001.input.config,
            ReadAuthServiceData.READ_AUTH_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAuthServiceData.READ_AUTH_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAuthServiceData.READ_AUTH_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAuthServiceData.READ_AUTH_TS001_TC001.output)[2])
	});



    test(ReadAuthServiceData.READ_AUTH_TS001_TC002.description, async () => {

        const output = await ReadAuthService.readAuths(
            ReadAuthServiceData.READ_AUTH_TS001_TC002.input.databaseConnector,
            ReadAuthServiceData.READ_AUTH_TS001_TC002.input.apiID,
            ReadAuthServiceData.READ_AUTH_TS001_TC002.input.config,
            ReadAuthServiceData.READ_AUTH_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadAuthServiceData.READ_AUTH_TS001_TC002.output.data)
        expect(output.status).toBe(ReadAuthServiceData.READ_AUTH_TS001_TC002.output.status)
        expect(output.message).toBe(ReadAuthServiceData.READ_AUTH_TS001_TC002.output.message)        
	});



    test(ReadAuthServiceData.READ_AUTH_TS001_TC003.description, async () => {

        const output = await ReadAuthService.readAuths(
            ReadAuthServiceData.READ_AUTH_TS001_TC003.input.databaseConnector,
            ReadAuthServiceData.READ_AUTH_TS001_TC003.input.apiID,
            ReadAuthServiceData.READ_AUTH_TS001_TC003.input.config,
            ReadAuthServiceData.READ_AUTH_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadAuthServiceData.READ_AUTH_TS001_TC003.output.status)
        expect(output.message).toBe(ReadAuthServiceData.READ_AUTH_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.auth.ts.002] | FunctionPath : [src/services/auth/read.auth.service.js/readOneAuth()]", () => {


	test(ReadAuthServiceData.READ_ONE_AUTH_TS002_TC001.description, async () => {

        const output = await ReadAuthService.readOneAuth(
            ReadAuthServiceData.READ_ONE_AUTH_TS002_TC001.input.databaseConnector,
            ReadAuthServiceData.READ_ONE_AUTH_TS002_TC001.input.apiID,
            ReadAuthServiceData.READ_ONE_AUTH_TS002_TC001.input.config,
            ReadAuthServiceData.READ_ONE_AUTH_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadAuthServiceData.READ_ONE_AUTH_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadAuthServiceData.READ_ONE_AUTH_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadAuthServiceData.READ_ONE_AUTH_TS002_TC001.output)[2])
	});



    test(ReadAuthServiceData.READ_ONE_AUTH_TS002_TC002.description, async () => {

        const output = await ReadAuthService.readOneAuth(
            ReadAuthServiceData.READ_ONE_AUTH_TS002_TC002.input.databaseConnector,
            ReadAuthServiceData.READ_ONE_AUTH_TS002_TC002.input.apiID,
            ReadAuthServiceData.READ_ONE_AUTH_TS002_TC002.input.config,
            ReadAuthServiceData.READ_ONE_AUTH_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadAuthServiceData.READ_ONE_AUTH_TS002_TC002.output.data)
        expect(output.status).toBe(ReadAuthServiceData.READ_ONE_AUTH_TS002_TC002.output.status)
        expect(output.message).toBe(ReadAuthServiceData.READ_ONE_AUTH_TS002_TC002.output.message)        
	});



    test(ReadAuthServiceData.READ_ONE_AUTH_TS002_TC003.description, async () => {

        const output = await ReadAuthService.readOneAuth(
            ReadAuthServiceData.READ_ONE_AUTH_TS002_TC003.input.databaseConnector,
            ReadAuthServiceData.READ_ONE_AUTH_TS002_TC003.input.apiID,
            ReadAuthServiceData.READ_ONE_AUTH_TS002_TC003.input.config,
            ReadAuthServiceData.READ_ONE_AUTH_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadAuthServiceData.READ_ONE_AUTH_TS002_TC003.output.status)
        expect(output.message).toBe(ReadAuthServiceData.READ_ONE_AUTH_TS002_TC003.output.message)        
	});

});