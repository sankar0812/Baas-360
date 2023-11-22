/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read ProductBundle service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readProductBundleServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.productbundle.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.productbundle.tc.001]
     */
    READ_PRODUCTBUNDLE_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productbundle.read.v1",
            config: {
                "ID": 1,
                "Name": "READ PRODUCTBUNDLE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productbundles",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Product Bundle has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.productbundle.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.productbundle.tc.002]
     */
    READ_PRODUCTBUNDLE_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productbundle.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productbundles",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.productbundle.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.productbundle.tc.003]
     */
    READ_PRODUCTBUNDLE_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productbundle.read.v1",
            config: {
                "ID": 2,
                "Name": "READ PRODUCTBUNDLE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productbundles",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Product Bundle has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.productbundle.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.productbundle.tc.001]
     */
    READ_ONE_PRODUCTBUNDLE_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productbundle.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ PRODUCTBUNDLE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productbundle/:productbundleid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Product Bundle has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.productbundle.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.productbundle.tc.002]
     */
    READ_ONE_PRODUCTBUNDLE_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productbundle.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productbundle/:productbundleid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.productbundle.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.productbundle.tc.003]
     */
    READ_ONE_PRODUCTBUNDLE_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productbundle.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ PRODUCTBUNDLE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productbundle/:productbundleid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Product Bundle has been readone successfully"
        },
    }

}