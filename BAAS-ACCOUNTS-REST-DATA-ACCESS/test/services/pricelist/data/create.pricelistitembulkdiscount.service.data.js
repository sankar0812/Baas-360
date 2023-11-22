/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 07 2023
* Description : This file contains test data for all the fucntions in create pricelistitembulkdiscount service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class createPriceListItemBulkDiscountServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.pricelistitembulkdiscount.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.pricelistitembulkdiscount.tc.001]
	 */
	CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.pricelistitembulkdiscount.create.v1",
            config : {
                "ID" : 1,
                "Name" : "CREATE PRICELISTITEMBULKDISCOUNT",
                "Endpoint" : "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelistitembulkdiscount",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Price List Item Bulk Discount has been created successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.pricelistitembulkdiscount.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.pricelistitembulkdiscount.tc.002]
	 */
	CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.pricelistitembulkdiscount.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PRICELISTITEMBULKDISCOUNT",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/pricelist/v1/pricelistitembulkdiscount",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.pricelistitembulkdiscount.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.pricelistitembulkdiscount.tc.003]
	 * FunctionID   : [accounts.api.dataaccess.service.pricelistitembulkdiscount.fun.001]
	 * FunctionPath : [src\services{{lowerCase moduleName}}\create.pricelistitembulkdiscount.service.js/createOnepricelistitembulkdiscount()]
	 */
	CREATE_ONE_PRICELISTITEMBULKDISCOUNT_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.pricelistitembulkdiscount.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PRICELISTITEMBULKDISCOUNT",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/pricelist/v1/pricelistitembulkdiscount",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Price List Item Bulk Discount has been created successfully"
        },
	}
    
}