/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 07 2023
* Description : This file contains test data for all the fucntions in create paymentstatus service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class createPaymentStatusServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.paymentstatus.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.paymentstatus.tc.001]
	 */
	CREATE_ONE_PAYMENTSTATUS_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.paymentstatus.create.v1",
            config : {
                "ID" : 1,
                "Name" : "CREATE PAYMENTSTATUS",
                "Endpoint" : "/api/rest/accounts/dataaccess/1.0.0/payment/v1/paymentstatus",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Payment Status has been created successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.paymentstatus.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.paymentstatus.tc.002]
	 */
	CREATE_ONE_PAYMENTSTATUS_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.paymentstatus.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PAYMENTSTATUS",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/payment/v1/paymentstatus",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.paymentstatus.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.paymentstatus.tc.003]
	 * FunctionID   : [accounts.api.dataaccess.service.paymentstatus.fun.001]
	 * FunctionPath : [src\services{{lowerCase moduleName}}\create.paymentstatus.service.js/createOnepaymentstatus()]
	 */
	CREATE_ONE_PAYMENTSTATUS_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.paymentstatus.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PAYMENTSTATUS",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/payment/v1/paymentstatus",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Payment Status has been created successfully"
        },
	}
    
}