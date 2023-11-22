/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create bankaccountbalance service class
**/

/**
 * Importing all required modules here
 */

const createBankAccountBalanceServiceData = require("../data/create.bankaccountbalance.service.data")
const createBankAccountBalanceService = require("../../../../src/services/bank/create.bankaccountbalance.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateBankAccountBalanceService = new createBankAccountBalanceService();
const CreateBankAccountBalanceServiceData = new createBankAccountBalanceServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.bankaccountbalance.ts.001] | FunctionPath : [src/services/bank/create.bankaccountbalance.service.js/createOneBankAccountBalance()]", () => {


	test(CreateBankAccountBalanceServiceData.CREATE_ONE_BANKACCOUNTBALANCE_TS001_TC001.description, async () => {

        const output = await CreateBankAccountBalanceService.createOneBankAccountBalance(
            CreateBankAccountBalanceServiceData.CREATE_ONE_BANKACCOUNTBALANCE_TS001_TC001.input.databaseConnector,
            CreateBankAccountBalanceServiceData.CREATE_ONE_BANKACCOUNTBALANCE_TS001_TC001.input.apiID,
            CreateBankAccountBalanceServiceData.CREATE_ONE_BANKACCOUNTBALANCE_TS001_TC001.input.config,
            CreateBankAccountBalanceServiceData.CREATE_ONE_BANKACCOUNTBALANCE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateBankAccountBalanceServiceData.CREATE_ONE_BANKACCOUNTBALANCE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateBankAccountBalanceServiceData.CREATE_ONE_BANKACCOUNTBALANCE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateBankAccountBalanceServiceData.CREATE_ONE_BANKACCOUNTBALANCE_TS001_TC001.output)[2])
	});



    test(CreateBankAccountBalanceServiceData.CREATE_ONE_BANKACCOUNTBALANCE_TS001_TC002.description, async () => {

        const output = await CreateBankAccountBalanceService.createOneBankAccountBalance(
            CreateBankAccountBalanceServiceData.CREATE_ONE_BANKACCOUNTBALANCE_TS001_TC002.input.databaseConnector,
            CreateBankAccountBalanceServiceData.CREATE_ONE_BANKACCOUNTBALANCE_TS001_TC002.input.apiID,
            CreateBankAccountBalanceServiceData.CREATE_ONE_BANKACCOUNTBALANCE_TS001_TC002.input.config,
            CreateBankAccountBalanceServiceData.CREATE_ONE_BANKACCOUNTBALANCE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateBankAccountBalanceServiceData.CREATE_ONE_BANKACCOUNTBALANCE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateBankAccountBalanceServiceData.CREATE_ONE_BANKACCOUNTBALANCE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateBankAccountBalanceServiceData.CREATE_ONE_BANKACCOUNTBALANCE_TS001_TC002.output.message)        
	});



    test(CreateBankAccountBalanceServiceData.CREATE_ONE_BANKACCOUNTBALANCE_TS001_TC003.description, async () => {

        const output = await CreateBankAccountBalanceService.createOneBankAccountBalance(
            CreateBankAccountBalanceServiceData.CREATE_ONE_BANKACCOUNTBALANCE_TS001_TC003.input.databaseConnector,
            CreateBankAccountBalanceServiceData.CREATE_ONE_BANKACCOUNTBALANCE_TS001_TC003.input.apiID,
            CreateBankAccountBalanceServiceData.CREATE_ONE_BANKACCOUNTBALANCE_TS001_TC003.input.config,
            CreateBankAccountBalanceServiceData.CREATE_ONE_BANKACCOUNTBALANCE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateBankAccountBalanceServiceData.CREATE_ONE_BANKACCOUNTBALANCE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateBankAccountBalanceServiceData.CREATE_ONE_BANKACCOUNTBALANCE_TS001_TC003.output.message)        
	});

});