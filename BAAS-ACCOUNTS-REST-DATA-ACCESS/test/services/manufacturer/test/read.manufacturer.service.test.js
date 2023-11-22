/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Manufacturer service class
**/

/**
 * Importing all required modules here
 */

const readManufacturerServiceData = require("../data/read.manufacturer.service.data")
const readManufacturerService = require("../../../../src/services/manufacturer/read.manufacturer.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadManufacturerService = new readManufacturerService();
const ReadManufacturerServiceData = new readManufacturerServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.manufacturer.ts.001] | FunctionPath : [src/services/manufacturer/read.contianer.service.js/readManufacturers()]", () => {


	test(ReadManufacturerServiceData.READ_MANUFACTURER_TS001_TC001.description, async () => {

        const output = await ReadManufacturerService.readManufacturers(
            ReadManufacturerServiceData.READ_MANUFACTURER_TS001_TC001.input.databaseConnector,
            ReadManufacturerServiceData.READ_MANUFACTURER_TS001_TC001.input.apiID,
            ReadManufacturerServiceData.READ_MANUFACTURER_TS001_TC001.input.config,
            ReadManufacturerServiceData.READ_MANUFACTURER_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadManufacturerServiceData.READ_MANUFACTURER_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadManufacturerServiceData.READ_MANUFACTURER_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadManufacturerServiceData.READ_MANUFACTURER_TS001_TC001.output)[2])
	});



    test(ReadManufacturerServiceData.READ_MANUFACTURER_TS001_TC002.description, async () => {

        const output = await ReadManufacturerService.readManufacturers(
            ReadManufacturerServiceData.READ_MANUFACTURER_TS001_TC002.input.databaseConnector,
            ReadManufacturerServiceData.READ_MANUFACTURER_TS001_TC002.input.apiID,
            ReadManufacturerServiceData.READ_MANUFACTURER_TS001_TC002.input.config,
            ReadManufacturerServiceData.READ_MANUFACTURER_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadManufacturerServiceData.READ_MANUFACTURER_TS001_TC002.output.data)
        expect(output.status).toBe(ReadManufacturerServiceData.READ_MANUFACTURER_TS001_TC002.output.status)
        expect(output.message).toBe(ReadManufacturerServiceData.READ_MANUFACTURER_TS001_TC002.output.message)        
	});



    test(ReadManufacturerServiceData.READ_MANUFACTURER_TS001_TC003.description, async () => {

        const output = await ReadManufacturerService.readManufacturers(
            ReadManufacturerServiceData.READ_MANUFACTURER_TS001_TC003.input.databaseConnector,
            ReadManufacturerServiceData.READ_MANUFACTURER_TS001_TC003.input.apiID,
            ReadManufacturerServiceData.READ_MANUFACTURER_TS001_TC003.input.config,
            ReadManufacturerServiceData.READ_MANUFACTURER_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadManufacturerServiceData.READ_MANUFACTURER_TS001_TC003.output.status)
        expect(output.message).toBe(ReadManufacturerServiceData.READ_MANUFACTURER_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.manufacturer.ts.002] | FunctionPath : [src/services/manufacturer/read.manufacturer.service.js/readOneManufacturer()]", () => {


	test(ReadManufacturerServiceData.READ_ONE_MANUFACTURER_TS002_TC001.description, async () => {

        const output = await ReadManufacturerService.readOneManufacturer(
            ReadManufacturerServiceData.READ_ONE_MANUFACTURER_TS002_TC001.input.databaseConnector,
            ReadManufacturerServiceData.READ_ONE_MANUFACTURER_TS002_TC001.input.apiID,
            ReadManufacturerServiceData.READ_ONE_MANUFACTURER_TS002_TC001.input.config,
            ReadManufacturerServiceData.READ_ONE_MANUFACTURER_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadManufacturerServiceData.READ_ONE_MANUFACTURER_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadManufacturerServiceData.READ_ONE_MANUFACTURER_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadManufacturerServiceData.READ_ONE_MANUFACTURER_TS002_TC001.output)[2])
	});



    test(ReadManufacturerServiceData.READ_ONE_MANUFACTURER_TS002_TC002.description, async () => {

        const output = await ReadManufacturerService.readOneManufacturer(
            ReadManufacturerServiceData.READ_ONE_MANUFACTURER_TS002_TC002.input.databaseConnector,
            ReadManufacturerServiceData.READ_ONE_MANUFACTURER_TS002_TC002.input.apiID,
            ReadManufacturerServiceData.READ_ONE_MANUFACTURER_TS002_TC002.input.config,
            ReadManufacturerServiceData.READ_ONE_MANUFACTURER_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadManufacturerServiceData.READ_ONE_MANUFACTURER_TS002_TC002.output.data)
        expect(output.status).toBe(ReadManufacturerServiceData.READ_ONE_MANUFACTURER_TS002_TC002.output.status)
        expect(output.message).toBe(ReadManufacturerServiceData.READ_ONE_MANUFACTURER_TS002_TC002.output.message)        
	});



    test(ReadManufacturerServiceData.READ_ONE_MANUFACTURER_TS002_TC003.description, async () => {

        const output = await ReadManufacturerService.readOneManufacturer(
            ReadManufacturerServiceData.READ_ONE_MANUFACTURER_TS002_TC003.input.databaseConnector,
            ReadManufacturerServiceData.READ_ONE_MANUFACTURER_TS002_TC003.input.apiID,
            ReadManufacturerServiceData.READ_ONE_MANUFACTURER_TS002_TC003.input.config,
            ReadManufacturerServiceData.READ_ONE_MANUFACTURER_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadManufacturerServiceData.READ_ONE_MANUFACTURER_TS002_TC003.output.status)
        expect(output.message).toBe(ReadManufacturerServiceData.READ_ONE_MANUFACTURER_TS002_TC003.output.message)        
	});

});