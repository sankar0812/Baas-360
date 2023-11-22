/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 08 2023
* Description : This file contains test data for all the fucntions in delete productimage service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class deleteProductImageServiceData {


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.productimage.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.productimage.tc.001]
     */
    UPDATE_PRODUCTIMAGE_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productimage.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE productimages",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productimages",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: "[MOCK] Product Image has updated successfully"
        },
    }


    /**
     * TestSuiteID  : [accounts.api.dataaccess.service.productimage.ts.001]
     * TestCaseID   : [accounts.api.dataaccess.service.productimage.tc.002]
     */
    UPDATE_PRODUCTIMAGE_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productimage.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE MULTIPLE PRODUCTIMAGES",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productimages",
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

    UPDATE_PRODUCTIMAGE_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "accounts.api.rest.dataaccess.productimage.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE MULTIPLE PRODUCTIMAGES",
                "Endpoint": "/api/rest/accounts/dataaccess/1.0.0/product/v1/productimages",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Product Image has been updated successfully"
        },
    }

}
