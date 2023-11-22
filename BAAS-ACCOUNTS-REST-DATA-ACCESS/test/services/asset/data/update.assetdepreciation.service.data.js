/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 08 2023
* Description : This file contains test data for all the fucntions in delete assetdepreciation service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class deleteAssetDepreciationServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.assetdepreciation.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.assetdepreciation.tc.001]
     */
    UPDATE_ASSETDEPRECIATION_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetdepreciation.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE assetdepreciations",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetdepreciations",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: "[MOCK] Asset Depreciation has updated successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.assetdepreciation.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.assetdepreciation.tc.002]
     */
    UPDATE_ASSETDEPRECIATION_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetdepreciation.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE MULTIPLE ASSETDEPRECIATIONS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetdepreciations",
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

    UPDATE_ASSETDEPRECIATION_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetdepreciation.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE MULTIPLE ASSETDEPRECIATIONS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetdepreciations",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Asset Depreciation has been updated successfully"
        },
    }

}
