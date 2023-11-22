/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read Tenant service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readTenantServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.tenant.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.tenant.tc.001]
     */
    READ_TENANT_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.tenant.read.v1",
            config: {
                "ID": 1,
                "Name": "READ TENANT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/tenant/v1/tenants",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Tenant has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.tenant.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.tenant.tc.002]
     */
    READ_TENANT_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.tenant.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/tenant/v1/tenants",
                "IsAvailable": false,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 400,
            message: "Avaliability flag has not been enabled"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.tenant.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.tenant.tc.003]
     */
    READ_TENANT_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.tenant.read.v1",
            config: {
                "ID": 2,
                "Name": "READ TENANT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/tenant/v1/tenants",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Tenant has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.tenant.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.tenant.tc.001]
     */
    READ_ONE_TENANT_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.tenant.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ TENANT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/tenant/v1/tenant/:tenantid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Tenant has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.tenant.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.tenant.tc.002]
     */
    READ_ONE_TENANT_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.tenant.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/tenant/v1/tenant/:tenantid",
                "IsAvailable": false,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 400,
            message: "Avaliability flag has not been enabled"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.tenant.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.tenant.tc.003]
     */
    READ_ONE_TENANT_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.tenant.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ TENANT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/tenant/v1/tenant/:tenantid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Tenant has been readone successfully"
        },
    }

}