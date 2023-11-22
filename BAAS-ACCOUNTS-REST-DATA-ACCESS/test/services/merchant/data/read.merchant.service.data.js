/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read Merchant service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readMerchantServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.merchant.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.merchant.tc.001]
     */
    READ_MERCHANT_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.merchant.read.v1",
            config: {
                "ID": 1,
                "Name": "READ MERCHANT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/merchant/v1/merchants",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Merchant has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.merchant.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.merchant.tc.002]
     */
    READ_MERCHANT_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.merchant.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/merchant/v1/merchants",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.merchant.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.merchant.tc.003]
     */
    READ_MERCHANT_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.merchant.read.v1",
            config: {
                "ID": 2,
                "Name": "READ MERCHANT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/merchant/v1/merchants",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Merchant has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.merchant.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.merchant.tc.001]
     */
    READ_ONE_MERCHANT_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.merchant.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ MERCHANT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/merchant/v1/merchant/:merchantid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Merchant has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.merchant.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.merchant.tc.002]
     */
    READ_ONE_MERCHANT_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.merchant.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/merchant/v1/merchant/:merchantid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.merchant.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.merchant.tc.003]
     */
    READ_ONE_MERCHANT_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.merchant.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ MERCHANT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/merchant/v1/merchant/:merchantid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Merchant has been readone successfully"
        },
    }

}