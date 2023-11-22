/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read ProductPackage service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readProductPackageServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.productpackage.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.productpackage.tc.001]
     */
    READ_PRODUCTPACKAGE_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productpackage.read.v1",
            config: {
                "ID": 1,
                "Name": "READ PRODUCTPACKAGE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productpackages",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Product Package has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.productpackage.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.productpackage.tc.002]
     */
    READ_PRODUCTPACKAGE_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productpackage.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productpackages",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.productpackage.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.productpackage.tc.003]
     */
    READ_PRODUCTPACKAGE_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productpackage.read.v1",
            config: {
                "ID": 2,
                "Name": "READ PRODUCTPACKAGE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productpackages",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Product Package has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.productpackage.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.productpackage.tc.001]
     */
    READ_ONE_PRODUCTPACKAGE_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productpackage.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ PRODUCTPACKAGE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productpackage/:productpackageid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Product Package has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.productpackage.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.productpackage.tc.002]
     */
    READ_ONE_PRODUCTPACKAGE_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productpackage.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productpackage/:productpackageid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.productpackage.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.productpackage.tc.003]
     */
    READ_ONE_PRODUCTPACKAGE_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productpackage.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ PRODUCTPACKAGE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productpackage/:productpackageid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Product Package has been readone successfully"
        },
    }

}