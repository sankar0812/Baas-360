

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update location service class
**/

/**
 * Importing all required modules here
 */

const updateLocationServiceData = require("../data/update.location.service.data")
const updateLocationService = require("../../../../src/services/location/update.location.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateLocationService = new updateLocationService();
const UpdateLocationServiceData = new updateLocationServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.location.ts.001] | FunctionPath : [src/services/location/update.location.service.js/updateLocation()]", () => {

	test(UpdateLocationServiceData.UPDATE_LOCATION_TS001_TC001.description, async () => {

        const output = await UpdateLocationService.updateLocation(
            UpdateLocationServiceData.UPDATE_LOCATION_TS001_TC001.input.databaseConnector,
            UpdateLocationServiceData.UPDATE_LOCATION_TS001_TC001.input.apiID,
            UpdateLocationServiceData.UPDATE_LOCATION_TS001_TC001.input.config,
            UpdateLocationServiceData.UPDATE_LOCATION_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateLocationServiceData.UPDATE_LOCATION_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateLocationServiceData.UPDATE_LOCATION_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateLocationServiceData.UPDATE_LOCATION_TS001_TC001.output)[2])
	});

    test(UpdateLocationServiceData.UPDATE_LOCATION_TS001_TC002.description, async () => {

        const output = await UpdateLocationService.updateLocation(
            UpdateLocationServiceData.UPDATE_LOCATION_TS001_TC002.input.databaseConnector,
            UpdateLocationServiceData.UPDATE_LOCATION_TS001_TC002.input.apiID,
            UpdateLocationServiceData.UPDATE_LOCATION_TS001_TC002.input.config,
            UpdateLocationServiceData.UPDATE_LOCATION_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateLocationServiceData.UPDATE_LOCATION_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateLocationServiceData.UPDATE_LOCATION_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateLocationServiceData.UPDATE_LOCATION_TS001_TC002.output.message)        
	});

    test(UpdateLocationServiceData.UPDATE_LOCATION_TS001_TC003.description, async () => {

        const output = await UpdateLocationService.updateLocation(
            UpdateLocationServiceData.UPDATE_LOCATION_TS001_TC003.input.databaseConnector,
            UpdateLocationServiceData.UPDATE_LOCATION_TS001_TC003.input.apiID,
            UpdateLocationServiceData.UPDATE_LOCATION_TS001_TC003.input.config,
            UpdateLocationServiceData.UPDATE_LOCATION_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateLocationServiceData.UPDATE_LOCATION_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateLocationServiceData.UPDATE_LOCATION_TS001_TC003.output.message)        
	});

});
