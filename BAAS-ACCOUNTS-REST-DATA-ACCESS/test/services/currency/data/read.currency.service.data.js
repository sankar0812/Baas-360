/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read Currency service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readCurrencyServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.currency.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.currency.tc.001]
     */
    READ_CURRENCY_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.currency.read.v1",
            config: {
                "ID": 1,
                "Name": "READ CURRENCY",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/currency/v1/currencys",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Currency has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.currency.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.currency.tc.002]
     */
    READ_CURRENCY_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.currency.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/currency/v1/currencys",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.currency.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.currency.tc.003]
     */
    READ_CURRENCY_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.currency.read.v1",
            config: {
                "ID": 2,
                "Name": "READ CURRENCY",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/currency/v1/currencys",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Currency has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.currency.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.currency.tc.001]
     */
    READ_ONE_CURRENCY_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.currency.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ CURRENCY",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/currency/v1/currency/:currencyid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Currency has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.currency.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.currency.tc.002]
     */
    READ_ONE_CURRENCY_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.currency.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/currency/v1/currency/:currencyid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.currency.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.currency.tc.003]
     */
    READ_ONE_CURRENCY_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.currency.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ CURRENCY",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/currency/v1/currency/:currencyid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Currency has been readone successfully"
        },
    }

}