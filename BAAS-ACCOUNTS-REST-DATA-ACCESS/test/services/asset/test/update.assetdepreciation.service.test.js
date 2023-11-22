

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update assetdepreciation service class
**/

/**
 * Importing all required modules here
 */

const updateAssetDepreciationServiceData = require("../data/update.assetdepreciation.service.data")
const updateAssetDepreciationService = require("../../../../src/services/asset/update.assetdepreciation.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateAssetDepreciationService = new updateAssetDepreciationService();
const UpdateAssetDepreciationServiceData = new updateAssetDepreciationServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetdepreciation.ts.001] | FunctionPath : [src/services/asset/update.assetdepreciation.service.js/updateAssetDepreciation()]", () => {

	test(UpdateAssetDepreciationServiceData.UPDATE_ASSETDEPRECIATION_TS001_TC001.description, async () => {

        const output = await UpdateAssetDepreciationService.updateAssetDepreciation(
            UpdateAssetDepreciationServiceData.UPDATE_ASSETDEPRECIATION_TS001_TC001.input.databaseConnector,
            UpdateAssetDepreciationServiceData.UPDATE_ASSETDEPRECIATION_TS001_TC001.input.apiID,
            UpdateAssetDepreciationServiceData.UPDATE_ASSETDEPRECIATION_TS001_TC001.input.config,
            UpdateAssetDepreciationServiceData.UPDATE_ASSETDEPRECIATION_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateAssetDepreciationServiceData.UPDATE_ASSETDEPRECIATION_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateAssetDepreciationServiceData.UPDATE_ASSETDEPRECIATION_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateAssetDepreciationServiceData.UPDATE_ASSETDEPRECIATION_TS001_TC001.output)[2])
	});

    test(UpdateAssetDepreciationServiceData.UPDATE_ASSETDEPRECIATION_TS001_TC002.description, async () => {

        const output = await UpdateAssetDepreciationService.updateAssetDepreciation(
            UpdateAssetDepreciationServiceData.UPDATE_ASSETDEPRECIATION_TS001_TC002.input.databaseConnector,
            UpdateAssetDepreciationServiceData.UPDATE_ASSETDEPRECIATION_TS001_TC002.input.apiID,
            UpdateAssetDepreciationServiceData.UPDATE_ASSETDEPRECIATION_TS001_TC002.input.config,
            UpdateAssetDepreciationServiceData.UPDATE_ASSETDEPRECIATION_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateAssetDepreciationServiceData.UPDATE_ASSETDEPRECIATION_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateAssetDepreciationServiceData.UPDATE_ASSETDEPRECIATION_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateAssetDepreciationServiceData.UPDATE_ASSETDEPRECIATION_TS001_TC002.output.message)        
	});

    test(UpdateAssetDepreciationServiceData.UPDATE_ASSETDEPRECIATION_TS001_TC003.description, async () => {

        const output = await UpdateAssetDepreciationService.updateAssetDepreciation(
            UpdateAssetDepreciationServiceData.UPDATE_ASSETDEPRECIATION_TS001_TC003.input.databaseConnector,
            UpdateAssetDepreciationServiceData.UPDATE_ASSETDEPRECIATION_TS001_TC003.input.apiID,
            UpdateAssetDepreciationServiceData.UPDATE_ASSETDEPRECIATION_TS001_TC003.input.config,
            UpdateAssetDepreciationServiceData.UPDATE_ASSETDEPRECIATION_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateAssetDepreciationServiceData.UPDATE_ASSETDEPRECIATION_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateAssetDepreciationServiceData.UPDATE_ASSETDEPRECIATION_TS001_TC003.output.message)        
	});

});
