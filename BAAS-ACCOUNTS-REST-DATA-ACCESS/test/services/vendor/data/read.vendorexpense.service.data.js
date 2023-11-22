/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read VendorExpense service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readVendorExpenseServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorexpense.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorexpense.tc.001]
     */
    READ_VENDOREXPENSE_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorexpense.read.v1",
            config: {
                "ID": 1,
                "Name": "READ VENDOREXPENSE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorexpenses",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Vendor Expense has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorexpense.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorexpense.tc.002]
     */
    READ_VENDOREXPENSE_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorexpense.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorexpenses",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorexpense.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorexpense.tc.003]
     */
    READ_VENDOREXPENSE_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorexpense.read.v1",
            config: {
                "ID": 2,
                "Name": "READ VENDOREXPENSE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorexpenses",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Vendor Expense has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorexpense.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorexpense.tc.001]
     */
    READ_ONE_VENDOREXPENSE_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorexpense.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ VENDOREXPENSE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorexpense/:vendorexpenseid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Vendor Expense has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorexpense.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorexpense.tc.002]
     */
    READ_ONE_VENDOREXPENSE_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorexpense.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorexpense/:vendorexpenseid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorexpense.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorexpense.tc.003]
     */
    READ_ONE_VENDOREXPENSE_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorexpense.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ VENDOREXPENSE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorexpense/:vendorexpenseid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Vendor Expense has been readone successfully"
        },
    }

}