/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read VendorCategory service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readVendorCategoryServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorcategory.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorcategory.tc.001]
     */
    READ_VENDORCATEGORY_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorcategory.read.v1",
            config: {
                "ID": 1,
                "Name": "READ VENDORCATEGORY",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorcategories",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Vendor Category has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorcategory.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorcategory.tc.002]
     */
    READ_VENDORCATEGORY_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorcategory.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorcategories",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorcategory.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorcategory.tc.003]
     */
    READ_VENDORCATEGORY_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorcategory.read.v1",
            config: {
                "ID": 2,
                "Name": "READ VENDORCATEGORY",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorcategories",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Vendor Category has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorcategory.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorcategory.tc.001]
     */
    READ_ONE_VENDORCATEGORY_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorcategory.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ VENDORCATEGORY",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorcategory/:vendorcategoryid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Vendor Category has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorcategory.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorcategory.tc.002]
     */
    READ_ONE_VENDORCATEGORY_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorcategory.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorcategory/:vendorcategoryid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorcategory.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorcategory.tc.003]
     */
    READ_ONE_VENDORCATEGORY_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorcategory.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ VENDORCATEGORY",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorcategory/:vendorcategoryid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Vendor Category has been readone successfully"
        },
    }

}