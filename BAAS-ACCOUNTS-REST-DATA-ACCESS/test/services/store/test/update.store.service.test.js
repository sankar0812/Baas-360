

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update store service class
**/

/**
 * Importing all required modules here
 */

const updateStoreServiceData = require("../data/update.store.service.data")
const updateStoreService = require("../../../../src/services/store/update.store.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateStoreService = new updateStoreService();
const UpdateStoreServiceData = new updateStoreServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.store.ts.001] | FunctionPath : [src/services/store/update.store.service.js/updateStore()]", () => {

	test(UpdateStoreServiceData.UPDATE_STORE_TS001_TC001.description, async () => {

        const output = await UpdateStoreService.updateStore(
            UpdateStoreServiceData.UPDATE_STORE_TS001_TC001.input.databaseConnector,
            UpdateStoreServiceData.UPDATE_STORE_TS001_TC001.input.apiID,
            UpdateStoreServiceData.UPDATE_STORE_TS001_TC001.input.config,
            UpdateStoreServiceData.UPDATE_STORE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateStoreServiceData.UPDATE_STORE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateStoreServiceData.UPDATE_STORE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateStoreServiceData.UPDATE_STORE_TS001_TC001.output)[2])
	});

    test(UpdateStoreServiceData.UPDATE_STORE_TS001_TC002.description, async () => {

        const output = await UpdateStoreService.updateStore(
            UpdateStoreServiceData.UPDATE_STORE_TS001_TC002.input.databaseConnector,
            UpdateStoreServiceData.UPDATE_STORE_TS001_TC002.input.apiID,
            UpdateStoreServiceData.UPDATE_STORE_TS001_TC002.input.config,
            UpdateStoreServiceData.UPDATE_STORE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateStoreServiceData.UPDATE_STORE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateStoreServiceData.UPDATE_STORE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateStoreServiceData.UPDATE_STORE_TS001_TC002.output.message)        
	});

    test(UpdateStoreServiceData.UPDATE_STORE_TS001_TC003.description, async () => {

        const output = await UpdateStoreService.updateStore(
            UpdateStoreServiceData.UPDATE_STORE_TS001_TC003.input.databaseConnector,
            UpdateStoreServiceData.UPDATE_STORE_TS001_TC003.input.apiID,
            UpdateStoreServiceData.UPDATE_STORE_TS001_TC003.input.config,
            UpdateStoreServiceData.UPDATE_STORE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateStoreServiceData.UPDATE_STORE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateStoreServiceData.UPDATE_STORE_TS001_TC003.output.message)        
	});

});
