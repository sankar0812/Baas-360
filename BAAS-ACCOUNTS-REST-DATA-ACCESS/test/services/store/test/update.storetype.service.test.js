

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update storetype service class
**/

/**
 * Importing all required modules here
 */

const updateStoreTypeServiceData = require("../data/update.storetype.service.data")
const updateStoreTypeService = require("../../../../src/services/store/update.storetype.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateStoreTypeService = new updateStoreTypeService();
const UpdateStoreTypeServiceData = new updateStoreTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.storetype.ts.001] | FunctionPath : [src/services/store/update.storetype.service.js/updateStoreType()]", () => {

	test(UpdateStoreTypeServiceData.UPDATE_STORETYPE_TS001_TC001.description, async () => {

        const output = await UpdateStoreTypeService.updateStoreType(
            UpdateStoreTypeServiceData.UPDATE_STORETYPE_TS001_TC001.input.databaseConnector,
            UpdateStoreTypeServiceData.UPDATE_STORETYPE_TS001_TC001.input.apiID,
            UpdateStoreTypeServiceData.UPDATE_STORETYPE_TS001_TC001.input.config,
            UpdateStoreTypeServiceData.UPDATE_STORETYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateStoreTypeServiceData.UPDATE_STORETYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateStoreTypeServiceData.UPDATE_STORETYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateStoreTypeServiceData.UPDATE_STORETYPE_TS001_TC001.output)[2])
	});

    test(UpdateStoreTypeServiceData.UPDATE_STORETYPE_TS001_TC002.description, async () => {

        const output = await UpdateStoreTypeService.updateStoreType(
            UpdateStoreTypeServiceData.UPDATE_STORETYPE_TS001_TC002.input.databaseConnector,
            UpdateStoreTypeServiceData.UPDATE_STORETYPE_TS001_TC002.input.apiID,
            UpdateStoreTypeServiceData.UPDATE_STORETYPE_TS001_TC002.input.config,
            UpdateStoreTypeServiceData.UPDATE_STORETYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateStoreTypeServiceData.UPDATE_STORETYPE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateStoreTypeServiceData.UPDATE_STORETYPE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateStoreTypeServiceData.UPDATE_STORETYPE_TS001_TC002.output.message)        
	});

    test(UpdateStoreTypeServiceData.UPDATE_STORETYPE_TS001_TC003.description, async () => {

        const output = await UpdateStoreTypeService.updateStoreType(
            UpdateStoreTypeServiceData.UPDATE_STORETYPE_TS001_TC003.input.databaseConnector,
            UpdateStoreTypeServiceData.UPDATE_STORETYPE_TS001_TC003.input.apiID,
            UpdateStoreTypeServiceData.UPDATE_STORETYPE_TS001_TC003.input.config,
            UpdateStoreTypeServiceData.UPDATE_STORETYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateStoreTypeServiceData.UPDATE_STORETYPE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateStoreTypeServiceData.UPDATE_STORETYPE_TS001_TC003.output.message)        
	});

});
