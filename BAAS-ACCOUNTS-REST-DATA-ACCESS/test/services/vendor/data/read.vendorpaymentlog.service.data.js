/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read VendorPaymentLog service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readVendorPaymentLogServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorpaymentlog.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorpaymentlog.tc.001]
     */
    READ_VENDORPAYMENTLOG_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorpaymentlog.read.v1",
            config: {
                "ID": 1,
                "Name": "READ VENDORPAYMENTLOG",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorpaymentlogs",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Vendor Payment Log has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorpaymentlog.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorpaymentlog.tc.002]
     */
    READ_VENDORPAYMENTLOG_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorpaymentlog.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorpaymentlogs",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorpaymentlog.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorpaymentlog.tc.003]
     */
    READ_VENDORPAYMENTLOG_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorpaymentlog.read.v1",
            config: {
                "ID": 2,
                "Name": "READ VENDORPAYMENTLOG",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorpaymentlogs",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Vendor Payment Log has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorpaymentlog.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorpaymentlog.tc.001]
     */
    READ_ONE_VENDORPAYMENTLOG_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorpaymentlog.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ VENDORPAYMENTLOG",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorpaymentlog/:vendorpaymentlogid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Vendor Payment Log has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorpaymentlog.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorpaymentlog.tc.002]
     */
    READ_ONE_VENDORPAYMENTLOG_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorpaymentlog.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorpaymentlog/:vendorpaymentlogid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorpaymentlog.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorpaymentlog.tc.003]
     */
    READ_ONE_VENDORPAYMENTLOG_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorpaymentlog.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ VENDORPAYMENTLOG",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorpaymentlog/:vendorpaymentlogid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Vendor Payment Log has been readone successfully"
        },
    }

}