/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read CostListItem service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readCostListItemServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.costlistitem.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.costlistitem.tc.001]
     */
    READ_COSTLISTITEM_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.costlistitem.read.v1",
            config: {
                "ID": 1,
                "Name": "READ COSTLISTITEM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/cost/v1/costlistitems",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Cost List Item has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.costlistitem.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.costlistitem.tc.002]
     */
    READ_COSTLISTITEM_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.costlistitem.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/cost/v1/costlistitems",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.costlistitem.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.costlistitem.tc.003]
     */
    READ_COSTLISTITEM_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.costlistitem.read.v1",
            config: {
                "ID": 2,
                "Name": "READ COSTLISTITEM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/cost/v1/costlistitems",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Cost List Item has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.costlistitem.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.costlistitem.tc.001]
     */
    READ_ONE_COSTLISTITEM_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.costlistitem.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ COSTLISTITEM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/cost/v1/costlistitem/:costlistitemid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Cost List Item has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.costlistitem.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.costlistitem.tc.002]
     */
    READ_ONE_COSTLISTITEM_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.costlistitem.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/cost/v1/costlistitem/:costlistitemid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.costlistitem.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.costlistitem.tc.003]
     */
    READ_ONE_COSTLISTITEM_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.costlistitem.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ COSTLISTITEM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/cost/v1/costlistitem/:costlistitemid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Cost List Item has been readone successfully"
        },
    }

}