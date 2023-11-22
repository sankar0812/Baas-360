/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read InvoiceItem service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readInvoiceItemServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.invoiceitem.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.invoiceitem.tc.001]
     */
    READ_INVOICEITEM_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.invoiceitem.read.v1",
            config: {
                "ID": 1,
                "Name": "READ INVOICEITEM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/invoice/v1/invoiceitems",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Invoice Item has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.invoiceitem.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.invoiceitem.tc.002]
     */
    READ_INVOICEITEM_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.invoiceitem.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/invoice/v1/invoiceitems",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.invoiceitem.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.invoiceitem.tc.003]
     */
    READ_INVOICEITEM_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.invoiceitem.read.v1",
            config: {
                "ID": 2,
                "Name": "READ INVOICEITEM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/invoice/v1/invoiceitems",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Invoice Item has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.invoiceitem.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.invoiceitem.tc.001]
     */
    READ_ONE_INVOICEITEM_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.invoiceitem.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ INVOICEITEM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/invoice/v1/invoiceitem/:invoiceitemid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Invoice Item has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.invoiceitem.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.invoiceitem.tc.002]
     */
    READ_ONE_INVOICEITEM_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.invoiceitem.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/invoice/v1/invoiceitem/:invoiceitemid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.invoiceitem.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.invoiceitem.tc.003]
     */
    READ_ONE_INVOICEITEM_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.invoiceitem.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ INVOICEITEM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/invoice/v1/invoiceitem/:invoiceitemid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Invoice Item has been readone successfully"
        },
    }

}