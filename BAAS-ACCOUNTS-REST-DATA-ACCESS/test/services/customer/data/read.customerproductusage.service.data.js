/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read CustomerProductUsage service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readCustomerProductUsageServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.customerproductusage.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.customerproductusage.tc.001]
     */
    READ_CUSTOMERPRODUCTUSAGE_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerproductusage.read.v1",
            config: {
                "ID": 1,
                "Name": "READ CUSTOMERPRODUCTUSAGE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerproductusages",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Customer Product Usage has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.customerproductusage.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.customerproductusage.tc.002]
     */
    READ_CUSTOMERPRODUCTUSAGE_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerproductusage.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerproductusages",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.customerproductusage.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.customerproductusage.tc.003]
     */
    READ_CUSTOMERPRODUCTUSAGE_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerproductusage.read.v1",
            config: {
                "ID": 2,
                "Name": "READ CUSTOMERPRODUCTUSAGE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerproductusages",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Customer Product Usage has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.customerproductusage.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.customerproductusage.tc.001]
     */
    READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerproductusage.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ CUSTOMERPRODUCTUSAGE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerproductusage/:customerproductusageid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Customer Product Usage has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.customerproductusage.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.customerproductusage.tc.002]
     */
    READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerproductusage.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerproductusage/:customerproductusageid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.customerproductusage.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.customerproductusage.tc.003]
     */
    READ_ONE_CUSTOMERPRODUCTUSAGE_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerproductusage.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ CUSTOMERPRODUCTUSAGE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerproductusage/:customerproductusageid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Customer Product Usage has been readone successfully"
        },
    }

}