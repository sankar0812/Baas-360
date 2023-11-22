/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read AssetUsage service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readAssetUsageServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.assetusage.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.assetusage.tc.001]
     */
    READ_ASSETUSAGE_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetusage.read.v1",
            config: {
                "ID": 1,
                "Name": "READ ASSETUSAGE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetusages",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Asset Usage has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.assetusage.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.assetusage.tc.002]
     */
    READ_ASSETUSAGE_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetusage.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetusages",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.assetusage.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.assetusage.tc.003]
     */
    READ_ASSETUSAGE_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetusage.read.v1",
            config: {
                "ID": 2,
                "Name": "READ ASSETUSAGE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetusages",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Asset Usage has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.assetusage.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.assetusage.tc.001]
     */
    READ_ONE_ASSETUSAGE_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetusage.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ ASSETUSAGE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetusage/:assetusageid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Asset Usage has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.assetusage.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.assetusage.tc.002]
     */
    READ_ONE_ASSETUSAGE_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetusage.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetusage/:assetusageid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.assetusage.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.assetusage.tc.003]
     */
    READ_ONE_ASSETUSAGE_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetusage.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ ASSETUSAGE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetusage/:assetusageid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Asset Usage has been readone successfully"
        },
    }

}