

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update assettype service class
**/

/**
 * Importing all required modules here
 */

const updateAssetTypeServiceData = require("../data/update.assettype.service.data")
const updateAssetTypeService = require("../../../../src/services/asset/update.assettype.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateAssetTypeService = new updateAssetTypeService();
const UpdateAssetTypeServiceData = new updateAssetTypeServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assettype.ts.001] | FunctionPath : [src/services/asset/update.assettype.service.js/updateAssetType()]", () => {

	test(UpdateAssetTypeServiceData.UPDATE_ASSETTYPE_TS001_TC001.description, async () => {

        const output = await UpdateAssetTypeService.updateAssetType(
            UpdateAssetTypeServiceData.UPDATE_ASSETTYPE_TS001_TC001.input.databaseConnector,
            UpdateAssetTypeServiceData.UPDATE_ASSETTYPE_TS001_TC001.input.apiID,
            UpdateAssetTypeServiceData.UPDATE_ASSETTYPE_TS001_TC001.input.config,
            UpdateAssetTypeServiceData.UPDATE_ASSETTYPE_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateAssetTypeServiceData.UPDATE_ASSETTYPE_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateAssetTypeServiceData.UPDATE_ASSETTYPE_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateAssetTypeServiceData.UPDATE_ASSETTYPE_TS001_TC001.output)[2])
	});

    test(UpdateAssetTypeServiceData.UPDATE_ASSETTYPE_TS001_TC002.description, async () => {

        const output = await UpdateAssetTypeService.updateAssetType(
            UpdateAssetTypeServiceData.UPDATE_ASSETTYPE_TS001_TC002.input.databaseConnector,
            UpdateAssetTypeServiceData.UPDATE_ASSETTYPE_TS001_TC002.input.apiID,
            UpdateAssetTypeServiceData.UPDATE_ASSETTYPE_TS001_TC002.input.config,
            UpdateAssetTypeServiceData.UPDATE_ASSETTYPE_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateAssetTypeServiceData.UPDATE_ASSETTYPE_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateAssetTypeServiceData.UPDATE_ASSETTYPE_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateAssetTypeServiceData.UPDATE_ASSETTYPE_TS001_TC002.output.message)        
	});

    test(UpdateAssetTypeServiceData.UPDATE_ASSETTYPE_TS001_TC003.description, async () => {

        const output = await UpdateAssetTypeService.updateAssetType(
            UpdateAssetTypeServiceData.UPDATE_ASSETTYPE_TS001_TC003.input.databaseConnector,
            UpdateAssetTypeServiceData.UPDATE_ASSETTYPE_TS001_TC003.input.apiID,
            UpdateAssetTypeServiceData.UPDATE_ASSETTYPE_TS001_TC003.input.config,
            UpdateAssetTypeServiceData.UPDATE_ASSETTYPE_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateAssetTypeServiceData.UPDATE_ASSETTYPE_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateAssetTypeServiceData.UPDATE_ASSETTYPE_TS001_TC003.output.message)        
	});

});
