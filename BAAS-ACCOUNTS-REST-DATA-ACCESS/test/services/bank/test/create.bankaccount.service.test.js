/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create bankaccount service class
**/

/**
 * Importing all required modules here
 */

const createBankAccountServiceData = require("../data/create.bankaccount.service.data")
const createBankAccountService = require("../../../../src/services/bank/create.bankaccount.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateBankAccountService = new createBankAccountService();
const CreateBankAccountServiceData = new createBankAccountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.bankaccount.ts.001] | FunctionPath : [src/services/bank/create.bankaccount.service.js/createOneBankAccount()]", () => {


	test(CreateBankAccountServiceData.CREATE_ONE_BANKACCOUNT_TS001_TC001.description, async () => {

        const output = await CreateBankAccountService.createOneBankAccount(
            CreateBankAccountServiceData.CREATE_ONE_BANKACCOUNT_TS001_TC001.input.databaseConnector,
            CreateBankAccountServiceData.CREATE_ONE_BANKACCOUNT_TS001_TC001.input.apiID,
            CreateBankAccountServiceData.CREATE_ONE_BANKACCOUNT_TS001_TC001.input.config,
            CreateBankAccountServiceData.CREATE_ONE_BANKACCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateBankAccountServiceData.CREATE_ONE_BANKACCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateBankAccountServiceData.CREATE_ONE_BANKACCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateBankAccountServiceData.CREATE_ONE_BANKACCOUNT_TS001_TC001.output)[2])
	});



    test(CreateBankAccountServiceData.CREATE_ONE_BANKACCOUNT_TS001_TC002.description, async () => {

        const output = await CreateBankAccountService.createOneBankAccount(
            CreateBankAccountServiceData.CREATE_ONE_BANKACCOUNT_TS001_TC002.input.databaseConnector,
            CreateBankAccountServiceData.CREATE_ONE_BANKACCOUNT_TS001_TC002.input.apiID,
            CreateBankAccountServiceData.CREATE_ONE_BANKACCOUNT_TS001_TC002.input.config,
            CreateBankAccountServiceData.CREATE_ONE_BANKACCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateBankAccountServiceData.CREATE_ONE_BANKACCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(CreateBankAccountServiceData.CREATE_ONE_BANKACCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(CreateBankAccountServiceData.CREATE_ONE_BANKACCOUNT_TS001_TC002.output.message)        
	});



    test(CreateBankAccountServiceData.CREATE_ONE_BANKACCOUNT_TS001_TC003.description, async () => {

        const output = await CreateBankAccountService.createOneBankAccount(
            CreateBankAccountServiceData.CREATE_ONE_BANKACCOUNT_TS001_TC003.input.databaseConnector,
            CreateBankAccountServiceData.CREATE_ONE_BANKACCOUNT_TS001_TC003.input.apiID,
            CreateBankAccountServiceData.CREATE_ONE_BANKACCOUNT_TS001_TC003.input.config,
            CreateBankAccountServiceData.CREATE_ONE_BANKACCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateBankAccountServiceData.CREATE_ONE_BANKACCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(CreateBankAccountServiceData.CREATE_ONE_BANKACCOUNT_TS001_TC003.output.message)        
	});

});