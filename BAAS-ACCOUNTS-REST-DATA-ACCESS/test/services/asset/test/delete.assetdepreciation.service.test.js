/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete assetdepreciation service class
**/

/**
 * Importing all required modules here
 */

const deleteAssetDepreciationServiceData = require("../data/delete.assetdepreciation.service.data")
const deleteAssetDepreciationService = require("../../../../src/services/asset/delete.assetdepreciation.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteAssetDepreciationService = new deleteAssetDepreciationService();
const DeleteAssetDepreciationServiceData = new deleteAssetDepreciationServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetdepreciation.ts.001] | FunctionPath : [src/services/asset/delete.assetdepreciation.service.js/deleteOneAssetDepreciation()]", () => {


	test(DeleteAssetDepreciationServiceData.DELETE_ONE_ASSETDEPRECIATION_TS001_TC001.description, async () => {

        const output = await DeleteAssetDepreciationService.deleteOneAssetDepreciation(
            DeleteAssetDepreciationServiceData.DELETE_ONE_ASSETDEPRECIATION_TS001_TC001.input.databaseConnector,
            DeleteAssetDepreciationServiceData.DELETE_ONE_ASSETDEPRECIATION_TS001_TC001.input.apiID,
            DeleteAssetDepreciationServiceData.DELETE_ONE_ASSETDEPRECIATION_TS001_TC001.input.config,
            DeleteAssetDepreciationServiceData.DELETE_ONE_ASSETDEPRECIATION_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteAssetDepreciationServiceData.DELETE_ONE_ASSETDEPRECIATION_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteAssetDepreciationServiceData.DELETE_ONE_ASSETDEPRECIATION_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteAssetDepreciationServiceData.DELETE_ONE_ASSETDEPRECIATION_TS001_TC001.output)[2])
	});



    test(DeleteAssetDepreciationServiceData.DELETE_ONE_ASSETDEPRECIATION_TS001_TC002.description, async () => {

        const output = await DeleteAssetDepreciationService.deleteOneAssetDepreciation(
            DeleteAssetDepreciationServiceData.DELETE_ONE_ASSETDEPRECIATION_TS001_TC002.input.databaseConnector,
            DeleteAssetDepreciationServiceData.DELETE_ONE_ASSETDEPRECIATION_TS001_TC002.input.apiID,
            DeleteAssetDepreciationServiceData.DELETE_ONE_ASSETDEPRECIATION_TS001_TC002.input.config,
            DeleteAssetDepreciationServiceData.DELETE_ONE_ASSETDEPRECIATION_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteAssetDepreciationServiceData.DELETE_ONE_ASSETDEPRECIATION_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteAssetDepreciationServiceData.DELETE_ONE_ASSETDEPRECIATION_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteAssetDepreciationServiceData.DELETE_ONE_ASSETDEPRECIATION_TS001_TC002.output.message)        
	});



    test(DeleteAssetDepreciationServiceData.DELETE_ONE_ASSETDEPRECIATION_TS001_TC003.description, async () => {

        const output = await DeleteAssetDepreciationService.deleteOneAssetDepreciation(
            DeleteAssetDepreciationServiceData.DELETE_ONE_ASSETDEPRECIATION_TS001_TC003.input.databaseConnector,
            DeleteAssetDepreciationServiceData.DELETE_ONE_ASSETDEPRECIATION_TS001_TC003.input.apiID,
            DeleteAssetDepreciationServiceData.DELETE_ONE_ASSETDEPRECIATION_TS001_TC003.input.config,
            DeleteAssetDepreciationServiceData.DELETE_ONE_ASSETDEPRECIATION_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteAssetDepreciationServiceData.DELETE_ONE_ASSETDEPRECIATION_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteAssetDepreciationServiceData.DELETE_ONE_ASSETDEPRECIATION_TS001_TC003.output.message)        
	});

});
