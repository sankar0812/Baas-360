/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 10 2023
* Description : This file contains test data for all the fucntions in delete location service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class deleteLocationrServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.location.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.location.tc.001]
	 */
	DELETE_ONE_LOCATION_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.location.delete.v1",
            config : {
                "ID" : 1,
                "Name" : "UPDATED LOCATION",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/location/v1/location/:locationid",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Location has been updated successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.location.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.location.tc.002]
	 */
	DELETE_ONE_LOCATION_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.location.delete.v1",
            config : {
                "ID" : 2,
                "Name" : "DELETE LOCATION",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/location/v1/location/:locationid",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.location.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.location.tc.003]
	 */
	DELETE_ONE_LOCATION_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.location.delete.v1",
            config : {
                "ID" : 2,
                "Name" : "DELETE LOCATION",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/location/v1/location/:locationid",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Location has been deleted successfully"
        },
	}
    
}