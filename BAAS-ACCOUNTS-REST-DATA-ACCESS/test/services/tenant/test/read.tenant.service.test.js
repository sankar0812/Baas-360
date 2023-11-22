/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Tenant service class
**/

/**
 * Importing all required modules here
 */

const readTenantServiceData = require("../data/read.tenant.service.data")
const readTenantService = require("../../../../src/services/tenant/read.tenant.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadTenantService = new readTenantService();
const ReadTenantServiceData = new readTenantServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.tenant.ts.001] | FunctionPath : [src/services/tenant/read.contianer.service.js/readTenants()]", () => {


	test(ReadTenantServiceData.READ_TENANT_TS001_TC001.description, async () => {

        const output = await ReadTenantService.readTenants(
            ReadTenantServiceData.READ_TENANT_TS001_TC001.input.databaseConnector,
            ReadTenantServiceData.READ_TENANT_TS001_TC001.input.apiID,
            ReadTenantServiceData.READ_TENANT_TS001_TC001.input.config,
            ReadTenantServiceData.READ_TENANT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadTenantServiceData.READ_TENANT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadTenantServiceData.READ_TENANT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadTenantServiceData.READ_TENANT_TS001_TC001.output)[2])
	});



    test(ReadTenantServiceData.READ_TENANT_TS001_TC002.description, async () => {

        const output = await ReadTenantService.readTenants(
            ReadTenantServiceData.READ_TENANT_TS001_TC002.input.databaseConnector,
            ReadTenantServiceData.READ_TENANT_TS001_TC002.input.apiID,
            ReadTenantServiceData.READ_TENANT_TS001_TC002.input.config,
            ReadTenantServiceData.READ_TENANT_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadTenantServiceData.READ_TENANT_TS001_TC002.output.data)
        expect(output.status).toBe(ReadTenantServiceData.READ_TENANT_TS001_TC002.output.status)
        expect(output.message).toBe(ReadTenantServiceData.READ_TENANT_TS001_TC002.output.message)        
	});



    test(ReadTenantServiceData.READ_TENANT_TS001_TC003.description, async () => {

        const output = await ReadTenantService.readTenants(
            ReadTenantServiceData.READ_TENANT_TS001_TC003.input.databaseConnector,
            ReadTenantServiceData.READ_TENANT_TS001_TC003.input.apiID,
            ReadTenantServiceData.READ_TENANT_TS001_TC003.input.config,
            ReadTenantServiceData.READ_TENANT_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadTenantServiceData.READ_TENANT_TS001_TC003.output.status)
        expect(output.message).toBe(ReadTenantServiceData.READ_TENANT_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.tenant.ts.002] | FunctionPath : [src/services/tenant/read.tenant.service.js/readOneTenant()]", () => {


	test(ReadTenantServiceData.READ_ONE_TENANT_TS002_TC001.description, async () => {

        const output = await ReadTenantService.readOneTenant(
            ReadTenantServiceData.READ_ONE_TENANT_TS002_TC001.input.databaseConnector,
            ReadTenantServiceData.READ_ONE_TENANT_TS002_TC001.input.apiID,
            ReadTenantServiceData.READ_ONE_TENANT_TS002_TC001.input.config,
            ReadTenantServiceData.READ_ONE_TENANT_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadTenantServiceData.READ_ONE_TENANT_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadTenantServiceData.READ_ONE_TENANT_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadTenantServiceData.READ_ONE_TENANT_TS002_TC001.output)[2])
	});



    test(ReadTenantServiceData.READ_ONE_TENANT_TS002_TC002.description, async () => {

        const output = await ReadTenantService.readOneTenant(
            ReadTenantServiceData.READ_ONE_TENANT_TS002_TC002.input.databaseConnector,
            ReadTenantServiceData.READ_ONE_TENANT_TS002_TC002.input.apiID,
            ReadTenantServiceData.READ_ONE_TENANT_TS002_TC002.input.config,
            ReadTenantServiceData.READ_ONE_TENANT_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadTenantServiceData.READ_ONE_TENANT_TS002_TC002.output.data)
        expect(output.status).toBe(ReadTenantServiceData.READ_ONE_TENANT_TS002_TC002.output.status)
        expect(output.message).toBe(ReadTenantServiceData.READ_ONE_TENANT_TS002_TC002.output.message)        
	});



    test(ReadTenantServiceData.READ_ONE_TENANT_TS002_TC003.description, async () => {

        const output = await ReadTenantService.readOneTenant(
            ReadTenantServiceData.READ_ONE_TENANT_TS002_TC003.input.databaseConnector,
            ReadTenantServiceData.READ_ONE_TENANT_TS002_TC003.input.apiID,
            ReadTenantServiceData.READ_ONE_TENANT_TS002_TC003.input.config,
            ReadTenantServiceData.READ_ONE_TENANT_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadTenantServiceData.READ_ONE_TENANT_TS002_TC003.output.status)
        expect(output.message).toBe(ReadTenantServiceData.READ_ONE_TENANT_TS002_TC003.output.message)        
	});

});