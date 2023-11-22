/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read Category service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readCategoryServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.category.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.category.tc.001]
     */
    READ_CATEGORY_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.category.read.v1",
            config: {
                "ID": 1,
                "Name": "READ CATEGORY",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/category/v1/categorys",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Category has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.category.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.category.tc.002]
     */
    READ_CATEGORY_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.category.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/category/v1/categorys",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.category.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.category.tc.003]
     */
    READ_CATEGORY_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.category.read.v1",
            config: {
                "ID": 2,
                "Name": "READ CATEGORY",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/category/v1/categorys",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Category has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.category.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.category.tc.001]
     */
    READ_ONE_CATEGORY_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.category.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ CATEGORY",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/category/v1/category/:categoryid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Category has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.category.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.category.tc.002]
     */
    READ_ONE_CATEGORY_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.category.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/category/v1/category/:categoryid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.category.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.category.tc.003]
     */
    READ_ONE_CATEGORY_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.category.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ CATEGORY",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/category/v1/category/:categoryid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Category has been readone successfully"
        },
    }

}