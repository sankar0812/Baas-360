/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read Project service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readProjectServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.project.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.project.tc.001]
     */
    READ_PROJECT_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.project.read.v1",
            config: {
                "ID": 1,
                "Name": "READ PROJECT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/project/v1/projects",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Project has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.project.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.project.tc.002]
     */
    READ_PROJECT_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.project.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/project/v1/projects",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.project.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.project.tc.003]
     */
    READ_PROJECT_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.project.read.v1",
            config: {
                "ID": 2,
                "Name": "READ PROJECT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/project/v1/projects",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Project has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.project.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.project.tc.001]
     */
    READ_ONE_PROJECT_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.project.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ PROJECT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/project/v1/project/:projectid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Project has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.project.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.project.tc.002]
     */
    READ_ONE_PROJECT_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.project.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/project/v1/project/:projectid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.project.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.project.tc.003]
     */
    READ_ONE_PROJECT_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.project.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ PROJECT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/project/v1/project/:projectid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Project has been readone successfully"
        },
    }

}