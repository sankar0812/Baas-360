/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read Asset service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readAssetServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.asset.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.asset.tc.001]
     */
    READ_ASSET_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.asset.read.v1",
            config: {
                "ID": 1,
                "Name": "READ ASSET",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assets",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Asset has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.asset.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.asset.tc.002]
     */
    READ_ASSET_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.asset.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assets",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.asset.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.asset.tc.003]
     */
    READ_ASSET_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.asset.read.v1",
            config: {
                "ID": 2,
                "Name": "READ ASSET",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assets",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Asset has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.asset.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.asset.tc.001]
     */
    READ_ONE_ASSET_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.asset.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ ASSET",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/asset/:assetid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Asset has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.asset.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.asset.tc.002]
     */
    READ_ONE_ASSET_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.asset.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/asset/:assetid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.asset.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.asset.tc.003]
     */
    READ_ONE_ASSET_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.asset.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ ASSET",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/asset/:assetid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Asset has been readone successfully"
        },
    }

}