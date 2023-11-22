/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create priceliststatus service class
**/

/**
 * Importing all required modules here
 */

const createPriceListStatusServiceData = require("../data/create.priceliststatus.service.data")
const createPriceListStatusService = require("../../../../src/services/pricelist/create.priceliststatus.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreatePriceListStatusService = new createPriceListStatusService();
const CreatePriceListStatusServiceData = new createPriceListStatusServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.priceliststatus.ts.001] | FunctionPath : [src/services/pricelist/create.priceliststatus.service.js/createOnePriceListStatus()]", () => {


	test(CreatePriceListStatusServiceData.CREATE_ONE_PRICELISTSTATUS_TS001_TC001.description, async () => {

        const output = await CreatePriceListStatusService.createOnePriceListStatus(
            CreatePriceListStatusServiceData.CREATE_ONE_PRICELISTSTATUS_TS001_TC001.input.databaseConnector,
            CreatePriceListStatusServiceData.CREATE_ONE_PRICELISTSTATUS_TS001_TC001.input.apiID,
            CreatePriceListStatusServiceData.CREATE_ONE_PRICELISTSTATUS_TS001_TC001.input.config,
            CreatePriceListStatusServiceData.CREATE_ONE_PRICELISTSTATUS_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreatePriceListStatusServiceData.CREATE_ONE_PRICELISTSTATUS_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreatePriceListStatusServiceData.CREATE_ONE_PRICELISTSTATUS_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreatePriceListStatusServiceData.CREATE_ONE_PRICELISTSTATUS_TS001_TC001.output)[2])
	});



    test(CreatePriceListStatusServiceData.CREATE_ONE_PRICELISTSTATUS_TS001_TC002.description, async () => {

        const output = await CreatePriceListStatusService.createOnePriceListStatus(
            CreatePriceListStatusServiceData.CREATE_ONE_PRICELISTSTATUS_TS001_TC002.input.databaseConnector,
            CreatePriceListStatusServiceData.CREATE_ONE_PRICELISTSTATUS_TS001_TC002.input.apiID,
            CreatePriceListStatusServiceData.CREATE_ONE_PRICELISTSTATUS_TS001_TC002.input.config,
            CreatePriceListStatusServiceData.CREATE_ONE_PRICELISTSTATUS_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreatePriceListStatusServiceData.CREATE_ONE_PRICELISTSTATUS_TS001_TC002.output.data)
        expect(output.status).toBe(CreatePriceListStatusServiceData.CREATE_ONE_PRICELISTSTATUS_TS001_TC002.output.status)
        expect(output.message).toBe(CreatePriceListStatusServiceData.CREATE_ONE_PRICELISTSTATUS_TS001_TC002.output.message)        
	});



    test(CreatePriceListStatusServiceData.CREATE_ONE_PRICELISTSTATUS_TS001_TC003.description, async () => {

        const output = await CreatePriceListStatusService.createOnePriceListStatus(
            CreatePriceListStatusServiceData.CREATE_ONE_PRICELISTSTATUS_TS001_TC003.input.databaseConnector,
            CreatePriceListStatusServiceData.CREATE_ONE_PRICELISTSTATUS_TS001_TC003.input.apiID,
            CreatePriceListStatusServiceData.CREATE_ONE_PRICELISTSTATUS_TS001_TC003.input.config,
            CreatePriceListStatusServiceData.CREATE_ONE_PRICELISTSTATUS_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreatePriceListStatusServiceData.CREATE_ONE_PRICELISTSTATUS_TS001_TC003.output.status)
        expect(output.message).toBe(CreatePriceListStatusServiceData.CREATE_ONE_PRICELISTSTATUS_TS001_TC003.output.message)        
	});

});