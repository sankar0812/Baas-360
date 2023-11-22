/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 07 2023
* Description : This file contains test data for all the fucntions in create currency service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class createCurrencyServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.currency.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.currency.tc.001]
	 */
	CREATE_ONE_CURRENCY_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.currency.create.v1",
            config : {
                "ID" : 1,
                "Name" : "CREATE CURRENCY",
                "Endpoint" : "/api/rest/accounts/dataaccess/1.0.0/currency/v1/currency",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Currency has been created successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.currency.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.currency.tc.002]
	 */
	CREATE_ONE_CURRENCY_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.currency.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE CURRENCY",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/currency/v1/currency",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.currency.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.currency.tc.003]
	 * FunctionID   : [accounts.api.dataaccess.service.currency.fun.001]
	 * FunctionPath : [src\services{{lowerCase moduleName}}\create.currency.service.js/createOnecurrency()]
	 */
	CREATE_ONE_CURRENCY_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.currency.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE CURRENCY",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/currency/v1/currency",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Currency has been created successfully"
        },
	}
    
}