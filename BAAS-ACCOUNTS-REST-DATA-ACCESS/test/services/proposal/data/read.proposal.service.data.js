/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read Proposal service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readProposalServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.proposal.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.proposal.tc.001]
     */
    READ_PROPOSAL_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposal.read.v1",
            config: {
                "ID": 1,
                "Name": "READ PROPOSAL",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposals",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Proposal has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.proposal.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.proposal.tc.002]
     */
    READ_PROPOSAL_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposal.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposals",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.proposal.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.proposal.tc.003]
     */
    READ_PROPOSAL_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposal.read.v1",
            config: {
                "ID": 2,
                "Name": "READ PROPOSAL",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposals",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Proposal has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.proposal.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.proposal.tc.001]
     */
    READ_ONE_PROPOSAL_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposal.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ PROPOSAL",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposal/:proposalid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Proposal has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.proposal.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.proposal.tc.002]
     */
    READ_ONE_PROPOSAL_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposal.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposal/:proposalid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.proposal.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.proposal.tc.003]
     */
    READ_ONE_PROPOSAL_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposal.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ PROPOSAL",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposal/:proposalid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Proposal has been readone successfully"
        },
    }

}