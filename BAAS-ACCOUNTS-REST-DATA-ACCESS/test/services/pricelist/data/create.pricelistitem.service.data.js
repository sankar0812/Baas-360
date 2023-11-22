/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 07 2023
* Description : This file contains test data for all the fucntions in create pricelistitem service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class createPriceListItemServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.pricelistitem.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.pricelistitem.tc.001]
	 */
	CREATE_ONE_PRICELISTITEM_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.pricelistitem.create.v1",
            config : {
                "ID" : 1,
                "Name" : "CREATE PRICELISTITEM",
                "Endpoint" : "/api/rest/accounts/dataaccess/1.0.0/pricelist/v1/pricelistitem",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Price List Item has been created successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.pricelistitem.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.pricelistitem.tc.002]
	 */
	CREATE_ONE_PRICELISTITEM_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.pricelistitem.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PRICELISTITEM",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/pricelist/v1/pricelistitem",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.pricelistitem.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.pricelistitem.tc.003]
	 * FunctionID   : [accounts.api.dataaccess.service.pricelistitem.fun.001]
	 * FunctionPath : [src\services{{lowerCase moduleName}}\create.pricelistitem.service.js/createOnepricelistitem()]
	 */
	CREATE_ONE_PRICELISTITEM_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.pricelistitem.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PRICELISTITEM",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/pricelist/v1/pricelistitem",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Price List Item has been created successfully"
        },
	}
    
}