/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read PriceListStatus service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readPriceListStatusServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.priceliststatus.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.priceliststatus.tc.001]
     */
    READ_PRICELISTSTATUS_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.priceliststatus.read.v1",
            config: {
                "ID": 1,
                "Name": "READ PRICELISTSTATUS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/priceliststatuses",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Price List Status has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.priceliststatus.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.priceliststatus.tc.002]
     */
    READ_PRICELISTSTATUS_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.priceliststatus.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/priceliststatuses",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.priceliststatus.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.priceliststatus.tc.003]
     */
    READ_PRICELISTSTATUS_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.priceliststatus.read.v1",
            config: {
                "ID": 2,
                "Name": "READ PRICELISTSTATUS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/priceliststatuses",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Price List Status has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.priceliststatus.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.priceliststatus.tc.001]
     */
    READ_ONE_PRICELISTSTATUS_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.priceliststatus.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ PRICELISTSTATUS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/priceliststatus/:priceliststatusid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Price List Status has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.priceliststatus.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.priceliststatus.tc.002]
     */
    READ_ONE_PRICELISTSTATUS_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.priceliststatus.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/priceliststatus/:priceliststatusid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.priceliststatus.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.priceliststatus.tc.003]
     */
    READ_ONE_PRICELISTSTATUS_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.priceliststatus.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ PRICELISTSTATUS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/priceliststatus/:priceliststatusid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Price List Status has been readone successfully"
        },
    }

}