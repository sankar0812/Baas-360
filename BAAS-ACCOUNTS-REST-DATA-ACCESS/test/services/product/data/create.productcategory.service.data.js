/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 07 2023
* Description : This file contains test data for all the fucntions in create productcategory service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class createProductCategoryServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.productcategory.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.productcategory.tc.001]
	 */
	CREATE_ONE_PRODUCTCATEGORY_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.productcategory.create.v1",
            config : {
                "ID" : 1,
                "Name" : "CREATE PRODUCTCATEGORY",
                "Endpoint" : "/api/rest/accounts/dataaccess/1.0.0/product/v1/productcategory",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Product Category has been created successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.productcategory.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.productcategory.tc.002]
	 */
	CREATE_ONE_PRODUCTCATEGORY_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.productcategory.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PRODUCTCATEGORY",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/product/v1/productcategory",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.productcategory.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.productcategory.tc.003]
	 * FunctionID   : [accounts.api.dataaccess.service.productcategory.fun.001]
	 * FunctionPath : [src\services{{lowerCase moduleName}}\create.productcategory.service.js/createOneproductcategory()]
	 */
	CREATE_ONE_PRODUCTCATEGORY_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.productcategory.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PRODUCTCATEGORY",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/product/v1/productcategory",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Product Category has been created successfully"
        },
	}
    
}