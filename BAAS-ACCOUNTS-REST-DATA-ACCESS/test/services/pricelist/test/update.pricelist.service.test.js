

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update pricelist service class
**/

/**
 * Importing all required modules here
 */

const updatePriceListServiceData = require("../data/update.pricelist.service.data")
const updatePriceListService = require("../../../../src/services/pricelist/update.pricelist.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdatePriceListService = new updatePriceListService();
const UpdatePriceListServiceData = new updatePriceListServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.pricelist.ts.001] | FunctionPath : [src/services/pricelist/update.pricelist.service.js/updatePriceList()]", () => {

	test(UpdatePriceListServiceData.UPDATE_PRICELIST_TS001_TC001.description, async () => {

        const output = await UpdatePriceListService.updatePriceList(
            UpdatePriceListServiceData.UPDATE_PRICELIST_TS001_TC001.input.databaseConnector,
            UpdatePriceListServiceData.UPDATE_PRICELIST_TS001_TC001.input.apiID,
            UpdatePriceListServiceData.UPDATE_PRICELIST_TS001_TC001.input.config,
            UpdatePriceListServiceData.UPDATE_PRICELIST_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdatePriceListServiceData.UPDATE_PRICELIST_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdatePriceListServiceData.UPDATE_PRICELIST_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdatePriceListServiceData.UPDATE_PRICELIST_TS001_TC001.output)[2])
	});

    test(UpdatePriceListServiceData.UPDATE_PRICELIST_TS001_TC002.description, async () => {

        const output = await UpdatePriceListService.updatePriceList(
            UpdatePriceListServiceData.UPDATE_PRICELIST_TS001_TC002.input.databaseConnector,
            UpdatePriceListServiceData.UPDATE_PRICELIST_TS001_TC002.input.apiID,
            UpdatePriceListServiceData.UPDATE_PRICELIST_TS001_TC002.input.config,
            UpdatePriceListServiceData.UPDATE_PRICELIST_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdatePriceListServiceData.UPDATE_PRICELIST_TS001_TC002.output.data)
        expect(output.status).toBe(UpdatePriceListServiceData.UPDATE_PRICELIST_TS001_TC002.output.status)
        expect(output.message).toBe(UpdatePriceListServiceData.UPDATE_PRICELIST_TS001_TC002.output.message)        
	});

    test(UpdatePriceListServiceData.UPDATE_PRICELIST_TS001_TC003.description, async () => {

        const output = await UpdatePriceListService.updatePriceList(
            UpdatePriceListServiceData.UPDATE_PRICELIST_TS001_TC003.input.databaseConnector,
            UpdatePriceListServiceData.UPDATE_PRICELIST_TS001_TC003.input.apiID,
            UpdatePriceListServiceData.UPDATE_PRICELIST_TS001_TC003.input.config,
            UpdatePriceListServiceData.UPDATE_PRICELIST_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdatePriceListServiceData.UPDATE_PRICELIST_TS001_TC003.output.status)
        expect(output.message).toBe(UpdatePriceListServiceData.UPDATE_PRICELIST_TS001_TC003.output.message)        
	});

});
