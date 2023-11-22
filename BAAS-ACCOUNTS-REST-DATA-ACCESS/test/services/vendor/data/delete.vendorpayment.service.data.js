/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 10 2023
* Description : This file contains test data for all the fucntions in delete vendorpayment service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class deleteVendorPaymentrServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.vendorpayment.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.vendorpayment.tc.001]
	 */
	DELETE_ONE_VENDORPAYMENT_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.vendorpayment.delete.v1",
            config : {
                "ID" : 1,
                "Name" : "UPDATED VENDORPAYMENT",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/vendor/v1/vendorpayment/:vendorpaymentid",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Vendor Payment has been updated successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.vendorpayment.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.vendorpayment.tc.002]
	 */
	DELETE_ONE_VENDORPAYMENT_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.vendorpayment.delete.v1",
            config : {
                "ID" : 2,
                "Name" : "DELETE VENDORPAYMENT",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/vendor/v1/vendorpayment/:vendorpaymentid",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.vendorpayment.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.vendorpayment.tc.003]
	 */
	DELETE_ONE_VENDORPAYMENT_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.vendorpayment.delete.v1",
            config : {
                "ID" : 2,
                "Name" : "DELETE VENDORPAYMENT",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/vendor/v1/vendorpayment/:vendorpaymentid",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Vendor Payment has been deleted successfully"
        },
	}
    
}