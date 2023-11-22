/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 07 2023
* Description : This file contains test data for all the fucntions in create productparam service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class createProductParamServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.productparam.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.productparam.tc.001]
	 */
	CREATE_ONE_PRODUCTPARAM_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.productparam.create.v1",
            config : {
                "ID" : 1,
                "Name" : "CREATE PRODUCTPARAM",
                "Endpoint" : "/api/rest/accounts/dataaccess/1.0.0/product/v1/productparam",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Product Param has been created successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.productparam.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.productparam.tc.002]
	 */
	CREATE_ONE_PRODUCTPARAM_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.productparam.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PRODUCTPARAM",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/product/v1/productparam",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.productparam.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.productparam.tc.003]
	 * FunctionID   : [accounts.api.dataaccess.service.productparam.fun.001]
	 * FunctionPath : [src\services{{lowerCase moduleName}}\create.productparam.service.js/createOneproductparam()]
	 */
	CREATE_ONE_PRODUCTPARAM_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.productparam.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PRODUCTPARAM",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/product/v1/productparam",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Product Param has been created successfully"
        },
	}
    
}