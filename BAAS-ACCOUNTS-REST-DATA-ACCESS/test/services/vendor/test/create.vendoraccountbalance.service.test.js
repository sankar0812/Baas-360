/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create vendoraccountbalance service class
**/

/**
 * Importing all required modules here
 */

const createVendorAccountBalanceServiceData = require("../data/create.vendoraccountbalance.service.data")
const createVendorAccountBalanceService = require("../../../../src/services/vendor/create.vendoraccountbalance.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateVendorAccountBalanceService = new createVendorAccountBalanceService();
const CreateVendorAccountBalanceServiceData = new createVendorAccountBalanceServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.vendoraccountbalance.ts.001] | FunctionPath : [src/services/vendor/create.vendoraccountbalance.service.js/createOneVendorAccountBalance()]", () => {


	test(CreateVendorAccountBalanceServiceData.CREATE_ONE_VENDORACCOUNTBALANCE_TS001_TC001.description, async () => {

        const output = await CreateVendorAccountBalanceService.createOneVendorAccountBalance(
            CreateVendorAccountBalanceServiceData.CREATE_ONE_VENDORACCOUNTBALANCE_TS001_TC001.input.databaseConnector,
            CreateVendorAccountBalanceServiceData.CREATE_ONE_VENDORACCOUNTBALANCE_TS001_TC001.input.apiID,
            CreateVendorAccountBalanceServiceData.CREATE_ONE_VENDORACCOUNTBALANCE_TS001_TC001.input.config,
            CreateVendorAccountBalanceServiceData.CREATE_ONE_VENDORACCOUNTBALANCE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateVendorAccountBalanceServiceData.CREATE_ONE_VENDORACCOUNTBALANCE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateVendorAccountBalanceServiceData.CREATE_ONE_VENDORACCOUNTBALANCE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateVendorAccountBalanceServiceData.CREATE_ONE_VENDORACCOUNTBALANCE_TS001_TC001.output)[2])
	});



    test(CreateVendorAccountBalanceServiceData.CREATE_ONE_VENDORACCOUNTBALANCE_TS001_TC002.description, async () => {

        const output = await CreateVendorAccountBalanceService.createOneVendorAccountBalance(
            CreateVendorAccountBalanceServiceData.CREATE_ONE_VENDORACCOUNTBALANCE_TS001_TC002.input.databaseConnector,
            CreateVendorAccountBalanceServiceData.CREATE_ONE_VENDORACCOUNTBALANCE_TS001_TC002.input.apiID,
            CreateVendorAccountBalanceServiceData.CREATE_ONE_VENDORACCOUNTBALANCE_TS001_TC002.input.config,
            CreateVendorAccountBalanceServiceData.CREATE_ONE_VENDORACCOUNTBALANCE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateVendorAccountBalanceServiceData.CREATE_ONE_VENDORACCOUNTBALANCE_TS001_TC002.output.data)
        expect(output.status).toBe(CreateVendorAccountBalanceServiceData.CREATE_ONE_VENDORACCOUNTBALANCE_TS001_TC002.output.status)
        expect(output.message).toBe(CreateVendorAccountBalanceServiceData.CREATE_ONE_VENDORACCOUNTBALANCE_TS001_TC002.output.message)        
	});



    test(CreateVendorAccountBalanceServiceData.CREATE_ONE_VENDORACCOUNTBALANCE_TS001_TC003.description, async () => {

        const output = await CreateVendorAccountBalanceService.createOneVendorAccountBalance(
            CreateVendorAccountBalanceServiceData.CREATE_ONE_VENDORACCOUNTBALANCE_TS001_TC003.input.databaseConnector,
            CreateVendorAccountBalanceServiceData.CREATE_ONE_VENDORACCOUNTBALANCE_TS001_TC003.input.apiID,
            CreateVendorAccountBalanceServiceData.CREATE_ONE_VENDORACCOUNTBALANCE_TS001_TC003.input.config,
            CreateVendorAccountBalanceServiceData.CREATE_ONE_VENDORACCOUNTBALANCE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateVendorAccountBalanceServiceData.CREATE_ONE_VENDORACCOUNTBALANCE_TS001_TC003.output.status)
        expect(output.message).toBe(CreateVendorAccountBalanceServiceData.CREATE_ONE_VENDORACCOUNTBALANCE_TS001_TC003.output.message)        
	});

});