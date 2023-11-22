/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read GroupUser service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readGroupUserServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.groupuser.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.groupuser.tc.001]
     */
    READ_GROUPUSER_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.groupuser.read.v1",
            config: {
                "ID": 1,
                "Name": "READ GROUPUSER",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/group/v1/groupusers",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Group User has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.groupuser.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.groupuser.tc.002]
     */
    READ_GROUPUSER_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.groupuser.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/group/v1/groupusers",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.groupuser.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.groupuser.tc.003]
     */
    READ_GROUPUSER_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.groupuser.read.v1",
            config: {
                "ID": 2,
                "Name": "READ GROUPUSER",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/group/v1/groupusers",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Group User has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.groupuser.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.groupuser.tc.001]
     */
    READ_ONE_GROUPUSER_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.groupuser.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ GROUPUSER",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/group/v1/groupuser/:groupuserid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Group User has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.groupuser.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.groupuser.tc.002]
     */
    READ_ONE_GROUPUSER_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.groupuser.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/group/v1/groupuser/:groupuserid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.groupuser.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.groupuser.tc.003]
     */
    READ_ONE_GROUPUSER_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.groupuser.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ GROUPUSER",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/group/v1/groupuser/:groupuserid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Group User has been readone successfully"
        },
    }

}