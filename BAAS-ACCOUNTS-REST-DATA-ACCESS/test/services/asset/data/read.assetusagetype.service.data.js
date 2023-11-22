/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read AssetUsageType service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readAssetUsageTypeServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.assetusagetype.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.assetusagetype.tc.001]
     */
    READ_ASSETUSAGETYPE_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetusagetype.read.v1",
            config: {
                "ID": 1,
                "Name": "READ ASSETUSAGETYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetusagetypes",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Asset Usage Type has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.assetusagetype.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.assetusagetype.tc.002]
     */
    READ_ASSETUSAGETYPE_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetusagetype.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetusagetypes",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.assetusagetype.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.assetusagetype.tc.003]
     */
    READ_ASSETUSAGETYPE_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetusagetype.read.v1",
            config: {
                "ID": 2,
                "Name": "READ ASSETUSAGETYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetusagetypes",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Asset Usage Type has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.assetusagetype.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.assetusagetype.tc.001]
     */
    READ_ONE_ASSETUSAGETYPE_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetusagetype.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ ASSETUSAGETYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetusagetype/:assetusagetypeid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Asset Usage Type has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.assetusagetype.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.assetusagetype.tc.002]
     */
    READ_ONE_ASSETUSAGETYPE_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetusagetype.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetusagetype/:assetusagetypeid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.assetusagetype.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.assetusagetype.tc.003]
     */
    READ_ONE_ASSETUSAGETYPE_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetusagetype.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ ASSETUSAGETYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetusagetype/:assetusagetypeid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Asset Usage Type has been readone successfully"
        },
    }

}