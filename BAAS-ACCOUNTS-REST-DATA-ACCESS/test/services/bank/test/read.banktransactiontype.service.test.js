/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read BankTransactionType service class
**/

/**
 * Importing all required modules here
 */

const readBankTransactionTypeServiceData = require("../data/read.banktransactiontype.service.data")
const readBankTransactionTypeService = require("../../../../src/services/bank/read.banktransactiontype.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadBankTransactionTypeService = new readBankTransactionTypeService();
const ReadBankTransactionTypeServiceData = new readBankTransactionTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.banktransactiontype.ts.001] | FunctionPath : [src/services/bank/read.contianer.service.js/readBankTransactionTypes()]", () => {


	test(ReadBankTransactionTypeServiceData.READ_BANKTRANSACTIONTYPE_TS001_TC001.description, async () => {

        const output = await ReadBankTransactionTypeService.readBankTransactionTypes(
            ReadBankTransactionTypeServiceData.READ_BANKTRANSACTIONTYPE_TS001_TC001.input.databaseConnector,
            ReadBankTransactionTypeServiceData.READ_BANKTRANSACTIONTYPE_TS001_TC001.input.apiID,
            ReadBankTransactionTypeServiceData.READ_BANKTRANSACTIONTYPE_TS001_TC001.input.config,
            ReadBankTransactionTypeServiceData.READ_BANKTRANSACTIONTYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadBankTransactionTypeServiceData.READ_BANKTRANSACTIONTYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadBankTransactionTypeServiceData.READ_BANKTRANSACTIONTYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadBankTransactionTypeServiceData.READ_BANKTRANSACTIONTYPE_TS001_TC001.output)[2])
	});



    test(ReadBankTransactionTypeServiceData.READ_BANKTRANSACTIONTYPE_TS001_TC002.description, async () => {

        const output = await ReadBankTransactionTypeService.readBankTransactionTypes(
            ReadBankTransactionTypeServiceData.READ_BANKTRANSACTIONTYPE_TS001_TC002.input.databaseConnector,
            ReadBankTransactionTypeServiceData.READ_BANKTRANSACTIONTYPE_TS001_TC002.input.apiID,
            ReadBankTransactionTypeServiceData.READ_BANKTRANSACTIONTYPE_TS001_TC002.input.config,
            ReadBankTransactionTypeServiceData.READ_BANKTRANSACTIONTYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadBankTransactionTypeServiceData.READ_BANKTRANSACTIONTYPE_TS001_TC002.output.data)
        expect(output.status).toBe(ReadBankTransactionTypeServiceData.READ_BANKTRANSACTIONTYPE_TS001_TC002.output.status)
        expect(output.message).toBe(ReadBankTransactionTypeServiceData.READ_BANKTRANSACTIONTYPE_TS001_TC002.output.message)        
	});



    test(ReadBankTransactionTypeServiceData.READ_BANKTRANSACTIONTYPE_TS001_TC003.description, async () => {

        const output = await ReadBankTransactionTypeService.readBankTransactionTypes(
            ReadBankTransactionTypeServiceData.READ_BANKTRANSACTIONTYPE_TS001_TC003.input.databaseConnector,
            ReadBankTransactionTypeServiceData.READ_BANKTRANSACTIONTYPE_TS001_TC003.input.apiID,
            ReadBankTransactionTypeServiceData.READ_BANKTRANSACTIONTYPE_TS001_TC003.input.config,
            ReadBankTransactionTypeServiceData.READ_BANKTRANSACTIONTYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadBankTransactionTypeServiceData.READ_BANKTRANSACTIONTYPE_TS001_TC003.output.status)
        expect(output.message).toBe(ReadBankTransactionTypeServiceData.READ_BANKTRANSACTIONTYPE_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.banktransactiontype.ts.002] | FunctionPath : [src/services/bank/read.banktransactiontype.service.js/readOneBankTransactionType()]", () => {


	test(ReadBankTransactionTypeServiceData.READ_ONE_BANKTRANSACTIONTYPE_TS002_TC001.description, async () => {

        const output = await ReadBankTransactionTypeService.readOneBankTransactionType(
            ReadBankTransactionTypeServiceData.READ_ONE_BANKTRANSACTIONTYPE_TS002_TC001.input.databaseConnector,
            ReadBankTransactionTypeServiceData.READ_ONE_BANKTRANSACTIONTYPE_TS002_TC001.input.apiID,
            ReadBankTransactionTypeServiceData.READ_ONE_BANKTRANSACTIONTYPE_TS002_TC001.input.config,
            ReadBankTransactionTypeServiceData.READ_ONE_BANKTRANSACTIONTYPE_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadBankTransactionTypeServiceData.READ_ONE_BANKTRANSACTIONTYPE_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadBankTransactionTypeServiceData.READ_ONE_BANKTRANSACTIONTYPE_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadBankTransactionTypeServiceData.READ_ONE_BANKTRANSACTIONTYPE_TS002_TC001.output)[2])
	});



    test(ReadBankTransactionTypeServiceData.READ_ONE_BANKTRANSACTIONTYPE_TS002_TC002.description, async () => {

        const output = await ReadBankTransactionTypeService.readOneBankTransactionType(
            ReadBankTransactionTypeServiceData.READ_ONE_BANKTRANSACTIONTYPE_TS002_TC002.input.databaseConnector,
            ReadBankTransactionTypeServiceData.READ_ONE_BANKTRANSACTIONTYPE_TS002_TC002.input.apiID,
            ReadBankTransactionTypeServiceData.READ_ONE_BANKTRANSACTIONTYPE_TS002_TC002.input.config,
            ReadBankTransactionTypeServiceData.READ_ONE_BANKTRANSACTIONTYPE_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadBankTransactionTypeServiceData.READ_ONE_BANKTRANSACTIONTYPE_TS002_TC002.output.data)
        expect(output.status).toBe(ReadBankTransactionTypeServiceData.READ_ONE_BANKTRANSACTIONTYPE_TS002_TC002.output.status)
        expect(output.message).toBe(ReadBankTransactionTypeServiceData.READ_ONE_BANKTRANSACTIONTYPE_TS002_TC002.output.message)        
	});



    test(ReadBankTransactionTypeServiceData.READ_ONE_BANKTRANSACTIONTYPE_TS002_TC003.description, async () => {

        const output = await ReadBankTransactionTypeService.readOneBankTransactionType(
            ReadBankTransactionTypeServiceData.READ_ONE_BANKTRANSACTIONTYPE_TS002_TC003.input.databaseConnector,
            ReadBankTransactionTypeServiceData.READ_ONE_BANKTRANSACTIONTYPE_TS002_TC003.input.apiID,
            ReadBankTransactionTypeServiceData.READ_ONE_BANKTRANSACTIONTYPE_TS002_TC003.input.config,
            ReadBankTransactionTypeServiceData.READ_ONE_BANKTRANSACTIONTYPE_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadBankTransactionTypeServiceData.READ_ONE_BANKTRANSACTIONTYPE_TS002_TC003.output.status)
        expect(output.message).toBe(ReadBankTransactionTypeServiceData.READ_ONE_BANKTRANSACTIONTYPE_TS002_TC003.output.message)        
	});

});