

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update priceliststore service class
**/

/**
 * Importing all required modules here
 */

const updatePriceListStoreServiceData = require("../data/update.priceliststore.service.data")
const updatePriceListStoreService = require("../../../../src/services/pricelist/update.priceliststore.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdatePriceListStoreService = new updatePriceListStoreService();
const UpdatePriceListStoreServiceData = new updatePriceListStoreServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.priceliststore.ts.001] | FunctionPath : [src/services/pricelist/update.priceliststore.service.js/updatePriceListStore()]", () => {

	test(UpdatePriceListStoreServiceData.UPDATE_PRICELISTSTORE_TS001_TC001.description, async () => {

        const output = await UpdatePriceListStoreService.updatePriceListStore(
            UpdatePriceListStoreServiceData.UPDATE_PRICELISTSTORE_TS001_TC001.input.databaseConnector,
            UpdatePriceListStoreServiceData.UPDATE_PRICELISTSTORE_TS001_TC001.input.apiID,
            UpdatePriceListStoreServiceData.UPDATE_PRICELISTSTORE_TS001_TC001.input.config,
            UpdatePriceListStoreServiceData.UPDATE_PRICELISTSTORE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdatePriceListStoreServiceData.UPDATE_PRICELISTSTORE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdatePriceListStoreServiceData.UPDATE_PRICELISTSTORE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdatePriceListStoreServiceData.UPDATE_PRICELISTSTORE_TS001_TC001.output)[2])
	});

    test(UpdatePriceListStoreServiceData.UPDATE_PRICELISTSTORE_TS001_TC002.description, async () => {

        const output = await UpdatePriceListStoreService.updatePriceListStore(
            UpdatePriceListStoreServiceData.UPDATE_PRICELISTSTORE_TS001_TC002.input.databaseConnector,
            UpdatePriceListStoreServiceData.UPDATE_PRICELISTSTORE_TS001_TC002.input.apiID,
            UpdatePriceListStoreServiceData.UPDATE_PRICELISTSTORE_TS001_TC002.input.config,
            UpdatePriceListStoreServiceData.UPDATE_PRICELISTSTORE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdatePriceListStoreServiceData.UPDATE_PRICELISTSTORE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdatePriceListStoreServiceData.UPDATE_PRICELISTSTORE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdatePriceListStoreServiceData.UPDATE_PRICELISTSTORE_TS001_TC002.output.message)        
	});

    test(UpdatePriceListStoreServiceData.UPDATE_PRICELISTSTORE_TS001_TC003.description, async () => {

        const output = await UpdatePriceListStoreService.updatePriceListStore(
            UpdatePriceListStoreServiceData.UPDATE_PRICELISTSTORE_TS001_TC003.input.databaseConnector,
            UpdatePriceListStoreServiceData.UPDATE_PRICELISTSTORE_TS001_TC003.input.apiID,
            UpdatePriceListStoreServiceData.UPDATE_PRICELISTSTORE_TS001_TC003.input.config,
            UpdatePriceListStoreServiceData.UPDATE_PRICELISTSTORE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdatePriceListStoreServiceData.UPDATE_PRICELISTSTORE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdatePriceListStoreServiceData.UPDATE_PRICELISTSTORE_TS001_TC003.output.message)        
	});

});
