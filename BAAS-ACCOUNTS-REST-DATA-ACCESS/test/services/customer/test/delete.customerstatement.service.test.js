/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete customerstatement service class
**/

/**
 * Importing all required modules here
 */

const deleteCustomerStatementServiceData = require("../data/delete.customerstatement.service.data")
const deleteCustomerStatementService = require("../../../../src/services/customer/delete.customerstatement.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteCustomerStatementService = new deleteCustomerStatementService();
const DeleteCustomerStatementServiceData = new deleteCustomerStatementServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customerstatement.ts.001] | FunctionPath : [src/services/customer/delete.customerstatement.service.js/deleteOneCustomerStatement()]", () => {


	test(DeleteCustomerStatementServiceData.DELETE_ONE_CUSTOMERSTATEMENT_TS001_TC001.description, async () => {

        const output = await DeleteCustomerStatementService.deleteOneCustomerStatement(
            DeleteCustomerStatementServiceData.DELETE_ONE_CUSTOMERSTATEMENT_TS001_TC001.input.databaseConnector,
            DeleteCustomerStatementServiceData.DELETE_ONE_CUSTOMERSTATEMENT_TS001_TC001.input.apiID,
            DeleteCustomerStatementServiceData.DELETE_ONE_CUSTOMERSTATEMENT_TS001_TC001.input.config,
            DeleteCustomerStatementServiceData.DELETE_ONE_CUSTOMERSTATEMENT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteCustomerStatementServiceData.DELETE_ONE_CUSTOMERSTATEMENT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteCustomerStatementServiceData.DELETE_ONE_CUSTOMERSTATEMENT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteCustomerStatementServiceData.DELETE_ONE_CUSTOMERSTATEMENT_TS001_TC001.output)[2])
	});



    test(DeleteCustomerStatementServiceData.DELETE_ONE_CUSTOMERSTATEMENT_TS001_TC002.description, async () => {

        const output = await DeleteCustomerStatementService.deleteOneCustomerStatement(
            DeleteCustomerStatementServiceData.DELETE_ONE_CUSTOMERSTATEMENT_TS001_TC002.input.databaseConnector,
            DeleteCustomerStatementServiceData.DELETE_ONE_CUSTOMERSTATEMENT_TS001_TC002.input.apiID,
            DeleteCustomerStatementServiceData.DELETE_ONE_CUSTOMERSTATEMENT_TS001_TC002.input.config,
            DeleteCustomerStatementServiceData.DELETE_ONE_CUSTOMERSTATEMENT_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteCustomerStatementServiceData.DELETE_ONE_CUSTOMERSTATEMENT_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteCustomerStatementServiceData.DELETE_ONE_CUSTOMERSTATEMENT_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteCustomerStatementServiceData.DELETE_ONE_CUSTOMERSTATEMENT_TS001_TC002.output.message)        
	});



    test(DeleteCustomerStatementServiceData.DELETE_ONE_CUSTOMERSTATEMENT_TS001_TC003.description, async () => {

        const output = await DeleteCustomerStatementService.deleteOneCustomerStatement(
            DeleteCustomerStatementServiceData.DELETE_ONE_CUSTOMERSTATEMENT_TS001_TC003.input.databaseConnector,
            DeleteCustomerStatementServiceData.DELETE_ONE_CUSTOMERSTATEMENT_TS001_TC003.input.apiID,
            DeleteCustomerStatementServiceData.DELETE_ONE_CUSTOMERSTATEMENT_TS001_TC003.input.config,
            DeleteCustomerStatementServiceData.DELETE_ONE_CUSTOMERSTATEMENT_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteCustomerStatementServiceData.DELETE_ONE_CUSTOMERSTATEMENT_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteCustomerStatementServiceData.DELETE_ONE_CUSTOMERSTATEMENT_TS001_TC003.output.message)        
	});

});
