/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete banktransactiontype service class
**/

/**
 * Importing all required modules here
 */

const deleteBankTransactionTypeServiceData = require("../data/delete.banktransactiontype.service.data")
const deleteBankTransactionTypeService = require("../../../../src/services/bank/delete.banktransactiontype.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteBankTransactionTypeService = new deleteBankTransactionTypeService();
const DeleteBankTransactionTypeServiceData = new deleteBankTransactionTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.banktransactiontype.ts.001] | FunctionPath : [src/services/bank/delete.banktransactiontype.service.js/deleteOneBankTransactionType()]", () => {


	test(DeleteBankTransactionTypeServiceData.DELETE_ONE_BANKTRANSACTIONTYPE_TS001_TC001.description, async () => {

        const output = await DeleteBankTransactionTypeService.deleteOneBankTransactionType(
            DeleteBankTransactionTypeServiceData.DELETE_ONE_BANKTRANSACTIONTYPE_TS001_TC001.input.databaseConnector,
            DeleteBankTransactionTypeServiceData.DELETE_ONE_BANKTRANSACTIONTYPE_TS001_TC001.input.apiID,
            DeleteBankTransactionTypeServiceData.DELETE_ONE_BANKTRANSACTIONTYPE_TS001_TC001.input.config,
            DeleteBankTransactionTypeServiceData.DELETE_ONE_BANKTRANSACTIONTYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteBankTransactionTypeServiceData.DELETE_ONE_BANKTRANSACTIONTYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteBankTransactionTypeServiceData.DELETE_ONE_BANKTRANSACTIONTYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteBankTransactionTypeServiceData.DELETE_ONE_BANKTRANSACTIONTYPE_TS001_TC001.output)[2])
	});



    test(DeleteBankTransactionTypeServiceData.DELETE_ONE_BANKTRANSACTIONTYPE_TS001_TC002.description, async () => {

        const output = await DeleteBankTransactionTypeService.deleteOneBankTransactionType(
            DeleteBankTransactionTypeServiceData.DELETE_ONE_BANKTRANSACTIONTYPE_TS001_TC002.input.databaseConnector,
            DeleteBankTransactionTypeServiceData.DELETE_ONE_BANKTRANSACTIONTYPE_TS001_TC002.input.apiID,
            DeleteBankTransactionTypeServiceData.DELETE_ONE_BANKTRANSACTIONTYPE_TS001_TC002.input.config,
            DeleteBankTransactionTypeServiceData.DELETE_ONE_BANKTRANSACTIONTYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteBankTransactionTypeServiceData.DELETE_ONE_BANKTRANSACTIONTYPE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteBankTransactionTypeServiceData.DELETE_ONE_BANKTRANSACTIONTYPE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteBankTransactionTypeServiceData.DELETE_ONE_BANKTRANSACTIONTYPE_TS001_TC002.output.message)        
	});



    test(DeleteBankTransactionTypeServiceData.DELETE_ONE_BANKTRANSACTIONTYPE_TS001_TC003.description, async () => {

        const output = await DeleteBankTransactionTypeService.deleteOneBankTransactionType(
            DeleteBankTransactionTypeServiceData.DELETE_ONE_BANKTRANSACTIONTYPE_TS001_TC003.input.databaseConnector,
            DeleteBankTransactionTypeServiceData.DELETE_ONE_BANKTRANSACTIONTYPE_TS001_TC003.input.apiID,
            DeleteBankTransactionTypeServiceData.DELETE_ONE_BANKTRANSACTIONTYPE_TS001_TC003.input.config,
            DeleteBankTransactionTypeServiceData.DELETE_ONE_BANKTRANSACTIONTYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteBankTransactionTypeServiceData.DELETE_ONE_BANKTRANSACTIONTYPE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteBankTransactionTypeServiceData.DELETE_ONE_BANKTRANSACTIONTYPE_TS001_TC003.output.message)        
	});

});
