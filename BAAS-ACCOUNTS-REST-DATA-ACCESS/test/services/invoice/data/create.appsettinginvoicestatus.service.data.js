/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 07 2023
* Description : This file contains test data for all the fucntions in create appsettinginvoicestatus service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class createAppSettingInvoiceStatusServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.appsettinginvoicestatus.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.appsettinginvoicestatus.tc.001]
	 */
	CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.appsettinginvoicestatus.create.v1",
            config : {
                "ID" : 1,
                "Name" : "CREATE APPSETTINGINVOICESTATUS",
                "Endpoint" : "/api/rest/accounts/dataaccess/1.0.0/invoice/v1/appsettinginvoicestatus",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "App Setting Invoice Status has been created successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.appsettinginvoicestatus.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.appsettinginvoicestatus.tc.002]
	 */
	CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.appsettinginvoicestatus.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE APPSETTINGINVOICESTATUS",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/invoice/v1/appsettinginvoicestatus",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.appsettinginvoicestatus.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.appsettinginvoicestatus.tc.003]
	 * FunctionID   : [accounts.api.dataaccess.service.appsettinginvoicestatus.fun.001]
	 * FunctionPath : [src\services{{lowerCase moduleName}}\create.appsettinginvoicestatus.service.js/createOneappsettinginvoicestatus()]
	 */
	CREATE_ONE_APPSETTINGINVOICESTATUS_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.appsettinginvoicestatus.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE APPSETTINGINVOICESTATUS",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/invoice/v1/appsettinginvoicestatus",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] App Setting Invoice Status has been created successfully"
        },
	}
    
}