/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read PaymentStatus service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readPaymentStatusServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.paymentstatus.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.paymentstatus.tc.001]
     */
    READ_PAYMENTSTATUS_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.paymentstatus.read.v1",
            config: {
                "ID": 1,
                "Name": "READ PAYMENTSTATUS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/payment/v1/paymentstatuses",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Payment Status has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.paymentstatus.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.paymentstatus.tc.002]
     */
    READ_PAYMENTSTATUS_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.paymentstatus.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/payment/v1/paymentstatuses",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.paymentstatus.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.paymentstatus.tc.003]
     */
    READ_PAYMENTSTATUS_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.paymentstatus.read.v1",
            config: {
                "ID": 2,
                "Name": "READ PAYMENTSTATUS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/payment/v1/paymentstatuses",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Payment Status has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.paymentstatus.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.paymentstatus.tc.001]
     */
    READ_ONE_PAYMENTSTATUS_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.paymentstatus.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ PAYMENTSTATUS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/payment/v1/paymentstatus/:paymentstatusid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Payment Status has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.paymentstatus.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.paymentstatus.tc.002]
     */
    READ_ONE_PAYMENTSTATUS_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.paymentstatus.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/payment/v1/paymentstatus/:paymentstatusid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.paymentstatus.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.paymentstatus.tc.003]
     */
    READ_ONE_PAYMENTSTATUS_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.paymentstatus.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ PAYMENTSTATUS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/payment/v1/paymentstatus/:paymentstatusid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Payment Status has been readone successfully"
        },
    }

}