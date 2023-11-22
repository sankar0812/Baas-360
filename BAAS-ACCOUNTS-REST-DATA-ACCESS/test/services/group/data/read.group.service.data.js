/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read Group service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readGroupServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.group.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.group.tc.001]
     */
    READ_GROUP_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.group.read.v1",
            config: {
                "ID": 1,
                "Name": "READ GROUP",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/group/v1/groups",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Group has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.group.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.group.tc.002]
     */
    READ_GROUP_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.group.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/group/v1/groups",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.group.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.group.tc.003]
     */
    READ_GROUP_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.group.read.v1",
            config: {
                "ID": 2,
                "Name": "READ GROUP",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/group/v1/groups",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Group has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.group.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.group.tc.001]
     */
    READ_ONE_GROUP_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.group.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ GROUP",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/group/v1/group/:groupid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Group has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.group.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.group.tc.002]
     */
    READ_ONE_GROUP_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.group.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/group/v1/group/:groupid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.group.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.group.tc.003]
     */
    READ_ONE_GROUP_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.group.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ GROUP",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/group/v1/group/:groupid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Group has been readone successfully"
        },
    }

}