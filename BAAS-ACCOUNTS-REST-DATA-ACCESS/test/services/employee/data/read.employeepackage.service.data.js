/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read EmployeePackage service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readEmployeePackageServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.employeepackage.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.employeepackage.tc.001]
     */
    READ_EMPLOYEEPACKAGE_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.employeepackage.read.v1",
            config: {
                "ID": 1,
                "Name": "READ EMPLOYEEPACKAGE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/employee/v1/employeepackages",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Employee Package has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.employeepackage.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.employeepackage.tc.002]
     */
    READ_EMPLOYEEPACKAGE_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.employeepackage.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/employee/v1/employeepackages",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.employeepackage.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.employeepackage.tc.003]
     */
    READ_EMPLOYEEPACKAGE_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.employeepackage.read.v1",
            config: {
                "ID": 2,
                "Name": "READ EMPLOYEEPACKAGE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/employee/v1/employeepackages",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Employee Package has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.employeepackage.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.employeepackage.tc.001]
     */
    READ_ONE_EMPLOYEEPACKAGE_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.employeepackage.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ EMPLOYEEPACKAGE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/employee/v1/employeepackage/:employeepackageid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Employee Package has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.employeepackage.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.employeepackage.tc.002]
     */
    READ_ONE_EMPLOYEEPACKAGE_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.employeepackage.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/employee/v1/employeepackage/:employeepackageid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.employeepackage.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.employeepackage.tc.003]
     */
    READ_ONE_EMPLOYEEPACKAGE_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.employeepackage.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ EMPLOYEEPACKAGE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/employee/v1/employeepackage/:employeepackageid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Employee Package has been readone successfully"
        },
    }

}