/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read BankAccountUser service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readBankAccountUserServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.bankaccountuser.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.bankaccountuser.tc.001]
     */
    READ_BANKACCOUNTUSER_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.bankaccountuser.read.v1",
            config: {
                "ID": 1,
                "Name": "READ BANKACCOUNTUSER",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/bank/v1/bankaccountusers",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Bank Account User has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.bankaccountuser.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.bankaccountuser.tc.002]
     */
    READ_BANKACCOUNTUSER_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.bankaccountuser.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/bank/v1/bankaccountusers",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.bankaccountuser.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.bankaccountuser.tc.003]
     */
    READ_BANKACCOUNTUSER_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.bankaccountuser.read.v1",
            config: {
                "ID": 2,
                "Name": "READ BANKACCOUNTUSER",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/bank/v1/bankaccountusers",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Bank Account User has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.bankaccountuser.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.bankaccountuser.tc.001]
     */
    READ_ONE_BANKACCOUNTUSER_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.bankaccountuser.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ BANKACCOUNTUSER",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/bank/v1/bankaccountuser/:bankaccountuserid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Bank Account User has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.bankaccountuser.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.bankaccountuser.tc.002]
     */
    READ_ONE_BANKACCOUNTUSER_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.bankaccountuser.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/bank/v1/bankaccountuser/:bankaccountuserid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.bankaccountuser.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.bankaccountuser.tc.003]
     */
    READ_ONE_BANKACCOUNTUSER_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.bankaccountuser.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ BANKACCOUNTUSER",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/bank/v1/bankaccountuser/:bankaccountuserid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Bank Account User has been readone successfully"
        },
    }

}