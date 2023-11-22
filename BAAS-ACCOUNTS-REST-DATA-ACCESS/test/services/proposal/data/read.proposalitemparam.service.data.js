/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read ProposalItemParam service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readProposalItemParamServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.proposalitemparam.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.proposalitemparam.tc.001]
     */
    READ_PROPOSALITEMPARAM_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposalitemparam.read.v1",
            config: {
                "ID": 1,
                "Name": "READ PROPOSALITEMPARAM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposalitemparams",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Proposal Item Param has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.proposalitemparam.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.proposalitemparam.tc.002]
     */
    READ_PROPOSALITEMPARAM_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposalitemparam.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposalitemparams",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.proposalitemparam.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.proposalitemparam.tc.003]
     */
    READ_PROPOSALITEMPARAM_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposalitemparam.read.v1",
            config: {
                "ID": 2,
                "Name": "READ PROPOSALITEMPARAM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposalitemparams",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Proposal Item Param has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.proposalitemparam.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.proposalitemparam.tc.001]
     */
    READ_ONE_PROPOSALITEMPARAM_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposalitemparam.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ PROPOSALITEMPARAM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposalitemparam/:proposalitemparamid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Proposal Item Param has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.proposalitemparam.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.proposalitemparam.tc.002]
     */
    READ_ONE_PROPOSALITEMPARAM_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposalitemparam.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposalitemparam/:proposalitemparamid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.proposalitemparam.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.proposalitemparam.tc.003]
     */
    READ_ONE_PROPOSALITEMPARAM_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.proposalitemparam.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ PROPOSALITEMPARAM",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposalitemparam/:proposalitemparamid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Proposal Item Param has been readone successfully"
        },
    }

}