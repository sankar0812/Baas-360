/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 07 2023
* Description : This file contains test data for all the fucntions in create bankaccount service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class createBankAccountServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.bankaccount.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.bankaccount.tc.001]
	 */
	CREATE_ONE_BANKACCOUNT_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.bankaccount.create.v1",
            config : {
                "ID" : 1,
                "Name" : "CREATE BANKACCOUNT",
                "Endpoint" : "/api/rest/accounts/dataaccess/1.0.0/bank/v1/bankaccount",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Bank Account has been created successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.bankaccount.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.bankaccount.tc.002]
	 */
	CREATE_ONE_BANKACCOUNT_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.bankaccount.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE BANKACCOUNT",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/bank/v1/bankaccount",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.bankaccount.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.bankaccount.tc.003]
	 * FunctionID   : [accounts.api.dataaccess.service.bankaccount.fun.001]
	 * FunctionPath : [src\services{{lowerCase moduleName}}\create.bankaccount.service.js/createOnebankaccount()]
	 */
	CREATE_ONE_BANKACCOUNT_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.bankaccount.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE BANKACCOUNT",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/bank/v1/bankaccount",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Bank Account has been created successfully"
        },
	}
    
}