/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read CustomerProductUsageLog service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readCustomerProductUsageLogServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.customerproductusagelog.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.customerproductusagelog.tc.001]
     */
    READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerproductusagelog.read.v1",
            config: {
                "ID": 1,
                "Name": "READ CUSTOMERPRODUCTUSAGELOG",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerproductusagelogs",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Customer Product Usage Log has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.customerproductusagelog.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.customerproductusagelog.tc.002]
     */
    READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerproductusagelog.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerproductusagelogs",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.customerproductusagelog.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.customerproductusagelog.tc.003]
     */
    READ_CUSTOMERPRODUCTUSAGELOG_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerproductusagelog.read.v1",
            config: {
                "ID": 2,
                "Name": "READ CUSTOMERPRODUCTUSAGELOG",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerproductusagelogs",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Customer Product Usage Log has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.customerproductusagelog.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.customerproductusagelog.tc.001]
     */
    READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerproductusagelog.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ CUSTOMERPRODUCTUSAGELOG",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerproductusagelog/:customerproductusagelogid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Customer Product Usage Log has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.customerproductusagelog.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.customerproductusagelog.tc.002]
     */
    READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerproductusagelog.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerproductusagelog/:customerproductusagelogid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.customerproductusagelog.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.customerproductusagelog.tc.003]
     */
    READ_ONE_CUSTOMERPRODUCTUSAGELOG_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerproductusagelog.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ CUSTOMERPRODUCTUSAGELOG",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerproductusagelog/:customerproductusagelogid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Customer Product Usage Log has been readone successfully"
        },
    }

}