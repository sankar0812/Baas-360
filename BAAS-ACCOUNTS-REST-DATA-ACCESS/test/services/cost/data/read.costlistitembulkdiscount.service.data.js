/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read CostListItemBulkDiscount service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readCostListItemBulkDiscountServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.costlistitembulkdiscount.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.costlistitembulkdiscount.tc.001]
     */
    READ_COSTLISTITEMBULKDISCOUNT_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.costlistitembulkdiscount.read.v1",
            config: {
                "ID": 1,
                "Name": "READ COSTLISTITEMBULKDISCOUNT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/cost/v1/costlistitembulkdiscounts",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Cost List Item Bulk Discount has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.costlistitembulkdiscount.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.costlistitembulkdiscount.tc.002]
     */
    READ_COSTLISTITEMBULKDISCOUNT_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.costlistitembulkdiscount.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/cost/v1/costlistitembulkdiscounts",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.costlistitembulkdiscount.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.costlistitembulkdiscount.tc.003]
     */
    READ_COSTLISTITEMBULKDISCOUNT_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.costlistitembulkdiscount.read.v1",
            config: {
                "ID": 2,
                "Name": "READ COSTLISTITEMBULKDISCOUNT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/cost/v1/costlistitembulkdiscounts",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Cost List Item Bulk Discount has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.costlistitembulkdiscount.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.costlistitembulkdiscount.tc.001]
     */
    READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.costlistitembulkdiscount.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ COSTLISTITEMBULKDISCOUNT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/cost/v1/costlistitembulkdiscount/:costlistitembulkdiscountid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Cost List Item Bulk Discount has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.costlistitembulkdiscount.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.costlistitembulkdiscount.tc.002]
     */
    READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.costlistitembulkdiscount.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/cost/v1/costlistitembulkdiscount/:costlistitembulkdiscountid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.costlistitembulkdiscount.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.costlistitembulkdiscount.tc.003]
     */
    READ_ONE_COSTLISTITEMBULKDISCOUNT_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.costlistitembulkdiscount.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ COSTLISTITEMBULKDISCOUNT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/cost/v1/costlistitembulkdiscount/:costlistitembulkdiscountid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Cost List Item Bulk Discount has been readone successfully"
        },
    }

}