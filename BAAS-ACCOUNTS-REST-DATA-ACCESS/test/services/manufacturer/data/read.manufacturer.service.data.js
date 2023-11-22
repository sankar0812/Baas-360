/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read Manufacturer service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readManufacturerServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.manufacturer.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.manufacturer.tc.001]
     */
    READ_MANUFACTURER_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.manufacturer.read.v1",
            config: {
                "ID": 1,
                "Name": "READ MANUFACTURER",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/manufacturer/v1/manufacturers",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Manufacturer has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.manufacturer.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.manufacturer.tc.002]
     */
    READ_MANUFACTURER_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.manufacturer.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/manufacturer/v1/manufacturers",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.manufacturer.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.manufacturer.tc.003]
     */
    READ_MANUFACTURER_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.manufacturer.read.v1",
            config: {
                "ID": 2,
                "Name": "READ MANUFACTURER",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/manufacturer/v1/manufacturers",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Manufacturer has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.manufacturer.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.manufacturer.tc.001]
     */
    READ_ONE_MANUFACTURER_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.manufacturer.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ MANUFACTURER",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/manufacturer/v1/manufacturer/:manufacturerid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Manufacturer has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.manufacturer.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.manufacturer.tc.002]
     */
    READ_ONE_MANUFACTURER_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.manufacturer.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/manufacturer/v1/manufacturer/:manufacturerid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.manufacturer.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.manufacturer.tc.003]
     */
    READ_ONE_MANUFACTURER_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.manufacturer.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ MANUFACTURER",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/manufacturer/v1/manufacturer/:manufacturerid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Manufacturer has been readone successfully"
        },
    }

}