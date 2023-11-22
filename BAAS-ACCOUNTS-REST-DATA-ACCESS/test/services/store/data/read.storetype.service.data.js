/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read StoreType service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readStoreTypeServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.storetype.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.storetype.tc.001]
     */
    READ_STORETYPE_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.storetype.read.v1",
            config: {
                "ID": 1,
                "Name": "READ STORETYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/store/v1/storetypes",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Store Type has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.storetype.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.storetype.tc.002]
     */
    READ_STORETYPE_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.storetype.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/store/v1/storetypes",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.storetype.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.storetype.tc.003]
     */
    READ_STORETYPE_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.storetype.read.v1",
            config: {
                "ID": 2,
                "Name": "READ STORETYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/store/v1/storetypes",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Store Type has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.storetype.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.storetype.tc.001]
     */
    READ_ONE_STORETYPE_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.storetype.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ STORETYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/store/v1/storetype/:storetypeid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Store Type has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.storetype.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.storetype.tc.002]
     */
    READ_ONE_STORETYPE_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.storetype.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/store/v1/storetype/:storetypeid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.storetype.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.storetype.tc.003]
     */
    READ_ONE_STORETYPE_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.storetype.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ STORETYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/store/v1/storetype/:storetypeid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Store Type has been readone successfully"
        },
    }

}