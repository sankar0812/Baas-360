/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read ApprovalStatus service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readApprovalStatusServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.approvalstatus.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.approvalstatus.tc.001]
     */
    READ_APPROVALSTATUS_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.approvalstatus.read.v1",
            config: {
                "ID": 1,
                "Name": "READ APPROVALSTATUS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/approval/v1/approvalstatuses",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Approval Status has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.approvalstatus.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.approvalstatus.tc.002]
     */
    READ_APPROVALSTATUS_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.approvalstatus.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/approval/v1/approvalstatuses",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.approvalstatus.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.approvalstatus.tc.003]
     */
    READ_APPROVALSTATUS_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.approvalstatus.read.v1",
            config: {
                "ID": 2,
                "Name": "READ APPROVALSTATUS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/approval/v1/approvalstatuses",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Approval Status has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.approvalstatus.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.approvalstatus.tc.001]
     */
    READ_ONE_APPROVALSTATUS_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.approvalstatus.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ APPROVALSTATUS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/approval/v1/approvalstatus/:approvalstatusid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Approval Status has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.approvalstatus.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.approvalstatus.tc.002]
     */
    READ_ONE_APPROVALSTATUS_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.approvalstatus.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/approval/v1/approvalstatus/:approvalstatusid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.approvalstatus.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.approvalstatus.tc.003]
     */
    READ_ONE_APPROVALSTATUS_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.approvalstatus.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ APPROVALSTATUS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/approval/v1/approvalstatus/:approvalstatusid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Approval Status has been readone successfully"
        },
    }

}