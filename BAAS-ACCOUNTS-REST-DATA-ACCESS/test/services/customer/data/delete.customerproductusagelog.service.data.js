/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 10 2023
* Description : This file contains test data for all the fucntions in delete customerproductusagelog service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class deleteCustomerProductUsageLogrServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.customerproductusagelog.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.customerproductusagelog.tc.001]
	 */
	DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.customerproductusagelog.delete.v1",
            config : {
                "ID" : 1,
                "Name" : "UPDATED CUSTOMERPRODUCTUSAGELOG",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/customer/v1/customerproductusagelog/:customerproductusagelogid",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Customer Product Usage Log has been updated successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.customerproductusagelog.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.customerproductusagelog.tc.002]
	 */
	DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.customerproductusagelog.delete.v1",
            config : {
                "ID" : 2,
                "Name" : "DELETE CUSTOMERPRODUCTUSAGELOG",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/customer/v1/customerproductusagelog/:customerproductusagelogid",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.customerproductusagelog.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.customerproductusagelog.tc.003]
	 */
	DELETE_ONE_CUSTOMERPRODUCTUSAGELOG_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.customerproductusagelog.delete.v1",
            config : {
                "ID" : 2,
                "Name" : "DELETE CUSTOMERPRODUCTUSAGELOG",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/customer/v1/customerproductusagelog/:customerproductusagelogid",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Customer Product Usage Log has been deleted successfully"
        },
	}
    
}