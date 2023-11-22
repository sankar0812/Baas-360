/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 07 2023
* Description : This file contains test data for all the fucntions in create pricelistcustomeraccount service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class createPriceListCustomerAccountServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.pricelistcustomeraccount.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.pricelistcustomeraccount.tc.001]
	 */
	CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.pricelistcustomeraccount.create.v1",
            config : {
                "ID" : 1,
                "Name" : "CREATE PRICELISTCUSTOMERACCOUNT",
                "Endpoint" : "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelistcustomeraccount",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Price List Customer Account has been created successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.pricelistcustomeraccount.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.pricelistcustomeraccount.tc.002]
	 */
	CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.pricelistcustomeraccount.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PRICELISTCUSTOMERACCOUNT",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/pricelist/v1/pricelistcustomeraccount",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.pricelistcustomeraccount.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.pricelistcustomeraccount.tc.003]
	 * FunctionID   : [accounts.api.dataaccess.service.pricelistcustomeraccount.fun.001]
	 * FunctionPath : [src\services{{lowerCase moduleName}}\create.pricelistcustomeraccount.service.js/createOnepricelistcustomeraccount()]
	 */
	CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.pricelistcustomeraccount.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PRICELISTCUSTOMERACCOUNT",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/pricelist/v1/pricelistcustomeraccount",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Price List Customer Account has been created successfully"
        },
	}
    
}