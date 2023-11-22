/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete assettype service class
**/

/**
 * Importing all required modules here
 */

const deleteAssetTypeServiceData = require("../data/delete.assettype.service.data")
const deleteAssetTypeService = require("../../../../src/services/asset/delete.assettype.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteAssetTypeService = new deleteAssetTypeService();
const DeleteAssetTypeServiceData = new deleteAssetTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assettype.ts.001] | FunctionPath : [src/services/asset/delete.assettype.service.js/deleteOneAssetType()]", () => {


	test(DeleteAssetTypeServiceData.DELETE_ONE_ASSETTYPE_TS001_TC001.description, async () => {

        const output = await DeleteAssetTypeService.deleteOneAssetType(
            DeleteAssetTypeServiceData.DELETE_ONE_ASSETTYPE_TS001_TC001.input.databaseConnector,
            DeleteAssetTypeServiceData.DELETE_ONE_ASSETTYPE_TS001_TC001.input.apiID,
            DeleteAssetTypeServiceData.DELETE_ONE_ASSETTYPE_TS001_TC001.input.config,
            DeleteAssetTypeServiceData.DELETE_ONE_ASSETTYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteAssetTypeServiceData.DELETE_ONE_ASSETTYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteAssetTypeServiceData.DELETE_ONE_ASSETTYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteAssetTypeServiceData.DELETE_ONE_ASSETTYPE_TS001_TC001.output)[2])
	});



    test(DeleteAssetTypeServiceData.DELETE_ONE_ASSETTYPE_TS001_TC002.description, async () => {

        const output = await DeleteAssetTypeService.deleteOneAssetType(
            DeleteAssetTypeServiceData.DELETE_ONE_ASSETTYPE_TS001_TC002.input.databaseConnector,
            DeleteAssetTypeServiceData.DELETE_ONE_ASSETTYPE_TS001_TC002.input.apiID,
            DeleteAssetTypeServiceData.DELETE_ONE_ASSETTYPE_TS001_TC002.input.config,
            DeleteAssetTypeServiceData.DELETE_ONE_ASSETTYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteAssetTypeServiceData.DELETE_ONE_ASSETTYPE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteAssetTypeServiceData.DELETE_ONE_ASSETTYPE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteAssetTypeServiceData.DELETE_ONE_ASSETTYPE_TS001_TC002.output.message)        
	});



    test(DeleteAssetTypeServiceData.DELETE_ONE_ASSETTYPE_TS001_TC003.description, async () => {

        const output = await DeleteAssetTypeService.deleteOneAssetType(
            DeleteAssetTypeServiceData.DELETE_ONE_ASSETTYPE_TS001_TC003.input.databaseConnector,
            DeleteAssetTypeServiceData.DELETE_ONE_ASSETTYPE_TS001_TC003.input.apiID,
            DeleteAssetTypeServiceData.DELETE_ONE_ASSETTYPE_TS001_TC003.input.config,
            DeleteAssetTypeServiceData.DELETE_ONE_ASSETTYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteAssetTypeServiceData.DELETE_ONE_ASSETTYPE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteAssetTypeServiceData.DELETE_ONE_ASSETTYPE_TS001_TC003.output.message)        
	});

});
