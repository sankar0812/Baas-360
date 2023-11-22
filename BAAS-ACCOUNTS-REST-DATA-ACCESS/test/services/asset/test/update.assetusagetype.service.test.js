

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update assetusagetype service class
**/

/**
 * Importing all required modules here
 */

const updateAssetUsageTypeServiceData = require("../data/update.assetusagetype.service.data")
const updateAssetUsageTypeService = require("../../../../src/services/asset/update.assetusagetype.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateAssetUsageTypeService = new updateAssetUsageTypeService();
const UpdateAssetUsageTypeServiceData = new updateAssetUsageTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetusagetype.ts.001] | FunctionPath : [src/services/asset/update.assetusagetype.service.js/updateAssetUsageType()]", () => {

	test(UpdateAssetUsageTypeServiceData.UPDATE_ASSETUSAGETYPE_TS001_TC001.description, async () => {

        const output = await UpdateAssetUsageTypeService.updateAssetUsageType(
            UpdateAssetUsageTypeServiceData.UPDATE_ASSETUSAGETYPE_TS001_TC001.input.databaseConnector,
            UpdateAssetUsageTypeServiceData.UPDATE_ASSETUSAGETYPE_TS001_TC001.input.apiID,
            UpdateAssetUsageTypeServiceData.UPDATE_ASSETUSAGETYPE_TS001_TC001.input.config,
            UpdateAssetUsageTypeServiceData.UPDATE_ASSETUSAGETYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateAssetUsageTypeServiceData.UPDATE_ASSETUSAGETYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateAssetUsageTypeServiceData.UPDATE_ASSETUSAGETYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateAssetUsageTypeServiceData.UPDATE_ASSETUSAGETYPE_TS001_TC001.output)[2])
	});

    test(UpdateAssetUsageTypeServiceData.UPDATE_ASSETUSAGETYPE_TS001_TC002.description, async () => {

        const output = await UpdateAssetUsageTypeService.updateAssetUsageType(
            UpdateAssetUsageTypeServiceData.UPDATE_ASSETUSAGETYPE_TS001_TC002.input.databaseConnector,
            UpdateAssetUsageTypeServiceData.UPDATE_ASSETUSAGETYPE_TS001_TC002.input.apiID,
            UpdateAssetUsageTypeServiceData.UPDATE_ASSETUSAGETYPE_TS001_TC002.input.config,
            UpdateAssetUsageTypeServiceData.UPDATE_ASSETUSAGETYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateAssetUsageTypeServiceData.UPDATE_ASSETUSAGETYPE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateAssetUsageTypeServiceData.UPDATE_ASSETUSAGETYPE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateAssetUsageTypeServiceData.UPDATE_ASSETUSAGETYPE_TS001_TC002.output.message)        
	});

    test(UpdateAssetUsageTypeServiceData.UPDATE_ASSETUSAGETYPE_TS001_TC003.description, async () => {

        const output = await UpdateAssetUsageTypeService.updateAssetUsageType(
            UpdateAssetUsageTypeServiceData.UPDATE_ASSETUSAGETYPE_TS001_TC003.input.databaseConnector,
            UpdateAssetUsageTypeServiceData.UPDATE_ASSETUSAGETYPE_TS001_TC003.input.apiID,
            UpdateAssetUsageTypeServiceData.UPDATE_ASSETUSAGETYPE_TS001_TC003.input.config,
            UpdateAssetUsageTypeServiceData.UPDATE_ASSETUSAGETYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateAssetUsageTypeServiceData.UPDATE_ASSETUSAGETYPE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateAssetUsageTypeServiceData.UPDATE_ASSETUSAGETYPE_TS001_TC003.output.message)        
	});

});
