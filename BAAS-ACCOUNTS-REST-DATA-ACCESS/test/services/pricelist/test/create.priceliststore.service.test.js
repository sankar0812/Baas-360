/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create priceliststore service class
**/

/**
 * Importing all required modules here
 */

const createPriceListStoreServiceData = require("../data/create.priceliststore.service.data")
const createPriceListStoreService = require("../../../../src/services/pricelist/create.priceliststore.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreatePriceListStoreService = new createPriceListStoreService();
const CreatePriceListStoreServiceData = new createPriceListStoreServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.priceliststore.ts.001] | FunctionPath : [src/services/pricelist/create.priceliststore.service.js/createOnePriceListStore()]", () => {


	test(CreatePriceListStoreServiceData.CREATE_ONE_PRICELISTSTORE_TS001_TC001.description, async () => {

        const output = await CreatePriceListStoreService.createOnePriceListStore(
            CreatePriceListStoreServiceData.CREATE_ONE_PRICELISTSTORE_TS001_TC001.input.databaseConnector,
            CreatePriceListStoreServiceData.CREATE_ONE_PRICELISTSTORE_TS001_TC001.input.apiID,
            CreatePriceListStoreServiceData.CREATE_ONE_PRICELISTSTORE_TS001_TC001.input.config,
            CreatePriceListStoreServiceData.CREATE_ONE_PRICELISTSTORE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreatePriceListStoreServiceData.CREATE_ONE_PRICELISTSTORE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreatePriceListStoreServiceData.CREATE_ONE_PRICELISTSTORE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreatePriceListStoreServiceData.CREATE_ONE_PRICELISTSTORE_TS001_TC001.output)[2])
	});



    test(CreatePriceListStoreServiceData.CREATE_ONE_PRICELISTSTORE_TS001_TC002.description, async () => {

        const output = await CreatePriceListStoreService.createOnePriceListStore(
            CreatePriceListStoreServiceData.CREATE_ONE_PRICELISTSTORE_TS001_TC002.input.databaseConnector,
            CreatePriceListStoreServiceData.CREATE_ONE_PRICELISTSTORE_TS001_TC002.input.apiID,
            CreatePriceListStoreServiceData.CREATE_ONE_PRICELISTSTORE_TS001_TC002.input.config,
            CreatePriceListStoreServiceData.CREATE_ONE_PRICELISTSTORE_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreatePriceListStoreServiceData.CREATE_ONE_PRICELISTSTORE_TS001_TC002.output.data)
        expect(output.status).toBe(CreatePriceListStoreServiceData.CREATE_ONE_PRICELISTSTORE_TS001_TC002.output.status)
        expect(output.message).toBe(CreatePriceListStoreServiceData.CREATE_ONE_PRICELISTSTORE_TS001_TC002.output.message)        
	});



    test(CreatePriceListStoreServiceData.CREATE_ONE_PRICELISTSTORE_TS001_TC003.description, async () => {

        const output = await CreatePriceListStoreService.createOnePriceListStore(
            CreatePriceListStoreServiceData.CREATE_ONE_PRICELISTSTORE_TS001_TC003.input.databaseConnector,
            CreatePriceListStoreServiceData.CREATE_ONE_PRICELISTSTORE_TS001_TC003.input.apiID,
            CreatePriceListStoreServiceData.CREATE_ONE_PRICELISTSTORE_TS001_TC003.input.config,
            CreatePriceListStoreServiceData.CREATE_ONE_PRICELISTSTORE_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreatePriceListStoreServiceData.CREATE_ONE_PRICELISTSTORE_TS001_TC003.output.status)
        expect(output.message).toBe(CreatePriceListStoreServiceData.CREATE_ONE_PRICELISTSTORE_TS001_TC003.output.message)        
	});

});