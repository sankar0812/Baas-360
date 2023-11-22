/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read Brand service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readBrandServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.brand.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.brand.tc.001]
     */
    READ_BRAND_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.brand.read.v1",
            config: {
                "ID": 1,
                "Name": "READ BRAND",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/brand/v1/brands",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Brand has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.brand.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.brand.tc.002]
     */
    READ_BRAND_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.brand.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/brand/v1/brands",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.brand.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.brand.tc.003]
     */
    READ_BRAND_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.brand.read.v1",
            config: {
                "ID": 2,
                "Name": "READ BRAND",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/brand/v1/brands",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Brand has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.brand.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.brand.tc.001]
     */
    READ_ONE_BRAND_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.brand.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ BRAND",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/brand/v1/brand/:brandid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Brand has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.brand.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.brand.tc.002]
     */
    READ_ONE_BRAND_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.brand.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/brand/v1/brand/:brandid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.brand.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.brand.tc.003]
     */
    READ_ONE_BRAND_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.brand.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ BRAND",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/brand/v1/brand/:brandid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Brand has been readone successfully"
        },
    }

}