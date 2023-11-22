

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update customerstatement service class
**/

/**
 * Importing all required modules here
 */

const updateCustomerStatementServiceData = require("../data/update.customerstatement.service.data")
const updateCustomerStatementService = require("../../../../src/services/customer/update.customerstatement.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateCustomerStatementService = new updateCustomerStatementService();
const UpdateCustomerStatementServiceData = new updateCustomerStatementServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customerstatement.ts.001] | FunctionPath : [src/services/customer/update.customerstatement.service.js/updateCustomerStatement()]", () => {

	test(UpdateCustomerStatementServiceData.UPDATE_CUSTOMERSTATEMENT_TS001_TC001.description, async () => {

        const output = await UpdateCustomerStatementService.updateCustomerStatement(
            UpdateCustomerStatementServiceData.UPDATE_CUSTOMERSTATEMENT_TS001_TC001.input.databaseConnector,
            UpdateCustomerStatementServiceData.UPDATE_CUSTOMERSTATEMENT_TS001_TC001.input.apiID,
            UpdateCustomerStatementServiceData.UPDATE_CUSTOMERSTATEMENT_TS001_TC001.input.config,
            UpdateCustomerStatementServiceData.UPDATE_CUSTOMERSTATEMENT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateCustomerStatementServiceData.UPDATE_CUSTOMERSTATEMENT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerStatementServiceData.UPDATE_CUSTOMERSTATEMENT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateCustomerStatementServiceData.UPDATE_CUSTOMERSTATEMENT_TS001_TC001.output)[2])
	});

    test(UpdateCustomerStatementServiceData.UPDATE_CUSTOMERSTATEMENT_TS001_TC002.description, async () => {

        const output = await UpdateCustomerStatementService.updateCustomerStatement(
            UpdateCustomerStatementServiceData.UPDATE_CUSTOMERSTATEMENT_TS001_TC002.input.databaseConnector,
            UpdateCustomerStatementServiceData.UPDATE_CUSTOMERSTATEMENT_TS001_TC002.input.apiID,
            UpdateCustomerStatementServiceData.UPDATE_CUSTOMERSTATEMENT_TS001_TC002.input.config,
            UpdateCustomerStatementServiceData.UPDATE_CUSTOMERSTATEMENT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateCustomerStatementServiceData.UPDATE_CUSTOMERSTATEMENT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateCustomerStatementServiceData.UPDATE_CUSTOMERSTATEMENT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateCustomerStatementServiceData.UPDATE_CUSTOMERSTATEMENT_TS001_TC002.output.message)        
	});

    test(UpdateCustomerStatementServiceData.UPDATE_CUSTOMERSTATEMENT_TS001_TC003.description, async () => {

        const output = await UpdateCustomerStatementService.updateCustomerStatement(
            UpdateCustomerStatementServiceData.UPDATE_CUSTOMERSTATEMENT_TS001_TC003.input.databaseConnector,
            UpdateCustomerStatementServiceData.UPDATE_CUSTOMERSTATEMENT_TS001_TC003.input.apiID,
            UpdateCustomerStatementServiceData.UPDATE_CUSTOMERSTATEMENT_TS001_TC003.input.config,
            UpdateCustomerStatementServiceData.UPDATE_CUSTOMERSTATEMENT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateCustomerStatementServiceData.UPDATE_CUSTOMERSTATEMENT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateCustomerStatementServiceData.UPDATE_CUSTOMERSTATEMENT_TS001_TC003.output.message)        
	});

});
