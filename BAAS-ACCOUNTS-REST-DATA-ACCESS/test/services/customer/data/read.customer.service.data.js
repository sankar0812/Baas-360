/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read Customer service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readCustomerServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.customer.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.customer.tc.001]
     */
    READ_CUSTOMER_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customer.read.v1",
            config: {
                "ID": 1,
                "Name": "READ CUSTOMER",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customers",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Customer has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.customer.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.customer.tc.002]
     */
    READ_CUSTOMER_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customer.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customers",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.customer.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.customer.tc.003]
     */
    READ_CUSTOMER_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customer.read.v1",
            config: {
                "ID": 2,
                "Name": "READ CUSTOMER",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customers",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Customer has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.customer.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.customer.tc.001]
     */
    READ_ONE_CUSTOMER_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customer.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ CUSTOMER",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customer/:customerid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Customer has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.customer.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.customer.tc.002]
     */
    READ_ONE_CUSTOMER_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customer.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customer/:customerid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.customer.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.customer.tc.003]
     */
    READ_ONE_CUSTOMER_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customer.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ CUSTOMER",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customer/:customerid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Customer has been readone successfully"
        },
    }

}