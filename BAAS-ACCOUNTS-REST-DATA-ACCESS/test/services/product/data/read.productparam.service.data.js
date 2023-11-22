/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read ProductParam service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readProductParamServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.productparam.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.productparam.tc.001]
     */
    READ_PRODUCTPARAM_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productparam.read.v1",
            config: {
                "ID": 1,
                "Name": "READ PRODUCTPARAM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productparams",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Product Param has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.productparam.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.productparam.tc.002]
     */
    READ_PRODUCTPARAM_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productparam.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productparams",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.productparam.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.productparam.tc.003]
     */
    READ_PRODUCTPARAM_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productparam.read.v1",
            config: {
                "ID": 2,
                "Name": "READ PRODUCTPARAM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productparams",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Product Param has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.productparam.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.productparam.tc.001]
     */
    READ_ONE_PRODUCTPARAM_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productparam.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ PRODUCTPARAM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productparam/:productparamid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Product Param has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.productparam.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.productparam.tc.002]
     */
    READ_ONE_PRODUCTPARAM_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productparam.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productparam/:productparamid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.productparam.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.productparam.tc.003]
     */
    READ_ONE_PRODUCTPARAM_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productparam.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ PRODUCTPARAM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productparam/:productparamid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Product Param has been readone successfully"
        },
    }

}