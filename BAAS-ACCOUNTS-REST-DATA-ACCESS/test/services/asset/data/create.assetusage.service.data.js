/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 07 2023
* Description : This file contains test data for all the fucntions in create assetusage service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class createAssetUsageServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.assetusage.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.assetusage.tc.001]
	 */
	CREATE_ONE_ASSETUSAGE_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.assetusage.create.v1",
            config : {
                "ID" : 1,
                "Name" : "CREATE ASSETUSAGE",
                "Endpoint" : "/api/rest/accounts/dataaccess/1.0.0/asset/v1/assetusage",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Asset Usage has been created successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.assetusage.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.assetusage.tc.002]
	 */
	CREATE_ONE_ASSETUSAGE_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.assetusage.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE ASSETUSAGE",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/asset/v1/assetusage",
                "IsAvailable" : false,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 400,
            message : "Avaliability flag has not been enabled"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.assetusage.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.assetusage.tc.003]
	 * FunctionID   : [accounts.api.dataaccess.service.assetusage.fun.001]
	 * FunctionPath : [src\services{{lowerCase moduleName}}\create.assetusage.service.js/createOneassetusage()]
	 */
	CREATE_ONE_ASSETUSAGE_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.assetusage.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE ASSETUSAGE",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/asset/v1/assetusage",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Asset Usage has been created successfully"
        },
	}
    
}