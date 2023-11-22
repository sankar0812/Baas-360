/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete assetclass service class
**/

/**
 * Importing all required modules here
 */

const deleteAssetClassServiceData = require("../data/delete.assetclass.service.data")
const deleteAssetClassService = require("../../../../src/services/asset/delete.assetclass.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteAssetClassService = new deleteAssetClassService();
const DeleteAssetClassServiceData = new deleteAssetClassServiceData();


describe("TestSuiteID : [accounts.api.dataaccess.service.assetclass.ts.001] | FunctionPath : [src/services/asset/delete.assetclass.service.js/deleteOneAssetClass()]", () => {


	test(DeleteAssetClassServiceData.DELETE_ONE_ASSETCLASS_TS001_TC001.description, async () => {

        const output = await DeleteAssetClassService.deleteOneAssetClass(
            DeleteAssetClassServiceData.DELETE_ONE_ASSETCLASS_TS001_TC001.input.databaseConnector,
            DeleteAssetClassServiceData.DELETE_ONE_ASSETCLASS_TS001_TC001.input.apiID,
            DeleteAssetClassServiceData.DELETE_ONE_ASSETCLASS_TS001_TC001.input.config,
            DeleteAssetClassServiceData.DELETE_ONE_ASSETCLASS_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteAssetClassServiceData.DELETE_ONE_ASSETCLASS_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteAssetClassServiceData.DELETE_ONE_ASSETCLASS_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteAssetClassServiceData.DELETE_ONE_ASSETCLASS_TS001_TC001.output)[2])
	});



    test(DeleteAssetClassServiceData.DELETE_ONE_ASSETCLASS_TS001_TC002.description, async () => {

        const output = await DeleteAssetClassService.deleteOneAssetClass(
            DeleteAssetClassServiceData.DELETE_ONE_ASSETCLASS_TS001_TC002.input.databaseConnector,
            DeleteAssetClassServiceData.DELETE_ONE_ASSETCLASS_TS001_TC002.input.apiID,
            DeleteAssetClassServiceData.DELETE_ONE_ASSETCLASS_TS001_TC002.input.config,
            DeleteAssetClassServiceData.DELETE_ONE_ASSETCLASS_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteAssetClassServiceData.DELETE_ONE_ASSETCLASS_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteAssetClassServiceData.DELETE_ONE_ASSETCLASS_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteAssetClassServiceData.DELETE_ONE_ASSETCLASS_TS001_TC002.output.message)        
	});



    test(DeleteAssetClassServiceData.DELETE_ONE_ASSETCLASS_TS001_TC003.description, async () => {

        const output = await DeleteAssetClassService.deleteOneAssetClass(
            DeleteAssetClassServiceData.DELETE_ONE_ASSETCLASS_TS001_TC003.input.databaseConnector,
            DeleteAssetClassServiceData.DELETE_ONE_ASSETCLASS_TS001_TC003.input.apiID,
            DeleteAssetClassServiceData.DELETE_ONE_ASSETCLASS_TS001_TC003.input.config,
            DeleteAssetClassServiceData.DELETE_ONE_ASSETCLASS_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteAssetClassServiceData.DELETE_ONE_ASSETCLASS_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteAssetClassServiceData.DELETE_ONE_ASSETCLASS_TS001_TC003.output.message)        
	});

});
