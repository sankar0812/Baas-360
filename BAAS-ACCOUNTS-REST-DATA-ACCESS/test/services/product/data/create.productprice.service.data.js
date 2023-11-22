/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 07 2023
* Description : This file contains test data for all the fucntions in create productprice service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class createProductPriceServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.productprice.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.productprice.tc.001]
	 */
	CREATE_ONE_PRODUCTPRICE_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.productprice.create.v1",
            config : {
                "ID" : 1,
                "Name" : "CREATE PRODUCTPRICE",
                "Endpoint" : "/api/rest/accounts/dataaccess/1.0.0/product/v1/productprice",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Product Price has been created successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.productprice.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.productprice.tc.002]
	 */
	CREATE_ONE_PRODUCTPRICE_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.productprice.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PRODUCTPRICE",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/product/v1/productprice",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.productprice.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.productprice.tc.003]
	 * FunctionID   : [accounts.api.dataaccess.service.productprice.fun.001]
	 * FunctionPath : [src\services{{lowerCase moduleName}}\create.productprice.service.js/createOneproductprice()]
	 */
	CREATE_ONE_PRODUCTPRICE_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.productprice.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PRODUCTPRICE",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/product/v1/productprice",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Product Price has been created successfully"
        },
	}
    
}