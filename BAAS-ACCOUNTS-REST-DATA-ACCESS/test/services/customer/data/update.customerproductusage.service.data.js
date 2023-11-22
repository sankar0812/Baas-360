/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 08 2023
* Description : This file contains test data for all the fucntions in delete customerproductusage service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class deleteCustomerProductUsageServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.customerproductusage.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.customerproductusage.tc.001]
     */
    UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerproductusage.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE customerproductusages",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerproductusages",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: "[MOCK] Customer Product Usage has updated successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.customerproductusage.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.customerproductusage.tc.002]
     */
    UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerproductusage.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE MULTIPLE CUSTOMERPRODUCTUSAGES",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerproductusages",
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

    UPDATE_CUSTOMERPRODUCTUSAGE_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.customerproductusage.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE MULTIPLE CUSTOMERPRODUCTUSAGES",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/customer/v1/customerproductusages",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Customer Product Usage has been updated successfully"
        },
    }

}
