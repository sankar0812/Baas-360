/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 08 2023
* Description : This file contains test data for all the fucntions in delete customeraccounttransaction service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class deleteCustomerAccountTransactionServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.customeraccounttransaction.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.customeraccounttransaction.tc.001]
     */
    UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customeraccounttransaction.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE customeraccounttransactions",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customeraccounttransactions",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: "[MOCK] Customer Account Transaction has updated successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.customeraccounttransaction.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.customeraccounttransaction.tc.002]
     */
    UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customeraccounttransaction.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE MULTIPLE CUSTOMERACCOUNTTRANSACTIONS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customeraccounttransactions",
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

    UPDATE_CUSTOMERACCOUNTTRANSACTION_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customeraccounttransaction.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE MULTIPLE CUSTOMERACCOUNTTRANSACTIONS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customeraccounttransactions",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Customer Account Transaction has been updated successfully"
        },
    }

}
