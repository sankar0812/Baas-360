/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read ProductImage service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readProductImageServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.productimage.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.productimage.tc.001]
     */
    READ_PRODUCTIMAGE_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productimage.read.v1",
            config: {
                "ID": 1,
                "Name": "READ PRODUCTIMAGE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productimages",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Product Image has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.productimage.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.productimage.tc.002]
     */
    READ_PRODUCTIMAGE_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productimage.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productimages",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.productimage.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.productimage.tc.003]
     */
    READ_PRODUCTIMAGE_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productimage.read.v1",
            config: {
                "ID": 2,
                "Name": "READ PRODUCTIMAGE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productimages",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Product Image has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.productimage.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.productimage.tc.001]
     */
    READ_ONE_PRODUCTIMAGE_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productimage.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ PRODUCTIMAGE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productimage/:productimageid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Product Image has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.productimage.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.productimage.tc.002]
     */
    READ_ONE_PRODUCTIMAGE_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productimage.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productimage/:productimageid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.productimage.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.productimage.tc.003]
     */
    READ_ONE_PRODUCTIMAGE_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productimage.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ PRODUCTIMAGE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productimage/:productimageid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Product Image has been readone successfully"
        },
    }

}