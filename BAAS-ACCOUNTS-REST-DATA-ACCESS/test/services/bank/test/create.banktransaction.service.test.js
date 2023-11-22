/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create banktransaction service class
**/

/**
 * Importing all required modules here
 */

const createBankTransactionServiceData = require("../data/create.banktransaction.service.data")
const createBankTransactionService = require("../../../../src/services/bank/create.banktransaction.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateBankTransactionService = new createBankTransactionService();
const CreateBankTransactionServiceData = new createBankTransactionServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.banktransaction.ts.001] | FunctionPath : [src/services/bank/create.banktransaction.service.js/createOneBankTransaction()]", () => {


	test(CreateBankTransactionServiceData.CREATE_ONE_BANKTRANSACTION_TS001_TC001.description, async () => {

        const output = await CreateBankTransactionService.createOneBankTransaction(
            CreateBankTransactionServiceData.CREATE_ONE_BANKTRANSACTION_TS001_TC001.input.databaseConnector,
            CreateBankTransactionServiceData.CREATE_ONE_BANKTRANSACTION_TS001_TC001.input.apiID,
            CreateBankTransactionServiceData.CREATE_ONE_BANKTRANSACTION_TS001_TC001.input.config,
            CreateBankTransactionServiceData.CREATE_ONE_BANKTRANSACTION_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateBankTransactionServiceData.CREATE_ONE_BANKTRANSACTION_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateBankTransactionServiceData.CREATE_ONE_BANKTRANSACTION_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateBankTransactionServiceData.CREATE_ONE_BANKTRANSACTION_TS001_TC001.output)[2])
	});



    test(CreateBankTransactionServiceData.CREATE_ONE_BANKTRANSACTION_TS001_TC002.description, async () => {

        const output = await CreateBankTransactionService.createOneBankTransaction(
            CreateBankTransactionServiceData.CREATE_ONE_BANKTRANSACTION_TS001_TC002.input.databaseConnector,
            CreateBankTransactionServiceData.CREATE_ONE_BANKTRANSACTION_TS001_TC002.input.apiID,
            CreateBankTransactionServiceData.CREATE_ONE_BANKTRANSACTION_TS001_TC002.input.config,
            CreateBankTransactionServiceData.CREATE_ONE_BANKTRANSACTION_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateBankTransactionServiceData.CREATE_ONE_BANKTRANSACTION_TS001_TC002.output.data)
        expect(output.status).toBe(CreateBankTransactionServiceData.CREATE_ONE_BANKTRANSACTION_TS001_TC002.output.status)
        expect(output.message).toBe(CreateBankTransactionServiceData.CREATE_ONE_BANKTRANSACTION_TS001_TC002.output.message)        
	});



    test(CreateBankTransactionServiceData.CREATE_ONE_BANKTRANSACTION_TS001_TC003.description, async () => {

        const output = await CreateBankTransactionService.createOneBankTransaction(
            CreateBankTransactionServiceData.CREATE_ONE_BANKTRANSACTION_TS001_TC003.input.databaseConnector,
            CreateBankTransactionServiceData.CREATE_ONE_BANKTRANSACTION_TS001_TC003.input.apiID,
            CreateBankTransactionServiceData.CREATE_ONE_BANKTRANSACTION_TS001_TC003.input.config,
            CreateBankTransactionServiceData.CREATE_ONE_BANKTRANSACTION_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateBankTransactionServiceData.CREATE_ONE_BANKTRANSACTION_TS001_TC003.output.status)
        expect(output.message).toBe(CreateBankTransactionServiceData.CREATE_ONE_BANKTRANSACTION_TS001_TC003.output.message)        
	});

});