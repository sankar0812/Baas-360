/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read CustomerStatement service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readCustomerStatementServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.customerstatement.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.customerstatement.tc.001]
     */
    READ_CUSTOMERSTATEMENT_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerstatement.read.v1",
            config: {
                "ID": 1,
                "Name": "READ CUSTOMERSTATEMENT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerstatements",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Customer Statement has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.customerstatement.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.customerstatement.tc.002]
     */
    READ_CUSTOMERSTATEMENT_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerstatement.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerstatements",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.customerstatement.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.customerstatement.tc.003]
     */
    READ_CUSTOMERSTATEMENT_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerstatement.read.v1",
            config: {
                "ID": 2,
                "Name": "READ CUSTOMERSTATEMENT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerstatements",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Customer Statement has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.customerstatement.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.customerstatement.tc.001]
     */
    READ_ONE_CUSTOMERSTATEMENT_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerstatement.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ CUSTOMERSTATEMENT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerstatement/:customerstatementid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Customer Statement has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.customerstatement.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.customerstatement.tc.002]
     */
    READ_ONE_CUSTOMERSTATEMENT_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerstatement.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerstatement/:customerstatementid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.customerstatement.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.customerstatement.tc.003]
     */
    READ_ONE_CUSTOMERSTATEMENT_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerstatement.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ CUSTOMERSTATEMENT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerstatement/:customerstatementid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Customer Statement has been readone successfully"
        },
    }

}