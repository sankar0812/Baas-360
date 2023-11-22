/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete pricelist service class
**/

/**
 * Importing all required modules here
 */

const deletePriceListServiceData = require("../data/delete.pricelist.service.data")
const deletePriceListService = require("../../../../src/services/pricelist/delete.pricelist.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeletePriceListService = new deletePriceListService();
const DeletePriceListServiceData = new deletePriceListServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.pricelist.ts.001] | FunctionPath : [src/services/pricelist/delete.pricelist.service.js/deleteOnePriceList()]", () => {


	test(DeletePriceListServiceData.DELETE_ONE_PRICELIST_TS001_TC001.description, async () => {

        const output = await DeletePriceListService.deleteOnePriceList(
            DeletePriceListServiceData.DELETE_ONE_PRICELIST_TS001_TC001.input.databaseConnector,
            DeletePriceListServiceData.DELETE_ONE_PRICELIST_TS001_TC001.input.apiID,
            DeletePriceListServiceData.DELETE_ONE_PRICELIST_TS001_TC001.input.config,
            DeletePriceListServiceData.DELETE_ONE_PRICELIST_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeletePriceListServiceData.DELETE_ONE_PRICELIST_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeletePriceListServiceData.DELETE_ONE_PRICELIST_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeletePriceListServiceData.DELETE_ONE_PRICELIST_TS001_TC001.output)[2])
	});



    test(DeletePriceListServiceData.DELETE_ONE_PRICELIST_TS001_TC002.description, async () => {

        const output = await DeletePriceListService.deleteOnePriceList(
            DeletePriceListServiceData.DELETE_ONE_PRICELIST_TS001_TC002.input.databaseConnector,
            DeletePriceListServiceData.DELETE_ONE_PRICELIST_TS001_TC002.input.apiID,
            DeletePriceListServiceData.DELETE_ONE_PRICELIST_TS001_TC002.input.config,
            DeletePriceListServiceData.DELETE_ONE_PRICELIST_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeletePriceListServiceData.DELETE_ONE_PRICELIST_TS001_TC002.output.data)
        expect(output.status).toBe(DeletePriceListServiceData.DELETE_ONE_PRICELIST_TS001_TC002.output.status)
        expect(output.message).toBe(DeletePriceListServiceData.DELETE_ONE_PRICELIST_TS001_TC002.output.message)        
	});



    test(DeletePriceListServiceData.DELETE_ONE_PRICELIST_TS001_TC003.description, async () => {

        const output = await DeletePriceListService.deleteOnePriceList(
            DeletePriceListServiceData.DELETE_ONE_PRICELIST_TS001_TC003.input.databaseConnector,
            DeletePriceListServiceData.DELETE_ONE_PRICELIST_TS001_TC003.input.apiID,
            DeletePriceListServiceData.DELETE_ONE_PRICELIST_TS001_TC003.input.config,
            DeletePriceListServiceData.DELETE_ONE_PRICELIST_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeletePriceListServiceData.DELETE_ONE_PRICELIST_TS001_TC003.output.status)
        expect(output.message).toBe(DeletePriceListServiceData.DELETE_ONE_PRICELIST_TS001_TC003.output.message)        
	});

});
