/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read VendorStatement service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readVendorStatementServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorstatement.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorstatement.tc.001]
     */
    READ_VENDORSTATEMENT_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorstatement.read.v1",
            config: {
                "ID": 1,
                "Name": "READ VENDORSTATEMENT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorstatements",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Vendor Statement has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorstatement.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorstatement.tc.002]
     */
    READ_VENDORSTATEMENT_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorstatement.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorstatements",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorstatement.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorstatement.tc.003]
     */
    READ_VENDORSTATEMENT_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorstatement.read.v1",
            config: {
                "ID": 2,
                "Name": "READ VENDORSTATEMENT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorstatements",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Vendor Statement has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorstatement.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorstatement.tc.001]
     */
    READ_ONE_VENDORSTATEMENT_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorstatement.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ VENDORSTATEMENT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorstatement/:vendorstatementid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Vendor Statement has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorstatement.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorstatement.tc.002]
     */
    READ_ONE_VENDORSTATEMENT_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorstatement.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorstatement/:vendorstatementid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.vendorstatement.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.vendorstatement.tc.003]
     */
    READ_ONE_VENDORSTATEMENT_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendorstatement.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ VENDORSTATEMENT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/vendor/v1/vendorstatement/:vendorstatementid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Vendor Statement has been readone successfully"
        },
    }

}