/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 10 2023
* Description : This file contains test data for all the fucntions in delete vendorapprovalitem service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class deleteVendorApprovalItemrServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.vendorapprovalitem.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.vendorapprovalitem.tc.001]
	 */
	DELETE_ONE_VENDORAPPROVALITEM_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.vendorapprovalitem.delete.v1",
            config : {
                "ID" : 1,
                "Name" : "UPDATED VENDORAPPROVALITEM",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/vendor/v1/vendorapprovalitem/:vendorapprovalitemid",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Vendor Approval Item has been updated successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.vendorapprovalitem.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.vendorapprovalitem.tc.002]
	 */
	DELETE_ONE_VENDORAPPROVALITEM_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.vendorapprovalitem.delete.v1",
            config : {
                "ID" : 2,
                "Name" : "DELETE VENDORAPPROVALITEM",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/vendor/v1/vendorapprovalitem/:vendorapprovalitemid",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.vendorapprovalitem.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.vendorapprovalitem.tc.003]
	 */
	DELETE_ONE_VENDORAPPROVALITEM_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.vendorapprovalitem.delete.v1",
            config : {
                "ID" : 2,
                "Name" : "DELETE VENDORAPPROVALITEM",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/vendor/v1/vendorapprovalitem/:vendorapprovalitemid",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Vendor Approval Item has been deleted successfully"
        },
	}
    
}