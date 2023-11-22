/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read ProposalVendorProduct service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readProposalVendorProductServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.proposalvendorproduct.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.proposalvendorproduct.tc.001]
     */
    READ_PROPOSALVENDORPRODUCT_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposalvendorproduct.read.v1",
            config: {
                "ID": 1,
                "Name": "READ PROPOSALVENDORPRODUCT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposalvendorproducts",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Proposal Vendor Product has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.proposalvendorproduct.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.proposalvendorproduct.tc.002]
     */
    READ_PROPOSALVENDORPRODUCT_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposalvendorproduct.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposalvendorproducts",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.proposalvendorproduct.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.proposalvendorproduct.tc.003]
     */
    READ_PROPOSALVENDORPRODUCT_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposalvendorproduct.read.v1",
            config: {
                "ID": 2,
                "Name": "READ PROPOSALVENDORPRODUCT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposalvendorproducts",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Proposal Vendor Product has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.proposalvendorproduct.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.proposalvendorproduct.tc.001]
     */
    READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposalvendorproduct.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ PROPOSALVENDORPRODUCT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposalvendorproduct/:proposalvendorproductid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Proposal Vendor Product has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.proposalvendorproduct.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.proposalvendorproduct.tc.002]
     */
    READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposalvendorproduct.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposalvendorproduct/:proposalvendorproductid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.proposalvendorproduct.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.proposalvendorproduct.tc.003]
     */
    READ_ONE_PROPOSALVENDORPRODUCT_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposalvendorproduct.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ PROPOSALVENDORPRODUCT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposalvendorproduct/:proposalvendorproductid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Proposal Vendor Product has been readone successfully"
        },
    }

}