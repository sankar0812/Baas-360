/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create bank service class
**/

/**
 * Importing all required modules here
 */

const createBankServiceData = require("../data/create.bank.service.data")
const createBankService = require("../../../../src/services/bank/create.bank.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateBankService = new createBankService();
const CreateBankServiceData = new createBankServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.bank.ts.001] | FunctionPath : [src/services/bank/create.bank.service.js/createOneBank()]", () => {


	test(CreateBankServiceData.CREATE_ONE_BANK_TS001_TC001.description, async () => {

        const output = await CreateBankService.createOneBank(
            CreateBankServiceData.CREATE_ONE_BANK_TS001_TC001.input.databaseConnector,
            CreateBankServiceData.CREATE_ONE_BANK_TS001_TC001.input.apiID,
            CreateBankServiceData.CREATE_ONE_BANK_TS001_TC001.input.config,
            CreateBankServiceData.CREATE_ONE_BANK_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateBankServiceData.CREATE_ONE_BANK_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateBankServiceData.CREATE_ONE_BANK_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateBankServiceData.CREATE_ONE_BANK_TS001_TC001.output)[2])
	});



    test(CreateBankServiceData.CREATE_ONE_BANK_TS001_TC002.description, async () => {

        const output = await CreateBankService.createOneBank(
            CreateBankServiceData.CREATE_ONE_BANK_TS001_TC002.input.databaseConnector,
            CreateBankServiceData.CREATE_ONE_BANK_TS001_TC002.input.apiID,
            CreateBankServiceData.CREATE_ONE_BANK_TS001_TC002.input.config,
            CreateBankServiceData.CREATE_ONE_BANK_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateBankServiceData.CREATE_ONE_BANK_TS001_TC002.output.data)
        expect(output.status).toBe(CreateBankServiceData.CREATE_ONE_BANK_TS001_TC002.output.status)
        expect(output.message).toBe(CreateBankServiceData.CREATE_ONE_BANK_TS001_TC002.output.message)        
	});



    test(CreateBankServiceData.CREATE_ONE_BANK_TS001_TC003.description, async () => {

        const output = await CreateBankService.createOneBank(
            CreateBankServiceData.CREATE_ONE_BANK_TS001_TC003.input.databaseConnector,
            CreateBankServiceData.CREATE_ONE_BANK_TS001_TC003.input.apiID,
            CreateBankServiceData.CREATE_ONE_BANK_TS001_TC003.input.config,
            CreateBankServiceData.CREATE_ONE_BANK_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateBankServiceData.CREATE_ONE_BANK_TS001_TC003.output.status)
        expect(output.message).toBe(CreateBankServiceData.CREATE_ONE_BANK_TS001_TC003.output.message)        
	});

});