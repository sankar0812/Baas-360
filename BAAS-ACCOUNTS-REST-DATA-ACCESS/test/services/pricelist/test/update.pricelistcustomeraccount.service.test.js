

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update pricelistcustomeraccount service class
**/

/**
 * Importing all required modules here
 */

const updatePriceListCustomerAccountServiceData = require("../data/update.pricelistcustomeraccount.service.data")
const updatePriceListCustomerAccountService = require("../../../../src/services/pricelist/update.pricelistcustomeraccount.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdatePriceListCustomerAccountService = new updatePriceListCustomerAccountService();
const UpdatePriceListCustomerAccountServiceData = new updatePriceListCustomerAccountServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.pricelistcustomeraccount.ts.001] | FunctionPath : [src/services/pricelist/update.pricelistcustomeraccount.service.js/updatePriceListCustomerAccount()]", () => {

	test(UpdatePriceListCustomerAccountServiceData.UPDATE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.description, async () => {

        const output = await UpdatePriceListCustomerAccountService.updatePriceListCustomerAccount(
            UpdatePriceListCustomerAccountServiceData.UPDATE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.input.databaseConnector,
            UpdatePriceListCustomerAccountServiceData.UPDATE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.input.apiID,
            UpdatePriceListCustomerAccountServiceData.UPDATE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.input.config,
            UpdatePriceListCustomerAccountServiceData.UPDATE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdatePriceListCustomerAccountServiceData.UPDATE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdatePriceListCustomerAccountServiceData.UPDATE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdatePriceListCustomerAccountServiceData.UPDATE_PRICELISTCUSTOMERACCOUNT_TS001_TC001.output)[2])
	});

    test(UpdatePriceListCustomerAccountServiceData.UPDATE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.description, async () => {

        const output = await UpdatePriceListCustomerAccountService.updatePriceListCustomerAccount(
            UpdatePriceListCustomerAccountServiceData.UPDATE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.input.databaseConnector,
            UpdatePriceListCustomerAccountServiceData.UPDATE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.input.apiID,
            UpdatePriceListCustomerAccountServiceData.UPDATE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.input.config,
            UpdatePriceListCustomerAccountServiceData.UPDATE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdatePriceListCustomerAccountServiceData.UPDATE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.output.data)
        expect(output.status).toBe(UpdatePriceListCustomerAccountServiceData.UPDATE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.output.status)
        expect(output.message).toBe(UpdatePriceListCustomerAccountServiceData.UPDATE_PRICELISTCUSTOMERACCOUNT_TS001_TC002.output.message)        
	});

    test(UpdatePriceListCustomerAccountServiceData.UPDATE_PRICELISTCUSTOMERACCOUNT_TS001_TC003.description, async () => {

        const output = await UpdatePriceListCustomerAccountService.updatePriceListCustomerAccount(
            UpdatePriceListCustomerAccountServiceData.UPDATE_PRICELISTCUSTOMERACCOUNT_TS001_TC003.input.databaseConnector,
            UpdatePriceListCustomerAccountServiceData.UPDATE_PRICELISTCUSTOMERACCOUNT_TS001_TC003.input.apiID,
            UpdatePriceListCustomerAccountServiceData.UPDATE_PRICELISTCUSTOMERACCOUNT_TS001_TC003.input.config,
            UpdatePriceListCustomerAccountServiceData.UPDATE_PRICELISTCUSTOMERACCOUNT_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdatePriceListCustomerAccountServiceData.UPDATE_PRICELISTCUSTOMERACCOUNT_TS001_TC003.output.status)
        expect(output.message).toBe(UpdatePriceListCustomerAccountServiceData.UPDATE_PRICELISTCUSTOMERACCOUNT_TS001_TC003.output.message)        
	});

});
