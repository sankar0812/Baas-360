/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 07 2023
* Description : This file contains test data for all the fucntions in create appsettingdatatype service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class createAppSettingDataTypeServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.appsettingdatatype.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.appsettingdatatype.tc.001]
	 */
	CREATE_ONE_APPSETTINGDATATYPE_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.appsettingdatatype.create.v1",
            config : {
                "ID" : 1,
                "Name" : "CREATE APPSETTINGDATATYPE",
                "Endpoint" : "/api/rest/accounts/dataaccess/1.0.0/appsetting/v1/appsettingdatatype",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "App Setting Data Type has been created successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.appsettingdatatype.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.appsettingdatatype.tc.002]
	 */
	CREATE_ONE_APPSETTINGDATATYPE_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.appsettingdatatype.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE APPSETTINGDATATYPE",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/appsetting/v1/appsettingdatatype",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.appsettingdatatype.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.appsettingdatatype.tc.003]
	 * FunctionID   : [accounts.api.dataaccess.service.appsettingdatatype.fun.001]
	 * FunctionPath : [src\services{{lowerCase moduleName}}\create.appsettingdatatype.service.js/createOneappsettingdatatype()]
	 */
	CREATE_ONE_APPSETTINGDATATYPE_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.appsettingdatatype.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE APPSETTINGDATATYPE",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/appsetting/v1/appsettingdatatype",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] App Setting Data Type has been created successfully"
        },
	}
    
}