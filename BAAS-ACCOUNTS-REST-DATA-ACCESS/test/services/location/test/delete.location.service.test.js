/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete location service class
**/

/**
 * Importing all required modules here
 */

const deleteLocationServiceData = require("../data/delete.location.service.data")
const deleteLocationService = require("../../../../src/services/location/delete.location.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteLocationService = new deleteLocationService();
const DeleteLocationServiceData = new deleteLocationServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.location.ts.001] | FunctionPath : [src/services/location/delete.location.service.js/deleteOneLocation()]", () => {


	test(DeleteLocationServiceData.DELETE_ONE_LOCATION_TS001_TC001.description, async () => {

        const output = await DeleteLocationService.deleteOneLocation(
            DeleteLocationServiceData.DELETE_ONE_LOCATION_TS001_TC001.input.databaseConnector,
            DeleteLocationServiceData.DELETE_ONE_LOCATION_TS001_TC001.input.apiID,
            DeleteLocationServiceData.DELETE_ONE_LOCATION_TS001_TC001.input.config,
            DeleteLocationServiceData.DELETE_ONE_LOCATION_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteLocationServiceData.DELETE_ONE_LOCATION_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteLocationServiceData.DELETE_ONE_LOCATION_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteLocationServiceData.DELETE_ONE_LOCATION_TS001_TC001.output)[2])
	});



    test(DeleteLocationServiceData.DELETE_ONE_LOCATION_TS001_TC002.description, async () => {

        const output = await DeleteLocationService.deleteOneLocation(
            DeleteLocationServiceData.DELETE_ONE_LOCATION_TS001_TC002.input.databaseConnector,
            DeleteLocationServiceData.DELETE_ONE_LOCATION_TS001_TC002.input.apiID,
            DeleteLocationServiceData.DELETE_ONE_LOCATION_TS001_TC002.input.config,
            DeleteLocationServiceData.DELETE_ONE_LOCATION_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteLocationServiceData.DELETE_ONE_LOCATION_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteLocationServiceData.DELETE_ONE_LOCATION_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteLocationServiceData.DELETE_ONE_LOCATION_TS001_TC002.output.message)        
	});



    test(DeleteLocationServiceData.DELETE_ONE_LOCATION_TS001_TC003.description, async () => {

        const output = await DeleteLocationService.deleteOneLocation(
            DeleteLocationServiceData.DELETE_ONE_LOCATION_TS001_TC003.input.databaseConnector,
            DeleteLocationServiceData.DELETE_ONE_LOCATION_TS001_TC003.input.apiID,
            DeleteLocationServiceData.DELETE_ONE_LOCATION_TS001_TC003.input.config,
            DeleteLocationServiceData.DELETE_ONE_LOCATION_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteLocationServiceData.DELETE_ONE_LOCATION_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteLocationServiceData.DELETE_ONE_LOCATION_TS001_TC003.output.message)        
	});

});
