/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 07 2023
* Description : This file contains test data for all the fucntions in create proposalvendorproduct service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class createProposalVendorProductServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.proposalvendorproduct.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.proposalvendorproduct.tc.001]
	 */
	CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.proposalvendorproduct.create.v1",
            config : {
                "ID" : 1,
                "Name" : "CREATE PROPOSALVENDORPRODUCT",
                "Endpoint" : "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposalvendorproduct",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Proposal Vendor Product has been created successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.proposalvendorproduct.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.proposalvendorproduct.tc.002]
	 */
	CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.proposalvendorproduct.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PROPOSALVENDORPRODUCT",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/proposal/v1/proposalvendorproduct",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.proposalvendorproduct.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.proposalvendorproduct.tc.003]
	 * FunctionID   : [accounts.api.dataaccess.service.proposalvendorproduct.fun.001]
	 * FunctionPath : [src\services{{lowerCase moduleName}}\create.proposalvendorproduct.service.js/createOneproposalvendorproduct()]
	 */
	CREATE_ONE_PROPOSALVENDORPRODUCT_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.proposalvendorproduct.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PROPOSALVENDORPRODUCT",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/proposal/v1/proposalvendorproduct",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Proposal Vendor Product has been created successfully"
        },
	}
    
}