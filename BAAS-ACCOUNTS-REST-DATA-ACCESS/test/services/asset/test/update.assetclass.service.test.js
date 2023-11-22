

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update assetclass service class
**/

/**
 * Importing all required modules here
 */

const updateAssetClassServiceData = require("../data/update.assetclass.service.data")
const updateAssetClassService = require("../../../../src/services/asset/update.assetclass.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateAssetClassService = new updateAssetClassService();
const UpdateAssetClassServiceData = new updateAssetClassServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetclass.ts.001] | FunctionPath : [src/services/asset/update.assetclass.service.js/updateAssetClass()]", () => {

	test(UpdateAssetClassServiceData.UPDATE_ASSETCLASS_TS001_TC001.description, async () => {

        const output = await UpdateAssetClassService.updateAssetClass(
            UpdateAssetClassServiceData.UPDATE_ASSETCLASS_TS001_TC001.input.databaseConnector,
            UpdateAssetClassServiceData.UPDATE_ASSETCLASS_TS001_TC001.input.apiID,
            UpdateAssetClassServiceData.UPDATE_ASSETCLASS_TS001_TC001.input.config,
            UpdateAssetClassServiceData.UPDATE_ASSETCLASS_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateAssetClassServiceData.UPDATE_ASSETCLASS_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateAssetClassServiceData.UPDATE_ASSETCLASS_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateAssetClassServiceData.UPDATE_ASSETCLASS_TS001_TC001.output)[2])
	});

    test(UpdateAssetClassServiceData.UPDATE_ASSETCLASS_TS001_TC002.description, async () => {

        const output = await UpdateAssetClassService.updateAssetClass(
            UpdateAssetClassServiceData.UPDATE_ASSETCLASS_TS001_TC002.input.databaseConnector,
            UpdateAssetClassServiceData.UPDATE_ASSETCLASS_TS001_TC002.input.apiID,
            UpdateAssetClassServiceData.UPDATE_ASSETCLASS_TS001_TC002.input.config,
            UpdateAssetClassServiceData.UPDATE_ASSETCLASS_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateAssetClassServiceData.UPDATE_ASSETCLASS_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateAssetClassServiceData.UPDATE_ASSETCLASS_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateAssetClassServiceData.UPDATE_ASSETCLASS_TS001_TC002.output.message)        
	});

    test(UpdateAssetClassServiceData.UPDATE_ASSETCLASS_TS001_TC003.description, async () => {

        const output = await UpdateAssetClassService.updateAssetClass(
            UpdateAssetClassServiceData.UPDATE_ASSETCLASS_TS001_TC003.input.databaseConnector,
            UpdateAssetClassServiceData.UPDATE_ASSETCLASS_TS001_TC003.input.apiID,
            UpdateAssetClassServiceData.UPDATE_ASSETCLASS_TS001_TC003.input.config,
            UpdateAssetClassServiceData.UPDATE_ASSETCLASS_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateAssetClassServiceData.UPDATE_ASSETCLASS_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateAssetClassServiceData.UPDATE_ASSETCLASS_TS001_TC003.output.message)        
	});

});
