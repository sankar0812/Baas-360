

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update banktransactiontype service class
**/

/**
 * Importing all required modules here
 */

const updateBankTransactionTypeServiceData = require("../data/update.banktransactiontype.service.data")
const updateBankTransactionTypeService = require("../../../../src/services/bank/update.banktransactiontype.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateBankTransactionTypeService = new updateBankTransactionTypeService();
const UpdateBankTransactionTypeServiceData = new updateBankTransactionTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.banktransactiontype.ts.001] | FunctionPath : [src/services/bank/update.banktransactiontype.service.js/updateBankTransactionType()]", () => {

	test(UpdateBankTransactionTypeServiceData.UPDATE_BANKTRANSACTIONTYPE_TS001_TC001.description, async () => {

        const output = await UpdateBankTransactionTypeService.updateBankTransactionType(
            UpdateBankTransactionTypeServiceData.UPDATE_BANKTRANSACTIONTYPE_TS001_TC001.input.databaseConnector,
            UpdateBankTransactionTypeServiceData.UPDATE_BANKTRANSACTIONTYPE_TS001_TC001.input.apiID,
            UpdateBankTransactionTypeServiceData.UPDATE_BANKTRANSACTIONTYPE_TS001_TC001.input.config,
            UpdateBankTransactionTypeServiceData.UPDATE_BANKTRANSACTIONTYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateBankTransactionTypeServiceData.UPDATE_BANKTRANSACTIONTYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateBankTransactionTypeServiceData.UPDATE_BANKTRANSACTIONTYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateBankTransactionTypeServiceData.UPDATE_BANKTRANSACTIONTYPE_TS001_TC001.output)[2])
	});

    test(UpdateBankTransactionTypeServiceData.UPDATE_BANKTRANSACTIONTYPE_TS001_TC002.description, async () => {

        const output = await UpdateBankTransactionTypeService.updateBankTransactionType(
            UpdateBankTransactionTypeServiceData.UPDATE_BANKTRANSACTIONTYPE_TS001_TC002.input.databaseConnector,
            UpdateBankTransactionTypeServiceData.UPDATE_BANKTRANSACTIONTYPE_TS001_TC002.input.apiID,
            UpdateBankTransactionTypeServiceData.UPDATE_BANKTRANSACTIONTYPE_TS001_TC002.input.config,
            UpdateBankTransactionTypeServiceData.UPDATE_BANKTRANSACTIONTYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateBankTransactionTypeServiceData.UPDATE_BANKTRANSACTIONTYPE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateBankTransactionTypeServiceData.UPDATE_BANKTRANSACTIONTYPE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateBankTransactionTypeServiceData.UPDATE_BANKTRANSACTIONTYPE_TS001_TC002.output.message)        
	});

    test(UpdateBankTransactionTypeServiceData.UPDATE_BANKTRANSACTIONTYPE_TS001_TC003.description, async () => {

        const output = await UpdateBankTransactionTypeService.updateBankTransactionType(
            UpdateBankTransactionTypeServiceData.UPDATE_BANKTRANSACTIONTYPE_TS001_TC003.input.databaseConnector,
            UpdateBankTransactionTypeServiceData.UPDATE_BANKTRANSACTIONTYPE_TS001_TC003.input.apiID,
            UpdateBankTransactionTypeServiceData.UPDATE_BANKTRANSACTIONTYPE_TS001_TC003.input.config,
            UpdateBankTransactionTypeServiceData.UPDATE_BANKTRANSACTIONTYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateBankTransactionTypeServiceData.UPDATE_BANKTRANSACTIONTYPE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateBankTransactionTypeServiceData.UPDATE_BANKTRANSACTIONTYPE_TS001_TC003.output.message)        
	});

});
