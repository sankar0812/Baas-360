/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 08 2023
* Description : This file contains test data for all the fucntions in delete customerstatement service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class deleteCustomerStatementServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.customerstatement.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.customerstatement.tc.001]
     */
    UPDATE_CUSTOMERSTATEMENT_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerstatement.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE customerstatements",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerstatements",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: "[MOCK] Customer Statement has updated successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.customerstatement.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.customerstatement.tc.002]
     */
    UPDATE_CUSTOMERSTATEMENT_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerstatement.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE MULTIPLE CUSTOMERSTATEMENTS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerstatements",
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

    UPDATE_CUSTOMERSTATEMENT_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerstatement.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE MULTIPLE CUSTOMERSTATEMENTS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerstatements",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Customer Statement has been updated successfully"
        },
    }

}
