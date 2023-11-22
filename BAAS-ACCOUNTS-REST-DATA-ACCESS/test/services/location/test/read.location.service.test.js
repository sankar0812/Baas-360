/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Location service class
**/

/**
 * Importing all required modules here
 */

const readLocationServiceData = require("../data/read.location.service.data")
const readLocationService = require("../../../../src/services/location/read.location.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadLocationService = new readLocationService();
const ReadLocationServiceData = new readLocationServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.location.ts.001] | FunctionPath : [src/services/location/read.contianer.service.js/readLocations()]", () => {


	test(ReadLocationServiceData.READ_LOCATION_TS001_TC001.description, async () => {

        const output = await ReadLocationService.readLocations(
            ReadLocationServiceData.READ_LOCATION_TS001_TC001.input.databaseConnector,
            ReadLocationServiceData.READ_LOCATION_TS001_TC001.input.apiID,
            ReadLocationServiceData.READ_LOCATION_TS001_TC001.input.config,
            ReadLocationServiceData.READ_LOCATION_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadLocationServiceData.READ_LOCATION_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadLocationServiceData.READ_LOCATION_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadLocationServiceData.READ_LOCATION_TS001_TC001.output)[2])
	});



    test(ReadLocationServiceData.READ_LOCATION_TS001_TC002.description, async () => {

        const output = await ReadLocationService.readLocations(
            ReadLocationServiceData.READ_LOCATION_TS001_TC002.input.databaseConnector,
            ReadLocationServiceData.READ_LOCATION_TS001_TC002.input.apiID,
            ReadLocationServiceData.READ_LOCATION_TS001_TC002.input.config,
            ReadLocationServiceData.READ_LOCATION_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadLocationServiceData.READ_LOCATION_TS001_TC002.output.data)
        expect(output.status).toBe(ReadLocationServiceData.READ_LOCATION_TS001_TC002.output.status)
        expect(output.message).toBe(ReadLocationServiceData.READ_LOCATION_TS001_TC002.output.message)        
	});



    test(ReadLocationServiceData.READ_LOCATION_TS001_TC003.description, async () => {

        const output = await ReadLocationService.readLocations(
            ReadLocationServiceData.READ_LOCATION_TS001_TC003.input.databaseConnector,
            ReadLocationServiceData.READ_LOCATION_TS001_TC003.input.apiID,
            ReadLocationServiceData.READ_LOCATION_TS001_TC003.input.config,
            ReadLocationServiceData.READ_LOCATION_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadLocationServiceData.READ_LOCATION_TS001_TC003.output.status)
        expect(output.message).toBe(ReadLocationServiceData.READ_LOCATION_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [accounts.api.dataaccess.service.location.ts.002] | FunctionPath : [src/services/location/read.location.service.js/readOneLocation()]", () => {


	test(ReadLocationServiceData.READ_ONE_LOCATION_TS002_TC001.description, async () => {

        const output = await ReadLocationService.readOneLocation(
            ReadLocationServiceData.READ_ONE_LOCATION_TS002_TC001.input.databaseConnector,
            ReadLocationServiceData.READ_ONE_LOCATION_TS002_TC001.input.apiID,
            ReadLocationServiceData.READ_ONE_LOCATION_TS002_TC001.input.config,
            ReadLocationServiceData.READ_ONE_LOCATION_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadLocationServiceData.READ_ONE_LOCATION_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadLocationServiceData.READ_ONE_LOCATION_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadLocationServiceData.READ_ONE_LOCATION_TS002_TC001.output)[2])
	});



    test(ReadLocationServiceData.READ_ONE_LOCATION_TS002_TC002.description, async () => {

        const output = await ReadLocationService.readOneLocation(
            ReadLocationServiceData.READ_ONE_LOCATION_TS002_TC002.input.databaseConnector,
            ReadLocationServiceData.READ_ONE_LOCATION_TS002_TC002.input.apiID,
            ReadLocationServiceData.READ_ONE_LOCATION_TS002_TC002.input.config,
            ReadLocationServiceData.READ_ONE_LOCATION_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadLocationServiceData.READ_ONE_LOCATION_TS002_TC002.output.data)
        expect(output.status).toBe(ReadLocationServiceData.READ_ONE_LOCATION_TS002_TC002.output.status)
        expect(output.message).toBe(ReadLocationServiceData.READ_ONE_LOCATION_TS002_TC002.output.message)        
	});



    test(ReadLocationServiceData.READ_ONE_LOCATION_TS002_TC003.description, async () => {

        const output = await ReadLocationService.readOneLocation(
            ReadLocationServiceData.READ_ONE_LOCATION_TS002_TC003.input.databaseConnector,
            ReadLocationServiceData.READ_ONE_LOCATION_TS002_TC003.input.apiID,
            ReadLocationServiceData.READ_ONE_LOCATION_TS002_TC003.input.config,
            ReadLocationServiceData.READ_ONE_LOCATION_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadLocationServiceData.READ_ONE_LOCATION_TS002_TC003.output.status)
        expect(output.message).toBe(ReadLocationServiceData.READ_ONE_LOCATION_TS002_TC003.output.message)        
	});

});