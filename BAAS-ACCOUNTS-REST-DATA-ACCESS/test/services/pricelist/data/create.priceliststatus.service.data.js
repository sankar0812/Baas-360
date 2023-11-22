/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 07 2023
* Description : This file contains test data for all the fucntions in create priceliststatus service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class createPriceListStatusServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.priceliststatus.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.priceliststatus.tc.001]
	 */
	CREATE_ONE_PRICELISTSTATUS_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.priceliststatus.create.v1",
            config : {
                "ID" : 1,
                "Name" : "CREATE PRICELISTSTATUS",
                "Endpoint" : "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/priceliststatus",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Price List Status has been created successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.priceliststatus.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.priceliststatus.tc.002]
	 */
	CREATE_ONE_PRICELISTSTATUS_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.priceliststatus.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PRICELISTSTATUS",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/pricelist/v1/priceliststatus",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.priceliststatus.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.priceliststatus.tc.003]
	 * FunctionID   : [accounts.api.dataaccess.service.priceliststatus.fun.001]
	 * FunctionPath : [src\services{{lowerCase moduleName}}\create.priceliststatus.service.js/createOnepriceliststatus()]
	 */
	CREATE_ONE_PRICELISTSTATUS_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.priceliststatus.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PRICELISTSTATUS",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/pricelist/v1/priceliststatus",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Price List Status has been created successfully"
        },
	}
    
}