

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update banktransaction service class
**/

/**
 * Importing all required modules here
 */

const updateBankTransactionServiceData = require("../data/update.banktransaction.service.data")
const updateBankTransactionService = require("../../../../src/services/bank/update.banktransaction.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateBankTransactionService = new updateBankTransactionService();
const UpdateBankTransactionServiceData = new updateBankTransactionServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.banktransaction.ts.001] | FunctionPath : [src/services/bank/update.banktransaction.service.js/updateBankTransaction()]", () => {

	test(UpdateBankTransactionServiceData.UPDATE_BANKTRANSACTION_TS001_TC001.description, async () => {

        const output = await UpdateBankTransactionService.updateBankTransaction(
            UpdateBankTransactionServiceData.UPDATE_BANKTRANSACTION_TS001_TC001.input.databaseConnector,
            UpdateBankTransactionServiceData.UPDATE_BANKTRANSACTION_TS001_TC001.input.apiID,
            UpdateBankTransactionServiceData.UPDATE_BANKTRANSACTION_TS001_TC001.input.config,
            UpdateBankTransactionServiceData.UPDATE_BANKTRANSACTION_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateBankTransactionServiceData.UPDATE_BANKTRANSACTION_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateBankTransactionServiceData.UPDATE_BANKTRANSACTION_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateBankTransactionServiceData.UPDATE_BANKTRANSACTION_TS001_TC001.output)[2])
	});

    test(UpdateBankTransactionServiceData.UPDATE_BANKTRANSACTION_TS001_TC002.description, async () => {

        const output = await UpdateBankTransactionService.updateBankTransaction(
            UpdateBankTransactionServiceData.UPDATE_BANKTRANSACTION_TS001_TC002.input.databaseConnector,
            UpdateBankTransactionServiceData.UPDATE_BANKTRANSACTION_TS001_TC002.input.apiID,
            UpdateBankTransactionServiceData.UPDATE_BANKTRANSACTION_TS001_TC002.input.config,
            UpdateBankTransactionServiceData.UPDATE_BANKTRANSACTION_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateBankTransactionServiceData.UPDATE_BANKTRANSACTION_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateBankTransactionServiceData.UPDATE_BANKTRANSACTION_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateBankTransactionServiceData.UPDATE_BANKTRANSACTION_TS001_TC002.output.message)        
	});

    test(UpdateBankTransactionServiceData.UPDATE_BANKTRANSACTION_TS001_TC003.description, async () => {

        const output = await UpdateBankTransactionService.updateBankTransaction(
            UpdateBankTransactionServiceData.UPDATE_BANKTRANSACTION_TS001_TC003.input.databaseConnector,
            UpdateBankTransactionServiceData.UPDATE_BANKTRANSACTION_TS001_TC003.input.apiID,
            UpdateBankTransactionServiceData.UPDATE_BANKTRANSACTION_TS001_TC003.input.config,
            UpdateBankTransactionServiceData.UPDATE_BANKTRANSACTION_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateBankTransactionServiceData.UPDATE_BANKTRANSACTION_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateBankTransactionServiceData.UPDATE_BANKTRANSACTION_TS001_TC003.output.message)        
	});

});
