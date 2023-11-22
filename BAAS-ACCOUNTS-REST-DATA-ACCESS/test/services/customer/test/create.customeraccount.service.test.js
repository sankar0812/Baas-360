/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create customeraccount service class
**/

/**
 * Importing all required modules here
 */

const createCustomerAccountServiceData = require("../data/create.customeraccount.service.data")
const createCustomerAccountService = require("../../../../src/services/customer/create.customeraccount.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateCustomerAccountService = new createCustomerAccountService();
const CreateCustomerAccountServiceData = new createCustomerAccountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customeraccount.ts.001] | FunctionPath : [src/services/customer/create.customeraccount.service.js/createOneCustomerAccount()]", () => {


	test(CreateCustomerAccountServiceData.CREATE_ONE_CUSTOMERACCOUNT_TS001_TC001.description, async () => {

        const output = await CreateCustomerAccountService.createOneCustomerAccount(
            CreateCustomerAccountServiceData.CREATE_ONE_CUSTOMERACCOUNT_TS001_TC001.input.databaseConnector,
            CreateCustomerAccountServiceData.CREATE_ONE_CUSTOMERACCOUNT_TS001_TC001.input.apiID,
            CreateCustomerAccountServiceData.CREATE_ONE_CUSTOMERACCOUNT_TS001_TC001.input.config,
            CreateCustomerAccountServiceData.CREATE_ONE_CUSTOMERACCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateCustomerAccountServiceData.CREATE_ONE_CUSTOMERACCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateCustomerAccountServiceData.CREATE_ONE_CUSTOMERACCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateCustomerAccountServiceData.CREATE_ONE_CUSTOMERACCOUNT_TS001_TC001.output)[2])
	});



    test(CreateCustomerAccountServiceData.CREATE_ONE_CUSTOMERACCOUNT_TS001_TC002.description, async () => {

        const output = await CreateCustomerAccountService.createOneCustomerAccount(
            CreateCustomerAccountServiceData.CREATE_ONE_CUSTOMERACCOUNT_TS001_TC002.input.databaseConnector,
            CreateCustomerAccountServiceData.CREATE_ONE_CUSTOMERACCOUNT_TS001_TC002.input.apiID,
            CreateCustomerAccountServiceData.CREATE_ONE_CUSTOMERACCOUNT_TS001_TC002.input.config,
            CreateCustomerAccountServiceData.CREATE_ONE_CUSTOMERACCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateCustomerAccountServiceData.CREATE_ONE_CUSTOMERACCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(CreateCustomerAccountServiceData.CREATE_ONE_CUSTOMERACCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(CreateCustomerAccountServiceData.CREATE_ONE_CUSTOMERACCOUNT_TS001_TC002.output.message)        
	});



    test(CreateCustomerAccountServiceData.CREATE_ONE_CUSTOMERACCOUNT_TS001_TC003.description, async () => {

        const output = await CreateCustomerAccountService.createOneCustomerAccount(
            CreateCustomerAccountServiceData.CREATE_ONE_CUSTOMERACCOUNT_TS001_TC003.input.databaseConnector,
            CreateCustomerAccountServiceData.CREATE_ONE_CUSTOMERACCOUNT_TS001_TC003.input.apiID,
            CreateCustomerAccountServiceData.CREATE_ONE_CUSTOMERACCOUNT_TS001_TC003.input.config,
            CreateCustomerAccountServiceData.CREATE_ONE_CUSTOMERACCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateCustomerAccountServiceData.CREATE_ONE_CUSTOMERACCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(CreateCustomerAccountServiceData.CREATE_ONE_CUSTOMERACCOUNT_TS001_TC003.output.message)        
	});

});