/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create customeraccountbalance service class
**/

/**
 * Importing all required modules here
 */

const createCustomerAccountBalanceServiceData = require("../data/create.customeraccountbalance.service.data")
const createCustomerAccountBalanceService = require("../../../../src/services/customer/create.customeraccountbalance.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateCustomerAccountBalanceService = new createCustomerAccountBalanceService();
const CreateCustomerAccountBalanceServiceData = new createCustomerAccountBalanceServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.customeraccountbalance.ts.001] | FunctionPath : [src/services/customer/create.customeraccountbalance.service.js/createOneCustomerAccountBalance()]", () => {


	test(CreateCustomerAccountBalanceServiceData.CREATE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC001.description, async () => {

        const output = await CreateCustomerAccountBalanceService.createOneCustomerAccountBalance(
            CreateCustomerAccountBalanceServiceData.CREATE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC001.input.databaseConnector,
            CreateCustomerAccountBalanceServiceData.CREATE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC001.input.apiID,
            CreateCustomerAccountBalanceServiceData.CREATE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC001.input.config,
            CreateCustomerAccountBalanceServiceData.CREATE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateCustomerAccountBalanceServiceData.CREATE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateCustomerAccountBalanceServiceData.CREATE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateCustomerAccountBalanceServiceData.CREATE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC001.output)[2])
	});



    test(CreateCustomerAccountBalanceServiceData.CREATE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC002.description, async () => {

        const output = await CreateCustomerAccountBalanceService.createOneCustomerAccountBalance(
            CreateCustomerAccountBalanceServiceData.CREATE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC002.input.databaseConnector,
            CreateCustomerAccountBalanceServiceData.CREATE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC002.input.apiID,
            CreateCustomerAccountBalanceServiceData.CREATE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC002.input.config,
            CreateCustomerAccountBalanceServiceData.CREATE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateCustomerAccountBalanceServiceData.CREATE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateCustomerAccountBalanceServiceData.CREATE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateCustomerAccountBalanceServiceData.CREATE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC002.output.message)        
	});



    test(CreateCustomerAccountBalanceServiceData.CREATE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC003.description, async () => {

        const output = await CreateCustomerAccountBalanceService.createOneCustomerAccountBalance(
            CreateCustomerAccountBalanceServiceData.CREATE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC003.input.databaseConnector,
            CreateCustomerAccountBalanceServiceData.CREATE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC003.input.apiID,
            CreateCustomerAccountBalanceServiceData.CREATE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC003.input.config,
            CreateCustomerAccountBalanceServiceData.CREATE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateCustomerAccountBalanceServiceData.CREATE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateCustomerAccountBalanceServiceData.CREATE_ONE_CUSTOMERACCOUNTBALANCE_TS001_TC003.output.message)        
	});

});