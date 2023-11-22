/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read PackageType service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readPackageTypeServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.packagetype.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.packagetype.tc.001]
     */
    READ_PACKAGETYPE_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.packagetype.read.v1",
            config: {
                "ID": 1,
                "Name": "READ PACKAGETYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/package/v1/packagetypes",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Package Type has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.packagetype.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.packagetype.tc.002]
     */
    READ_PACKAGETYPE_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.packagetype.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/package/v1/packagetypes",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.packagetype.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.packagetype.tc.003]
     */
    READ_PACKAGETYPE_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.packagetype.read.v1",
            config: {
                "ID": 2,
                "Name": "READ PACKAGETYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/package/v1/packagetypes",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Package Type has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.packagetype.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.packagetype.tc.001]
     */
    READ_ONE_PACKAGETYPE_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.packagetype.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ PACKAGETYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/package/v1/packagetype/:packagetypeid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Package Type has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.packagetype.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.packagetype.tc.002]
     */
    READ_ONE_PACKAGETYPE_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.packagetype.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/package/v1/packagetype/:packagetypeid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.packagetype.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.packagetype.tc.003]
     */
    READ_ONE_PACKAGETYPE_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.packagetype.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ PACKAGETYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/package/v1/packagetype/:packagetypeid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Package Type has been readone successfully"
        },
    }

}