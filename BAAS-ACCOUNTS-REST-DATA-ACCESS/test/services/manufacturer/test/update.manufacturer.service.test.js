

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update manufacturer service class
**/

/**
 * Importing all required modules here
 */

const updateManufacturerServiceData = require("../data/update.manufacturer.service.data")
const updateManufacturerService = require("../../../../src/services/manufacturer/update.manufacturer.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateManufacturerService = new updateManufacturerService();
const UpdateManufacturerServiceData = new updateManufacturerServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.manufacturer.ts.001] | FunctionPath : [src/services/manufacturer/update.manufacturer.service.js/updateManufacturer()]", () => {

	test(UpdateManufacturerServiceData.UPDATE_MANUFACTURER_TS001_TC001.description, async () => {

        const output = await UpdateManufacturerService.updateManufacturer(
            UpdateManufacturerServiceData.UPDATE_MANUFACTURER_TS001_TC001.input.databaseConnector,
            UpdateManufacturerServiceData.UPDATE_MANUFACTURER_TS001_TC001.input.apiID,
            UpdateManufacturerServiceData.UPDATE_MANUFACTURER_TS001_TC001.input.config,
            UpdateManufacturerServiceData.UPDATE_MANUFACTURER_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateManufacturerServiceData.UPDATE_MANUFACTURER_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateManufacturerServiceData.UPDATE_MANUFACTURER_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateManufacturerServiceData.UPDATE_MANUFACTURER_TS001_TC001.output)[2])
	});

    test(UpdateManufacturerServiceData.UPDATE_MANUFACTURER_TS001_TC002.description, async () => {

        const output = await UpdateManufacturerService.updateManufacturer(
            UpdateManufacturerServiceData.UPDATE_MANUFACTURER_TS001_TC002.input.databaseConnector,
            UpdateManufacturerServiceData.UPDATE_MANUFACTURER_TS001_TC002.input.apiID,
            UpdateManufacturerServiceData.UPDATE_MANUFACTURER_TS001_TC002.input.config,
            UpdateManufacturerServiceData.UPDATE_MANUFACTURER_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateManufacturerServiceData.UPDATE_MANUFACTURER_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateManufacturerServiceData.UPDATE_MANUFACTURER_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateManufacturerServiceData.UPDATE_MANUFACTURER_TS001_TC002.output.message)        
	});

    test(UpdateManufacturerServiceData.UPDATE_MANUFACTURER_TS001_TC003.description, async () => {

        const output = await UpdateManufacturerService.updateManufacturer(
            UpdateManufacturerServiceData.UPDATE_MANUFACTURER_TS001_TC003.input.databaseConnector,
            UpdateManufacturerServiceData.UPDATE_MANUFACTURER_TS001_TC003.input.apiID,
            UpdateManufacturerServiceData.UPDATE_MANUFACTURER_TS001_TC003.input.config,
            UpdateManufacturerServiceData.UPDATE_MANUFACTURER_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateManufacturerServiceData.UPDATE_MANUFACTURER_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateManufacturerServiceData.UPDATE_MANUFACTURER_TS001_TC003.output.message)        
	});

});
