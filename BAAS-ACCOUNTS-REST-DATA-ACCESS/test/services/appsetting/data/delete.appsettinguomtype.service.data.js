/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 10 2023
* Description : This file contains test data for all the fucntions in delete appsettinguomtype service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class deleteAppSettingUomTyperServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.appsettinguomtype.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.appsettinguomtype.tc.001]
	 */
	DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.appsettinguomtype.delete.v1",
            config : {
                "ID" : 1,
                "Name" : "UPDATED APPSETTINGUOMTYPE",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/appsetting/v1/appsettinguomtype/:appsettinguomtypeid",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "App Setting Uom Type has been updated successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.appsettinguomtype.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.appsettinguomtype.tc.002]
	 */
	DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.appsettinguomtype.delete.v1",
            config : {
                "ID" : 2,
                "Name" : "DELETE APPSETTINGUOMTYPE",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/appsetting/v1/appsettinguomtype/:appsettinguomtypeid",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.appsettinguomtype.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.appsettinguomtype.tc.003]
	 */
	DELETE_ONE_APPSETTINGUOMTYPE_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.appsettinguomtype.delete.v1",
            config : {
                "ID" : 2,
                "Name" : "DELETE APPSETTINGUOMTYPE",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/appsetting/v1/appsettinguomtype/:appsettinguomtypeid",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] App Setting Uom Type has been deleted successfully"
        },
	}
    
}