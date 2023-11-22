/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read VendorApprovalItem service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readVendorApprovalItemServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorapprovalitem.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorapprovalitem.tc.001]
     */
    READ_VENDORAPPROVALITEM_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorapprovalitem.read.v1",
            config: {
                "ID": 1,
                "Name": "READ VENDORAPPROVALITEM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorapprovalitems",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Vendor Approval Item has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorapprovalitem.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorapprovalitem.tc.002]
     */
    READ_VENDORAPPROVALITEM_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorapprovalitem.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorapprovalitems",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorapprovalitem.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorapprovalitem.tc.003]
     */
    READ_VENDORAPPROVALITEM_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorapprovalitem.read.v1",
            config: {
                "ID": 2,
                "Name": "READ VENDORAPPROVALITEM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorapprovalitems",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Vendor Approval Item has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorapprovalitem.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorapprovalitem.tc.001]
     */
    READ_ONE_VENDORAPPROVALITEM_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorapprovalitem.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ VENDORAPPROVALITEM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorapprovalitem/:vendorapprovalitemid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Vendor Approval Item has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorapprovalitem.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorapprovalitem.tc.002]
     */
    READ_ONE_VENDORAPPROVALITEM_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorapprovalitem.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorapprovalitem/:vendorapprovalitemid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorapprovalitem.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorapprovalitem.tc.003]
     */
    READ_ONE_VENDORAPPROVALITEM_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorapprovalitem.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ VENDORAPPROVALITEM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorapprovalitem/:vendorapprovalitemid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Vendor Approval Item has been readone successfully"
        },
    }

}