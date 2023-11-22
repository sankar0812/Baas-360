/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete pricelistcustomeraccount service class
**/

/**
 * Importing all required modules here
 */

const deletePriceListCustomerAccountServiceData = require("../data/delete.pricelistcustomeraccount.service.data")
const deletePriceListCustomerAccountService = require("../../../../src/services/pricelist/delete.pricelistcustomeraccount.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeletePriceListCustomerAccountService = new deletePriceListCustomerAccountService();
const DeletePriceListCustomerAccountServiceData = new deletePriceListCustomerAccountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.pricelistcustomeraccount.ts.001] | FunctionPath : [src/services/pricelist/delete.pricelistcustomeraccount.service.js/deleteOnePriceListCustomerAccount()]", () => {


	test(DeletePriceListCustomerAccountServiceData.DELETE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.description, async () => {

        const output = await DeletePriceListCustomerAccountService.deleteOnePriceListCustomerAccount(
            DeletePriceListCustomerAccountServiceData.DELETE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.input.databaseConnector,
            DeletePriceListCustomerAccountServiceData.DELETE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.input.apiID,
            DeletePriceListCustomerAccountServiceData.DELETE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.input.config,
            DeletePriceListCustomerAccountServiceData.DELETE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeletePriceListCustomerAccountServiceData.DELETE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeletePriceListCustomerAccountServiceData.DELETE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeletePriceListCustomerAccountServiceData.DELETE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.output)[2])
	});



    test(DeletePriceListCustomerAccountServiceData.DELETE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.description, async () => {

        const output = await DeletePriceListCustomerAccountService.deleteOnePriceListCustomerAccount(
            DeletePriceListCustomerAccountServiceData.DELETE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.input.databaseConnector,
            DeletePriceListCustomerAccountServiceData.DELETE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.input.apiID,
            DeletePriceListCustomerAccountServiceData.DELETE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.input.config,
            DeletePriceListCustomerAccountServiceData.DELETE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeletePriceListCustomerAccountServiceData.DELETE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(DeletePriceListCustomerAccountServiceData.DELETE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(DeletePriceListCustomerAccountServiceData.DELETE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.output.message)        
	});



    test(DeletePriceListCustomerAccountServiceData.DELETE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC003.description, async () => {

        const output = await DeletePriceListCustomerAccountService.deleteOnePriceListCustomerAccount(
            DeletePriceListCustomerAccountServiceData.DELETE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC003.input.databaseConnector,
            DeletePriceListCustomerAccountServiceData.DELETE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC003.input.apiID,
            DeletePriceListCustomerAccountServiceData.DELETE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC003.input.config,
            DeletePriceListCustomerAccountServiceData.DELETE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeletePriceListCustomerAccountServiceData.DELETE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(DeletePriceListCustomerAccountServiceData.DELETE_ONE_PRICELISTCUSTOMERACCOUNT_TS001_TC003.output.message)        
	});

});
