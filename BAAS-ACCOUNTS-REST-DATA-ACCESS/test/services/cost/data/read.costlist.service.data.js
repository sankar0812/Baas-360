/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read CostList service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readCostListServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.costlist.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.costlist.tc.001]
     */
    READ_COSTLIST_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.costlist.read.v1",
            config: {
                "ID": 1,
                "Name": "READ COSTLIST",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/cost/v1/costlists",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Cost List has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.costlist.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.costlist.tc.002]
     */
    READ_COSTLIST_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.costlist.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/cost/v1/costlists",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.costlist.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.costlist.tc.003]
     */
    READ_COSTLIST_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.costlist.read.v1",
            config: {
                "ID": 2,
                "Name": "READ COSTLIST",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/cost/v1/costlists",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Cost List has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.costlist.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.costlist.tc.001]
     */
    READ_ONE_COSTLIST_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.costlist.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ COSTLIST",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/cost/v1/costlist/:costlistid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Cost List has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.costlist.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.costlist.tc.002]
     */
    READ_ONE_COSTLIST_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.costlist.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/cost/v1/costlist/:costlistid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.costlist.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.costlist.tc.003]
     */
    READ_ONE_COSTLIST_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.costlist.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ COSTLIST",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/cost/v1/costlist/:costlistid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Cost List has been readone successfully"
        },
    }

}