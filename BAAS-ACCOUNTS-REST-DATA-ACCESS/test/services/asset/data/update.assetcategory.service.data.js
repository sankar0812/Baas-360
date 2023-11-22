/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 08 2023
* Description : This file contains test data for all the fucntions in delete assetcategory service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class deleteAssetCategoryServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.assetcategory.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.assetcategory.tc.001]
     */
    UPDATE_ASSETCATEGORY_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetcategory.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE assetcategorys",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetcategorys",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: "[MOCK] Asset Category has updated successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.assetcategory.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.assetcategory.tc.002]
     */
    UPDATE_ASSETCATEGORY_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetcategory.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE MULTIPLE ASSETCATEGORYS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetcategorys",
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

    UPDATE_ASSETCATEGORY_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.assetcategory.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE MULTIPLE ASSETCATEGORYS",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetcategorys",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Asset Category has been updated successfully"
        },
    }

}
