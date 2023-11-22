/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete priceliststore service class
**/

/**
 * Importing all required modules here
 */

const deletePriceListStoreServiceData = require("../data/delete.priceliststore.service.data")
const deletePriceListStoreService = require("../../../../src/services/pricelist/delete.priceliststore.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeletePriceListStoreService = new deletePriceListStoreService();
const DeletePriceListStoreServiceData = new deletePriceListStoreServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.priceliststore.ts.001] | FunctionPath : [src/services/pricelist/delete.priceliststore.service.js/deleteOnePriceListStore()]", () => {


	test(DeletePriceListStoreServiceData.DELETE_ONE_PRICELISTSTORE_TS001_TC001.description, async () => {

        const output = await DeletePriceListStoreService.deleteOnePriceListStore(
            DeletePriceListStoreServiceData.DELETE_ONE_PRICELISTSTORE_TS001_TC001.input.databaseConnector,
            DeletePriceListStoreServiceData.DELETE_ONE_PRICELISTSTORE_TS001_TC001.input.apiID,
            DeletePriceListStoreServiceData.DELETE_ONE_PRICELISTSTORE_TS001_TC001.input.config,
            DeletePriceListStoreServiceData.DELETE_ONE_PRICELISTSTORE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeletePriceListStoreServiceData.DELETE_ONE_PRICELISTSTORE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeletePriceListStoreServiceData.DELETE_ONE_PRICELISTSTORE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeletePriceListStoreServiceData.DELETE_ONE_PRICELISTSTORE_TS001_TC001.output)[2])
	});



    test(DeletePriceListStoreServiceData.DELETE_ONE_PRICELISTSTORE_TS001_TC002.description, async () => {

        const output = await DeletePriceListStoreService.deleteOnePriceListStore(
            DeletePriceListStoreServiceData.DELETE_ONE_PRICELISTSTORE_TS001_TC002.input.databaseConnector,
            DeletePriceListStoreServiceData.DELETE_ONE_PRICELISTSTORE_TS001_TC002.input.apiID,
            DeletePriceListStoreServiceData.DELETE_ONE_PRICELISTSTORE_TS001_TC002.input.config,
            DeletePriceListStoreServiceData.DELETE_ONE_PRICELISTSTORE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeletePriceListStoreServiceData.DELETE_ONE_PRICELISTSTORE_TS001_TC002.output.data)
        expect(output.status).toBe(DeletePriceListStoreServiceData.DELETE_ONE_PRICELISTSTORE_TS001_TC002.output.status)
        expect(output.message).toBe(DeletePriceListStoreServiceData.DELETE_ONE_PRICELISTSTORE_TS001_TC002.output.message)        
	});



    test(DeletePriceListStoreServiceData.DELETE_ONE_PRICELISTSTORE_TS001_TC003.description, async () => {

        const output = await DeletePriceListStoreService.deleteOnePriceListStore(
            DeletePriceListStoreServiceData.DELETE_ONE_PRICELISTSTORE_TS001_TC003.input.databaseConnector,
            DeletePriceListStoreServiceData.DELETE_ONE_PRICELISTSTORE_TS001_TC003.input.apiID,
            DeletePriceListStoreServiceData.DELETE_ONE_PRICELISTSTORE_TS001_TC003.input.config,
            DeletePriceListStoreServiceData.DELETE_ONE_PRICELISTSTORE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeletePriceListStoreServiceData.DELETE_ONE_PRICELISTSTORE_TS001_TC003.output.status)
        expect(output.message).toBe(DeletePriceListStoreServiceData.DELETE_ONE_PRICELISTSTORE_TS001_TC003.output.message)        
	});

});
