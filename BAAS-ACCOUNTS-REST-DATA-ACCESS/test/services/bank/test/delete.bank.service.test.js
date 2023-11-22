/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete bank service class
**/

/**
 * Importing all required modules here
 */

const deleteBankServiceData = require("../data/delete.bank.service.data")
const deleteBankService = require("../../../../src/services/bank/delete.bank.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteBankService = new deleteBankService();
const DeleteBankServiceData = new deleteBankServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.bank.ts.001] | FunctionPath : [src/services/bank/delete.bank.service.js/deleteOneBank()]", () => {


	test(DeleteBankServiceData.DELETE_ONE_BANK_TS001_TC001.description, async () => {

        const output = await DeleteBankService.deleteOneBank(
            DeleteBankServiceData.DELETE_ONE_BANK_TS001_TC001.input.databaseConnector,
            DeleteBankServiceData.DELETE_ONE_BANK_TS001_TC001.input.apiID,
            DeleteBankServiceData.DELETE_ONE_BANK_TS001_TC001.input.config,
            DeleteBankServiceData.DELETE_ONE_BANK_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteBankServiceData.DELETE_ONE_BANK_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteBankServiceData.DELETE_ONE_BANK_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteBankServiceData.DELETE_ONE_BANK_TS001_TC001.output)[2])
	});



    test(DeleteBankServiceData.DELETE_ONE_BANK_TS001_TC002.description, async () => {

        const output = await DeleteBankService.deleteOneBank(
            DeleteBankServiceData.DELETE_ONE_BANK_TS001_TC002.input.databaseConnector,
            DeleteBankServiceData.DELETE_ONE_BANK_TS001_TC002.input.apiID,
            DeleteBankServiceData.DELETE_ONE_BANK_TS001_TC002.input.config,
            DeleteBankServiceData.DELETE_ONE_BANK_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteBankServiceData.DELETE_ONE_BANK_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteBankServiceData.DELETE_ONE_BANK_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteBankServiceData.DELETE_ONE_BANK_TS001_TC002.output.message)        
	});



    test(DeleteBankServiceData.DELETE_ONE_BANK_TS001_TC003.description, async () => {

        const output = await DeleteBankService.deleteOneBank(
            DeleteBankServiceData.DELETE_ONE_BANK_TS001_TC003.input.databaseConnector,
            DeleteBankServiceData.DELETE_ONE_BANK_TS001_TC003.input.apiID,
            DeleteBankServiceData.DELETE_ONE_BANK_TS001_TC003.input.config,
            DeleteBankServiceData.DELETE_ONE_BANK_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteBankServiceData.DELETE_ONE_BANK_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteBankServiceData.DELETE_ONE_BANK_TS001_TC003.output.message)        
	});

});
