/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read ProposalItem service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readProposalItemServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.proposalitem.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.proposalitem.tc.001]
     */
    READ_PROPOSALITEM_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposalitem.read.v1",
            config: {
                "ID": 1,
                "Name": "READ PROPOSALITEM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposalitems",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Proposal Item has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.proposalitem.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.proposalitem.tc.002]
     */
    READ_PROPOSALITEM_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposalitem.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposalitems",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.proposalitem.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.proposalitem.tc.003]
     */
    READ_PROPOSALITEM_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposalitem.read.v1",
            config: {
                "ID": 2,
                "Name": "READ PROPOSALITEM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposalitems",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Proposal Item has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.proposalitem.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.proposalitem.tc.001]
     */
    READ_ONE_PROPOSALITEM_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposalitem.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ PROPOSALITEM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposalitem/:proposalitemid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Proposal Item has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.proposalitem.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.proposalitem.tc.002]
     */
    READ_ONE_PROPOSALITEM_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposalitem.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposalitem/:proposalitemid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.proposalitem.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.proposalitem.tc.003]
     */
    READ_ONE_PROPOSALITEM_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposalitem.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ PROPOSALITEM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposalitem/:proposalitemid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Proposal Item has been readone successfully"
        },
    }

}