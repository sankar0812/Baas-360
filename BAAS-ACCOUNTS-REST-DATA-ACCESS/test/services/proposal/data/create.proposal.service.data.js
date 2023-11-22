/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 07 2023
* Description : This file contains test data for all the fucntions in create proposal service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class createProposalServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.proposal.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.proposal.tc.001]
	 */
	CREATE_ONE_PROPOSAL_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.proposal.create.v1",
            config : {
                "ID" : 1,
                "Name" : "CREATE PROPOSAL",
                "Endpoint" : "/api/rest/accounts/dataaccess/1.0.0/proposal/v1/proposal",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Proposal has been created successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.proposal.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.proposal.tc.002]
	 */
	CREATE_ONE_PROPOSAL_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.proposal.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PROPOSAL",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/proposal/v1/proposal",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.proposal.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.proposal.tc.003]
	 * FunctionID   : [accounts.api.dataaccess.service.proposal.fun.001]
	 * FunctionPath : [src\services{{lowerCase moduleName}}\create.proposal.service.js/createOneproposal()]
	 */
	CREATE_ONE_PROPOSAL_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.proposal.create.v1",
            config : {
                "ID" : 2,
                "Name" : "CREATE PROPOSAL",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/proposal/v1/proposal",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Proposal has been created successfully"
        },
	}
    
}