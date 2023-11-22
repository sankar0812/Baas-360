/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read AppSettingUomType service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readAppSettingUomTypeServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.appsettinguomtype.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.appsettinguomtype.tc.001]
     */
    READ_APPSETTINGUOMTYPE_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.appsettinguomtype.read.v1",
            config: {
                "ID": 1,
                "Name": "READ APPSETTINGUOMTYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/appsetting/v1/appsettinguomtypes",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " App Setting Uom Type has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.appsettinguomtype.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.appsettinguomtype.tc.002]
     */
    READ_APPSETTINGUOMTYPE_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.appsettinguomtype.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/appsetting/v1/appsettinguomtypes",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.appsettinguomtype.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.appsettinguomtype.tc.003]
     */
    READ_APPSETTINGUOMTYPE_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.appsettinguomtype.read.v1",
            config: {
                "ID": 2,
                "Name": "READ APPSETTINGUOMTYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/appsetting/v1/appsettinguomtypes",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] App Setting Uom Type has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.appsettinguomtype.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.appsettinguomtype.tc.001]
     */
    READ_ONE_APPSETTINGUOMTYPE_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.appsettinguomtype.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ APPSETTINGUOMTYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/appsetting/v1/appsettinguomtype/:appsettinguomtypeid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " App Setting Uom Type has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.appsettinguomtype.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.appsettinguomtype.tc.002]
     */
    READ_ONE_APPSETTINGUOMTYPE_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.appsettinguomtype.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/appsetting/v1/appsettinguomtype/:appsettinguomtypeid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.appsettinguomtype.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.appsettinguomtype.tc.003]
     */
    READ_ONE_APPSETTINGUOMTYPE_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.appsettinguomtype.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ APPSETTINGUOMTYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/appsetting/v1/appsettinguomtype/:appsettinguomtypeid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] App Setting Uom Type has been readone successfully"
        },
    }

}