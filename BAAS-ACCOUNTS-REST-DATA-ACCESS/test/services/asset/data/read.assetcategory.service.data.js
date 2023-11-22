/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read AssetCategory service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readAssetCategoryServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.assetcategory.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.assetcategory.tc.001]
     */
    READ_ASSETCATEGORY_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetcategory.read.v1",
            config: {
                "ID": 1,
                "Name": "READ ASSETCATEGORY",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetcategorys",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Asset Category has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.assetcategory.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.assetcategory.tc.002]
     */
    READ_ASSETCATEGORY_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetcategory.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetcategorys",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.assetcategory.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.assetcategory.tc.003]
     */
    READ_ASSETCATEGORY_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetcategory.read.v1",
            config: {
                "ID": 2,
                "Name": "READ ASSETCATEGORY",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetcategorys",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Asset Category has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.assetcategory.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.assetcategory.tc.001]
     */
    READ_ONE_ASSETCATEGORY_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetcategory.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ ASSETCATEGORY",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetcategory/:assetcategoryid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Asset Category has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.assetcategory.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.assetcategory.tc.002]
     */
    READ_ONE_ASSETCATEGORY_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetcategory.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetcategory/:assetcategoryid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.assetcategory.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.assetcategory.tc.003]
     */
    READ_ONE_ASSETCATEGORY_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetcategory.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ ASSETCATEGORY",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetcategory/:assetcategoryid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Asset Category has been readone successfully"
        },
    }

}