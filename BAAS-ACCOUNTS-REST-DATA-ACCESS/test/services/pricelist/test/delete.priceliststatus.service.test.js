/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete priceliststatus service class
**/

/**
 * Importing all required modules here
 */

const deletePriceListStatusServiceData = require("../data/delete.priceliststatus.service.data")
const deletePriceListStatusService = require("../../../../src/services/pricelist/delete.priceliststatus.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeletePriceListStatusService = new deletePriceListStatusService();
const DeletePriceListStatusServiceData = new deletePriceListStatusServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.priceliststatus.ts.001] | FunctionPath : [src/services/pricelist/delete.priceliststatus.service.js/deleteOnePriceListStatus()]", () => {


	test(DeletePriceListStatusServiceData.DELETE_ONE_PRICELISTSTATUS_TS001_TC001.description, async () => {

        const output = await DeletePriceListStatusService.deleteOnePriceListStatus(
            DeletePriceListStatusServiceData.DELETE_ONE_PRICELISTSTATUS_TS001_TC001.input.databaseConnector,
            DeletePriceListStatusServiceData.DELETE_ONE_PRICELISTSTATUS_TS001_TC001.input.apiID,
            DeletePriceListStatusServiceData.DELETE_ONE_PRICELISTSTATUS_TS001_TC001.input.config,
            DeletePriceListStatusServiceData.DELETE_ONE_PRICELISTSTATUS_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeletePriceListStatusServiceData.DELETE_ONE_PRICELISTSTATUS_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeletePriceListStatusServiceData.DELETE_ONE_PRICELISTSTATUS_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeletePriceListStatusServiceData.DELETE_ONE_PRICELISTSTATUS_TS001_TC001.output)[2])
	});



    test(DeletePriceListStatusServiceData.DELETE_ONE_PRICELISTSTATUS_TS001_TC002.description, async () => {

        const output = await DeletePriceListStatusService.deleteOnePriceListStatus(
            DeletePriceListStatusServiceData.DELETE_ONE_PRICELISTSTATUS_TS001_TC002.input.databaseConnector,
            DeletePriceListStatusServiceData.DELETE_ONE_PRICELISTSTATUS_TS001_TC002.input.apiID,
            DeletePriceListStatusServiceData.DELETE_ONE_PRICELISTSTATUS_TS001_TC002.input.config,
            DeletePriceListStatusServiceData.DELETE_ONE_PRICELISTSTATUS_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeletePriceListStatusServiceData.DELETE_ONE_PRICELISTSTATUS_TS001_TC002.output.data)
        expect(output.status).toBe(DeletePriceListStatusServiceData.DELETE_ONE_PRICELISTSTATUS_TS001_TC002.output.status)
        expect(output.message).toBe(DeletePriceListStatusServiceData.DELETE_ONE_PRICELISTSTATUS_TS001_TC002.output.message)        
	});



    test(DeletePriceListStatusServiceData.DELETE_ONE_PRICELISTSTATUS_TS001_TC003.description, async () => {

        const output = await DeletePriceListStatusService.deleteOnePriceListStatus(
            DeletePriceListStatusServiceData.DELETE_ONE_PRICELISTSTATUS_TS001_TC003.input.databaseConnector,
            DeletePriceListStatusServiceData.DELETE_ONE_PRICELISTSTATUS_TS001_TC003.input.apiID,
            DeletePriceListStatusServiceData.DELETE_ONE_PRICELISTSTATUS_TS001_TC003.input.config,
            DeletePriceListStatusServiceData.DELETE_ONE_PRICELISTSTATUS_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeletePriceListStatusServiceData.DELETE_ONE_PRICELISTSTATUS_TS001_TC003.output.status)
        expect(output.message).toBe(DeletePriceListStatusServiceData.DELETE_ONE_PRICELISTSTATUS_TS001_TC003.output.message)        
	});

});
