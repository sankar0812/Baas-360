

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update priceliststatus service class
**/

/**
 * Importing all required modules here
 */

const updatePriceListStatusServiceData = require("../data/update.priceliststatus.service.data")
const updatePriceListStatusService = require("../../../../src/services/pricelist/update.priceliststatus.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdatePriceListStatusService = new updatePriceListStatusService();
const UpdatePriceListStatusServiceData = new updatePriceListStatusServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.priceliststatus.ts.001] | FunctionPath : [src/services/pricelist/update.priceliststatus.service.js/updatePriceListStatus()]", () => {

	test(UpdatePriceListStatusServiceData.UPDATE_PRICELISTSTATUS_TS001_TC001.description, async () => {

        const output = await UpdatePriceListStatusService.updatePriceListStatus(
            UpdatePriceListStatusServiceData.UPDATE_PRICELISTSTATUS_TS001_TC001.input.databaseConnector,
            UpdatePriceListStatusServiceData.UPDATE_PRICELISTSTATUS_TS001_TC001.input.apiID,
            UpdatePriceListStatusServiceData.UPDATE_PRICELISTSTATUS_TS001_TC001.input.config,
            UpdatePriceListStatusServiceData.UPDATE_PRICELISTSTATUS_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdatePriceListStatusServiceData.UPDATE_PRICELISTSTATUS_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdatePriceListStatusServiceData.UPDATE_PRICELISTSTATUS_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdatePriceListStatusServiceData.UPDATE_PRICELISTSTATUS_TS001_TC001.output)[2])
	});

    test(UpdatePriceListStatusServiceData.UPDATE_PRICELISTSTATUS_TS001_TC002.description, async () => {

        const output = await UpdatePriceListStatusService.updatePriceListStatus(
            UpdatePriceListStatusServiceData.UPDATE_PRICELISTSTATUS_TS001_TC002.input.databaseConnector,
            UpdatePriceListStatusServiceData.UPDATE_PRICELISTSTATUS_TS001_TC002.input.apiID,
            UpdatePriceListStatusServiceData.UPDATE_PRICELISTSTATUS_TS001_TC002.input.config,
            UpdatePriceListStatusServiceData.UPDATE_PRICELISTSTATUS_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdatePriceListStatusServiceData.UPDATE_PRICELISTSTATUS_TS001_TC002.output.data)
        expect(output.status).toBe(UpdatePriceListStatusServiceData.UPDATE_PRICELISTSTATUS_TS001_TC002.output.status)
        expect(output.message).toBe(UpdatePriceListStatusServiceData.UPDATE_PRICELISTSTATUS_TS001_TC002.output.message)        
	});

    test(UpdatePriceListStatusServiceData.UPDATE_PRICELISTSTATUS_TS001_TC003.description, async () => {

        const output = await UpdatePriceListStatusService.updatePriceListStatus(
            UpdatePriceListStatusServiceData.UPDATE_PRICELISTSTATUS_TS001_TC003.input.databaseConnector,
            UpdatePriceListStatusServiceData.UPDATE_PRICELISTSTATUS_TS001_TC003.input.apiID,
            UpdatePriceListStatusServiceData.UPDATE_PRICELISTSTATUS_TS001_TC003.input.config,
            UpdatePriceListStatusServiceData.UPDATE_PRICELISTSTATUS_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdatePriceListStatusServiceData.UPDATE_PRICELISTSTATUS_TS001_TC003.output.status)
        expect(output.message).toBe(UpdatePriceListStatusServiceData.UPDATE_PRICELISTSTATUS_TS001_TC003.output.message)        
	});

});
