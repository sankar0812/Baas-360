/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read VendorTenantContact service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readVendorTenantContactServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendortenantcontact.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.vendortenantcontact.tc.001]
     */
    READ_VENDORTENANTCONTACT_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendortenantcontact.read.v1",
            config: {
                "ID": 1,
                "Name": "READ VENDORTENANTCONTACT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/contact/v1/vendortenantcontacts",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Vendor Tenant Contact has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendortenantcontact.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.vendortenantcontact.tc.002]
     */
    READ_VENDORTENANTCONTACT_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendortenantcontact.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/contact/v1/vendortenantcontacts",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.vendortenantcontact.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.vendortenantcontact.tc.003]
     */
    READ_VENDORTENANTCONTACT_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendortenantcontact.read.v1",
            config: {
                "ID": 2,
                "Name": "READ VENDORTENANTCONTACT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/contact/v1/vendortenantcontacts",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Vendor Tenant Contact has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendortenantcontact.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.vendortenantcontact.tc.001]
     */
    READ_ONE_VENDORTENANTCONTACT_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendortenantcontact.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ VENDORTENANTCONTACT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/contact/v1/vendortenantcontact/:vendortenantcontactid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Vendor Tenant Contact has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.vendortenantcontact.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.vendortenantcontact.tc.002]
     */
    READ_ONE_VENDORTENANTCONTACT_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendortenantcontact.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/contact/v1/vendortenantcontact/:vendortenantcontactid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.vendortenantcontact.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.vendortenantcontact.tc.003]
     */
    READ_ONE_VENDORTENANTCONTACT_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.vendortenantcontact.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ VENDORTENANTCONTACT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/contact/v1/vendortenantcontact/:vendortenantcontactid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Vendor Tenant Contact has been readone successfully"
        },
    }

}