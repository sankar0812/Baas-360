/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create pricelistitem service class
**/

/**
 * Importing all required modules here
 */

const createPriceListItemServiceData = require("../data/create.pricelistitem.service.data")
const createPriceListItemService = require("../../../../src/services/pricelist/create.pricelistitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreatePriceListItemService = new createPriceListItemService();
const CreatePriceListItemServiceData = new createPriceListItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.pricelistitem.ts.001] | FunctionPath : [src/services/pricelist/create.pricelistitem.service.js/createOnePriceListItem()]", () => {


	test(CreatePriceListItemServiceData.CREATE_ONE_PRICELISTITEM_TS001_TC001.description, async () => {

        const output = await CreatePriceListItemService.createOnePriceListItem(
            CreatePriceListItemServiceData.CREATE_ONE_PRICELISTITEM_TS001_TC001.input.databaseConnector,
            CreatePriceListItemServiceData.CREATE_ONE_PRICELISTITEM_TS001_TC001.input.apiID,
            CreatePriceListItemServiceData.CREATE_ONE_PRICELISTITEM_TS001_TC001.input.config,
            CreatePriceListItemServiceData.CREATE_ONE_PRICELISTITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreatePriceListItemServiceData.CREATE_ONE_PRICELISTITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreatePriceListItemServiceData.CREATE_ONE_PRICELISTITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreatePriceListItemServiceData.CREATE_ONE_PRICELISTITEM_TS001_TC001.output)[2])
	});



    test(CreatePriceListItemServiceData.CREATE_ONE_PRICELISTITEM_TS001_TC002.description, async () => {

        const output = await CreatePriceListItemService.createOnePriceListItem(
            CreatePriceListItemServiceData.CREATE_ONE_PRICELISTITEM_TS001_TC002.input.databaseConnector,
            CreatePriceListItemServiceData.CREATE_ONE_PRICELISTITEM_TS001_TC002.input.apiID,
            CreatePriceListItemServiceData.CREATE_ONE_PRICELISTITEM_TS001_TC002.input.config,
            CreatePriceListItemServiceData.CREATE_ONE_PRICELISTITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreatePriceListItemServiceData.CREATE_ONE_PRICELISTITEM_TS001_TC002.output.data)
        expect(output.status).toBe(CreatePriceListItemServiceData.CREATE_ONE_PRICELISTITEM_TS001_TC002.output.status)
        expect(output.message).toBe(CreatePriceListItemServiceData.CREATE_ONE_PRICELISTITEM_TS001_TC002.output.message)        
	});



    test(CreatePriceListItemServiceData.CREATE_ONE_PRICELISTITEM_TS001_TC003.description, async () => {

        const output = await CreatePriceListItemService.createOnePriceListItem(
            CreatePriceListItemServiceData.CREATE_ONE_PRICELISTITEM_TS001_TC003.input.databaseConnector,
            CreatePriceListItemServiceData.CREATE_ONE_PRICELISTITEM_TS001_TC003.input.apiID,
            CreatePriceListItemServiceData.CREATE_ONE_PRICELISTITEM_TS001_TC003.input.config,
            CreatePriceListItemServiceData.CREATE_ONE_PRICELISTITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreatePriceListItemServiceData.CREATE_ONE_PRICELISTITEM_TS001_TC003.output.status)
        expect(output.message).toBe(CreatePriceListItemServiceData.CREATE_ONE_PRICELISTITEM_TS001_TC003.output.message)        
	});

});