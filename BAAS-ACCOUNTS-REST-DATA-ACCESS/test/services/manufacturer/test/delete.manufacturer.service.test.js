/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete manufacturer service class
**/

/**
 * Importing all required modules here
 */

const deleteManufacturerServiceData = require("../data/delete.manufacturer.service.data")
const deleteManufacturerService = require("../../../../src/services/manufacturer/delete.manufacturer.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteManufacturerService = new deleteManufacturerService();
const DeleteManufacturerServiceData = new deleteManufacturerServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.manufacturer.ts.001] | FunctionPath : [src/services/manufacturer/delete.manufacturer.service.js/deleteOneManufacturer()]", () => {


	test(DeleteManufacturerServiceData.DELETE_ONE_MANUFACTURER_TS001_TC001.description, async () => {

        const output = await DeleteManufacturerService.deleteOneManufacturer(
            DeleteManufacturerServiceData.DELETE_ONE_MANUFACTURER_TS001_TC001.input.databaseConnector,
            DeleteManufacturerServiceData.DELETE_ONE_MANUFACTURER_TS001_TC001.input.apiID,
            DeleteManufacturerServiceData.DELETE_ONE_MANUFACTURER_TS001_TC001.input.config,
            DeleteManufacturerServiceData.DELETE_ONE_MANUFACTURER_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteManufacturerServiceData.DELETE_ONE_MANUFACTURER_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteManufacturerServiceData.DELETE_ONE_MANUFACTURER_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteManufacturerServiceData.DELETE_ONE_MANUFACTURER_TS001_TC001.output)[2])
	});



    test(DeleteManufacturerServiceData.DELETE_ONE_MANUFACTURER_TS001_TC002.description, async () => {

        const output = await DeleteManufacturerService.deleteOneManufacturer(
            DeleteManufacturerServiceData.DELETE_ONE_MANUFACTURER_TS001_TC002.input.databaseConnector,
            DeleteManufacturerServiceData.DELETE_ONE_MANUFACTURER_TS001_TC002.input.apiID,
            DeleteManufacturerServiceData.DELETE_ONE_MANUFACTURER_TS001_TC002.input.config,
            DeleteManufacturerServiceData.DELETE_ONE_MANUFACTURER_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteManufacturerServiceData.DELETE_ONE_MANUFACTURER_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteManufacturerServiceData.DELETE_ONE_MANUFACTURER_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteManufacturerServiceData.DELETE_ONE_MANUFACTURER_TS001_TC002.output.message)        
	});



    test(DeleteManufacturerServiceData.DELETE_ONE_MANUFACTURER_TS001_TC003.description, async () => {

        const output = await DeleteManufacturerService.deleteOneManufacturer(
            DeleteManufacturerServiceData.DELETE_ONE_MANUFACTURER_TS001_TC003.input.databaseConnector,
            DeleteManufacturerServiceData.DELETE_ONE_MANUFACTURER_TS001_TC003.input.apiID,
            DeleteManufacturerServiceData.DELETE_ONE_MANUFACTURER_TS001_TC003.input.config,
            DeleteManufacturerServiceData.DELETE_ONE_MANUFACTURER_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteManufacturerServiceData.DELETE_ONE_MANUFACTURER_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteManufacturerServiceData.DELETE_ONE_MANUFACTURER_TS001_TC003.output.message)        
	});

});
