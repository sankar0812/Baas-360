/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read Store service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readStoreServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.store.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.store.tc.001]
     */
    READ_STORE_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.store.read.v1",
            config: {
                "ID": 1,
                "Name": "READ STORE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/store/v1/stores",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Store has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.store.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.store.tc.002]
     */
    READ_STORE_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.store.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/store/v1/stores",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.store.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.store.tc.003]
     */
    READ_STORE_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.store.read.v1",
            config: {
                "ID": 2,
                "Name": "READ STORE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/store/v1/stores",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Store has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.store.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.store.tc.001]
     */
    READ_ONE_STORE_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.store.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ STORE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/store/v1/store/:storeid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Store has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.store.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.store.tc.002]
     */
    READ_ONE_STORE_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.store.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/store/v1/store/:storeid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.store.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.store.tc.003]
     */
    READ_ONE_STORE_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.store.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ STORE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/store/v1/store/:storeid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Store has been readone successfully"
        },
    }

}