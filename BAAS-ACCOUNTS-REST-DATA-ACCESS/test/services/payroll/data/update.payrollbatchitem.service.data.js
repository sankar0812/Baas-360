/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 08 2023
* Description : This file contains test data for all the fucntions in delete payrollbatchitem service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class deletePayrollBatchItemServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.payrollbatchitem.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.payrollbatchitem.tc.001]
     */
    UPDATE_PAYROLLBATCHITEM_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.payrollbatchitem.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE payrollbatchitems",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/payroll/v1/payrollbatchitems",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: "[MOCK] Payroll Batch Item has updated successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.payrollbatchitem.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.payrollbatchitem.tc.002]
     */
    UPDATE_PAYROLLBATCHITEM_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.payrollbatchitem.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE MULTIPLE PAYROLLBATCHITEMS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/payroll/v1/payrollbatchitems",
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

    UPDATE_PAYROLLBATCHITEM_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.payrollbatchitem.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE MULTIPLE PAYROLLBATCHITEMS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/payroll/v1/payrollbatchitems",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Payroll Batch Item has been updated successfully"
        },
    }

}
