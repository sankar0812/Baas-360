/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 08 2023
* Description : This file contains test data for all the fucntions in delete paymentstatus service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class deletePaymentStatusServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.paymentstatus.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.paymentstatus.tc.001]
     */
    UPDATE_PAYMENTSTATUS_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.paymentstatus.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE paymentstatuses",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/payment/v1/paymentstatuses",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: "[MOCK] Payment Status has updated successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.paymentstatus.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.paymentstatus.tc.002]
     */
    UPDATE_PAYMENTSTATUS_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.paymentstatus.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE MULTIPLE PAYMENTSTATUSES",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/payment/v1/paymentstatuses",
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

    UPDATE_PAYMENTSTATUS_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.paymentstatus.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE MULTIPLE PAYMENTSTATUSES",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/payment/v1/paymentstatuses",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Payment Status has been updated successfully"
        },
    }

}
