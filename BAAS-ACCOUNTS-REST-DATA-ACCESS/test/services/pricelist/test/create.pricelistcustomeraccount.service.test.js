/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create pricelistcustomeraccount service class
**/

/**
 * Importing all required modules here
 */

const createPriceListCustomerAccountServiceData = require("../data/create.pricelistcustomeraccount.service.data")
const createPriceListCustomerAccountService = require("../../../../src/services/pricelist/create.pricelistcustomeraccount.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreatePriceListCustomerAccountService = new createPriceListCustomerAccountService();
const CreatePriceListCustomerAccountServiceData = new createPriceListCustomerAccountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.pricelistcustomeraccount.ts.001] | FunctionPath : [src/services/pricelist/create.pricelistcustomeraccount.service.js/createOnePriceListCustomerAccount()]", () => {


	test(CreatePriceListCustomerAccountServiceData.CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.description, async () => {

        const output = await CreatePriceListCustomerAccountService.createOnePriceListCustomerAccount(
            CreatePriceListCustomerAccountServiceData.CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.input.databaseConnector,
            CreatePriceListCustomerAccountServiceData.CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.input.apiID,
            CreatePriceListCustomerAccountServiceData.CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.input.config,
            CreatePriceListCustomerAccountServiceData.CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreatePriceListCustomerAccountServiceData.CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreatePriceListCustomerAccountServiceData.CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreatePriceListCustomerAccountServiceData.CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.output)[2])
	});



    test(CreatePriceListCustomerAccountServiceData.CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.description, async () => {

        const output = await CreatePriceListCustomerAccountService.createOnePriceListCustomerAccount(
            CreatePriceListCustomerAccountServiceData.CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.input.databaseConnector,
            CreatePriceListCustomerAccountServiceData.CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.input.apiID,
            CreatePriceListCustomerAccountServiceData.CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.input.config,
            CreatePriceListCustomerAccountServiceData.CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreatePriceListCustomerAccountServiceData.CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(CreatePriceListCustomerAccountServiceData.CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(CreatePriceListCustomerAccountServiceData.CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.output.message)        
	});



    test(CreatePriceListCustomerAccountServiceData.CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC003.description, async () => {

        const output = await CreatePriceListCustomerAccountService.createOnePriceListCustomerAccount(
            CreatePriceListCustomerAccountServiceData.CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC003.input.databaseConnector,
            CreatePriceListCustomerAccountServiceData.CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC003.input.apiID,
            CreatePriceListCustomerAccountServiceData.CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC003.input.config,
            CreatePriceListCustomerAccountServiceData.CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreatePriceListCustomerAccountServiceData.CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(CreatePriceListCustomerAccountServiceData.CREATE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC003.output.message)        
	});

});