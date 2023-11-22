/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read PriceListStore service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readPriceListStoreServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.priceliststore.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.priceliststore.tc.001]
     */
    READ_PRICELISTSTORE_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.priceliststore.read.v1",
            config: {
                "ID": 1,
                "Name": "READ PRICELISTSTORE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/priceliststores",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Price List Store has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.priceliststore.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.priceliststore.tc.002]
     */
    READ_PRICELISTSTORE_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.priceliststore.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/priceliststores",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.priceliststore.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.priceliststore.tc.003]
     */
    READ_PRICELISTSTORE_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.priceliststore.read.v1",
            config: {
                "ID": 2,
                "Name": "READ PRICELISTSTORE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/priceliststores",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Price List Store has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.priceliststore.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.priceliststore.tc.001]
     */
    READ_ONE_PRICELISTSTORE_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.priceliststore.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ PRICELISTSTORE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/priceliststore/:priceliststoreid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Price List Store has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.priceliststore.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.priceliststore.tc.002]
     */
    READ_ONE_PRICELISTSTORE_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.priceliststore.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/priceliststore/:priceliststoreid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.priceliststore.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.priceliststore.tc.003]
     */
    READ_ONE_PRICELISTSTORE_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.priceliststore.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ PRICELISTSTORE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/priceliststore/:priceliststoreid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Price List Store has been readone successfully"
        },
    }

}