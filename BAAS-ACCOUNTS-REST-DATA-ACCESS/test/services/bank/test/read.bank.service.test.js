/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Bank service class
**/

/**
 * Importing all required modules here
 */

const readBankServiceData = require("../data/read.bank.service.data")
const readBankService = require("../../../../src/services/bank/read.bank.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadBankService = new readBankService();
const ReadBankServiceData = new readBankServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.bank.ts.001] | FunctionPath : [src/services/bank/read.contianer.service.js/readBanks()]", () => {


	test(ReadBankServiceData.READ_BANK_TS001_TC001.description, async () => {

        const output = await ReadBankService.readBanks(
            ReadBankServiceData.READ_BANK_TS001_TC001.input.databaseConnector,
            ReadBankServiceData.READ_BANK_TS001_TC001.input.apiID,
            ReadBankServiceData.READ_BANK_TS001_TC001.input.config,
            ReadBankServiceData.READ_BANK_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadBankServiceData.READ_BANK_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadBankServiceData.READ_BANK_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadBankServiceData.READ_BANK_TS001_TC001.output)[2])
	});



    test(ReadBankServiceData.READ_BANK_TS001_TC002.description, async () => {

        const output = await ReadBankService.readBanks(
            ReadBankServiceData.READ_BANK_TS001_TC002.input.databaseConnector,
            ReadBankServiceData.READ_BANK_TS001_TC002.input.apiID,
            ReadBankServiceData.READ_BANK_TS001_TC002.input.config,
            ReadBankServiceData.READ_BANK_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadBankServiceData.READ_BANK_TS001_TC002.output.data)
        expect(output.status).toBe(ReadBankServiceData.READ_BANK_TS001_TC002.output.status)
        expect(output.message).toBe(ReadBankServiceData.READ_BANK_TS001_TC002.output.message)        
	});



    test(ReadBankServiceData.READ_BANK_TS001_TC003.description, async () => {

        const output = await ReadBankService.readBanks(
            ReadBankServiceData.READ_BANK_TS001_TC003.input.databaseConnector,
            ReadBankServiceData.READ_BANK_TS001_TC003.input.apiID,
            ReadBankServiceData.READ_BANK_TS001_TC003.input.config,
            ReadBankServiceData.READ_BANK_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadBankServiceData.READ_BANK_TS001_TC003.output.status)
        expect(output.message).toBe(ReadBankServiceData.READ_BANK_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.bank.ts.002] | FunctionPath : [src/services/bank/read.bank.service.js/readOneBank()]", () => {


	test(ReadBankServiceData.READ_ONE_BANK_TS002_TC001.description, async () => {

        const output = await ReadBankService.readOneBank(
            ReadBankServiceData.READ_ONE_BANK_TS002_TC001.input.databaseConnector,
            ReadBankServiceData.READ_ONE_BANK_TS002_TC001.input.apiID,
            ReadBankServiceData.READ_ONE_BANK_TS002_TC001.input.config,
            ReadBankServiceData.READ_ONE_BANK_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadBankServiceData.READ_ONE_BANK_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadBankServiceData.READ_ONE_BANK_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadBankServiceData.READ_ONE_BANK_TS002_TC001.output)[2])
	});



    test(ReadBankServiceData.READ_ONE_BANK_TS002_TC002.description, async () => {

        const output = await ReadBankService.readOneBank(
            ReadBankServiceData.READ_ONE_BANK_TS002_TC002.input.databaseConnector,
            ReadBankServiceData.READ_ONE_BANK_TS002_TC002.input.apiID,
            ReadBankServiceData.READ_ONE_BANK_TS002_TC002.input.config,
            ReadBankServiceData.READ_ONE_BANK_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadBankServiceData.READ_ONE_BANK_TS002_TC002.output.data)
        expect(output.status).toBe(ReadBankServiceData.READ_ONE_BANK_TS002_TC002.output.status)
        expect(output.message).toBe(ReadBankServiceData.READ_ONE_BANK_TS002_TC002.output.message)        
	});



    test(ReadBankServiceData.READ_ONE_BANK_TS002_TC003.description, async () => {

        const output = await ReadBankService.readOneBank(
            ReadBankServiceData.READ_ONE_BANK_TS002_TC003.input.databaseConnector,
            ReadBankServiceData.READ_ONE_BANK_TS002_TC003.input.apiID,
            ReadBankServiceData.READ_ONE_BANK_TS002_TC003.input.config,
            ReadBankServiceData.READ_ONE_BANK_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadBankServiceData.READ_ONE_BANK_TS002_TC003.output.status)
        expect(output.message).toBe(ReadBankServiceData.READ_ONE_BANK_TS002_TC003.output.message)        
	});

});