/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read ContactPerson service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readContactPersonServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.contactperson.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.contactperson.tc.001]
     */
    READ_CONTACTPERSON_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.contactperson.read.v1",
            config: {
                "ID": 1,
                "Name": "READ CONTACTPERSON",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/contact/v1/contactpersons",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Contact Person has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.contactperson.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.contactperson.tc.002]
     */
    READ_CONTACTPERSON_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.contactperson.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/contact/v1/contactpersons",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.contactperson.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.contactperson.tc.003]
     */
    READ_CONTACTPERSON_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.contactperson.read.v1",
            config: {
                "ID": 2,
                "Name": "READ CONTACTPERSON",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/contact/v1/contactpersons",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Contact Person has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.contactperson.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.contactperson.tc.001]
     */
    READ_ONE_CONTACTPERSON_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.contactperson.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ CONTACTPERSON",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/contact/v1/contactperson/:contactpersonid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Contact Person has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.contactperson.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.contactperson.tc.002]
     */
    READ_ONE_CONTACTPERSON_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.contactperson.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/contact/v1/contactperson/:contactpersonid",
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
     * TestSuiteID  : [accounts.api.dataaccess.service.contactperson.ts.002]
     * TestCaseID   : [accounts.api.dataaccess.service.contactperson.tc.003]
     */
    READ_ONE_CONTACTPERSON_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.contactperson.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ CONTACTPERSON",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/contact/v1/contactperson/:contactpersonid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Contact Person has been readone successfully"
        },
    }

}