/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read AppSettingDataType service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readAppSettingDataTypeServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.appsettingdatatype.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.appsettingdatatype.tc.001]
     */
    READ_APPSETTINGDATATYPE_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.appsettingdatatype.read.v1",
            config: {
                "ID": 1,
                "Name": "READ APPSETTINGDATATYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/appsetting/v1/appsettingdatatypes",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " App Setting Data Type has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.appsettingdatatype.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.appsettingdatatype.tc.002]
     */
    READ_APPSETTINGDATATYPE_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.appsettingdatatype.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/appsetting/v1/appsettingdatatypes",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.appsettingdatatype.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.appsettingdatatype.tc.003]
     */
    READ_APPSETTINGDATATYPE_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.appsettingdatatype.read.v1",
            config: {
                "ID": 2,
                "Name": "READ APPSETTINGDATATYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/appsetting/v1/appsettingdatatypes",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] App Setting Data Type has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.appsettingdatatype.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.appsettingdatatype.tc.001]
     */
    READ_ONE_APPSETTINGDATATYPE_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.appsettingdatatype.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ APPSETTINGDATATYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/appsetting/v1/appsettingdatatype/:appsettingdatatypeid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " App Setting Data Type has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.appsettingdatatype.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.appsettingdatatype.tc.002]
     */
    READ_ONE_APPSETTINGDATATYPE_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.appsettingdatatype.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/appsetting/v1/appsettingdatatype/:appsettingdatatypeid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.appsettingdatatype.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.appsettingdatatype.tc.003]
     */
    READ_ONE_APPSETTINGDATATYPE_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.appsettingdatatype.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ APPSETTINGDATATYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/appsetting/v1/appsettingdatatype/:appsettingdatatypeid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] App Setting Data Type has been readone successfully"
        },
    }

}