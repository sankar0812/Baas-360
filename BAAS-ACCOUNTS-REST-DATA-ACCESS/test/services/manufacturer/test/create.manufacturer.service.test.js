/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create manufacturer service class
**/

/**
 * Importing all required modules here
 */

const createManufacturerServiceData = require("../data/create.manufacturer.service.data")
const createManufacturerService = require("../../../../src/services/manufacturer/create.manufacturer.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateManufacturerService = new createManufacturerService();
const CreateManufacturerServiceData = new createManufacturerServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.manufacturer.ts.001] | FunctionPath : [src/services/manufacturer/create.manufacturer.service.js/createOneManufacturer()]", () => {


	test(CreateManufacturerServiceData.CREATE_ONE_MANUFACTURER_TS001_TC001.description, async () => {

        const output = await CreateManufacturerService.createOneManufacturer(
            CreateManufacturerServiceData.CREATE_ONE_MANUFACTURER_TS001_TC001.input.databaseConnector,
            CreateManufacturerServiceData.CREATE_ONE_MANUFACTURER_TS001_TC001.input.apiID,
            CreateManufacturerServiceData.CREATE_ONE_MANUFACTURER_TS001_TC001.input.config,
            CreateManufacturerServiceData.CREATE_ONE_MANUFACTURER_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateManufacturerServiceData.CREATE_ONE_MANUFACTURER_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateManufacturerServiceData.CREATE_ONE_MANUFACTURER_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateManufacturerServiceData.CREATE_ONE_MANUFACTURER_TS001_TC001.output)[2])
	});



    test(CreateManufacturerServiceData.CREATE_ONE_MANUFACTURER_TS001_TC002.description, async () => {

        const output = await CreateManufacturerService.createOneManufacturer(
            CreateManufacturerServiceData.CREATE_ONE_MANUFACTURER_TS001_TC002.input.databaseConnector,
            CreateManufacturerServiceData.CREATE_ONE_MANUFACTURER_TS001_TC002.input.apiID,
            CreateManufacturerServiceData.CREATE_ONE_MANUFACTURER_TS001_TC002.input.config,
            CreateManufacturerServiceData.CREATE_ONE_MANUFACTURER_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateManufacturerServiceData.CREATE_ONE_MANUFACTURER_TS001_TC002.output.data)
        expect(output.status).toBe(CreateManufacturerServiceData.CREATE_ONE_MANUFACTURER_TS001_TC002.output.status)
        expect(output.message).toBe(CreateManufacturerServiceData.CREATE_ONE_MANUFACTURER_TS001_TC002.output.message)        
	});



    test(CreateManufacturerServiceData.CREATE_ONE_MANUFACTURER_TS001_TC003.description, async () => {

        const output = await CreateManufacturerService.createOneManufacturer(
            CreateManufacturerServiceData.CREATE_ONE_MANUFACTURER_TS001_TC003.input.databaseConnector,
            CreateManufacturerServiceData.CREATE_ONE_MANUFACTURER_TS001_TC003.input.apiID,
            CreateManufacturerServiceData.CREATE_ONE_MANUFACTURER_TS001_TC003.input.config,
            CreateManufacturerServiceData.CREATE_ONE_MANUFACTURER_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateManufacturerServiceData.CREATE_ONE_MANUFACTURER_TS001_TC003.output.status)
        expect(output.message).toBe(CreateManufacturerServiceData.CREATE_ONE_MANUFACTURER_TS001_TC003.output.message)        
	});

});