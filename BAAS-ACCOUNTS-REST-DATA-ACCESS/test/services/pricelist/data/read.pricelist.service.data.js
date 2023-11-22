/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read PriceList service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readPriceListServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.pricelist.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.pricelist.tc.001]
     */
    READ_PRICELIST_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.pricelist.read.v1",
            config: {
                "ID": 1,
                "Name": "READ PRICELIST",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelists",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Price List has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.pricelist.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.pricelist.tc.002]
     */
    READ_PRICELIST_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.pricelist.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelists",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.pricelist.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.pricelist.tc.003]
     */
    READ_PRICELIST_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.pricelist.read.v1",
            config: {
                "ID": 2,
                "Name": "READ PRICELIST",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelists",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Price List has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.pricelist.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.pricelist.tc.001]
     */
    READ_ONE_PRICELIST_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.pricelist.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ PRICELIST",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelist/:pricelistid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Price List has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.pricelist.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.pricelist.tc.002]
     */
    READ_ONE_PRICELIST_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.pricelist.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelist/:pricelistid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.pricelist.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.pricelist.tc.003]
     */
    READ_ONE_PRICELIST_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.pricelist.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ PRICELIST",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelist/:pricelistid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Price List has been readone successfully"
        },
    }

}