/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create pricelist service class
**/

/**
 * Importing all required modules here
 */

const createPriceListServiceData = require("../data/create.pricelist.service.data")
const createPriceListService = require("../../../../src/services/pricelist/create.pricelist.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreatePriceListService = new createPriceListService();
const CreatePriceListServiceData = new createPriceListServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.pricelist.ts.001] | FunctionPath : [src/services/pricelist/create.pricelist.service.js/createOnePriceList()]", () => {


	test(CreatePriceListServiceData.CREATE_ONE_PRICELIST_TS001_TC001.description, async () => {

        const output = await CreatePriceListService.createOnePriceList(
            CreatePriceListServiceData.CREATE_ONE_PRICELIST_TS001_TC001.input.databaseConnector,
            CreatePriceListServiceData.CREATE_ONE_PRICELIST_TS001_TC001.input.apiID,
            CreatePriceListServiceData.CREATE_ONE_PRICELIST_TS001_TC001.input.config,
            CreatePriceListServiceData.CREATE_ONE_PRICELIST_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreatePriceListServiceData.CREATE_ONE_PRICELIST_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreatePriceListServiceData.CREATE_ONE_PRICELIST_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreatePriceListServiceData.CREATE_ONE_PRICELIST_TS001_TC001.output)[2])
	});



    test(CreatePriceListServiceData.CREATE_ONE_PRICELIST_TS001_TC002.description, async () => {

        const output = await CreatePriceListService.createOnePriceList(
            CreatePriceListServiceData.CREATE_ONE_PRICELIST_TS001_TC002.input.databaseConnector,
            CreatePriceListServiceData.CREATE_ONE_PRICELIST_TS001_TC002.input.apiID,
            CreatePriceListServiceData.CREATE_ONE_PRICELIST_TS001_TC002.input.config,
            CreatePriceListServiceData.CREATE_ONE_PRICELIST_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreatePriceListServiceData.CREATE_ONE_PRICELIST_TS001_TC002.output.data)
        expect(output.status).toBe(CreatePriceListServiceData.CREATE_ONE_PRICELIST_TS001_TC002.output.status)
        expect(output.message).toBe(CreatePriceListServiceData.CREATE_ONE_PRICELIST_TS001_TC002.output.message)        
	});



    test(CreatePriceListServiceData.CREATE_ONE_PRICELIST_TS001_TC003.description, async () => {

        const output = await CreatePriceListService.createOnePriceList(
            CreatePriceListServiceData.CREATE_ONE_PRICELIST_TS001_TC003.input.databaseConnector,
            CreatePriceListServiceData.CREATE_ONE_PRICELIST_TS001_TC003.input.apiID,
            CreatePriceListServiceData.CREATE_ONE_PRICELIST_TS001_TC003.input.config,
            CreatePriceListServiceData.CREATE_ONE_PRICELIST_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreatePriceListServiceData.CREATE_ONE_PRICELIST_TS001_TC003.output.status)
        expect(output.message).toBe(CreatePriceListServiceData.CREATE_ONE_PRICELIST_TS001_TC003.output.message)        
	});

});