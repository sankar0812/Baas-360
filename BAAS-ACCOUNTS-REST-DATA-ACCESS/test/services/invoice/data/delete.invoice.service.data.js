/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 10 2023
* Description : This file contains test data for all the fucntions in delete invoice service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class deleteInvoicerServiceData{


	/**
	 * TestSuiteID  : [accounts.api.dataaccess.service.invoice.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.invoice.tc.001]
	 */
	DELETE_ONE_INVOICE_TS001_TC001 = {

		description : "Test function's output structure is upto the specification",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.invoice.delete.v1",
            config : {
                "ID" : 1,
                "Name" : "UPDATED INVOICE",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/invoice/v1/invoice/:invoiceid",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : null,
		},
		output: {
            data : null,
            status : 200,
            message : "Invoice has been updated successfully"
        },
	}


    /**
	 * TestSuiteID  : [accounts.api.dataaccess.service.invoice.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.invoice.tc.002]
	 */
	DELETE_ONE_INVOICE_TS001_TC002 = {

		description : "Check availabilty flag is there",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.invoice.delete.v1",
            config : {
                "ID" : 2,
                "Name" : "DELETE INVOICE",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/invoice/v1/invoice/:invoiceid",
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
	 * TestSuiteID  : [accounts.api.dataaccess.service.invoice.ts.001]
	 * TestCaseID   : [accounts.api.dataaccess.service.invoice.tc.003]
	 */
	DELETE_ONE_INVOICE_TS001_TC003 = {

		description : "Check mock enabled flag is working",
		input : {
            databaseConnector : null,
            apiID : "accounts.api.rest.dataaccess.invoice.delete.v1",
            config : {
                "ID" : 2,
                "Name" : "DELETE INVOICE",
                "Endpoint" : "/api/rest/base/dataaccess/1.0.0/invoice/v1/invoice/:invoiceid",
                "IsAvailable" : true,
                "IsMockEnabled" : true
            },
            input : {},
		},
		output: {
            data : {},
            status : 200,
            message : "[MOCK] Invoice has been deleted successfully"
        },
	}
    
}