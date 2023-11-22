/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete storetype service class
**/

/**
 * Importing all required modules here
 */

const deleteStoreTypeServiceData = require("../data/delete.storetype.service.data")
const deleteStoreTypeService = require("../../../../src/services/store/delete.storetype.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteStoreTypeService = new deleteStoreTypeService();
const DeleteStoreTypeServiceData = new deleteStoreTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.storetype.ts.001] | FunctionPath : [src/services/store/delete.storetype.service.js/deleteOneStoreType()]", () => {


	test(DeleteStoreTypeServiceData.DELETE_ONE_STORETYPE_TS001_TC001.description, async () => {

        const output = await DeleteStoreTypeService.deleteOneStoreType(
            DeleteStoreTypeServiceData.DELETE_ONE_STORETYPE_TS001_TC001.input.databaseConnector,
            DeleteStoreTypeServiceData.DELETE_ONE_STORETYPE_TS001_TC001.input.apiID,
            DeleteStoreTypeServiceData.DELETE_ONE_STORETYPE_TS001_TC001.input.config,
            DeleteStoreTypeServiceData.DELETE_ONE_STORETYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteStoreTypeServiceData.DELETE_ONE_STORETYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteStoreTypeServiceData.DELETE_ONE_STORETYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteStoreTypeServiceData.DELETE_ONE_STORETYPE_TS001_TC001.output)[2])
	});



    test(DeleteStoreTypeServiceData.DELETE_ONE_STORETYPE_TS001_TC002.description, async () => {

        const output = await DeleteStoreTypeService.deleteOneStoreType(
            DeleteStoreTypeServiceData.DELETE_ONE_STORETYPE_TS001_TC002.input.databaseConnector,
            DeleteStoreTypeServiceData.DELETE_ONE_STORETYPE_TS001_TC002.input.apiID,
            DeleteStoreTypeServiceData.DELETE_ONE_STORETYPE_TS001_TC002.input.config,
            DeleteStoreTypeServiceData.DELETE_ONE_STORETYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteStoreTypeServiceData.DELETE_ONE_STORETYPE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteStoreTypeServiceData.DELETE_ONE_STORETYPE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteStoreTypeServiceData.DELETE_ONE_STORETYPE_TS001_TC002.output.message)        
	});



    test(DeleteStoreTypeServiceData.DELETE_ONE_STORETYPE_TS001_TC003.description, async () => {

        const output = await DeleteStoreTypeService.deleteOneStoreType(
            DeleteStoreTypeServiceData.DELETE_ONE_STORETYPE_TS001_TC003.input.databaseConnector,
            DeleteStoreTypeServiceData.DELETE_ONE_STORETYPE_TS001_TC003.input.apiID,
            DeleteStoreTypeServiceData.DELETE_ONE_STORETYPE_TS001_TC003.input.config,
            DeleteStoreTypeServiceData.DELETE_ONE_STORETYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteStoreTypeServiceData.DELETE_ONE_STORETYPE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteStoreTypeServiceData.DELETE_ONE_STORETYPE_TS001_TC003.output.message)        
	});

});
