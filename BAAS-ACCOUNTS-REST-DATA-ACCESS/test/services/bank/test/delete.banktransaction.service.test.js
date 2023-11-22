/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete banktransaction service class
**/

/**
 * Importing all required modules here
 */

const deleteBankTransactionServiceData = require("../data/delete.banktransaction.service.data")
const deleteBankTransactionService = require("../../../../src/services/bank/delete.banktransaction.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteBankTransactionService = new deleteBankTransactionService();
const DeleteBankTransactionServiceData = new deleteBankTransactionServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.banktransaction.ts.001] | FunctionPath : [src/services/bank/delete.banktransaction.service.js/deleteOneBankTransaction()]", () => {


	test(DeleteBankTransactionServiceData.DELETE_ONE_BANKTRANSACTION_TS001_TC001.description, async () => {

        const output = await DeleteBankTransactionService.deleteOneBankTransaction(
            DeleteBankTransactionServiceData.DELETE_ONE_BANKTRANSACTION_TS001_TC001.input.databaseConnector,
            DeleteBankTransactionServiceData.DELETE_ONE_BANKTRANSACTION_TS001_TC001.input.apiID,
            DeleteBankTransactionServiceData.DELETE_ONE_BANKTRANSACTION_TS001_TC001.input.config,
            DeleteBankTransactionServiceData.DELETE_ONE_BANKTRANSACTION_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteBankTransactionServiceData.DELETE_ONE_BANKTRANSACTION_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteBankTransactionServiceData.DELETE_ONE_BANKTRANSACTION_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteBankTransactionServiceData.DELETE_ONE_BANKTRANSACTION_TS001_TC001.output)[2])
	});



    test(DeleteBankTransactionServiceData.DELETE_ONE_BANKTRANSACTION_TS001_TC002.description, async () => {

        const output = await DeleteBankTransactionService.deleteOneBankTransaction(
            DeleteBankTransactionServiceData.DELETE_ONE_BANKTRANSACTION_TS001_TC002.input.databaseConnector,
            DeleteBankTransactionServiceData.DELETE_ONE_BANKTRANSACTION_TS001_TC002.input.apiID,
            DeleteBankTransactionServiceData.DELETE_ONE_BANKTRANSACTION_TS001_TC002.input.config,
            DeleteBankTransactionServiceData.DELETE_ONE_BANKTRANSACTION_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteBankTransactionServiceData.DELETE_ONE_BANKTRANSACTION_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteBankTransactionServiceData.DELETE_ONE_BANKTRANSACTION_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteBankTransactionServiceData.DELETE_ONE_BANKTRANSACTION_TS001_TC002.output.message)        
	});



    test(DeleteBankTransactionServiceData.DELETE_ONE_BANKTRANSACTION_TS001_TC003.description, async () => {

        const output = await DeleteBankTransactionService.deleteOneBankTransaction(
            DeleteBankTransactionServiceData.DELETE_ONE_BANKTRANSACTION_TS001_TC003.input.databaseConnector,
            DeleteBankTransactionServiceData.DELETE_ONE_BANKTRANSACTION_TS001_TC003.input.apiID,
            DeleteBankTransactionServiceData.DELETE_ONE_BANKTRANSACTION_TS001_TC003.input.config,
            DeleteBankTransactionServiceData.DELETE_ONE_BANKTRANSACTION_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteBankTransactionServiceData.DELETE_ONE_BANKTRANSACTION_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteBankTransactionServiceData.DELETE_ONE_BANKTRANSACTION_TS001_TC003.output.message)        
	});

});
