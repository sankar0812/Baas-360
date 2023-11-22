

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update pricelistitem service class
**/

/**
 * Importing all required modules here
 */

const updatePriceListItemServiceData = require("../data/update.pricelistitem.service.data")
const updatePriceListItemService = require("../../../../src/services/pricelist/update.pricelistitem.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdatePriceListItemService = new updatePriceListItemService();
const UpdatePriceListItemServiceData = new updatePriceListItemServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.pricelistitem.ts.001] | FunctionPath : [src/services/pricelist/update.pricelistitem.service.js/updatePriceListItem()]", () => {

	test(UpdatePriceListItemServiceData.UPDATE_PRICELISTITEM_TS001_TC001.description, async () => {

        const output = await UpdatePriceListItemService.updatePriceListItem(
            UpdatePriceListItemServiceData.UPDATE_PRICELISTITEM_TS001_TC001.input.databaseConnector,
            UpdatePriceListItemServiceData.UPDATE_PRICELISTITEM_TS001_TC001.input.apiID,
            UpdatePriceListItemServiceData.UPDATE_PRICELISTITEM_TS001_TC001.input.config,
            UpdatePriceListItemServiceData.UPDATE_PRICELISTITEM_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdatePriceListItemServiceData.UPDATE_PRICELISTITEM_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdatePriceListItemServiceData.UPDATE_PRICELISTITEM_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdatePriceListItemServiceData.UPDATE_PRICELISTITEM_TS001_TC001.output)[2])
	});

    test(UpdatePriceListItemServiceData.UPDATE_PRICELISTITEM_TS001_TC002.description, async () => {

        const output = await UpdatePriceListItemService.updatePriceListItem(
            UpdatePriceListItemServiceData.UPDATE_PRICELISTITEM_TS001_TC002.input.databaseConnector,
            UpdatePriceListItemServiceData.UPDATE_PRICELISTITEM_TS001_TC002.input.apiID,
            UpdatePriceListItemServiceData.UPDATE_PRICELISTITEM_TS001_TC002.input.config,
            UpdatePriceListItemServiceData.UPDATE_PRICELISTITEM_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdatePriceListItemServiceData.UPDATE_PRICELISTITEM_TS001_TC002.output.data)
        expect(output.status).toBe(UpdatePriceListItemServiceData.UPDATE_PRICELISTITEM_TS001_TC002.output.status)
        expect(output.message).toBe(UpdatePriceListItemServiceData.UPDATE_PRICELISTITEM_TS001_TC002.output.message)        
	});

    test(UpdatePriceListItemServiceData.UPDATE_PRICELISTITEM_TS001_TC003.description, async () => {

        const output = await UpdatePriceListItemService.updatePriceListItem(
            UpdatePriceListItemServiceData.UPDATE_PRICELISTITEM_TS001_TC003.input.databaseConnector,
            UpdatePriceListItemServiceData.UPDATE_PRICELISTITEM_TS001_TC003.input.apiID,
            UpdatePriceListItemServiceData.UPDATE_PRICELISTITEM_TS001_TC003.input.config,
            UpdatePriceListItemServiceData.UPDATE_PRICELISTITEM_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdatePriceListItemServiceData.UPDATE_PRICELISTITEM_TS001_TC003.output.status)
        expect(output.message).toBe(UpdatePriceListItemServiceData.UPDATE_PRICELISTITEM_TS001_TC003.output.message)        
	});

});
