/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 07 2023
* Description : This file contains test data for all the fucntions in create employeepackage service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class createEmployeePackageServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.employeepackage.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.employeepackage.tc.001]
	 */
	CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.employeepackage.create.v1",
            config : {
                "ID" : 1,
                "Name" : "CREATE EMPLOYEEPACKAGE",
                "Endpoint" : "/api/rest/accounts/dataaccess/1.0.0/employee/v1/employeepackage",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Employee Package has been created successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.employeepackage.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.employeepackage.tc.002]
	 */
	CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.employeepackage.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE EMPLOYEEPACKAGE",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/employee/v1/employeepackage",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.employeepackage.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.employeepackage.tc.003]
	 * FunctionID   : [accounts.api.dataaccess.service.employeepackage.fun.001]
	 * FunctionPath : [src\services{{lowerCase moduleName}}\create.employeepackage.service.js/createOneemployeepackage()]
	 */
	CREATE_ONE_EMPLOYEEPACKAGE_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.employeepackage.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE EMPLOYEEPACKAGE",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/employee/v1/employeepackage",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Employee Package has been created successfully"
        },
	}
    
}