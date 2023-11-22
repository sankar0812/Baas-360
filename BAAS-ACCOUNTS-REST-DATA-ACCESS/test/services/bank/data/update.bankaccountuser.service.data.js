/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 08 2023
* Description : This file contains test data for all the fucntions in delete bankaccountuser service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class deleteBankAccountUserServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.bankaccountuser.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.bankaccountuser.tc.001]
     */
    UPDATE_BANKACCOUNTUSER_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.bankaccountuser.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE bankaccountusers",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/bank/v1/bankaccountusers",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: "[MOCK] Bank Account User has updated successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.bankaccountuser.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.bankaccountuser.tc.002]
     */
    UPDATE_BANKACCOUNTUSER_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.bankaccountuser.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE MULTIPLE BANKACCOUNTUSERS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/bank/v1/bankaccountusers",
                "IsAvailable": false,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data : null,
            status : 400,
            message: "Avaliability flag has not been enabled"
        },
    }

    UPDATE_BANKACCOUNTUSER_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.bankaccountuser.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE MULTIPLE BANKACCOUNTUSERS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/bank/v1/bankaccountusers",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Bank Account User has been updated successfully"
        },
    }

}
