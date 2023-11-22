/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read PriceListCustomerAccount service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readPriceListCustomerAccountServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.pricelistcustomeraccount.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.pricelistcustomeraccount.tc.001]
     */
    READ_PRICELISTCUSTOMERACCOUNT_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.pricelistcustomeraccount.read.v1",
            config: {
                "ID": 1,
                "Name": "READ PRICELISTCUSTOMERACCOUNT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelistcustomeraccounts",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Price List Customer Account has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.pricelistcustomeraccount.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.pricelistcustomeraccount.tc.002]
     */
    READ_PRICELISTCUSTOMERACCOUNT_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.pricelistcustomeraccount.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelistcustomeraccounts",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.pricelistcustomeraccount.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.pricelistcustomeraccount.tc.003]
     */
    READ_PRICELISTCUSTOMERACCOUNT_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.pricelistcustomeraccount.read.v1",
            config: {
                "ID": 2,
                "Name": "READ PRICELISTCUSTOMERACCOUNT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelistcustomeraccounts",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Price List Customer Account has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.pricelistcustomeraccount.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.pricelistcustomeraccount.tc.001]
     */
    READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.pricelistcustomeraccount.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ PRICELISTCUSTOMERACCOUNT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelistcustomeraccount/:pricelistcustomeraccountid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Price List Customer Account has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.pricelistcustomeraccount.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.pricelistcustomeraccount.tc.002]
     */
    READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.pricelistcustomeraccount.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelistcustomeraccount/:pricelistcustomeraccountid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.pricelistcustomeraccount.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.pricelistcustomeraccount.tc.003]
     */
    READ_ONE_PRICELISTCUSTOMERACCOUNT_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.pricelistcustomeraccount.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ PRICELISTCUSTOMERACCOUNT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelistcustomeraccount/:pricelistcustomeraccountid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Price List Customer Account has been readone successfully"
        },
    }

}