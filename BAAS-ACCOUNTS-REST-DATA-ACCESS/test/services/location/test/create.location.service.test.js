/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 08 2023
* Description   : This file contains tests for all the fucntions in create location service class
**/

/**
 * Importing all required modules here
 */

const createLocationServiceData = require("../data/create.location.service.data")
const createLocationService = require("../../../../src/services/location/create.location.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateLocationService = new createLocationService();
const CreateLocationServiceData = new createLocationServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.location.ts.001] | FunctionPath : [src/services/location/create.location.service.js/createOneLocation()]", () => {


	test(CreateLocationServiceData.CREATE_ONE_LOCATION_TS001_TC001.description, async () => {

        const output = await CreateLocationService.createOneLocation(
            CreateLocationServiceData.CREATE_ONE_LOCATION_TS001_TC001.input.databaseConnector,
            CreateLocationServiceData.CREATE_ONE_LOCATION_TS001_TC001.input.apiID,
            CreateLocationServiceData.CREATE_ONE_LOCATION_TS001_TC001.input.config,
            CreateLocationServiceData.CREATE_ONE_LOCATION_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateLocationServiceData.CREATE_ONE_LOCATION_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateLocationServiceData.CREATE_ONE_LOCATION_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateLocationServiceData.CREATE_ONE_LOCATION_TS001_TC001.output)[2])
	});



    test(CreateLocationServiceData.CREATE_ONE_LOCATION_TS001_TC002.description, async () => {

        const output = await CreateLocationService.createOneLocation(
            CreateLocationServiceData.CREATE_ONE_LOCATION_TS001_TC002.input.databaseConnector,
            CreateLocationServiceData.CREATE_ONE_LOCATION_TS001_TC002.input.apiID,
            CreateLocationServiceData.CREATE_ONE_LOCATION_TS001_TC002.input.config,
            CreateLocationServiceData.CREATE_ONE_LOCATION_TS001_TC002.input.input
        )
        expect(output.data).toBe(CreateLocationServiceData.CREATE_ONE_LOCATION_TS001_TC002.output.data)
        expect(output.status).toBe(CreateLocationServiceData.CREATE_ONE_LOCATION_TS001_TC002.output.status)
        expect(output.message).toBe(CreateLocationServiceData.CREATE_ONE_LOCATION_TS001_TC002.output.message)        
	});



    test(CreateLocationServiceData.CREATE_ONE_LOCATION_TS001_TC003.description, async () => {

        const output = await CreateLocationService.createOneLocation(
            CreateLocationServiceData.CREATE_ONE_LOCATION_TS001_TC003.input.databaseConnector,
            CreateLocationServiceData.CREATE_ONE_LOCATION_TS001_TC003.input.apiID,
            CreateLocationServiceData.CREATE_ONE_LOCATION_TS001_TC003.input.config,
            CreateLocationServiceData.CREATE_ONE_LOCATION_TS001_TC003.input.input
        )
        expect(output.status).toBe(CreateLocationServiceData.CREATE_ONE_LOCATION_TS001_TC003.output.status)
        expect(output.message).toBe(CreateLocationServiceData.CREATE_ONE_LOCATION_TS001_TC003.output.message)        
	});

});