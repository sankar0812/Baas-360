/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 07 2023
* Description : This file contains test data for all the fucntions in create productimage service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class createProductImageServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.productimage.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.productimage.tc.001]
	 */
	CREATE_ONE_PRODUCTIMAGE_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.productimage.create.v1",
            config : {
                "ID" : 1,
                "Name" : "CREATE PRODUCTIMAGE",
                "Endpoint" : "/api/rest/accounts/dataaccess/1.0.0/product/v1/productimage",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Product Image has been created successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.productimage.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.productimage.tc.002]
	 */
	CREATE_ONE_PRODUCTIMAGE_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.productimage.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PRODUCTIMAGE",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/product/v1/productimage",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.productimage.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.productimage.tc.003]
	 * FunctionID   : [accounts.api.dataaccess.service.productimage.fun.001]
	 * FunctionPath : [src\services{{lowerCase moduleName}}\create.productimage.service.js/createOneproductimage()]
	 */
	CREATE_ONE_PRODUCTIMAGE_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.productimage.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PRODUCTIMAGE",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/product/v1/productimage",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Product Image has been created successfully"
        },
	}
    
}