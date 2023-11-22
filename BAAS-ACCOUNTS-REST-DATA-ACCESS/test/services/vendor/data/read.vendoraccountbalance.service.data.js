/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read VendorAccountBalance service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readVendorAccountBalanceServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendoraccountbalance.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.vendoraccountbalance.tc.001]
     */
    READ_VENDORACCOUNTBALANCE_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendoraccountbalance.read.v1",
            config: {
                "ID": 1,
                "Name": "READ VENDORACCOUNTBALANCE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendoraccountbalances",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Vendor Account Balance has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendoraccountbalance.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.vendoraccountbalance.tc.002]
     */
    READ_VENDORACCOUNTBALANCE_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendoraccountbalance.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendoraccountbalances",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.vendoraccountbalance.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.vendoraccountbalance.tc.003]
     */
    READ_VENDORACCOUNTBALANCE_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendoraccountbalance.read.v1",
            config: {
                "ID": 2,
                "Name": "READ VENDORACCOUNTBALANCE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendoraccountbalances",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Vendor Account Balance has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendoraccountbalance.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.vendoraccountbalance.tc.001]
     */
    READ_ONE_VENDORACCOUNTBALANCE_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendoraccountbalance.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ VENDORACCOUNTBALANCE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendoraccountbalance/:vendoraccountbalanceid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Vendor Account Balance has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendoraccountbalance.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.vendoraccountbalance.tc.002]
     */
    READ_ONE_VENDORACCOUNTBALANCE_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendoraccountbalance.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendoraccountbalance/:vendoraccountbalanceid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.vendoraccountbalance.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.vendoraccountbalance.tc.003]
     */
    READ_ONE_VENDORACCOUNTBALANCE_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendoraccountbalance.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ VENDORACCOUNTBALANCE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendoraccountbalance/:vendoraccountbalanceid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Vendor Account Balance has been readone successfully"
        },
    }

}