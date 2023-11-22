

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update assetusage service class
**/

/**
 * Importing all required modules here
 */

const updateAssetUsageServiceData = require("../data/update.assetusage.service.data")
const updateAssetUsageService = require("../../../../src/services/asset/update.assetusage.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateAssetUsageService = new updateAssetUsageService();
const UpdateAssetUsageServiceData = new updateAssetUsageServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetusage.ts.001] | FunctionPath : [src/services/asset/update.assetusage.service.js/updateAssetUsage()]", () => {

	test(UpdateAssetUsageServiceData.UPDATE_ASSETUSAGE_TS001_TC001.description, async () => {

        const output = await UpdateAssetUsageService.updateAssetUsage(
            UpdateAssetUsageServiceData.UPDATE_ASSETUSAGE_TS001_TC001.input.databaseConnector,
            UpdateAssetUsageServiceData.UPDATE_ASSETUSAGE_TS001_TC001.input.apiID,
            UpdateAssetUsageServiceData.UPDATE_ASSETUSAGE_TS001_TC001.input.config,
            UpdateAssetUsageServiceData.UPDATE_ASSETUSAGE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateAssetUsageServiceData.UPDATE_ASSETUSAGE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateAssetUsageServiceData.UPDATE_ASSETUSAGE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateAssetUsageServiceData.UPDATE_ASSETUSAGE_TS001_TC001.output)[2])
	});

    test(UpdateAssetUsageServiceData.UPDATE_ASSETUSAGE_TS001_TC002.description, async () => {

        const output = await UpdateAssetUsageService.updateAssetUsage(
            UpdateAssetUsageServiceData.UPDATE_ASSETUSAGE_TS001_TC002.input.databaseConnector,
            UpdateAssetUsageServiceData.UPDATE_ASSETUSAGE_TS001_TC002.input.apiID,
            UpdateAssetUsageServiceData.UPDATE_ASSETUSAGE_TS001_TC002.input.config,
            UpdateAssetUsageServiceData.UPDATE_ASSETUSAGE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateAssetUsageServiceData.UPDATE_ASSETUSAGE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateAssetUsageServiceData.UPDATE_ASSETUSAGE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateAssetUsageServiceData.UPDATE_ASSETUSAGE_TS001_TC002.output.message)        
	});

    test(UpdateAssetUsageServiceData.UPDATE_ASSETUSAGE_TS001_TC003.description, async () => {

        const output = await UpdateAssetUsageService.updateAssetUsage(
            UpdateAssetUsageServiceData.UPDATE_ASSETUSAGE_TS001_TC003.input.databaseConnector,
            UpdateAssetUsageServiceData.UPDATE_ASSETUSAGE_TS001_TC003.input.apiID,
            UpdateAssetUsageServiceData.UPDATE_ASSETUSAGE_TS001_TC003.input.config,
            UpdateAssetUsageServiceData.UPDATE_ASSETUSAGE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateAssetUsageServiceData.UPDATE_ASSETUSAGE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateAssetUsageServiceData.UPDATE_ASSETUSAGE_TS001_TC003.output.message)        
	});

});
