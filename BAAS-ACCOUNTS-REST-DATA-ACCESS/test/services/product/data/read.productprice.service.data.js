/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read ProductPrice service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readProductPriceServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.productprice.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.productprice.tc.001]
     */
    READ_PRODUCTPRICE_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productprice.read.v1",
            config: {
                "ID": 1,
                "Name": "READ PRODUCTPRICE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productprices",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Product Price has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.productprice.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.productprice.tc.002]
     */
    READ_PRODUCTPRICE_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productprice.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productprices",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.productprice.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.productprice.tc.003]
     */
    READ_PRODUCTPRICE_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productprice.read.v1",
            config: {
                "ID": 2,
                "Name": "READ PRODUCTPRICE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productprices",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Product Price has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.productprice.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.productprice.tc.001]
     */
    READ_ONE_PRODUCTPRICE_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productprice.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ PRODUCTPRICE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productprice/:productpriceid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Product Price has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.productprice.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.productprice.tc.002]
     */
    READ_ONE_PRODUCTPRICE_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productprice.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productprice/:productpriceid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.productprice.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.productprice.tc.003]
     */
    READ_ONE_PRODUCTPRICE_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productprice.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ PRODUCTPRICE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productprice/:productpriceid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Product Price has been readone successfully"
        },
    }

}