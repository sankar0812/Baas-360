/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 07 2023
* Description : This file contains test data for all the fucntions in create paymentmethod service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class createPaymentMethodServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.paymentmethod.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.paymentmethod.tc.001]
	 */
	CREATE_ONE_PAYMENTMETHOD_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.paymentmethod.create.v1",
            config : {
                "ID" : 1,
                "Name" : "CREATE PAYMENTMETHOD",
                "Endpoint" : "/api/rest/accounts/dataaccess/1.0.0/payment/v1/paymentmethod",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Payment Method has been created successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.paymentmethod.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.paymentmethod.tc.002]
	 */
	CREATE_ONE_PAYMENTMETHOD_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.paymentmethod.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PAYMENTMETHOD",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/payment/v1/paymentmethod",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.paymentmethod.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.paymentmethod.tc.003]
	 * FunctionID   : [accounts.api.dataaccess.service.paymentmethod.fun.001]
	 * FunctionPath : [src\services{{lowerCase moduleName}}\create.paymentmethod.service.js/createOnepaymentmethod()]
	 */
	CREATE_ONE_PAYMENTMETHOD_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.paymentmethod.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PAYMENTMETHOD",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/payment/v1/paymentmethod",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Payment Method has been created successfully"
        },
	}
    
}