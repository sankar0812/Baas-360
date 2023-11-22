/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read BankTransaction service class
**/

/**
 * Importing all required modules here
 */

const readBankTransactionServiceData = require("../data/read.banktransaction.service.data")
const readBankTransactionService = require("../../../../src/services/bank/read.banktransaction.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadBankTransactionService = new readBankTransactionService();
const ReadBankTransactionServiceData = new readBankTransactionServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.banktransaction.ts.001] | FunctionPath : [src/services/bank/read.contianer.service.js/readBankTransactions()]", () => {


	test(ReadBankTransactionServiceData.READ_BANKTRANSACTION_TS001_TC001.description, async () => {

        const output = await ReadBankTransactionService.readBankTransactions(
            ReadBankTransactionServiceData.READ_BANKTRANSACTION_TS001_TC001.input.databaseConnector,
            ReadBankTransactionServiceData.READ_BANKTRANSACTION_TS001_TC001.input.apiID,
            ReadBankTransactionServiceData.READ_BANKTRANSACTION_TS001_TC001.input.config,
            ReadBankTransactionServiceData.READ_BANKTRANSACTION_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadBankTransactionServiceData.READ_BANKTRANSACTION_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadBankTransactionServiceData.READ_BANKTRANSACTION_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadBankTransactionServiceData.READ_BANKTRANSACTION_TS001_TC001.output)[2])
	});



    test(ReadBankTransactionServiceData.READ_BANKTRANSACTION_TS001_TC002.description, async () => {

        const output = await ReadBankTransactionService.readBankTransactions(
            ReadBankTransactionServiceData.READ_BANKTRANSACTION_TS001_TC002.input.databaseConnector,
            ReadBankTransactionServiceData.READ_BANKTRANSACTION_TS001_TC002.input.apiID,
            ReadBankTransactionServiceData.READ_BANKTRANSACTION_TS001_TC002.input.config,
            ReadBankTransactionServiceData.READ_BANKTRANSACTION_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadBankTransactionServiceData.READ_BANKTRANSACTION_TS001_TC002.output.data)
        expect(output.status).toBe(ReadBankTransactionServiceData.READ_BANKTRANSACTION_TS001_TC002.output.status)
        expect(output.message).toBe(ReadBankTransactionServiceData.READ_BANKTRANSACTION_TS001_TC002.output.message)        
	});



    test(ReadBankTransactionServiceData.READ_BANKTRANSACTION_TS001_TC003.description, async () => {

        const output = await ReadBankTransactionService.readBankTransactions(
            ReadBankTransactionServiceData.READ_BANKTRANSACTION_TS001_TC003.input.databaseConnector,
            ReadBankTransactionServiceData.READ_BANKTRANSACTION_TS001_TC003.input.apiID,
            ReadBankTransactionServiceData.READ_BANKTRANSACTION_TS001_TC003.input.config,
            ReadBankTransactionServiceData.READ_BANKTRANSACTION_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadBankTransactionServiceData.READ_BANKTRANSACTION_TS001_TC003.output.status)
        expect(output.message).toBe(ReadBankTransactionServiceData.READ_BANKTRANSACTION_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.banktransaction.ts.002] | FunctionPath : [src/services/bank/read.banktransaction.service.js/readOneBankTransaction()]", () => {


	test(ReadBankTransactionServiceData.READ_ONE_BANKTRANSACTION_TS002_TC001.description, async () => {

        const output = await ReadBankTransactionService.readOneBankTransaction(
            ReadBankTransactionServiceData.READ_ONE_BANKTRANSACTION_TS002_TC001.input.databaseConnector,
            ReadBankTransactionServiceData.READ_ONE_BANKTRANSACTION_TS002_TC001.input.apiID,
            ReadBankTransactionServiceData.READ_ONE_BANKTRANSACTION_TS002_TC001.input.config,
            ReadBankTransactionServiceData.READ_ONE_BANKTRANSACTION_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadBankTransactionServiceData.READ_ONE_BANKTRANSACTION_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadBankTransactionServiceData.READ_ONE_BANKTRANSACTION_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadBankTransactionServiceData.READ_ONE_BANKTRANSACTION_TS002_TC001.output)[2])
	});



    test(ReadBankTransactionServiceData.READ_ONE_BANKTRANSACTION_TS002_TC002.description, async () => {

        const output = await ReadBankTransactionService.readOneBankTransaction(
            ReadBankTransactionServiceData.READ_ONE_BANKTRANSACTION_TS002_TC002.input.databaseConnector,
            ReadBankTransactionServiceData.READ_ONE_BANKTRANSACTION_TS002_TC002.input.apiID,
            ReadBankTransactionServiceData.READ_ONE_BANKTRANSACTION_TS002_TC002.input.config,
            ReadBankTransactionServiceData.READ_ONE_BANKTRANSACTION_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadBankTransactionServiceData.READ_ONE_BANKTRANSACTION_TS002_TC002.output.data)
        expect(output.status).toBe(ReadBankTransactionServiceData.READ_ONE_BANKTRANSACTION_TS002_TC002.output.status)
        expect(output.message).toBe(ReadBankTransactionServiceData.READ_ONE_BANKTRANSACTION_TS002_TC002.output.message)        
	});



    test(ReadBankTransactionServiceData.READ_ONE_BANKTRANSACTION_TS002_TC003.description, async () => {

        const output = await ReadBankTransactionService.readOneBankTransaction(
            ReadBankTransactionServiceData.READ_ONE_BANKTRANSACTION_TS002_TC003.input.databaseConnector,
            ReadBankTransactionServiceData.READ_ONE_BANKTRANSACTION_TS002_TC003.input.apiID,
            ReadBankTransactionServiceData.READ_ONE_BANKTRANSACTION_TS002_TC003.input.config,
            ReadBankTransactionServiceData.READ_ONE_BANKTRANSACTION_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadBankTransactionServiceData.READ_ONE_BANKTRANSACTION_TS002_TC003.output.status)
        expect(output.message).toBe(ReadBankTransactionServiceData.READ_ONE_BANKTRANSACTION_TS002_TC003.output.message)        
	});

});