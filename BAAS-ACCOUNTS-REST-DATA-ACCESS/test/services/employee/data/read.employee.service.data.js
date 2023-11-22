/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read Employee service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readEmployeeServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.employee.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.employee.tc.001]
     */
    READ_EMPLOYEE_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.employee.read.v1",
            config: {
                "ID": 1,
                "Name": "READ EMPLOYEE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/employee/v1/employees",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Employee has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.employee.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.employee.tc.002]
     */
    READ_EMPLOYEE_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.employee.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/employee/v1/employees",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.employee.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.employee.tc.003]
     */
    READ_EMPLOYEE_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.employee.read.v1",
            config: {
                "ID": 2,
                "Name": "READ EMPLOYEE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/employee/v1/employees",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Employee has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.employee.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.employee.tc.001]
     */
    READ_ONE_EMPLOYEE_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.employee.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ EMPLOYEE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/employee/v1/employee/:employeeid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Employee has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.employee.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.employee.tc.002]
     */
    READ_ONE_EMPLOYEE_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.employee.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/employee/v1/employee/:employeeid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.employee.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.employee.tc.003]
     */
    READ_ONE_EMPLOYEE_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.employee.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ EMPLOYEE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/employee/v1/employee/:employeeid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Employee has been readone successfully"
        },
    }

}