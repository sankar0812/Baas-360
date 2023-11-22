/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 07 2023
* Description : This file contains test data for all the fucntions in create storetype service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class createStoreTypeServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.storetype.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.storetype.tc.001]
	 */
	CREATE_ONE_STORETYPE_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.storetype.create.v1",
            config : {
                "ID" : 1,
                "Name" : "CREATE STORETYPE",
                "Endpoint" : "/api/rest/accounts/dataaccess/1.0.0/store/v1/storetype",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Store Type has been created successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.storetype.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.storetype.tc.002]
	 */
	CREATE_ONE_STORETYPE_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.storetype.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE STORETYPE",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/store/v1/storetype",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.storetype.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.storetype.tc.003]
	 * FunctionID   : [accounts.api.dataaccess.service.storetype.fun.001]
	 * FunctionPath : [src\services{{lowerCase moduleName}}\create.storetype.service.js/createOnestoretype()]
	 */
	CREATE_ONE_STORETYPE_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.storetype.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE STORETYPE",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/store/v1/storetype",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Store Type has been created successfully"
        },
	}
    
}