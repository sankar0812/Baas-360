/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create customeraccounttransaction service class
**/

/**
 * Importing all required modules here
 */

const createCustomerAccountTransactionServiceData = require("../data/create.customeraccounttransaction.service.data")
const createCustomerAccountTransactionService = require("../../../../src/services/customer/create.customeraccounttransaction.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateCustomerAccountTransactionService = new createCustomerAccountTransactionService();
const CreateCustomerAccountTransactionServiceData = new createCustomerAccountTransactionServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customeraccounttransaction.ts.001] | FunctionPath : [src/services/customer/create.customeraccounttransaction.service.js/createOneCustomerAccountTransaction()]", () => {


	test(CreateCustomerAccountTransactionServiceData.CREATE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.description, async () => {

        const output = await CreateCustomerAccountTransactionService.createOneCustomerAccountTransaction(
            CreateCustomerAccountTransactionServiceData.CREATE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.input.databaseConnector,
            CreateCustomerAccountTransactionServiceData.CREATE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.input.apiID,
            CreateCustomerAccountTransactionServiceData.CREATE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.input.config,
            CreateCustomerAccountTransactionServiceData.CREATE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateCustomerAccountTransactionServiceData.CREATE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateCustomerAccountTransactionServiceData.CREATE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateCustomerAccountTransactionServiceData.CREATE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC001.output)[2])
	});



    test(CreateCustomerAccountTransactionServiceData.CREATE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.description, async () => {

        const output = await CreateCustomerAccountTransactionService.createOneCustomerAccountTransaction(
            CreateCustomerAccountTransactionServiceData.CREATE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.input.databaseConnector,
            CreateCustomerAccountTransactionServiceData.CREATE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.input.apiID,
            CreateCustomerAccountTransactionServiceData.CREATE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.input.config,
            CreateCustomerAccountTransactionServiceData.CREATE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateCustomerAccountTransactionServiceData.CREATE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.output.data)
        expect(output.status).toBe(CreateCustomerAccountTransactionServiceData.CREATE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.output.status)
        expect(output.message).toBe(CreateCustomerAccountTransactionServiceData.CREATE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC002.output.message)        
	});



    test(CreateCustomerAccountTransactionServiceData.CREATE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.description, async () => {

        const output = await CreateCustomerAccountTransactionService.createOneCustomerAccountTransaction(
            CreateCustomerAccountTransactionServiceData.CREATE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.input.databaseConnector,
            CreateCustomerAccountTransactionServiceData.CREATE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.input.apiID,
            CreateCustomerAccountTransactionServiceData.CREATE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.input.config,
            CreateCustomerAccountTransactionServiceData.CREATE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateCustomerAccountTransactionServiceData.CREATE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.output.status)
        expect(output.message).toBe(CreateCustomerAccountTransactionServiceData.CREATE_ONE_CUSTOMERACCOUNTTRANSACTION_TS001_TC003.output.message)        
	});

});