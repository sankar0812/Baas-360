/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 07 2023
* Description : This file contains test data for all the fucntions in create productbulkdiscount service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class createProductBulkDiscountServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.productbulkdiscount.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.productbulkdiscount.tc.001]
	 */
	CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.productbulkdiscount.create.v1",
            config : {
                "ID" : 1,
                "Name" : "CREATE PRODUCTBULKDISCOUNT",
                "Endpoint" : "/api/rest/accounts/dataaccess/1.0.0/product/v1/productbulkdiscount",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Product Bulk Discount has been created successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.productbulkdiscount.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.productbulkdiscount.tc.002]
	 */
	CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.productbulkdiscount.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PRODUCTBULKDISCOUNT",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/product/v1/productbulkdiscount",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.productbulkdiscount.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.productbulkdiscount.tc.003]
	 * FunctionID   : [accounts.api.dataaccess.service.productbulkdiscount.fun.001]
	 * FunctionPath : [src\services{{lowerCase moduleName}}\create.productbulkdiscount.service.js/createOneproductbulkdiscount()]
	 */
	CREATE_ONE_PRODUCTBULKDISCOUNT_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.productbulkdiscount.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PRODUCTBULKDISCOUNT",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/product/v1/productbulkdiscount",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Product Bulk Discount has been created successfully"
        },
	}
    
}