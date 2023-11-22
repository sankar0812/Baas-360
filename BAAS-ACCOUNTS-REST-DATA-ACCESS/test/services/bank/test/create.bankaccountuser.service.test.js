/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create bankaccountuser service class
**/

/**
 * Importing all required modules here
 */

const createBankAccountUserServiceData = require("../data/create.bankaccountuser.service.data")
const createBankAccountUserService = require("../../../../src/services/bank/create.bankaccountuser.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateBankAccountUserService = new createBankAccountUserService();
const CreateBankAccountUserServiceData = new createBankAccountUserServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.bankaccountuser.ts.001] | FunctionPath : [src/services/bank/create.bankaccountuser.service.js/createOneBankAccountUser()]", () => {


	test(CreateBankAccountUserServiceData.CREATE_ONE_BANKACCOUNTUSER_TS001_TC001.description, async () => {

        const output = await CreateBankAccountUserService.createOneBankAccountUser(
            CreateBankAccountUserServiceData.CREATE_ONE_BANKACCOUNTUSER_TS001_TC001.input.databaseConnector,
            CreateBankAccountUserServiceData.CREATE_ONE_BANKACCOUNTUSER_TS001_TC001.input.apiID,
            CreateBankAccountUserServiceData.CREATE_ONE_BANKACCOUNTUSER_TS001_TC001.input.config,
            CreateBankAccountUserServiceData.CREATE_ONE_BANKACCOUNTUSER_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateBankAccountUserServiceData.CREATE_ONE_BANKACCOUNTUSER_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateBankAccountUserServiceData.CREATE_ONE_BANKACCOUNTUSER_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateBankAccountUserServiceData.CREATE_ONE_BANKACCOUNTUSER_TS001_TC001.output)[2])
	});



    test(CreateBankAccountUserServiceData.CREATE_ONE_BANKACCOUNTUSER_TS001_TC002.description, async () => {

        const output = await CreateBankAccountUserService.createOneBankAccountUser(
            CreateBankAccountUserServiceData.CREATE_ONE_BANKACCOUNTUSER_TS001_TC002.input.databaseConnector,
            CreateBankAccountUserServiceData.CREATE_ONE_BANKACCOUNTUSER_TS001_TC002.input.apiID,
            CreateBankAccountUserServiceData.CREATE_ONE_BANKACCOUNTUSER_TS001_TC002.input.config,
            CreateBankAccountUserServiceData.CREATE_ONE_BANKACCOUNTUSER_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateBankAccountUserServiceData.CREATE_ONE_BANKACCOUNTUSER_TS001_TC002.output.data)
        expect(output.status).toBe(CreateBankAccountUserServiceData.CREATE_ONE_BANKACCOUNTUSER_TS001_TC002.output.status)
        expect(output.message).toBe(CreateBankAccountUserServiceData.CREATE_ONE_BANKACCOUNTUSER_TS001_TC002.output.message)        
	});



    test(CreateBankAccountUserServiceData.CREATE_ONE_BANKACCOUNTUSER_TS001_TC003.description, async () => {

        const output = await CreateBankAccountUserService.createOneBankAccountUser(
            CreateBankAccountUserServiceData.CREATE_ONE_BANKACCOUNTUSER_TS001_TC003.input.databaseConnector,
            CreateBankAccountUserServiceData.CREATE_ONE_BANKACCOUNTUSER_TS001_TC003.input.apiID,
            CreateBankAccountUserServiceData.CREATE_ONE_BANKACCOUNTUSER_TS001_TC003.input.config,
            CreateBankAccountUserServiceData.CREATE_ONE_BANKACCOUNTUSER_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateBankAccountUserServiceData.CREATE_ONE_BANKACCOUNTUSER_TS001_TC003.output.status)
        expect(output.message).toBe(CreateBankAccountUserServiceData.CREATE_ONE_BANKACCOUNTUSER_TS001_TC003.output.message)        
	});

});