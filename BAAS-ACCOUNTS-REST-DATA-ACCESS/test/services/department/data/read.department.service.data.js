/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read Department service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readDepartmentServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.department.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.department.tc.001]
     */
    READ_DEPARTMENT_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.department.read.v1",
            config: {
                "ID": 1,
                "Name": "READ DEPARTMENT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/department/v1/departments",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Department has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.department.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.department.tc.002]
     */
    READ_DEPARTMENT_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.department.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/department/v1/departments",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.department.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.department.tc.003]
     */
    READ_DEPARTMENT_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.department.read.v1",
            config: {
                "ID": 2,
                "Name": "READ DEPARTMENT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/department/v1/departments",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Department has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.department.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.department.tc.001]
     */
    READ_ONE_DEPARTMENT_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.department.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ DEPARTMENT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/department/v1/department/:departmentid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Department has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.department.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.department.tc.002]
     */
    READ_ONE_DEPARTMENT_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.department.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/department/v1/department/:departmentid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.department.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.department.tc.003]
     */
    READ_ONE_DEPARTMENT_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.department.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ DEPARTMENT",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/department/v1/department/:departmentid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Department has been readone successfully"
        },
    }

}