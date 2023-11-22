

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update bank service class
**/

/**
 * Importing all required modules here
 */

const updateBankServiceData = require("../data/update.bank.service.data")
const updateBankService = require("../../../../src/services/bank/update.bank.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateBankService = new updateBankService();
const UpdateBankServiceData = new updateBankServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.bank.ts.001] | FunctionPath : [src/services/bank/update.bank.service.js/updateBank()]", () => {

	test(UpdateBankServiceData.UPDATE_BANK_TS001_TC001.description, async () => {

        const output = await UpdateBankService.updateBank(
            UpdateBankServiceData.UPDATE_BANK_TS001_TC001.input.databaseConnector,
            UpdateBankServiceData.UPDATE_BANK_TS001_TC001.input.apiID,
            UpdateBankServiceData.UPDATE_BANK_TS001_TC001.input.config,
            UpdateBankServiceData.UPDATE_BANK_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateBankServiceData.UPDATE_BANK_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateBankServiceData.UPDATE_BANK_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateBankServiceData.UPDATE_BANK_TS001_TC001.output)[2])
	});

    test(UpdateBankServiceData.UPDATE_BANK_TS001_TC002.description, async () => {

        const output = await UpdateBankService.updateBank(
            UpdateBankServiceData.UPDATE_BANK_TS001_TC002.input.databaseConnector,
            UpdateBankServiceData.UPDATE_BANK_TS001_TC002.input.apiID,
            UpdateBankServiceData.UPDATE_BANK_TS001_TC002.input.config,
            UpdateBankServiceData.UPDATE_BANK_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateBankServiceData.UPDATE_BANK_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateBankServiceData.UPDATE_BANK_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateBankServiceData.UPDATE_BANK_TS001_TC002.output.message)        
	});

    test(UpdateBankServiceData.UPDATE_BANK_TS001_TC003.description, async () => {

        const output = await UpdateBankService.updateBank(
            UpdateBankServiceData.UPDATE_BANK_TS001_TC003.input.databaseConnector,
            UpdateBankServiceData.UPDATE_BANK_TS001_TC003.input.apiID,
            UpdateBankServiceData.UPDATE_BANK_TS001_TC003.input.config,
            UpdateBankServiceData.UPDATE_BANK_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateBankServiceData.UPDATE_BANK_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateBankServiceData.UPDATE_BANK_TS001_TC003.output.message)        
	});

});
