/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 10 2023
* Description : This file contains test data for all the fucntions in delete customerpaymentitem service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class deleteCustomerPaymentItemrServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.customerpaymentitem.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.customerpaymentitem.tc.001]
	 */
	DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.customerpaymentitem.delete.v1",
            config : {
                "ID" : 1,
                "Name" : "UPDATED CUSTOMERPAYMENTITEM",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/customer/v1/customerpaymentitem/:customerpaymentitemid",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Customer Payment Item has been updated successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.customerpaymentitem.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.customerpaymentitem.tc.002]
	 */
	DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.customerpaymentitem.delete.v1",
            config : {
                "ID" : 2,
                "Name" : "DELETE CUSTOMERPAYMENTITEM",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/customer/v1/customerpaymentitem/:customerpaymentitemid",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.customerpaymentitem.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.customerpaymentitem.tc.003]
	 */
	DELETE_ONE_CUSTOMERPAYMENTITEM_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.customerpaymentitem.delete.v1",
            config : {
                "ID" : 2,
                "Name" : "DELETE CUSTOMERPAYMENTITEM",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/customer/v1/customerpaymentitem/:customerpaymentitemid",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Customer Payment Item has been deleted successfully"
        },
	}
    
}