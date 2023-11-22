/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read EmployeePackageLog service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readEmployeePackageLogServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.employeepackagelog.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.employeepackagelog.tc.001]
     */
    READ_EMPLOYEEPACKAGELOG_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.employeepackagelog.read.v1",
            config: {
                "ID": 1,
                "Name": "READ EMPLOYEEPACKAGELOG",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/employee/v1/employeepackagelogs",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Employee Package Log has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.employeepackagelog.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.employeepackagelog.tc.002]
     */
    READ_EMPLOYEEPACKAGELOG_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.employeepackagelog.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/employee/v1/employeepackagelogs",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.employeepackagelog.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.employeepackagelog.tc.003]
     */
    READ_EMPLOYEEPACKAGELOG_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.employeepackagelog.read.v1",
            config: {
                "ID": 2,
                "Name": "READ EMPLOYEEPACKAGELOG",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/employee/v1/employeepackagelogs",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Employee Package Log has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.employeepackagelog.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.employeepackagelog.tc.001]
     */
    READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.employeepackagelog.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ EMPLOYEEPACKAGELOG",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/employee/v1/employeepackagelog/:employeepackagelogid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Employee Package Log has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.employeepackagelog.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.employeepackagelog.tc.002]
     */
    READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.employeepackagelog.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/employee/v1/employeepackagelog/:employeepackagelogid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.employeepackagelog.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.employeepackagelog.tc.003]
     */
    READ_ONE_EMPLOYEEPACKAGELOG_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.employeepackagelog.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ EMPLOYEEPACKAGELOG",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/employee/v1/employeepackagelog/:employeepackagelogid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Employee Package Log has been readone successfully"
        },
    }

}