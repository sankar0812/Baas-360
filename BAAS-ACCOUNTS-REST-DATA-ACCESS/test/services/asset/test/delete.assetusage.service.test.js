/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete assetusage service class
**/

/**
 * Importing all required modules here
 */

const deleteAssetUsageServiceData = require("../data/delete.assetusage.service.data")
const deleteAssetUsageService = require("../../../../src/services/asset/delete.assetusage.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteAssetUsageService = new deleteAssetUsageService();
const DeleteAssetUsageServiceData = new deleteAssetUsageServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetusage.ts.001] | FunctionPath : [src/services/asset/delete.assetusage.service.js/deleteOneAssetUsage()]", () => {


	test(DeleteAssetUsageServiceData.DELETE_ONE_ASSETUSAGE_TS001_TC001.description, async () => {

        const output = await DeleteAssetUsageService.deleteOneAssetUsage(
            DeleteAssetUsageServiceData.DELETE_ONE_ASSETUSAGE_TS001_TC001.input.databaseConnector,
            DeleteAssetUsageServiceData.DELETE_ONE_ASSETUSAGE_TS001_TC001.input.apiID,
            DeleteAssetUsageServiceData.DELETE_ONE_ASSETUSAGE_TS001_TC001.input.config,
            DeleteAssetUsageServiceData.DELETE_ONE_ASSETUSAGE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteAssetUsageServiceData.DELETE_ONE_ASSETUSAGE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteAssetUsageServiceData.DELETE_ONE_ASSETUSAGE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteAssetUsageServiceData.DELETE_ONE_ASSETUSAGE_TS001_TC001.output)[2])
	});



    test(DeleteAssetUsageServiceData.DELETE_ONE_ASSETUSAGE_TS001_TC002.description, async () => {

        const output = await DeleteAssetUsageService.deleteOneAssetUsage(
            DeleteAssetUsageServiceData.DELETE_ONE_ASSETUSAGE_TS001_TC002.input.databaseConnector,
            DeleteAssetUsageServiceData.DELETE_ONE_ASSETUSAGE_TS001_TC002.input.apiID,
            DeleteAssetUsageServiceData.DELETE_ONE_ASSETUSAGE_TS001_TC002.input.config,
            DeleteAssetUsageServiceData.DELETE_ONE_ASSETUSAGE_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteAssetUsageServiceData.DELETE_ONE_ASSETUSAGE_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteAssetUsageServiceData.DELETE_ONE_ASSETUSAGE_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteAssetUsageServiceData.DELETE_ONE_ASSETUSAGE_TS001_TC002.output.message)        
	});



    test(DeleteAssetUsageServiceData.DELETE_ONE_ASSETUSAGE_TS001_TC003.description, async () => {

        const output = await DeleteAssetUsageService.deleteOneAssetUsage(
            DeleteAssetUsageServiceData.DELETE_ONE_ASSETUSAGE_TS001_TC003.input.databaseConnector,
            DeleteAssetUsageServiceData.DELETE_ONE_ASSETUSAGE_TS001_TC003.input.apiID,
            DeleteAssetUsageServiceData.DELETE_ONE_ASSETUSAGE_TS001_TC003.input.config,
            DeleteAssetUsageServiceData.DELETE_ONE_ASSETUSAGE_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteAssetUsageServiceData.DELETE_ONE_ASSETUSAGE_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteAssetUsageServiceData.DELETE_ONE_ASSETUSAGE_TS001_TC003.output.message)        
	});

});
