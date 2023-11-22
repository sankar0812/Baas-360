/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 07 2023
* Description : This file contains test data for all the fucntions in create tenantcontact service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class createTenantContactServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.tenantcontact.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.tenantcontact.tc.001]
	 */
	CREATE_ONE_TENANTCONTACT_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.tenantcontact.create.v1",
            config : {
                "ID" : 1,
                "Name" : "CREATE TENANTCONTACT",
                "Endpoint" : "/api/rest/accounts/dataaccess/1.0.0/contact/v1/tenantcontact",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Tenant Contact has been created successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.tenantcontact.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.tenantcontact.tc.002]
	 */
	CREATE_ONE_TENANTCONTACT_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.tenantcontact.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE TENANTCONTACT",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/contact/v1/tenantcontact",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.tenantcontact.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.tenantcontact.tc.003]
	 * FunctionID   : [accounts.api.dataaccess.service.tenantcontact.fun.001]
	 * FunctionPath : [src\services{{lowerCase moduleName}}\create.tenantcontact.service.js/createOnetenantcontact()]
	 */
	CREATE_ONE_TENANTCONTACT_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.tenantcontact.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE TENANTCONTACT",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/contact/v1/tenantcontact",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Tenant Contact has been created successfully"
        },
	}
    
}