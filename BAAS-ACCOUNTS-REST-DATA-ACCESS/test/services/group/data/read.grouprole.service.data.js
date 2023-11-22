/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read GroupRole service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readGroupRoleServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.grouprole.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.grouprole.tc.001]
     */
    READ_GROUPROLE_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.grouprole.read.v1",
            config: {
                "ID": 1,
                "Name": "READ GROUPROLE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/group/v1/grouproles",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Group Role has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.grouprole.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.grouprole.tc.002]
     */
    READ_GROUPROLE_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.grouprole.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/group/v1/grouproles",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.grouprole.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.grouprole.tc.003]
     */
    READ_GROUPROLE_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.grouprole.read.v1",
            config: {
                "ID": 2,
                "Name": "READ GROUPROLE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/group/v1/grouproles",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Group Role has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.grouprole.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.grouprole.tc.001]
     */
    READ_ONE_GROUPROLE_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.grouprole.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ GROUPROLE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/group/v1/grouprole/:grouproleid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Group Role has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.grouprole.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.grouprole.tc.002]
     */
    READ_ONE_GROUPROLE_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.grouprole.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/group/v1/grouprole/:grouproleid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.grouprole.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.grouprole.tc.003]
     */
    READ_ONE_GROUPROLE_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.grouprole.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ GROUPROLE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/group/v1/grouprole/:grouproleid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Group Role has been readone successfully"
        },
    }

}