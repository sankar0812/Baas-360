/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete assetusagetype service class
**/

/**
 * Importing all required modules here
 */

const deleteAssetUsageTypeServiceData = require("../data/delete.assetusagetype.service.data")
const deleteAssetUsageTypeService = require("../../../../src/services/asset/delete.assetusagetype.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteAssetUsageTypeService = new deleteAssetUsageTypeService();
const DeleteAssetUsageTypeServiceData = new deleteAssetUsageTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetusagetype.ts.001] | FunctionPath : [src/services/asset/delete.assetusagetype.service.js/deleteOneAssetUsageType()]", () => {


	test(DeleteAssetUsageTypeServiceData.DELETE_ONE_ASSETUSAGETYPE_TS001_TC001.description, async () => {

        const output = await DeleteAssetUsageTypeService.deleteOneAssetUsageType(
            DeleteAssetUsageTypeServiceData.DELETE_ONE_ASSETUSAGETYPE_TS001_TC001.input.databaseConnector,
            DeleteAssetUsageTypeServiceData.DELETE_ONE_ASSETUSAGETYPE_TS001_TC001.input.apiID,
            DeleteAssetUsageTypeServiceData.DELETE_ONE_ASSETUSAGETYPE_TS001_TC001.input.config,
            DeleteAssetUsageTypeServiceData.DELETE_ONE_ASSETUSAGETYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteAssetUsageTypeServiceData.DELETE_ONE_ASSETUSAGETYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteAssetUsageTypeServiceData.DELETE_ONE_ASSETUSAGETYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteAssetUsageTypeServiceData.DELETE_ONE_ASSETUSAGETYPE_TS001_TC001.output)[2])
	});



    test(DeleteAssetUsageTypeServiceData.DELETE_ONE_ASSETUSAGETYPE_TS001_TC002.description, async () => {

        const output = await DeleteAssetUsageTypeService.deleteOneAssetUsageType(
            DeleteAssetUsageTypeServiceData.DELETE_ONE_ASSETUSAGETYPE_TS001_TC002.input.databaseConnector,
            DeleteAssetUsageTypeServiceData.DELETE_ONE_ASSETUSAGETYPE_TS001_TC002.input.apiID,
            DeleteAssetUsageTypeServiceData.DELETE_ONE_ASSETUSAGETYPE_TS001_TC002.input.config,
            DeleteAssetUsageTypeServiceData.DELETE_ONE_ASSETUSAGETYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteAssetUsageTypeServiceData.DELETE_ONE_ASSETUSAGETYPE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteAssetUsageTypeServiceData.DELETE_ONE_ASSETUSAGETYPE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteAssetUsageTypeServiceData.DELETE_ONE_ASSETUSAGETYPE_TS001_TC002.output.message)        
	});



    test(DeleteAssetUsageTypeServiceData.DELETE_ONE_ASSETUSAGETYPE_TS001_TC003.description, async () => {

        const output = await DeleteAssetUsageTypeService.deleteOneAssetUsageType(
            DeleteAssetUsageTypeServiceData.DELETE_ONE_ASSETUSAGETYPE_TS001_TC003.input.databaseConnector,
            DeleteAssetUsageTypeServiceData.DELETE_ONE_ASSETUSAGETYPE_TS001_TC003.input.apiID,
            DeleteAssetUsageTypeServiceData.DELETE_ONE_ASSETUSAGETYPE_TS001_TC003.input.config,
            DeleteAssetUsageTypeServiceData.DELETE_ONE_ASSETUSAGETYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteAssetUsageTypeServiceData.DELETE_ONE_ASSETUSAGETYPE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteAssetUsageTypeServiceData.DELETE_ONE_ASSETUSAGETYPE_TS001_TC003.output.message)        
	});

});
