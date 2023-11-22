/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete store service class
**/

/**
 * Importing all required modules here
 */

const deleteStoreServiceData = require("../data/delete.store.service.data")
const deleteStoreService = require("../../../../src/services/store/delete.store.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteStoreService = new deleteStoreService();
const DeleteStoreServiceData = new deleteStoreServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.store.ts.001] | FunctionPath : [src/services/store/delete.store.service.js/deleteOneStore()]", () => {


	test(DeleteStoreServiceData.DELETE_ONE_STORE_TS001_TC001.description, async () => {

        const output = await DeleteStoreService.deleteOneStore(
            DeleteStoreServiceData.DELETE_ONE_STORE_TS001_TC001.input.databaseConnector,
            DeleteStoreServiceData.DELETE_ONE_STORE_TS001_TC001.input.apiID,
            DeleteStoreServiceData.DELETE_ONE_STORE_TS001_TC001.input.config,
            DeleteStoreServiceData.DELETE_ONE_STORE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteStoreServiceData.DELETE_ONE_STORE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteStoreServiceData.DELETE_ONE_STORE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteStoreServiceData.DELETE_ONE_STORE_TS001_TC001.output)[2])
	});



    test(DeleteStoreServiceData.DELETE_ONE_STORE_TS001_TC002.description, async () => {

        const output = await DeleteStoreService.deleteOneStore(
            DeleteStoreServiceData.DELETE_ONE_STORE_TS001_TC002.input.databaseConnector,
            DeleteStoreServiceData.DELETE_ONE_STORE_TS001_TC002.input.apiID,
            DeleteStoreServiceData.DELETE_ONE_STORE_TS001_TC002.input.config,
            DeleteStoreServiceData.DELETE_ONE_STORE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteStoreServiceData.DELETE_ONE_STORE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteStoreServiceData.DELETE_ONE_STORE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteStoreServiceData.DELETE_ONE_STORE_TS001_TC002.output.message)        
	});



    test(DeleteStoreServiceData.DELETE_ONE_STORE_TS001_TC003.description, async () => {

        const output = await DeleteStoreService.deleteOneStore(
            DeleteStoreServiceData.DELETE_ONE_STORE_TS001_TC003.input.databaseConnector,
            DeleteStoreServiceData.DELETE_ONE_STORE_TS001_TC003.input.apiID,
            DeleteStoreServiceData.DELETE_ONE_STORE_TS001_TC003.input.config,
            DeleteStoreServiceData.DELETE_ONE_STORE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteStoreServiceData.DELETE_ONE_STORE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteStoreServiceData.DELETE_ONE_STORE_TS001_TC003.output.message)        
	});

});
